'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  RocketLaunchIcon, 
  ClockIcon, 
  PresentationChartLineIcon,
  LightBulbIcon, 
  DocumentTextIcon,
  BeakerIcon,
  ArrowPathIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  ServerIcon
} from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

const InnovationIncentiveStructurePage = () => {
  // Array of related resources
  const relatedResources = [
    {
      id: 'cross-vertical-feature-implementation',
      title: 'Cross-Vertical Feature Implementation',
      description: 'System for deploying core capabilities across different products',
      icon: <ArrowPathIcon className="h-6 w-6" />
    },
    {
      id: 'technology-unification-principles',
      title: 'Technology Unification Principles',
      description: 'Guidelines for maintaining a cohesive technology core across diverse applications',
      icon: <ServerIcon className="h-6 w-6" />
    },
    {
      id: 'kinos-knowledge-transfer-protocol',
      title: 'KinOS Knowledge Transfer Protocol',
      description: 'Systems for sharing insights and learnings across teams and verticals',
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />
    },
    {
      id: 'vertical-performance-evaluation',
      title: 'Vertical Performance Evaluation',
      description: 'How to assess the health and growth potential of different business lines',
      icon: <ChartBarIcon className="h-6 w-6" />
    },
    {
      id: 'talent-acquisition-development',
      title: 'Talent Acquisition & Development',
      description: 'Principles for building specialized teams with shared core values',
      icon: <UserGroupIcon className="h-6 w-6" />
    },
    {
      id: 'product-development-lifecycle',
      title: 'Product Development Lifecycle',
      description: 'Standardized process from concept to launch across all verticals',
      icon: <ComputerDesktopIcon className="h-6 w-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Resource Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Innovation Incentive Structure
              </h1>
              <p className="mt-3 text-xl text-gray-300 max-w-3xl">
                A system that incentivizes and rewards innovations that benefit multiple verticals or advance our core technology through both monetary and non-monetary recognition.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8">
              <Image 
                src="/categories/Culture_Talent/innovation-incentive-structure.png"
                alt="Innovation Incentive Structure"
                width={240}
                height={240}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Executive Summary */}
            <div className="mb-10 bg-slate-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <DocumentTextIcon className="h-6 w-6 mr-2 text-blue-400" />
                Executive Summary
              </h2>
              <p className="text-gray-300">
                The Innovation Incentive Structure is a comprehensive framework designed to foster, recognize, and reward innovation across KinOS Ventures' ecosystem of vertical business units. This structure leverages our unified technology core while encouraging specialized applications that drive business growth. It establishes clear mechanisms for allocating innovation resources, evaluating innovation impact, and rewarding contributions that advance both vertical-specific goals and cross-vertical capabilities.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-3">Key Benefits:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <RocketLaunchIcon className="h-5 w-5 text-blue-400 mt-0.5 mr-2" />
                      <p className="text-gray-200">Accelerates cross-vertical intelligence sharing</p>
                    </div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <ArrowPathIcon className="h-5 w-5 text-blue-400 mt-0.5 mr-2" />
                      <p className="text-gray-200">Reduces redundant innovation efforts</p>
                    </div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <ChartBarIcon className="h-5 w-5 text-blue-400 mt-0.5 mr-2" />
                      <p className="text-gray-200">Creates clear pathways for scaling successful innovations</p>
                    </div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <BuildingOfficeIcon className="h-5 w-5 text-blue-400 mt-0.5 mr-2" />
                      <p className="text-gray-200">Establishes transparent mechanisms for resource allocation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Innovation Principles */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <SparklesIcon className="h-6 w-6 mr-2 text-blue-400" />
                Core Innovation Principles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800 rounded-lg shadow-md p-5 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Innovation Philosophy</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Cross-vertical value creation receives enhanced recognition</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Balanced portfolio of incremental and exploratory research</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Democratic process with ideas evaluated on merit</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Focus on measurable innovation impact</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg shadow-md p-5 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Innovation Types</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Core technology innovations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Vertical-specific innovations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Cross-vertical innovations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Process innovations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Business model innovations</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg shadow-md p-5 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Strategic Alignment</h3>
                  <p className="text-gray-300 mb-2">All innovation initiatives must align with:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Overarching business objectives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Strategic priorities of affected verticals</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Technology unification principles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-0 flex-1">
                        <p>Long-term competitive advantage</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Innovation Time Allocation */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ClockIcon className="h-6 w-6 mr-2 text-blue-400" />
                Innovation Time Allocation
              </h2>
              
              <div className="bg-slate-800 rounded-xl p-6 shadow-md mb-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">20% Innovation Time Policy</h3>
                <p className="text-gray-300 mb-4">All technical team members across KinOS Ventures receive dedicated innovation time:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <p className="text-lg font-medium text-white">Engineers</p>
                    <p className="text-3xl font-bold text-blue-400">20%</p>
                    <p className="text-gray-300">One day per week</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <p className="text-lg font-medium text-white">Data Scientists</p>
                    <p className="text-3xl font-bold text-blue-400">25%</p>
                    <p className="text-gray-300">One day plus per week</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <p className="text-lg font-medium text-white">Product Managers</p>
                    <p className="text-3xl font-bold text-blue-400">15%</p>
                    <p className="text-gray-300">~6 hours per week</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <p className="text-lg font-medium text-white">Designers</p>
                    <p className="text-3xl font-bold text-blue-400">15%</p>
                    <p className="text-gray-300">~6 hours per week</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <p className="text-lg font-medium text-white">Vertical Leaders</p>
                    <p className="text-3xl font-bold text-blue-400">10%</p>
                    <p className="text-gray-300">~4 hours per week</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Quarterly Innovation Sprints</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-800 text-white text-sm font-medium">F</span>
                      </div>
                      <div className="ml-3">
                        <p><span className="font-medium text-white">Frequency:</span> Once per quarter</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-800 text-white text-sm font-medium">D</span>
                      </div>
                      <div className="ml-3">
                        <p><span className="font-medium text-white">Duration:</span> Five consecutive business days</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-800 text-white text-sm font-medium">P</span>
                      </div>
                      <div className="ml-3">
                        <p><span className="font-medium text-white">Participation:</span> Cross-functional teams</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-800 text-white text-sm font-medium">F</span>
                      </div>
                      <div className="ml-3">
                        <p><span className="font-medium text-white">Focus:</span> Rotating themes aligned with strategy</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-800 text-white text-sm font-medium">D</span>
                      </div>
                      <div className="ml-3">
                        <p><span className="font-medium text-white">Deliverables:</span> Working prototypes or defined proposals</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Innovation Time Governance</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex">
                      <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Innovation time tracked through Innovation Portal</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Team members must document outcomes</span>
                    </li>
                    <li className="flex">
                      <XMarkIcon className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                      <span>Unused time does not roll over</span>
                    </li>
                    <li className="flex">
                      <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Managers evaluated on team's effective use</span>
                    </li>
                    <li className="flex">
                      <DocumentTextIcon className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      <span>Temporary exemptions require VP-level approval</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Internal Innovation Pitch Process */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <PresentationChartLineIcon className="h-6 w-6 mr-2 text-blue-400" />
                Internal Innovation Pitch Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Innovation Portal</h3>
                  <p className="text-gray-300 mb-3">Centralized platform for submitting, tracking, and collaborating on innovation ideas</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <CheckIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Standardized pitch template</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <CheckIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Collaboration tools</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <CheckIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Voting and feedback</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <CheckIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Resource request workflows</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Pitch Requirements</h3>
                  <p className="text-gray-300 mb-3">All innovation pitches must include:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <DocumentTextIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Problem statement</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <LightBulbIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Proposed solution</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <CurrencyDollarIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Value proposition</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <ClockIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Implementation requirements</span>
                    </li>
                    <li className="flex items-center">
                      <div className="rounded-full bg-blue-900 p-1 mr-2">
                        <ChartBarIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>Success metrics</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Review Process</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="border-l-2 border-blue-500 pl-3">
                      <p className="font-medium text-white">Weekly Innovation Triage</p>
                      <p className="text-sm">Initial review of new submissions (30 min)</p>
                    </li>
                    <li className="border-l-2 border-blue-500 pl-3">
                      <p className="font-medium text-white">Monthly Innovation Council</p>
                      <p className="text-sm">Formal pitch evaluation (2 hours)</p>
                    </li>
                    <li className="border-l-2 border-blue-500 pl-3">
                      <p className="font-medium text-white">Quarterly Innovation Showcase</p>
                      <p className="text-sm">Public demonstration of funded innovations</p>
                    </li>
                    <li className="border-l-2 border-blue-500 pl-3">
                      <p className="font-medium text-white">Decision Criteria</p>
                      <p className="text-sm">Documented framework with weighted scoring</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Innovation Funding Mechanisms */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CurrencyDollarIcon className="h-6 w-6 mr-2 text-blue-400" />
                Innovation Funding Mechanisms
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Innovation Fund Structure</h3>
                  
                  <div className="mb-4 bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-1">Central Innovation Fund</h4>
                    <p className="text-gray-300 text-sm mb-2">5% of annual operating budget</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Allocated quarterly based on priorities</li>
                      <li>• Managed by Innovation Council</li>
                      <li>• Formal application process for resources</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-1">Rapid Exploration Fund</h4>
                    <p className="text-gray-300 text-sm mb-2">Fast-track for small experiments</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Under $5,000 per project</li>
                      <li>• 48-hour decision timeline</li>
                      <li>• Minimal documentation requirements</li>
                      <li>• Managed by vertical technical leads</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Resource Allocation Model</h3>
                  <p className="text-gray-300 mb-3">Resources are allocated based on a weighted scoring system:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-1/2">
                        <span className="text-white">Strategic alignment</span>
                      </div>
                      <div className="w-1/2 bg-slate-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <span className="ml-2 text-white">25%</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-1/2">
                        <span className="text-white">Cross-vertical applicability</span>
                      </div>
                      <div className="w-1/2 bg-slate-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span className="ml-2 text-white">20%</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-1/2">
                        <span className="text-white">Technical feasibility</span>
                      </div>
                      <div className="w-1/2 bg-slate-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="ml-2 text-white">15%</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-1/2">
                        <span className="text-white">Market potential</span>
                      </div>
                      <div className="w-1/2 bg-slate-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="ml-2 text-white">15%</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-1/2">
                        <span className="text-white">Team capability</span>
                      </div>
                      <div className="w-1/2 bg-slate-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <span className="ml-2 text-white">10%</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-1/2">
                        <span className="text-white">Innovation degree</span>
                      </div>
                      <div className="w-1/2 bg-slate-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <span className="ml-2 text-white">10%</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-1/2">
                        <span className="text-white">Time to implementation</span>
                      </div>
                      <div className="w-1/2 bg-slate-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                      <span className="ml-2 text-white">5%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 shadow-md border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Stage-Gated Funding Approach</h3>
                <p className="text-gray-300 mb-4">Each stage requires demonstration of success metrics to unlock the next level of funding.</p>
                
                <div className="relative">
                  <div className="absolute left-4 h-full w-0.5 bg-blue-500"></div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-2 -top-1">
                      <div className="h-6 w-6 rounded-full border-4 border-blue-500 bg-slate-800"></div>
                    </div>
                    <h4 className="text-lg font-medium text-white">Exploration Stage</h4>
                    <p className="text-gray-300">Small funding for concept validation (1-4 weeks)</p>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-2 -top-1">
                      <div className="h-6 w-6 rounded-full border-4 border-blue-500 bg-slate-800"></div>
                    </div>
                    <h4 className="text-lg font-medium text-white">Prototype Stage</h4>
                    <p className="text-gray-300">Medium funding for working prototype (1-2 months)</p>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-2 -top-1">
                      <div className="h-6 w-6 rounded-full border-4 border-blue-500 bg-slate-800"></div>
                    </div>
                    <h4 className="text-lg font-medium text-white">Pilot Stage</h4>
                    <p className="text-gray-300">Larger funding for limited deployment (2-3 months)</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-2 -top-1">
                      <div className="h-6 w-6 rounded-full border-4 border-blue-500 bg-slate-800"></div>
                    </div>
                    <h4 className="text-lg font-medium text-white">Scaling Stage</h4>
                    <p className="text-gray-300">Significant funding for full implementation (3+ months)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recognition and Reward Systems */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <SparklesIcon className="h-6 w-6 mr-2 text-blue-400" />
                Recognition and Reward Systems
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Monetary Incentives</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-2">Innovation Bonuses</h4>
                    <ul className="text-gray-300 space-y-1 text-sm mb-3">
                      <li>• Quarterly bonus pool tied to outcomes</li>
                      <li>• Additional multiplier for cross-vertical innovations</li>
                      <li>• Performance evaluation credit</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-2">Patent and IP Rewards</h4>
                    <div className="space-y-2">
                      <div className="bg-slate-700 rounded p-2 flex justify-between">
                        <span className="text-gray-300">Patent filing</span>
                        <span className="text-white font-medium">$5,000</span>
                      </div>
                      <div className="bg-slate-700 rounded p-2 flex justify-between">
                        <span className="text-gray-300">Patent grant</span>
                        <span className="text-white font-medium">$10,000</span>
                      </div>
                      <div className="bg-slate-700 rounded p-2 flex justify-between">
                        <span className="text-gray-300">Revenue royalty</span>
                        <span className="text-white font-medium">3%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Non-Monetary Recognition</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-2">Innovation Leaderboard</h4>
                    <ul className="text-gray-300 space-y-1 text-sm mb-3">
                      <li>• Public recognition of top innovators</li>
                      <li>• Points for submissions and implementations</li>
                      <li>• Quarterly and annual awards</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-2">Career Advancement</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Innovation track in career framework</li>
                      <li>• "Distinguished Innovator" designation</li>
                      <li>• Priority for advanced training</li>
                      <li>• Innovation sabbaticals (1-month paid time after 3 years)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Team-Based Incentives</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-2">Vertical Innovation Competition</h4>
                    <ul className="text-gray-300 space-y-1 text-sm mb-3">
                      <li>• Quarterly challenge between business units</li>
                      <li>• Metrics include implementation rate and impact</li>
                      <li>• Winning team receives additional funding and team celebration budget</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-2">Cross-Vertical Collaboration Bonus</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Special recognition for innovations that transcend boundaries</li>
                      <li>• Joint rewards for teams that collaborate</li>
                      <li>• Featured placement in company communications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI-Powered Innovation Support Tools */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ComputerDesktopIcon className="h-6 w-6 mr-2 text-blue-400" />
                AI-Powered Innovation Support Tools
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <div className="h-12 w-12 rounded-lg bg-blue-900 mb-4 flex items-center justify-center">
                    <BoltIcon className="h-7 w-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">KinOS Innovation Assistant</h3>
                  <p className="text-gray-300 mb-3">AI-powered innovation assistant that enhances ideation and development.</p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Analyzes ideas for novelty</li>
                    <li>• Identifies cross-vertical applications</li>
                    <li>• Suggests collaborators with relevant expertise</li>
                    <li>• Provides structured feedback</li>
                    <li>• Tracks implementation and measures impact</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <div className="h-12 w-12 rounded-lg bg-blue-900 mb-4 flex items-center justify-center">
                    <LightBulbIcon className="h-7 w-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cross-Vertical Insight Generator</h3>
                  <p className="text-gray-300 mb-3">AI system that identifies patterns and opportunities across verticals.</p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Identifies patterns from cross-vertical data</li>
                    <li>• Generates weekly opportunity briefs</li>
                    <li>• Maps expertise to innovation challenges</li>
                    <li>• Facilitates "innovation matchmaking"</li>
                    <li>• Provides competitive intelligence</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-5 shadow-md border border-slate-700">
                  <div className="h-12 w-12 rounded-lg bg-blue-900 mb-4 flex items-center justify-center">
                    <ChartBarIcon className="h-7 w-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation Impact Measurement</h3>
                  <p className="text-gray-300 mb-3">AI-powered analytics platform that quantifies innovation success.</p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Tracks key performance indicators</li>
                    <li>• Calculates ROI across time horizons</li>
                    <li>• Creates attribution models</li>
                    <li>• Generates impact reports</li>
                    <li>• Predicts long-term value of innovations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Case Study Example */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BeakerIcon className="h-6 w-6 mr-2 text-blue-400" />
                Cross-Vertical Innovation: Case Study
              </h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 shadow-md border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-4">KinOS Adaptive Interface Engine</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Innovation Origin</h4>
                    <p className="text-gray-300 mb-4">
                      A KinOS Productivity team engineer used her 20% time to develop a prototype for an interface that automatically adjusts based on user behavior.
                    </p>
                    
                    <h4 className="text-lg font-medium text-white mb-2">Cross-Vertical Application</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="bg-slate-600 bg-opacity-50 p-3 rounded-lg">
                        <span className="block text-white font-medium">KinOS Health</span>
                        <span className="text-gray-300">Adapting therapeutic interfaces based on patient engagement patterns</span>
                      </li>
                      <li className="bg-slate-600 bg-opacity-50 p-3 rounded-lg">
                        <span className="block text-white font-medium">KinOS Finance</span>
                        <span className="text-gray-300">Personalizing financial dashboard based on investor risk profiles</span>
                      </li>
                      <li className="bg-slate-600 bg-opacity-50 p-3 rounded-lg">
                        <span className="block text-white font-medium">KinOS Education</span>
                        <span className="text-gray-300">Customizing learning interfaces based on student learning styles</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Implementation Process</h4>
                    <ol className="space-y-2 text-gray-300 mb-4">
                      <li className="flex">
                        <span className="mr-2 flex-shrink-0 rounded-full bg-blue-900 h-6 w-6 flex items-center justify-center text-white">1</span>
                        <span>Initial submission through Innovation Portal</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 flex-shrink-0 rounded-full bg-blue-900 h-6 w-6 flex items-center justify-center text-white">2</span>
                        <span>Rapid Exploration Fund approved ($4,000)</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 flex-shrink-0 rounded-full bg-blue-900 h-6 w-6 flex items-center justify-center text-white">3</span>
                        <span>Demo at Monthly Innovation Council</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 flex-shrink-0 rounded-full bg-blue-900 h-6 w-6 flex items-center justify-center text-white">4</span>
                        <span>Cross-vertical working group formed</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 flex-shrink-0 rounded-full bg-blue-900 h-6 w-6 flex items-center justify-center text-white">5</span>
                        <span>Prototype funding approved ($50,000)</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 flex-shrink-0 rounded-full bg-blue-900 h-6 w-6 flex items-center justify-center text-white">6</span>
                        <span>Testing in multiple verticals</span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 flex-shrink-0 rounded-full bg-blue-900 h-6 w-6 flex items-center justify-center text-white">7</span>
                        <span>Feature incorporated into KinOS core</span>
                      </li>
                    </ol>
                    
                    <h4 className="text-lg font-medium text-white mb-2">Rewards Distributed</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between bg-slate-600 bg-opacity-50 p-2 rounded">
                        <span className="text-gray-300">Originating engineer</span>
                        <span className="text-white font-medium">$15,000 + patent bonus</span>
                      </div>
                      <div className="flex justify-between bg-slate-600 bg-opacity-50 p-2 rounded">
                        <span className="text-gray-300">Cross-vertical team</span>
                        <span className="text-white font-medium">$25,000 shared bonus</span>
                      </div>
                      <div className="flex justify-between bg-slate-600 bg-opacity-50 p-2 rounded">
                        <span className="text-gray-300">Verticals</span>
                        <span className="text-white font-medium">Additional funding</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-slate-600 bg-opacity-30 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-white mb-2">Impact Measurement</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">22%</div>
                      <div className="text-gray-300 text-sm">User engagement increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">15%</div>
                      <div className="text-gray-300 text-sm">Training time reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">100%</div>
                      <div className="text-gray-300 text-sm">Adoption across verticals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">2</div>
                      <div className="text-gray-300 text-sm">Patents filed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar content */}
          <div className="lg:col-span-1">
            {/* Related Resources */}
            <div className="bg-slate-800 rounded-xl shadow-md p-6 mb-6 sticky top-6">
              <h2 className="text-xl font-bold text-white mb-4">Related Resources</h2>
              <div className="space-y-4">
                {relatedResources.map((resource) => (
                  <Link 
                    key={resource.id} 
                    href={`/resources/culture-talent/${resource.id}`}
                    className="block group"
                  >
                    <div className="p-4 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition duration-200">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1 text-blue-400">
                          {resource.icon}
                        </div>
                        <div className="ml-3">
                          <h3 className="text-white font-medium group-hover:text-blue-400 transition">
                            {resource.title}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Key Takeaways */}
            <div className="bg-slate-800 rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <LightBulbIcon className="h-5 w-5 mr-2 text-yellow-400" />
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <p className="ml-3 text-gray-300">
                    Dedicated innovation time (15-25%) is allocated to all team members, with clear usage expectations.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <p className="ml-3 text-gray-300">
                    A structured pitch process via the Innovation Portal ensures ideas are evaluated fairly and consistently.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <p className="ml-3 text-gray-300">
                    Innovation funding uses a stage-gated approach with specific success criteria for each level.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">4</span>
                  </div>
                  <p className="ml-3 text-gray-300">
                    Both monetary rewards and non-monetary recognition are used to incentivize innovation.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">5</span>
                  </div>
                  <p className="ml-3 text-gray-300">
                    AI-powered tools enhance the innovation process by identifying opportunities, measuring impact, and facilitating collaboration.
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Quick Access */}
            <div className="bg-slate-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-white mb-4">Quick Access</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition duration-200">
                  <DocumentTextIcon className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-white">Innovation Portal Documentation</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 ml-auto" />
                </a>
                <a href="#" className="flex items-center p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition duration-200">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-white">Innovation Fund Application</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 ml-auto" />
                </a>
                <a href="#" className="flex items-center p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition duration-200">
                  <PresentationChartLineIcon className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-white">Pitch Template & Guidelines</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 ml-auto" />
                </a>
                <a href="#" className="flex items-center p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition duration-200">
                  <UserGroupIcon className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-white">Innovation Council Schedule</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper components
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const XMarkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const BoltIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

export default InnovationIncentiveStructurePage