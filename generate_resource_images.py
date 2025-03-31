import json
import os
import requests
import time
import logging
from dotenv import load_dotenv
import concurrent.futures
import base64
from PIL import Image
import io

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("resource_image_generation.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Get API keys from environment variables
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
IDEOGRAM_API_KEY = os.getenv("IDEOGRAM_API_KEY")

# Determine which API to use based on available keys
if OPENAI_API_KEY:
    logger.info("Using OpenAI DALL-E for image generation")
    API_PROVIDER = "openai"
elif IDEOGRAM_API_KEY:
    logger.info("Using Ideogram for image generation")
    API_PROVIDER = "ideogram"
else:
    logger.error("No API keys found for image generation. Please add OPENAI_API_KEY or IDEOGRAM_API_KEY to your .env file.")
    raise ValueError("No API keys found for image generation")

# Load the resources.json file
def load_resources():
    logger.info("Loading resources.json...")
    try:
        with open("public/resources.json", "r", encoding="utf-8") as f:
            resources_json = json.load(f)
        logger.info(f"Successfully loaded resources.json with {sum(len(category['resources']) for category in resources_json['foundationalResources'])} resources")
        return resources_json
    except Exception as e:
        logger.error(f"Error loading resources.json: {str(e)}")
        raise

# Create image prompt based on resource information and visual style guide
def create_image_prompt(resource, category_name):
    title = resource["title"]
    description = resource["description"]
    
    # Style guide specifications
    style_guide = """
    Style: Modern, minimalist, abstract with geometric elements
    Color Palette: Vibrant blues and purples as primary colors, with accents of teal and orange
    Mood: Forward-thinking, innovative, professional
    Visual Elements: Abstract representations of AI, connectivity, and growth
    Avoid: Realistic human faces, outdated tech imagery, cluttered compositions
    """
    
    # Create category-specific visual elements
    category_elements = {
        "Core Philosophy & Strategy": "abstract brain structures, interconnected nodes, compass or direction indicators",
        "Technology & Product Development": "circuit patterns, code structures, building blocks, development cycles",
        "Operations & Management": "organizational charts, efficiency symbols, resource allocation visuals",
        "Culture & Talent": "collaborative networks, knowledge transfer symbols, team connection metaphors",
        "Business & Growth": "growth charts, market expansion visuals, business relationship symbols"
    }
    
    elements = category_elements.get(category_name, "abstract AI elements")
    
    prompt = f"""Create a modern, minimalist abstract image representing "{title}" for a business resource about {description}.

The image should include visual elements related to {elements} using a color palette of vibrant blues and purples as primary colors, with accents of teal and orange.

The style should be forward-thinking, innovative, and professional with abstract representations of AI, connectivity, and growth.

Avoid realistic human faces, outdated tech imagery, and cluttered compositions.

The image will be used as a header for a business resource document in the KinOS Ventures framework.
"""
    
    logger.info(f"Generated prompt for {title}: {prompt[:100]}...")
    return prompt

# Call OpenAI DALL-E API
def generate_image_dalle(prompt, resource_id):
    logger.info(f"Calling DALL-E API for resource {resource_id}...")
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }
    
    data = {
        "model": "dall-e-3",
        "prompt": prompt,
        "n": 1,
        "size": "1024x1024",
        "response_format": "b64_json"
    }
    
    try:
        response = requests.post(
            "https://api.openai.com/v1/images/generations",
            headers=headers,
            json=data,
            timeout=60
        )
        
        if response.status_code != 200:
            logger.error(f"API Error: {response.status_code}")
            logger.error(response.text)
            return None
        
        logger.info(f"Successfully received image for {resource_id}")
        return {
            "type": "base64",
            "data": response.json()["data"][0]["b64_json"]
        }
    except Exception as e:
        logger.error(f"Error calling DALL-E API: {str(e)}")
        return None

# Call Ideogram API
def generate_image_ideogram(prompt, resource_id):
    logger.info(f"Calling Ideogram API for resource {resource_id}...")
    
    headers = {
        "Api-Key": IDEOGRAM_API_KEY,
        "Content-Type": "application/json"
    }
    
    data = {
        "image_request": {
            "prompt": prompt,
            "aspect_ratio": "ASPECT_16_9",  # 16:9 aspect ratio
            "model": "V_2",
            "magic_prompt_option": "AUTO"
        }
    }
    
    try:
        response = requests.post(
            "https://api.ideogram.ai/generate",
            headers=headers,
            json=data,
            timeout=120  # Longer timeout for image generation
        )
        
        if response.status_code != 200:
            logger.error(f"API Error: {response.status_code}")
            logger.error(response.text)
            return None
        
        response_data = response.json()
        logger.info(f"Successfully received response from Ideogram API for {resource_id}")
        
        # Extract the image URL from the response
        if response_data and "data" in response_data and len(response_data["data"]) > 0:
            image_url = response_data["data"][0]["url"]
            return {
                "type": "url",
                "data": image_url
            }
        else:
            logger.error(f"No image URL found in response for {resource_id}")
            return None
            
    except Exception as e:
        logger.error(f"Error calling Ideogram API for {resource_id}: {str(e)}")
        return None

