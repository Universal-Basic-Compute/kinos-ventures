'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2, FiTarget, FiUsers, FiDollarSign, FiTrendingUp, FiShield, FiClipboard, FiPieChart, FiLayers, FiCpu } from 'react-icons/fi';
import Image from 'next/image';

export default function BusinessPlanFrameworkPage() {
  const [activeSection, setActiveSection] = useState('overview');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="relative h-80 w-full">
        <Image
          src="/categories/Business_Growth/business-plan-framework.png"
          alt="Business Plan Framework"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Plan Framework</h1>
          <p className="text-xl max-w-3xl">
            A comprehensive methodology for developing strategic business plans across KinOS Ventures' vertical business units
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-800 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveSection('fundamentals')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'fundamentals' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Business Fundamentals
            </button>
            <button
              onClick={() => setActiveSection('market')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'market' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Market Analysis
            </button>
            <button
              onClick={() => setActiveSection('business-model')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'business-model' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Business Model
            </button>
            <button
              onClick={() => setActiveSection('go-to-market')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'go-to-market' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Go-to-Market
            </button>
            <button
              onClick={() => setActiveSection('ai-enhanced')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'ai-enhanced' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              AI-Enhanced Planning
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === 'overview' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
              <p>
                The Business Plan Framework provides a comprehensive methodology for developing strategic business plans across KinOS Ventures' vertical business units. This structured approach ensures consistency in planning while allowing for vertical-specific customization. By implementing this framework, teams can create business plans that align with our unified technology core strategy while addressing the unique market dynamics of each vertical.
              </p>
              <p>
                The document covers all essential components of effective business planning—from market analysis and competitive positioning to financial projections and implementation roadmaps—with a particular focus on leveraging our AI capabilities throughout the planning process. This framework directly supports our transition from a decentralized token economy to a SaaS and subscription revenue model by providing clear guidelines for sustainable business growth across diverse markets.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8">Key Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-400 mb-4">
                    <FiBarChart2 size={36} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Business Fundamentals</h3>
                  <p className="text-gray-300">
                    Core principles, plan types, and integration with KinOS frameworks to ensure strategic alignment across verticals.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-green-400 mb-4">
                    <FiTarget size={36} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
                  <p className="text-gray-300">
                    Comprehensive methodologies for market research, opportunity sizing, and problem-solution fit validation.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-purple-400 mb-4">
                    <FiDollarSign size={36} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Business Model Development</h3>
                  <p className="text-gray-300">
                    Structured approaches to revenue model design, cost structure analysis, and profitability planning.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-yellow-400 mb-4">
                    <FiUsers size={36} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Go-to-Market Strategy</h3>
                  <p className="text-gray-300">
                    Frameworks for target market segmentation, channel strategy, and positioning and messaging.
                  </p>
                </div>

                {/* Card 5 */}
                <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-red-400 mb-4">
                    <FiShield size={36} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
                  <p className="text-gray-300">
                    Methodical approaches to identifying, evaluating, and mitigating business and market risks.
                  </p>
                </div>

                {/* Card 6 */}
                <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-cyan-400 mb-4">
                    <FiCpu size={36} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Enhanced Planning</h3>
                  <p className="text-gray-300">
                    Leveraging KinOS AI capabilities to enhance market intelligence, financial modeling, and implementation planning.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Why This Framework Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiTrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Strategic Alignment</h3>
                    <p className="mt-1 text-gray-300">Ensures all vertical business plans support our overall mission and technology strategy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiPieChart className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Resource Optimization</h3>
                    <p className="mt-1 text-gray-300">Provides justification for investment and efficient resource distribution</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiClipboard className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Execution Clarity</h3>
                    <p className="mt-1 text-gray-300">Creates a clear path from concept to market implementation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiLayers className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Cross-Vertical Leverage</h3>
                    <p className="mt-1 text-gray-300">Identifies opportunities to utilize insights and capabilities from other verticals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeSection === 'fundamentals' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Business Plan Fundamentals</h2>
              <p>
                A well-crafted business plan serves multiple critical functions for KinOS Ventures, from strategic alignment to resource allocation and execution roadmapping. This section outlines the core principles and applications of business planning across our organization.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Core Planning Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiTarget className="text-blue-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">First Principles Thinking</h4>
                  </div>
                  <p className="text-gray-300">
                    Apply our First Principles Decision-Making Framework to challenge assumptions and identify true opportunities
                  </p>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiLayers className="text-green-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Cross-Vertical Leverage</h4>
                  </div>
                  <p className="text-gray-300">
                    Identify opportunities to utilize insights and capabilities from other verticals
                  </p>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiCpu className="text-purple-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Technology Core Alignment</h4>
                  </div>
                  <p className="text-gray-300">
                    Demonstrate how the plan leverages our unified KinOS engine
                  </p>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiShield className="text-red-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Ethical AI Integration</h4>
                  </div>
                  <p className="text-gray-300">
                    Incorporate our AI Ethics & Responsibility Charter throughout
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Business Plan Types and Applications</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-slate-800 rounded-lg overflow-hidden">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plan Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Primary Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Typical Timeframe</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Key Components</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">New Vertical Launch</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Establish new business unit</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">3-5 years</td>
                      <td className="px-6 py-4 text-sm text-gray-300">Comprehensive market analysis, full financial projections, detailed implementation roadmap</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Product Extension</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Expand existing vertical offering</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">1-3 years</td>
                      <td className="px-6 py-4 text-sm text-gray-300">Gap analysis, competitive positioning, incremental financial impact</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Market Expansion</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Enter new geographic or customer segment</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">2-3 years</td>
                      <td className="px-6 py-4 text-sm text-gray-300">Market opportunity assessment, localization requirements, channel strategy</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Strategic Pivot</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Significant business model change</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">2-4 years</td>
                      <td className="px-6 py-4 text-sm text-gray-300">Current state assessment, transition strategy, risk mitigation plan</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Annual Operating Plan</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Tactical execution guidance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">1 year</td>
                      <td className="px-6 py-4 text-sm text-gray-300">Detailed objectives, resource allocation, quarterly milestones</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeSection === 'market' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Market Analysis and Opportunity Assessment</h2>
              <p>
                Thorough market analysis forms the foundation of any successful business plan. This section provides frameworks and methodologies for conducting comprehensive market research, sizing opportunities, and validating problem-solution fit.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Market Research Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-blue-400">Primary Research</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Customer interview protocols
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Industry expert consultation
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Competitor product analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      User testing and feedback
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-green-400">Secondary Research</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Industry reports and market sizing
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Competitive intelligence databases
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Patent and innovation tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Regulatory and compliance monitoring
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">AI-Enhanced Analysis</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Market trends analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Emerging opportunity identification
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Competitive landscape mapping
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Market evolution prediction
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Opportunity Sizing Framework</h3>
              <div className="bg-slate-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <h4 className="text-xl font-semibold mb-4">Market Sizing Methodology</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-blue-400">Total Addressable Market (TAM)</h5>
                        <p className="text-gray-300 mt-1">The total market demand for a product or service</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-400">Serviceable Addressable Market (SAM)</h5>
                        <p className="text-gray-300 mt-1">The portion of TAM targeted by your products and services</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-400">Serviceable Obtainable Market (SOM)</h5>
                        <p className="text-gray-300 mt-1">The portion of SAM that is realistic to capture</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:border-l md:border-slate-600 md:pl-6">
                    <h4 className="text-xl font-semibold mb-4">Example: KinOS Health Vertical</h4>
                    <div className="bg-slate-800 p-4 rounded-lg text-sm">
                      <p className="text-white"><span className="text-blue-400">TAM:</span> $188B global digital health market</p>
                      <p className="text-gray-400 ml-4">↓ Geographic focus: North America, Western Europe</p>
                      <p className="text-gray-400 ml-4">↓ Segment focus: Mental health solutions</p>
                      <p className="text-gray-400 ml-4">↓ Technical feasibility: AI-ready providers</p>
                      <p className="text-white mt-2"><span className="text-blue-400">SAM:</span> $42B mental health technology market</p>
                      <p className="text-gray-400 ml-4">↓ Go-to-market capacity constraints</p>
                      <p className="text-gray-400 ml-4">↓ Competitive differentiation factors</p>
                      <p className="text-gray-400 ml-4">↓ Adoption curve projections</p>
                      <p className="text-white mt-2"><span className="text-blue-400">SOM:</span> $380M obtainable in first 36 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Problem-Solution Fit Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiTarget className="text-red-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Problem Validation</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Problem severity assessment</li>
                    <li>Current solution landscape analysis</li>
                    <li>Stakeholder impact mapping</li>
                    <li>Problem prioritization methodology</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiLayers className="text-yellow-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Solution Hypothesis</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Value proposition canvas implementation</li>
                    <li>Solution differentiation analysis</li>
                    <li>Technical feasibility assessment</li>
                    <li>Initial pricing model exploration</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiClipboard className="text-green-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Validation Methodology</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Minimum viable product definition</li>
                    <li>User testing protocols</li>
                    <li>Feedback collection and analysis</li>
                    <li>Iteration and refinement process</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeSection === 'business-model' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Business Model Development</h2>
              <p>
                A robust business model is essential for sustainable growth. This section outlines frameworks for revenue model design, cost structure analysis, and profitability planning across KinOS Ventures' vertical business units.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Revenue Model Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">Revenue Stream Options</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Subscription models</span>
                        <p className="text-sm text-gray-400">Seat-based, usage-based, tiered pricing structures</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Transaction-based models</span>
                        <p className="text-sm text-gray-400">Per-use, success fee, volume-based pricing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Licensing arrangements</span>
                        <p className="text-sm text-gray-400">Technology, data, and IP licensing options</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Professional services</span>
                        <p className="text-sm text-gray-400">Implementation, customization, and training</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">Pricing Strategy Development</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Value-based pricing</span>
                        <p className="text-sm text-gray-400">Pricing based on value delivered to customers</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Competitive positioning</span>
                        <p className="text-sm text-gray-400">Strategic pricing relative to market alternatives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Price sensitivity analysis</span>
                        <p className="text-sm text-gray-400">Understanding elasticity and willingness to pay</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Packaging and bundling</span>
                        <p className="text-sm text-gray-400">Strategic grouping of features and capabilities</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Cost Structure Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiDollarSign className="text-red-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Direct Costs</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Technology infrastructure and hosting</li>
                    <li>Third-party services and APIs</li>
                    <li>Data acquisition and processing</li>
                    <li>Customer support and success</li>
                    <li>Implementation services</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiDollarSign className="text-yellow-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Indirect Costs</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Research and development</li>
                    <li>Sales and marketing investment</li>
                    <li>General and administrative</li>
                    <li>Compliance and regulatory costs</li>
                    <li>Cross-vertical resource sharing</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiBarChart2 className="text-green-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Unit Economics</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Customer acquisition cost (CAC)</li>
                    <li>Lifetime value (LTV) projection</li>
                    <li>Payback period analysis</li>
                    <li>Contribution margin assessment</li>
                    <li>Breakeven analysis</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Example: Unit Economics Model</h3>
              <div className="bg-slate-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">KinOS Finance Unit Economics</h4>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-blue-400 mb-2">Customer Acquisition</h5>
                      <ul className="space-y-1 text-gray-300">
                        <li>• CAC: $12,500 per enterprise client</li>
                        <li>• Sales cycle: 90 days average</li>
                        <li>• Conversion rate: 22% from qualified opportunity</li>
                      </ul>
                      
                      <h5 className="font-medium text-blue-400 mt-4 mb-2">Revenue Model</h5>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Initial contract: $85,000 average annual value</li>
                        <li>• Expansion revenue: 20% year 2, 15% year 3</li>
                        <li>• Renewal rate: 85% year 2, 92% year 3+</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-green-400 mb-2">Unit Economics</h5>
                      <ul className="space-y-1 text-gray-300">
                        <li>• LTV: $275,000 (3-year calculation)</li>
                        <li>• LTV:CAC ratio: 22:1</li>
                        <li>• CAC payback: 5.3 months</li>
                        <li>• Gross margin: 78%</li>
                      </ul>
                      
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <p className="text-white">This model demonstrates strong unit economics with a healthy LTV:CAC ratio well above the industry benchmark of 3:1, and a rapid payback period under 6 months.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeSection === 'go-to-market' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Go-to-Market Strategy</h2>
              <p>
                A well-defined go-to-market strategy is critical for successful market entry and expansion. This section outlines frameworks for target market segmentation, channel strategy development, and effective positioning and messaging.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Target Market Segmentation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-blue-400">Customer Segmentation</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Demographic and firmographic segmentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Behavioral and psychographic analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Needs-based segmentation approach
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Value-based prioritization methodology
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-green-400">Ideal Customer Profile</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Attribute identification and weighting
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Scoring methodology and thresholds
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Validation through existing customers
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Refinement process and timeline
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">Segment Prioritization</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Market size by segment
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Acquisition efficiency potential
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Solution fit assessment
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Competitive positioning strength
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Channel Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiUsers className="text-blue-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Direct Sales</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Sales team structure and organization</li>
                    <li>Territory and account planning</li>
                    <li>Sales process and methodology</li>
                    <li>Compensation and incentive design</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiUsers className="text-green-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Partner Channels</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Partner type identification</li>
                    <li>Partner enablement requirements</li>
                    <li>Revenue sharing and incentives</li>
                    <li>Partner management framework</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <FiUsers className="text-purple-400 h-6 w-6 mr-3" />
                    <h4 className="text-xl font-semibold">Digital Acquisition</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Content marketing approach</li>
                    <li>Search engine optimization</li>
                    <li>Social media and community</li>
                    <li>Email and nurture campaigns</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Positioning and Messaging</h3>
              <div className="bg-slate-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">Value Proposition</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>Core value proposition framework</li>
                      <li>Segment-specific value articulation</li>
                      <li>Competitive differentiation emphasis</li>
                      <li>Proof point and evidence collection</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-400">Messaging Architecture</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>Primary messaging platform</li>
                      <li>Segment-specific adaptations</li>
                      <li>Use case and solution messaging</li>
                      <li>Technical and business benefits</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Brand Alignment</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>Vertical-specific brand expression</li>
                      <li>Visual identity guidelines</li>
                      <li>Tone and voice consistency</li>
                      <li>Cross-vertical brand harmony</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-600">
                  <h4 className="text-xl font-semibold mb-4">Example: KinOS Productivity Positioning</h4>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-white font-medium">Primary Differentiators:</p>
                    <ol className="mt-2 ml-6 list-decimal text-gray-300 space-y-1">
                      <li>Cross-domain intelligence from multiple verticals</li>
                      <li>Adaptive memory systems that evolve with usage</li>
                      <li>Seamless integration with existing productivity tools</li>
                      <li>Enterprise-grade security with vertical-specific compliance</li>
                    </ol>
                    
                    <p className="text-white font-medium mt-4">Competitive Positioning:</p>
                    <ul className="mt-2 text-gray-300 space-y-1">
                      <li><span className="text-blue-400">vs. General AI Assistants:</span> Deeper workflow integration, domain expertise</li>
                      <li><span className="text-blue-400">vs. Specialized Tools:</span> Broader capability range, unified experience</li>
                      <li><span className="text-blue-400">vs. Enterprise Platforms:</span> Greater adaptability, faster implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeSection === 'ai-enhanced' && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">AI-Enhanced Business Planning</h2>
              <p>
                KinOS Ventures leverages its own AI capabilities to enhance the business planning process. This section outlines how our AI systems can improve market intelligence, financial modeling, implementation planning, and continuous plan adaptation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <FiBarChart2 className="text-blue-400 h-8 w-8 mr-4" />
                    <h3 className="text-2xl font-bold">Market Intelligence System</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Capabilities</h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Automated competitive intelligence gathering
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Market trend identification and impact assessment
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Customer sentiment analysis across channels
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Opportunity sizing with confidence scoring
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Integration Points</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Market research data sources
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Industry news and publication feeds
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Social media and community platforms
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <FiDollarSign className="text-purple-400 h-8 w-8 mr-4" />
                    <h3 className="text-2xl font-bold">Financial Modeling Assistant</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Capabilities</h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Pattern-based revenue modeling
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Scenario generation with probability weighting
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Sensitivity analysis on key variables
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Benchmark comparison with industry standards
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Integration Points</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Historical financial data from existing verticals
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Industry benchmark databases
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Resource planning systems
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <FiClipboard className="text-green-400 h-8 w-8 mr-4" />
                    <h3 className="text-2xl font-bold">Implementation Planning Optimizer</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-green-300">Capabilities</h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Resource allocation optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Critical path analysis and bottleneck identification
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Risk prediction based on historical patterns
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Timeline optimization with confidence intervals
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-3 text-green-300">Integration Points</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Project management systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Resource management platforms
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Historical project performance data
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <FiTrendingUp className="text-orange-400 h-8 w-8 mr-4" />
                    <h3 className="text-2xl font-bold">Continuous Plan Adaptation System</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-orange-300">Capabilities</h4>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      Real-time performance tracking against plan
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      Automated variance analysis and root cause identification
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      Recommendation engine for plan adjustments
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      Early warning system for plan deviations
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-3 text-orange-300">Integration Points</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      Business intelligence dashboards
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      CRM and sales platforms
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      Financial reporting systems
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Real-World Application Example</h3>
              <div className="bg-slate-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">KinOS Finance Business Plan Adaptation</h4>
                <div className="bg-slate-800 p-6 rounded-lg">
                  <p className="text-white mb-4">
                    The Continuous Plan Adaptation System identified that customer acquisition costs were trending 22% higher than projected, while conversion rates from trials were exceeding expectations by 35%.
                  </p>
                  
                  <p className="text-white font-medium mb-2">The system automatically:</p>
                  <ol className="list-decimal ml-6 text-gray-300 space-y-2">
                    <li>Recalculated unit economics with the new metrics</li>
                    <li>Recommended shifting budget from top-of-funnel marketing to trial conversion optimization</li>
                    <li>Generated updated financial projections based on the new patterns</li>
                    <li>Identified specific marketing channels underperforming vs. expectations</li>
                    <li>Suggested A/B testing priorities for conversion optimization</li>
                  </ol>
                  
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <p className="text-green-400 font-medium">Result:</p>
                    <p className="text-white">Plan adjusted within 72 hours of trend identification, maintaining overall growth targets while optimizing resource allocation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-slate-900 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Implementation Guide</h3>
              <p className="text-gray-300 mb-4">
                Ready to implement the Business Plan Framework in your vertical?
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  Download the Business Plan Template
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  Schedule a kickoff with your vertical team
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  Complete the market analysis section first
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  Utilize the AI tools for enhanced planning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">5.</span>
                  Review with leadership before finalization
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Related Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <FiBarChart2 className="mr-2" />
                    Vertical Market Selection Criteria
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <FiUsers className="mr-2" />
                    Go-to-Market Playbook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <FiDollarSign className="mr-2" />
                    Pricing Philosophy & Framework
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <FiTarget className="mr-2" />
                    Resource Allocation Framework
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <FiClipboard className="mr-2" />
                    Metrics Standardization Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
