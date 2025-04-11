'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  DocumentTextIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  CubeTransparentIcon,
  ScaleIcon,
  PresentationChartLineIcon,
  ArrowsPointingOutIcon,
  DocumentMagnifyingGlassIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  CpuChipIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

type RelatedResourceProps = {
  id: string
  title: string
  url: string
}

const PartnershipEvaluationMatrix = () => {
  const relatedResources: RelatedResourceProps[] = [
    {
      id: 'partner-integration-handbook',
      title: 'Partner Integration Handbook',
      url: '/resources/operations-management/partner-integration-handbook'
    },
    {
      id: 'vertical-market-selection-criteria',
      title: 'Vertical Market Selection Criteria',
      url: '/resources/business-growth/vertical-market-selection-criteria'
    },
    {
      id: 'first-principles-decision-making',
      title: 'First Principles Decision-Making',
      url: '/resources/core-philosophy-strategy/first-principles-decision-making'
    },
    {
      id: 'enterprise-client-engagement-protocol',
      title: 'Enterprise Client Engagement Protocol',
      url: '/resources/business-growth/enterprise-client-engagement-protocol'
    },
    {
      id: 'technology-unification-principles',
      title: 'Technology Unification Principles',
      url: '/resources/core-philosophy-strategy/technology-unification-principles'
    },
    {
      id: 'ai-ethics-responsibility-charter',
      title: 'AI Ethics & Responsibility Charter',
      url: '/resources/culture-talent/ai-ethics-responsibility-charter'
    }
  ]

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Resource Header */}
      <div className="bg-slate-800 py-16 px-4 md:px-8 border-b border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-blue-600/20 p-4 rounded-lg">
              <DocumentTextIcon className="h-12 w-12 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnership Evaluation Matrix</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                A structured methodology for evaluating and selecting strategic partnerships based on business alignment, 
                technological compatibility, and cultural fit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Executive Summary Card */}
        <div className="bg-slate-800 rounded-xl shadow-lg mb-12 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900/40 to-slate-800 px-6 py-4 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-white">Executive Summary</h2>
          </div>
          <div className="p-6 text-gray-300">
            <p className="mb-4">
              The Partnership Evaluation Matrix provides a structured methodology for evaluating and managing strategic 
              partnerships across the KinOS Ventures ecosystem. This framework enables consistent assessment of potential 
              partners based on business alignment, technological compatibility, and cultural fit.
            </p>
            <p className="mb-4">
              As KinOS Ventures expands across multiple vertical markets, strategic partnerships will be essential 
              for accelerating market penetration, enhancing technological capabilities, and creating sustainable 
              competitive advantages.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-lg p-5">
                <h3 className="font-semibold text-white text-lg mb-3 flex items-center">
                  <ArrowsPointingOutIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Framework Benefits
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Ensures partnerships align with the unified technology core strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Maximizes cross-vertical intelligence opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Supports evolution from token-based model to SaaS and licensing models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Provides consistent evaluation criteria with vertical-specific customization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-5">
                <h3 className="font-semibold text-white text-lg mb-3 flex items-center">
                  <RocketLaunchIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Business Impact
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Accelerates market penetration in targeted verticals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Enhances core KinOS engine capabilities through strategic integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Creates sustainable competitive advantages through partnership synergies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Provides clear decision-making processes for partnership management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Strategy Foundation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <CubeTransparentIcon className="h-6 w-6 mr-2 text-blue-400" />
            Partnership Strategy Foundation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Strategic Intent & Partnership Categories</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg text-white mb-3">Types of Strategic Partnerships</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "Technology Integration Partners", desc: "Enhance KinOS capabilities through complementary technologies" },
                      { name: "Distribution Partners", desc: "Expand market reach through established channels" },
                      { name: "Co-Creation Partners", desc: "Joint development of new solutions or verticals" },
                      { name: "Data Partnership Alliances", desc: "Enhance cross-vertical intelligence through data collaboration" },
                      { name: "Industry Ecosystem Partnerships", desc: "Vertical-specific collaborations to accelerate adoption" }
                    ].map((type, i) => (
                      <div key={i} className="bg-slate-700/40 p-4 rounded-lg">
                        <h5 className="font-medium text-blue-400 mb-1">{type.name}</h5>
                        <p className="text-sm text-gray-300">{type.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg text-white mb-3">Alignment with KinOS Strategic Objectives</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Support for multi-vertical expansion strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Enhancement of core KinOS engine capabilities (memory, adaptation, growth)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Acceleration of market penetration in targeted verticals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Contribution to shared technology core while enabling specialized implementations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">First Principles for Partnership Evaluation</h3>
                <p className="text-gray-300 mb-4">
                  Derived from the First Principles Decision-Making Framework, partnerships should be evaluated on:
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: "Value Creation", desc: "Does the partnership create substantial value beyond what either organization could achieve independently?" },
                    { name: "Technology Alignment", desc: "Does the partnership enhance or complement the core KinOS engine capabilities?" },
                    { name: "Strategic Complementarity", desc: "Do the partners bring complementary strengths without excessive overlap?" },
                    { name: "Cultural Compatibility", desc: "Do the organizations share compatible values and working methods?" },
                    { name: "Sustainable Advantage", desc: "Will the partnership create lasting competitive advantages?" }
                  ].map((principle, i) => (
                    <div key={i} className="bg-slate-700/40 p-4 rounded-lg">
                      <h5 className="font-medium text-white mb-1">{principle.name}</h5>
                      <p className="text-sm text-gray-300">{principle.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Criteria Framework */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ClipboardDocumentCheckIcon className="h-6 w-6 mr-2 text-blue-400" />
            Evaluation Criteria Framework
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {/* Strategic Alignment Assessment */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-indigo-900/40 to-slate-800 px-6 py-4 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Strategic Alignment Assessment</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-3 px-4 text-left text-white">Criterion</th>
                        <th className="py-3 px-4 text-left text-white">Key Questions</th>
                        <th className="py-3 px-4 text-left text-white">Weight</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Mission Compatibility</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Do the organizational missions align?</li>
                            <li>Are there conflicting strategic objectives?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Market Strategy</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Does the partnership advance KinOS's vertical strategy?</li>
                            <li>Are target markets complementary or overlapping?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">20%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Growth Trajectory</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Are both organizations' growth plans compatible?</li>
                            <li>How will scaling affect the partnership?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Risk Alignment</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Is there shared understanding of risk tolerance?</li>
                            <li>Are there significant reputation risks?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">10%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Long-term Vision</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Does the partnership support KinOS's long-term direction?</li>
                            <li>Is there alignment on partnership evolution?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Technical Compatibility Assessment */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-blue-900/40 to-slate-800 px-6 py-4 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Technical Compatibility Assessment</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-3 px-4 text-left text-white">Criterion</th>
                        <th className="py-3 px-4 text-left text-white">Key Questions</th>
                        <th className="py-3 px-4 text-left text-white">Weight</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Technology Stack</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>How compatible are the technical architectures?</li>
                            <li>What integration challenges exist?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">20%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Data Exchange</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>What data will be shared between partners?</li>
                            <li>How will data privacy and security be managed?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">API & Integration</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Are APIs well-documented and maintained?</li>
                            <li>What is the integration complexity?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Technical Roadmap</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Are development roadmaps aligned?</li>
                            <li>How will technical changes be communicated?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">10%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Technology Maturity</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>How mature are each partner's technologies?</li>
                            <li>Are there stability concerns?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Operational & Cultural Fit Assessment */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-purple-900/40 to-slate-800 px-6 py-4 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Operational & Cultural Fit Assessment</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-3 px-4 text-left text-white">Criterion</th>
                        <th className="py-3 px-4 text-left text-white">Key Questions</th>
                        <th className="py-3 px-4 text-left text-white">Weight</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Working Methods</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>How compatible are the organizations' working styles?</li>
                            <li>Agile vs. waterfall approaches?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Decision-Making</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>How are decisions made in each organization?</li>
                            <li>Are governance models compatible?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Communication Style</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>How do the organizations typically communicate?</li>
                            <li>Are there significant cultural differences?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">10%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Talent & Expertise</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Does the partner bring complementary expertise?</li>
                            <li>How will teams collaborate?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Values Alignment</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Do the organizations share core values?</li>
                            <li>Is there alignment on AI ethics?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Commercial Framework Assessment */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-emerald-900/40 to-slate-800 px-6 py-4 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Commercial Framework Assessment</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-3 px-4 text-left text-white">Criterion</th>
                        <th className="py-3 px-4 text-left text-white">Key Questions</th>
                        <th className="py-3 px-4 text-left text-white">Weight</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Revenue Model</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>How do the revenue models interact?</li>
                            <li>Will the partnership enable new revenue streams?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">20%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Investment Requirements</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>What investments are required from each partner?</li>
                            <li>Is there a fair balance of contributions?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Value Distribution</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>How will value and benefits be distributed?</li>
                            <li>Are there clear metrics for success?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">20%</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-3 px-4 font-medium">Contract Structure</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>What is the appropriate contractual framework?</li>
                            <li>What are the key terms and conditions?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Exit Strategy</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside space-y-1">
                            <li>How will the partnership evolve or conclude?</li>
                            <li>What are the transition arrangements?</li>
                          </ul>
                        </td>
                        <td className="py-3 px-4">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <DocumentMagnifyingGlassIcon className="h-6 w-6 mr-2 text-blue-400" />
            Evaluation Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
              <div className="p-5 border-b border-slate-700 bg-slate-800">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <span className="flex items-center justify-center bg-blue-500/20 rounded-full w-8 h-8 mr-3 text-blue-400">1</span>
                  Partnership Discovery & Initial Screening
                </h3>
              </div>
              <div className="p-5 text-gray-300">
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">Opportunity Identification</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Market monitoring for potential partners</li>
                    <li>Inbound partnership requests</li>
                    <li>Strategic gap analysis across verticals</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">Initial Screening Checklist</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Basic eligibility assessment</li>
                    <li>Alignment with current priorities</li>
                    <li>Red flag identification</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Preliminary Research</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Competitive landscape analysis</li>
                    <li>Partner reputation assessment</li>
                    <li>Initial due diligence</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
              <div className="p-5 border-b border-slate-700 bg-slate-800">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <span className="flex items-center justify-center bg-blue-500/20 rounded-full w-8 h-8 mr-3 text-blue-400">2</span>
                  Detailed Evaluation Procedure
                </h3>
              </div>
              <div className="p-5 text-gray-300">
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">Cross-Functional Assessment Team</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Business development lead (coordinator)</li>
                    <li>Technical architecture representative</li>
                    <li>Vertical business unit representative</li>
                    <li>Legal/compliance representative</li>
                    <li>Finance representative</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">Structured Evaluation Process</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Initial assessment meeting</li>
                    <li>Partner interview and discovery sessions</li>
                    <li>Technical compatibility review</li>
                    <li>Commercial framework development</li>
                    <li>Final scoring and recommendation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Documentation Requirements</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Completed evaluation matrix (scored)</li>
                    <li>SWOT analysis</li>
                    <li>Risk assessment document</li>
                    <li>Commercial framework outline</li>
                    <li>Implementation roadmap</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
              <div className="p-5 border-b border-slate-700 bg-slate-800">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <span className="flex items-center justify-center bg-blue-500/20 rounded-full w-8 h-8 mr-3 text-blue-400">3</span>
                  Decision Rights & Approval Process
                </h3>
              </div>
              <div className="p-5 text-gray-300">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="text-white">
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2">Partnership Type</th>
                        <th className="text-left py-2">Approval Level</th>
                        <th className="text-left py-2">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Technology Integration</td>
                        <td className="py-2">CTO + Business Unit Leader</td>
                        <td className="py-2">2-4 weeks</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Distribution Partnership</td>
                        <td className="py-2">Business Unit Leader + CMO</td>
                        <td className="py-2">3-5 weeks</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Strategic Alliance</td>
                        <td className="py-2">CEO + Board notification</td>
                        <td className="py-2">6-8 weeks</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Joint Venture</td>
                        <td className="py-2">Board approval required</td>
                        <td className="py-2">8-12 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-2">M&A Activity</td>
                        <td className="py-2">Full board approval</td>
                        <td className="py-2">3+ months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Implementation Framework */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ArrowPathIcon className="h-6 w-6 mr-2 text-blue-400" />
            Partnership Implementation Framework
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Implementation Planning */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-blue-900/40 to-slate-800 p-5 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white">Implementation Planning</h3>
              </div>
              <div className="p-5 text-gray-300">
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Joint Implementation Team</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Clearly defined roles and responsibilities</li>
                    <li>Balanced representation from both organizations</li>
                    <li>Designated executive sponsors</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Resource Allocation</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Technical resources requirements</li>
                    <li>Financial commitments</li>
                    <li>Staffing needs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Integration Roadmap</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Phased implementation schedule</li>
                    <li>Key milestones and dependencies</li>
                    <li>Go/no-go decision points</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Partnership Governance */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-purple-900/40 to-slate-800 p-5 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white">Partnership Governance</h3>
              </div>
              <div className="p-5 text-gray-300">
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Governance Structure</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Steering committee composition</li>
                    <li>Meeting cadence and format</li>
                    <li>Decision-making authority and process</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Communication Protocols</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Regular communication schedule</li>
                    <li>Escalation pathways</li>
                    <li>Stakeholder management plan</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Conflict Resolution Mechanisms</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Dispute resolution process</li>
                    <li>Mediation procedures</li>
                    <li>Contract modification process</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Performance Monitoring & Evaluation */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-green-900/40 to-slate-800 p-5 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white">Performance Monitoring & Evaluation</h3>
              </div>
              <div className="p-5 text-gray-300">
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">KPI Framework</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Joint success metrics</li>
                    <li>Individual partner objectives</li>
                    <li>Balanced scorecard approach</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Review Cadence</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Quarterly business reviews</li>
                    <li>Annual strategic review</li>
                    <li>Continuous improvement process</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Adaptation Mechanisms</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Changing market conditions response</li>
                    <li>Partnership evolution framework</li>
                    <li>Scope adjustment procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Enhanced Partnership Management */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <CpuChipIcon className="h-6 w-6 mr-2 text-blue-400" />
            AI-Enhanced Partnership Management
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Partner Fit Analysis Engine */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <ServerStackIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Partner Fit Analysis Engine
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-6 text-gray-300">
                  <h4 className="font-medium text-white mb-2">Implementation Details:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Deploy KinOS-based analysis system to evaluate potential partners using historical partnership data</li>
                    <li>Automatically score alignment across all evaluation criteria based on partner information</li>
                    <li>Generate compatibility reports with detailed strengths/weaknesses analysis</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Example Application:</h4>
                  <div className="text-gray-300 font-mono text-sm">
                    <p className="mb-1">Partner: HealthTech Solutions Inc.</p>
                    <p className="mb-1">Vertical Alignment: KinOS Health (94% match)</p>
                    <p className="mb-1">Technology Compatibility: High (87%)</p>
                    <p className="mb-1">Cultural Fit: Medium (72%)</p>
                    <p className="mb-1">Key Strengths: Healthcare data expertise, Complementary market access</p>
                    <p>Key Concerns: Differing approaches to data privacy, Overlapping product features</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Integration Feasibility Assessment */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <ChartBarIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Integration Feasibility Assessment
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-6 text-gray-300">
                  <h4 className="font-medium text-white mb-2">Implementation Details:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Create an AI system that analyzes technical documentation from both parties</li>
                    <li>Identify potential integration challenges and requirements</li>
                    <li>Estimate integration timelines and resource needs based on historical projects</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Example Output:</h4>
                  <div className="text-gray-300 font-mono text-sm">
                    <p className="mb-1">Integration Complexity Score: Medium-High (68/100)</p>
                    <p className="mb-1">Estimated Integration Time: 14-16 weeks</p>
                    <p className="mb-2">Critical Requirements:</p>
                    <p className="mb-1 pl-3">- API authentication harmonization</p>
                    <p className="mb-1 pl-3">- Data transformation layer development</p>
                    <p className="mb-1 pl-3">- Compliance with HIPAA requirements for data exchange</p>
                    <p className="mb-2">Resource Requirements:</p>
                    <p className="mb-1 pl-3">- 2 backend engineers (full-time)</p>
                    <p className="mb-1 pl-3">- 1 security specialist (part-time)</p>
                    <p className="pl-3">- 1 data architect (part-time)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partnership Health Monitoring System */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <PresentationChartLineIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Partnership Health Monitoring System
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-6 text-gray-300">
                  <h4 className="font-medium text-white mb-2">Implementation Details:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Implement ongoing monitoring of partnership KPIs using KinOS analytics</li>
                    <li>Automatically detect early warning signs of partnership issues</li>
                    <li>Generate proactive recommendations for relationship improvement</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Dashboard Example:</h4>
                  <div className="text-gray-300 font-mono text-sm">
                    <p className="mb-1">Partnership Health: 82% (Declining from 87% last quarter)</p>
                    <p className="mb-2">Alert Areas:</p>
                    <p className="mb-1 pl-3">- Communication frequency decreased by 32%</p>
                    <p className="mb-1 pl-3">- Project milestone delays increased by 15%</p>
                    <p className="mb-1 pl-3">- Customer satisfaction scores for joint offering trending down</p>
                    <p className="mb-2">Recommendations:</p>
                    <p className="mb-1 pl-3">- Schedule executive alignment session</p>
                    <p className="mb-1 pl-3">- Review and adjust implementation timeline</p>
                    <p className="pl-3">- Conduct joint customer feedback session</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cross-Vertical Opportunity Detection */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <ArrowsPointingOutIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Cross-Vertical Opportunity Detection
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-6 text-gray-300">
                  <h4 className="font-medium text-white mb-2">Implementation Details:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Utilize KinOS pattern recognition to identify potential expansion opportunities</li>
                    <li>Analyze partnership data across verticals to find synergies</li>
                    <li>Suggest additional collaboration areas based on successful patterns</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Example Insight:</h4>
                  <div className="text-gray-300 font-mono text-sm">
                    <p className="mb-2">Cross-Vertical Opportunity Detected:</p>
                    <p className="mb-2">The integration patterns from your FinTech partner (KinOS Finance) show 78% compatibility with potential applications in KinOS Supply Chain.</p>
                    <p>Recommended Action: Explore expanded partnership to include supply chain finance offerings with current partner.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies & Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-400" />
            Case Studies & Best Practices
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Successful Partnership Case Study */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-green-900/30 to-slate-800 p-5 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Successful Partnership: KinOS Health + Medical Data Provider</h3>
              </div>
              <div className="p-6 text-gray-300">
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">Partnership Overview:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Integration with leading healthcare data provider to enhance TherapyKin's clinical support capabilities</li>
                    <li>Expanded KinOS's access to anonymized medical research data</li>
                    <li>Created joint go-to-market strategy for mental health providers</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">Key Success Factors:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Clear data sharing protocols established from the outset</li>
                    <li>Phased implementation approach with defined success metrics</li>
                    <li>Regular executive sponsor meetings to address strategic alignment</li>
                    <li>Technical teams embedded with each other during critical integration phases</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Measurable Outcomes:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/40 p-3 rounded-lg text-center">
                      <div className="text-blue-400 font-bold text-2xl">47%</div>
                      <div className="text-sm">improvement in diagnostic suggestions</div>
                    </div>
                    <div className="bg-slate-700/40 p-3 rounded-lg text-center">
                      <div className="text-blue-400 font-bold text-2xl">3x</div>
                      <div className="text-sm">increase in addressable market</div>
                    </div>
                    <div className="bg-slate-700/40 p-3 rounded-lg text-center">
                      <div className="text-blue-400 font-bold text-2xl">28%</div>
                      <div className="text-sm">reduction in integration timeline</div>
                    </div>
                    <div className="bg-slate-700/40 p-3 rounded-lg text-center">
                      <div className="text-blue-400 font-bold text-xl">2</div>
                      <div className="text-sm">new features jointly developed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lessons Learned */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700">
              <div className="bg-gradient-to-r from-amber-900/30 to-slate-800 p-5 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Lessons Learned: Distribution Partnership Challenges</h3>
              </div>
              <div className="p-6 text-gray-300">
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">Partnership Overview:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Attempted distribution partnership with enterprise software reseller for KinOS Productivity</li>
                    <li>Goal to accelerate enterprise adoption and reduce sales cycle</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-white mb-2">Key Challenges Encountered:</h4>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Misalignment on sales compensation structure</li>
                    <li>Insufficient product training for partner sales team</li>
                    <li>Competing priorities in partner's product portfolio</li>
                    <li>Unclear decision rights on customer implementation approach</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Corrective Actions & Learnings:</h4>
                  <div className="space-y-3">
                    <div className="bg-slate-700/40 p-3 rounded-lg">
                      <div className="font-medium text-white">Developed comprehensive partner enablement program</div>
                    </div>
                    <div className="bg-slate-700/40 p-3 rounded-lg">
                      <div className="font-medium text-white">Established clear success metrics before partnership launch</div>
                    </div>
                    <div className="bg-slate-700/40 p-3 rounded-lg">
                      <div className="font-medium text-white">Created executive alignment scorecard for quarterly review</div>
                    </div>
                    <div className="bg-slate-700/40 p-3 rounded-lg">
                      <div className="font-medium text-white">Implemented detailed customer journey mapping with partner responsibility matrix</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Toolkit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ClipboardDocumentCheckIcon className="h-6 w-6 mr-2 text-blue-400" />
            Implementation Toolkit
          </h2>

          <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-900/30 to-slate-800 p-5 border-b border-slate-700">
              <h3 className="text-xl font-semibold text-white">Partnership Evaluation Scorecard Template</h3>
            </div>
            <div className="p-6">
              <p className="mb-6 text-gray-300">
                <strong className="text-white">Instructions:</strong> Rate each criterion on a scale of 1-5, then multiply by the weighted percentage to calculate the weighted score. Add all weighted scores for a total partnership evaluation score.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-slate-700/50 border-b border-slate-600">
                      <th className="py-3 px-4 text-left text-white">Category</th>
                      <th className="py-3 px-4 text-left text-white">Criteria</th>
                      <th className="py-3 px-4 text-left text-white">Weight</th>
                      <th className="py-3 px-4 text-left text-white">Raw Score (1-5)</th>
                      <th className="py-3 px-4 text-left text-white">Weighted Score</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4 font-medium" rowSpan={5}>Strategic</td>
                      <td className="py-3 px-4">Mission Compatibility</td>
                      <td className="py-3 px-4">15%</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Market Strategy</td>
                      <td className="py-3 px-4">20%</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Growth Trajectory</td>
                      <td className="py-3 px-4">15%</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Risk Alignment</td>
                      <td className="py-3 px-4">10%</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Long-term Vision</td>
                      <td className="py-3 px-4">10%</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    
                    {/* Add more rows for Technical, Operational and Commercial categories */}
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4 font-medium" rowSpan={5}>Technical</td>
                      <td className="py-3 px-4">Technology Stack</td>
                      <td className="py-3 px-4">20%</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-4">Data Exchange</td>
                      <td className="py-3 px-4">15%</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 bg-slate-700/30 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Score Interpretation:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li className="flex items-start">
                    <span className="text-green-400 font-bold mr-2">90-100:</span>
                    <span>Exceptional fit - prioritize immediately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">80-89:</span>
                    <span>Strong fit - proceed with standard process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 font-bold mr-2">70-79:</span>
                    <span>Good fit - proceed with specific risk mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 font-bold mr-2">60-69:</span>
                    <span>Moderate fit - consider redesigning partnership scope</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 font-bold mr-2">Below 60:</span>
                    <span>Poor fit - not recommended to proceed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-900/30 to-slate-800 p-5 border-b border-slate-700">
              <h3 className="text-xl font-semibold text-white">Partnership Implementation Checklist</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Pre-Implementation
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Complete legal review and contract finalization</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Establish joint implementation team</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Develop detailed project plan with milestones</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Create communication plan and cadence</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Define escalation protocols</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center">
                    <ServerStackIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Technical Implementation
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Complete technical requirements documentation</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Establish development environments</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Create data exchange protocols</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Develop testing and QA plan</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Define release management process</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center">
                    <PresentationChartLineIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Go-to-Market Preparation
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Align on messaging and positioning</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Develop joint marketing materials</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Create sales enablement resources</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Establish lead routing process</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Define customer support handoff procedures</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-4 flex items-center">
                    <ArrowPathIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Post-Launch Management
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Schedule regular business reviews</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Implement performance tracking dashboard</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Create customer feedback collection process</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Develop joint account planning process</span>
                    </div>
                    <div className="flex items-center p-2 rounded-md bg-slate-700/30">
                      <input type="checkbox" className="h-4 w-4 mr-3 rounded text-blue-500 bg-slate-600 border-slate-500" />
                      <span>Establish continuous improvement mechanism</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion & Next Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <RocketLaunchIcon className="h-6 w-6 mr-2 text-blue-400" />
            Conclusion & Next Steps
          </h2>

          <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
            <div className="p-6 text-gray-300">
              <p className="mb-6">
                The Partnership Evaluation Matrix provides a comprehensive framework for identifying, evaluating, 
                implementing, and managing strategic partnerships across all KinOS Ventures business units. By applying 
                this structured approach, KinOS can develop partnerships that enhance its technological capabilities, 
                accelerate market penetration, and create sustainable competitive advantages.
              </p>
              
              <h3 className="text-white text-xl font-semibold mb-4">Recommended Next Steps:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 flex">
                  <div className="h-8 w-8 flex-shrink-0 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mr-3">1</div>
                  <div>
                    <h4 className="font-medium text-white">Distribute & Train</h4>
                    <p className="text-sm">Ensure all business unit leaders and partnership managers are trained on the matrix</p>
                  </div>
                </div>
                
                <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 flex">
                  <div className="h-8 w-8 flex-shrink-0 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mr-3">2</div>
                  <div>
                    <h4 className="font-medium text-white">Initial Application</h4>
                    <p className="text-sm">Apply the framework to evaluate current partnership opportunities</p>
                  </div>
                </div>
                
                <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 flex">
                  <div className="h-8 w-8 flex-shrink-0 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mr-3">3</div>
                  <div>
                    <h4 className="font-medium text-white">Feedback Collection</h4>
                    <p className="text-sm">Gather user feedback after initial implementation to refine the process</p>
                  </div>
                </div>
                
                <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 flex">
                  <div className="h-8 w-8 flex-shrink-0 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mr-3">4</div>
                  <div>
                    <h4 className="font-medium text-white">AI Enhancement</h4>
                    <p className="text-sm">Implement the AI-powered tools in phases, starting with the Partner Fit Analysis Engine</p>
                  </div>
                </div>
                
                <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600 flex">
                  <div className="h-8 w-8 flex-shrink-0 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mr-3">5</div>
                  <div>
                    <h4 className="font-medium text-white">Quarterly Review</h4>
                    <p className="text-sm">Schedule quarterly reviews of partnership performance against established metrics</p>
                  </div>
                </div>
              </div>
              
              <p className="mt-6">
                By following this framework, KinOS Ventures will establish consistent, effective partnerships that 
                support its multi-vertical expansion strategy while maintaining alignment with its core technological foundations.
              </p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <UserGroupIcon className="h-6 w-6 mr-2 text-blue-400" />
            Related Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedResources.map((resource) => (
              <Link 
                href={resource.url}
                key={resource.id}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg hover:bg-slate-750 hover:border-slate-600 transition-all duration-200 group"
              >
                <div className="p-5">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h3>
                  <div className="text-gray-400 flex items-center text-sm mt-4">
                    <DocumentTextIcon className="h-4 w-4 mr-2" />
                    <span>Related Resource</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default PartnershipEvaluationMatrix