# Generate image using selected API
def generate_image(prompt, resource_id):
    if API_PROVIDER == "openai":
        return generate_image_dalle(prompt, resource_id)
    else:
        return generate_image_ideogram(prompt, resource_id)

# Save image to file
def save_image(image_result, resource_id, category_name):
    if not image_result:
        logger.error(f"No image data provided for {resource_id}")
        return False
    
    try:
        # Create directory structure
        category_dir = os.path.join("resource_images", category_name.replace(" & ", "_").replace(" ", "_"))
        os.makedirs(category_dir, exist_ok=True)
        
        # Define the output file path
        output_file = os.path.join(category_dir, f"{resource_id}.png")
        
        if image_result["type"] == "base64":
            # Decode base64 image
            image_bytes = base64.b64decode(image_result["data"])
            image = Image.open(io.BytesIO(image_bytes))
            image.save(output_file, "PNG")
        else:  # URL type
            # Download the image
            response = requests.get(image_result["data"], timeout=60)
            
            if response.status_code != 200:
                logger.error(f"Error downloading image for {resource_id}: {response.status_code}")
                return False
            
            # Save the image to file
            with open(output_file, "wb") as f:
                f.write(response.content)
        
        logger.info(f"Successfully saved image for {resource_id} to {output_file}")
        return True
        
    except Exception as e:
        logger.error(f"Error saving image for {resource_id}: {str(e)}")
        return False

# Check if an image already exists
def image_exists(resource_id, category_name):
    category_dir = os.path.join("resource_images", category_name.replace(" & ", "_").replace(" ", "_"))
    file_path = os.path.join(category_dir, f"{resource_id}.png")
    return os.path.exists(file_path)

# Process a single resource
def process_resource(resource, category_name):
    resource_id = resource["id"]
    resource_title = resource["title"]
    
    logger.info(f"Processing resource: {resource_title} ({resource_id})")
    
    # Check if image already exists
    if image_exists(resource_id, category_name):
        logger.info(f"Skipping {resource_title} - image already exists")
        return True
    
    # Create prompt for the image
    prompt = create_image_prompt(resource, category_name)
    
    # Generate the image
    image_result = generate_image(prompt, resource_id)
    
    if image_result:
        # Save the image
        success = save_image(image_result, resource_id, category_name)
        return success
    else:
        logger.error(f"Failed to generate image for {resource_title}")
        return False

# Main function to process all resources
def process_all_resources():
    logger.info("Starting resource image generation process")
    
    try:
        resources_json = load_resources()
        
        # Create output directory if it doesn't exist
        os.makedirs("resource_images", exist_ok=True)
        logger.info("Created resource_images directory")
        
        # Collect all resources to process
        all_resources = []
        
        for category in resources_json["foundationalResources"]:
            category_name = category["category"]
            
            for resource in category["resources"]:
                resource_id = resource["id"]
                
                # Check if image already exists
                if image_exists(resource_id, category_name):
                    logger.info(f"Skipping {resource['title']} - image already exists")
                else:
                    all_resources.append({
                        "resource": resource,
                        "category_name": category_name
                    })
        
        logger.info(f"Found {len(all_resources)} resources to process")
        
        if not all_resources:
            logger.info("No new resources to process. All images already exist.")
            return
        
        # Process resources in batches
        batch_size = 5 if API_PROVIDER == "ideogram" else 3  # Smaller batch for DALL-E due to stricter rate limits
        
        for i in range(0, len(all_resources), batch_size):
            batch = all_resources[i:i+batch_size]
            logger.info(f"Processing batch {i//batch_size + 1} of {(len(all_resources) + batch_size - 1) // batch_size} ({len(batch)} resources)")
            
            # Process the batch
            if API_PROVIDER == "openai":
                # Process sequentially for DALL-E to better manage rate limits
                for item in batch:
                    try:
                        process_resource(item["resource"], item["category_name"])
                    except Exception as e:
                        logger.error(f"Error processing resource: {str(e)}")
            else:
                # Process with ThreadPoolExecutor for Ideogram
                with concurrent.futures.ThreadPoolExecutor(max_workers=batch_size) as executor:
                    futures = []
                    for item in batch:
                        futures.append(executor.submit(
                            process_resource, 
                            item["resource"], 
                            item["category_name"]
                        ))
                    
                    # Wait for all to complete
                    for future in concurrent.futures.as_completed(futures):
                        try:
                            future.result()
                        except Exception as e:
                            logger.error(f"Error in batch processing: {str(e)}")
            
            # Add a delay between batches to avoid rate limiting
            if i + batch_size < len(all_resources):
                delay = 15 if API_PROVIDER == "openai" else 10
                logger.info(f"Waiting {delay} seconds between batches...")
                time.sleep(delay)
        
        logger.info("Resource image generation process completed")
        
    except Exception as e:
        logger.error(f"Error in process_all_resources: {str(e)}")

