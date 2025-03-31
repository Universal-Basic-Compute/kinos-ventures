'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
  DocumentTextIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  PuzzlePieceIcon, 
  CubeTransparentIcon, 
  ArrowPathIcon, 
  CogIcon, 
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  ScaleIcon,
  ArrowsPointingOutIcon,
  BoltIcon,
  BeakerIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export default function FirstPrinciplesDecisionMakingPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                First Principles Decision-Making Framework
              </h1>
              <p className="mt-4 text-xl text-gray-300">
                A methodical framework for breaking down complex problems to their fundamental elements, challenging assumptions, and building innovative solutions aligned with our mission.
              </p>
              <div className="mt-6 flex space-x-4">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300'}`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('framework')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'framework' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300'}`}
                >
                  Framework
                </button>
                <button 
                  onClick={() => setActiveTab('tools')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'tools' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300'}`}
                >
                  Tools
                </button>
                <button 
                  onClick={() => setActiveTab('ai')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'ai' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300'}`}
                >
                  AI Integration
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="bg-slate-700 rounded-lg shadow-xl overflow-hidden">
                <Image 
                  src="/categories/Core_Philosophy_Strategy/first-principles-decision-making.png"
                  alt="First Principles Decision-Making Framework"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200">
              <h2>Executive Summary</h2>
              <p>
                The First Principles Decision-Making Framework provides a structured methodology for breaking down complex problems to their fundamental elements before building solutions. This framework is essential to KinOS Ventures' multi-vertical strategy, enabling consistent, high-quality decisions across diverse business units while maintaining alignment with our core technology and values.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Foundation of First Principles Thinking</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <LightBulbIcon className="h-8 w-8 text-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Definition</h3>
                      <p className="mt-2 text-gray-300">
                        Breaking down complex problems into their most basic elements and reassembling them from the ground up.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <PuzzlePieceIcon className="h-8 w-8 text-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Key Benefits</h3>
                      <p className="mt-2 text-gray-300">
                        Eliminates inherited assumptions, builds reasoning from fundamental truths, and creates novel solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <CubeTransparentIcon className="h-8 w-8 text-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Alignment</h3>
                      <p className="mt-2 text-gray-300">
                        Supports our unified technology core, cross-vertical intelligence, and adaptive learning approaches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-slate-800 p-6 rounded-lg shadow-md">
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
                "At KinOS Ventures, we don't just use AI—we use more AI for everything. First principles thinking ensures we deploy this technology thoughtfully, systematically, and in alignment with our values."
                <footer className="mt-2 text-gray-400">From the KinOS Ventures Manifesto</footer>
              </blockquote>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Key Framework Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <ClipboardDocumentListIcon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Decision Decomposition</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Problem identification & reframing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Elemental breakdown of issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Assumption identification & testing</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <CogIcon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Solution Synthesis</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Building from first principles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Trade-off analysis & decision criteria</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Minimum viable solution design</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <ArrowPathIcon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Implementation Guidelines</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Vertical-specific adaptations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Cross-vertical decision coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Learning & refinement cycles</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <ComputerDesktopIcon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Practical Tools</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Decision workshop structure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Documentation templates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span>Integration with other frameworks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'framework' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200">
              <h2>The Decision Decomposition Process</h2>
              <p>
                The core of first principles thinking involves breaking problems down to their fundamental elements before building solutions.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Problem Identification</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                    <BoltIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    Step 1: Define the true problem
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Distinguish symptoms from root causes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Articulate the problem in clear, neutral language</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Identify stakeholders and success criteria</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                    <BoltIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    Step 2: Challenge the premise
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Question whether the problem as stated is the actual problem</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Identify implicit assumptions in the problem statement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Reframe if necessary to address fundamental issues</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md mb-12">
                <h4 className="text-lg font-semibold text-white mb-3">Example</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <p className="text-gray-300 font-medium">Initial problem statement:</p>
                    <p className="text-gray-300 mt-2 italic">"We need to improve user retention in KinOS Finance."</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <p className="text-gray-300 font-medium">Reframed through first principles:</p>
                    <p className="text-gray-300 mt-2 italic">"We need to understand what fundamental value users seek from financial AI and ensure our solution delivers that value consistently."</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Elemental Breakdown</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                    <BoltIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    Step 1: Identify fundamental components
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Break the problem into its smallest constituent parts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>For each component, ask "What is the fundamental truth here?"</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Document these elements without proposed solutions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                    <BoltIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    Step 2: Analyze causal relationships
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Map relationships between fundamental elements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Identify leverage points where changes would have maximum impact</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Distinguish between facts, assumptions, and hypotheses</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md mb-12">
                <h4 className="text-lg font-semibold text-white mb-3">Element Mapping Template</h4>
                <div className="bg-slate-700 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-auto">
                  <pre>
{`Element: [Name]
Category: [Technical/User/Market/Organizational]
Known Facts: [Verified information]
Assumptions: [Currently accepted but unverified]
Dependencies: [Relationships to other elements]
Leverage Potential: [High/Medium/Low]`}
                  </pre>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Assumption Identification and Testing</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                    <BoltIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    Step 1: Surface all assumptions
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>List every assumption underlying current thinking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Rate assumptions by impact and uncertainty</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Prioritize high-impact, high-uncertainty assumptions for testing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white flex items-center mb-3">
                    <BoltIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    Step 2: Design verification methods
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Develop rapid tests to validate or invalidate key assumptions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Use data, experiments, user feedback, or expert consultation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Document results and update elemental understanding</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">Assumption Testing Prioritization Matrix</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-slate-700 rounded-lg text-gray-300">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Assumption</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Impact (1-5)</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Uncertainty (1-5)</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Testing Method</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600">
                      <tr>
                        <td className="px-4 py-3">[Detail]</td>
                        <td className="px-4 py-3">[Rating]</td>
                        <td className="px-4 py-3">[Rating]</td>
                        <td className="px-4 py-3">[Approach]</td>
                        <td className="px-4 py-3">[Date]</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">[Detail]</td>
                        <td className="px-4 py-3">[Rating]</td>
                        <td className="px-4 py-3">[Rating]</td>
                        <td className="px-4 py-3">[Approach]</td>
                        <td className="px-4 py-3">[Date]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Solution Synthesis Framework</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <CubeTransparentIcon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Building From First Principles</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Step 1: Generate elemental solutions</h4>
                      <p className="text-gray-300 text-sm">For each fundamental element, ideate solutions addressing core needs without being constrained by current forms.</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Step 2: Combine elemental solutions</h4>
                      <p className="text-gray-300 text-sm">Synthesize component solutions into integrated approaches, identifying synergies and conflicts.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <ScaleIcon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Trade-off Analysis</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Step 1: Identify key trade-offs</h4>
                      <p className="text-gray-300 text-sm">Map dimensions where solutions create competing outcomes and quantify trade-offs where possible.</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Step 2: Apply weighted decision criteria</h4>
                      <p className="text-gray-300 text-sm">Establish clear criteria based on KinOS Ventures priorities and weight options consistently.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <ArrowsPointingOutIcon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Minimum Viable Solution</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Step 1: Define core functionality</h4>
                      <p className="text-gray-300 text-sm">Identify the minimum solution that addresses fundamental needs and validate key assumptions.</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Step 2: Establish validation metrics</h4>
                      <p className="text-gray-300 text-sm">Define specific, measurable indicators of success and create feedback mechanisms.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md mb-12">
                <h4 className="text-lg font-semibold text-white mb-3">Example Decision Matrix for KinOS Vertical Expansion</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-slate-700 rounded-lg text-gray-300">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Solution Option</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Technical Feasibility (x0.3)</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Market Potential (x0.25)</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Resource Requirements (x0.2)</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Strategic Alignment (x0.25)</th>
                        <th className="px-4 py-3 text-left text-gray-200 font-semibold">Weighted Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600">
                      <tr>
                        <td className="px-4 py-3">Option A</td>
                        <td className="px-4 py-3">[Score 1-5]</td>
                        <td className="px-4 py-3">[Score 1-5]</td>
                        <td className="px-4 py-3">[Score 1-5]</td>
                        <td className="px-4 py-3">[Score 1-5]</td>
                        <td className="px-4 py-3">[Calculated]</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Option B</td>
                        <td className="px-4 py-3">[Score 1-5]</td>
                        <td className="px-4 py-3">[Score 1-5]</td>
                        <td className="px-4 py-3">[Score 1-5]</td>
                        <td className="px-4 py-3">[Score 1-5]</td>
                        <td className="px-4 py-3">[Calculated]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Vertical-Specific Adaptations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-white flex items-center mb-4">
                    <DocumentTextIcon className="h-6 w-6 text-green-400 mr-2" />
                    KinOS Health
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Integrate regulatory and compliance considerations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Emphasize patient outcomes and clinical evidence</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Apply ethical frameworks specific to healthcare AI</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-white flex items-center mb-4">
                    <ChartBarIcon className="h-6 w-6 text-blue-400 mr-2" />
                    KinOS Finance
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Incorporate risk management principles</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Consider regulatory requirements across jurisdictions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Balance automation with appropriate human oversight</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-white flex items-center mb-4">
                    <UserGroupIcon className="h-6 w-6 text-purple-400 mr-2" />
                    KinOS Entertainment
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Prioritize creative outcomes and user engagement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Consider intellectual property implications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2">•</div>
                      <span>Balance innovation with familiar user experiences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200">
              <h2>Practical Tools and Resources</h2>
              <p>
                To facilitate the application of first principles thinking across the organization, we provide standardized tools and templates that can be adapted to different business contexts.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-6">Decision Workshop Structure</h3>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md mb-10">
                <h4 className="text-lg font-semibold text-white mb-4">A facilitated 90-minute session structure:</h4>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full text-white text-xl font-bold mr-4">
                      1
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 flex-grow">
                      <h5 className="text-white font-medium mb-2">Problem Framing (15 min)</h5>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Present problem statement</li>
                        <li>• Challenge assumptions</li>
                        <li>• Align on scope and success criteria</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full text-white text-xl font-bold mr-4">
                      2
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 flex-grow">
                      <h5 className="text-white font-medium mb-2">Elemental Breakdown (30 min)</h5>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Identify fundamental components</li>
                        <li>• Surface and categorize assumptions</li>
                        <li>• Prioritize areas for deeper analysis</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full text-white text-xl font-bold mr-4">
                      3
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 flex-grow">
                      <h5 className="text-white font-medium mb-2">Solution Architecture (30 min)</h5>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Generate elemental solutions</li>
                        <li>• Combine into integrated approaches</li>
                        <li>• Identify key trade-offs</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full text-white text-xl font-bold mr-4">
                      4
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 flex-grow">
                      <h5 className="text-white font-medium mb-2">Next Steps and Ownership (15 min)</h5>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Assign validation actions</li>
                        <li>• Set decision timeline</li>
                        <li>• Schedule follow-up review</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">Decision Documentation Template</h3>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md mb-10">
                <div className="bg-slate-700 rounded-lg p-5 font-mono text-sm text-gray-300 overflow-auto">
                  <pre>
{`# Decision Record: [Title]

## Context and Problem Statement
[Describe the situation and problem requiring a decision]

## First Principles Analysis
- Fundamental Elements:
  - [Element 1]
  - [Element 2]
- Key Assumptions:
  - [Assumption 1] - [Validation Status]
  - [Assumption 2] - [Validation Status]

## Options Considered
1. [Option 1]
   - First principles alignment: [Assessment]
   - Benefits: [List]
   - Drawbacks: [List]
2. [Option 2]
   - [Same structure]

## Decision
[Describe the selected option and rationale]

## Implementation Plan
[Key actions, owners, and timeline]

## Validation Metrics
[How we'll know if this decision was successful]

## Follow-up Schedule
[When we'll review outcomes]`}
                  </pre>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">Integration with Other Frameworks</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <LightBulbIcon className="h-8 w-8 text-yellow-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">AI Ethics & Responsibility Charter</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Incorporate ethical considerations in elemental breakdown</li>
                    <li>• Include Ethics Charter principles in decision criteria</li>
                    <li>• Flag decisions requiring formal ethics review</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <ChartBarIcon className="h-8 w-8 text-green-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">Resource Allocation Framework</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Link decisions to resource requirements</li>
                    <li>• Ensure resource constraints are considered in solution design</li>
                    <li>• Coordinate timing with resource allocation cycles</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <ArrowTrendingUpIcon className="h-8 w-8 text-blue-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">Vertical Market Selection Criteria</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Use first principles to evaluate market opportunities</li>
                    <li>• Apply consistent analysis to partnership decisions</li>
                    <li>• Ensure vertical expansion aligns with core capabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">Implementation Roadmap</h3>
              
              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white mb-3">Phase 1: Foundation (Months 1-2)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Conduct framework training sessions for leadership team</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Implement decision documentation templates</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Apply to 2-3 pilot decisions in each vertical</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Collect feedback and refine approach</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white mb-3">Phase 2: Expansion (Months 3-6)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Extend training to all decision-makers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Integrate with project management and knowledge systems</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Develop vertical-specific adaptations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Implement AI-assisted decision tools (basic version)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-white mb-3">Phase 3: Optimization (Months 7-12)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Conduct effectiveness assessment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Refine based on organizational learning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Implement advanced AI decision support</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Develop case studies and best practices library</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200">
              <h2>AI Integration for Decision Support</h2>
              <p>
                The KinOS core engine can substantially enhance the first principles decision-making process through specialized AI tools and capabilities.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <BeakerIcon className="h-10 w-10 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Assumption Detection</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Implementation</h4>
                    <p className="text-gray-300 text-sm">Develop NLP models to identify implicit assumptions in problem statements and proposed solutions</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Integration</h4>
                    <p className="text-gray-300 text-sm">Create browser extensions and document analysis tools that flag potential assumptions for review</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Value</h4>
                    <p className="text-gray-300 text-sm">Surfaces hidden assumptions that might otherwise constrain thinking and creative solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <CubeTransparentIcon className="h-10 w-10 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Pattern Recognition Across Verticals</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Implementation</h4>
                    <p className="text-gray-300 text-sm">Train models to identify similar decision patterns across different business domains</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Integration</h4>
                    <p className="text-gray-300 text-sm">Automatically suggest relevant past decisions from other verticals that addressed similar fundamental issues</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Value</h4>
                    <p className="text-gray-300 text-sm">Accelerates learning and promotes cross-vertical intelligence sharing</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="h-10 w-10 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Trade-off Simulation</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Implementation</h4>
                    <p className="text-gray-300 text-sm">Create agent-based models to simulate outcomes of different decision options</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Integration</h4>
                    <p className="text-gray-300 text-sm">Provide interactive visualization tools for exploring decision consequences</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Value</h4>
                    <p className="text-gray-300 text-sm">Enables more thorough exploration of decision spaces and potential outcomes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-10 w-10 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Decision Knowledge Graph</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Implementation</h4>
                    <p className="text-gray-300 text-sm">Structure past decisions, outcomes, and learnings in a queryable knowledge graph</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Integration</h4>
                    <p className="text-gray-300 text-sm">Link to relevant context within decision documentation tools</p>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Value</h4>
                    <p className="text-gray-300 text-sm">Builds institutional memory and prevents repeating past mistakes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">Collaborative Decision Intelligence</h3>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <UserGroupIcon className="h-8 w-8 text-purple-400 mr-3" />
                      <h4 className="text-lg font-semibold text-white">Multi-perspective Analysis</h4>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 h-40">
                      <p className="text-gray-300">Deploy separate AI agents representing different stakeholder viewpoints to ensure diverse considerations are factored into analysis.</p>
                      <p className="text-gray-300 mt-2 text-sm">Each agent operates with different priorities and concerns, simulating real-world stakeholder diversity.</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <BoltIcon className="h-8 w-8 text-yellow-400 mr-3" />
                      <h4 className="text-lg font-semibold text-white">Real-time Decision Support</h4>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4 h-40">
                      <p className="text-gray-300">Create AI assistants trained specifically on the first principles framework to support during decision meetings.</p>
                      <p className="text-gray-300 mt-2 text-sm">These assistants suggest questions, identify gaps, and provide relevant context to elevate the quality of decision discussions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">Governance and Oversight</h3>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <ScaleIcon className="h-5 w-5 text-blue-400 mr-2" />
                        Strategic Decisions
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Require executive team involvement</li>
                        <li>• Must include documentation of first principles analysis</li>
                        <li>• Subject to formal review process</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <ScaleIcon className="h-5 w-5 text-blue-400 mr-2" />
                        Tactical Decisions
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Delegated to appropriate vertical leaders</li>
                        <li>• Use simplified version of framework</li>
                        <li>• Documented in knowledge management system</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <ScaleIcon className="h-5 w-5 text-blue-400 mr-2" />
                        Operational Decisions
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Handled at team level</li>
                        <li>• Apply first principles thinking informally</li>
                        <li>• Document significant learnings only</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                        Quality Assurance Processes
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Framework application audit</li>
                        <li>• Outcome analysis</li>
                        <li>• Comparing actual results to expected outcomes</li>
                        <li>• Identifying systemic decision biases</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <ArrowPathIcon className="h-5 w-5 text-green-400 mr-2" />
                        Continuous Improvement
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Quarterly review of framework effectiveness</li>
                        <li>• Incorporation of new decision science research</li>
                        <li>• Updates to templates and tools</li>
                        <li>• Advanced training for decision leaders</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/core-philosophy-strategy/kinos-ventures-manifesto" className="block">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md hover:bg-slate-700 transition duration-150">
                <div className="flex items-center mb-4">
                  <DocumentTextIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">KinOS Ventures Manifesto</h3>
                </div>
                <p className="text-gray-300 text-sm">Core values, mission, and vision defining our approach to AI development</p>
              </div>
            </Link>
            
            <Link href="/resources/business-growth/vertical-market-selection-criteria" className="block">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md hover:bg-slate-700 transition duration-150">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Vertical Market Selection Criteria</h3>
                </div>
                <p className="text-gray-300 text-sm">Framework for evaluating and prioritizing new market opportunities</p>
              </div>
            </Link>
            
            <Link href="/resources/culture-talent/ai-ethics-responsibility-charter" className="block">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md hover:bg-slate-700 transition duration-150">
                <div className="flex items-center mb-4">
                  <ScaleIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">AI Ethics & Responsibility Charter</h3>
                </div>
                <p className="text-gray-300 text-sm">Ethical principles guiding all development and business decisions</p>
              </div>
            </Link>
            
            <Link href="/resources/business-growth/resource-allocation-framework" className="block">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md hover:bg-slate-700 transition duration-150">
                <div className="flex items-center mb-4">
                  <CogIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Resource Allocation Framework</h3>
                </div>
                <p className="text-gray-300 text-sm">System for distributing technical and human resources across verticals</p>
              </div>
            </Link>
            
            <Link href="/resources/business-growth/partnership-evaluation-matrix" className="block">
              <div className="bg-slate-800 rounded-lg p-6 shadow-md hover:bg-slate-700 transition duration-150">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Partnership Evaluation Matrix</h3>
                </div>
                <p className="text-gray-300 text-sm">Criteria for assessing strategic alignment with potential partners</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}