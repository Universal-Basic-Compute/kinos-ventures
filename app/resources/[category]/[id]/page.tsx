import Link from "next/link";
import { notFound } from "next/navigation";
import resourcesData from "@/public/resources.json";
import fs from "fs";
import path from "path";
import ResourceImage from "@/components/ResourceImage";
import { remark } from 'remark';
import html from 'remark-html';

// Define the types for the page params
type PageProps = {
  params: {
    category: string;
    id: string;
  };
};

// Function to convert URL category to directory name
function getCategoryDir(urlCategory: string) {
  // Convert URL format (with hyphens) to directory format (with underscores)
  return urlCategory.replace(/-/g, '_');
}

// Function to get resource data
function getResourceData(category: string, id: string) {
  const { foundationalResources } = resourcesData;
  
  // Find the category
  const categoryData = foundationalResources.find(
    (cat) => cat.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === category
  );
  
  if (!categoryData) return null;
  
  // Find the resource
  const resource = categoryData.resources.find((res) => res.id === id);
  
  return resource || null;
}

// Function to get related resources
function getRelatedResources(resourceIds: string[]) {
  const { foundationalResources } = resourcesData;
  const relatedResources: any[] = [];
  
  resourceIds.forEach(id => {
    for (const category of foundationalResources) {
      const resource = category.resources.find(res => res.id === id);
      if (resource) {
        relatedResources.push({
          ...resource,
          category: category.category
        });
        break;
      }
    }
  });
  
  return relatedResources;
}

// Function to get resource content and convert markdown to HTML
async function getResourceContent(id: string) {
  try {
    const filePath = path.join(process.cwd(), 'resource_documents', `${id}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(fileContent);
    
    return processedContent.toString();
  } catch (error) {
    console.error(`Error reading resource document for ${id}:`, error);
    return null;
  }
}

export default async function ResourcePage({ params }: PageProps) {
  const { category, id } = params;
  const resource = getResourceData(category, id);
  
  if (!resource) {
    notFound();
  }
  
  // Get related resources
  const relatedResources = resource.usefulContext 
    ? getRelatedResources(resource.usefulContext)
    : [];
  
  // Get resource content
  const contentHtml = await getResourceContent(id);
  
  // Image path
  const imagePath = `/categories/${getCategoryDir(category)}/${id}.png`;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-400 mb-8">
            <Link href="/resources" className="hover:text-white transition-colors">
              Resources
            </Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link 
              href={`/resources/${category}`}
              className="hover:text-white transition-colors"
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="text-white">{resource.title}</span>
          </div>
          
          {/* Resource Header */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden mb-8">
            <div className="relative h-64 w-full bg-slate-700">
              <ResourceImage
                src={imagePath}
                alt={resource.title}
                fill={true}
                className="object-cover"
                fallbackSrc={`/categories/${getCategoryDir(category)}/default.png`}
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{resource.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{resource.presentation}</p>
              <div className="flex items-center text-gray-400">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </div>
            </div>
          </div>
          
          {/* Resource Content */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 mb-8 prose prose-invert max-w-none">
            {contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300" />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">Content for this resource is being developed.</p>
                <p className="text-gray-500 mt-2">Check back soon for updates.</p>
              </div>
            )}
          </div>
          
          {/* Related Resources */}
          {relatedResources.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedResources.map((related) => (
                  <Link 
                    href={related.url} 
                    key={related.id}
                    className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all flex items-start"
                  >
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex-shrink-0 mr-4 overflow-hidden relative">
                      <ResourceImage
                        src={`/categories/${related.category.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')}/${related.id}.png`}
                        alt={related.title}
                        fill={true}
                        className="object-cover"
                        fallbackSrc={`/categories/${related.category.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')}/default.png`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{related.title}</h3>
                      <p className="text-gray-400 text-sm">{related.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