# Function to integrate images into resource documents
def integrate_images_into_documents():
    logger.info("Starting image integration into resource documents")
    
    try:
        resources_json = load_resources()
        
        # Track processed documents
        processed_count = 0
        
        for category in resources_json["foundationalResources"]:
            category_name = category["category"]
            
            for resource in category["resources"]:
                resource_id = resource["id"]
                resource_title = resource["title"]
                
                # Check if both document and image exist
                doc_path = os.path.join("resource_documents", f"{resource_id}.md")
                image_category_dir = os.path.join("resource_images", category_name.replace(" & ", "_").replace(" ", "_"))
                image_path = os.path.join(image_category_dir, f"{resource_id}.png")
                
                if os.path.exists(doc_path) and os.path.exists(image_path):
                    # Read document content
                    with open(doc_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # Check if image is already integrated
                    if "![" in content and ".png" in content:
                        logger.info(f"Skipping {resource_title} - image already integrated")
                        continue
                    
                    # Create relative path for image
                    relative_image_path = os.path.join("../resource_images", 
                                                      category_name.replace(" & ", "_").replace(" ", "_"), 
                                                      f"{resource_id}.png")
                    
                    # Add image reference after title
                    if content.startswith(f"# {resource_title}"):
                        new_content = content.replace(
                            f"# {resource_title}\n\n", 
                            f"# {resource_title}\n\n![{resource_title}]({relative_image_path})\n\n"
                        )
                        
                        # Write updated content
                        with open(doc_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        
                        logger.info(f"Integrated image into document for {resource_title}")
                        processed_count += 1
                    else:
                        logger.warning(f"Could not find title in document for {resource_title}")
        
        logger.info(f"Completed image integration. Processed {processed_count} documents.")
        
    except Exception as e:
        logger.error(f"Error in integrate_images_into_documents: {str(e)}")

# Function to integrate images into expansion documents
def integrate_images_into_expansions():
    logger.info("Starting image integration into expansion documents")
    
    try:
        resources_json = load_resources()
        
        # Track processed documents
        processed_count = 0
        
        for category in resources_json["foundationalResources"]:
            category_name = category["category"]
            category_dir = os.path.join("resource_expansions", category_name.replace(" & ", "_").replace(" ", "_"))
            
            if not os.path.exists(category_dir):
                continue
                
            for resource in category["resources"]:
                resource_id = resource["id"]
                resource_title = resource["title"]
                
                # Check if both expansion and image exist
                expansion_path = os.path.join(category_dir, f"{resource_id}.md")
                image_category_dir = os.path.join("resource_images", category_name.replace(" & ", "_").replace(" ", "_"))
                image_path = os.path.join(image_category_dir, f"{resource_id}.png")
                
                if os.path.exists(expansion_path) and os.path.exists(image_path):
                    # Read expansion content
                    with open(expansion_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # Check if image is already integrated
                    if "![" in content and ".png" in content:
                        logger.info(f"Skipping expansion for {resource_title} - image already integrated")
                        continue
                    
                    # Create relative path for image
                    relative_image_path = os.path.join("../../resource_images", 
                                                      category_name.replace(" & ", "_").replace(" ", "_"), 
                                                      f"{resource_id}.png")
                    
                    # Add image reference after title
                    if content.startswith(f"# {resource_title}"):
                        new_content = content.replace(
                            f"# {resource_title}\n\n", 
                            f"# {resource_title}\n\n![{resource_title}]({relative_image_path})\n\n"
                        )
                        
                        # Write updated content
                        with open(expansion_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        
                        logger.info(f"Integrated image into expansion for {resource_title}")
                        processed_count += 1
                    else:
                        logger.warning(f"Could not find title in expansion for {resource_title}")
        
        logger.info(f"Completed expansion image integration. Processed {processed_count} documents.")
        
    except Exception as e:
        logger.error(f"Error in integrate_images_into_expansions: {str(e)}")

if __name__ == "__main__":
    try:
        # First generate any missing images
        process_all_resources()
        
        # Then integrate images into documents
        integrate_images_into_documents()
        
        # Also integrate images into expansion documents
        integrate_images_into_expansions()
    except Exception as e:
        logger.error(f"Unhandled exception: {str(e)}")
