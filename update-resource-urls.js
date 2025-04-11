const fs = require('fs');
const path = require('path');

// Read the resources.json file
const resourcesPath = path.join(process.cwd(), 'public', 'resources.json');
const resourcesData = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'));

// Update the URLs
resourcesData.foundationalResources.forEach(category => {
  const categorySlug = category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  
  category.resources.forEach(resource => {
    // Extract the resource ID from the current URL
    const parts = resource.url.split('/');
    const resourceId = parts[parts.length - 1];
    
    // Update the URL to match our routing structure
    resource.url = `/resources/${categorySlug}/${resourceId}`;
  });
});

// Write the updated data back to the file
fs.writeFileSync(resourcesPath, JSON.stringify(resourcesData, null, 2), 'utf8');

console.log('Resource URLs updated successfully!');
