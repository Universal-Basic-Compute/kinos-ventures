'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BookOpenIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  ScaleIcon, 
  LightBulbIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CogIcon,
  EyeIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const AIEthicsResponsibilityCharter = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <header className="relative py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                AI Ethics & Responsibility Charter
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Ethical principles guiding all development and business decisions
              </p>
              <p className="text-gray-300 max-w-3xl">
                Practical ethical guidelines for AI development that balance our 'use more AI for everything' principle with 
                responsible implementation and transparent accountability.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="relative h-48 w-48 md:h-64 md:w-64 mx-auto">
                <Image 
                  src="/categories/Culture_Talent/ai-ethics-responsibility-charter.png"
                  alt="AI Ethics & Responsibility Charter"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 font-medium text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('principles')}
              className={`py-4 px-1 font-medium text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'principles'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Guiding Principles
            </button>
            <button
              onClick={() => setActiveTab('implementation')}
              className={`py-4 px-1 font-medium text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'implementation'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Implementation Framework
            </button>
            <button
              onClick={() => setActiveTab('vertical')}
              className={`py-4 px-1 font-medium text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'vertical'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Vertical Considerations
            </button>
            <button
              onClick={() => setActiveTab('monitoring')}
              className={`py-4 px-1 font-medium text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'monitoring'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              AI-Enabled Monitoring
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`py-4 px-1 font-medium text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'governance'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Governance
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300 mb-12">
              <h2>Executive Summary</h2>
              <p>
                The <strong>AI Ethics & Responsibility Charter</strong> serves as the foundational ethical framework guiding all development, business decisions, and operations across KinOS Ventures' vertical business units. This charter establishes clear principles and practical guidelines for ethical AI development that balance innovation with responsibility, ensuring our technology enhances human potential rather than diminishing human agency.
              </p>
              <p>
                As we pursue our mission to "use more AI for everything," this charter provides guardrails that ensure our technological progress remains aligned with our core values and societal wellbeing. Rather than presenting abstract principles, this document offers concrete guidance for ethical decision-making across all phases of product development, deployment, and ongoing operation.
              </p>
              <p>
                The charter reflects our commitment to transparent, bias-mitigated, privacy-respecting AI systems with appropriate human oversight, while supporting our unified technology core strategy. By embedding these principles within our operations, we create competitive advantages through trustworthy AI implementations that stand apart in the marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md flex flex-col items-center text-center">
                <ShieldCheckIcon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Core Principles</h3>
                <p className="text-gray-300">Foundational ethical values that guide all AI development and deployment</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md flex flex-col items-center text-center">
                <LightBulbIcon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Practical Implementation</h3>
                <p className="text-gray-300">Concrete frameworks for ethical decision-making in product development</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md flex flex-col items-center text-center">
                <CogIcon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Enabled Monitoring</h3>
                <p className="text-gray-300">Systems that leverage AI to ensure adherence to ethical standards</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-md flex flex-col items-center text-center">
                <GlobeAltIcon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Open-Source Ethics</h3>
                <p className="text-gray-300">Transparency and accountability through open documentation and collaboration</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DocumentTextIcon className="h-6 w-6 mr-2 text-blue-400" />
                Document Purpose
              </h3>
              <p className="text-gray-300 mb-4">
                This charter serves multiple purposes in guiding KinOS Ventures' ethical approach to AI:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-700 p-4 rounded">
                  <h4 className="font-medium mb-2">Internal Guidance</h4>
                  <p className="text-gray-300 text-sm">Provides clear guidelines for all teams on how to incorporate ethical considerations into their work</p>
                </div>
                <div className="bg-slate-700 p-4 rounded">
                  <h4 className="font-medium mb-2">External Communication</h4>
                  <p className="text-gray-300 text-sm">Communicates our ethical commitments to customers, partners, and the public</p>
                </div>
                <div className="bg-slate-700 p-4 rounded">
                  <h4 className="font-medium mb-2">Decision Framework</h4>
                  <p className="text-gray-300 text-sm">Offers structured approaches to resolving ethical dilemmas in product development</p>
                </div>
                <div className="bg-slate-700 p-4 rounded">
                  <h4 className="font-medium mb-2">Accountability Structure</h4>
                  <p className="text-gray-300 text-sm">Establishes clear responsibilities for ethical oversight and implementation</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-slate-800 rounded-lg p-6 shadow-lg border border-blue-700">
              <h3 className="text-xl font-semibold mb-4">Our Ethical Commitment</h3>
              <p className="text-gray-200 mb-6">
                At KinOS Ventures, we believe that ethical AI is not just the right approach but also the competitive advantage that will define industry leaders. By establishing clear, practical, and actionable ethical guidelines across all our verticals, we create technology that users can trust, partners can confidently integrate with, and society can embrace.
              </p>
              <p className="text-gray-200">
                This charter represents our commitment to developing AI that amplifies human potential while respecting human values. As we expand across diverse market verticals, this unified ethical framework ensures that our technology remains aligned with our core mission: creating AI systems that make the world more knowledgeable, more capable, and more human.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'principles' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300 mb-8">
              <h2>Guiding Ethical Principles</h2>
              <p>
                These core principles serve as the foundation for all AI development and business decisions across KinOS Ventures. They establish clear standards while providing practical implementation guidance for all teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Human Augmentation, Not Replacement</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">
                  KinOS technologies enhance human capabilities without removing meaningful human agency
                </p>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-100">Implementation Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      All vertical applications must maintain clear human oversight mechanisms
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      System designs must prioritize collaborative intelligence rather than autonomous decision-making
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Performance metrics must measure both AI efficiency and quality of human-AI collaboration
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <EyeIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Transparency and Explainability</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">
                  KinOS systems operate transparently, with understandable decision processes
                </p>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-100">Implementation Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      All customer-facing applications must include explanation capabilities for key decisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Technical documentation must detail how AI systems reach conclusions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Non-explainable components must be clearly identified with appropriate usage limitations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <FingerPrintIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Privacy and Data Sovereignty</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">
                  KinOS respects user privacy and individual control over personal data
                </p>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-100">Implementation Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Cross-vertical data sharing must maintain privacy walls as specified in Memory & Context Retention Standards
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Data minimization principles apply to all collection processes
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Users maintain ownership and control rights over their personal data
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <ScaleIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Fairness and Bias Mitigation</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">
                  KinOS systems are designed to minimize bias and promote equitable outcomes
                </p>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-100">Implementation Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Mandatory bias assessment testing before deployment in any vertical
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Diverse training data requirements for all models
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Ongoing monitoring for emergent bias in deployed systems
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">Accountability and Responsibility</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">
                  KinOS Ventures accepts responsibility for the impacts of its technologies
                </p>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-gray-100">Implementation Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Clear assignment of ethical responsibility within project teams
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Documented chain of accountability for all deployed systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Regular ethics impact assessments for all major features
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'implementation' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300 mb-8">
              <h2>Practical Implementation Framework</h2>
              <p>
                Rather than abstract principles, KinOS Ventures implements concrete processes to ensure ethical AI development. This framework provides practical guidance for teams across all phases of development and deployment.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">Ethics by Design Process</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                  <h4 className="text-lg font-medium mb-4 text-white">Pre-Development Phase</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Conduct ethical impact assessment using standardized templates
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Identify high-risk use cases requiring enhanced oversight
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Establish success criteria that include ethical performance metrics
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                    <h5 className="font-medium mb-2 text-gray-100">Example:</h5>
                    <p className="text-sm text-gray-300 italic">
                      Before beginning development on KinOS Finance's automated investment recommendations, the team completes an ethical impact assessment identifying potential risks of amplifying wealth inequality and establishes metrics to measure how recommendations perform across diverse economic backgrounds.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                  <h4 className="text-lg font-medium mb-4 text-white">Development Phase</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Implement technical safeguards for identified ethical risks
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Create documentation of ethical design decisions and trade-offs
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Build explainability mechanisms appropriate to the application context
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                    <h5 className="font-medium mb-2 text-gray-100">Example:</h5>
                    <p className="text-sm text-gray-300 italic">
                      KinOS Health development teams implement federated learning approaches that keep patient data on local devices while still benefiting from collective intelligence, documenting this design decision as an ethical safeguard.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                  <h4 className="text-lg font-medium mb-4 text-white">Testing Phase</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Perform dedicated ethics testing scenarios beyond functional testing
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Validate bias mitigation effectiveness with diverse test data
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Conduct adversarial testing to identify potential misuse patterns
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                    <h5 className="font-medium mb-2 text-gray-100">Example:</h5>
                    <p className="text-sm text-gray-300 italic">
                      KinOS Recruitment solutions undergo specific testing with synthetic candidate profiles designed to detect potential gender, age, or ethnic bias in recommendation patterns.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                  <h4 className="text-lg font-medium mb-4 text-white">Deployment and Monitoring</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Implement ethics monitoring dashboards with key metrics
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Establish regular ethical review cycles for deployed systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 text-lg">•</span>
                      Create accessible feedback channels for ethical concerns
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                    <h5 className="font-medium mb-2 text-gray-100">Example:</h5>
                    <p className="text-sm text-gray-300 italic">
                      KinOS Entertainment implements a real-time monitoring system that tracks content recommendation diversity to prevent filter bubbles, with monthly reviews by cross-functional teams.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md mb-8">
                <h4 className="text-lg font-medium mb-4 text-white flex items-center">
                  <ArrowPathIcon className="h-6 w-6 mr-2 text-blue-400" />
                  Cross-Vertical Knowledge Transfer
                </h4>
                <p className="text-gray-300 mb-4">
                  Leveraging the <strong>KinOS Knowledge Transfer Protocol</strong>, we establish specific mechanisms for sharing ethical insights across verticals:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-sm text-gray-100">Quarterly Ethics Review Sessions</h5>
                    <p className="text-xs text-gray-300">
                      Representatives from all verticals gather to share ethics learnings and challenges
                    </p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-sm text-gray-100">Ethics Case Study Database</h5>
                    <p className="text-xs text-gray-300">
                      Centralized repository of ethical challenges and their resolutions
                    </p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-sm text-gray-100">Ethics Champions Network</h5>
                    <p className="text-xs text-gray-300">
                      Dedicated representatives from each vertical who coordinate ethics initiatives
                    </p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-sm text-gray-100">Automated Ethics Insight Extraction</h5>
                    <p className="text-xs text-gray-300">
                      AI-powered analysis of customer feedback to identify ethical considerations
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                  <h5 className="font-medium mb-2 text-gray-100">Example:</h5>
                  <p className="text-sm text-gray-300 italic">
                    An ethical challenge identified in KinOS Finance regarding transparency of automated decisions is proactively addressed in KinOS Trading through the Ethics Case Study Database, preventing similar issues.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                <h4 className="text-lg font-medium mb-4 text-white flex items-center">
                  <ClipboardDocumentCheckIcon className="h-6 w-6 mr-2 text-blue-400" />
                  Ethical Decision-Making Framework
                </h4>
                <p className="text-gray-300 mb-4">
                  When facing ethical dilemmas, KinOS teams follow this structured approach:
                </p>
                <ol className="space-y-3 text-gray-300 list-decimal list-inside pl-4">
                  <li><strong>Identify the ethical dimensions</strong> of the decision using our standardized assessment tool</li>
                  <li><strong>Articulate the competing values</strong> and document the tensions</li>
                  <li><strong>Consult the relevant stakeholders</strong>, including potential users and affected parties</li>
                  <li><strong>Evaluate alternatives</strong> against our core ethical principles</li>
                  <li><strong>Document the decision rationale</strong> including considerations and trade-offs</li>
                  <li><strong>Establish monitoring mechanisms</strong> for potential unintended consequences</li>
                  <li><strong>Set review timelines</strong> for reassessment</li>
                </ol>
                <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                  <h5 className="font-medium mb-2 text-gray-100">Example:</h5>
                  <p className="text-sm text-gray-300 italic">
                    When designing the memory persistence features for TherapyKin, the team follows this framework to balance the therapeutic value of conversation history against privacy considerations, ultimately implementing a granular user control system for memory management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vertical' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300 mb-8">
              <h2>Vertical-Specific Ethical Considerations</h2>
              <p>
                While our core ethical principles apply universally, each vertical business unit faces unique ethical challenges based on its domain. This section outlines specific considerations and enhanced requirements for key verticals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-4">
                    <BookOpenIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">KinOS Health</h3>
                    <p className="text-gray-400 text-sm">Healthcare and Therapeutic Applications</p>
                  </div>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-medium mb-2 text-gray-100">Special Considerations:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Medical confidentiality</span>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Clinical efficacy</span>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Vulnerable populations</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-gray-100">Enhanced Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      HIPAA and international healthcare regulatory compliance
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Clinical validation protocols before deployment
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Heightened explainability for therapeutic recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Clear delineation between advisory and diagnostic functions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-4">
                    <ChartBarIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">KinOS Finance</h3>
                    <p className="text-gray-400 text-sm">Financial and Investment Applications</p>
                  </div>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-medium mb-2 text-gray-100">Special Considerations:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Financial inclusion</span>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Algorithmic fairness</span>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Systemic risk</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-gray-100">Enhanced Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Periodic fairness audits across demographic groups
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Risk assessment for automated financial recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Transparent explanation of financial decision factors
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Financial literacy support integrated into user experience
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-4">
                    <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">KinOS Education</h3>
                    <p className="text-gray-400 text-sm">Learning and Development Applications</p>
                  </div>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-medium mb-2 text-gray-100">Special Considerations:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Developmental appropriateness</span>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Educational equity</span>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Cultural sensitivity</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-gray-100">Enhanced Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Adaptability to diverse learning styles and needs
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Prevention of harmful stereotypes in educational content
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Protection of student data with enhanced privacy measures
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Balanced human-AI instruction models
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-4">
                    <BriefcaseIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">KinOS Recruitment</h3>
                    <p className="text-gray-400 text-sm">Talent and Hiring Applications</p>
                  </div>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-medium mb-2 text-gray-100">Special Considerations:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Employment discrimination</span>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Diversity and inclusion</span>
                    <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">Credential validation</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-gray-100">Enhanced Requirements:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Regular bias audits of candidate matching algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Transparency in qualification assessment criteria
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Equal opportunity monitoring dashboards
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Human review requirements for automated screening decisions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'monitoring' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300 mb-8">
              <h2>AI-Enabled Ethics Monitoring and Enforcement</h2>
              <p>
                Leveraging our core KinOS engine capabilities, we implement AI-powered systems to support ethical compliance. These systems help us continuously monitor, evaluate, and improve our adherence to ethical principles across all verticals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-3">
                    <DocumentTextIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Automated Ethics Scanning</h3>
                </div>
                
                <p className="text-gray-300 mb-4 flex-grow">
                  AI systems that analyze product designs and code for potential ethical issues
                </p>
                
                <div className="bg-slate-700 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2 text-gray-100 text-sm">Capabilities:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Identification of potential privacy vulnerabilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Detection of algorithmic bias indicators
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Assessment of explainability limitations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Flagging of security concerns with ethical implications
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-gray-100 text-sm">Technical Approach:</h4>
                  <p className="text-gray-300 text-sm">
                    Specialized models trained on ethical case studies and standards to proactively identify potential issues during development
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-3">
                    <PresentationChartLineIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Ethics Simulation Environment</h3>
                </div>
                
                <p className="text-gray-300 mb-4 flex-grow">
                  Digital twin environments for testing ethical implications of AI systems
                </p>
                
                <div className="bg-slate-700 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2 text-gray-100 text-sm">Capabilities:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Simulation of diverse user populations interacting with systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Accelerated timeline testing to identify emergent ethical issues
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Counterfactual testing of alternative design approaches
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Edge case identification for ethical stress testing
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-gray-100 text-sm">Technical Approach:</h4>
                  <p className="text-gray-300 text-sm">
                    Agent-based modeling with demographically diverse synthetic users to predict potential ethical issues before deployment
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-3">
                    <ChartBarIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Ethics Intelligence Dashboard</h3>
                </div>
                
                <p className="text-gray-300 mb-4 flex-grow">
                  Real-time monitoring system for deployed applications
                </p>
                
                <div className="bg-slate-700 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2 text-gray-100 text-sm">Capabilities:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Tracking of key ethics metrics across applications
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Pattern recognition for emerging ethical concerns
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Cross-vertical impact analysis for ethical decisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Early warning system for potential ethical issues
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-gray-100 text-sm">Technical Approach:</h4>
                  <p className="text-gray-300 text-sm">
                    Multi-modal data integration with anomaly detection to identify patterns that may indicate ethical concerns
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GlobeAltIcon className="h-6 w-6 mr-2 text-blue-400" />
                Open-Source Ethics and Transparency
              </h3>
              
              <p className="text-gray-300 mb-6">
                As aligned with our KinOS Ventures approach to technology development, we embrace open-source principles in our ethical frameworks to enhance accountability and trustworthiness.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-3 text-gray-100">Open Ethics Documentation</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Public repository of ethical guidelines and principles
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Transparent documentation of major ethical decisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Community feedback mechanisms for ethical approaches
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Versioned ethics documentation with change history
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-3 text-gray-100">Collaborative Ethics Development</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Engagement with external ethics experts and researchers
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Participation in industry ethics working groups
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Academic partnerships for ethics research
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Stakeholder inclusion in ethics framework evolution
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-3 text-gray-100">Ethics Audit Transparency</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Regular publication of ethics audit summaries
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Open reporting on ethical challenges encountered
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Transparent remediation plans for identified issues
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Public ethics metrics dashboard for key applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'governance' && (
          <div>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300 mb-8">
              <h2>Governance and Accountability Structures</h2>
              <p>
                To ensure consistent application of our ethical principles, we have established formal governance structures and accountability mechanisms. These systems provide clear oversight, escalation paths, and training requirements across all KinOS Ventures business units.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-3">
                    <UserGroupIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Ethics Review Board</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-100">Composition:</h4>
                  <p className="text-gray-300 text-sm">
                    Cross-functional internal team with external advisors providing diverse perspectives and expertise
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-gray-100">Responsibilities:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Review high-risk product decisions with significant ethical implications
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Evaluate ethical exception requests
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Update ethical guidelines based on emerging challenges
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Oversee ethics training and awareness programs
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-gray-100">Operation:</h4>
                  <p className="text-gray-300 text-sm">
                    Monthly meetings with emergency review capabilities for time-sensitive issues
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-3">
                    <ScaleIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Ethics Escalation Protocol</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-100">Trigger Conditions:</h4>
                    <p className="text-gray-300 text-sm">
                      Clear criteria for when ethical concerns require escalation beyond the immediate team
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-gray-100">Escalation Path:</h4>
                    <p className="text-gray-300 text-sm">
                      Structured progression from team lead to Ethics Review Board with defined timelines
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-gray-100">Whistleblower Protection:</h4>
                    <p className="text-gray-300 text-sm">
                      Safeguards for employees reporting ethical concerns without fear of retaliation
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-gray-100">Resolution Documentation:</h4>
                    <p className="text-gray-300 text-sm">
                      Standardized reporting of ethical issue resolution and preventative measures
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-2 rounded-lg mr-3">
                    <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Ethics Training Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-100">Onboarding:</h4>
                    <p className="text-gray-300 text-sm">
                      Mandatory ethics training for all new employees covering core principles and practical application
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-gray-100">Role-specific Training:</h4>
                    <p className="text-gray-300 text-sm">
                      Specialized modules for product managers, engineers, and data scientists addressing domain-specific challenges
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-gray-100">Certification:</h4>
                    <p className="text-gray-300 text-sm">
                      Annual ethics certification requirements to ensure ongoing awareness and compliance
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-gray-100">Continuous Learning:</h4>
                    <p className="text-gray-300 text-sm">
                      Ongoing case study discussions and ethics awareness programs to keep ethical considerations top of mind
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <ArrowPathIcon className="h-6 w-6 mr-2 text-blue-400" />
                Continuous Evolution and Adaptation
              </h3>
              
              <p className="text-gray-300 mb-6">
                This charter is not static but evolves through structured processes to incorporate new learnings, technologies, and ethical considerations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-3 text-gray-100">Systematic Review Process</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Quarterly reviews for relevant updates
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Annual comprehensive revisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Incorporation of lessons from ethics incidents
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Adaptation to new technological capabilities
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-3 text-gray-100">Stakeholder Input Mechanisms</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      User feedback channels for ethical concerns
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Advisory panels with diverse perspectives
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Industry ethics standards monitoring
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Academic research partnership insights
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-3 text-gray-100">Ethics Innovation Pipeline</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Research initiatives for novel ethical challenges
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Experimentation with new ethical safeguard mechanisms
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Cross-industry ethics benchmarking
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Ethics-centered design thinking workshops
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Related Resources */}
      <section className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/core-philosophy-strategy/kinos-ventures-manifesto" className="group">
              <div className="bg-slate-700 rounded-lg border border-slate-600 p-5 h-full transition duration-300 group-hover:border-blue-500 group-hover:shadow-md">
                <DocumentTextIcon className="h-10 w-10 text-blue-400 mb-3" />
                <h3 className="font-medium text-lg mb-2">KinOS Ventures Manifesto</h3>
                <p className="text-gray-300 text-sm mb-4">Core values, mission, and vision defining our approach to AI development</p>
                <span className="text-blue-400 text-sm flex items-center group-hover:underline">
                  Read more
                  <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            
            <Link href="/resources/core-philosophy-strategy/first-principles-decision-making" className="group">
              <div className="bg-slate-700 rounded-lg border border-slate-600 p-5 h-full transition duration-300 group-hover:border-blue-500 group-hover:shadow-md">
                <DocumentTextIcon className="h-10 w-10 text-blue-400 mb-3" />
                <h3 className="font-medium text-lg mb-2">First Principles Decision-Making</h3>
                <p className="text-gray-300 text-sm mb-4">Structured approach to making decisions based on fundamental truths</p>
                <span className="text-blue-400 text-sm flex items-center group-hover:underline">
                  Read more
                  <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            
            <Link href="/resources/technology-product-development/ai-memory-context-retention" className="group">
              <div className="bg-slate-700 rounded-lg border border-slate-600 p-5 h-full transition duration-300 group-hover:border-blue-500 group-hover:shadow-md">
                <DocumentTextIcon className="h-10 w-10 text-blue-400 mb-3" />
                <h3 className="font-medium text-lg mb-2">AI Memory & Context Retention</h3>
                <p className="text-gray-300 text-sm mb-4">Guidelines for implementing consistent memory features across applications</p>
                <span className="text-blue-400 text-sm flex items-center group-hover:underline">
                  Read more
                  <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIEthicsResponsibilityCharter