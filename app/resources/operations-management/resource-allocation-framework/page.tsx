'use client'

import { useState } from 'react'
import { DocumentTextIcon, ChartBarIcon, ScaleIcon, AcademicCapIcon, UserGroupIcon, CogIcon, ArrowPathIcon, CpuChipIcon, ClipboardDocumentListIcon, PresentationChartLineIcon, CalendarIcon, TableCellsIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const ResourceAllocationFrameworkPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const SectionHeader = ({ id, title, icon: Icon }: { id: string, title: string, icon: React.ElementType }) => (
    <div 
      className="flex items-center justify-between cursor-pointer bg-slate-800 hover:bg-slate-700 p-4 rounded-lg mb-2"
      onClick={() => toggleSection(id)}
    >
      <div className="flex items-center space-x-3">
        <Icon className="h-6 w-6 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      {expandedSection === id ? 
        <ChevronUpIcon className="h-5 w-5 text-gray-300" /> : 
        <ChevronDownIcon className="h-5 w-5 text-gray-300" />
      }
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-900 pb-20">
      {/* Header Section */}
      <div className="bg-slate-800 py-12 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Resource Allocation Framework</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                A transparent methodology for distributing limited resources across competing priorities and verticals based on strategic value and performance metrics.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <DocumentTextIcon className="h-20 w-20 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">Executive Summary</h2>
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              The <span className="font-semibold text-white">Resource Allocation Framework</span> provides a systematic, transparent approach for distributing technical and human resources across KinOS Ventures' diverse vertical business units. This framework enables consistent, data-driven decision-making that balances investment between core technology advancement and vertical-specific applications. By establishing clear criteria, processes, and metrics for resource prioritization, this framework ensures optimal resource utilization while maintaining alignment with KinOS Ventures' strategic objectives. In an organization built around a unified technology core serving multiple industry verticals, effective resource allocation is critical to maintaining technological cohesion, maximizing cross-vertical intelligence benefits, and delivering exceptional value across all markets.
            </p>
          </div>
        </div>

        {/* Core Framework Components Section */}
        <SectionHeader id="core-components" title="Core Framework Components" icon={CogIcon} />
        {expandedSection === "core-components" && (
          <div className="mb-12 bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Resource Categorization</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Engineering Resources Card */}
              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <CpuChipIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Engineering Resources
                  </h4>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Core KinOS Engine Team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Vertical-Specific Engineers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Platform Integration Engineers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Research & Innovation Team</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Business Resources Card */}
              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <PresentationChartLineIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Business Resources
                  </h4>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Marketing & User Acquisition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Sales & Account Management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Customer Success & Support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Market Research & Strategy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Financial Resources Card */}
              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <ChartBarIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Financial Resources
                  </h4>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Operating Expenditure Budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Capital Expenditure Budget</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>R&D Investment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Growth Capital</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-6">Allocation Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['ROI Prioritization', 'Strategic Alignment', 'Balanced Portfolio', 'Performance-Based Adjustment', 'Core Technology First', 'Market Validation', 'Cross-Vertical Leverage'].map((principle, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center">
                  <ScaleIcon className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Allocation Methodology Section */}
        <SectionHeader id="allocation-methodology" title="Allocation Methodology" icon={ClipboardDocumentListIcon} />
        {expandedSection === "allocation-methodology" && (
          <div className="mb-12 bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Resource Request Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Process Steps */}
              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Standardized Request Template
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2">
                  <p>• Business case with clear objectives</p>
                  <p>• Quantified resource requirements</p>
                  <p>• Timeline and key milestones</p>
                  <p>• Dependencies on other initiatives</p>
                  <p>• Expected ROI and measurement</p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Review Cadence
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2">
                  <p>• Quarterly strategic review</p>
                  <p>• Monthly tactical adjustment</p>
                  <p>• Emergency allocation process</p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <UserGroupIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Decision Authority Matrix
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2">
                  <p>• Guidelines for approval levels</p>
                  <p>• Expedited processes</p>
                  <p>• Escalation pathways</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-6">Evaluation Criteria</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 h-full">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <ChartBarIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Financial Impact Metrics
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2">
                  <p>• Expected ROI</p>
                  <p>• Revenue Potential</p>
                  <p>• Cost Reduction</p>
                  <p>• Time to Profitability</p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 h-full">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <AcademicCapIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Strategic Value Assessment
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2">
                  <p>• Market Positioning</p>
                  <p>• Platform Enhancement</p>
                  <p>• Cross-Vertical Benefits</p>
                  <p>• Knowledge Generation</p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 h-full">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <ScaleIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Risk Evaluation
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2">
                  <p>• Technical Feasibility</p>
                  <p>• Market Uncertainty</p>
                  <p>• Dependency Analysis</p>
                  <p>• Opportunity Cost</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-6">Scoring and Prioritization Model</h3>
            <div className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
              <p className="text-gray-300 mb-4">Resources are allocated based on a weighted scoring system:</p>
              <div className="bg-slate-700 p-4 rounded mb-6">
                <code className="text-blue-300 font-mono">
                  Overall Score = (Financial Impact × 0.4) + (Strategic Value × 0.3) + (Risk-Adjusted Factor × 0.3)
                </code>
              </div>
              
              <p className="text-white font-semibold mb-2">Example Prioritization Matrix:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-slate-700 rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Initiative</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Financial Impact (40%)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Strategic Value (30%)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Risk-Adjusted (30%)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Overall Score</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600">
                    <tr>
                      <td className="px-4 py-3 text-gray-300">Core Memory System Enhancement</td>
                      <td className="px-4 py-3 text-gray-300">7 (2.8)</td>
                      <td className="px-4 py-3 text-gray-300">9 (2.7)</td>
                      <td className="px-4 py-3 text-gray-300">8 × 0.9 = 7.2 (2.16)</td>
                      <td className="px-4 py-3 text-white font-medium">7.66</td>
                      <td className="px-4 py-3 text-white font-medium">1</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-300">KinOS Health Analytics Feature</td>
                      <td className="px-4 py-3 text-gray-300">8 (3.2)</td>
                      <td className="px-4 py-3 text-gray-300">6 (1.8)</td>
                      <td className="px-4 py-3 text-gray-300">7 × 0.8 = 5.6 (1.68)</td>
                      <td className="px-4 py-3 text-white font-medium">6.68</td>
                      <td className="px-4 py-3 text-white font-medium">2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-300">KinOS Gaming Expansion</td>
                      <td className="px-4 py-3 text-gray-300">9 (3.6)</td>
                      <td className="px-4 py-3 text-gray-300">5 (1.5)</td>
                      <td className="px-4 py-3 text-gray-300">5 × 0.7 = 3.5 (1.05)</td>
                      <td className="px-4 py-3 text-white font-medium">6.15</td>
                      <td className="px-4 py-3 text-white font-medium">3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Core vs. Vertical Balance Section */}
        <SectionHeader id="core-vertical-balance" title="Core vs. Vertical Resource Balance" icon={ScaleIcon} />
        {expandedSection === "core-vertical-balance" && (
          <div className="mb-12 bg-slate-800/50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <CpuChipIcon className="h-6 w-6 mr-2 text-blue-400" />
                  Core Technology Investment
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">•</span>
                    <span><span className="text-white font-medium">Minimum 30% of engineering resources</span> allocated to the core KinOS engine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">•</span>
                    <span><span className="text-white font-medium">Base funding model</span> ensures core capabilities receive consistent investment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">•</span>
                    <span><span className="text-white font-medium">Technology roadmap alignment</span> between core and vertical-specific requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">•</span>
                    <span><span className="text-white font-medium">Capability-driven development</span> prioritizing features that benefit multiple verticals</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <PresentationChartLineIcon className="h-6 w-6 mr-2 text-blue-400" />
                  Vertical-Specific Allocation
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">•</span>
                    <span><span className="text-white font-medium">Market maturity stage</span>: Different resourcing models for exploratory, growth, and mature verticals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">•</span>
                    <span><span className="text-white font-medium">Revenue contribution</span>: Performance-based allocation tied to revenue generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">•</span>
                    <span><span className="text-white font-medium">Growth potential</span>: Forward-looking investment in high-potential markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2">•</span>
                    <span><span className="text-white font-medium">Strategic importance</span>: Some verticals may receive priority based on strategic positioning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <ArrowPathIcon className="h-6 w-6 mr-2 text-blue-400" />
                Balance Management
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-700 p-4 rounded">
                  <p className="text-gray-300"><span className="text-white font-medium">Quarterly portfolio review</span> to assess core vs. vertical resource distribution</p>
                </div>
                <div className="bg-slate-700 p-4 rounded">
                  <p className="text-gray-300"><span className="text-white font-medium">Technology debt tracking</span> to prevent underinvestment in foundation</p>
                </div>
                <div className="bg-slate-700 p-4 rounded">
                  <p className="text-gray-300"><span className="text-white font-medium">Feature contribution system</span> where verticals can fund core enhancements</p>
                </div>
                <div className="bg-slate-700 p-4 rounded">
                  <p className="text-gray-300"><span className="text-white font-medium">Resource exchange program</span> allowing temporary reassignment between verticals</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Performance Monitoring Section */}
        <SectionHeader id="performance-monitoring" title="Performance Monitoring and Reallocation" icon={ChartBarIcon} />
        {expandedSection === "performance-monitoring" && (
          <div className="mb-12 bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Key Performance Indicators</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <ChartBarIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Universal KPIs
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Revenue growth rate</li>
                  <li>• Customer acquisition cost (CAC)</li>
                  <li>• Lifetime value (LTV)</li>
                  <li>• Feature adoption rate</li>
                  <li>• Development velocity</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <PresentationChartLineIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Vertical-Specific KPIs
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Domain-specific conversion metrics</li>
                  <li>• Industry benchmark comparisons</li>
                  <li>• Competitive position indicators</li>
                  <li>• Customer satisfaction scores</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-6">Performance Review Cycle</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 rounded-lg shadow p-5 border border-slate-700">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Monthly Performance Dashboard
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Standardized reporting across verticals</li>
                  <li>• Resource utilization tracking</li>
                  <li>• KPI performance against targets</li>
                  <li>• Variance analysis and explanations</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg shadow p-5 border border-slate-700">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <ChartBarIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Quarterly Deep Dive Reviews
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Comprehensive performance assessment</li>
                  <li>• Resource allocation effectiveness</li>
                  <li>• Adjustment recommendations</li>
                  <li>• Strategic realignment as needed</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg shadow p-5 border border-slate-700">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-blue-400" />
                  Annual Strategic Resource Planning
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Long-term resource allocation strategy</li>
                  <li>• Major initiative prioritization</li>
                  <li>• Core vs. vertical investment balance</li>
                  <li>• Talent acquisition and development plans</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-6">Dynamic Reallocation Triggers</h3>
            <div className="bg-slate-800 rounded-lg shadow border border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Trigger Condition</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-600">
                    <tr>
                      <td className="px-4 py-3 text-gray-300">KPI exceeds target by &gt;20% for 2 consecutive months</td>
                      <td className="px-4 py-3 text-gray-300">Increase resource allocation by 10-25%</td>
                      <td className="px-4 py-3 text-gray-300">KinOS Finance exceeding customer acquisition targets</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-300">KPI falls below target by &gt;20% for 2 consecutive months</td>
                      <td className="px-4 py-3 text-gray-300">Resource review and potential reduction</td>
                      <td className="px-4 py-3 text-gray-300">KinOS Gaming showing weak user engagement</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-300">New market opportunity with projected ROI &gt;50%</td>
                      <td className="px-4 py-3 text-gray-300">Rapid resource mobilization</td>
                      <td className="px-4 py-3 text-gray-300">New healthcare regulation creating opportunity for KinOS Health</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-300">Core technology limitation affecting multiple verticals</td>
                      <td className="px-4 py-3 text-gray-300">Emergency resource redirection</td>
                      <td className="px-4 py-3 text-gray-300">Memory system performance issue affecting user experience</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* AI Integration Section */}
        <SectionHeader id="ai-integration" title="AI Integration for Resource Optimization" icon={CpuChipIcon} />
        {expandedSection === "ai-integration" && (
          <div className="mb-12 bg-slate-800/50 p-6 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg shadow overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <CpuChipIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Resource Allocation Intelligence
                  </h4>
                </div>
                <div className="p-5">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Predictive Resource Modeling based on historical patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Optimization Algorithms for ROI maximization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Anomaly Detection for unusual resource patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Scenario Planning with predictive outcomes</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 bg-slate-700 p-3 rounded">
                    <h5 className="text-sm font-medium text-white mb-2">Implementation Example:</h5>
                    <div className="text-xs text-gray-300 overflow-x-auto">
                      <pre className="font-mono">
{`# Simplified optimization algorithm concept
def optimize_resource_allocation(verticals, 
                               available_resources, 
                               strategic_weights):
    # Initialize with base requirements
    allocation = {v.name: v.base_requirements 
                 for v in verticals}
    
    # Calculate weighted scores
    scores = {v.name: (v.financial_score * 0.4 + 
                      v.strategic_score * 0.3 + 
                      v.risk_adjusted_score * 0.3) 
             for v in verticals}
    
    # Allocate remaining resources
    total_score = sum(scores.values())
    for vertical in verticals:
        allocation[vertical.name] += remaining_resources * 
                                  (scores[vertical.name] / 
                                  total_score)
    
    return allocation`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <ChartBarIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Performance Monitoring Dashboard
                  </h4>
                </div>
                <div className="p-5">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Resource Consumption Tracking in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Cross-Vertical Comparison of metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Efficiency Metrics per unit of value</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Anomaly Alerts for deviations</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 bg-slate-900/50 border border-slate-700 rounded p-4 flex justify-center">
                    <div className="text-white text-center">
                      <ChartBarIcon className="h-20 w-20 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm">Interactive Resource Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <AcademicCapIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Resource Allocation Assistant
                  </h4>
                </div>
                <div className="p-5">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Request Evaluation against historical data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Impact Prediction for allocation decisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Alternative Suggestions for efficient resources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Knowledge Transfer across verticals</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-slate-700 rounded">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <UserGroupIcon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white">Resource Assistant Recommendation:</p>
                        <p className="text-xs text-gray-300 mt-1">
                          "Based on current performance, consider shifting two AI engineers from KinOS Entertainment to KinOS Education for three months to implement a shared technology component."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Implementation and Governance */}
        <SectionHeader id="implementation" title="Implementation and Governance" icon={CogIcon} />
        {expandedSection === "implementation" && (
          <div className="mb-12 bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Implementation Roadmap</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-2">
                  <h4 className="font-semibold text-white">Phase 1: Foundation</h4>
                  <p className="text-xs text-gray-300">Month 1-2</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Establish resource categories</li>
                    <li>• Define evaluation criteria</li>
                    <li>• Create request templates</li>
                    <li>• Set up reporting mechanisms</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-2">
                  <h4 className="font-semibold text-white">Phase 2: Process</h4>
                  <p className="text-xs text-gray-300">Month 3-4</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Train team leads on process</li>
                    <li>• Conduct initial allocation review</li>
                    <li>• Establish governance committee</li>
                    <li>• Develop monitoring dashboard</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-2">
                  <h4 className="font-semibold text-white">Phase 3: AI Enhancement</h4>
                  <p className="text-xs text-gray-300">Month 5-6</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Deploy intelligence system</li>
                    <li>• Integrate with existing tools</li>
                    <li>• Train on historical data</li>
                    <li>• Implement predictive modeling</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-2">
                  <h4 className="font-semibold text-white">Phase 4: Optimization</h4>
                  <p className="text-xs text-gray-300">Month 7-12</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Refine models based on outcomes</li>
                    <li>• Expand scenario planning</li>
                    <li>• Implement reallocation triggers</li>
                    <li>• Develop sharing mechanisms</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-6">Governance Structure</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 rounded-lg shadow overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <UserGroupIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Resource Allocation Committee
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2 text-sm">
                  <p>• CTO, CFO, and heads of verticals</p>
                  <p>• Monthly review meetings</p>
                  <p>• Decision authority on resources</p>
                  <p>• Appeals process for rejected requests</p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <CpuChipIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Technical Resource Council
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2 text-sm">
                  <p>• Engineering leads from all teams</p>
                  <p>• Evaluates technical feasibility</p>
                  <p>• Recommends engineering resources</p>
                  <p>• Identifies shared development</p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow overflow-hidden border border-slate-700">
                <div className="bg-blue-900/30 px-4 py-3">
                  <h4 className="font-semibold text-white flex items-center">
                    <ChartBarIcon className="h-5 w-5 mr-2 text-blue-400" />
                    Strategic Investment Board
                  </h4>
                </div>
                <div className="p-4 text-gray-300 space-y-2 text-sm">
                  <p>• CEO, partners, and strategy leads</p>
                  <p>• Quarterly strategy review</p>
                  <p>• Major investment approval</p>
                  <p>• Long-term resource planning</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">Related Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Vertical Performance Evaluation</h3>
                </div>
                <p className="text-gray-300 mb-4">How to assess the health and growth potential of different business lines</p>
                <a href="/resources/operations-management/vertical-performance-evaluation" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  View Resource
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <TableCellsIcon className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Metrics Standardization Guide</h3>
                </div>
                <p className="text-gray-300 mb-4">Common success measurements applicable across different business units</p>
                <a href="/resources/operations-management/metrics-standardization-guide" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  View Resource
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Organizational Structure Blueprint</h3>
                </div>
                <p className="text-gray-300 mb-4">Defining the relationship between core company and vertical business units</p>
                <a href="/resources/operations-management/organizational-structure-blueprint" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  View Resource
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ResourceAllocationFrameworkPage
