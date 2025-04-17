import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/90"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <Image
            src="/logo.png"
            alt="KinOS Ventures Logo"
            width={600}
            height={600}
            className="mx-auto mb-8"
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
            Accelerating AI-driven innovation across multiple verticals with our unified KinOS engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
            >
              Explore Resources
            </Link>
            <Link 
              href="/verticals"
              className="px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 rounded-full font-medium transition-colors"
            >
              View Verticals
            </Link>
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Vertical Business Units</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "KinOS Health", icon: "/icons/health.svg", description: "AI-powered healthcare solutions" },
              { name: "KinOS Finance", icon: "/icons/finance.svg", description: "Intelligent financial services" },
              { name: "KinOS Entertainment", icon: "/icons/entertainment.svg", description: "Creative AI applications" },
              { name: "KinOS Productivity", icon: "/icons/productivity.svg", description: "Business assistant solutions" },
              { name: "KinOS Education", icon: "/icons/education.svg", description: "Learning and development tools" },
              { name: "KinOS Trading", icon: "/icons/trading.svg", description: "AI-enhanced trading platforms" },
              { name: "KinOS Supply Chain", icon: "/icons/supply-chain.svg", description: "Logistics optimization systems" },
              { name: "KinOS Recruitment", icon: "/icons/recruitment.svg", description: "Talent acquisition solutions" }
            ].map((vertical, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Image src={vertical.icon} alt={vertical.name} width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{vertical.name}</h3>
                <p className="text-gray-300">{vertical.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Unified Technology Core</h2>
              <p className="text-gray-300 mb-6">
                Our KinOS engine provides a unified technology foundation across all verticals, 
                featuring advanced memory systems, adaptation mechanisms, and growth capabilities.
              </p>
              <ul className="space-y-4">
                {[
                  "Reduced development costs across verticals",
                  "Faster iteration and feature deployment",
                  "Consolidated engineering and research",
                  "Cross-vertical intelligence sharing",
                  "Comprehensive data strategy with privacy walls"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/resources/technology/kinos-engine-architecture-guide"
                className="inline-block mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Learn More About Our Technology
              </Link>
            </div>
            <div className="lg:w-1/2 bg-slate-700 rounded-xl p-8">
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
                <p className="text-center text-gray-400">KinOS Engine Architecture Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Foundational Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Core Philosophy & Strategy", count: 4, color: "from-blue-500 to-purple-500" },
              { category: "Technology & Product Development", count: 5, color: "from-green-500 to-teal-500" },
              { category: "Operations & Management", count: 5, color: "from-orange-500 to-red-500" },
              { category: "Culture & Talent", count: 5, color: "from-purple-500 to-pink-500" },
              { category: "Business & Growth", count: 6, color: "from-yellow-500 to-orange-500" }
            ].map((resource, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all">
                <div className={`h-2 w-20 rounded-full mb-4 bg-gradient-to-r ${resource.color}`}></div>
                <h3 className="text-xl font-semibold mb-2">{resource.category}</h3>
                <p className="text-gray-400 mb-4">{resource.count} resources available</p>
                <Link 
                  href={`/resources/${resource.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                >
                  View Resources
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore KinOS Ventures?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Discover how our unified technology core can accelerate your business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/resources/core-philosophy-strategy/kinos-ventures-manifesto"
              className="px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 rounded-full font-medium transition-colors"
            >
              Read Our Manifesto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
