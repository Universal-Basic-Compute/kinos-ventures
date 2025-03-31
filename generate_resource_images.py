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
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
IDEOGRAM_API_KEY = os.getenv("IDEOGRAM_API_KEY")

# Check if API keys are available
if not ANTHROPIC_API_KEY:
    logger.error("ANTHROPIC_API_KEY not found in environment variables. Please add it to your .env file.")
    raise ValueError("ANTHROPIC_API_KEY not found in environment variables. Please add it to your .env file.")

if not IDEOGRAM_API_KEY:
    logger.error("IDEOGRAM_API_KEY not found in environment variables. Please add it to your .env file.")
    raise ValueError("IDEOGRAM_API_KEY not found in environment variables. Please add it to your .env file.")

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

# Generate image prompt with Claude
def generate_image_prompt_with_claude(resource, category_name):
    logger.info(f"Generating Ideogram prompt for resource: {resource['title']}")
    
    headers = {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    
    # Load visual style guide
    try:
        with open("docs/visual-style-guide.md", "r", encoding="utf-8") as f:
            style_guide = f.read()
        logger.info("Successfully loaded visual style guide")
    except Exception as e:
        logger.error(f"Error loading visual style guide: {str(e)}")
        # Fallback style guide if file not found
        style_guide = """
        # KinOS Ventures Visual Style Guide

        ## Core Aesthetic Philosophy
        KinOS Ventures embodies a visual identity best described as "Apple from 2050" — an elegant fusion of calligraphic tradition and advanced technology. Our aesthetic creates tension between organic movement and precision engineering, between ancient artistic principles and futuristic materials.

        ## Key Visual Elements
        - **White Steel**: Primary background surface with subtle texture that suggests engineered precision
        - **Liquid Chrome**: Dynamic, flowing elements with reflective properties and dimensional depth
        - **Silver-Blue Gradients**: Signature color transitions that suggest advanced technology
        - **Controlled Negative Space**: Strategic use of emptiness to create focus and balance

        ## Image Generation Guidelines
        For consistent results when generating images with Ideogram or similar AI tools, follow this template:

        ```
        [subject matter] rendered in liquid chrome on white steel background, calligraphy-inspired [element type] with ultramodern aesthetic, silver-blue gradient metal with reflective properties, brushstroke influence in composition, Apple 2050 design language, elegant negative space, [specific shape or arrangement details], sophisticated light effects, no text except [if required], [additional specific details] --ar 16:9 --style cinematic --v 6.0
        ```
        """
    
    system_prompt = """You are an expert in creating prompts for AI image generation tools like Ideogram. 
You have been provided with a visual style guide for KinOS Ventures and a resource description.
Your task is to create a detailed prompt for Ideogram that will generate an image representing this resource
while adhering to the KinOS Ventures visual style guide.

The image should follow the style guide precisely, with special attention to:
1. Using white steel as the background material
2. Creating liquid chrome elements with reflective properties
3. Incorporating silver-blue gradients
4. Following the calligraphy-inspired, Apple 2050 aesthetic
5. Using the prompt structure from the style guide

Return ONLY the prompt text that should be sent to Ideogram, nothing else.
"""

    user_prompt = f"""
VISUAL STYLE GUIDE:
{style_guide}

RESOURCE INFORMATION:
Title: {resource['title']}
Description: {resource['description']}
Presentation: {resource.get('presentation', '')}
Category: {category_name}

Based on the KinOS Ventures visual style guide and this resource information, create a detailed prompt for Ideogram.
Follow the prompt structure from the style guide, but customize it for this specific resource.
The prompt should create an image that visually represents the concept of this resource while maintaining the KinOS Ventures visual identity.

The prompt MUST include:
- White steel background
- Liquid chrome elements
- Silver-blue gradient metal with reflective properties
- Brushstroke influence in composition
- Apple 2050 design language
- No text

Return ONLY the prompt text that should be sent to Ideogram, nothing else.
"""

    data = {
        "model": "claude-3-7-sonnet-latest",  # Changed from claude-3-opus-20240229 to claude-3-7-sonnet-latest
        "max_tokens": 1000,
        "system": system_prompt,
        "messages": [{"role": "user", "content": user_prompt}]
    }
    
    try:
        response = requests.post(
            "https://api.anthropic.com/v1/messages",
            headers=headers,
            json=data,
            timeout=60
        )
        
        if response.status_code != 200:
            logger.error(f"Claude API Error: {response.status_code}")
            logger.error(response.text)
            return None
        
        prompt = response.json()["content"][0]["text"].strip()
        logger.info(f"Successfully generated Ideogram prompt for {resource['title']}")
        logger.info(f"Prompt: {prompt[:100]}...")
        return prompt
        
    except Exception as e:
        logger.error(f"Error calling Claude API for {resource['title']}: {str(e)}")
        return None

# Call Ideogram API to generate an image
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
            logger.error(f"Ideogram API Error: {response.status_code}")
            logger.error(response.text)
            return None
        
        response_data = response.json()
        logger.info(f"Successfully received response from Ideogram API for {resource_id}")
        
        # Extract the image URL from the response
        if response_data and "data" in response_data and len(response_data["data"]) > 0:
            image_url = response_data["data"][0]["url"]
            return image_url
        else:
            logger.error(f"No image URL found in response for {resource_id}")
            return None
            
    except Exception as e:
        logger.error(f"Error calling Ideogram API for {resource_id}: {str(e)}")
        return None

# Download and save the image
def save_image(image_url, resource_id, category_name):
    if not image_url:
        logger.error(f"No image URL provided for {resource_id}")
        return False
    
    # Create directory for category if it doesn't exist
    category_dir = os.path.join("public", category_name.replace(" & ", "_").replace(" ", "_").lower())
    os.makedirs(category_dir, exist_ok=True)
    
    # Define the output file path
    output_file = os.path.join(category_dir, f"{resource_id}.png")
    
    try:
        # Download the image
        response = requests.get(image_url, timeout=60)
        
        if response.status_code != 200:
            logger.error(f"Error downloading image for {resource_id}: {response.status_code}")
            return False
        
        # Save the image to file
        with open(output_file, "wb") as f:
            f.write(response.content)
        
        logger.info(f"Successfully saved image for {resource_id} to {output_file}")
        return True
        
    except Exception as e:
        logger.error(f"Error downloading and saving image for {resource_id}: {str(e)}")
        return False

# Check if an image already exists
def image_exists(resource_id, category_name):
    category_dir = os.path.join("public", category_name.replace(" & ", "_").replace(" ", "_").lower())
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
    
    # Generate prompt for the image using Claude
    prompt = generate_image_prompt_with_claude(resource, category_name)
    
    if not prompt:
        logger.error(f"Failed to generate prompt for {resource_title}")
        return False
    
    # Generate the image with Ideogram
    image_url = generate_image_ideogram(prompt, resource_id)
    
    if image_url:
        # Download and save the image
        success = save_image(image_url, resource_id, category_name)
        return success
    else:
        logger.error(f"Failed to generate image for {resource_title}")
        return False

# Main function to process all resources
def process_all_resources():
    logger.info("Starting resource image generation process")
    
    try:
        resources_json = load_resources()
        
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
        
        # Process resources in batches of 3 to avoid rate limiting
        batch_size = 3
        
        for i in range(0, len(all_resources), batch_size):
            batch = all_resources[i:i+batch_size]
            logger.info(f"Processing batch {i//batch_size + 1} of {(len(all_resources) + batch_size - 1) // batch_size} ({len(batch)} resources)")
            
            # Process the batch sequentially to avoid overwhelming the APIs
            for item in batch:
                try:
                    process_resource(item["resource"], item["category_name"])
                except Exception as e:
                    logger.error(f"Error processing resource: {str(e)}")
            
            # Add a delay between batches to avoid rate limiting
            if i + batch_size < len(all_resources):
                delay = 15
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
                image_path = os.path.join("public", 
                                         category_name.replace(" & ", "_").replace(" ", "_").lower(), 
                                         f"{resource_id}.png")
                
                if os.path.exists(doc_path) and os.path.exists(image_path):
                    # Read document content
                    with open(doc_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # Check if image is already integrated
                    if "![" in content and ".png" in content:
                        logger.info(f"Skipping {resource_title} - image already integrated")
                        continue
                    
                    # Create relative path for image
                    relative_image_path = os.path.join("/", 
                                                      category_name.replace(" & ", "_").replace(" ", "_").lower(), 
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
                image_path = os.path.join("public", 
                                         category_name.replace(" & ", "_").replace(" ", "_").lower(), 
                                         f"{resource_id}.png")
                
                if os.path.exists(expansion_path) and os.path.exists(image_path):
                    # Read expansion content
                    with open(expansion_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # Check if image is already integrated
                    if "![" in content and ".png" in content:
                        logger.info(f"Skipping expansion for {resource_title} - image already integrated")
                        continue
                    
                    # Create relative path for image
                    relative_image_path = os.path.join("/", 
                                                      category_name.replace(" & ", "_").replace(" ", "_").lower(), 
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
