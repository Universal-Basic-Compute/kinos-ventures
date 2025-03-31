import os
import json
import requests
import time
import logging
import concurrent.futures
from dotenv import load_dotenv

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("generate_resource_tsx.log"),
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

def load_resources():
    """Load resources from resources.json file"""
    try:
        with open("public/resources.json", "r", encoding="utf-8") as f:
            resources_json = json.load(f)
        logger.info(f"Successfully loaded resources.json with {sum(len(category['resources']) for category in resources_json['foundationalResources'])} resources")
        return resources_json
    except Exception as e:
        logger.error(f"Error loading resources.json: {str(e)}")
        raise

def load_resource_document(resource_id):
    """Load resource document content"""
    try:
        file_path = os.path.join("resource_documents", f"{resource_id}.md")
        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            logger.info(f"Successfully loaded document for {resource_id}")
            return content
        else:
            logger.warning(f"Document file not found for {resource_id}")
            return None
    except Exception as e:
        logger.error(f"Error loading document for {resource_id}: {str(e)}")
        return None

def load_useful_context(resource, resources_json):
    """Load useful context resources"""
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
                # Try to load the document for this context resource
                document = load_resource_document(context_id)
                if document:
                    context_resources.append({
                        "id": context_id,
                        "title": context_resource["title"],
                        "description": context_resource["description"],
                        "document": document
                    })
    
    logger.info(f"Loaded {len(context_resources)} useful context resources")
    return context_resources

def load_presentation():
    """Load presentation.txt content"""
    try:
        with open("docs/presentation.txt", "r", encoding="utf-8") as f:
            presentation_content = f.read()
        logger.info("Successfully loaded presentation.txt")
        return presentation_content
    except Exception as e:
        logger.error(f"Error loading presentation.txt: {str(e)}")
        return ""

