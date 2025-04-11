'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  LightBulbIcon, 
  PuzzlePieceIcon, 
  ArrowPathIcon, 
  ClockIcon, 
  ChatBubbleLeftRightIcon, 
  PresentationChartLineIcon, 
  ServerIcon, 
  CogIcon, 
  ChartPieIcon, 
  BriefcaseIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export default function CustomerSuccessIntegrationModel() {
  const [relatedResources, setRelatedResources] = useState<any[]>([])

  useEffect(() => {
    // Fetch related resources data
    const fetchRelatedResources = async () => {
      try {
        const resources = [
          {
            id: "product-development-lifecycle",
            title: "Product Development Lifecycle",
            description: "Standardized process from concept to launch across all verticals"
          },
          {
            id: "metrics-standardization-guide",
            title: "Metrics Standardization Guide",
            description: "Common success measurements applicable across different business units"
          },
          {
            id: "cross-vertical-feature-implementation",
            title: "Cross-Vertical Feature Implementation",
            description: "System for deploying core capabilities across different products"
          },
          {
            id: "go-to-market-playbook",
            title: "Go-to-Market Playbook",
            description: "Standardized launch strategy adaptable to different verticals"
          },
          {
            id: "pricing-philosophy-framework",
            title: "Pricing Philosophy Framework",
            description: "Principles for creating value-based pricing across diverse product lines"
          },
          {
            id: "kinos-knowledge-transfer-protocol",
            title: "KinOS Knowledge Transfer Protocol",
            description: "Systems for sharing insights and learnings across teams and verticals"
          }
        ]
        setRelatedResources(resources)
      } catch (error) {
        console.error("Failed to fetch related resources:", error)
      }
    }

    fetchRelatedResources()
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header section */}
      <div className="relative py-16 bg-slate-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Customer Success Integration Model
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                A systematic approach to capturing, analyzing, and implementing customer feedback that drives continuous product improvement across all verticals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-900/60 text-blue-200 rounded-md">
                  <DocumentTextIcon className="h-4 w-4 mr-1" /> Business Growth
                </span>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-indigo-900/60 text-indigo-200 rounded-md">
                  <UserGroupIcon className="h-4 w-4 mr-1" /> Customer Success
                </span>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-purple-900/60 text-purple-200 rounded-md">
                  <ChartBarIcon className="h-4 w-4 mr-1" /> Product Development
                </span>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/3 flex justify-center">
              <div className="relative w-60 h-60">
                <Image 
                  src="/business_growth/customer-success-integration-model.png" 
                  alt="Customer Success Integration Model" 
                  width={240}
                  height={240}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Executive Summary Card */}
        <div className="bg-slate-800 rounded-xl shadow-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <LightBulbIcon className="h-6 w-6 mr-2 text-yellow-400" />
            Executive Summary
          </h2>
          <p className="text-gray-300 mb-6">
            The Customer Success Integration Model establishes a unified framework for capturing, analyzing, and implementing customer insights across all KinOS Ventures vertical business units. This systematic approach transforms customer feedback into product enhancements, creating a continuous improvement loop that drives value for both customers and KinOS Ventures.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/60 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChartBarIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Accelerate product development through direct customer-informed iterations</span>
                </li>
                <li className="flex items-start">
                  <UserGroupIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Increase customer retention by demonstrating responsiveness to feedback</span>
                </li>
                <li className="flex items-start">
                  <ArrowsRightLeftIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Enhance cross-vertical learning by sharing customer insights across business units</span>
                </li>
                <li className="flex items-start">
                  <PresentationChartLineIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-gray-300">Build more valuable products by aligning development priorities with customer needs</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-700/60 p-4 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Implementation Focus</h3>
              <p className="text-gray-300 mb-3">
                This document provides comprehensive guidance for implementing a consistent, scalable customer success integration approach that leverages the unified KinOS engine while accommodating vertical-specific requirements.
              </p>
              <div className="flex justify-center">
                <Link href="#implementation-roadmap">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                    <PuzzlePieceIcon className="h-5 w-5 mr-2" />
                    View Implementation Roadmap
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Core Framework Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
            Core Framework Components
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Customer Insight Collection */}
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="bg-blue-900/40 p-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="text-xl font-bold text-white">Customer Insight Collection</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-900/60 text-blue-400 mr-3 mt-0.5">1</div>
                    <span>Standardized feedback channels across verticals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-900/60 text-blue-400 mr-3 mt-0.5">2</div>
                    <span>Formalized Voice of Customer (VoC) program</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-900/60 text-blue-400 mr-3 mt-0.5">3</div>
                    <span>Feedback data integration with KinOS engine</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-400 italic">
                    "Integrate the customer feedback system with the KinOS memory system to create persistent contextual awareness."
                  </p>
                </div>
              </div>
            </div>

            {/* Insight Analysis & Prioritization */}
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="bg-purple-900/40 p-4">
                <ChartPieIcon className="h-8 w-8 text-purple-400 mb-2" />
                <h3 className="text-xl font-bold text-white">Insight Analysis & Prioritization</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-purple-900/60 text-purple-400 mr-3 mt-0.5">1</div>
                    <span>Standardized analysis framework and scoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-purple-900/60 text-purple-400 mr-3 mt-0.5">2</div>
                    <span>Prioritization matrix with weighted criteria</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-purple-900/60 text-purple-400 mr-3 mt-0.5">3</div>
                    <span>AI-enhanced pattern recognition across verticals</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-400 italic">
                    "Create a standardized prioritization scorecard that automatically calculates priority scores for enhancement requests."
                  </p>
                </div>
              </div>
            </div>

            {/* Product Development Integration */}
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="bg-green-900/40 p-4">
                <CogIcon className="h-8 w-8 text-green-400 mb-2" />
                <h3 className="text-xl font-bold text-white">Product Development Integration</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/60 text-green-400 mr-3 mt-0.5">1</div>
                    <span>Structured feedback-to-feature pipeline</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/60 text-green-400 mr-3 mt-0.5">2</div>
                    <span>Cross-functional collaboration model</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/60 text-green-400 mr-3 mt-0.5">3</div>
                    <span>Feedback loop closure with customers</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-400 italic">
                    "Pair customer success managers with developers during feature building for continuous context and validation."
                  </p>
                </div>
              </div>
            </div>

            {/* Cross-Vertical Intelligence */}
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="bg-amber-900/40 p-4">
                <ArrowsRightLeftIcon className="h-8 w-8 text-amber-400 mb-2" />
                <h3 className="text-xl font-bold text-white">Cross-Vertical Intelligence</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-amber-900/60 text-amber-400 mr-3 mt-0.5">1</div>
                    <span>Knowledge transfer protocol across business units</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-amber-900/60 text-amber-400 mr-3 mt-0.5">2</div>
                    <span>Common pattern recognition across verticals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-amber-900/60 text-amber-400 mr-3 mt-0.5">3</div>
                    <span>AI-powered KinOS Knowledge Bridge</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-400 italic">
                    "When one vertical discovers a better approach, the cross-vertical knowledge protocol ensures evaluation for applicability in other verticals."
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics & Success Measurement */}
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="bg-rose-900/40 p-4">
                <PresentationChartLineIcon className="h-8 w-8 text-rose-400 mb-2" />
                <h3 className="text-xl font-bold text-white">Metrics & Success Measurement</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-rose-900/60 text-rose-400 mr-3 mt-0.5">1</div>
                    <span>Standardized KPIs across all verticals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-rose-900/60 text-rose-400 mr-3 mt-0.5">2</div>
                    <span>Continuous improvement process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-rose-900/60 text-rose-400 mr-3 mt-0.5">3</div>
                    <span>Integration with Metrics Standardization Guide</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-400 italic">
                    "Track time to implementation, customer-sourced features, feedback utilization rate, and cross-vertical implementation rate."
                  </p>
                </div>
              </div>
            </div>

            {/* AI Integration & Automation */}
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="bg-indigo-900/40 p-4">
                <ServerIcon className="h-8 w-8 text-indigo-400 mb-2" />
                <h3 className="text-xl font-bold text-white">AI Integration & Automation</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-indigo-900/60 text-indigo-400 mr-3 mt-0.5">1</div>
                    <span>AI-powered insight collection enhancements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-indigo-900/60 text-indigo-400 mr-3 mt-0.5">2</div>
                    <span>Analysis augmentation with machine learning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-indigo-900/60 text-indigo-400 mr-3 mt-0.5">3</div>
                    <span>Automated feedback loop and proactive insights</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-400 italic">
                    "The AI automatically detects usage patterns, identifies inefficiencies, and generates potential enhancement recommendations."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Insight Collection Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
            Customer Insight Collection Framework
          </h2>
          
          <div className="bg-slate-800 rounded-xl shadow-lg p-6 mb-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <ChatBubbleLeftRightIcon className="h-6 w-6 mr-2 text-blue-400" />
              Standardized Feedback Channels
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Channel</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Collection Frequency</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">In-app feedback</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Capture contextual reactions during usage</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Continuous</td>
                    <td className="px-4 py-4 text-sm text-gray-300">Embedded feedback widgets within all product interfaces</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Success reviews</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Structured evaluation of outcomes</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Quarterly</td>
                    <td className="px-4 py-4 text-sm text-gray-300">Formal review with stakeholders using standardized scorecard</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Usage analytics</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Quantitative behavior patterns</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Weekly analysis</td>
                    <td className="px-4 py-4 text-sm text-gray-300">Unified analytics dashboard integrated with KinOS engine</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Support tickets</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Issue identification</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Daily review</td>
                    <td className="px-4 py-4 text-sm text-gray-300">Categorized by impact, frequency, and resolution complexity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">NPS/CSAT surveys</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Satisfaction benchmarking</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Monthly pulse, quarterly in-depth</td>
                    <td className="px-4 py-4 text-sm text-gray-300">Automated through customer communication platform</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <UserGroupIcon className="h-5 w-5 mr-2 text-blue-400" />
                Voice of Customer Program
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start p-3 rounded-lg bg-slate-700/50">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-900/50 text-blue-400 mr-3">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Customer Advisory Boards</h4>
                    <p className="text-sm text-gray-300">Quarterly meetings with key customers from each vertical</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg bg-slate-700/50">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-900/50 text-blue-400 mr-3">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">User Research Sessions</h4>
                    <p className="text-sm text-gray-300">Monthly observational studies of product usage with 3-5 users</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg bg-slate-700/50">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-900/50 text-blue-400 mr-3">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Feedback Escalation Paths</h4>
                    <p className="text-sm text-gray-300">Clear channels for customer-facing teams to elevate critical insights</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg bg-slate-700/50">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-900/50 text-blue-400 mr-3">
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Executive Listening Tours</h4>
                    <p className="text-sm text-gray-300">Quarterly executive engagement with strategic customers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <ServerIcon className="h-5 w-5 mr-2 text-blue-400" />
                Feedback Data Integration
              </h3>
              
              <p className="text-gray-300 mb-4">
                All customer feedback should flow into a unified system that:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-lg bg-blue-900/40 text-blue-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Tags feedback by source, vertical, customer segment, and impact assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-lg bg-blue-900/40 text-blue-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Links related feedback items to identify patterns across verticals</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-lg bg-blue-900/40 text-blue-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Integrates with the KinOS engine to apply AI analysis to customer feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-lg bg-blue-900/40 text-blue-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Maintains full customer context for each feedback item</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 border border-slate-700 rounded-lg bg-slate-700/30">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                  <LightBulbIcon className="h-4 w-4 mr-1 text-yellow-400" />
                  Example Implementation
                </h4>
                <p className="text-sm text-gray-300">
                  Integrate the customer feedback system with the KinOS memory system to create persistent contextual awareness of customer history, preferences, and previous feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Insight Analysis and Prioritization Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
            Insight Analysis and Prioritization
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="bg-purple-900/30 p-4">
                <h3 className="font-bold text-xl text-white flex items-center">
                  <ChartPieIcon className="h-5 w-5 mr-2 text-purple-400" />
                  Impact Assessment
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Business Value</h4>
                  <p className="text-sm text-gray-300">Revenue potential, retention impact</p>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Customer Importance</h4>
                  <p className="text-sm text-gray-300">Affected customer segments, strategic alignment</p>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Implementation Feasibility</h4>
                  <p className="text-sm text-gray-300">Technical complexity, resource requirements</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="bg-purple-900/30 p-4">
                <h3 className="font-bold text-xl text-white flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-purple-400" />
                  Classification Matrix
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-red-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Must Have</h4>
                  <p className="text-sm text-gray-300">Critical functionality addressing core user needs</p>
                </div>
                <div className="bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Performance Enhancer</h4>
                  <p className="text-sm text-gray-300">Improves existing functionality efficiency</p>
                </div>
                <div className="bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Delighter</h4>
                  <p className="text-sm text-gray-300">Creates unexpected value beyond core requirements</p>
                </div>
                <div className="bg-yellow-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Hygiene Factor</h4>
                  <p className="text-sm text-gray-300">Basic expected functionality</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="bg-purple-900/30 p-4">
                <h3 className="font-bold text-xl text-white flex items-center">
                  <ArrowsRightLeftIcon className="h-5 w-5 mr-2 text-purple-400" />
                  Cross-Vertical Applicability
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">High</h4>
                  <p className="text-sm text-gray-300">Applicable to 5+ verticals without modification</p>
                </div>
                <div className="bg-yellow-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Medium</h4>
                  <p className="text-sm text-gray-300">Applicable to 3-4 verticals with minimal adaptation</p>
                </div>
                <div className="bg-red-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-white mb-1">Low</h4>
                  <p className="text-sm text-gray-300">Primarily benefits a single vertical</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl shadow-lg p-6 mb-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <PresentationChartLineIcon className="h-6 w-6 mr-2 text-purple-400" />
              Prioritization Framework
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Criteria</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Weight</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Scoring Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Customer Impact</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">30%</td>
                    <td className="px-4 py-4 text-sm text-gray-300">1-5 scale based on affected users and problem severity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Strategic Alignment</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">25%</td>
                    <td className="px-4 py-4 text-sm text-gray-300">1-5 scale based on alignment with roadmap and business objectives</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Revenue Impact</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">20%</td>
                    <td className="px-4 py-4 text-sm text-gray-300">1-5 scale based on potential revenue influence</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Implementation Effort</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">15%</td>
                    <td className="px-4 py-4 text-sm text-gray-300">1-5 scale (reverse scored) based on development complexity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Cross-Vertical Value</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">10%</td>
                    <td className="px-4 py-4 text-sm text-gray-300">1-5 scale based on applicability across business units</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 border border-slate-700 rounded-lg bg-slate-700/30">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                <LightBulbIcon className="h-4 w-4 mr-1 text-yellow-400" />
                Implementation Guidance
              </h4>
              <p className="text-sm text-gray-300">
                Create a standardized prioritization scorecard in the product management system that automatically calculates priority scores when new enhancement requests are entered.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <ServerIcon className="h-5 w-5 mr-2 text-purple-400" />
              AI-Enhanced Insight Analysis
            </h3>
            
            <p className="text-gray-300 mb-4">
              Leverage the KinOS engine to enhance customer insight analysis:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Pattern Recognition</h4>
                <p className="text-sm text-gray-300">
                  Automatically identify related feedback across different customers and verticals
                </p>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Impact Prediction</h4>
                <p className="text-sm text-gray-300">
                  Forecast potential business outcomes of implementing specific enhancements
                </p>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Sentiment Analysis</h4>
                <p className="text-sm text-gray-300">
                  Evaluate emotional context of feedback to identify urgency and importance
                </p>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Natural Language Processing</h4>
                <p className="text-sm text-gray-300">
                  Automatically categorize and tag unstructured feedback
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap Section */}
        <div id="implementation-roadmap" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
            Implementation Roadmap
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-900/30 p-4">
                <h3 className="font-bold text-xl text-white">Phase 1: Foundation</h3>
                <p className="text-sm text-gray-400 mt-1">Months 1-3</p>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-900/60 text-blue-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Establish standardized feedback collection channels across all verticals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-900/60 text-blue-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Implement unified feedback repository integrated with the KinOS engine</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-900/60 text-blue-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Define cross-functional collaboration processes and regular meeting cadences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-900/60 text-blue-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Create initial metrics dashboard for tracking program effectiveness</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-purple-900/30 p-4">
                <h3 className="font-bold text-xl text-white">Phase 2: Optimization</h3>
                <p className="text-sm text-gray-400 mt-1">Months 4-6</p>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-purple-900/60 text-purple-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Deploy AI-enhanced analysis capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-purple-900/60 text-purple-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Establish cross-vertical knowledge sharing protocols</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-purple-900/60 text-purple-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Implement formal prioritization framework</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-purple-900/60 text-purple-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Launch customer feedback loop closure process</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-green-900/30 p-4">
                <h3 className="font-bold text-xl text-white">Phase 3: Advanced Integration</h3>
                <p className="text-sm text-gray-400 mt-1">Months 7-12</p>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/60 text-green-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Integrate with product development lifecycle across all stages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/60 text-green-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Deploy full AI automation suite for feedback processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/60 text-green-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Establish advanced metrics and ROI tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/60 text-green-400 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Implement predictive insight generation capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-2 text-green-400" />
              Key Success Milestones
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-900/40 text-blue-400 mx-auto mb-3">
                  <span className="text-lg font-bold">1</span>
                </div>
                <p className="text-center text-gray-300">
                  100% of verticals using standardized feedback collection (Month 3)
                </p>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-900/40 text-purple-400 mx-auto mb-3">
                  <span className="text-lg font-bold">2</span>
                </div>
                <p className="text-center text-gray-300">
                  Reduction in time from feedback to implementation by 30% (Month 6)
                </p>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-900/40 text-green-400 mx-auto mb-3">
                  <span className="text-lg font-bold">3</span>
                </div>
                <p className="text-center text-gray-300">
                  25% of new features originating from customer feedback (Month 9)
                </p>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-900/40 text-amber-400 mx-auto mb-3">
                  <span className="text-lg font-bold">4</span>
                </div>
                <p className="text-center text-gray-300">
                  Measurable increase in customer satisfaction across all verticals (Month 12)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
            Case Study: Successful Implementation
          </h2>
          
          <div className="bg-slate-800 rounded-xl shadow-lg p-6">
            <div className="lg:flex gap-8">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <div className="bg-blue-900/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-400" />
                    KinOS Health Implementation
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Challenge:</h4>
                      <p className="text-gray-300 text-sm">
                        TherapyKin users reported difficulties with the patient engagement tracking system, citing complications in monitoring long-term progress across multiple therapy dimensions.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-1">Feedback Collection:</h4>
                      <ul className="text-sm text-gray-300 space-y-2 pl-5 list-disc">
                        <li>Multiple support tickets highlighted similar concerns</li>
                        <li>Usage analytics showed low utilization of the progress tracking features</li>
                        <li>Customer success review identified this as a top pain point</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Analysis Process:</h4>
                    <ol className="text-sm text-gray-300 space-y-2 pl-5 list-decimal">
                      <li>Customer Success team categorized feedback as a "Performance Enhancer"</li>
                      <li>Impact assessment revealed this affected 65% of enterprise customers</li>
                      <li>Cross-vertical analysis identified similar tracking needs in KinOS Education</li>
                      <li>Prioritization score: 4.2/5.0 based on standardized framework</li>
                    </ol>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Implementation:</h4>
                    <ol className="text-sm text-gray-300 space-y-2 pl-5 list-decimal">
                      <li>Customer Success Manager partnered with development team</li>
                      <li>Three key customers participated in design review sessions</li>
                      <li>Prototype testing conducted with original feedback providers</li>
                      <li>Implementation completed within 60 days of initial prioritization</li>
                    </ol>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <ChartBarIcon className="h-4 w-4 mr-1 text-green-400" />
                      Results:
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/40 text-green-400 mr-2 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span>Usage of progress tracking features increased by 78%</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/40 text-green-400 mr-2 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span>Customer satisfaction with reporting capabilities improved by 24%</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/40 text-green-400 mr-2 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span>Feature adapted for KinOS Education learning progress tracking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/40 text-green-400 mr-2 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span>Generated three new enterprise contract renewals directly citing the improvement</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <LightBulbIcon className="h-4 w-4 mr-1 text-blue-400" />
                      Key Learnings:
                    </h4>
                    <ol className="text-sm text-gray-300 space-y-2 pl-5 list-decimal">
                      <li>Direct customer involvement throughout development significantly improved adoption</li>
                      <li>Cross-vertical sharing created efficiency by adapting the solution for multiple business units</li>
                      <li>Closing the feedback loop with original requestors created strong advocacy</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-gray-300">
              By implementing this Customer Success Integration Model, KinOS Ventures will create a systematic approach to harnessing customer insights across all verticals, driving continuous improvement while leveraging the unified technology core that defines our competitive advantage.
            </p>
          </div>
        </div>

        {/* Related Resources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
            Related Resources
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedResources.map((resource) => (
              <Link href={`/resources/${resource.id}`} key={resource.id}>
                <div className="bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] cursor-pointer h-full">
                  <div className="p-5">
                    <h3 className="font-bold text-white text-lg mb-2">{resource.title}</h3>
                    <p className="text-gray-300 text-sm">{resource.description}</p>
                  </div>
                  <div className="px-5 py-3 bg-slate-700/50 flex justify-end">
                    <span className="text-blue-400 text-sm font-medium hover:text-blue-300">View resource →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}