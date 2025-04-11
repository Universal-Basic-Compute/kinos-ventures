'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  BoltIcon, 
  PresentationChartLineIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  TableCellsIcon,
  ArrowPathIcon,
  ScaleIcon,
  DocumentTextIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  PuzzlePieceIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

const PricingPhilosophyFramework = () => {
  // Related resources
  const relatedResources = [
    {
      id: "go-to-market-playbook",
      title: "Go-To-Market Playbook",
      description: "Standardized launch strategy adaptable to different verticals",
      icon: <RocketLaunchIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "customer-success-integration-model",
      title: "Customer Success Integration Model",
      description: "How customer insights feed back into product development",
      icon: <UserGroupIcon className="h-6 w-6 text-green-400" />
    },
    {
      id: "vertical-market-selection-criteria",
      title: "Vertical Market Selection Criteria",
      description: "Framework for evaluating and prioritizing new market opportunities",
      icon: <PuzzlePieceIcon className="h-6 w-6 text-purple-400" />
    },
    {
      id: "metrics-standardization-guide",
      title: "Metrics Standardization Guide",
      description: "Common success measurements applicable across different business units",
      icon: <PresentationChartLineIcon className="h-6 w-6 text-yellow-400" />
    },
    {
      id: "enterprise-client-engagement-protocol",
      title: "Enterprise Client Engagement Protocol",
      description: "Standardized approach for large client relationships and implementations",
      icon: <CubeTransparentIcon className="h-6 w-6 text-pink-400" />
    },
    {
      id: "vertical-performance-evaluation",
      title: "Vertical Performance Evaluation",
      description: "How to assess the health and growth potential of different business lines",
      icon: <ChartBarIcon className="h-6 w-6 text-orange-400" />
    }
  ]

  // Core pricing models
  const pricingModels = [
    {
      title: "Subscription-Based Pricing",
      icon: <ArrowPathIcon className="h-8 w-8 text-blue-400 mb-2" />,
      details: [
        "Monthly/annual subscription tiers",
        "User-based scaling (per seat or active user)",
        "Value-metric based scaling (usage volume, value delivered)"
      ]
    },
    {
      title: "Value-Based Outcome Pricing",
      icon: <ScaleIcon className="h-8 w-8 text-green-400 mb-2" />,
      details: [
        "Percentage of value delivered (gain-share models)",
        "Performance-based pricing components",
        "Success fee structures"
      ]
    },
    {
      title: "Hybrid Models",
      icon: <PuzzlePieceIcon className="h-8 w-8 text-purple-400 mb-2" />,
      details: [
        "Base subscription plus outcome-based components",
        "Tiered pricing with value-based accelerators",
        "Volume-based discounting with value floors"
      ]
    }
  ]

  // Pricing approaches comparison
  const pricingApproaches = [
    {
      approach: "Value-Based",
      description: "Prices based on economic value to customer",
      application: "Primary approach for all verticals"
    },
    {
      approach: "Cost-Plus",
      description: "Cost of production plus markup",
      application: "Used only for baseline minimum pricing"
    },
    {
      approach: "Competitive",
      description: "Prices set relative to competitors",
      application: "Considered for commoditized features only"
    },
    {
      approach: "Market-Based",
      description: "Prices determined by market forces",
      application: "Used for initial pricing research"
    }
  ]

  // AI integration features
  const aiIntegrationFeatures = [
    {
      title: "Dynamic Pricing Engine",
      icon: <BoltIcon className="h-8 w-8 text-yellow-400 mb-2" />,
      description: "ML models that adjust pricing based on measured value delivery, customer segment analysis, and competitive intelligence."
    },
    {
      title: "Value Quantification AI",
      icon: <PresentationChartLineIcon className="h-8 w-8 text-blue-400 mb-2" />,
      description: "Systems that track, quantify, and forecast potential value for prospects with real-time dashboards."
    },
    {
      title: "Customer-Specific Pricing Recommendations",
      icon: <SparklesIcon className="h-8 w-8 text-purple-400 mb-2" />,
      description: "AI-generated pricing recommendations for sales teams, with optimal discount levels and bundle suggestions."
    },
    {
      title: "Pricing Simulation Tools",
      icon: <CubeTransparentIcon className="h-8 w-8 text-green-400 mb-2" />,
      description: "Agent-based simulations of market responses to pricing changes with revenue impact forecasting."
    }
  ]

  // Implementation example packages
  const implementationExamples = [
    {
      vertical: "KinOS Health",
      package: "TherapyKin Professional Plan",
      details: [
        "$299 per provider monthly ($3,288 annually)",
        "Includes 50 active patients",
        "$15 per additional active patient",
        "2% share of documented insurance reimbursement increases"
      ],
      icon: <UserGroupIcon className="h-8 w-8 text-blue-400 mb-2" />
    },
    {
      vertical: "KinOS Finance",
      package: "KinKong Advanced Trading Suite",
      details: [
        "$599 per seat monthly ($6,588 annually)",
        "Includes analysis for portfolios up to $10M",
        "2 basis points on AUI above $10M",
        "5% of net returns exceeding benchmark"
      ],
      icon: <CurrencyDollarIcon className="h-8 w-8 text-green-400 mb-2" />
    },
    {
      vertical: "KinOS Productivity",
      package: "KinOS Enterprise Productivity Suite",
      details: [
        "$79 per user monthly ($869 annually)",
        "$50/user for 100+ seats",
        "Enterprise option: $50,000 annually for unlimited users",
        "$1,000 per custom workflow automation"
      ],
      icon: <Cog6ToothIcon className="h-8 w-8 text-purple-400 mb-2" />
    }
  ]

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full bg-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing Philosophy & Framework
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Principles for creating value-based pricing across diverse product lines
              </p>
              <div className="flex items-center bg-slate-700 p-4 rounded-lg border border-slate-600">
                <CurrencyDollarIcon className="h-8 w-8 text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  A value-based pricing methodology that quantifies and captures the unique benefits our solutions deliver across different customer segments and verticals.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative h-64 w-64">
                <Image 
                  src="/business_growth/pricing-philosophy-framework.png" 
                  alt="Pricing Philosophy & Framework" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Executive Summary */}
        <div className="bg-slate-800 rounded-xl p-6 mb-12 border border-slate-700 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <DocumentTextIcon className="h-6 w-6 text-blue-400 mr-2" />
            Executive Summary
          </h2>
          <p className="text-gray-300">
            This document establishes KinOS Ventures' approach to value-based pricing across our diverse vertical business units. 
            Rather than traditional cost-plus models, our pricing strategy focuses on quantifying and capturing the unique value 
            our AI solutions deliver to different market segments. This framework provides methodologies for value quantification, 
            pricing structure design, and implementation guidelines that balance revenue optimization with market penetration objectives. 
            By adopting a consistent yet adaptable pricing approach across all verticals, we can maximize lifetime customer value 
            while accelerating adoption of the unified KinOS technology core.
          </p>
        </div>

        {/* Introduction to Value-Based Pricing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
            I. Introduction to Value-Based Pricing
          </h2>
          
          {/* Core Philosophy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <LightBulbIcon className="h-5 w-5 text-yellow-400 mr-2" />
              Core Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-md">
                <h4 className="text-white font-medium mb-2">Value creation as pricing foundation</h4>
                <p className="text-gray-300 text-sm">Prices reflect the economic value delivered to customers rather than our internal costs</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-md">
                <h4 className="text-white font-medium mb-2">Value perception over cost structure</h4>
                <p className="text-gray-300 text-sm">We price based on what our solutions are worth to customers, not what they cost to build</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-md">
                <h4 className="text-white font-medium mb-2">Alignment with KinOS mission</h4>
                <p className="text-gray-300 text-sm">Our pricing supports our goal of deploying intelligent, adaptive AI solutions across multiple verticals</p>
              </div>
            </div>
          </div>
          
          {/* Value-Based Pricing vs. Traditional Methods */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <ScaleIcon className="h-5 w-5 text-blue-400 mr-2" />
              Value-Based Pricing vs. Traditional Methods
            </h3>
            <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shadow-md">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                  <thead className="bg-slate-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Pricing Approach
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Application in KinOS Ventures
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {pricingApproaches.map((approach, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-750'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {approach.approach === "Value-Based" ? (
                            <span className="flex items-center">
                              <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                              {approach.approach}
                            </span>
                          ) : approach.approach}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {approach.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {approach.application}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Strategic Objectives */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <ArrowTrendingUpIcon className="h-5 w-5 text-green-400 mr-2" />
              Strategic Objectives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-md">
                <h4 className="text-white font-medium mb-2">Customer lifetime value optimization</h4>
                <p className="text-gray-300 text-sm">Pricing that encourages long-term relationships over one-time purchases</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-md">
                <h4 className="text-white font-medium mb-2">Market penetration and growth balance</h4>
                <p className="text-gray-300 text-sm">Tiered pricing that allows for both entry-level and premium offerings</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-5 border border-slate-700 shadow-md">
                <h4 className="text-white font-medium mb-2">Cross-vertical consistency</h4>
                <p className="text-gray-300 text-sm">Core pricing principles that apply across all business units while allowing for vertical-specific adaptations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Structure Design */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
            II. Pricing Structure Design
          </h2>
          
          {/* Core Pricing Models */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Core Pricing Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingModels.map((model, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
                  <div className="mb-4">
                    {model.icon}
                    <h4 className="text-lg font-medium text-white mb-3">{model.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {model.details.map((detail, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="inline-block h-5 w-5 rounded-full bg-blue-900 flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center">
                          <span className="text-xs text-white">{i+1}</span>
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Vertical-Specific Implementation Examples */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Vertical-Specific Implementation Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {implementationExamples.map((example, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
                  <div className="mb-4">
                    {example.icon}
                    <h4 className="text-lg font-medium text-white">{example.vertical}</h4>
                    <p className="text-blue-400 text-sm font-medium">{example.package}</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <ul className="space-y-2">
                      {example.details.map((detail, i) => (
                        <li key={i} className="text-gray-300 text-sm">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Integration for Pricing Optimization */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
            III. AI Integration for Pricing Optimization
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiIntegrationFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
                <div className="flex flex-col items-start">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Measurement Techniques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
            IV. Value Measurement Techniques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
              <ChartBarIcon className="h-8 w-8 text-blue-400 mb-2" />
              <h3 className="text-xl font-semibold text-white mb-3">Comparative Analysis</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Before/after implementation studies</li>
                <li className="text-gray-300">Control group comparisons</li>
                <li className="text-gray-300">Industry benchmark comparisons</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
              <UserGroupIcon className="h-8 w-8 text-green-400 mb-2" />
              <h3 className="text-xl font-semibold text-white mb-3">Customer Value Discovery</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Structured customer interviews</li>
                <li className="text-gray-300">Value hypothesis testing workshops</li>
                <li className="text-gray-300">Usage pattern analysis</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
              <TableCellsIcon className="h-8 w-8 text-purple-400 mb-2" />
              <h3 className="text-xl font-semibold text-white mb-3">ROI Calculation Templates</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Time-to-value calculations</li>
                <li className="text-gray-300">TCO (Total Cost of Ownership) reduction models</li>
                <li className="text-gray-300">Productivity impact calculators</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integration with Customer Success */}
        <div className="bg-slate-800 rounded-xl p-6 mb-12 border border-slate-700 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <UserGroupIcon className="h-6 w-6 text-green-400 mr-2" />
            Integration with Customer Success
          </h2>
          <div className="text-gray-300 prose prose-invert max-w-none">
            <p>
              Our pricing strategy works in concert with our Customer Success Integration Model to ensure 
              value delivery is continuously measured and communicated to customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-slate-700 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Value Delivery Monitoring</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Automated tracking of value metrics</li>
                  <li>Regular value delivery reports for customers</li>
                  <li>Value realization workshops</li>
                </ul>
              </div>
              <div className="bg-slate-700 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Success-Based Pricing Components</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Price adjustments based on measured success</li>
                  <li>Renewal pricing tied to realized value</li>
                  <li>Expansion pricing based on documented outcomes</li>
                </ul>
              </div>
              <div className="bg-slate-700 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Customer Success Team Integration</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Training on value communication</li>
                  <li>Tools for demonstrating ROI to customers</li>
                  <li>Value-based customer expansion playbooks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Considerations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
            V. Ethical Considerations and Guidelines
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <DocumentTextIcon className="h-6 w-6 text-blue-400 mr-2" />
                Transparency Principles
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Clear communication of pricing structures</li>
                <li>Explicit value measurement methodologies</li>
                <li>Honest representation of expected outcomes</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <ScaleIcon className="h-6 w-6 text-green-400 mr-2" />
                Fairness in Pricing
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Value-alignment across customer segments</li>
                <li>Proportional pricing relative to value received</li>
                <li>Equitable treatment of similar customers</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <SparklesIcon className="h-6 w-6 text-purple-400 mr-2" />
                Ethical AI in Pricing
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Bias monitoring in pricing algorithms</li>
                <li>Explainable AI for pricing recommendations</li>
                <li>Regular ethical reviews of pricing systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 mb-12 border border-slate-600 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
          <p className="text-gray-300">
            The KinOS Ventures Pricing Philosophy & Framework provides a comprehensive approach to developing, implementing, 
            and optimizing value-based pricing across all our vertical business units. By focusing on the actual value we 
            deliver rather than our costs, we create alignment between our success and our customers' outcomes. This framework 
            should be used by all vertical business leaders in collaboration with the Pricing Council to establish pricing that 
            attracts customers, communicates our value, and builds sustainable revenue.
          </p>
          <p className="text-gray-300 mt-4">
            Through consistent application of these principles, adapted appropriately for each vertical market, we can achieve 
            our strategic objectives of creating sustainable revenue models while rapidly scaling our unified technology core 
            across multiple domains.
          </p>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <PuzzlePieceIcon className="h-6 w-6 text-blue-400 mr-2" />
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedResources.map((resource) => (
              <Link 
                key={resource.id} 
                href={`/resources/business-growth/${resource.id}`}
                className="bg-slate-700 rounded-lg p-5 border border-slate-600 shadow-md hover:bg-slate-650 transition-colors duration-200 flex flex-col h-full"
              >
                <div className="flex items-start mb-3">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{resource.title}</h3>
                    <p className="text-gray-300 text-sm">{resource.description}</p>
                  </div>
                </div>
                <div className="mt-auto pt-3 text-blue-400 text-sm font-medium">
                  View Resource →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPhilosophyFramework