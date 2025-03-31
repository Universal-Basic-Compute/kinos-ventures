import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import { visit } from 'unist-util-visit';
import * as dotenv from 'dotenv';
import { execSync } from 'child_process';

// Load environment variables
dotenv.config();

// Configure logging
const logFile = 'visual_resources_generation.log';
fs.writeFileSync(logFile, `Visual Resources Generation Log - ${new Date().toISOString()}\n\n`);

function log(message: string) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, logMessage);
}

// Utility function to ensure directory exists
function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    log(`Created directory: ${dirPath}`);
  }
}

// Load resources.json
function loadResources() {
  log('Loading resources.json...');
  try {
    const resourcesJson = JSON.parse(fs.readFileSync('public/resources.json', 'utf8'));
    log(`Successfully loaded resources.json with ${resourcesJson.foundationalResources.reduce(
      (sum: number, category: any) => sum + category.resources.length, 0
    )} resources`);
    return resourcesJson;
  } catch (error) {
    log(`Error loading resources.json: ${error}`);
    throw error;
  }
}

// Check if a markdown file exists for a resource
function markdownExists(resourceId: string) {
  const filePath = path.join('resource_documents', `${resourceId}.md`);
  return fs.existsSync(filePath);
}

// Check if a TSX file already exists for a resource
function tsxExists(resourceId: string, categoryName: string) {
  const categoryDir = categoryName.replace(' & ', '_').replace(/ /g, '_').toLowerCase();
  const filePath = path.join('app', 'resources', categoryDir, `${resourceId}`, 'page.tsx');
  return fs.existsSync(filePath);
}

// Parse markdown content
async function parseMarkdown(content: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter);
  
  const ast = await processor.parse(content);
  return ast;
}

// Extract sections from markdown AST
function extractSections(ast: any) {
  const sections: any[] = [];
  let currentSection: any = null;
  let currentSubsection: any = null;
  
  visit(ast, 'heading', (node) => {
    if (node.depth === 1) {
      // Title - skip
    } else if (node.depth === 2) {
      // Main section
      currentSection = {
        title: getTextFromNode(node),
        content: [],
        subsections: []
      };
      sections.push(currentSection);
      currentSubsection = null;
    } else if (node.depth === 3) {
      // Subsection
      if (currentSection) {
        currentSubsection = {
          title: getTextFromNode(node),
          content: []
        };
        currentSection.subsections.push(currentSubsection);
      }
    }
  });
  
  // Now extract content for each section
  let currentNode: any = null;
  let currentDepth = 0;
  
  visit(ast, (node) => {
    if (node.type === 'heading') {
      currentNode = node;
      currentDepth = node.depth;
    } else if (currentNode && node.type !== 'heading') {
      if (currentDepth === 2 && currentSection) {
        currentSection.content.push(node);
      } else if (currentDepth === 3 && currentSubsection) {
        currentSubsection.content.push(node);
      }
    }
  });
  
  return sections;
}

// Helper to get text from a node
function getTextFromNode(node: any): string {
  let text = '';
  visit(node, 'text', (textNode) => {
    text += textNode.value;
  });
  return text;
}

// Import helper functions
import { renderContent } from './markdown-to-jsx';
import { getResourceTitle, getCategoryPath } from './resource-utils';

