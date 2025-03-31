import Image from "next/image";
import Link from "next/link";
import resourcesData from "@/public/resources.json";

// Helper function to get image path or fallback
const getImagePath = (category: string, id: string) => {
  // Try to use the specific resource image
  return `/categories/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/${id}.png`;
};

export default function ResourcesPage() {
  const { foundationalResources } = resourcesData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            KinOS Ventures Resources
          </h1>
          <p className="text-xl text-gray-300">
            Explore our foundational resources that establish the decision-making framework and operational principles for KinOS Ventures.
          </p>
        </div>

        {foundationalResources.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="flex items-center mb-8">
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${
                categoryIndex % 5 === 0 ? "from-blue-500 to-purple-500" :
                categoryIndex % 5 === 1 ? "from-green-500 to-teal-500" :
                categoryIndex % 5 === 2 ? "from-orange-500 to-red-500" :
                categoryIndex % 5 === 3 ? "from-purple-500 to-pink-500" :
                "from-yellow-500 to-orange-500"
              } mr-4`}></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{category.category}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.resources.map((resource) => (
                <Link 
                  href={resource.url} 
                  key={resource.id}
                  className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="relative h-48 w-full bg-slate-700 overflow-hidden">
                    <Image
                      src={getImagePath(category.category, resource.id)}
                      alt={resource.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to category image if specific resource image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = `/categories/${category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/default.png`;
                      }}
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
        ))}
      </div>
    </div>
  );
}