def generate_image_prompt_with_claude(resource, category_name):
    """Generate an image prompt using Claude"""
    logger.info(f"Generating image prompt for {resource['id']}")
    
    headers = {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    
    system_prompt = f"""You are an expert at creating prompts for image generation. 
    You need to create a detailed prompt for an image that represents the resource: {resource['title']}.
    This resource is part of the category: {category_name}.
    The image should be professional, abstract, and suitable for a business website about AI technology.
    Focus on creating a visually appealing representation that captures the essence of the resource.
    """
    
    user_prompt = f"""Please create a detailed image generation prompt for:

Resource Title: {resource['title']}
Resource Description: {resource['description']}
Resource Presentation: {resource['presentation']}

The image should be professional, abstract, and visually appealing, suitable for a business website about AI technology.
Use a style that incorporates subtle technology elements, abstract shapes, and a color palette that aligns with the category.
The image will be used as a header image for this resource on our website.

Provide only the image prompt, nothing else.
"""
    
    data = {
        "model": "claude-3-7-sonnet-latest",
        "max_tokens": 1000,
        "system": system_prompt,
        "messages": [{"role": "user", "content": user_prompt}]
    }
    
    try:
        response = requests.post(
            "https://api.anthropic.com/v1/messages",
            headers=headers,
            json=data,
            timeout=60  # Increased from 30 to 60
        )
        
        if response.status_code != 200:
            logger.error(f"API Error: {response.status_code}")
            logger.error(response.text)
            return None
        
        prompt = response.json()["content"][0]["text"].strip()
        logger.info(f"Successfully generated image prompt for {resource['id']}")
        return prompt
    except Exception as e:
        logger.error(f"Error generating image prompt: {str(e)}")
        return None

def generate_image_ideogram(prompt, resource_id):
    """Generate an image using Ideogram API (if available)"""
    IDEOGRAM_API_KEY = os.getenv("IDEOGRAM_API_KEY")
    
    if not IDEOGRAM_API_KEY:
        logger.warning("IDEOGRAM_API_KEY not found, skipping image generation")
        return None
    
    logger.info(f"Generating image for {resource_id} using Ideogram")
    
    headers = {
        "Authorization": f"Bearer {IDEOGRAM_API_KEY}",
        "Content-Type": "application/json"
    }
    
    data = {
        "prompt": prompt,
        "aspect_ratio": "1:1",
        "style": "abstract, professional, business, technology"
    }
    
    try:
        response = requests.post(
            "https://api.ideogram.ai/api/v1/images",
            headers=headers,
            json=data,
            timeout=120  # Increased from 60 to 120
        )
        
        if response.status_code != 200:
            logger.error(f"Ideogram API Error: {response.status_code}")
            logger.error(response.text)
            return None
        
        image_url = response.json()["images"][0]["url"]
        logger.info(f"Successfully generated image for {resource_id}")
        return image_url
    except Exception as e:
        logger.error(f"Error generating image: {str(e)}")
        return None

def save_image(image_url, resource_id, category_name):
    """Save image from URL to file"""
    if not image_url:
        return False
    
    category_dir = category_name.lower().replace(" & ", "_").replace(" ", "_")
    os.makedirs(f"public/categories/{category_dir}", exist_ok=True)
    
    try:
        response = requests.get(image_url, timeout=60)  # Increased from 30 to 60
        if response.status_code == 200:
            with open(f"public/categories/{category_dir}/{resource_id}.png", "wb") as f:
                f.write(response.content)
            logger.info(f"Saved image for {resource_id}")
            return True
        else:
            logger.error(f"Error downloading image: {response.status_code}")
            return False
    except Exception as e:
        logger.error(f"Error saving image: {str(e)}")
        return False

def image_exists(resource_id, category_name):
    """Check if image already exists"""
    category_dir = category_name.lower().replace(" & ", "_").replace(" ", "_")
    return os.path.exists(f"public/categories/{category_dir}/{resource_id}.png")

def generate_tsx_component(resource, category_name, document, context_resources, presentation_content):
    """Generate TSX component using Claude"""
    logger.info(f"Generating TSX component for {resource['id']}")
    
    # Prepare context resources text
    context_resources_text = ""
    for ctx in context_resources:
        context_resources_text += f"\n\n--- USEFUL CONTEXT: {ctx['title']} ---\n"
        context_resources_text += f"Description: {ctx['description']}\n"
        context_resources_text += ctx['document']
    
    headers = {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    
    system_prompt = f"""You are an expert React/Next.js developer. You need to create a TSX component for a resource page.
    The component should display the resource content in a well-structured, visually appealing way.
    Use modern React patterns, Tailwind CSS for styling, and ensure the component is responsive.
    
    IMPORTANT: The site uses a dark theme with slate colors. All text should be white or light gray on dark backgrounds.
    Use bg-slate-900, bg-slate-800, text-white, text-gray-300, etc. for styling.
    
    For prose content, use the prose-invert class and additional prose styling classes:
    prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white 
    prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 
    prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 
    prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 
    prose-th:text-gray-200 prose-td:text-gray-300
    
    Here is the context information:
    
    1. KinOS Ventures Framework:
    {presentation_content}
    
    2. Resource Information:
    {json.dumps(resource, indent=2)}
    
    3. Resource Document:
    {document if document else "No document available yet."}
    
    4. Related Context Resources:
    {context_resources_text}
    """
    
    user_prompt = f"""Please create a TSX component for the resource page for "{resource['title']}".

The component should:
1. Be a client component (use 'use client' directive)
2. Import necessary components and hooks
3. Display the resource content in a well-structured, visually appealing way
4. Use Tailwind CSS for styling with a DARK THEME (bg-slate-900, bg-slate-800, text-white, text-gray-300)
5. Be responsive (mobile, tablet, desktop)
6. Include sections for:
   - Resource header with title and description
   - Main content (from the document)
   - Related resources section
   - Interactive elements where appropriate

For markdown content, use the prose-invert class and additional prose styling classes to ensure text is visible on dark backgrounds.

The component will be placed in app/resources/{category_name.lower().replace(" & ", "-").replace(" ", "-")}/{resource['id']}/page.tsx

Please provide the complete TSX code for this component.
"""
    
    data = {
        "model": "claude-3-7-sonnet-latest",
        "max_tokens": 64000,  # Using the maximum token limit
        "system": system_prompt,
        "messages": [{"role": "user", "content": user_prompt}]
    }
    
    try:
        response = requests.post(
            "https://api.anthropic.com/v1/messages",
            headers=headers,
            json=data,
            timeout=300  # Increased from 240 to 300 for larger responses
        )
        
        if response.status_code != 200:
            logger.error(f"API Error: {response.status_code}")
            logger.error(response.text)
            return None
        
        tsx_code = response.json()["content"][0]["text"].strip()
        logger.info(f"Successfully generated TSX component for {resource['id']}")
        return tsx_code
    except Exception as e:
        logger.error(f"Error generating TSX component: {str(e)}")
        return None

def save_tsx_component(tsx_code, resource_id, category_name):
    """Save TSX component to file"""
    if not tsx_code:
        return False
    
    # Extract code between ```tsx and ``` markers if present
    if "```tsx" in tsx_code and "```" in tsx_code.split("```tsx", 1)[1]:
        # Split by ```tsx and take the second part
        code_part = tsx_code.split("```tsx", 1)[1]
        # Split by ``` and take the first part
        tsx_code = code_part.split("```", 1)[0].strip()
        logger.info(f"Extracted code between tsx markers for {resource_id}")
    
    category_slug = category_name.lower().replace(" & ", "-").replace(" ", "-")
    dir_path = f"app/resources/{category_slug}/{resource_id}"
    os.makedirs(dir_path, exist_ok=True)
    
    try:
        with open(f"{dir_path}/page.tsx", "w", encoding="utf-8") as f:
            f.write(tsx_code)
        logger.info(f"Saved TSX component for {resource_id}")
        return True
    except Exception as e:
        logger.error(f"Error saving TSX component: {str(e)}")
        return False

def tsx_component_exists(resource_id, category_name):
    """Check if TSX component already exists"""
    category_slug = category_name.lower().replace(" & ", "-").replace(" ", "-")
    return os.path.exists(f"app/resources/{category_slug}/{resource_id}/page.tsx")

def process_resource(resource, category_name, resources_json, presentation_content):
    """Process a single resource"""
    resource_id = resource["id"]
    
    # Check if TSX component already exists
    if tsx_component_exists(resource_id, category_name):
        logger.info(f"Skipping {resource_id} - TSX component already exists")
        return
    
    # Load resource document
    document = load_resource_document(resource_id)
    if not document:
        logger.warning(f"No document available for {resource_id}, will generate TSX with placeholder")
    
    # Load useful context
    context_resources = load_useful_context(resource, resources_json)
    
    # Generate TSX component
    tsx_code = generate_tsx_component(resource, category_name, document, context_resources, presentation_content)
    
    # Save TSX component
    if tsx_code:
        save_tsx_component(tsx_code, resource_id, category_name)
    
    # Generate and save image if it doesn't exist
    if not image_exists(resource_id, category_name):
        image_prompt = generate_image_prompt_with_claude(resource, category_name)
        if image_prompt:
            image_url = generate_image_ideogram(image_prompt, resource_id)
            if image_url:
                save_image(image_url, resource_id, category_name)
    
    # Add a delay to avoid rate limiting
    time.sleep(2)

def process_all_resources():
    """Process all resources"""
    logger.info("Starting resource TSX generation process")
    
    # Load resources
    resources_json = load_resources()
    
    # Load presentation
    presentation_content = load_presentation()
    
    # Collect all resources to process
    all_resources = []
    for category in resources_json["foundationalResources"]:
        category_name = category["category"]
        for resource in category["resources"]:
            resource_id = resource["id"]
            # Check if TSX component already exists
            if not tsx_component_exists(resource_id, category_name):
                all_resources.append({
                    "resource": resource,
                    "category_name": category_name
                })
    
    logger.info(f"Found {len(all_resources)} resources to process")
    
    if not all_resources:
        logger.info("No new resources to process. All TSX components already exist.")
        return
    
    # Process resources in batches of 5
    batch_size = 5  # Changed from 8 to 5
    
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
                    resources_json,
                    presentation_content
                ))
            
            # Wait for all to complete
            for future in concurrent.futures.as_completed(futures):
                try:
                    future.result()
                except Exception as e:
                    logger.error(f"Error in batch processing: {str(e)}")
        
        # Add a delay between batches to avoid rate limiting
        if i + batch_size < len(all_resources):
            delay = 10  # 10 seconds between batches
            logger.info(f"Waiting {delay} seconds between batches...")
            time.sleep(delay)
    
    logger.info("Resource TSX generation process completed")

if __name__ == "__main__":
    try:
        process_all_resources()
    except Exception as e:
        logger.error(f"Unhandled exception: {str(e)}")