// Generate TSX component for a resource
async function generateTsxComponent(resource: any, categoryName: string) {
  const resourceId = resource.id;
  const resourceTitle = resource.title;
  
  log(`Generating TSX component for resource: ${resourceTitle} (${resourceId})`);
  
  // Read markdown content
  const markdownPath = path.join('resource_documents', `${resourceId}.md`);
  const markdownContent = fs.readFileSync(markdownPath, 'utf8');
  
  // Parse markdown
  const ast = await parseMarkdown(markdownContent);
  
  // Extract image path if present
  let imagePath = '';
  visit(ast, 'image', (node) => {
    if (!imagePath) {
      imagePath = node.url;
    }
  });
  
  // Extract sections
  const sections = extractSections(ast);
  
  // Create the TSX content
  const tsxContent = `
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, CheckCircle, Info, Lightbulb, List, FileText, Settings, Users } from 'lucide-react';

export default function ResourcePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">${resourceTitle}</h1>
            <p className="text-lg text-muted-foreground mb-4">${resource.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-primary/10">${categoryName}</Badge>
              <Badge variant="outline">Resource</Badge>
            </div>
          </div>
          
          ${imagePath ? `
          <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
            <Image 
              src="${imagePath}" 
              alt="${resourceTitle}" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
          ` : ''}
        </div>
        
        <Separator />
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle>Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    ${sections.map((section, index) => `
                    <li key="${index}">
                      <a href="#${section.title.toLowerCase().replace(/ /g, '-')}" className="flex items-center gap-2 text-sm hover:text-primary">
                        <ArrowRight size={14} />
                        ${section.title}
                      </a>
                      ${section.subsections.length > 0 ? `
                      <ul className="ml-6 mt-1 space-y-1">
                        ${section.subsections.map((subsection: any, subIndex: number) => `
                        <li key="${index}-${subIndex}">
                          <a href="#${subsection.title.toLowerCase().replace(/ /g, '-')}" className="text-xs hover:text-primary">
                            ${subsection.title}
                          </a>
                        </li>
                        `).join('')}
                      </ul>
                      ` : ''}
                    </li>
                    `).join('')}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Related Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    ${(resource.usefulContext || []).slice(0, 5).map((contextId: string, index: number) => `
                    <li key="${index}">
                      <a href="/resources/${getCategoryPath(contextId)}/${contextId}" className="text-sm hover:text-primary flex items-center gap-2">
                        <FileText size={14} />
                        ${getResourceTitle(contextId)}
                      </a>
                    </li>
                    `).join('')}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            ${sections.map((section, index) => `
            <section id="${section.title.toLowerCase().replace(/ /g, '-')}" className="scroll-mt-24">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    ${getIconForSection(section.title)}
                    <CardTitle>${section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  ${renderContent(section.content)}
                  
                  ${section.subsections.map((subsection: any, subIndex: number) => `
                  <div id="${subsection.title.toLowerCase().replace(/ /g, '-')}" className="mt-8 scroll-mt-24">
                    <h3 className="text-xl font-semibold mb-4">${subsection.title}</h3>
                    ${renderContent(subsection.content)}
                  </div>
                  `).join('')}
                </CardContent>
              </Card>
            </section>
            `).join('')}
            
            ${sections.length > 0 ? `
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Implementation Note</AlertTitle>
              <AlertDescription>
                This resource is part of the KinOS Ventures framework. For implementation assistance, 
                refer to the related resources or contact the team.
              </AlertDescription>
            </Alert>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function for section icons
function getIconForSection(title: string) {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('overview') || lowerTitle.includes('introduction')) {
    return '<Info className="h-5 w-5" />';
  } else if (lowerTitle.includes('implementation') || lowerTitle.includes('process')) {
    return '<Settings className="h-5 w-5" />';
  } else if (lowerTitle.includes('key') || lowerTitle.includes('principles')) {
    return '<CheckCircle className="h-5 w-5" />';
  } else if (lowerTitle.includes('team') || lowerTitle.includes('stakeholder')) {
    return '<Users className="h-5 w-5" />';
  } else if (lowerTitle.includes('framework') || lowerTitle.includes('structure')) {
    return '<List className="h-5 w-5" />';
  } else {
    return '<Lightbulb className="h-5 w-5" />';
  }
}
`;

  // Create directory for the TSX file
  const categoryDir = categoryName.replace(' & ', '_').replace(/ /g, '_').toLowerCase();
  const outputDir = path.join('app', 'resources', categoryDir, resourceId);
  ensureDirectoryExists(outputDir);
  
  // Write the TSX file
  const outputPath = path.join(outputDir, 'page.tsx');
  fs.writeFileSync(outputPath, tsxContent);
  
  log(`Successfully generated TSX component for ${resourceTitle} at ${outputPath}`);
  return true;
}

// Process resources in batches
async function processResourcesInBatches() {
  log('Starting visual resources generation process');
  
  try {
    const resourcesJson = loadResources();
    
    // Collect all resources to process
    const allResources: any[] = [];
    
    for (const category of resourcesJson.foundationalResources) {
      const categoryName = category.category;
      
      for (const resource of category.resources) {
        const resourceId = resource.id;
        
        // Check if markdown exists and TSX doesn't exist yet
        if (markdownExists(resourceId) && !tsxExists(resourceId, categoryName)) {
          allResources.push({
            resource,
            categoryName
          });
          log(`Added ${resource.title} to processing queue`);
        } else if (!markdownExists(resourceId)) {
          log(`Skipping ${resource.title} - markdown document doesn't exist`);
        } else {
          log(`Skipping ${resource.title} - TSX component already exists`);
        }
      }
    }
    
    log(`Found ${allResources.length} resources to process`);
    
    if (allResources.length === 0) {
      log('No resources to process. All TSX components already exist or markdown documents are missing.');
      return;
    }
    
    // Process resources in batches of 10
    const batchSize = 10;
    
    for (let i = 0; i < allResources.length; i += batchSize) {
      const batch = allResources.slice(i, i + batchSize);
      log(`Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(allResources.length / batchSize)} (${batch.length} resources)`);
      
      // Process the batch
      const promises = batch.map(item => 
        generateTsxComponent(item.resource, item.categoryName)
      );
      
      await Promise.all(promises);
      
      log(`Completed batch ${Math.floor(i / batchSize) + 1}`);
      
      // Add a delay between batches
      if (i + batchSize < allResources.length) {
        log('Waiting between batches...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    log('Visual resources generation process completed');
    
  } catch (error) {
    log(`Error in processResourcesInBatches: ${error}`);
  }
}

// Main function
async function main() {
  try {
    await processResourcesInBatches();
  } catch (error) {
    log(`Unhandled exception: ${error}`);
  }
}

// Run the script
main();
