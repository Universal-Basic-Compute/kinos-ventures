import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fs from 'fs';
import path from 'path';

// Function to load verticals data
function loadVerticalsData() {
  try {
    const filePath = path.join(process.cwd(), 'memory', 'verticals.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading verticals data:', error);
    return { verticals: [] };
  }
}

export default function VerticalsPage() {
  const verticalsData = loadVerticalsData();
  
  // Group verticals by status
  const activeVerticals = verticalsData.verticals.filter(v => v.status === "Active Development" || v.status === "In Development");
  const planningVerticals = verticalsData.verticals.filter(v => v.status === "Planning" || v.status === "Concept");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/90"></div>
        </div>
        
        <div className="container mx-auto z-10 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            KinOS Verticals
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
            Our portfolio of AI-driven businesses powered by the unified KinOS engine, each designed for specific industry needs.
          </p>
        </div>
      </section>

      {/* Featured Verticals Section */}
      <section className="py-16 px-6 md:px-12 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Businesses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* KongInvest Card */}
            <Card className="bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src="/verticals/konginvest-hero.jpg" 
                  alt="KongInvest Trading Platform" 
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-2xl font-bold text-white">KongInvest</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Superhuman Trading Intelligence</CardTitle>
                <CardDescription className="text-gray-300">AI-Powered Trading Platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Get 75% of trading profits every week from our superhuman AI traders working round-the-clock.
                  While humans sleep, our AI keeps trading, analyzing, and generating profits.
                </p>
                <div className="grid grid-cols-3 gap-4 my-6">
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <div className="text-blue-400 mb-2">🤖</div>
                    <h4 className="text-sm font-medium">Superhuman AI</h4>
                    <p className="text-xs text-gray-400">Zero emotional bias</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <div className="text-blue-400 mb-2">💰</div>
                    <h4 className="text-sm font-medium">Weekly Profits</h4>
                    <p className="text-xs text-gray-400">75% profit share</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <div className="text-blue-400 mb-2">⚡</div>
                    <h4 className="text-sm font-medium">24/7 Trading</h4>
                    <p className="text-xs text-gray-400">Never misses a trade</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">How It Works:</h4>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                    <div>
                      <p className="text-sm">Invest (min 500 USDC)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                    <div>
                      <p className="text-sm">AI trades 24/7 across markets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                    <div>
                      <p className="text-sm">Receive 75% profits every Friday</p>
                    </div>
                  </div>
                </div>
                <Link href="https://konginvest.ai" target="_blank">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                    Visit KongInvest
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* TherapyKin Card */}
            <Card className="bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src="/verticals/therapykin-hero.jpg" 
                  alt="TherapyKin Platform" 
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-2xl font-bold text-white">TherapyKin</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">AI Therapeutic Companion</CardTitle>
                <CardDescription className="text-gray-300">A Companion That Remembers, Adapts, and Grows With You</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  TherapyKin is more than an AI—it's a therapeutic companion that builds a genuine relationship with you over time. 
                  Unlike traditional therapy apps that reset with each session, TherapyKin remembers your history, learns your preferences, and evolves alongside you.
                </p>
                <div className="grid grid-cols-3 gap-4 my-6">
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <div className="text-purple-400 mb-2">🧠</div>
                    <h4 className="text-sm font-medium">Evidence-Based</h4>
                    <p className="text-xs text-gray-400">CBT, ACT & more</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <div className="text-purple-400 mb-2">🔒</div>
                    <h4 className="text-sm font-medium">Privacy-First</h4>
                    <p className="text-xs text-gray-400">End-to-end encrypted</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <div className="text-purple-400 mb-2">⏱️</div>
                    <h4 className="text-sm font-medium">24/7 Support</h4>
                    <p className="text-xs text-gray-400">Always available</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">How It Works:</h4>
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                    <div>
                      <p className="text-sm">Connect with a simple conversation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                    <div>
                      <p className="text-sm">Explore personalized therapeutic approaches</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                    <div>
                      <p className="text-sm">Grow with a companion that evolves with you</p>
                    </div>
                  </div>
                </div>
                <Link href="https://therapykin.ai" target="_blank">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4">
                    Visit TherapyKin
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Development Verticals Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">In Active Development</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeVerticals.map((vertical) => (
              <Card key={vertical.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Image src={`/icons/${vertical.id.toLowerCase()}.svg`} alt={`${vertical.name} Icon`} width={24} height={24} />
                  </div>
                  <CardTitle>{vertical.name}</CardTitle>
                  <CardDescription className="text-gray-400">Launching {vertical.launchDate}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    {vertical.description}
                  </p>
                  <div className="space-y-2">
                    {vertical.solutions && vertical.solutions.slice(0, 3).map((solution, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm text-gray-300">{solution.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Stage Verticals Section */}
      {planningVerticals.length > 0 && (
        <section className="py-16 px-6 md:px-12 bg-slate-800/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Future Roadmap</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {planningVerticals.map((vertical) => (
                <Card key={vertical.id} className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4">
                      <Image src={`/icons/${vertical.id.toLowerCase()}.svg`} alt={`${vertical.name} Icon`} width={24} height={24} />
                    </div>
                    <CardTitle>{vertical.name}</CardTitle>
                    <CardDescription className="text-gray-400">Planned for {vertical.launchDate}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      {vertical.description}
                    </p>
                    <div className="space-y-2">
                      {vertical.targetMarket && (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-gray-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span className="text-sm text-gray-400">Market Size: {vertical.targetMarket.marketSize}</span>
                        </div>
                      )}
                      {vertical.targetMarket && (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-gray-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                          </svg>
                          <span className="text-sm text-gray-400">Growth: {vertical.targetMarket.growthRate}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Unified Technology Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Unified KinOS Technology</h2>
                <p className="text-gray-300 mb-6">
                  All our vertical businesses are powered by the same core KinOS engine, providing advanced AI capabilities, 
                  memory systems, and adaptation mechanisms that create a competitive advantage in each market.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Shared technology core reduces development costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Innovations in one vertical benefit all businesses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Consistent memory and adaptation capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Rapid deployment of new vertical applications</span>
                  </li>
                </ul>
                <Link href="/resources/technology-product-development/kinos-engine-architecture-guide">
                  <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
                    Learn About Our Technology
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
                  <Image 
                    src="/verticals/kinos-engine-diagram.jpg" 
                    alt="KinOS Engine Architecture" 
                    width={600}
                    height={338}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Vertical Businesses?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you're a potential customer, partner, or investor, we'd love to discuss how our AI-driven 
            vertical businesses can create value for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors">
                Contact Us
              </Button>
            </Link>
            <Link href="/resources/core-philosophy-strategy/vertical-integration-strategy">
              <Button className="px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 rounded-full font-medium transition-colors">
                Learn About Our Strategy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
