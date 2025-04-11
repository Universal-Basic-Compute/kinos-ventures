'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  PresentationChartLineIcon, 
  CubeTransparentIcon, 
  ArrowPathIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  PuzzlePieceIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'

const GoToMarketPlaybook = () => {
  const relatedResources = [
    {
      id: "product-development-lifecycle",
      title: "Product Development Lifecycle",
      description: "Standardized process from concept to launch across all verticals",
      icon: <ArrowPathIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "vertical-market-selection-criteria",
      title: "Vertical Market Selection Criteria",
      description: "Framework for evaluating and prioritizing new market opportunities",
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "pricing-philosophy-framework",
      title: "Pricing Philosophy & Framework",
      description: "Principles for creating value-based pricing across diverse product lines",
      icon: <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "customer-success-integration-model",
      title: "Customer Success Integration Model",
      description: "How customer insights feed back into product development",
      icon: <UserGroupIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "metrics-standardization-guide",
      title: "Metrics Standardization Guide",
      description: "Common success measurements applicable across different business units",
      icon: <ChartBarIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "kinos-knowledge-transfer-protocol",
      title: "KinOS Knowledge Transfer Protocol",
      description: "Systems for sharing insights and learnings across teams and verticals",
      icon: <PuzzlePieceIcon className="h-6 w-6 text-blue-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      {/* Resource Header */}
      <div className="bg-slate-800 py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Go-To-Market Playbook
              </h1>
              <p className="mt-2 text-xl text-gray-300">
                Standardized launch strategy adaptable to different verticals
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <div className="rounded-full bg-slate-700 p-3">
                <PresentationChartLineIcon className="h-10 w-10 text-blue-400" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-300 max-w-3xl">
            A flexible yet structured approach to market entry that addresses our 'getting eyes on products' challenge through low-cost, high-impact marketing strategies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Section - 2/3 width on desktop */}
          <div className="lg:w-2/3">
            <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Executive Summary</h2>
              <p className="text-gray-300">
                This Go-To-Market Playbook provides a comprehensive, flexible framework for successfully launching products across KinOS Ventures' multiple vertical business units. Built on the foundation of the unified KinOS engine technology, this playbook addresses the critical challenge of "getting eyes on products" through standardized yet adaptable approaches.
              </p>
              <p className="text-gray-300 mt-4">
                The playbook leverages cross-vertical learnings while respecting the unique dynamics of each market, emphasizing low-cost, high-impact marketing approaches suitable for an early-stage company with a lean team. It incorporates AI-powered tools at every stage of the process, from market intelligence and messaging optimization to campaign management and scaling decisions, enabling data-driven decision-making and continuous improvement.
              </p>
            </div>

            {/* Strategic Foundation Section */}
            <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center mb-4">
                <LightBulbIcon className="h-6 w-6 text-yellow-400 mr-2" />
                <h2 className="text-2xl font-bold text-white">Strategic Foundation</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Purpose of the Playbook</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Standardize launch processes across verticals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Codify best practices from successful KinOS products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Maximize resource efficiency with templates and frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Address the "eyes on product" challenge</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Create institutional knowledge that persists</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">KinOS Market Positioning</h3>
                  <div className="mb-3">
                    <span className="text-blue-400 font-medium">Value Proposition:</span>
                    <p className="mt-1">Intelligent, adaptive AI solutions across industries, built on a unified technological foundation.</p>
                  </div>
                  <div>
                    <span className="text-blue-400 font-medium">Differentiation:</span>
                    <ul className="mt-1 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>More specialized than large AI platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>More sophisticated AI than vertical solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Adaptive systems vs. static traditional software</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700 rounded-lg p-5 shadow mt-4">
                <h3 className="text-xl text-white font-medium mb-3">Cross-Vertical Synergy Framework</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-blue-400 font-medium">Knowledge Transfer Principles:</span>
                    <ul className="mt-1 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Documentation standard with centralized repository</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Bi-weekly cross-vertical GTM meetings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Pattern recognition reports on cross-vertical opportunities</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-blue-400 font-medium">Shared Resources:</span>
                    <ul className="mt-1 space-y-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Central marketing asset library</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Cross-vertical testimonial database</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Unified analytics dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Shared content calendar and distribution</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Analysis Section */}
            <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-6 w-6 text-green-400 mr-2" />
                <h2 className="text-2xl font-bold text-white">Market Analysis & Validation</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Market Opportunity</h3>
                  <p className="mb-2">A structured approach to evaluate market potential:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>TAM Analysis - Total addressable market</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>SAM Calculation - Serviceable available market</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>SOM Projection - Serviceable obtainable market</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm italic">Uses AI-powered Market Intelligence System for initial reports with expert validation.</p>
                </div>

                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Customer Segmentation</h3>
                  <p className="mb-2">ICP Development focuses on:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Demographic Factors (company size, industry)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Technological Factors (tech stack, integration needs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Behavioral Factors (decision process, budget cycles)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Value Alignment with KinOS capabilities</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Problem-Solution Validation</h3>
                  <p className="mb-2">Testing framework includes:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Problem Statement development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Solution Hypothesis definition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Value Metrics identification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Testing Approach design</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm italic">Validated through customer interviews, prototypes, and landing page tests.</p>
                </div>
              </div>
            </div>

            {/* Value Proposition & Messaging */}
            <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center mb-4">
                <CubeTransparentIcon className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl font-bold text-white">Value Proposition & Messaging</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Value Proposition Development</h3>
                  <div className="mb-3">
                    <p className="font-medium text-purple-300">Value Proposition Canvas:</p>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">1.</span>
                        <div>
                          <span className="font-medium">Customer Profile:</span>
                          <p className="text-sm mt-1">Jobs, pains, and desired gains</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">2.</span>
                        <div>
                          <span className="font-medium">Value Map:</span>
                          <p className="text-sm mt-1">Products, pain relievers, gain creators</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-purple-300">Messaging Hierarchy:</p>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Primary Message (core value proposition)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Supporting Messages (3-5 key benefits)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Proof Points (evidence, testimonials)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Call to Action (clear next steps)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Brand Voice & Messaging</h3>
                  <div className="mb-4">
                    <p className="font-medium text-purple-300">Core Messaging Pillars:</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="bg-slate-800 p-2 rounded-md">
                        <span className="font-medium text-white">Intelligence</span>
                        <p className="text-sm">Solutions that learn and adapt</p>
                      </div>
                      <div className="bg-slate-800 p-2 rounded-md">
                        <span className="font-medium text-white">Integration</span>
                        <p className="text-sm">Seamless fit with existing systems</p>
                      </div>
                      <div className="bg-slate-800 p-2 rounded-md">
                        <span className="font-medium text-white">Insight</span>
                        <p className="text-sm">Data-driven decision support</p>
                      </div>
                      <div className="bg-slate-800 p-2 rounded-md">
                        <span className="font-medium text-white">Impact</span>
                        <p className="text-sm">Measurable business outcomes</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-purple-300">Storytelling Framework:</p>
                    <ul className="space-y-1 mt-2">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">1.</span>
                        <span>Situation - Customer's starting point</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">2.</span>
                        <span>Complication - Challenge or pain point</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">3.</span>
                        <span>Solution - How KinOS addresses it</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">4.</span>
                        <span>Outcome - Quantified results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">5.</span>
                        <span>Next Steps - Guided action</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-5 shadow mt-4">
                <h3 className="text-xl text-white font-medium mb-3">Objection Handling & Competitive Positioning</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-purple-300">Common Objection Repository:</p>
                    <ul className="space-y-1 mt-2">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Price objections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Implementation concerns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Competitive comparisons</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Compliance questions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>ROI challenges</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-purple-300">Differentiation Emphasis:</p>
                    <ul className="space-y-1 mt-2">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Against tech giants: Specialization and domain expertise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Against vertical specialists: Advanced AI capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Against legacy providers: Adaptability and ongoing improvement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Acquisition Strategy */}
            <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-6 w-6 text-red-400 mr-2" />
                <h2 className="text-2xl font-bold text-white">Customer Acquisition Strategy</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Multi-Channel Acquisition</h3>
                  <p className="mb-3">Evaluate channels based on:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Customer presence and engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Acquisition cost efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Scalability potential</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Competitive saturation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Alignment with buying process</span>
                    </li>
                  </ul>
                  <div className="mt-3 border-t border-slate-600 pt-3">
                    <p className="text-sm italic">
                      Uses the Channel Performance Predictor to estimate ROI across marketing channels for each vertical.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Low-Cost, High-Impact Tactics</h3>
                  <div className="mb-3">
                    <p className="font-medium text-red-300">Community-Building:</p>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Vertical-specific forums</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Expert roundtables</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>User groups and open feedback loops</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-red-300">Content Marketing:</p>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Cornerstone content and thought leadership</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Case studies with measurable outcomes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Interactive tools providing immediate value</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-5 shadow mt-4">
                <h3 className="text-xl text-white font-medium mb-3">Growth Hacking Methodologies</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-medium text-red-300">Viral Loops & Referrals:</p>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>In-product sharing functionality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Referral incentives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Network effects</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-red-300">Product-Led Growth:</p>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Freemium models</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Self-service onboarding</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Value-based triggers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Expansion pathways</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-red-300">Vertical-Specific Tactics:</p>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Health: Free assessment tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Finance: Benchmark reports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">•</span>
                        <span>Productivity: Shareable templates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Launch Planning & Execution */}
            <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center mb-4">
                <RocketLaunchIcon className="h-6 w-6 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-white">Launch Planning & Execution</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Launch Readiness Assessment</h3>
                  <div className="mb-3">
                    <p className="font-medium text-blue-300">Product Readiness Checklist:</p>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Core functionality tested and validated</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Technical infrastructure scaled</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Security and compliance requirements met</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Monitoring and support systems in place</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-blue-300">Team Preparation:</p>
                    <ul className="space-y-1 mt-1">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Sales enablement (training, materials)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Support readiness (knowledge base)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Marketing preparation (assets, campaigns)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Engineering standby (bug fix protocols)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Phased Launch Strategy</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-800 p-3 rounded">
                      <p className="font-medium text-white">Alpha Phase (4-6 weeks)</p>
                      <ul className="space-y-1 mt-1 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>5-10 design partners with close relationships</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>High-touch engagement and daily feedback</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800 p-3 rounded">
                      <p className="font-medium text-white">Beta Phase (6-8 weeks)</p>
                      <ul className="space-y-1 mt-1 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>20-50 early adopters across target segments</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>Regular feedback sessions and refinement</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800 p-3 rounded">
                      <p className="font-medium text-white">Full Release</p>
                      <ul className="space-y-1 mt-1 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>Public availability with targeted promotion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>Scaled onboarding and comprehensive marketing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-700 rounded-lg p-5 shadow mt-4">
                <h3 className="text-xl text-white font-medium mb-3">Launch Campaign Management</h3>
                <div className="mb-3">
                  <p className="font-medium text-blue-300">Campaign Timeline Template:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    <div className="bg-slate-800 p-2 rounded text-sm">
                      <span className="font-medium text-white">T-90 Days:</span>
                      <p>Finalize positioning and messaging</p>
                    </div>
                    <div className="bg-slate-800 p-2 rounded text-sm">
                      <span className="font-medium text-white">T-60 Days:</span>
                      <p>Develop marketing assets</p>
                    </div>
                    <div className="bg-slate-800 p-2 rounded text-sm">
                      <span className="font-medium text-white">T-45 Days:</span>
                      <p>Begin pre-launch audience building</p>
                    </div>
                    <div className="bg-slate-800 p-2 rounded text-sm">
                      <span className="font-medium text-white">T-30 Days:</span>
                      <p>Start teaser campaign and waitlist</p>
                    </div>
                    <div className="bg-slate-800 p-2 rounded text-sm">
                      <span className="font-medium text-white">Launch Day:</span>
                      <p>Execute coordinated multichannel push</p>
                    </div>
                    <div className="bg-slate-800 p-2 rounded text-sm">
                      <span className="font-medium text-white">Launch+30:</span>
                      <p>Analyze initial results and adjust</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-blue-300">Success Metrics and Monitoring:</p>
                  <p className="mt-1">Implement a real-time dashboard tracking:</p>
                  <ul className="grid grid-cols-2 gap-2 mt-2">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Acquisition metrics by channel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Conversion at each funnel stage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Engagement with launch content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Initial product adoption metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Post-Launch Optimization */}
            <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center mb-4">
                <ArrowTrendingUpIcon className="h-6 w-6 text-yellow-400 mr-2" />
                <h2 className="text-2xl font-bold text-white">Post-Launch Optimization</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Performance Analysis</h3>
                  <p className="mb-2">Key Performance Indicators include:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Common Metrics: CAC, LTV, conversion rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Vertical-Specific Metrics (e.g., patient outcomes for Health)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Analytics Dashboard with acquisition, engagement, and retention views</span>
                    </li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-600">
                    <p className="text-sm italic">
                      Leverages the Pattern Recognition Engine to identify successful patterns from existing KinOS verticals.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Iterative Improvement</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-yellow-300">Feedback Loop:</p>
                      <ol className="space-y-1 mt-1 pl-5 list-decimal text-sm">
                        <li>Collection (multi-channel gathering)</li>
                        <li>Analysis (theme identification)</li>
                        <li>Action (improvement process)</li>
                        <li>Verification (measuring impact)</li>
                      </ol>
                    </div>
                    <div>
                      <p className="font-medium text-yellow-300">A/B Testing:</p>
                      <ul className="space-y-1 mt-1">
                        <li className="flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          <span>Prioritization Framework (impact vs. effort)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          <span>Test Design Protocol (hypothesis formation)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700 rounded-lg p-5 shadow">
                  <h3 className="text-xl text-white font-medium mb-3">Scaling & Expansion</h3>
                  <p className="mb-2">Trigger Points for Scaling:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Acquisition cost stability below target</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Retention exceeding baseline expectations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Customer satisfaction above benchmark</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Unit economics demonstrating profitability</span>
                    </li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-600">
                    <p className="text-sm italic">
                      Uses the Scaling Trigger Detector to continuously monitor key indicators for scaling readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              
            {/* Implementation Roadmap */}
            <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="h-6 w-6 text-green-400 mr-2" />
                <h2 className="text-2xl font-bold text-white">Implementation Roadmap</h2>
              </div>
              
              <div className="space-y-4 mt-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-900 text-green-300 rounded-full h-8 w-8 flex items-center justify-center mr-3">1</div>
                    <h3 className="text-xl text-white font-medium">Phase 1: Foundation (Weeks 1-4)</h3>
                  </div>
                  <ul className="space-y-1 mt-3 ml-11">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Customize templates for your vertical</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Complete market analysis and segmentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Develop vertical-specific value proposition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Identify initial channel strategy</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-900 text-green-300 rounded-full h-8 w-8 flex items-center justify-center mr-3">2</div>
                    <h3 className="text-xl text-white font-medium">Phase 2: Preparation (Weeks 5-8)</h3>
                  </div>
                  <ul className="space-y-1 mt-3 ml-11">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Develop core marketing assets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Implement tracking and analytics systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Recruit early adopters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Train team on messaging and positioning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-900 text-green-300 rounded-full h-8 w-8 flex items-center justify-center mr-3">3</div>
                    <h3 className="text-xl text-white font-medium">Phase 3: Launch Execution (Weeks 9-12)</h3>
                  </div>
                  <ul className="space-y-1 mt-3 ml-11">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Execute phased launch plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Monitor performance daily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Implement rapid optimization process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Document learnings for knowledge base</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-900 text-green-300 rounded-full h-8 w-8 flex items-center justify-center mr-3">4</div>
                    <h3 className="text-xl text-white font-medium">Phase 4: Optimization (Weeks 13-24)</h3>
                  </div>
                  <ul className="space-y-1 mt-3 ml-11">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Scale successful channels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Refine messaging based on market feedback</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Develop case studies from early wins</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Contribute insights to cross-vertical knowledge base</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-900 bg-opacity-30 border border-blue-800 rounded-lg p-4">
                <p className="text-blue-300 font-medium">Conclusion:</p>
                <p className="mt-2 text-gray-300">
                  By following this playbook and customizing it to your vertical's specific needs, you'll create a structured, repeatable approach to bringing KinOS products to market efficiently and effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Section - 1/3 width on desktop */}
          <div className="lg:w-1/3">
            {/* Related Resources */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg sticky top-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <DocumentTextIcon className="h-5 w-5 mr-2 text-blue-400" />
                Related Resources
              </h3>
              <div className="space-y-4">
                {relatedResources.map((resource) => (
                  <Link key={resource.id} href={`/resources/${resource.id}`}>
                    <div className="bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition duration-150 ease-in-out">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          {resource.icon}
                        </div>
                        <div className="ml-3">
                          <h4 className="text-white font-medium">{resource.title}</h4>
                          <p className="text-sm text-gray-300 mt-1">{resource.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Sidebar Content */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg mt-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <ChartBarIcon className="h-5 w-5 mr-2 text-green-400" />
                Case Studies
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-700 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="text-white font-medium">TherapyKin (KinOS Health)</h4>
                  <p className="text-sm text-gray-300 mt-1">Reduced CAC by 47%, increased qualified leads by 215% using free assessment tools with referral functionality.</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="text-white font-medium">KinKong (KinOS Trading)</h4>
                  <p className="text-sm text-gray-300 mt-1">73% trial-to-paid conversion rate, 22% lower CAC than industry average through transparent performance dashboards.</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="text-white font-medium">DuoAI (KinOS Gaming)</h4>
                  <p className="text-sm text-gray-300 mt-1">50,000 users in first month with 62% coming from referrals through partner integration with popular gaming platforms.</p>
                </div>
              </div>
            </div>

            {/* Key Tools */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg mt-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <CubeTransparentIcon className="h-5 w-5 mr-2 text-yellow-400" />
                Key AI Tools
              </h3>
              <div className="space-y-3">
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-white font-medium">Channel Performance Predictor</p>
                  <p className="text-sm text-gray-300 mt-1">Estimates ROI across marketing channels for each vertical</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-white font-medium">AI Campaign Manager</p>
                  <p className="text-sm text-gray-300 mt-1">Automatically adjusts campaign parameters based on performance</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-white font-medium">Customer Journey Optimizer</p>
                  <p className="text-sm text-gray-300 mt-1">Maps and optimizes customer journeys across touchpoints</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-white font-medium">Scaling Trigger Detector</p>
                  <p className="text-sm text-gray-300 mt-1">Monitors key indicators signaling readiness to scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GoToMarketPlaybook