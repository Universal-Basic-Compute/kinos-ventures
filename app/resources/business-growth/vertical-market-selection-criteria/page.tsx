'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ChartBarIcon, 
  MagnifyingGlassIcon, 
  LightBulbIcon, 
  ClipboardDocumentCheckIcon, 
  DocumentTextIcon, 
  CpuChipIcon, 
  UserGroupIcon, 
  ArrowsRightLeftIcon,
  ArrowPathIcon,
  BuildingOffice2Icon,
  ScaleIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  PresentationChartBarIcon,
  Square3Stack3DIcon
} from '@heroicons/react/24/outline'

export default function VerticalMarketSelectionCriteriaPage() {
  // Related resources data
  const relatedResources = [
    {
      id: "vertical-integration-strategy",
      title: "Vertical Integration Strategy",
      description: "Framework for identifying, developing, and scaling new business verticals",
      url: "/resources/core-philosophy-strategy/vertical-integration-strategy",
      icon: <BuildingOffice2Icon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "resource-allocation-framework",
      title: "Resource Allocation Framework",
      description: "System for distributing technical and human resources across verticals",
      url: "/resources/operations-management/resource-allocation-framework",
      icon: <ArrowsRightLeftIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "go-to-market-playbook",
      title: "Go-To-Market Playbook",
      description: "Standardized launch strategy adaptable to different verticals",
      url: "/resources/business-growth/go-to-market-playbook",
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "first-principles-decision-making",
      title: "First Principles Decision-Making",
      description: "Structured approach to making decisions based on fundamental truths",
      url: "/resources/core-philosophy-strategy/first-principles-decision-making",
      icon: <LightBulbIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "vertical-performance-evaluation",
      title: "Vertical Performance Evaluation",
      description: "How to assess the health and growth potential of different business lines",
      url: "/resources/operations-management/vertical-performance-evaluation",
      icon: <ChartBarIcon className="h-6 w-6 text-blue-400" />
    },
    {
      id: "partnership-evaluation-matrix",
      title: "Partnership Evaluation Matrix",
      description: "Criteria for assessing strategic alignment with potential partners",
      url: "/resources/business-growth/partnership-evaluation-matrix",
      icon: <UserGroupIcon className="h-6 w-6 text-blue-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-slate-800 py-10">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src="/categories/Business_Growth/vertical-market-selection-criteria.png" 
            alt="Background Pattern" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Vertical Market Selection Criteria
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Framework for evaluating and prioritizing new market opportunities for KinOS Ventures
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <DocumentTextIcon className="h-5 w-5" />
              <span>A systematic evaluation framework for making strategic vertical market decisions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300">
                <h2>Executive Summary</h2>
                <p>
                  This framework provides a systematic approach for KinOS Ventures to evaluate and prioritize vertical market opportunities. Building on our core technology and multi-vertical strategy, it establishes clear criteria to assess market attractiveness, strategic fit, and execution feasibility. By implementing this structured decision-making process, we can optimize resource allocation, accelerate market entry, and maximize the impact of our KinOS engine across diverse industries.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 h-fit">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <ChartPieIcon className="h-6 w-6 mr-2 text-blue-400" />
                At a Glance
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                    <ArrowPathIcon className="h-4 w-4" />
                  </span>
                  <span>Multi-stage selection process</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </span>
                  <span>Detailed market screening methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                    <ScaleIcon className="h-4 w-4" />
                  </span>
                  <span>Balanced assessment across multiple dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                    <CpuChipIcon className="h-4 w-4" />
                  </span>
                  <span>AI-powered opportunity analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                    <ClipboardDocumentCheckIcon className="h-4 w-4" />
                  </span>
                  <span>Structured stage-gate decision process</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Strategic Foundation */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <LightBulbIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Strategic Foundation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Purpose and Principles</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                      <span className="text-sm font-medium">1</span>
                    </span>
                    <span><strong>Mission Alignment:</strong> Every vertical market selection must advance our core mission of deploying the KinOS engine's capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                      <span className="text-sm font-medium">2</span>
                    </span>
                    <span><strong>Resource Optimization:</strong> Maximize impact of limited resources by selecting verticals with greatest potential return</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                      <span className="text-sm font-medium">3</span>
                    </span>
                    <span><strong>Portfolio Balance:</strong> Maintain a diversified portfolio of verticals at different maturity stages and risk profiles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                      <span className="text-sm font-medium">4</span>
                    </span>
                    <span><strong>Technology Leverage:</strong> Prioritize verticals where the KinOS engine provides unique, differentiating capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-900/30 text-blue-400 mr-3 mt-0.5">
                      <span className="text-sm font-medium">5</span>
                    </span>
                    <span><strong>Knowledge Transfer:</strong> Favor verticals that can benefit from and contribute to cross-domain intelligence</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Multi-Stage Selection Process</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center p-3 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 mr-3">
                      <span className="font-semibold">1</span>
                    </div>
                    <div>Market Identification & Initial Screening</div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 mr-3">
                      <span className="font-semibold">2</span>
                    </div>
                    <div>Detailed Opportunity Assessment</div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 mr-3">
                      <span className="font-semibold">3</span>
                    </div>
                    <div>Strategic Fit Evaluation</div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 mr-3">
                      <span className="font-semibold">4</span>
                    </div>
                    <div>Resource & Implementation Planning</div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 mr-3">
                      <span className="font-semibold">5</span>
                    </div>
                    <div>Go/No-Go Decision</div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-slate-700/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 mr-3">
                      <span className="font-semibold">6</span>
                    </div>
                    <div>Performance Monitoring & Adjustment</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Initial Market Screening */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <MagnifyingGlassIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Initial Market Screening</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Market Size and Growth Trajectory</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Total Addressable Market (TAM)</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Minimum threshold: $1B+ for mature markets, $500M+ for emerging segments</li>
                      <li>Methodology: Primary research, industry reports, and AI-powered market sizing</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Growth Rate</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Target: 15%+ CAGR for established markets, 30%+ for emerging verticals</li>
                      <li>Priority for markets experiencing digital transformation or AI disruption</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Serviceable Obtainable Market (SOM)</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Realistic market capture potential within 24-36 months</li>
                      <li>Minimum target: $10M in annual revenue potential within 3 years</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Problem-Solution Fit</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Problem Severity</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Magnitude of pain point for target customers (scored 1-10)</li>
                      <li>Frequency of problem occurrence</li>
                      <li>Current cost of the problem (time, money, resources)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Solution Differentiation</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Extent to which KinOS capabilities address the problem uniquely</li>
                      <li>Potential improvement over existing solutions (quantifiable metrics)</li>
                      <li>Integration advantage with existing vertical offerings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Competitive Landscape</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Competitive Intensity</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Number and strength of established competitors</li>
                    <li>Recent competitive funding activity</li>
                    <li>Barriers to entry and switching costs</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Disruption Potential</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Vulnerability of incumbents to AI-based solutions</li>
                    <li>Evidence of customer dissatisfaction with current offerings</li>
                    <li>Regulatory or technological shifts creating market openings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60">
              <h3 className="text-xl font-semibold mb-4 text-white">Initial Screening Scorecard</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700 text-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Criteria</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Weight</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Rating (1-10)</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Weighted Score</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Threshold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    <tr>
                      <td className="px-4 py-3 text-sm">Market Size</td>
                      <td className="px-4 py-3 text-sm">20%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">7</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Growth Rate</td>
                      <td className="px-4 py-3 text-sm">15%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">7</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Problem Severity</td>
                      <td className="px-4 py-3 text-sm">20%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">8</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Solution Differentiation</td>
                      <td className="px-4 py-3 text-sm">25%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">8</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Competitive Position</td>
                      <td className="px-4 py-3 text-sm">20%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">6</td>
                    </tr>
                    <tr className="bg-slate-700/20">
                      <td className="px-4 py-3 text-sm font-semibold text-white">TOTAL</td>
                      <td className="px-4 py-3 text-sm font-semibold text-white">100%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm font-semibold text-white">7.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Detailed Opportunity Assessment */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Detailed Opportunity Assessment</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                  <UserGroupIcon className="h-6 w-6 text-blue-400 mr-2" />
                  Customer Analysis
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Ideal Customer Profile</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Demographic and firmographic characteristics</li>
                      <li>Decision-making processes and buying behaviors</li>
                      <li>Technical readiness for AI integration</li>
                      <li>Willingness to pay for AI-powered solutions</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">User Personas</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Primary and secondary users of the solution</li>
                      <li>Key pain points and desired outcomes</li>
                      <li>Current alternatives and workarounds</li>
                      <li>Influence on purchasing decisions</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Customer Acquisition</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Identifiable channels to reach target customers</li>
                      <li>Customer acquisition cost (CAC) estimates</li>
                      <li>Sales cycle duration and complexity</li>
                      <li>Potential for viral growth or network effects</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                  <ChartBarIcon className="h-6 w-6 text-blue-400 mr-2" />
                  Revenue Model Assessment
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Pricing Strategy</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Viability of subscription, transaction, or hybrid models</li>
                      <li>Price sensitivity analysis</li>
                      <li>Benchmarking against comparable solutions</li>
                      <li>Premium pricing potential based on value creation</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Revenue Projections</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Year 1-3 revenue forecasts with scenario analysis</li>
                      <li>Customer lifetime value (LTV) estimates</li>
                      <li>LTV:CAC ratio projection</li>
                      <li>Time to break-even analysis</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Monetization Opportunities</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Core offering revenue potential</li>
                      <li>Upsell/cross-sell opportunities</li>
                      <li>Data monetization possibilities (within ethical guidelines)</li>
                      <li>Partnership and integration revenue potential</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                  <CpuChipIcon className="h-6 w-6 text-blue-400 mr-2" />
                  Technological Feasibility
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Core Technology Alignment</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Leverage of KinOS engine's memory capabilities</li>
                      <li>Adaptation mechanisms applicable to the vertical</li>
                      <li>Growth potential through continuous learning</li>
                      <li>Vertical-specific technical requirements</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Development Requirements</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Estimated engineering resources needed</li>
                      <li>New capabilities requiring development</li>
                      <li>Integration complexity with existing systems</li>
                      <li>Data requirements and availability</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Technical Risk Assessment</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Major technical challenges and uncertainties</li>
                      <li>Dependency on external technologies or APIs</li>
                      <li>Scalability considerations</li>
                      <li>Performance requirements and benchmarks</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-blue-400 mr-2" />
                  Market Entry Strategy
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Go-to-Market Approach</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Direct sales vs. partnership vs. platform strategy</li>
                      <li>Required marketing and sales resources</li>
                      <li>Time-to-market estimates</li>
                      <li>Geographic expansion considerations</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Regulatory & Compliance</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Industry-specific regulations</li>
                      <li>Data privacy and security requirements</li>
                      <li>Certification or approval processes</li>
                      <li>Ethical considerations specific to the vertical</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-slate-700/50">
                    <h4 className="font-semibold mb-2">Strategic Positioning</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Brand positioning within the vertical</li>
                      <li>Messaging and value proposition</li>
                      <li>Competitive response anticipation</li>
                      <li>Long-term defensibility strategy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Fit Evaluation */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <Square3Stack3DIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Strategic Fit Evaluation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Alignment with KinOS Ventures Strategy</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <CpuChipIcon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-1">Technology Ecosystem Contribution</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                        <li>How the vertical enhances the core KinOS engine</li>
                        <li>Data and learning advantages gained</li>
                        <li>Potential for cross-vertical intelligence sharing</li>
                        <li>Technical asset creation and reusability</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <ArrowsRightLeftIcon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-1">Portfolio Complementarity</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                        <li>Synergies with existing KinOS verticals</li>
                        <li>Balance of risk and maturity across portfolio</li>
                        <li>Resource sharing opportunities</li>
                        <li>Cross-selling potential to existing customers</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <PresentationChartBarIcon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-1">Strategic Positioning</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                        <li>Contribution to market leadership in AI</li>
                        <li>Enhancement of the KinOS brand</li>
                        <li>Creation of barriers to entry for competitors</li>
                        <li>Alignment with long-term vision and mission</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Resource Requirements</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <ChartPieIcon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-1">Financial Investment</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                        <li>Initial capital requirements</li>
                        <li>Ongoing operational costs</li>
                        <li>Expected time to profitability</li>
                        <li>Capital efficiency metrics</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <UserGroupIcon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-1">Talent Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                        <li>Domain expertise needed</li>
                        <li>Technical skill requirements</li>
                        <li>Leadership and execution capabilities</li>
                        <li>Recruitment and training investments</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <ScaleIcon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-1">Opportunity Cost</h4>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                        <li>Impact on other vertical initiatives</li>
                        <li>Core platform development trade-offs</li>
                        <li>Management attention and focus</li>
                        <li>Alternative uses of equivalent resources</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Risk Assessment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-400">Market Risks</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Adoption barriers and market education needs</li>
                    <li>Competitive response likelihood</li>
                    <li>Market timing considerations</li>
                    <li>Sensitivity to economic conditions</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-400">Execution Risks</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Operational challenges</li>
                    <li>Timeline uncertainties</li>
                    <li>Scale-up complexities</li>
                    <li>Knowledge and capability gaps</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-400">Strategic Risks</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Impact of failure on brand and reputation</li>
                    <li>Lock-in or path dependency concerns</li>
                    <li>Future optionality implications</li>
                    <li>Potential cannibalization of existing offerings</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60">
              <h3 className="text-xl font-semibold mb-4 text-white">Strategic Fit Scorecard</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700 text-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Criteria</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Weight</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Rating (1-10)</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Weighted Score</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Threshold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    <tr>
                      <td className="px-4 py-3 text-sm">Technology Ecosystem Contribution</td>
                      <td className="px-4 py-3 text-sm">25%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">8</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Portfolio Complementarity</td>
                      <td className="px-4 py-3 text-sm">20%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">7</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Resource Efficiency</td>
                      <td className="px-4 py-3 text-sm">20%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">7</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Risk Profile</td>
                      <td className="px-4 py-3 text-sm">15%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">6</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Strategic Positioning</td>
                      <td className="px-4 py-3 text-sm">20%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">8</td>
                    </tr>
                    <tr className="bg-slate-700/20">
                      <td className="px-4 py-3 text-sm font-semibold text-white">TOTAL</td>
                      <td className="px-4 py-3 text-sm font-semibold text-white">100%</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm">-</td>
                      <td className="px-4 py-3 text-sm font-semibold text-white">7.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* AI Integration for Vertical Selection */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <CpuChipIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">AI Integration for Vertical Selection</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-full">
                <div className="flex items-center mb-4">
                  <MagnifyingGlassIcon className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Market Opportunity Analysis Engine</h3>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4 text-gray-300">
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <p>AI-powered market analysis system leveraging the KinOS engine</p>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4 text-gray-300">
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Automated industry research and data aggregation</li>
                    <li>Pattern recognition across successful AI applications</li>
                    <li>Predictive modeling of market size and growth</li>
                    <li>Competitive landscape mapping and threat assessment</li>
                    <li>Opportunity scoring based on historical success patterns</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg text-gray-300">
                  <h4 className="font-semibold mb-2">Technical Approach</h4>
                  <p>Train on historical market entry data, industry reports, news sources, and funding data to identify patterns of successful vertical applications</p>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-full">
                <div className="flex items-center mb-4">
                  <Square3Stack3DIcon className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Strategic Fit Assessment Tool</h3>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4 text-gray-300">
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <p>AI system to evaluate alignment with KinOS strategy</p>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4 text-gray-300">
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Similarity analysis between new vertical and existing successful verticals</li>
                    <li>Resource requirement estimation based on historical projects</li>
                    <li>Technical synergy scoring using knowledge graph analysis</li>
                    <li>Risk profile generation with probabilistic modeling</li>
                    <li>Portfolio optimization recommendations</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg text-gray-300">
                  <h4 className="font-semibold mb-2">Integration Points</h4>
                  <p>Connected to project management systems, engineering databases, and financial performance records of existing verticals</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-full">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Customer Discovery Analysis System</h3>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4 text-gray-300">
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <p>AI-driven customer research platform</p>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4 text-gray-300">
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Natural language processing of customer interviews and feedback</li>
                    <li>Sentiment analysis of market reactions to similar solutions</li>
                    <li>Pattern identification in customer pain points and needs</li>
                    <li>Automated persona development and refinement</li>
                    <li>Value proposition testing and optimization</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg text-gray-300">
                  <h4 className="font-semibold mb-2">Data Sources</h4>
                  <p>Customer interviews, social media, product reviews, support tickets, industry forums, sales call transcripts</p>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-full">
                <div className="flex items-center mb-4">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Implementation Planning Assistant</h3>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4 text-gray-300">
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <p>AI project planning and resource allocation tool</p>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg mb-4 text-gray-300">
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Automated project plan generation based on vertical characteristics</li>
                    <li>Resource requirement forecasting using historical data</li>
                    <li>Risk identification and mitigation strategy recommendation</li>
                    <li>Timeline optimization with confidence intervals</li>
                    <li>Dynamic adjustment of plans based on progress data</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/50 rounded-lg text-gray-300">
                  <h4 className="font-semibold mb-2">Technical Requirements</h4>
                  <p>Integration with project management tools, resource management systems, and historical project performance data</p>
                </div>
              </div>
            </div>
          </section>

          {/* Decision-Making Framework */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Decision-Making Framework</h2>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Stage-Gate Process</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="bg-blue-900/30 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    <span className="font-semibold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Initial Screening Approval</h4>
                  <p className="text-sm mb-3">Requirements:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Minimum Initial Screening Score: 7.5/10</li>
                    <li>Executive sponsor identified</li>
                    <li>Preliminary research completed</li>
                    <li>Initial resource estimate</li>
                  </ul>
                  <p className="text-sm mt-3"><strong>Outcome:</strong> Approval for detailed assessment phase with budget allocation</p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="bg-blue-900/30 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    <span className="font-semibold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Detailed Assessment Approval</h4>
                  <p className="text-sm mb-3">Requirements:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Customer validation evidence</li>
                    <li>Technical feasibility confirmation</li>
                    <li>Comprehensive business case</li>
                    <li>Strategic Fit Score: 7.5/10</li>
                  </ul>
                  <p className="text-sm mt-3"><strong>Outcome:</strong> Approval for validation phase with defined success criteria</p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="bg-blue-900/30 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    <span className="font-semibold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">MVP Development Approval</h4>
                  <p className="text-sm mb-3">Requirements:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Validation phase success metrics achieved</li>
                    <li>Refined business case with updated projections</li>
                    <li>Resource commitment from key stakeholders</li>
                    <li>Technical architecture approved</li>
                  </ul>
                  <p className="text-sm mt-3"><strong>Outcome:</strong> Approval for MVP development with allocated resources</p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="bg-blue-900/30 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    <span className="font-semibold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Market Launch Approval</h4>
                  <p className="text-sm mb-3">Requirements:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>MVP success metrics achieved</li>
                    <li>Customer feedback integration completed</li>
                    <li>Go-to-market plan finalized</li>
                    <li>Operational readiness confirmed</li>
                  </ul>
                  <p className="text-sm mt-3"><strong>Outcome:</strong> Approval for full market launch with performance expectations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Decision Authority Matrix</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700 text-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Decision Level</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Decision Maker(s)</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Documentation Required</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white bg-slate-700/50">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    <tr>
                      <td className="px-4 py-3 text-sm">Initial Screening</td>
                      <td className="px-4 py-3 text-sm">Vertical Expansion Committee</td>
                      <td className="px-4 py-3 text-sm">Screening Scorecard, Basic Business Case</td>
                      <td className="px-4 py-3 text-sm">1 week</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Detailed Assessment</td>
                      <td className="px-4 py-3 text-sm">Executive Leadership Team</td>
                      <td className="px-4 py-3 text-sm">Full Business Case, Strategic Fit Analysis</td>
                      <td className="px-4 py-3 text-sm">2 weeks</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Validation Phase</td>
                      <td className="px-4 py-3 text-sm">CEO + CTO + CFO</td>
                      <td className="px-4 py-3 text-sm">Validation Plan, Success Metrics, Budget</td>
                      <td className="px-4 py-3 text-sm">1 week</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">MVP Development</td>
                      <td className="px-4 py-3 text-sm">Executive Leadership Team</td>
                      <td className="px-4 py-3 text-sm">Technical Spec, Resource Plan, Updated Business Case</td>
                      <td className="px-4 py-3 text-sm">2 weeks</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Market Launch</td>
                      <td className="px-4 py-3 text-sm">Board of Directors</td>
                      <td className="px-4 py-3 text-sm">Launch Plan, Performance Projections, Risk Assessment</td>
                      <td className="px-4 py-3 text-sm">3 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Investment Prioritization</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                <div className="p-4 bg-blue-900/20 border border-blue-900/30 rounded-lg">
                  <h4 className="font-semibold mb-3 text-blue-400 flex items-center">
                    <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
                    Tier 1
                  </h4>
                  <p className="text-sm mb-3">High strategic value, strong financial potential, significant technical synergy</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Fast-tracked approval process</li>
                    <li>Priority resource allocation</li>
                    <li>Executive sponsor from C-suite</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/50 border border-slate-600/50 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-200 flex items-center">
                    <ArrowsRightLeftIcon className="h-5 w-5 mr-2" />
                    Tier 2
                  </h4>
                  <p className="text-sm mb-3">Solid strategic fit, good financial potential, moderate technical synergy</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Standard approval process</li>
                    <li>Balanced resource allocation</li>
                    <li>Senior leadership sponsor</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-slate-700/30 border border-slate-600/30 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-300 flex items-center">
                    <ChartBarIcon className="h-5 w-5 mr-2" />
                    Tier 3
                  </h4>
                  <p className="text-sm mb-3">Specialized opportunity, uncertain financial outcomes, limited technical synergy</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Extended validation requirements</li>
                    <li>Contained resource allocation</li>
                    <li>Milestone-based continued investment</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Example */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <DocumentTextIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Practical Example: KinOS Health</h2>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Example: Evaluating KinOS Health (TherapyKin expansion)</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <div className="p-5 bg-slate-700/50 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3 text-white flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5 mr-2 text-blue-400" />
                      Initial Screening
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Market Size:</span>
                        <span className="text-green-400">Mental health market $50B+, 18% CAGR (Score: 9/10)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Problem Severity:</span>
                        <span className="text-green-400">High patient-therapist mismatch rates, limited session recall (Score: 9/10)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Solution Differentiation:</span>
                        <span className="text-green-400">Memory capabilities create unique session continuity (Score: 10/10)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Competitive Position:</span>
                        <span className="text-green-400">Few AI-powered therapy assistants with memory capabilities (Score: 8/10)</span>
                      </li>
                      <li className="flex justify-between font-semibold mt-3 pt-3 border-t border-slate-600">
                        <span>Total Score:</span>
                        <span className="text-green-400">9.0/10 → Proceed to detailed assessment</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-5 bg-slate-700/50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-white flex items-center">
                      <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2 text-blue-400" />
                      Detailed Assessment
                    </h4>
                    <ul className="space-y-3 ml-2">
                      <li>
                        <strong className="text-blue-400">Customer Analysis:</strong>
                        <p className="text-sm mt-1">Therapists spend 6+ hours weekly on notes, patients report 40% forgetting key insights</p>
                      </li>
                      <li>
                        <strong className="text-blue-400">Revenue Model:</strong>
                        <p className="text-sm mt-1">$200/month per therapist subscription, 30% adoption rate within 2 years</p>
                      </li>
                      <li>
                        <strong className="text-blue-400">Technical Feasibility:</strong>
                        <p className="text-sm mt-1">Core memory capabilities directly applicable, privacy engineering required</p>
                      </li>
                      <li>
                        <strong className="text-blue-400">Strategic Fit:</strong>
                        <p className="text-sm mt-1">High cross-vertical potential (education, productivity), strong data advantages</p>
                      </li>
                      <li>
                        <strong className="text-blue-400">Risk Assessment:</strong>
                        <p className="text-sm mt-1">Regulatory compliance complexity, privacy concerns, professional adoption resistance</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-5 bg-slate-700/50 rounded-lg h-full">
                  <h4 className="font-semibold mb-4 text-white flex items-center">
                    <WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Implementation Plan
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-800/80 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-1">Validation</h5>
                      <p className="text-sm">Partner with 5 therapy practices for pilot program</p>
                    </div>
                    
                    <div className="p-3 bg-slate-800/80 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-1">MVP Development</h5>
                      <p className="text-sm">Session memory features, therapist note automation, patient insight reinforcement</p>
                    </div>
                    
                    <div className="p-3 bg-slate-800/80 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-1">Launch Strategy</h5>
                      <p className="text-sm">Professional association partnerships, targeted digital marketing to practices</p>
                    </div>
                    
                    <div className="p-3 bg-slate-800/80 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-1">Success Metrics</h5>
                      <p className="text-sm">Therapist time saved, patient retention improvement, session effectiveness increase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Conclusion</h3>
              
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>The Vertical Market Selection Criteria framework provides KinOS Ventures with a systematic, data-driven approach to evaluating and prioritizing new market opportunities. By applying consistent evaluation standards while allowing for vertical-specific considerations, this framework balances rigorous analysis with entrepreneurial opportunity pursuit.</p>
                
                <p>Successful implementation requires:</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
                <div className="bg-slate-700/40 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-semibold text-lg">1</span>
                  </div>
                  <p className="text-gray-300 text-sm"><strong>Disciplined application</strong> of the stage-gate process</p>
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-semibold text-lg">2</span>
                  </div>
                  <p className="text-gray-300 text-sm"><strong>Honest assessment</strong> against objective criteria</p>
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-semibold text-lg">3</span>
                  </div>
                  <p className="text-gray-300 text-sm"><strong>Balanced portfolio management</strong> across vertical maturity stages</p>
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-semibold text-lg">4</span>
                  </div>
                  <p className="text-gray-300 text-sm"><strong>Learning integration</strong> from both successes and failures</p>
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-semibold text-lg">5</span>
                  </div>
                  <p className="text-gray-300 text-sm"><strong>Continuous refinement</strong> of the selection process itself</p>
                </div>
              </div>
              
              <div className="mt-6 text-gray-300">
                <p>By leveraging the KinOS engine's capabilities for market analysis and implementing this structured approach to vertical selection, KinOS Ventures will maximize the impact of its resources while building a diversified, synergistic portfolio of AI-powered vertical solutions.</p>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedResources.map((resource) => (
                <Link key={resource.id} href={resource.url} className="block group">
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-full transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-800/80">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {resource.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">{resource.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{resource.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}