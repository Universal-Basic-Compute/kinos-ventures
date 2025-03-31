import Link from "next/link";
import { notFound } from "next/navigation";
import resourcesData from "@/public/resources.json";
import ResourceImage from "@/components/ResourceImage";


// Function to convert URL category to directory name
function getCategoryDir(urlCategory: string) {
  // Convert URL format (with hyphens) to directory format (with underscores)
  return urlCategory.replace(/-/g, '_');
}

// Function to get category data
function getCategoryData(category: string) {
  const { foundationalResources } = resourcesData;
  
  // Find the category
  const categoryData = foundationalResources.find(
    (cat) => cat.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === category
  );
  
  return categoryData || null;
}

// Helper function to get color gradient based on category
function getCategoryColor(categoryName: string) {
  const categories = resourcesData.foundationalResources.map(cat => cat.category);
  const index = categories.indexOf(categoryName);
  
  switch (index % 5) {
    case 0: return "from-blue-500 to-purple-500";
    case 1: return "from-green-500 to-teal-500";
    case 2: return "from-orange-500 to-red-500";
    case 3: return "from-purple-500 to-pink-500";
    default: return "from-yellow-500 to-orange-500";
  }
}

export default async function CategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  const { category } = params;
  const categoryData = getCategoryData(category);
  
  if (!categoryData) {
    notFound();
  }
  
  const colorGradient = getCategoryColor(categoryData.category);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-400 mb-8">
            <Link href="/resources" className="hover:text-white transition-colors">
              Resources
            </Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="text-white">{categoryData.category}</span>
          </div>
          
          {/* Category Header */}
          <div className="flex items-center mb-12">
            <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${colorGradient} mr-6`}></div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{categoryData.category}</h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12">
            {categoryData.category === "Core Philosophy & Strategy" && 
              "Foundational principles and strategic frameworks that guide our approach to AI development and business growth."}
            {categoryData.category === "Technology & Product Development" && 
              "Technical specifications and methodologies for building and evolving our products across all verticals."}
            {categoryData.category === "Operations & Management" && 
              "Systems and processes for efficiently running our organization and managing resources across verticals."}
            {categoryData.category === "Culture & Talent" && 
              "Guidelines for building our team culture, knowledge sharing, and talent development."}
            {categoryData.category === "Business & Growth" && 
              "Frameworks for market expansion, customer engagement, and sustainable business growth."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.resources.map((resource) => (
            <Link 
              href={resource.url} 
              key={resource.id}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="relative h-48 w-full bg-slate-700 overflow-hidden">
                <ResourceImage
                  src={`/categories/${getCategoryDir(category)}/${resource.id}.png`}
                  alt={resource.title}
                  fill={true}
                  className="object-cover"
                  fallbackSrc={`/categories/${getCategoryDir(category)}/default.png`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.presentation}</p>
                <div className="flex items-center text-blue-400 font-medium">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
