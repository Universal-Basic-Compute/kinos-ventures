import fs from 'fs';
import path from 'path';

// Cache for resource data
let resourcesCache: any = null;

// Load resources.json
function loadResources() {
  if (resourcesCache) {
    return resourcesCache;
  }
  
  try {
    const resourcesJson = JSON.parse(fs.readFileSync('public/resources.json', 'utf8'));
    resourcesCache = resourcesJson;
    return resourcesJson;
  } catch (error) {
    console.error(`Error loading resources.json: ${error}`);
    return null;
  }
}

// Get resource title by ID
export function getResourceTitle(resourceId: string): string {
  const resources = loadResources();
  if (!resources) return 'Resource';
  
  for (const category of resources.foundationalResources) {
    for (const resource of category.resources) {
      if (resource.id === resourceId) {
        return resource.title;
      }
    }
  }
  
  return 'Resource';
}

// Get category path for a resource ID
export function getCategoryPath(resourceId: string): string {
  const resources = loadResources();
  if (!resources) return 'category';
  
  for (const category of resources.foundationalResources) {
    for (const resource of category.resources) {
      if (resource.id === resourceId) {
        return category.category.replace(' & ', '_').replace(/ /g, '_').toLowerCase();
      }
    }
  }
  
  return 'category';
}

// Get all related resources for a resource ID
export function getRelatedResources(resourceId: string): any[] {
  const resources = loadResources();
  if (!resources) return [];
  
  let usefulContext: string[] = [];
  
  // Find the resource and its useful context
  for (const category of resources.foundationalResources) {
    for (const resource of category.resources) {
      if (resource.id === resourceId && resource.usefulContext) {
        usefulContext = resource.usefulContext;
        break;
      }
    }
  }
  
  // Get the full resource objects for each context ID
  const relatedResources = [];
  
  for (const contextId of usefulContext) {
    for (const category of resources.foundationalResources) {
      for (const resource of category.resources) {
        if (resource.id === contextId) {
          relatedResources.push({
            ...resource,
            category: category.category
          });
          break;
        }
      }
    }
  }
  
  return relatedResources;
}
