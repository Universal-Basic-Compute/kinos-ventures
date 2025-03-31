'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChartBarIcon, PresentationChartLineIcon, UserGroupIcon, CogIcon, BoltIcon, DocumentTextIcon, ArrowPathIcon, ChevronRightIcon, LightBulbIcon, PuzzlePieceIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { ArrowTrendingUpIcon, ClipboardDocumentCheckIcon, CircleStackIcon } from '@heroicons/react/24/solid'

const MetricsStandardizationGuide = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-gray-300">
      {/* Header Section */}
      <section className="px-4 py-12 md:py-16 lg:py-20 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Metrics Standardization Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Common success measurements applicable across different business units
          </p>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
            <p className="text-lg italic">
              A unified measurement framework that enables cross-vertical comparison while accommodating 
              business-specific KPIs for effective resource allocation and performance evaluation.
            </p>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-3xl mb-12">
          <Image 
            src="/categories/Operations_Management/metrics-standardization-guide.png"
            alt="Metrics Standardization Guide"
            width={1200}
            height={675}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="px-4 py-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Framework Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
              <ChartBarIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Universal Core Metrics</h3>
              <p className="text-gray-300">Consistent measurement standards for all verticals to enable valid comparison</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
              <PuzzlePieceIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Vertical Flexibility</h3>
              <p className="text-gray-300">Customizable metrics for each business unit's unique needs and market</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
              <ArrowPathIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Continuous Adaptation</h3>
              <p className="text-gray-300">AI-powered evolution that improves measurement as the business grows</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
              <PresentationChartLineIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Alignment</h3>
              <p className="text-gray-300">Metrics directly tied to business outcomes and resource allocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300">
            <h2>Executive Summary</h2>
            <p>
              This guide establishes a comprehensive metrics framework for KinOS Ventures to enable consistent measurement, 
              evaluation, and strategic decision-making across all 14 vertical business units. By standardizing core metrics 
              while allowing for vertical-specific adaptations, we create a unified language for performance assessment that 
              supports resource allocation, strategic planning, and cross-vertical knowledge sharing.
            </p>
          </div>
        </div>
      </section>

      {/* Universal Core Metrics Section */}
      <section className="px-4 py-12 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Universal Core Metrics
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            These metrics must be tracked consistently across all vertical business units, 
            regardless of business model or market. They form the foundation of our cross-vertical performance comparison.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Financial Performance Metrics */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-center mb-6">
                <CircleStackIcon className="h-10 w-10 text-green-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Financial Performance</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Monthly Recurring Revenue (MRR)</h4>
                  <p className="text-sm text-gray-300">Predictable revenue generated each month</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Customer Acquisition Cost (CAC)</h4>
                  <p className="text-sm text-gray-300">Total cost to acquire a new customer</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Lifetime Value (LTV)</h4>
                  <p className="text-sm text-gray-300">Total expected revenue from a customer</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Revenue Growth Rate</h4>
                  <p className="text-sm text-gray-300">Pace of revenue increase</p>
                </div>
              </div>
            </div>

            {/* Customer Engagement Metrics */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-center mb-6">
                <UserGroupIcon className="h-10 w-10 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Customer Engagement</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Monthly Active Users (MAU)</h4>
                  <p className="text-sm text-gray-300">Unique users engaging with product monthly</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">User Retention Rate</h4>
                  <p className="text-sm text-gray-300">Users who return after initial period</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Net Promoter Score (NPS)</h4>
                  <p className="text-sm text-gray-300">Customer likelihood to recommend</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Feature Adoption Rate</h4>
                  <p className="text-sm text-gray-300">Usage of key product features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Operational Metrics */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-center mb-6">
                <CogIcon className="h-10 w-10 text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Operational Metrics</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">System Uptime</h4>
                  <p className="text-sm text-gray-300">Service availability</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Response Time</h4>
                  <p className="text-sm text-gray-300">System responsiveness</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Development Velocity</h4>
                  <p className="text-sm text-gray-300">Speed of shipping features</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Support Resolution Time</h4>
                  <p className="text-sm text-gray-300">Time to resolve customer issues</p>
                </div>
              </div>
            </div>

            {/* AI-Specific Performance Metrics */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-center mb-6">
                <BoltIcon className="h-10 w-10 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">AI-Specific Metrics</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Model Accuracy</h4>
                  <p className="text-sm text-gray-300">Correctness of AI predictions</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">Adaptation Rate</h4>
                  <p className="text-sm text-gray-300">Speed of learning from new data</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">User Correction Frequency</h4>
                  <p className="text-sm text-gray-300">How often users override AI</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-md">
                  <h4 className="font-semibold text-white mb-1">AI Engagement Rate</h4>
                  <p className="text-sm text-gray-300">User interaction with AI features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical-Specific Metrics */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Vertical-Specific Metric Guidelines
        </h2>

        <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Framework for Vertical-Specific KPIs</h3>
          <p className="mb-6">
            While core metrics provide cross-vertical consistency, each business unit must also 
            develop vertical-specific metrics that reflect their unique value proposition and business model.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-5 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Requirements for Vertical-Specific Metrics:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Must directly tie to the vertical's specific business objectives</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cannot replace or modify the calculation of any core metric</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Must be approved by the Central Data Team for methodological soundness</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Should be limited to 5-7 key metrics to maintain focus</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-5 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Approval Process:</h4>
              <ol className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">1</div>
                  <span>Vertical team submits proposed metrics with definitions and business justification</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">2</div>
                  <span>Central Data Team reviews for methodology and implementation feasibility</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">3</div>
                  <span>Executive sponsor approves alignment with strategic objectives</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">4</div>
                  <span>Metrics are added to the vertical's dashboard with appropriate context</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-6">Sample Vertical-Specific Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
            <h4 className="text-lg font-semibold text-white mb-4">KinOS Health</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-green-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <ChartBarIcon className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Clinical Efficacy Rate</span>
                  <p className="text-sm text-gray-400">Measured improvement in patient outcomes</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <ChartBarIcon className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Therapist Efficiency</span>
                  <p className="text-sm text-gray-400">Additional patients handled with AI assistance</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Regulatory Compliance Score</span>
                  <p className="text-sm text-gray-400">Adherence to healthcare regulations</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
            <h4 className="text-lg font-semibold text-white mb-4">KinOS Finance</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Risk-Adjusted Return</span>
                  <p className="text-sm text-gray-400">Performance relative to risk taken</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <PresentationChartLineIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Forecasting Accuracy</span>
                  <p className="text-sm text-gray-400">Precision of financial predictions</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Compliance Violation Rate</span>
                  <p className="text-sm text-gray-400">Regulatory issues identified</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
            <h4 className="text-lg font-semibold text-white mb-4">KinOS Education</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-purple-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <ChartBarIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Learning Outcome Achievement</span>
                  <p className="text-sm text-gray-400">Student mastery of material</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Certification Pass Rate</span>
                  <p className="text-sm text-gray-400">Success in formal assessments</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                  <LightBulbIcon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <span className="font-medium text-white">Knowledge Retention</span>
                  <p className="text-sm text-gray-400">Long-term information recall</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation Guidelines */}
      <section className="px-4 py-12 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Implementation Guidelines
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <DocumentTextIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Collection Protocols</h3>
              <p className="mb-4">Standardized approaches for gathering metrics across all verticals.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Core metrics must be updated daily, recalculated monthly</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated data quality checks verify accuracy</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All sources documented with data dictionaries</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <PresentationChartLineIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Reporting Framework</h3>
              <p className="mb-4">Consistent reporting structure for all business units.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Daily operational metrics snapshot</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weekly performance trend review</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quarterly cross-vertical performance comparison</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <CogIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Integration with Business Processes</h3>
              <p className="mb-4">How metrics connect to strategic decision-making.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Metrics directly inform resource allocation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Annual planning cycle uses metric trends</span>
                </li>
                <li className="flex items-start">
                  <ChevronRightIcon className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Leadership evaluation includes metric performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Implementation */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          AI-Powered Metrics Implementation
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Leveraging the KinOS engine's capabilities to enhance metrics collection, analysis, and insight generation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">Automated Metrics Collection</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <BoltIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Intelligent Data Extraction</span>
                    <p className="text-sm text-gray-300">Automatically identifies and extracts key metrics from various systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <BoltIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Natural Language Metrics</span>
                    <p className="text-sm text-gray-300">Analyzes qualitative data from customer interactions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <BoltIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Anomaly Detection</span>
                    <p className="text-sm text-gray-300">Identifies unusual patterns and potential data quality issues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <PresentationChartLineIcon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Metric Forecasting</span>
                    <p className="text-sm text-gray-300">Predicts future metric values based on historical patterns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <PresentationChartLineIcon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Leading Indicators</span>
                    <p className="text-sm text-gray-300">Identifies early signals that typically precede changes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <PresentationChartLineIcon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Scenario Modeling</span>
                    <p className="text-sm text-gray-300">Projects metric impacts from potential strategic decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">Cross-Vertical Intelligence Sharing</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <UsersIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Pattern Recognition</span>
                    <p className="text-sm text-gray-300">Identifies successful strategies from high-performing verticals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <UsersIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Comparative Analysis</span>
                    <p className="text-sm text-gray-300">Automatically compares similar initiatives across verticals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <UsersIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Knowledge Transfer Recommendations</span>
                    <p className="text-sm text-gray-300">Suggests specific learnings from one vertical to benefit another</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">Continuous Improvement Systems</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <ArrowPathIcon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Metric Effectiveness Analysis</span>
                    <p className="text-sm text-gray-300">Evaluates how well each metric predicts business outcomes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <ArrowPathIcon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">Automated Refinement Suggestions</span>
                    <p className="text-sm text-gray-300">Recommends improvements to metrics based on analytical value</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-md mr-3 flex-shrink-0">
                    <ArrowPathIcon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white">New Metric Proposals</span>
                    <p className="text-sm text-gray-300">Suggests potential new metrics based on emerging patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="px-4 py-12 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Implementation Roadmap
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-500/30"></div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-xs">1</span>
                </div>
                
                <div className="pl-16 md:pl-0 md:pr-10 md:text-right md:w-1/2">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 inline-block">
                    <h3 className="text-lg font-bold text-white mb-2">Phase 1: Foundation</h3>
                    <p className="text-sm text-gray-300 mb-1">Month 1-2</p>
                    <ul className="text-sm space-y-1">
                      <li>Establish governance structure</li>
                      <li>Deploy core metrics infrastructure</li>
                      <li>Train vertical metrics owners</li>
                      <li>Baseline current performance</li>
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-xs">2</span>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>

                <div className="pl-16 md:pl-10 md:w-1/2">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 inline-block">
                    <h3 className="text-lg font-bold text-white mb-2">Phase 2: Standardization</h3>
                    <p className="text-sm text-gray-300 mb-1">Month 3-4</p>
                    <ul className="text-sm space-y-1">
                      <li>Implement core metrics across all verticals</li>
                      <li>Develop vertical-specific metrics</li>
                      <li>Create standard reporting dashboards</li>
                      <li>Connect metrics to business processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-xs">3</span>
                </div>
                
                <div className="pl-16 md:pl-0 md:pr-10 md:text-right md:w-1/2">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 inline-block">
                    <h3 className="text-lg font-bold text-white mb-2">Phase 3: AI Enhancement</h3>
                    <p className="text-sm text-gray-300 mb-1">Month 5-6</p>
                    <ul className="text-sm space-y-1">
                      <li>Deploy KinOS Metrics Engine capabilities</li>
                      <li>Implement predictive analytics features</li>
                      <li>Enable cross-vertical intelligence sharing</li>
                      <li>Establish continuous improvement processes</li>
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* Phase 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-xs">4</span>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>

                <div className="pl-16 md:pl-10 md:w-1/2">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 inline-block">
                    <h3 className="text-lg font-bold text-white mb-2">Phase 4: Optimization</h3>
                    <p className="text-sm text-gray-300 mb-1">Month 7-12</p>
                    <ul className="text-sm space-y-1">
                      <li>Refine metrics based on initial learnings</li>
                      <li>Expand automated insight generation</li>
                      <li>Develop advanced forecasting capabilities</li>
                      <li>Integrate with strategic planning cycle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Related Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/resources/operations-management/vertical-performance-evaluation" className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
            <ChartBarIcon className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Vertical Performance Evaluation</h3>
            <p className="text-gray-300 mb-4">How to assess the health and growth potential of different business lines</p>
            <div className="flex items-center text-blue-400">
              <span className="mr-2">View Resource</span>
              <ChevronRightIcon className="h-4 w-4" />
            </div>
          </Link>

          <Link href="/resources/operations-management/resource-allocation-framework" className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
            <UsersIcon className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Resource Allocation Framework</h3>
            <p className="text-gray-300 mb-4">System for distributing technical and human resources across verticals</p>
            <div className="flex items-center text-blue-400">
              <span className="mr-2">View Resource</span>
              <ChevronRightIcon className="h-4 w-4" />
            </div>
          </Link>

          <Link href="/resources/operations-management/customer-success-integration-model" className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
            <RocketLaunchIcon className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Customer Success Integration Model</h3>
            <p className="text-gray-300 mb-4">How customer insights feed back into product development</p>
            <div className="flex items-center text-blue-400">
              <span className="mr-2">View Resource</span>
              <ChevronRightIcon className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Start Implementing Standardized Metrics
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to implement consistent measurement across your vertical business units? 
            Download our templates and get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all">
              Download Metrics Templates
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-all">
              Schedule Implementation Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MetricsStandardizationGuide