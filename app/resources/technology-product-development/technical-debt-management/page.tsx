'use client'

import React from 'react'
import Link from 'next/link'
import { 
  DocumentTextIcon, 
  ScaleIcon, 
  CogIcon, 
  ChartBarIcon, 
  ClipboardDocumentCheckIcon, 
  PresentationChartLineIcon,
  ArrowPathIcon,
  LightBulbIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  DocumentCheckIcon,
  BuildingLibraryIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const TechnicalDebtManagementPage = () => {
  // Related resources from the context
  const relatedResources = [
    {
      id: 'product-development-lifecycle',
      title: 'Product Development Lifecycle',
      description: 'Standardized process from concept to launch across all verticals'
    },
    {
      id: 'resource-allocation-framework',
      title: 'Resource Allocation Framework',
      description: 'System for distributing technical and human resources across verticals'
    },
    {
      id: 'metrics-standardization-guide',
      title: 'Metrics Standardization Guide',
      description: 'Common success measurements applicable across different business units'
    },
    {
      id: 'kinos-engine-architecture-guide',
      title: 'KinOS Engine Architecture Guide',
      description: 'Technical overview of the core technology platform and its capabilities'
    },
    {
      id: 'first-principles-decision-making',
      title: 'First Principles Decision-Making Framework',
      description: 'Structured approach to making decisions based on fundamental truths'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <header className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-4xl">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Technical Debt Management Strategy
              </h1>
              <p className="mt-3 text-xl text-gray-300 max-w-3xl">
                A framework for strategically managing technical debt to balance rapid innovation with long-term architectural sustainability across our technology ecosystem.
              </p>
            </div>
            <div className="mt-5 flex lg:ml-4 lg:mt-0">
              <span className="hidden sm:block">
                <DocumentTextIcon className="h-16 w-16 text-blue-400" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Summary */}
          <section className="mb-12 bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Executive Summary</h2>
            <p className="text-gray-300">
              This document outlines KinOS Ventures' comprehensive approach to managing technical debt across our multi-vertical ecosystem. 
              As we rapidly expand into diverse industry applications while maintaining a unified technological core, 
              balancing innovation speed with architectural sustainability becomes critical. This strategy provides a 
              framework for identifying, quantifying, and strategically addressing technical debt through standardized 
              processes aligned with our first principles. By implementing this approach, we enable accelerated time-to-market 
              when strategically necessary while ensuring the long-term health of our technology foundations. This strategy is 
              essential for maintaining the scalability, adaptability, and innovative potential of the KinOS engine across all 
              vertical business units.
            </p>
          </section>

          {/* Introduction to Technical Debt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              1. Introduction to Technical Debt at KinOS Ventures
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <DocumentTextIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Definition and Scope</h3>
                </div>
                <p className="text-gray-300">
                  Technical debt refers to the implied cost of future rework caused by choosing expedient solutions 
                  now rather than implementing more sustainable approaches. Within KinOS Ventures' context, 
                  technical debt encompasses:
                </p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Code-level debt:</strong> Suboptimal implementations, duplications, or workarounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Architectural debt:</strong> Design decisions that limit scalability or integration potential</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Documentation debt:</strong> Incomplete or outdated documentation that impedes knowledge transfer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Testing debt:</strong> Inadequate test coverage that increases regression risk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Dependency debt:</strong> Outdated or poorly maintained dependencies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <ChartBarIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Strategic Implications</h3>
                </div>
                <p className="text-gray-300">
                  Technical debt directly impacts our ability to:
                </p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span>Rapidly deploy KinOS capabilities across new verticals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span>Maintain cross-vertical intelligence sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span>Scale individual business units efficiently</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span>Ensure consistent user experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span>Protect our competitive advantages in memory, adaptation, and growth capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
              <div className="flex items-start mb-4">
                <LightBulbIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                <h3 className="text-xl font-medium text-white">First Principles Alignment</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Our technical debt management strategy is guided by the following first principles:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-white font-medium">Use more AI for everything</p>
                  <p className="text-gray-300 text-sm">Leverage AI to identify, analyze, and prioritize technical debt</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-white font-medium">Speed is a fundamental asset</p>
                  <p className="text-gray-300 text-sm">Accept strategic debt when it provides significant time-to-market advantages</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-white font-medium">Unified technology creates compounding value</p>
                  <p className="text-gray-300 text-sm">Prioritize debt reduction that enhances cross-vertical capabilities</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-white font-medium">Adaptability drives long-term success</p>
                  <p className="text-gray-300 text-sm">Eliminate debt that restricts our ability to evolve</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Debt Identification Framework */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              2. Technical Debt Identification Framework
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <ComputerDesktopIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Automated Detection Mechanisms</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Implement automated tools and processes to continuously scan for technical debt indicators:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Static code analysis</strong> with customized rule sets for KinOS-specific patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Architecture compliance checking</strong> against established standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Dependency scanning</strong> for outdated or vulnerable components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Test coverage analysis</strong> with vertical-specific minimum thresholds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Code duplication detection</strong> across vertical implementations</span>
                  </li>
                </ul>
                <div className="mt-4 bg-slate-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Implementation Example:</strong> Configure SonarQube with custom KinOS rule profiles that detect memory management inefficiencies specific to our architecture.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <UserGroupIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Manual Review Processes</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Supplement automated detection with structured human oversight:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Scheduled architectural reviews</strong> (quarterly for each vertical)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Cross-vertical code sharing sessions</strong> (monthly)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Technical retrospectives</strong> following major releases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Documentation completeness audits</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs mr-2 mt-0.5">•</span>
                    <span><strong className="text-white">Interface consistency evaluation</strong></span>
                  </li>
                </ul>
                <div className="mt-4 bg-slate-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Implementation Example:</strong> Establish a rotating "Debt Detective" role where engineers from different verticals review each other's codebases to identify patterns of technical debt that automated tools might miss.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <ClipboardDocumentCheckIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Debt Classification System</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Categorize identified debt to ensure consistent assessment:
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Critical</p>
                    <p className="text-gray-300 text-sm">Directly impacts reliability or security</p>
                    <p className="text-gray-400 text-xs italic">Memory leaks, security vulnerabilities</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Architectural</p>
                    <p className="text-gray-300 text-sm">Limits scalability or integration</p>
                    <p className="text-gray-400 text-xs italic">Tightly coupled components, non-standard interfaces</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Functional</p>
                    <p className="text-gray-300 text-sm">Impacts user experience</p>
                    <p className="text-gray-400 text-xs italic">Performance bottlenecks, incomplete features</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Operational</p>
                    <p className="text-gray-300 text-sm">Affects maintenance and operations</p>
                    <p className="text-gray-400 text-xs italic">Manual deployment steps, inadequate monitoring</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Knowledge</p>
                    <p className="text-gray-300 text-sm">Restricts team effectiveness</p>
                    <p className="text-gray-400 text-xs italic">Missing documentation, complex logic without comments</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Debt Quantification and Prioritization */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              3. Debt Quantification and Prioritization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <ChartBarIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Impact Assessment Metrics</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Evaluate each debt item using standardized measures:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-2 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">UI</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">User impact</p>
                      <p className="text-gray-300 text-sm">Effect on user experience (1-5 scale)</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">MB</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Maintenance burden</p>
                      <p className="text-gray-300 text-sm">Additional time required for maintenance (hours/month)</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">FL</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Future limitation</p>
                      <p className="text-gray-300 text-sm">Degree to which future capabilities are restricted (1-5 scale)</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">CV</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Cross-vertical impact</p>
                      <p className="text-gray-300 text-sm">Number of verticals affected (1-14)</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">RF</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Risk factor</p>
                      <p className="text-gray-300 text-sm">Probability and severity of potential failures (1-5 scale)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <ScaleIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Cost Calculation Methodology</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Calculate the tangible and intangible costs of technical debt:
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">1. Engineering effort cost</p>
                    <p className="text-gray-300 text-sm">(Estimated hours to fix) × (Average hourly rate)</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">2. Carrying cost</p>
                    <p className="text-gray-300 text-sm">(Maintenance burden hours/month) × (Average hourly rate) × (Expected duration in months)</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">3. Opportunity cost</p>
                    <p className="text-gray-300 text-sm">(Development slowdown %) × (Team size) × (Average hourly rate) × (Expected duration in months)</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">4. Risk cost</p>
                    <p className="text-gray-300 text-sm">(Estimated incident cost) × (Risk probability)</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">5. Total debt cost</p>
                    <p className="text-gray-300 text-sm">Engineering effort cost + Carrying cost + Opportunity cost + Risk cost</p>
                  </div>
                </div>
                
                <div className="mt-4 bg-slate-600 p-4 rounded-lg">
                  <p className="text-white font-medium mb-2">Implementation Example:</p>
                  <p className="text-gray-300 text-sm mb-1">For KinOS Health's memory persistence implementation, calculate:</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>Engineering effort: 80 hours × $150/hr = $12,000</li>
                    <li>Carrying cost: 5 hrs/month × $150/hr × 12 months = $9,000</li>
                    <li>Opportunity cost: 5% slowdown × 8 engineers × $150/hr × 160 hrs/month × 12 months × 0.05 = $57,600</li>
                    <li>Risk cost: $50,000 potential data loss × 0.02 probability = $1,000</li>
                    <li>Total debt cost: $79,600</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
              <div className="flex items-start mb-4">
                <PresentationChartLineIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                <h3 className="text-xl font-medium text-white">Prioritization Matrix</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Rank debt items using a standardized matrix:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-slate-700 divide-y divide-slate-600 rounded-lg">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Impact/Cost Ratio</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Remediation Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">P0</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">&gt; 5.0</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">Immediate (next sprint)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">P1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">3.0 - 5.0</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">Short-term (within quarter)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">P2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">1.5 - 3.0</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">Medium-term (within 6 months)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">P3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">0.5 - 1.5</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">Long-term (within 12 months)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">P4</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">&lt; 0.5</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">Monitor only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Strategic Debt Management Decisions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              4. Strategic Debt Management Decisions
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <DocumentCheckIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Acceptance Criteria</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Define conditions under which technical debt may be strategically accepted:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Market timing advantage</p>
                    <p className="text-gray-300 text-sm">When being first-to-market provides substantial competitive advantage</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">User feedback incorporation</p>
                    <p className="text-gray-300 text-sm">When rapid iteration on user feedback is critical</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Revenue acceleration</p>
                    <p className="text-gray-300 text-sm">When immediate revenue opportunities would be lost otherwise</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Resource constraint navigation</p>
                    <p className="text-gray-300 text-sm">When temporary workarounds allow progress despite specialized skill shortages</p>
                  </div>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-white font-medium mb-2">Decision Framework:</p>
                  <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                    <li>Document the debt being taken on using the standard template</li>
                    <li>Calculate the cost and impact metrics</li>
                    <li>Explicitly define the payoff timeline and triggering conditions</li>
                    <li>Secure approval from the appropriate authority level based on impact score</li>
                    <li>Record the decision in the technical debt inventory</li>
                  </ol>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <ArrowPathIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Remediation Planning</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Structure the approach to paying down technical debt:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Dedicated sprints</p>
                    <p className="text-gray-300 text-sm">Allocate full sprints to debt reduction quarterly</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Percentage allocation</p>
                    <p className="text-gray-300 text-sm">Reserve 20% of each sprint for debt remediation</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Feature-coupled refactoring</p>
                    <p className="text-gray-300 text-sm">Combine debt payment with related feature work</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Opportunistic improvement</p>
                    <p className="text-gray-300 text-sm">Maintain an "opportunistic debt" list for developers to address during downtime</p>
                  </div>
                </div>
                
                <div className="bg-slate-600 p-4 rounded-lg">
                  <p className="text-white font-medium mb-2">Implementation Example:</p>
                  <p className="text-gray-300 text-sm">
                    The KinOS Finance team allocates the first sprint of each quarter entirely to technical debt remediation, 
                    focusing on items that impact the core transaction processing capabilities.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <ChartBarIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Technical Debt Budgeting</h3>
                </div>
                <p className="text-gray-300 mb-3">
                  Establish sustainable limits on accumulated debt:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">VT</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Vertical-specific thresholds</p>
                      <p className="text-gray-300 text-sm">Set maximum acceptable technical debt levels per vertical</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">CE</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Core engine limits</p>
                      <p className="text-gray-300 text-sm">Define stricter thresholds for shared components</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">DG</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Debt ratio guidelines</p>
                      <p className="text-gray-300 text-sm">Maintain technical debt below 15% of total development effort</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">DA</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Debt ceiling alerts</p>
                      <p className="text-gray-300 text-sm">Implement warning systems when approaching defined limits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI-Powered Debt Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              5. AI-Powered Debt Management
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <BeakerIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Automated Debt Detection System</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Implementation:</p>
                  <p className="text-gray-300 text-sm">
                    Deploy an AI system that continuously scans codebases, pull requests, and documentation to identify
                    emerging technical debt patterns specific to the KinOS architecture.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Technical Specifications:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Machine learning models trained on historical debt patterns</li>
                    <li>Custom static analysis rules based on KinOS best practices</li>
                    <li>Natural language processing for documentation completeness evaluation</li>
                    <li>Anomaly detection for identifying unusual implementation patterns</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-white font-medium">Workflow Integration:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Integration with CI/CD pipelines to provide real-time feedback</li>
                    <li>Automatic creation of debt inventory items</li>
                    <li>Pull request annotations highlighting potential debt introduction</li>
                    <li>Weekly technical debt summary reports for engineering leads</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <PresentationChartLineIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Debt Impact Prediction Engine</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Implementation:</p>
                  <p className="text-gray-300 text-sm">
                    Create an AI system that predicts the future impact of identified technical debt based on historical patterns and product roadmaps.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Technical Specifications:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Predictive models trained on past debt impact data</li>
                    <li>Integration with product roadmaps to assess future limitations</li>
                    <li>Scenario modeling capabilities for different remediation timelines</li>
                    <li>Cross-vertical impact analysis using knowledge graph relationships</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-white font-medium">Workflow Integration:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Automated prioritization recommendations</li>
                    <li>ROI calculations for debt remediation efforts</li>
                    <li>Early warning system for potentially critical debt items</li>
                    <li>Visualization of potential future impact scenarios</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <CogIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Intelligent Refactoring Assistant</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Implementation:</p>
                  <p className="text-gray-300 text-sm">
                    Develop an AI-powered tool that assists developers in efficiently addressing technical debt by suggesting refactoring strategies and even generating code improvements.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Technical Specifications:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Code transformation models trained on KinOS codebase patterns</li>
                    <li>Refactoring recommendation engine based on best practices</li>
                    <li>Automated test generation for validating refactoring changes</li>
                    <li>Learning system that improves based on accepted/rejected suggestions</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-white font-medium">Workflow Integration:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>IDE plugins for real-time refactoring suggestions</li>
                    <li>Integration with code review systems</li>
                    <li>Batch processing capabilities for larger refactoring initiatives</li>
                    <li>Knowledge sharing across vertical implementations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Vertical-Specific Considerations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              6. Vertical-Specific Considerations
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <RocketLaunchIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">B2C Vertical Guidelines</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Specific technical debt considerations for consumer-facing verticals (KinOS Entertainment, Gaming, Travel):
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">UX debt prioritization</p>
                    <p className="text-gray-300 text-sm">Give higher priority to debt affecting user experience</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Performance debt thresholds</p>
                    <p className="text-gray-300 text-sm">Maintain stricter limits on performance-impacting debt</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">A/B testing infrastructure</p>
                    <p className="text-gray-300 text-sm">Ensure experimentation capabilities remain unimpeded by debt</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Rapid iteration capabilities</p>
                    <p className="text-gray-300 text-sm">Balance speed enablement against accumulating debt</p>
                  </div>
                </div>
                
                <div className="bg-slate-600 p-4 rounded-lg">
                  <p className="text-white font-medium mb-2">Implementation Example:</p>
                  <p className="text-gray-300 text-sm">
                    For KinOS Gaming, establish performance debt budgets that ensure frame rates never drop below 60fps 
                    regardless of accumulated debt in other areas.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <BuildingLibraryIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">B2B Vertical Guidelines</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Specific technical debt considerations for business-focused verticals (KinOS Finance, Supply Chain, Real Estate):
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Reliability debt focus</p>
                    <p className="text-gray-300 text-sm">Prioritize debt that impacts system reliability</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Compliance-related debt</p>
                    <p className="text-gray-300 text-sm">Zero tolerance for debt affecting regulatory compliance</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Integration debt management</p>
                    <p className="text-gray-300 text-sm">Carefully monitor API and integration point debt</p>
                  </div>
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <p className="text-white font-medium">Data integrity safeguards</p>
                    <p className="text-gray-300 text-sm">Ensure data accuracy is never compromised by debt</p>
                  </div>
                </div>
                
                <div className="bg-slate-600 p-4 rounded-lg">
                  <p className="text-white font-medium mb-2">Implementation Example:</p>
                  <p className="text-gray-300 text-sm">
                    In KinOS Finance, implement automated compliance check gates that block any release if compliance-related 
                    debt exceeds predefined thresholds.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <CogIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">Core Engine Considerations</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Special debt management practices for the shared KinOS engine components:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">CV</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Cross-vertical impact assessment</p>
                      <p className="text-gray-300 text-sm">Required for all engine-level debt decisions</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">SA</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Stricter acceptance criteria</p>
                      <p className="text-gray-300 text-sm">Higher bar for intentionally accepted debt</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">AR</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Accelerated remediation timelines</p>
                      <p className="text-gray-300 text-sm">Faster paydown schedules for shared components</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-slate-700 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-white font-bold">CT</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Comprehensive testing requirements</p>
                      <p className="text-gray-300 text-sm">More extensive validation for debt remediation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies and Learning */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              7. Case Studies and Learning
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <LightBulbIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">KinOS Health Debt Resolution</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Scenario:</p>
                  <p className="text-gray-300 text-sm">
                    The TherapyKin application accumulated significant technical debt in its memory management system during rapid market expansion.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Approach:</p>
                  <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                    <li>Comprehensive debt inventory created showing 3 critical issues</li>
                    <li>Impact assessment revealed potential data integrity risks</li>
                    <li>Two-sprint focused remediation plan implemented</li>
                    <li>Core memory system refactored using patterns from KinOS Finance</li>
                    <li>Automated testing infrastructure expanded</li>
                  </ol>
                </div>
                
                <div>
                  <p className="text-white font-medium">Results:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>40% reduction in application crashes</li>
                    <li>25% improvement in response times</li>
                    <li>Pattern shared across three other verticals</li>
                    <li>New automated tests preventing regression</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <div className="flex items-start mb-4">
                  <ArrowTrendingUpIcon className="h-7 w-7 text-blue-400 mr-3 mt-1" />
                  <h3 className="text-xl font-medium text-white">KinOS Finance Architecture Evolution</h3>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Scenario:</p>
                  <p className="text-gray-300 text-sm">
                    Technical debt in the KinKong trading system created scalability limitations as user base grew.
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-white font-medium">Approach:</p>
                  <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                    <li>Architectural debt mapped and quantified</li>
                    <li>Staged remediation plan created to minimize disruption</li>
                    <li>Microservice migration executed over four months</li>
                    <li>Cross-vertical knowledge sharing throughout the process</li>
                    <li>New architecture patterns documented as standards</li>
                  </ol>
                </div>
                
                <div>
                  <p className="text-white font-medium">Results:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>System now supports 10x original user capacity</li>
                    <li>60% reduction in deployment time</li>
                    <li>Architecture patterns adopted by three other verticals</li>
                    <li>Developer satisfaction scores increased by 35%</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12 bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-gray-300 mb-4">
              Technical debt is an inevitable aspect of rapid innovation and vertical expansion at KinOS Ventures. 
              This strategy provides a framework for making intentional, strategic decisions about when to accept 
              debt for business advantage and when to prioritize its remediation. By implementing consistent processes 
              for identification, quantification, and remediation across all verticals, we ensure the long-term 
              sustainability of our unified technology core while enabling the speed and flexibility needed for market success.
            </p>
            <p className="text-gray-300">
              This balanced approach to technical debt management will be a key enabler of our multi-vertical expansion 
              strategy and a critical component of maintaining our competitive technological advantages.
            </p>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              Related Resources
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedResources.map((resource) => (
                <Link 
                  key={resource.id}
                  href={`/resources/${resource.id}`}
                  className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700 hover:bg-slate-700 transition-colors duration-200"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-start mb-3">
                        <DocumentTextIcon className="h-6 w-6 text-blue-400 mr-2 mt-1" />
                        <h3 className="text-lg font-medium text-white">{resource.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{resource.description}</p>
                    </div>
                    <div className="mt-4 text-blue-400 text-sm font-medium flex items-center">
                      View resource
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default TechnicalDebtManagementPage