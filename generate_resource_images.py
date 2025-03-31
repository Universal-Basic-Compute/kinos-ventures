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
        logging.FileHandler("resource_image_generation.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variable
IDEOGRAM_API_KEY = os.getenv("IDEOGRAM_API_KEY")

# Check if API key is available
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

# Generate a prompt for Ideogram based on resource information
def generate_image_prompt(resource):
    title = resource["title"]
    description = resource["description"]
    presentation = resource.get("presentation", "")
    
    prompt = f"""Create a professional, abstract visualization for a business document titled "{title}". 
The document is about {description}. 
It should be a modern, clean design with subtle tech elements, suitable for a professional AI business presentation.
Use a color palette that conveys innovation and professionalism.
The image should be abstract rather than literal, with elements that suggest {title.lower()} without being too obvious.
Make it suitable as a header image for a business framework document.
16:9 aspect ratio, high quality, professional business style."""
    
    logger.info(f"Generated prompt for {title}: {prompt[:100]}...")
    return prompt

# Call Ideogram API to generate an image
def generate_image(prompt, resource_id):
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
            return image_url
        else:
            logger.error(f"No image URL found in response for {resource_id}")
            return None
            
    except Exception as e:
        logger.error(f"Error calling Ideogram API for {resource_id}: {str(e)}")
        return None

# Download and save the image
def download_and_save_image(image_url, category_name, resource_id):
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
def image_exists(category_name, resource_id):
    category_dir = os.path.join("public", category_name.replace(" & ", "_").replace(" ", "_").lower())
    file_path = os.path.join(category_dir, f"{resource_id}.png")
    return os.path.exists(file_path)

# Process a single resource
def process_resource(resource, category_name):
    resource_id = resource["id"]
    resource_title = resource["title"]
    
    logger.info(f"Processing resource: {resource_title} ({resource_id})")
    
    # Check if image already exists
    if image_exists(category_name, resource_id):
        logger.info(f"Skipping {resource_title} - image already exists")
        return True
    
    # Generate prompt for the image
    prompt = generate_image_prompt(resource)
    
    # Generate the image
    image_url = generate_image(prompt, resource_id)
    
    if image_url:
        # Download and save the image
        success = download_and_save_image(image_url, category_name, resource_id)
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
                if image_exists(category_name, resource_id):
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
        
        # Process resources in batches of 5 to avoid rate limiting
        batch_size = 5
        
        for i in range(0, len(all_resources), batch_size):
            batch = all_resources[i:i+batch_size]
            logger.info(f"Processing batch {i//batch_size + 1} of {(len(all_resources) + batch_size - 1) // batch_size} ({len(batch)} resources)")
            
            # Process the batch sequentially to avoid overwhelming the API
            for item in batch:
                try:
                    process_resource(item["resource"], item["category_name"])
                except Exception as e:
                    logger.error(f"Error processing resource: {str(e)}")
            
            # Add a delay between batches to avoid rate limiting
            if i + batch_size < len(all_resources):
                delay = 10
                logger.info(f"Waiting {delay} seconds between batches...")
                time.sleep(delay)
        
        logger.info("Resource image generation process completed")
        
    except Exception as e:
        logger.error(f"Error in process_all_resources: {str(e)}")

if __name__ == "__main__":
    try:
        process_all_resources()
    except Exception as e:
        logger.error(f"Unhandled exception: {str(e)}")
