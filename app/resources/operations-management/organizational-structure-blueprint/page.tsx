'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  DocumentChartBarIcon, 
  UserGroupIcon, 
  ArrowPathIcon, 
  CogIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  LightBulbIcon, 
  AcademicCapIcon, 
  ArrowsPointingOutIcon,
  PresentationChartBarIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
  UsersIcon,
  ScaleIcon,
  BuildingOffice2Icon,
  ArrowRightCircleIcon
} from '@heroicons/react/24/outline'

const OrganizationalStructureBlueprintPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pb-20">
      {/* Resource Header */}
      <header className="px-4 md:px-6 lg:px-8 pt-12 pb-6 border-b border-slate-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Organizational Structure Blueprint
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-6">
            A lean organizational model designed for our small team that balances centralized technology development with vertical business autonomy and AI-enabled scaling.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <DocumentChartBarIcon className="h-5 w-5" />
              Operations Management
            </span>
            <span className="flex items-center gap-1">
              <UserGroupIcon className="h-5 w-5" />
              Organizational Design
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="relative mb-12">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-slate-800">
              <Image 
                src="/categories/Operations_Management/organizational-structure-blueprint.png"
                alt="Organizational Structure Blueprint"
                width={1200}
                height={675}
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-em:text-gray-200 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-hr:border-gray-700 prose-table:text-gray-300 prose-th:text-gray-200 prose-td:text-gray-300">
            <h2>Executive Summary</h2>
            <p>
              This blueprint establishes the organizational model for KinOS Ventures, defining the relationship between the core company and its vertical business units. It outlines a scalable structure designed for our current three-person team (Technical Lead/CEO, Finance Lead/CFO, Growth Lead/COO) that maximizes effectiveness through AI-powered operations. The document details reporting structures, decision rights, and resource allocation mechanisms, enabling us to balance centralized technology development with vertical business autonomy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <LightBulbIcon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Critical Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Scale efficiently while maintaining a lean team structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Ensure clear accountability and decision-making processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Enable rapid knowledge transfer across verticals</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Optimize resource allocation for maximum business impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Maintain the unified technology core while allowing vertical specialization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <BuildingOffice2Icon className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Core Structure</h3>
              <p className="text-gray-300 mb-4">
                This blueprint serves as the operational backbone for our ambitious strategy to build a technology accelerator that leverages the KinOS engine across multiple verticals with minimal human resources.
              </p>
              <div className="flex justify-center">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 w-full">
                  <div className="text-center p-3 bg-blue-600 rounded-lg mb-3">KinOS Ventures (Parent)</div>
                  <div className="text-center p-2 bg-slate-700 rounded-lg mb-3">Core Technology Platform</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-purple-700 rounded-lg">KinOS Health</div>
                    <div className="text-center p-2 bg-purple-700 rounded-lg">KinOS Finance</div>
                    <div className="text-center p-2 bg-purple-700 rounded-lg">KinOS Ed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Organizational Structure */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <UserGroupIcon className="h-8 w-8 text-purple-400" />
            <h2 className="text-2xl font-bold">Core Organizational Structure</h2>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Leadership Team</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="bg-blue-900 p-4">
                <h4 className="font-bold text-lg">Technical Lead/CEO</h4>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-2">
                  <DocumentTextIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Primary responsibilities:</span> Technology vision, product roadmap, engineering oversight, core IP development</p>
                </div>
                <div className="flex items-start gap-2">
                  <ScaleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Decision rights:</span> Final authority on technical direction, product development priorities, and architectural decisions</p>
                </div>
                <div className="flex items-start gap-2">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Time allocation:</span> 60% core platform development, 40% vertical-specific implementation</p>
                </div>
                <div className="flex items-start gap-2">
                  <ChartBarIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Key performance indicators:</span> Product development velocity, technical debt management, innovation metrics</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="bg-green-900 p-4">
                <h4 className="font-bold text-lg">Finance Lead/CFO</h4>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-2">
                  <DocumentTextIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Primary responsibilities:</span> Capital allocation, financial strategy, investor relations, vertical unit economics</p>
                </div>
                <div className="flex items-start gap-2">
                  <ScaleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Decision rights:</span> Budget approval, investment prioritization, pricing strategy validation</p>
                </div>
                <div className="flex items-start gap-2">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Time allocation:</span> 40% parent company operations, 60% vertical business unit economics</p>
                </div>
                <div className="flex items-start gap-2">
                  <ChartBarIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Key performance indicators:</span> Capital efficiency, vertical profitability, financial forecasting accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="bg-purple-900 p-4">
                <h4 className="font-bold text-lg">Growth Lead/COO</h4>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-2">
                  <DocumentTextIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Primary responsibilities:</span> Market expansion, partnerships, vertical business development, operations</p>
                </div>
                <div className="flex items-start gap-2">
                  <ScaleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Decision rights:</span> Go-to-market strategy, partnership approvals, operational process decisions</p>
                </div>
                <div className="flex items-start gap-2">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Time allocation:</span> 30% cross-vertical initiatives, 70% vertical-specific growth execution</p>
                </div>
                <div className="flex items-start gap-2">
                  <ChartBarIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-medium text-white">Key performance indicators:</span> Customer acquisition metrics, partnership effectiveness, operational efficiency</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Organizational Principles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex flex-col">
              <CogIcon className="h-8 w-8 text-blue-400 mb-3" />
              <h4 className="font-semibold mb-2">AI-First Operations</h4>
              <p className="text-sm text-gray-300 flex-grow">Every role is amplified by AI systems to achieve productivity beyond traditional team sizes</p>
            </div>
            
            <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex flex-col">
              <ArrowsPointingOutIcon className="h-8 w-8 text-blue-400 mb-3" />
              <h4 className="font-semibold mb-2">Vertical Autonomy with Core Alignment</h4>
              <p className="text-sm text-gray-300 flex-grow">Vertical units have operational freedom but adhere to core technology standards</p>
            </div>
            
            <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex flex-col">
              <UsersIcon className="h-8 w-8 text-blue-400 mb-3" />
              <h4 className="font-semibold mb-2">Minimal Management Layers</h4>
              <p className="text-sm text-gray-300 flex-grow">Direct communication channels between leadership and execution teams</p>
            </div>
            
            <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex flex-col">
              <UserCircleIcon className="h-8 w-8 text-blue-400 mb-3" />
              <h4 className="font-semibold mb-2">Cross-Functional Collaboration</h4>
              <p className="text-sm text-gray-300 flex-grow">Team members work across verticals to share knowledge and best practices</p>
            </div>
            
            <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex flex-col">
              <ChartBarIcon className="h-8 w-8 text-blue-400 mb-3" />
              <h4 className="font-semibold mb-2">Outcome-Oriented Measurement</h4>
              <p className="text-sm text-gray-300 flex-grow">Performance evaluation based on business impact rather than activity</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Decision-Making Framework</h3>
          
          <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 mb-10">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-700">
                <thead className="bg-slate-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Decision Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Primary Authority
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Input Required From
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Escalation Path
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Technology architecture
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Technical Lead
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Vertical implementation leads
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Board (if strategic)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Resource allocation
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Finance Lead
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Technical Lead, Growth Lead
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      All-hands leadership meeting
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Market strategy
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Growth Lead
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Vertical business leads, Finance Lead
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      CEO for final approval
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Vertical prioritization
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      All three leaders jointly
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Data from performance metrics
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Board for major shifts
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Talent acquisition
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Respective functional lead
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      Team members most affected
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      CEO for executive hires
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Vertical Business Unit Structure */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BuildingOffice2Icon className="h-8 w-8 text-purple-400" />
            <h2 className="text-2xl font-bold">Vertical Business Unit Structure</h2>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-6">Core and Vertical Relationship Model</h3>
            
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                {`
                  ┌─────────────────────┐
                  │   KinOS Ventures    │
                  │  (Parent Company)   │
                  └───────────┬─────────┘
                              │
                  ┌───────────┴─────────┐
                  │   Core Technology   │
                  │       Platform      │
                  └───────────┬─────────┘
                              │
         ┌──────────┬─────────┼─────────┬──────────┐
         │          │         │         │          │
┌────────▼─────┐┌───▼───┐┌────▼────┐┌───▼───┐┌─────▼────┐
│ KinOS Health ││KinOS  ││  KinOS  ││KinOS  ││  KinOS   │
│ (TherapyKin) ││Finance││Entertain││Product││Education │
└──────────────┘└───────┘└─────────┘└───────┘└──────────┘
      │             │         │         │         │
      └─────────────┴─────────┼─────────┴─────────┘
                              │
                     ┌────────▼────────┐
                     │ Additional      │
                     │ Vertical Units  │
                     └─────────────────┘
                `}
              </pre>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-6">Vertical Unit Structure</h3>
            
            <p className="text-gray-300 mb-6">Each vertical business unit follows a standardized structure with three core components:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="bg-blue-900/50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-lg mb-1">Product Engineering Team</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Vertical-specific implementation of KinOS technology, feature development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Engineers with domain expertise, AI specialists, UX designers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Regular sync with central platform team, adherence to tech standards</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="bg-purple-900/50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-lg mb-1">Commercial Team</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Sales, marketing, customer success within the vertical domain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Domain experts, relationship managers, marketing specialists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Adherence to brand guidelines, shared marketing infrastructure</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="bg-green-900/50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-lg mb-1">Domain Expert Network</h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Industry-specific guidance, product direction, market intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Advisory contractors, fractional experts, industry partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Knowledge transfer to KinOS leadership team and other verticals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Resource Sharing Model</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Shared Resources Across Verticals</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Core KinOS technology platform and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>AI development tools and capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Data infrastructure (with appropriate privacy walls)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Legal, HR, and administrative functions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Brand and marketing frameworks</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Vertical-Specific Resources</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Domain-specific engineering talent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Vertical go-to-market resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Industry partnerships and relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Specialized data sets and models</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Decision Rights and Governance */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <ScaleIcon className="h-8 w-8 text-purple-400" />
            <h2 className="text-2xl font-bold">Decision Rights and Governance</h2>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none mb-8 prose-headings:text-white prose-p:text-gray-300">
            <p>
              Clear governance structures and decision frameworks are essential for our lean team to operate efficiently while managing multiple vertical business units.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Decision Rights Matrix</h3>
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                  <thead className="bg-slate-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Decision Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Parent Company Authority
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Vertical Unit Authority
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Joint Decision Process
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <span className="font-medium text-white">Technology Architecture</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Core platform design</li>
                          <li>Technical standards</li>
                          <li>Cross-vertical capabilities</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Vertical-specific implementations</li>
                          <li>Feature prioritization</li>
                          <li>User experience design</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Architecture review board for decisions affecting multiple verticals
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <span className="font-medium text-white">Financial</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Overall budget allocation</li>
                          <li>Investment rounds</li>
                          <li>Cross-vertical metrics</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Vertical P&L management</li>
                          <li>Customer pricing</li>
                          <li>Revenue forecasting</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Quarterly business reviews<br/>Major resource reallocations
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <span className="font-medium text-white">Market & Growth</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Brand guidelines</li>
                          <li>Overall market positioning</li>
                          <li>New vertical selection</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Vertical go-to-market strategy</li>
                          <li>Customer acquisition tactics</li>
                          <li>Partnerships within vertical</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        Joint growth planning sessions<br/>Cross-vertical opportunity assessment
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Conflict Resolution Process</h3>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <ol className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full flex-shrink-0 text-white font-medium text-sm">1</div>
                    <div>
                      <p className="font-medium text-white">Issue Documentation</p>
                      <p className="text-sm">Conflicting parties document the disagreement, desired outcomes, and business impact</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full flex-shrink-0 text-white font-medium text-sm">2</div>
                    <div>
                      <p className="font-medium text-white">Peer Resolution</p>
                      <p className="text-sm">Attempt resolution between vertical leads or functional equals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full flex-shrink-0 text-white font-medium text-sm">3</div>
                    <div>
                      <p className="font-medium text-white">Leadership Mediation</p>
                      <p className="text-sm">Escalation to appropriate leadership team member based on decision matrix</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full flex-shrink-0 text-white font-medium text-sm">4</div>
                    <div>
                      <p className="font-medium text-white">Joint Leadership Review</p>
                      <p className="text-sm">Full leadership team review for unresolved strategic conflicts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full flex-shrink-0 text-white font-medium text-sm">5</div>
                    <div>
                      <p className="font-medium text-white">Final Authority</p>
                      <p className="text-sm">CEO makes final decision when consensus cannot be reached, with documented rationale</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Governance Cadence</h3>
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-700">
                    <thead className="bg-slate-700">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Meeting Type
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Frequency
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Purpose
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-white">
                          Leadership Sync
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Weekly
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Cross-functional alignment, priorities, blockers
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-white">
                          Vertical Business Review
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Monthly
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Performance metrics, resource needs, alignment
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-white">
                          Technical Sync
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Bi-weekly
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Technology roadmap, integration, innovation sharing
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-white">
                          All-Hands
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Monthly
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Company updates, knowledge sharing, celebration
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-white">
                          Quarterly Business Review
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Quarterly
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          Strategic progress, resource allocation, decisions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Scaling the Organization */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <ArrowsPointingOutIcon className="h-8 w-8 text-purple-400" />
            <h2 className="text-2xl font-bold">Scaling the Organization</h2>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none mb-8 prose-headings:text-white prose-p:text-gray-300">
            <p>
              Our organizational structure is designed to grow efficiently by leveraging AI systems to amplify team capabilities while strategically adding human resources.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-6">AI Leverage Model for Team Extension</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col">
                <LightBulbIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-semibold mb-2">AI-Powered Productivity Tools</h4>
                <p className="text-sm text-gray-300 flex-grow">Each team member equipped with vertical-specific AI assistants</p>
              </div>
              
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col">
                <ArrowPathIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-semibold mb-2">Process Automation</h4>
                <p className="text-sm text-gray-300 flex-grow">Routine workflows automated through custom AI systems</p>
              </div>
              
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col">
                <PresentationChartBarIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-semibold mb-2">Decision Support Systems</h4>
                <p className="text-sm text-gray-300 flex-grow">AI-powered analytics and recommendation systems for faster decision-making</p>
              </div>
              
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col">
                <AcademicCapIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-semibold mb-2">Knowledge Management</h4>
                <p className="text-sm text-gray-300 flex-grow">Automated documentation and knowledge transfer systems</p>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Hiring Prioritization Framework</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Hire when:</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>A function cannot be effectively automated or AI-augmented</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Domain expertise is critical and unavailable through current resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>A role represents a strategic bottleneck across multiple verticals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>New capabilities are required for market expansion</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Priority Hiring Areas:</h4>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-purple-900 rounded-full flex-shrink-0 text-white font-medium text-sm">1</div>
                    <span>Vertical domain experts who understand specific industry needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-purple-900 rounded-full flex-shrink-0 text-white font-medium text-sm">2</div>
                    <span>AI engineers who can enhance the core platform capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-purple-900 rounded-full flex-shrink-0 text-white font-medium text-sm">3</div>
                    <span>Growth specialists who can accelerate market adoption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-purple-900 rounded-full flex-shrink-0 text-white font-medium text-sm">4</div>
                    <span>Cross-vertical knowledge orchestrators</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Organizational Evolution Stages</h3>
            
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-700">
                  <thead className="bg-slate-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Stage
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Team Size
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Focus
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Organizational Evolution
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <span className="font-medium text-white">1: Foundation<br/>(Current)</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        3-5
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Core platform development</li>
                          <li>Initial vertical validation</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Leadership team handles multiple functions</li>
                          <li>Heavy AI augmentation</li>
                          <li>Contract specialists for gaps</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <span className="font-medium text-white">2: Initial Scaling</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        6-12
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Proven vertical growth</li>
                          <li>New vertical exploration</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Vertical leads appointed</li>
                          <li>Shared services formalized</li>
                          <li>Specialized AI systems for each function</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <span className="font-medium text-white">3: Multi-Vertical<br/>Operation</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        13-25
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Multiple revenue-generating verticals</li>
                          <li>Systematic vertical launches</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Vertical P&L ownership</li>
                          <li>Standardized launch playbooks</li>
                          <li>Cross-vertical knowledge transfer systems</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <span className="font-medium text-white">4: Ecosystem<br/>Development</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        25-50
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Partner network growth</li>
                          <li>Platform ecosystem</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Developer community management</li>
                          <li>Partner enablement team</li>
                          <li>Platform governance structures</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <ClipboardDocumentCheckIcon className="h-8 w-8 text-purple-400" />
            <h2 className="text-2xl font-bold">Implementation Guide</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Immediate Action Items</h3>
              
              <ol className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full flex-shrink-0 text-white font-medium text-sm">1</div>
                  <div>
                    <p className="font-medium text-white">Document Current State</p>
                    <ul className="mt-2 space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>Map existing responsibilities across the three-person leadership team</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>Identify critical gaps and AI augmentation opportunities</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>Catalog current decision-making processes and pain points</span>
                      </li>
                    </ul>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full flex-shrink-0 text-white font-medium text-sm">2</div>
                  <div>
                    <p className="font-medium text-white">Establish Core Systems</p>
                    <ul className="mt-2 space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>Implement the decision rights matrix with clear documentation</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>Create the resource allocation process documentation and templates</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>Set up the initial knowledge transfer repository structure</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Core Systems Setup</h3>
              
              <ol className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-purple-900 rounded-full flex-shrink-0 text-white font-medium text-sm">3</div>
                  <div>
                    <p className="font-medium text-white">Define Vertical Boundaries</p>
                    <ul className="mt-2 space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>Clarify the scope and objectives for each active vertical</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>Document integration points with the core KinOS platform</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>Establish preliminary performance metrics for each vertical</span>
                      </li>
                    </ul>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-purple-900 rounded-full flex-shrink-0 text-white font-medium text-sm">4</div>
                  <div>
                    <p className="font-medium text-white">Design AI Augmentation Plan</p>
                    <ul className="mt-2 space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>Identify highest-leverage AI implementation opportunities</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>Prioritize automation based on time savings and strategic impact</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>Create development roadmap for key AI systems</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">90-Day Implementation Timeline</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="font-medium text-white">Weeks 1-2</p>
                  </div>
                  <ul className="pl-4 space-y-1 text-sm text-gray-300">
                    <li>Complete current state assessment</li>
                    <li>Draft initial decision rights documentation</li>
                    <li>Establish governance meeting cadence</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="font-medium text-white">Weeks 3-4</p>
                  </div>
                  <ul className="pl-4 space-y-1 text-sm text-gray-300">
                    <li>Define resource allocation process</li>
                    <li>Create vertical unit structure templates</li>
                    <li>Design knowledge transfer protocol</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="font-medium text-white">Weeks 5-8</p>
                  </div>
                  <ul className="pl-4 space-y-1 text-sm text-gray-300">
                    <li>Implement first phase of AI augmentation tools</li>
                    <li>Test resource allocation process</li>
                    <li>Establish initial metrics dashboard</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="font-medium text-white">Weeks 9-12</p>
                  </div>
                  <ul className="pl-4 space-y-1 text-sm text-gray-300">
                    <li>Review and refine organizational structure</li>
                    <li>Roll out knowledge transfer protocol</li>
                    <li>Develop scaling plan for next 6-12 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Related Resources Section */}
      <section className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/core-philosophy-strategy/vertical-integration-strategy" className="group">
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 h-full transition-colors group-hover:border-blue-500">
                <DocumentTextIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Vertical Integration Strategy</h3>
                <p className="text-sm text-gray-400">Framework for identifying, developing, and scaling new business verticals</p>
              </div>
            </Link>
            
            <Link href="/resources/operations-management/resource-allocation-framework" className="group">
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 h-full transition-colors group-hover:border-blue-500">
                <ChartBarIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Resource Allocation Framework</h3>
                <p className="text-sm text-gray-400">System for distributing technical and human resources across verticals</p>
              </div>
            </Link>
            
            <Link href="/resources/culture-talent/talent-acquisition-development" className="group">
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 h-full transition-colors group-hover:border-blue-500">
                <UserGroupIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Talent Acquisition & Development</h3>
                <p className="text-sm text-gray-400">Principles for building specialized teams with shared core values</p>
              </div>
            </Link>
            
            <Link href="/resources/culture-talent/remote-first-collaboration" className="group">
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 h-full transition-colors group-hover:border-blue-500">
                <UsersIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Remote-First Collaboration</h3>
                <p className="text-sm text-gray-400">Guidelines for effective distributed teamwork and communication</p>
              </div>
            </Link>
            
            <Link href="/resources/operations-management/vertical-performance-evaluation" className="group">
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 h-full transition-colors group-hover:border-blue-500">
                <PresentationChartBarIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Vertical Performance Evaluation</h3>
                <p className="text-sm text-gray-400">How to assess the health and growth potential of different business lines</p>
              </div>
            </Link>
            
            <Link href="/resources/culture-talent/kinos-knowledge-transfer-protocol" className="group">
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 h-full transition-colors group-hover:border-blue-500">
                <AcademicCapIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Knowledge Transfer Protocol</h3>
                <p className="text-sm text-gray-400">Systems for sharing insights and learnings across teams and verticals</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrganizationalStructureBlueprintPage