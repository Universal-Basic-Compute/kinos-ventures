import json
import os
import requests
import time
from dotenv import load_dotenv
import concurrent.futures

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variable
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")

# Check if API key is available
if not ANTHROPIC_API_KEY:
    raise ValueError("ANTHROPIC_API_KEY not found in environment variables. Please add it to your .env file.")

# Load the context files
def load_context_files():
    with open("docs/presentation.txt", "r", encoding="utf-8") as f:
        presentation_content = f.read()
    
    with open("public/resources.json", "r", encoding="utf-8") as f:
        resources_json = json.load(f)
    
    return presentation_content, resources_json

# Function to call Claude API
def call_claude(prompt, system_prompt):
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
    
    response = requests.post(
        "https://api.anthropic.com/v1/messages",
        headers=headers,
        json=data
    )
    
    if response.status_code != 200:
        print(f"Error: {response.status_code}")
        print(response.text)
        return None
    
    return response.json()["content"][0]["text"]

# Generate detailed outline and AI integration specifics for a resource
def generate_resource_expansion(resource, presentation_content):
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

    return call_claude(prompt, system_prompt)

# Process a batch of resources
def process_resource_batch(batch, presentation_content, category_name):
    results = []
    
    for resource in batch:
        resource_id = resource["id"]
        resource_title = resource["title"]
        print(f"  Processing resource: {resource_title}")
        
        # Generate expansion
        expansion = generate_resource_expansion(resource, presentation_content)
        
        results.append({
            "resource": resource,
            "expansion": expansion,
            "category_name": category_name
        })
        
        # Add a small delay between API calls within a batch
        time.sleep(1)
    
    return results

# Main function to process all resources
def process_all_resources():
    presentation_content, resources_json = load_context_files()
    
    # Create output directory if it doesn't exist
    os.makedirs("resource_expansions", exist_ok=True)
    
    # Collect all resources to process
    all_resources = []
    for category in resources_json["foundationalResources"]:
        category_name = category["category"]
        for resource in category["resources"]:
            all_resources.append({
                "resource": resource,
                "category_name": category_name
            })
    
    # Process resources in batches of 10
    batch_size = 10
    all_results = []
    
    for i in range(0, len(all_resources), batch_size):
        batch = all_resources[i:i+batch_size]
        print(f"Processing batch {i//batch_size + 1} of {(len(all_resources) + batch_size - 1) // batch_size}")
        
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
                        os.makedirs(category_dir, exist_ok=True)
                        
                        # Save to file
                        output_file = os.path.join(category_dir, f"{resource_id}.md")
                        with open(output_file, "w", encoding="utf-8") as f:
                            f.write(f"# {resource_title}\n\n")
                            f.write(expansion)
                        
                        print(f"    Saved {resource_title} to {output_file}")
                    else:
                        print(f"    Failed to generate expansion for {resource_title}")
                except Exception as e:
                    print(f"    Error processing {resource_title}: {str(e)}")
        
        # Add a delay between batches to avoid rate limiting
        if i + batch_size < len(all_resources):
            print("Waiting between batches...")
            time.sleep(5)

if __name__ == "__main__":
    process_all_resources()
