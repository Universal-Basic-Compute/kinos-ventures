'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  CubeIcon, 
  ArrowPathIcon, 
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  RectangleGroupIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  ChartPieIcon,
  CogIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline'
import { BookmarkIcon, LinkIcon, LightBulbIcon } from '@heroicons/react/24/solid'

export default function VerticalPerformanceEvaluationPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const relatedResources = [
    {
      id: "metrics-standardization-guide",
      title: "Metrics Standardization Guide",
      description: "Common success measurements applicable across different business units"
    },
    {
      id: "resource-allocation-framework",
      title: "Resource Allocation Framework",
      description: "System for distributing technical and human resources across verticals"
    },
    {
      id: "vertical-integration-strategy",
      title: "Vertical Integration Strategy",
      description: "Framework for identifying, developing, and scaling new business verticals"
    },
    {
      id: "vertical-market-selection-criteria",
      title: "Vertical Market Selection Criteria",
      description: "Framework for evaluating and prioritizing new market opportunities"
    },
    {
      id: "organizational-structure-blueprint",
      title: "Organizational Structure Blueprint",
      description: "Defining the relationship between core company and vertical business units"
    },
    {
      id: "innovation-incentive-structure",
      title: "Innovation Incentive Structure",
      description: "How cross-vertical innovation is rewarded and encouraged"
    }
  ]

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Resource Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4 flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Vertical Performance Evaluation System
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                A balanced scorecard approach for holistically evaluating vertical business units across financial, technological, market, and strategic dimensions.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center rounded-md bg-blue-900/30 px-2 py-1 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-700/30">
                  <BookmarkIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                  Operations Management
                </span>
                <span className="inline-flex items-center rounded-md bg-purple-900/30 px-2 py-1 text-sm font-medium text-purple-300 ring-1 ring-inset ring-purple-700/30">
                  <ChartBarIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                  Performance Metrics
                </span>
                <span className="inline-flex items-center rounded-md bg-green-900/30 px-2 py-1 text-sm font-medium text-green-300 ring-1 ring-inset ring-green-700/30">
                  <RectangleGroupIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                  Business Verticals
                </span>
              </div>
            </div>
            <div className="relative h-48 w-full md:w-80 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/categories/Operations_Management/vertical-performance-evaluation.png"
                alt="Vertical Performance Evaluation System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-4 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('framework')}
              className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                activeTab === 'framework'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Evaluation Framework
            </button>
            <button
              onClick={() => setActiveTab('methodology')}
              className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                activeTab === 'methodology'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Measurement Methodology
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                activeTab === 'process'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Evaluation Process
            </button>
            <button
              onClick={() => setActiveTab('allocation')}
              className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                activeTab === 'allocation'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Resource Allocation
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                activeTab === 'ai'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              AI Integration
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Content Area - 3 columns wide on large screens */}
          <div className="lg:col-span-3 space-y-12">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300">
                  <h2>Executive Summary</h2>
                  <p>
                    The Vertical Performance Evaluation System (VPES) is a comprehensive framework designed to assess, measure, and optimize the performance of KinOS Ventures' diverse business verticals. Moving beyond traditional financial metrics, this system implements a balanced scorecard approach that evaluates five critical dimensions: financial performance, market position, technology innovation, team capabilities, and strategic alignment.
                  </p>
                  <p>
                    This resource establishes a standardized yet adaptable methodology for measuring success across the KinOS ecosystem while acknowledging the unique characteristics of each vertical. By leveraging AI-powered analytics and the core KinOS engine capabilities, the VPES provides data-driven insights that directly inform resource allocation, strategic planning, and cross-vertical synergies.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
                    <div className="flex items-start">
                      <CubeIcon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Core Concept</h3>
                        <p className="text-gray-300">
                          A balanced scorecard approach for evaluating business verticals beyond financial metrics, incorporating five key dimensions that provide holistic performance assessment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
                    <div className="flex items-start">
                      <ChartBarIcon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Strategic Value</h3>
                        <p className="text-gray-300">
                          Supports KinOS Ventures' transition from a decentralized token economy to a SaaS and subscription revenue model by ensuring each vertical contributes effectively to enterprise value.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700 bg-slate-800/80">
                    <h3 className="text-xl font-semibold text-white">Key Evaluation Dimensions</h3>
                  </div>
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600">
                      <ChartPieIcon className="h-8 w-8 text-green-400 mb-3" />
                      <h4 className="text-lg font-medium text-white mb-2">Financial Performance</h4>
                      <p className="text-gray-300 text-sm">
                        Revenue metrics, profitability measures, customer economics, and investment efficiency.
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600">
                      <BuildingOfficeIcon className="h-8 w-8 text-blue-400 mb-3" />
                      <h4 className="text-lg font-medium text-white mb-2">Market Position</h4>
                      <p className="text-gray-300 text-sm">
                        Market penetration, competitive standing, brand equity, and customer satisfaction.
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600">
                      <BeakerIcon className="h-8 w-8 text-purple-400 mb-3" />
                      <h4 className="text-lg font-medium text-white mb-2">Technology Innovation</h4>
                      <p className="text-gray-300 text-sm">
                        R&D effectiveness, core technology utilization, implementation success, and technical health.
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600">
                      <UserGroupIcon className="h-8 w-8 text-orange-400 mb-3" />
                      <h4 className="text-lg font-medium text-white mb-2">Team Capabilities</h4>
                      <p className="text-gray-300 text-sm">
                        Talent density, productivity metrics, team health, and leadership effectiveness.
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-5 border border-slate-600">
                      <CogIcon className="h-8 w-8 text-red-400 mb-3" />
                      <h4 className="text-lg font-medium text-white mb-2">Strategic Alignment</h4>
                      <p className="text-gray-300 text-sm">
                        Ecosystem contribution, cross-vertical synergy, vision alignment, and resource efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'framework' && (
              <div className="space-y-8">
                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white">
                  <h2>Evaluation Framework Design</h2>
                  <p>
                    The VPES establishes a balanced scorecard approach that translates qualitative and quantitative factors into a practical evaluation framework. This provides consistent measurement while allowing for vertical-specific adaptations.
                  </p>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Financial Performance Metrics</h3>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600">
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <ChartBarIcon className="h-5 w-5 text-green-400 mr-2" />
                        Revenue Metrics
                      </h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>Monthly Recurring Revenue (MRR)</li>
                        <li>Annual Recurring Revenue (ARR)</li>
                        <li>Revenue growth rate</li>
                        <li>Revenue per user</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600">
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <ChartBarIcon className="h-5 w-5 text-green-400 mr-2" />
                        Profitability Metrics
                      </h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>Gross margin</li>
                        <li>Operating margin</li>
                        <li>Efficiency ratios</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600">
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <ChartBarIcon className="h-5 w-5 text-green-400 mr-2" />
                        Customer Economics
                      </h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>Customer Acquisition Cost (CAC)</li>
                        <li>Lifetime Value (LTV)</li>
                        <li>LTV:CAC ratio</li>
                        <li>Payback period</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600">
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <ChartBarIcon className="h-5 w-5 text-green-400 mr-2" />
                        Investment Efficiency
                      </h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>ROI</li>
                        <li>Capital efficiency</li>
                        <li>Burn rate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Balanced Scorecard Implementation</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">
                      The balanced scorecard approach translates the five dimensions into a practical evaluation framework through:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <div className="flex items-center mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 mr-3 flex-shrink-0">
                            <span className="text-white font-semibold">1</span>
                          </div>
                          <h4 className="text-white font-medium">Weighting Dimensions</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Assigning relative importance to each dimension based on vertical maturity, strategic priorities, and market conditions.
                        </p>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <div className="flex items-center mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 mr-3 flex-shrink-0">
                            <span className="text-white font-semibold">2</span>
                          </div>
                          <h4 className="text-white font-medium">Selecting KPIs</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Identifying 3-5 key performance indicators per dimension (both universal and vertical-specific).
                        </p>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <div className="flex items-center mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 mr-3 flex-shrink-0">
                            <span className="text-white font-semibold">3</span>
                          </div>
                          <h4 className="text-white font-medium">Establishing Benchmarks</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Setting performance standards through internal comparison, industry benchmarks, and historical trends.
                        </p>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <div className="flex items-center mb-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 mr-3 flex-shrink-0">
                            <span className="text-white font-semibold">4</span>
                          </div>
                          <h4 className="text-white font-medium">Scoring Mechanism</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Using a consistent 1-10 scoring system with clear thresholds and definitions for each level.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Example Scorecard Template</h3>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-600">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Dimension</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Weight</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">KPI</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Target</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actual</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Score (1-10)</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Weighted Score</th>
                        </tr>
                      </thead>
                      <tbody className="bg-slate-800 divide-y divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Financial</td>
                          <td className="px-4 py-3 text-sm text-gray-300">25%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">MRR Growth</td>
                          <td className="px-4 py-3 text-sm text-gray-300">15%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">12%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">8</td>
                          <td className="px-4 py-3 text-sm text-gray-300">2.0</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Market</td>
                          <td className="px-4 py-3 text-sm text-gray-300">20%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Market Share</td>
                          <td className="px-4 py-3 text-sm text-gray-300">8%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">5%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">6</td>
                          <td className="px-4 py-3 text-sm text-gray-300">1.2</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Technology</td>
                          <td className="px-4 py-3 text-sm text-gray-300">20%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Feature Adoption</td>
                          <td className="px-4 py-3 text-sm text-gray-300">75%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">80%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">9</td>
                          <td className="px-4 py-3 text-sm text-gray-300">1.8</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Team</td>
                          <td className="px-4 py-3 text-sm text-gray-300">15%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Retention Rate</td>
                          <td className="px-4 py-3 text-sm text-gray-300">90%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">92%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">9</td>
                          <td className="px-4 py-3 text-sm text-gray-300">1.35</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Strategic</td>
                          <td className="px-4 py-3 text-sm text-gray-300">20%</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Cross-Vertical Initiatives</td>
                          <td className="px-4 py-3 text-sm text-gray-300">3</td>
                          <td className="px-4 py-3 text-sm text-gray-300">2</td>
                          <td className="px-4 py-3 text-sm text-gray-300">7</td>
                          <td className="px-4 py-3 text-sm text-gray-300">1.4</td>
                        </tr>
                        <tr className="bg-slate-700/30">
                          <td className="px-4 py-3 text-sm font-bold text-white">TOTAL</td>
                          <td className="px-4 py-3 text-sm font-bold text-white">100%</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3 text-sm font-bold text-white">7.75</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'methodology' && (
              <div className="space-y-8">
                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white">
                  <h2>Measurement Methodology</h2>
                  <p>
                    The VPES implements consistent quantitative metrics and structured qualitative assessments that enable fair comparison across verticals while acknowledging their unique characteristics.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
                    <div className="flex items-start">
                      <TableCellsIcon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Quantitative Metrics</h3>
                        <p className="text-gray-300 mb-4 text-sm">
                          Consistent numerical measurements that allow for cross-vertical comparison and trend analysis.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                            <h4 className="text-white text-sm font-medium mb-1">Universal Financial Metrics</h4>
                            <p className="text-gray-300 text-xs">
                              MRR, ARR, CAC, LTV, Revenue Growth Rate, Gross Margin
                            </p>
                          </div>
                          <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                            <h4 className="text-white text-sm font-medium mb-1">Market Performance Indicators</h4>
                            <p className="text-gray-300 text-xs">
                              Market share percentage, Customer retention rate, Competitive win rate
                            </p>
                          </div>
                          <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                            <h4 className="text-white text-sm font-medium mb-1">Operational Efficiency Measurements</h4>
                            <p className="text-gray-300 text-xs">
                              Unit economics, Resource utilization rates, Process efficiency metrics
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
                    <div className="flex items-start">
                      <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Qualitative Assessments</h3>
                        <p className="text-gray-300 mb-4 text-sm">
                          Structured evaluation of aspects that cannot be fully captured through numerical data.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                            <h4 className="text-white text-sm font-medium mb-1">Structured Evaluation Frameworks</h4>
                            <p className="text-gray-300 text-xs">
                              Innovation quality assessments, Strategic alignment reviews, Leadership effectiveness
                            </p>
                          </div>
                          <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                            <h4 className="text-white text-sm font-medium mb-1">360-Degree Feedback</h4>
                            <p className="text-gray-300 text-xs">
                              Cross-functional input, Customer and partner feedback, Leadership assessment
                            </p>
                          </div>
                          <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                            <h4 className="text-white text-sm font-medium mb-1">Case Study Approach</h4>
                            <p className="text-gray-300 text-xs">
                              Detailed analysis of key projects, Post-mortem reviews, Lessons learned documentation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Data Collection Protocols</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">
                      Leveraging AI capabilities, the VPES implements sophisticated data collection mechanisms:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <h4 className="text-white font-medium mb-3 flex items-center">
                          <CogIcon className="h-5 w-5 text-blue-400 mr-2" />
                          Automated Data Gathering
                        </h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            API connections to business intelligence platforms
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Automated dashboard creation and updating
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Real-time metric monitoring systems
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Anomaly detection for data quality issues
                          </li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <h4 className="text-white font-medium mb-3 flex items-center">
                          <DocumentTextIcon className="h-5 w-5 text-blue-400 mr-2" />
                          Structured Reporting Requirements
                        </h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Standardized monthly reporting templates
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Quarterly in-depth performance analyses
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Annual strategic performance reviews
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Exception-based alert thresholds
                          </li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <h4 className="text-white font-medium mb-3 flex items-center">
                          <LinkIcon className="h-5 w-5 text-blue-400 mr-2" />
                          External Data Integration
                        </h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Market intelligence platform integration
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Competitive data aggregation
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Industry benchmark databases
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Customer sentiment analysis tools
                          </li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <h4 className="text-white font-medium mb-3 flex items-center">
                          <ShieldCheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                          Data Validation Processes
                        </h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Automated consistency checks
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Cross-reference verification
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Statistical anomaly detection
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Data quality scoring systems
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-8">
                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white">
                  <h2>Evaluation Process</h2>
                  <p>
                    The VPES operates on multiple time horizons to balance immediate operational needs with strategic considerations, involving multiple stakeholders with clearly defined responsibilities.
                  </p>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Frequency and Timing</h3>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">M</span>
                        </div>
                        <h4 className="text-white font-medium">Monthly Operational Reviews</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-2"><span className="text-blue-400 font-medium">Focus:</span> Tactical</p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Core financial and operational metrics</li>
                        <li>• Progress against quarterly objectives</li>
                        <li>• Resource utilization assessment</li>
                        <li>• Immediate action item identification</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">Q</span>
                        </div>
                        <h4 className="text-white font-medium">Quarterly Comprehensive Assessments</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-2"><span className="text-purple-400 font-medium">Focus:</span> Strategic</p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Full balanced scorecard evaluation</li>
                        <li>• Cross-vertical performance comparisons</li>
                        <li>• Resource allocation recommendations</li>
                        <li>• Strategic initiative evaluation</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">A</span>
                        </div>
                        <h4 className="text-white font-medium">Annual Strategic Evaluations</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-2"><span className="text-green-400 font-medium">Focus:</span> Portfolio</p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Long-term vertical viability assessment</li>
                        <li>• Major investment decision input</li>
                        <li>• Comprehensive capability review</li>
                        <li>• Portfolio balance optimization</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">E</span>
                        </div>
                        <h4 className="text-white font-medium">Event-Based Trigger Evaluations</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-2"><span className="text-red-400 font-medium">Focus:</span> Response</p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Market disruption response</li>
                        <li>• Competitive threat assessment</li>
                        <li>• Major opportunity analysis</li>
                        <li>• Significant performance deviation investigation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Roles and Responsibilities</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <div className="flex justify-center mb-4">
                          <UserGroupIcon className="h-12 w-12 text-blue-400" />
                        </div>
                        <h4 className="text-white font-medium text-center mb-3">Vertical Business Unit Leadership</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Primary responsibility for data collection
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Self-assessment against objectives
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Action plan development
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Implementation of improvements
                          </li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <div className="flex justify-center mb-4">
                          <ChartBarIcon className="h-12 w-12 text-purple-400" />
                        </div>
                        <h4 className="text-white font-medium text-center mb-3">Corporate Strategy Team</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Oversight of evaluation process
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Cross-vertical comparison
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Resource allocation recommendations
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Strategic insight generation
                          </li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <div className="flex justify-center mb-4">
                          <BriefcaseIcon className="h-12 w-12 text-green-400" />
                        </div>
                        <h4 className="text-white font-medium text-center mb-3">KinOS Ventures Executive Committee</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Review of evaluation results
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Final resource allocation decisions
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Strategic direction adjustments
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Vertical portfolio management
                          </li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <div className="flex justify-center mb-4">
                          <UserGroupIcon className="h-12 w-12 text-orange-400" />
                        </div>
                        <h4 className="text-white font-medium text-center mb-3">External Evaluation Partners</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-orange-400 mr-2">•</span>
                            Industry benchmark provision
                          </li>
                          <li className="flex items-start">
                            <span className="text-orange-400 mr-2">•</span>
                            Objective competitive assessment
                          </li>
                          <li className="flex items-start">
                            <span className="text-orange-400 mr-2">•</span>
                            Technology evaluation assistance
                          </li>
                          <li className="flex items-start">
                            <span className="text-orange-400 mr-2">•</span>
                            Best practice recommendation
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Execution Workflow</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="relative">
                        {[1, 2, 3, 4, 5].map((step) => (
                          <div key={step} className="flex items-start mb-8">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 mr-4 flex-shrink-0">
                              <span className="text-white font-semibold">{step}</span>
                            </div>
                            <div className="bg-slate-700/40 rounded-lg p-4 border border-slate-600 flex-1 max-w-xl">
                              <h4 className="text-white font-medium mb-2">
                                {step === 1 && 'Pre-evaluation Preparation'}
                                {step === 2 && 'Data Collection and Validation'}
                                {step === 3 && 'Analysis and Insight Generation'}
                                {step === 4 && 'Review and Feedback'}
                                {step === 5 && 'Documentation and Communication'}
                              </h4>
                              <p className="text-gray-300 text-sm">
                                {step === 1 && 'Data requirements communication, template distribution, scheduling of review meetings, and prior period action item status check.'}
                                {step === 2 && 'Automated data gathering, manual data submission, data quality verification, and gap identification and resolution.'}
                                {step === 3 && 'Metric calculation and scoring, trend analysis, cross-vertical comparison, and AI-assisted insight generation.'}
                                {step === 4 && 'Initial findings presentation, leadership team discussion, vertical leader response, and action planning.'}
                                {step === 5 && 'Final evaluation report creation, distribution to stakeholders, action plan formalization, and knowledge sharing.'}
                              </p>
                              <div className="text-xs text-gray-400 mt-2">
                                {step === 1 && 'Week 1'}
                                {step === 2 && 'Week 2'}
                                {step === 3 && 'Week 3'}
                                {step === 4 && 'Week 4'}
                                {step === 5 && 'Week 5'}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'allocation' && (
              <div className="space-y-8">
                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white">
                  <h2>Application to Resource Allocation</h2>
                  <p>
                    The VPES directly informs resource allocation through a structured decision framework, enabling effective management of the vertical portfolio through data-driven insights.
                  </p>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Decision-Making Framework</h3>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <ChartBarIcon className="h-5 w-5 text-blue-400 mr-2" />
                        Performance-Based Allocation Model
                      </h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Base resource allocation on composite performance score
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Weighted investment based on strategic importance
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Opportunity-adjusted resource distribution
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Minimum viable support thresholds for all verticals
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <WrenchScrewdriverIcon className="h-5 w-5 text-blue-400 mr-2" />
                        Investment Prioritization Methodology
                      </h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          ROI projection for each vertical
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Strategic value assessment
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Capability gap analysis
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Cross-vertical synergy potential
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <ShieldCheckIcon className="h-5 w-5 text-blue-400 mr-2" />
                        Risk Assessment Integration
                      </h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Market risk factors
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Execution capability assessment
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Technology risk evaluation
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Competitive threat analysis
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <ChartPieIcon className="h-5 w-5 text-blue-400 mr-2" />
                        Strategic Value Weighting
                      </h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Core technology advancement potential
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Brand and market position impact
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Long-term growth contribution
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          Ecosystem strengthening effect
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Portfolio Management Approach</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">
                      The VPES enables effective management of the vertical portfolio through:
                    </p>
                    <div className="space-y-6">
                      <div className="bg-slate-700/40 rounded-lg p-5 border border-slate-600">
                        <h4 className="text-white font-medium mb-4">Investment Category Framework</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-green-900/20 p-4 rounded border border-green-700/30">
                            <h5 className="text-green-300 font-medium mb-2">High-Growth Stars</h5>
                            <p className="text-gray-300 text-sm">
                              Verticals with proven product-market fit and significant growth potential receive accelerated investment
                            </p>
                          </div>
                          <div className="bg-blue-900/20 p-4 rounded border border-blue-700/30">
                            <h5 className="text-blue-300 font-medium mb-2">Stable Contributors</h5>
                            <p className="text-gray-300 text-sm">
                              Mature verticals with consistent performance receive maintenance investment
                            </p>
                          </div>
                          <div className="bg-purple-900/20 p-4 rounded border border-purple-700/30">
                            <h5 className="text-purple-300 font-medium mb-2">Strategic Investments</h5>
                            <p className="text-gray-300 text-sm">
                              Early-stage verticals with high strategic potential receive patient capital
                            </p>
                          </div>
                          <div className="bg-orange-900/20 p-4 rounded border border-orange-700/30">
                            <h5 className="text-orange-300 font-medium mb-2">Turnaround Candidates</h5>
                            <p className="text-gray-300 text-sm">
                              Underperforming verticals with correction potential receive focused improvement investment
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Resource Allocation Decision Matrix</h3>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-600">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Performance Level</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Strategic Importance</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                          <th className="px-4 py-3 bg-slate-700/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Resource Impact</th>
                        </tr>
                      </thead>
                      <tbody className="bg-slate-800 divide-y divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">High</td>
                          <td className="px-4 py-3 text-sm text-gray-300">High</td>
                          <td className="px-4 py-3 text-sm text-green-400 font-medium">Accelerate</td>
                          <td className="px-4 py-3 text-sm text-gray-300">+25-50% resources</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">High</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Medium</td>
                          <td className="px-4 py-3 text-sm text-blue-400 font-medium">Optimize</td>
                          <td className="px-4 py-3 text-sm text-gray-300">+10-25% resources</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">High</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Low</td>
                          <td className="px-4 py-3 text-sm text-gray-400 font-medium">Maintain</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Stable resources</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Medium</td>
                          <td className="px-4 py-3 text-sm text-gray-300">High</td>
                          <td className="px-4 py-3 text-sm text-blue-400 font-medium">Strengthen</td>
                          <td className="px-4 py-3 text-sm text-gray-300">+10-25% resources</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Medium</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Medium</td>
                          <td className="px-4 py-3 text-sm text-gray-400 font-medium">Support</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Stable resources</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Medium</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Low</td>
                          <td className="px-4 py-3 text-sm text-yellow-400 font-medium">Efficiency focus</td>
                          <td className="px-4 py-3 text-sm text-gray-300">-10% resources</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Low</td>
                          <td className="px-4 py-3 text-sm text-gray-300">High</td>
                          <td className="px-4 py-3 text-sm text-orange-400 font-medium">Turnaround</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Special intervention</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Low</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Medium</td>
                          <td className="px-4 py-3 text-sm text-orange-400 font-medium">Restructure</td>
                          <td className="px-4 py-3 text-sm text-gray-300">-25% resources</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-white">Low</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Low</td>
                          <td className="px-4 py-3 text-sm text-red-400 font-medium">Evaluate viability</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Consider exit</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="space-y-8">
                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white">
                  <h2>AI Integration for Performance Evaluation</h2>
                  <p>
                    The VPES leverages AI to streamline and enhance data collection, analysis, and insight generation, creating a living, adaptive measurement system.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <CogIcon className="h-8 w-8 text-purple-500 mr-3 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-white">Automated Data Collection</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        The VPES leverages AI to streamline and enhance data collection:
                      </p>
                      <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 mb-4 flex-1">
                        <h4 className="text-white font-medium mb-3">AI-Powered Data Pipeline</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Automated connectors extract performance data from all vertical systems
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            NLP processing of unstructured data
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            AI-driven data validation flagging anomalies
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            Unified data architecture maintaining compliance
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                        <h5 className="text-blue-300 text-sm font-medium mb-2">Implementation Example</h5>
                        <p className="text-gray-300 text-xs italic">
                          The system automatically pulls MRR data from billing systems, customer satisfaction data from support platforms, and engagement metrics from product analytics, normalizing them into a consistent format for comparison.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <ChartBarIcon className="h-8 w-8 text-blue-500 mr-3 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-white">Performance Analysis and Insights</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        AI significantly enhances the depth and quality of performance analysis:
                      </p>
                      <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 mb-4 flex-1">
                        <h4 className="text-white font-medium mb-3">Multi-dimensional Analysis Engine</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            ML models identify correlations between metrics
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Automated competitor analysis
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Leading indicator identification
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            Causal inference algorithms
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                        <h5 className="text-blue-300 text-sm font-medium mb-2">Implementation Example</h5>
                        <p className="text-gray-300 text-xs italic">
                          The system identifies that team composition changes in KinOS Finance correlate with subsequent performance improvements three months later, providing insights that can be tested in other verticals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <LightBulbIcon className="h-8 w-8 text-yellow-500 mr-3 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-white">Strategic Recommendation System</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        AI transforms data into actionable recommendations:
                      </p>
                      <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 mb-4 flex-1">
                        <h4 className="text-white font-medium mb-3">AI Decision Support System</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            Recommendation engine suggesting optimal resource allocation
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            Automated opportunity identification
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            Technology investment prioritization
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            Talent allocation suggestions
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                        <h5 className="text-blue-300 text-sm font-medium mb-2">Implementation Example</h5>
                        <p className="text-gray-300 text-xs italic">
                          The system recommends shifting two AI engineers from KinOS Entertainment to KinOS Education for three months to implement a shared technology component that will benefit both verticals.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <ArrowPathIcon className="h-8 w-8 text-green-500 mr-3 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-white">Adaptive Evaluation Framework</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        The evaluation system itself evolves through AI:
                      </p>
                      <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 mb-4 flex-1">
                        <h4 className="text-white font-medium mb-3">Self-evolving Metrics System</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Reinforcement learning optimizes metric weighting
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            AI suggests new metrics based on emerging patterns
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Vertical-specific metric recommendations
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Automated A/B testing of evaluation methodologies
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                        <h5 className="text-blue-300 text-sm font-medium mb-2">Implementation Example</h5>
                        <p className="text-gray-300 text-xs italic">
                          After analyzing six months of data, the system recommends adding a new "knowledge sharing effectiveness" metric that shows strong correlation with subsequent performance improvements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                  <div className="px-6 py-5 border-b border-slate-700">
                    <h3 className="text-xl font-semibold text-white">Integration with KinOS Core Technology</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">
                      The VPES leverages the foundational capabilities of the KinOS engine:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-slate-700/40 p-5 rounded-lg border border-slate-600">
                        <div className="flex items-center mb-4">
                          <div className="bg-purple-900/40 p-2 rounded-lg mr-3">
                            <BeakerIcon className="h-6 w-6 text-purple-400" />
                          </div>
                          <h4 className="text-white font-medium">Memory Capabilities</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Maintain comprehensive historical context for each vertical, enabling pattern recognition and trend analysis across time periods.
                        </p>
                      </div>
                      <div className="bg-slate-700/40 p-5 rounded-lg border border-slate-600">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-900/40 p-2 rounded-lg mr-3">
                            <ArrowPathIcon className="h-6 w-6 text-blue-400" />
                          </div>
                          <h4 className="text-white font-medium">Adaptation Mechanisms</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Continuously refine evaluation methodologies based on effectiveness and changing market and operational conditions.
                        </p>
                      </div>
                      <div className="bg-slate-700/40 p-5 rounded-lg border border-slate-600">
                        <div className="flex items-center mb-4">
                          <div className="bg-green-900/40 p-2 rounded-lg mr-3">
                            <ChartBarIcon className="h-6 w-6 text-green-400" />
                          </div>
                          <h4 className="text-white font-medium">Growth Capabilities</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Scale the evaluation system as new verticals are added while maintaining cross-vertical learning and comparative capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - 1 column wide on large screens */}
          <div className="lg:col-span-1 space-y-8">
            {/* Related Resources */}
            <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/80">
                <h3 className="text-lg font-semibold text-white">Related Resources</h3>
              </div>
              <div className="p-6 space-y-4">
                {relatedResources.map((resource) => (
                  <Link 
                    key={resource.id}
                    href={`/resources/${resource.id}`}
                    className="block bg-slate-700/40 hover:bg-slate-700/60 p-4 rounded-lg border border-slate-600 transition duration-150"
                  >
                    <h4 className="text-white font-medium mb-1">{resource.title}</h4>
                    <p className="text-gray-400 text-sm">{resource.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/80">
                <h3 className="text-lg font-semibold text-white">Implementation Roadmap</h3>
              </div>
              <div className="p-6 space-y-3">
                <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                  <div className="flex">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">Foundation (Month 1-2)</h4>
                      <p className="text-gray-300 text-xs mt-1">
                        Define core metrics, establish data collection, create baseline scorecards
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                  <div className="flex">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">Integration (Month 3-4)</h4>
                      <p className="text-gray-300 text-xs mt-1">
                        Connect data sources, deploy AI analysis, conduct first evaluation cycle
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                  <div className="flex">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">Optimization (Month 5-6)</h4>
                      <p className="text-gray-300 text-xs mt-1">
                        Implement predictive modeling, integrate with resource allocation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/40 p-3 rounded border border-slate-600">
                  <div className="flex">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-3 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">Advanced Capabilities (Month 7-12)</h4>
                      <p className="text-gray-300 text-xs mt-1">
                        Deploy full AI recommendation system, implement adaptive metrics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/80">
                <h3 className="text-lg font-semibold text-white">Key Benefits</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-green-900/30 rounded-full p-1 mt-0.5 mr-3">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">Data-driven decision making for resource allocation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-green-900/30 rounded-full p-1 mt-0.5 mr-3">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">Balanced assessment beyond financial metrics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-green-900/30 rounded-full p-1 mt-0.5 mr-3">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">Early identification of challenges and opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-green-900/30 rounded-full p-1 mt-0.5 mr-3">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">Enhanced cross-vertical learning and knowledge transfer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-green-900/30 rounded-full p-1 mt-0.5 mr-3">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">AI-powered insights that continuously improve</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}