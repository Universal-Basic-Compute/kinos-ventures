import json
import os
import requests
import time
import logging
from dotenv import load_dotenv
import concurrent.futures

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("resource_expansion.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variable
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")

# Check if API key is available
if not ANTHROPIC_API_KEY:
    logger.error("ANTHROPIC_API_KEY not found in environment variables. Please add it to your .env file.")
    raise ValueError("ANTHROPIC_API_KEY not found in environment variables. Please add it to your .env file.")

# Load the context files
def load_context_files():
    logger.info("Loading context files...")
    try:
        with open("docs/presentation.txt", "r", encoding="utf-8") as f:
            presentation_content = f.read()
        logger.info("Successfully loaded presentation.txt")
        
        with open("public/resources.json", "r", encoding="utf-8") as f:
            resources_json = json.load(f)
        logger.info(f"Successfully loaded resources.json with {sum(len(category['resources']) for category in resources_json['foundationalResources'])} resources")
        
        return presentation_content, resources_json
    except Exception as e:
        logger.error(f"Error loading context files: {str(e)}")
        raise

# Function to call Claude API
def call_claude(prompt, system_prompt):
    logger.info("Calling Claude API...")
    headers = {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    
    data = {
        "model": "claude-3-7-sonnet-latest",  # Using the latest model
        "max_tokens": 4000,
        "system": system_prompt,
        "messages": [{"role": "user", "content": prompt}]
    }
    
    try:
        response = requests.post(
            "https://api.anthropic.com/v1/messages",
            headers=headers,
            json=data,
            timeout=60  # Add timeout
        )
        
        if response.status_code != 200:
            logger.error(f"API Error: {response.status_code}")
            logger.error(response.text)
            return None
        
        logger.info("Successfully received response from Claude API")
        return response.json()["content"][0]["text"]
    except Exception as e:
        logger.error(f"Error calling Claude API: {str(e)}")
        return None

# Generate detailed outline and AI integration specifics for a resource
def generate_resource_expansion(resource, presentation_content):
    resource_id = resource["id"]
    resource_title = resource["title"]
    
    logger.info(f"Generating expansion for resource: {resource_title}")
    
    system_prompt = f"""You are an expert in business strategy and AI integration. You have access to the following context files:

1. KinOS Ventures Framework Presentation:
{presentation_content}

2. Resource Information:
{json.dumps(resource, indent=2)}

Your task is to create a detailed expansion of this resource with two specific components:
1. A detailed outline with sections, subsections, and key points
2. AI integration specifics that explain exactly how AI can be used to enhance or implement this resource

Be practical, specific, and actionable in your recommendations.
"""

    prompt = f"""Please expand on the resource "{resource['title']}" by creating:

1. A DETAILED OUTLINE with clear sections, subsections, and key points that would form the structure of this document.

2. AI INTEGRATION SPECIFICS that detail exactly how AI can be used to enhance or implement this resource, including specific AI tools, workflows, or systems that could be developed.

Base your expansion on the resource's description, direction, and its relationship to other resources in the KinOS Ventures framework.

Please format your response clearly with markdown headings and bullet points.
"""

    expansion = call_claude(prompt, system_prompt)
    if expansion:
        logger.info(f"Successfully generated expansion for {resource_title}")
    else:
        logger.error(f"Failed to generate expansion for {resource_title}")
    
    return expansion

# Check if a resource expansion already exists
def expansion_exists(category_name, resource_id):
    category_dir = os.path.join("resource_expansions", category_name.replace(" & ", "_").replace(" ", "_"))
    file_path = os.path.join(category_dir, f"{resource_id}.md")
    return os.path.exists(file_path)

# Main function to process all resources
def process_all_resources():
    logger.info("Starting resource expansion process")
    
    try:
        presentation_content, resources_json = load_context_files()
        
        # Create output directory if it doesn't exist
        os.makedirs("resource_expansions", exist_ok=True)
        logger.info("Created resource_expansions directory")
        
        # Collect all resources to process
        all_resources = []
        skipped_resources = []
        
        for category in resources_json["foundationalResources"]:
            category_name = category["category"]
            category_dir = os.path.join("resource_expansions", category_name.replace(" & ", "_").replace(" ", "_"))
            os.makedirs(category_dir, exist_ok=True)
            
            for resource in category["resources"]:
                resource_id = resource["id"]
                
                # Check if expansion already exists
                if expansion_exists(category_name, resource_id):
                    logger.info(f"Skipping {resource['title']} - expansion already exists")
                    skipped_resources.append({
                        "resource": resource,
                        "category_name": category_name
                    })
                else:
                    all_resources.append({
                        "resource": resource,
                        "category_name": category_name
                    })
        
        logger.info(f"Found {len(all_resources)} resources to process and {len(skipped_resources)} existing expansions to skip")
        
        if not all_resources:
            logger.info("No new resources to process. All expansions already exist.")
            return
        
        # Process resources in batches of 10
        batch_size = 10
        
        for i in range(0, len(all_resources), batch_size):
            batch = all_resources[i:i+batch_size]
            logger.info(f"Processing batch {i//batch_size + 1} of {(len(all_resources) + batch_size - 1) // batch_size} ({len(batch)} resources)")
            
            # Create a list of resources for this batch
            resource_batch = [item["resource"] for item in batch]
            category_names = [item["category_name"] for item in batch]
            
            # Process the batch with ThreadPoolExecutor
            with concurrent.futures.ThreadPoolExecutor(max_workers=batch_size) as executor:
                futures = []
                for j, resource in enumerate(resource_batch):
                    futures.append(executor.submit(
                        generate_resource_expansion, 
                        resource, 
                        presentation_content
                    ))
                
                # Collect results as they complete
                for j, future in enumerate(concurrent.futures.as_completed(futures)):
                    resource = resource_batch[j]
                    category_name = category_names[j]
                    resource_id = resource["id"]
                    resource_title = resource["title"]
                    
                    try:
                        expansion = future.result()
                        if expansion:
                            # Create category directory
                            category_dir = os.path.join("resource_expansions", category_name.replace(" & ", "_").replace(" ", "_"))
                            
                            # Save to file
                            output_file = os.path.join(category_dir, f"{resource_id}.md")
                            with open(output_file, "w", encoding="utf-8") as f:
                                f.write(f"# {resource_title}\n\n")
                                f.write(expansion)
                            
                            logger.info(f"Saved {resource_title} to {output_file}")
                        else:
                            logger.error(f"Failed to generate expansion for {resource_title}")
                    except Exception as e:
                        logger.error(f"Error processing {resource_title}: {str(e)}")
            
            # Add a delay between batches to avoid rate limiting
            if i + batch_size < len(all_resources):
                logger.info("Waiting between batches...")
                time.sleep(5)
        
        logger.info("Resource expansion process completed")
        
    except Exception as e:
        logger.error(f"Error in process_all_resources: {str(e)}")

if __name__ == "__main__":
    try:
        process_all_resources()
    except Exception as e:
        logger.error(f"Unhandled exception: {str(e)}")
