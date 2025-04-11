'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  DocumentTextIcon, 
  ServerIcon, 
  BeakerIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  PuzzlePieceIcon,
  ArrowsPointingOutIcon,
  LightBulbIcon,
  AcademicCapIcon,
  ClockIcon,
  ArrowPathIcon,
  CubeTransparentIcon,
  SparklesIcon,
  LinkIcon
} from '@heroicons/react/24/outline'

export default function KinOsKnowledgeTransferProtocolPage() {
  const [activeSection, setActiveSection] = useState<string>('overview')

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <header className="bg-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">KinOS Knowledge Transfer Protocol</h1>
              <p className="text-gray-300 text-lg mb-6">
                Systems for sharing insights and learnings across teams and verticals
              </p>
              <p className="text-blue-400 text-md">
                AI-powered knowledge management systems that enable comprehensive information sharing and preservation across our lean team structure.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="bg-slate-900 p-6 rounded-lg shadow-xl max-w-xs">
                <Image 
                  src="/categories/Culture_Talent/kinos-knowledge-transfer-protocol.png" 
                  alt="KinOS Knowledge Transfer Protocol" 
                  width={300} 
                  height={300}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-slate-800 border-b border-slate-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveSection('framework')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'framework' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Knowledge Framework
            </button>
            <button
              onClick={() => setActiveSection('ai-systems')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'ai-systems' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              AI-Powered Systems
            </button>
            <button
              onClick={() => setActiveSection('distribution')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'distribution' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Knowledge Distribution
            </button>
            <button
              onClick={() => setActiveSection('incentives')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'incentives' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Incentives
            </button>
            <button
              onClick={() => setActiveSection('implementation')}
              className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap ${
                activeSection === 'implementation' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              Implementation
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === 'overview' && (
          <div>
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Executive Summary</h2>
              <div className="prose prose-lg prose-invert prose-headings:text-white prose-p:text-gray-300 max-w-none">
                <p>
                  The KinOS Knowledge Transfer Protocol establishes a comprehensive framework for efficiently sharing 
                  knowledge, insights, and learnings across KinOS Ventures' vertical business units. As a technology 
                  accelerator with multiple domain-specific applications built around a unified core, KinOS faces 
                  the unique challenge of maintaining organizational knowledge while fostering innovation across diverse verticals.
                </p>
                <p>
                  This protocol leverages AI-driven systems to create a self-reinforcing knowledge ecosystem that reduces 
                  duplication of effort, accelerates innovation, and maximizes cross-vertical learning—all while enabling 
                  a small team to manage an expansive knowledge base through AI augmentation. By implementing this protocol, 
                  KinOS will create a sustainable competitive advantage through superior knowledge management, enhancing both 
                  team productivity and the core AI engine's capabilities.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-8">Protocol Objectives & Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 p-2 bg-blue-600 rounded-md">
                    <BeakerIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-medium">Protocol Objectives</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Establish formalized mechanisms for cross-vertical knowledge sharing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Minimize knowledge silos and information fragmentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Leverage AI capabilities to streamline knowledge capture and dissemination
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Create a self-reinforcing learning ecosystem across KinOS Ventures
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Enable small teams to maintain comprehensive knowledge through AI assistance
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 p-2 bg-blue-600 rounded-md">
                    <AcademicCapIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-medium">Guiding Principles</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <strong className="text-white">Transparent by Default:</strong> Knowledge should be accessible unless explicitly restricted
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <strong className="text-white">Contextualized Information:</strong> Knowledge must include context for proper application
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <strong className="text-white">AI-Augmented Processes:</strong> Leverage AI to reduce human overhead
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <strong className="text-white">Aligned Incentives:</strong> Team culture and compensation should reward knowledge sharing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <strong className="text-white">Cross-Vertical Enrichment:</strong> Insights from one domain should inform others
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-8">Value Proposition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                <div className="flex items-center mb-4 text-blue-400">
                  <ArrowsPointingOutIcon className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-medium text-white">Reduced Duplication</h3>
                </div>
                <p className="text-gray-300">Reduced duplication of effort across vertical business units</p>
              </div>

              <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                <div className="flex items-center mb-4 text-blue-400">
                  <SparklesIcon className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-medium text-white">Accelerated Innovation</h3>
                </div>
                <p className="text-gray-300">Accelerated innovation through cross-pollination of ideas</p>
              </div>

              <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                <div className="flex items-center mb-4 text-blue-400">
                  <ServerIcon className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-medium text-white">Enhanced Memory</h3>
                </div>
                <p className="text-gray-300">Enhanced institutional memory and reduced knowledge loss</p>
              </div>

              <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                <div className="flex items-center mb-4 text-blue-400">
                  <UserGroupIcon className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-medium text-white">Improved Onboarding</h3>
                </div>
                <p className="text-gray-300">Improved onboarding and continuous learning for team members</p>
              </div>

              <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                <div className="flex items-center mb-4 text-blue-400">
                  <CubeTransparentIcon className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-medium text-white">Robust Core Engine</h3>
                </div>
                <p className="text-gray-300">More robust KinOS core engine through diverse knowledge integration</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'framework' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Knowledge Categorization Framework</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Knowledge Types and Classification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <DocumentTextIcon className="h-6 w-6 mr-2" />
                    <h3 className="text-lg font-medium text-white">Technical Knowledge</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Core AI architecture and systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Vertical-specific implementations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Integration patterns and solutions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Performance optimization techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Bug patterns and resolution approaches
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <BeakerIcon className="h-6 w-6 mr-2" />
                    <h3 className="text-lg font-medium text-white">Domain Knowledge</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Vertical-specific expertise (healthcare, finance, etc.)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Regulatory and compliance information
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Industry standards and best practices
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Competitive landscape insights
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      User behavior patterns by domain
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <ArrowPathIcon className="h-6 w-6 mr-2" />
                    <h3 className="text-lg font-medium text-white">Process Knowledge</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Development workflows and methodologies
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Decision-making frameworks
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Resource allocation approaches
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Quality assurance procedures
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Client engagement protocols
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <ChartBarIcon className="h-6 w-6 mr-2" />
                    <h3 className="text-lg font-medium text-white">Market Knowledge</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Customer feedback and insights
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Market trends and opportunities
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Pricing strategies and outcomes
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Sales approaches and effectiveness
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Marketing messaging efficacy
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Knowledge Prioritization Model</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Mission-Critical Knowledge</h4>
                  <p className="text-gray-300">Essential for core operations and business continuity</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">High-Value Insights</h4>
                  <p className="text-gray-300">Significant impact on performance or innovation</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Contextual Information</h4>
                  <p className="text-gray-300">Provides background and supporting details</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Experimental Findings</h4>
                  <p className="text-gray-300">Results from tests and explorations</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Tacit Expertise</h4>
                  <p className="text-gray-300">Experience-based judgment and intuition</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Metadata Tagging System</h3>
              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Standardized tagging convention for knowledge artifacts
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Cross-vertical relevance indicators
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Knowledge freshness/expiration dating
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Confidence and reliability ratings
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Authorship and expert attribution
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    AI-assisted automatic tagging recommendations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'ai-systems' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">AI-Powered Knowledge Capture Systems</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Automated Documentation Generation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <UserGroupIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Meeting Intelligence</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      AI transcription and summarization of all meetings
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Automatic extraction of action items and decisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Knowledge point identification and categorization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Integration with knowledge repository
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <DocumentTextIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Development Process Capture</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Code comment analysis and documentation generation
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Commit message pattern recognition and enrichment
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Pull request and code review insight extraction
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Automatic technical documentation updates based on code changes
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <ChartBarIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Customer Interaction Intelligence</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Support ticket analysis and knowledge extraction
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Sales call transcription and insight identification
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      User feedback aggregation and pattern recognition
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Feature request categorization and prioritization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Example: Development Team Implementation</h3>
              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <div className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 max-w-none">
                  <pre className="rounded-md p-4">
                    <code>
{`# Example Knowledge Capture Flow for Development Teams

1. Development team discusses a performance issue in KinOS Health module
2. AI meeting assistant transcribes and identifies key insights:
   - Memory leak identified in patient data processing
   - Fix involves restructuring cache management
   - Similar issue occurred in KinOS Finance module last quarter
   
3. System automatically:
   - Creates documentation entry in knowledge base
   - Tags with #performance #memory-management #KinOS-Health
   - Links to previous Finance module issue
   - Notifies KinOS core team of potential systemic issue
   - Suggests documentation updates for cache management best practices
   
4. Lead engineer reviews and approves the auto-generated entry
5. Knowledge is immediately available to all teams via search and recommendation`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">AI-Augmented Knowledge Management System</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <CubeTransparentIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">KinOS Knowledge Graph</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Entity-relationship mapping of all organizational knowledge</p>
                  <h5 className="text-white font-medium mb-2">Technical Specifications:</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Ontology definition for KinOS-specific knowledge domains
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Triple-store database architecture
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Inference engine for relationship discovery
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Query language for complex knowledge retrieval
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <SparklesIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">AI Knowledge Assistants</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Vertical-specific conversational knowledge agents</p>
                  <h5 className="text-white font-medium mb-2">Technical Specifications:</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Large language model fine-tuned on KinOS knowledge base
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      RAG (Retrieval Augmented Generation) architecture
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Knowledge source citation for transparency
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Continuous learning from user interactions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'distribution' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Knowledge Distribution and Access</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Personalized Knowledge Delivery</h3>
              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <div className="flex items-center mb-4 text-blue-400">
                  <LightBulbIcon className="h-6 w-6 mr-2" />
                  <h4 className="text-lg font-medium text-white">AI-Powered Recommendation Engine</h4>
                </div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Contextual knowledge suggestions based on current work
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Personalized knowledge feeds tailored to role and projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Proactive surfacing of relevant cross-vertical insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Just-in-time learning recommendations
                  </li>
                </ul>

                <h5 className="text-white font-medium mb-2">Implementation Details:</h5>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    User activity monitoring to understand context
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Similarity matching between current tasks and knowledge base
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Reinforcement learning to improve recommendation relevance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Explicit and implicit feedback loops for continuous improvement
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Universal Knowledge Search</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <DocumentTextIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Advanced Search Capabilities</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Natural language query processing
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Semantic search beyond keyword matching
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Multi-modal search (text, code, diagrams, video)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Query intent understanding and result refinement
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <ServerIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Technical Specifications</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Vector embedding search for semantic understanding
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Entity-relationship awareness for context-sensitive results
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Hybrid retrieval combining keyword and semantic approaches
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Interactive query refinement through conversational UI
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Cross-Vertical Knowledge Synthesis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <PuzzlePieceIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Cross-Pollination Mechanisms</h4>
                  </div>
                  <h5 className="text-white font-medium mb-2">AI Pattern Recognition:</h5>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Automated identification of similar challenges across verticals
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Solution matching from one vertical to another
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Innovation opportunity detection through cross-domain analysis
                    </li>
                  </ul>
                  
                  <h5 className="text-white font-medium mb-2">Facilitated Knowledge Exchange:</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Monthly cross-vertical knowledge sharing sessions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Rotating team embeddings across vertical business units
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Cross-functional problem-solving workshops
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-4 text-blue-400">
                    <ChartBarIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Example: Cross-Vertical Feature Implementation</h4>
                  </div>
                  <div className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 max-w-none">
                    <pre className="rounded-md p-4">
                      <code className="text-sm">
{`# Cross-Vertical Knowledge Transfer Example

When KinOS Finance developed an advanced fraud detection system:

1. Knowledge Synthesis AI identified potential applications for:
   - KinOS Health: Detecting irregular insurance claims patterns
   - KinOS Supply Chain: Identifying procurement irregularities
   - KinOS Recruitment: Spotting résumé inconsistencies
   
2. System automatically:
   - Generated adaptation blueprints for each vertical
   - Highlighted required modifications for domain-specific implementation
   - Created implementation difficulty estimates
   - Identified team members with relevant expertise
   
3. Cross-vertical workshop scheduled with representatives from each team
4. Knowledge transferred resulted in 60% faster implementation in other verticals
5. Refinements from Health implementation fed back to improve Finance system`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'incentives' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Incentive Structures for Knowledge Sharing</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <div className="flex items-center mb-4 text-blue-400">
                  <ChartBarIcon className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-medium text-white">Performance Recognition Framework</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Knowledge contribution metrics in performance reviews
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Public recognition for valuable cross-vertical insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Contribution leaderboards with meaningful rewards
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Impact tracking of knowledge reuse and application
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Peer nomination system for knowledge sharing excellence
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <div className="flex items-center mb-4 text-blue-400">
                  <UserGroupIcon className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-medium text-white">Compensation Alignment</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Bonus structures tied to knowledge sharing metrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Career advancement pathways for knowledge experts
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Special project opportunities for top contributors
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Training and conference budgets based on knowledge sharing
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Team-based rewards for collective knowledge building
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Cultural Reinforcement</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Leadership Modeling</h4>
                  <p className="text-gray-300">Leadership modeling of knowledge sharing behaviors</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Success Stories</h4>
                  <p className="text-gray-300">Celebration of knowledge transfer success stories</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Knowledge Heroes</h4>
                  <p className="text-gray-300">"Knowledge Heroes" program highlighting exemplars</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Team Challenges</h4>
                  <p className="text-gray-300">Team challenges focused on knowledge improvement</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Storytelling</h4>
                  <p className="text-gray-300">Storytelling that reinforces knowledge sharing values</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Integration with Innovation Incentive Structure</h3>
              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Additional innovation points for solutions derived from cross-vertical knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Enhanced recognition for innovations that improve knowledge transfer
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Special showcases for teams applying knowledge from other verticals
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Accelerated implementation for ideas that leverage existing cross-vertical insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'implementation' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Implementation & Core Integration</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Core Protocol Implementation Process</h3>
              <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <h4 className="text-lg font-medium text-white mb-4">Phased Rollout Strategy</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <ClockIcon className="h-5 w-5 text-blue-400 mr-2" />
                      <h5 className="text-md font-medium text-white">Phase 1: Foundation</h5>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">Months 1-2</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>Knowledge classification system implementation</li>
                      <li>Core AI knowledge capture tools deployment</li>
                      <li>Basic knowledge search and retrieval system</li>
                      <li>Initial incentive structure introduction</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <ClockIcon className="h-5 w-5 text-blue-400 mr-2" />
                      <h5 className="text-md font-medium text-white">Phase 2: Integration</h5>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">Months 3-4</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>Cross-vertical knowledge sharing mechanisms</li>
                      <li>Enhanced AI assistants with context awareness</li>
                      <li>Knowledge graph initial implementation</li>
                      <li>Expanded incentive programs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <ClockIcon className="h-5 w-5 text-blue-400 mr-2" />
                      <h5 className="text-md font-medium text-white">Phase 3: Optimization</h5>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">Months 5-6</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>Advanced analytics and knowledge health monitoring</li>
                      <li>Personalized knowledge delivery refinement</li>
                      <li>Full knowledge synthesis capabilities</li>
                      <li>Complete incentive alignment across organization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Roles and Responsibilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">Knowledge Stewards</h4>
                  <p className="text-gray-300 mb-2">One per vertical</p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>Oversee vertical-specific knowledge quality</li>
                    <li>Champion knowledge sharing practices</li>
                    <li>Validate critical knowledge artifacts</li>
                    <li>Coordinate cross-vertical knowledge exchange</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">KinOS Knowledge Architect</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>Design and maintain knowledge classification system</li>
                    <li>Oversee knowledge graph development</li>
                    <li>Develop knowledge quality standards</li>
                    <li>Measure system effectiveness</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <h4 className="text-white font-medium mb-3">AI Knowledge Systems Engineer</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>Implement AI knowledge capture tools</li>
                    <li>Develop and train recommendation engines</li>
                    <li>Maintain knowledge assistants</li>
                    <li>Troubleshoot technical issues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Integration with KinOS Core Engine</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-3 text-blue-400">
                    <ServerIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Memory Enhancement</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Knowledge protocol feeding KinOS's memory capabilities</li>
                    <li>Organizational knowledge serving as training data</li>
                    <li>Automated memory consolidation processes</li>
                    <li>Long-term knowledge preservation strategies</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-3 text-blue-400">
                    <ArrowPathIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Adaptation Mechanisms</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Knowledge protocol informing adaptation algorithms</li>
                    <li>Cross-vertical insights driving improvements</li>
                    <li>User feedback enhancing adaptation logic</li>
                    <li>Adaptation success patterns documented and shared</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                  <div className="flex items-center mb-3 text-blue-400">
                    <ChartBarIcon className="h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-white">Growth Facilitators</h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>Knowledge expansion supporting growth capabilities</li>
                    <li>Cross-vertical pattern recognition enhancing functions</li>
                    <li>Knowledge gaps identification directing priorities</li>
                    <li>Growth measurement through knowledge expansion metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Success Metrics and KPIs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <h4 className="text-lg font-medium text-white mb-4">Engagement Metrics</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Knowledge contribution rate per team member
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Knowledge consumption frequency and breadth
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Cross-vertical knowledge utilization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Knowledge assistant interaction volume
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                  <h4 className="text-lg font-medium text-white mb-4">Impact Metrics</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Development time reduction through knowledge reuse
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Onboarding time improvement
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Decision quality and speed enhancement
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Innovation rate from cross-vertical insights
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Customer issue resolution speed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Related Resources */}
      <section className="bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/culture-talent/remote-first-collaboration" className="block">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all shadow-md hover:shadow-lg">
                <div className="flex items-center mb-4 text-blue-400">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-medium text-white">Remote-First Collaboration</h3>
                </div>
                <p className="text-gray-300">Guidelines for effective distributed teamwork and communication</p>
              </div>
            </Link>
            
            <Link href="/resources/culture-talent/innovation-incentive-structure" className="block">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all shadow-md hover:shadow-lg">
                <div className="flex items-center mb-4 text-blue-400">
                  <LightBulbIcon className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-medium text-white">Innovation Incentive Structure</h3>
                </div>
                <p className="text-gray-300">How cross-vertical innovation is rewarded and encouraged</p>
              </div>
            </Link>
            
            <Link href="/resources/technology-product-development/cross-vertical-feature-implementation" className="block">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all shadow-md hover:shadow-lg">
                <div className="flex items-center mb-4 text-blue-400">
                  <PuzzlePieceIcon className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-medium text-white">Cross-Vertical Feature Implementation</h3>
                </div>
                <p className="text-gray-300">System for deploying core capabilities across different products</p>
              </div>
            </Link>
            
            <Link href="/resources/operations-management/organizational-structure-blueprint" className="block">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all shadow-md hover:shadow-lg">
                <div className="flex items-center mb-4 text-blue-400">
                  <CubeTransparentIcon className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-medium text-white">Organizational Structure Blueprint</h3>
                </div>
                <p className="text-gray-300">Defining the relationship between core company and vertical business units</p>
              </div>
            </Link>
            
            <Link href="/resources/culture-talent/talent-acquisition-development" className="block">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all shadow-md hover:shadow-lg">
                <div className="flex items-center mb-4 text-blue-400">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-medium text-white">Talent Acquisition & Development</h3>
                </div>
                <p className="text-gray-300">Principles for building specialized teams with shared core values</p>
              </div>
            </Link>
            
            <Link href="/resources/business-growth/customer-success-integration-model" className="block">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all shadow-md hover:shadow-lg">
                <div className="flex items-center mb-4 text-blue-400">
                  <ChartBarIcon className="h-5 w-5 mr-2" />
                  <h3 className="text-lg font-medium text-white">Customer Success Integration Model</h3>
                </div>
                <p className="text-gray-300">How customer insights feed back into product development</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
