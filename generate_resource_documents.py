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
        logging.FileHandler("resource_document_generation.log"),
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

# Load expansion file for a resource
def load_expansion_file(category_name, resource_id):
    try:
        category_dir = os.path.join("resource_expansions", category_name.replace(" & ", "_").replace(" ", "_"))
        file_path = os.path.join(category_dir, f"{resource_id}.md")
        
        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            logger.info(f"Successfully loaded expansion for {resource_id}")
            return content
        else:
            logger.warning(f"Expansion file not found for {resource_id}")
            return None
    except Exception as e:
        logger.error(f"Error loading expansion file for {resource_id}: {str(e)}")
        return None

# Load useful context resources
def load_useful_context(resource, resources_json):
    context_resources = []
    
    if "usefulContext" in resource:
        for context_id in resource["usefulContext"]:
            # Find the category for this context resource
            category_name = None
            context_resource = None
            
            for category in resources_json["foundationalResources"]:
                for res in category["resources"]:
                    if res["id"] == context_id:
                        category_name = category["category"]
                        context_resource = res
                        break
                if category_name:
                    break
            
            if category_name and context_resource:
                # Try to load the expansion for this context resource
                expansion = load_expansion_file(category_name, context_id)
                if expansion:
                    context_resources.append({
                        "id": context_id,
                        "title": context_resource["title"],
                        "description": context_resource["description"],
                        "expansion": expansion
                    })
    
    logger.info(f"Loaded {len(context_resources)} useful context resources")
    return context_resources

# Function to call Claude API
def call_claude(prompt, system_prompt):
    logger.info("Calling Claude API...")
    headers = {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    
    data = {
        "model": "claude-3-7-sonnet-latest",
        "max_tokens": 4000,
        "system": system_prompt,
        "messages": [{"role": "user", "content": prompt}]
    }
    
    try:
        response = requests.post(
            "https://api.anthropic.com/v1/messages",
            headers=headers,
            json=data,
            timeout=60
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

# Generate the main resource document
def generate_main_resource(resource, presentation_content, expansion, context_resources):
    resource_id = resource["id"]
    resource_title = resource["title"]
    
    logger.info(f"Generating main document for resource: {resource_title}")
    
    # Prepare context resources text
    context_resources_text = ""
    for ctx in context_resources:
        context_resources_text += f"\n\n--- USEFUL CONTEXT: {ctx['title']} ---\n"
        context_resources_text += f"Description: {ctx['description']}\n"
        # Include just the first 1000 characters of each expansion to avoid token limits
        context_resources_text += ctx['expansion'][:1000] + "...\n"
    
    system_prompt = f"""You are an expert in business strategy and AI integration. You have access to the following context:

1. KinOS Ventures Framework Presentation:
{presentation_content}

2. Resource Information:
{json.dumps(resource, indent=2)}

3. Detailed Expansion of this Resource:
{expansion}

4. Related Resources for Context:
{context_resources_text}

Your task is to create a comprehensive, well-structured document for this resource that incorporates all the information provided.
"""

    prompt = f"""Please create a comprehensive document for the resource "{resource['title']}" that:

1. Begins with a clear executive summary of the resource's purpose and importance
2. Incorporates the detailed outline and AI integration specifics from the expansion
3. Integrates insights from the related context resources where relevant
4. Maintains a cohesive narrative that aligns with the KinOS Ventures framework
5. Uses clear markdown formatting with headings, subheadings, bullet points, and emphasis where appropriate
6. Includes practical examples and implementation guidance

The document should be thorough yet concise, focusing on actionable information that would be immediately useful to the KinOS Ventures team.
"""

    main_content = call_claude(prompt, system_prompt)
    if main_content:
        logger.info(f"Successfully generated main document for {resource_title}")
    else:
        logger.error(f"Failed to generate main document for {resource_title}")
    
    return main_content

# Check if a main resource document already exists
def main_document_exists(resource_id):
    file_path = os.path.join("resource_documents", f"{resource_id}.md")
    return os.path.exists(file_path)

# Process a single resource
def process_resource(resource, category_name, presentation_content, resources_json):
    resource_id = resource["id"]
    resource_title = resource["title"]
    
    # Check if main document already exists
    if main_document_exists(resource_id):
        logger.info(f"Skipping {resource_title} - main document already exists")
        return
    
    # Load the expansion
    expansion = load_expansion_file(category_name, resource_id)
    if not expansion:
        logger.error(f"Cannot generate main document for {resource_title} - expansion not found")
        return
    
    # Load useful context resources
    context_resources = load_useful_context(resource, resources_json)
    
    # Generate the main document
    main_content = generate_main_resource(resource, presentation_content, expansion, context_resources)
    
    if main_content:
        # Save to file
        os.makedirs("resource_documents", exist_ok=True)
        output_file = os.path.join("resource_documents", f"{resource_id}.md")
        with open(output_file, "w", encoding="utf-8") as f:
            f.write(f"# {resource_title}\n\n")
            f.write(main_content)
        
        logger.info(f"Saved main document for {resource_title} to {output_file}")
    else:
        logger.error(f"Failed to save main document for {resource_title}")

# Main function to process all resources
def process_all_resources():
    logger.info("Starting main resource document generation process")
    
    try:
        presentation_content, resources_json = load_context_files()
        
        # Create output directory if it doesn't exist
        os.makedirs("resource_documents", exist_ok=True)
        logger.info("Created resource_documents directory")
        
        # Collect all resources to process
        all_resources = []
        
        for category in resources_json["foundationalResources"]:
            category_name = category["category"]
            
            for resource in category["resources"]:
                resource_id = resource["id"]
                
                # Check if main document already exists
                if main_document_exists(resource_id):
                    logger.info(f"Skipping {resource['title']} - main document already exists")
                else:
                    all_resources.append({
                        "resource": resource,
                        "category_name": category_name
                    })
        
        logger.info(f"Found {len(all_resources)} resources to process")
        
        if not all_resources:
            logger.info("No new resources to process. All main documents already exist.")
            return
        
        # Process resources in batches of 5
        batch_size = 5
        
        for i in range(0, len(all_resources), batch_size):
            batch = all_resources[i:i+batch_size]
            logger.info(f"Processing batch {i//batch_size + 1} of {(len(all_resources) + batch_size - 1) // batch_size} ({len(batch)} resources)")
            
            # Process the batch with ThreadPoolExecutor
            with concurrent.futures.ThreadPoolExecutor(max_workers=batch_size) as executor:
                futures = []
                for item in batch:
                    futures.append(executor.submit(
                        process_resource, 
                        item["resource"], 
                        item["category_name"],
                        presentation_content,
                        resources_json
                    ))
                
                # Wait for all to complete
                concurrent.futures.wait(futures)
            
            # Add a delay between batches to avoid rate limiting
            if i + batch_size < len(all_resources):
                logger.info("Waiting between batches...")
                time.sleep(5)
        
        logger.info("Main resource document generation process completed")
        
    except Exception as e:
        logger.error(f"Error in process_all_resources: {str(e)}")

if __name__ == "__main__":
    try:
        process_all_resources()
    except Exception as e:
        logger.error(f"Unhandled exception: {str(e)}")
