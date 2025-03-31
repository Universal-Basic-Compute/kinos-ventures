'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  ChartBarIcon, 
  CogIcon, 
  DocumentTextIcon, 
  LightBulbIcon, 
  PuzzlePieceIcon,
  ClockIcon,
  UserCircleIcon,
  BeakerIcon,
  ArrowPathIcon,
  BuildingOffice2Icon,
  TableCellsIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const ResourcePage = () => {
  // Related resources data
  const relatedResources = [
    {
      id: "kinos-ventures-manifesto",
      title: "KinOS Ventures Manifesto",
      description: "Core values, mission, and vision defining our approach to AI development",
      icon: <DocumentTextIcon className="w-6 h-6 text-blue-400" />
    },
    {
      id: "organizational-structure-blueprint",
      title: "Organizational Structure Blueprint",
      description: "Defining the relationship between core company and vertical business units",
      icon: <BuildingOffice2Icon className="w-6 h-6 text-blue-400" />
    },
    {
      id: "remote-first-collaboration",
      title: "Remote-First Collaboration Framework",
      description: "Guidelines for effective distributed teamwork and communication",
      icon: <UserGroupIcon className="w-6 h-6 text-blue-400" />
    },
    {
      id: "innovation-incentive-structure",
      title: "Innovation Incentive Structure",
      description: "How cross-vertical innovation is rewarded and encouraged",
      icon: <LightBulbIcon className="w-6 h-6 text-blue-400" />
    },
    {
      id: "kinos-knowledge-transfer-protocol",
      title: "KinOS Knowledge Transfer Protocol",
      description: "Systems for sharing insights and learnings across teams and verticals",
      icon: <ArrowPathIcon className="w-6 h-6 text-blue-400" />
    },
    {
      id: "ai-ethics-responsibility-charter",
      title: "AI Ethics & Responsibility Charter",
      description: "Ethical principles guiding all development and business decisions",
      icon: <BeakerIcon className="w-6 h-6 text-blue-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header Section */}
      <header className="py-16 px-4 md:px-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-slate-700 p-3 rounded-lg">
              <UserGroupIcon className="w-10 h-10 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Talent Acquisition & Development Strategy</h1>
              <p className="text-xl text-gray-300">Principles for building specialized teams with shared core values</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Introduction Card */}
        <div className="bg-slate-800 rounded-xl p-6 mb-12 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <DocumentTextIcon className="w-6 h-6 mr-2 text-blue-400" />
            Executive Summary
          </h2>
          <p className="text-gray-300 mb-4">
            The Talent Acquisition & Development Strategy serves as the foundation for building specialized teams 
            that can drive KinOS Ventures' success across multiple verticals while maintaining a cohesive culture. 
            This document outlines our approach to attracting, developing, and retaining talent that combines deep 
            vertical expertise with collaborative mindsets capable of leveraging our unified technology core.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Key Focus Areas:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                <PuzzlePieceIcon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Balanced Expertise</h4>
                  <p className="text-sm text-gray-300">Between vertical specialization and cross-functional collaboration</p>
                </div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                <UserCircleIcon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Cultural Alignment</h4>
                  <p className="text-sm text-gray-300">With our core values while embracing diverse perspectives</p>
                </div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                <ArrowPathIcon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Career Mobility</h4>
                  <p className="text-sm text-gray-300">That allows for both vertical depth and horizontal growth</p>
                </div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                <CogIcon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">AI-Enhanced Processes</h4>
                  <p className="text-sm text-gray-300">That reflect our technological capabilities</p>
                </div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                <ArrowPathIcon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Knowledge Transfer</h4>
                  <p className="text-sm text-gray-300">Mechanisms that preserve institutional wisdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Talent Philosophy Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
            Talent Philosophy and Guiding Principles
          </h2>
          
          <div className="bg-slate-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Core Talent Philosophy</h3>
            <p className="text-gray-300">
              Our talent strategy is built on the belief that exceptional outcomes emerge when deep domain expertise
              intersects with cross-functional collaboration. As stated in our KinOS Ventures Manifesto, we view talent
              as an extension of our mission "to create AI systems that accelerate human potential across diverse domains."
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-4">Guiding Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 rounded-lg p-5 shadow-md">
              <div className="flex items-start mb-3">
                <PuzzlePieceIcon className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <h4 className="text-lg font-medium text-white">Balance Specialization with Versatility</h4>
              </div>
              <ul className="text-gray-300 ml-9 space-y-2">
                <li className="list-disc">Value both vertical-specific expertise and cross-domain thinking</li>
                <li className="list-disc">Reward specialization while encouraging exploration beyond core domains</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-5 shadow-md">
              <div className="flex items-start mb-3">
                <UserGroupIcon className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <h4 className="text-lg font-medium text-white">Cultural Cohesion with Cognitive Diversity</h4>
              </div>
              <ul className="text-gray-300 ml-9 space-y-2">
                <li className="list-disc">Hire for alignment with core values while seeking diverse perspectives</li>
                <li className="list-disc">Create teams with varied thinking styles, backgrounds, and approaches</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-5 shadow-md">
              <div className="flex items-start mb-3">
                <BuildingOffice2Icon className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <h4 className="text-lg font-medium text-white">Remote-First Talent Approach</h4>
              </div>
              <ul className="text-gray-300 ml-9 space-y-2">
                <li className="list-disc">Leverage global talent pools without geographic constraints</li>
                <li className="list-disc">Design processes that support asynchronous collaboration and work-life integration</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-5 shadow-md">
              <div className="flex items-start mb-3">
                <AcademicCapIcon className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <h4 className="text-lg font-medium text-white">Continuous Learning Organization</h4>
              </div>
              <ul className="text-gray-300 ml-9 space-y-2">
                <li className="list-disc">Foster a culture where learning is embedded in daily work</li>
                <li className="list-disc">Support both formal and informal knowledge acquisition</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-5 shadow-md">
              <div className="flex items-start mb-3">
                <ChartBarIcon className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <h4 className="text-lg font-medium text-white">Transparent Career Progression</h4>
              </div>
              <ul className="text-gray-300 ml-9 space-y-2">
                <li className="list-disc">Provide clear advancement paths within and across verticals</li>
                <li className="list-disc">Balance objective criteria with recognition of unique talents</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Talent Acquisition Strategy Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
            Talent Acquisition Strategy
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-900/30 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <DocumentTextIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Talent Identification
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Role Definition Process</h4>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li className="list-disc">Collaborative role design involving vertical leaders and core tech team</li>
                    <li className="list-disc">Standard templates with vertical-specific customization</li>
                    <li className="list-disc">Clear distinction between core and vertical-specific requirements</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Talent Sourcing Channels</h4>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li className="list-disc">Specialized vertical industry networks</li>
                    <li className="list-disc">Technology-focused talent pools</li>
                    <li className="list-disc">Academic partnerships</li>
                    <li className="list-disc">Internal talent pipeline development</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">AI-Enhanced Sourcing Tool</h4>
                  <p className="text-gray-300 text-sm italic">Build a talent identification system using KinOS core technology to scan non-traditional sources, match profiles, identify transferable skills, and reduce bias.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-900/30 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <BriefcaseIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Recruitment Process
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Multi-Stage Assessment</h4>
                  <div className="space-y-3 mt-3">
                    <div className="bg-slate-700 p-3 rounded">
                      <p className="text-white text-sm font-medium">1. Core Values Alignment</p>
                      <p className="text-gray-300 text-xs">Universal across all hires</p>
                    </div>
                    <div className="bg-slate-700 p-3 rounded">
                      <p className="text-white text-sm font-medium">2. Technical/Domain Expertise</p>
                      <p className="text-gray-300 text-xs">Vertical-specific assessment</p>
                    </div>
                    <div className="bg-slate-700 p-3 rounded">
                      <p className="text-white text-sm font-medium">3. Collaborative Capacity</p>
                      <p className="text-gray-300 text-xs">Cross-functional simulation</p>
                    </div>
                    <div className="bg-slate-700 p-3 rounded">
                      <p className="text-white text-sm font-medium">4. Growth Mindset</p>
                      <p className="text-gray-300 text-xs">Adaptability assessment</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Remote-First Interview Process</h4>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li className="list-disc">Asynchronous preliminary assessments</li>
                    <li className="list-disc">Structured video interviews</li>
                    <li className="list-disc">Virtual team collaboration simulations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-900/30 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <UserCircleIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Candidate Experience
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Transparent Communication</h4>
                  <ul className="text-gray-300 space-y-2 ml-5">
                    <li className="list-disc">Clear vertical positioning within KinOS ecosystem</li>
                    <li className="list-disc">Authentic representation of challenges and opportunities</li>
                    <li className="list-disc">Consistent communication touchpoints</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-white mb-2">Vertical-Specific Onboarding</h4>
                  <div className="bg-slate-700 p-3 rounded mt-2">
                    <p className="text-white text-sm font-medium">Example: KinOS Health Developer</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Core technology onboarding</li>
                      <li className="list-disc">Healthcare domain immersion</li>
                      <li className="list-disc">Regulatory compliance training</li>
                      <li className="list-disc">Cross-vertical collaboration protocols</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">AI Onboarding Assistant</h4>
                  <p className="text-gray-300 text-sm">Personalized experience with just-in-time learning resources and automated check-ins during first 90 days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Talent Development Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
            Talent Development Framework
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-900/30 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <ChartBarIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Dual-Track Career Pathways
                </h3>
              </div>
              <div className="p-6">
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1 bg-slate-700 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Vertical Expertise Track</h4>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4">
                      <li className="list-disc">Domain-specific skill development</li>
                      <li className="list-disc">Industry recognition support</li>
                      <li className="list-disc">Subject matter expert designation</li>
                      <li className="list-disc">Vertical leadership paths</li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-slate-700 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Cross-Vertical Track</h4>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4">
                      <li className="list-disc">Cross-functional project leadership</li>
                      <li className="list-disc">Knowledge transfer facilitation</li>
                      <li className="list-disc">Innovation catalyst positions</li>
                      <li className="list-disc">Strategic leadership paths</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-900/30">
                  <h4 className="text-white font-medium mb-2 flex items-center">
                    <SparklesIcon className="w-4 h-4 mr-1 text-blue-400" />
                    Hybrid Development Opportunity
                  </h4>
                  <p className="text-gray-300 text-sm">
                    The "Vertical Ambassador Program" where high-performers spend 3-6 months 
                    embedded in a different vertical business unit while maintaining connections 
                    to their home vertical.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-900/30 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <AcademicCapIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Learning & Development
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Self-Directed Learning Platform</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Personalized learning recommendations</li>
                    <li className="list-disc">On-demand access to content</li>
                    <li className="list-disc">Peer learning networks</li>
                    <li className="list-disc">Recognition for knowledge sharing</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Structured Development Programs</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Technical foundation program</li>
                    <li className="list-disc">Vertical-specific expertise development</li>
                    <li className="list-disc">Leadership development</li>
                    <li className="list-disc">Cross-vertical rotation opportunities</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">AI-Powered Learning Advisor</h4>
                  <p className="text-gray-300 text-sm italic">
                    An AI coach based on the KinOS engine that identifies skill gaps, suggests learning 
                    resources, schedules micro-learning moments, and adapts based on learning patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-blue-900/30 px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <ArrowPathIcon className="w-5 h-5 mr-2 text-blue-400" />
                Knowledge Transfer Mechanisms
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Cross-Vertical Communities</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Structured knowledge-sharing sessions</li>
                    <li className="list-disc">Documentation standards</li>
                    <li className="list-disc">Recognition for contributions</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Mentorship Program</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Cross-vertical mentorship matching</li>
                    <li className="list-disc">Reverse mentoring for specialized knowledge</li>
                    <li className="list-disc">Coaching for vertical transitions</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">KinOS Knowledge Repository</h4>
                  <p className="text-gray-300 text-sm">
                    Leverage the KinOS Knowledge Transfer Protocol to document lessons, 
                    create searchable repositories, generate AI-enhanced summaries, and 
                    maintain living documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Management Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
            Performance Management and Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-900/30 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <ChartBarIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Balanced Performance Framework
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-3">Multi-dimensional Evaluation</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-medium">40%</span>
                      </div>
                      <span className="text-gray-300 text-sm">Vertical-specific metrics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-medium">30%</span>
                      </div>
                      <span className="text-gray-300 text-sm">Cross-vertical collaboration</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-medium">15%</span>
                      </div>
                      <span className="text-gray-300 text-sm">Core value embodiment</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mr-3">
                        <span className="text-blue-400 font-medium">15%</span>
                      </div>
                      <span className="text-gray-300 text-sm">Innovation and improvement</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">AI-Enhanced Performance Insights</h4>
                  <p className="text-gray-300 text-sm">
                    Dashboard that aggregates performance data, identifies patterns, 
                    generates improvement recommendations, and provides coaching suggestions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-900/30 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <SparklesIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Recognition and Rewards
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Compensation Philosophy</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Competitive base compensation</li>
                    <li className="list-disc">Performance bonuses for individual and cross-vertical achievements</li>
                    <li className="list-disc">Equity participation model</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Non-Monetary Recognition</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Peer-to-peer recognition platform</li>
                    <li className="list-disc">"Cross-Vertical Collaborator" awards</li>
                    <li className="list-disc">Annual "KinOS Pioneer" recognition</li>
                    <li className="list-disc">Innovation incentives and public recognition</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-900/30 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Retention Strategy
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Engagement Monitoring</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Regular structured stay interviews</li>
                    <li className="list-disc">Anonymous pulse surveys</li>
                    <li className="list-disc">Predictive analytics for retention risks</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Growth-Focused Approach</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Proactive career planning conversations</li>
                    <li className="list-disc">Internal mobility options</li>
                    <li className="list-disc">Customized retention plans</li>
                    <li className="list-disc">Work environment optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Integration Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
            AI Integration for Talent Excellence
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/80 rounded-xl overflow-hidden shadow-lg border border-blue-900/30">
              <div className="bg-blue-900/40 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <TableCellsIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Talent Analytics Platform
                </h3>
              </div>
              <div className="p-6">
                <h4 className="text-white font-medium mb-3">System Components:</h4>
                
                <div className="space-y-4">
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Workforce Planning Model</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Predictive modeling of talent needs</li>
                      <li className="list-disc">Scenario planning for growth</li>
                      <li className="list-disc">Skills gap analysis with recommendations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Talent Marketplace</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Internal opportunity matching</li>
                      <li className="list-disc">Cross-vertical project staffing</li>
                      <li className="list-disc">Career path recommendation engine</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Performance Intelligence</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Pattern recognition for high-performers</li>
                      <li className="list-disc">Team composition optimization</li>
                      <li className="list-disc">Early intervention alerts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/80 rounded-xl overflow-hidden shadow-lg border border-blue-900/30">
              <div className="bg-blue-900/40 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <AcademicCapIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Talent Development Acceleration
                </h3>
              </div>
              <div className="p-6">
                <h4 className="text-white font-medium mb-3">System Components:</h4>
                
                <div className="space-y-4">
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Personalized Learning Pathways</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Adaptive content recommendation</li>
                      <li className="list-disc">Skill development tracking</li>
                      <li className="list-disc">Just-in-time learning delivery</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Virtual Coaching Assistant</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">AI-driven coaching conversations</li>
                      <li className="list-disc">Practice scenarios for skill development</li>
                      <li className="list-disc">Feedback on communication styles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Knowledge Graph Builder</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Maps expertise across the organization</li>
                      <li className="list-disc">Identifies connection opportunities</li>
                      <li className="list-disc">Suggests knowledge transfer opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/80 rounded-xl overflow-hidden shadow-lg border border-blue-900/30">
              <div className="bg-blue-900/40 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <BriefcaseIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Recruitment Intelligence Suite
                </h3>
              </div>
              <div className="p-6">
                <h4 className="text-white font-medium mb-3">System Components:</h4>
                
                <div className="space-y-4">
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Candidate Matching Engine</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Multi-factor matching beyond keywords</li>
                      <li className="list-disc">Cultural alignment prediction</li>
                      <li className="list-disc">Success potential modeling</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Interview Assistant</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Question recommendation</li>
                      <li className="list-disc">Bias detection in feedback</li>
                      <li className="list-disc">Structured evaluation analysis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/70 p-3 rounded">
                    <p className="text-white text-sm font-medium">Candidate Experience Enhancer</p>
                    <ul className="text-gray-300 text-xs space-y-1 mt-1 ml-4">
                      <li className="list-disc">Personalized communication scheduling</li>
                      <li className="list-disc">Automated follow-ups with tailored content</li>
                      <li className="list-disc">Feedback collection and sentiment analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
            Implementation and Success Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-blue-400" />
                Phased Implementation Plan
              </h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">1</div>
                    <div className="w-0.5 h-full bg-blue-900/30 my-1"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Foundation (Months 1-3)</h4>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4 mt-1">
                      <li className="list-disc">Define standard role descriptions</li>
                      <li className="list-disc">Establish core recruitment processes</li>
                      <li className="list-disc">Implement basic performance framework</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">2</div>
                    <div className="w-0.5 h-full bg-blue-900/30 my-1"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Enhancement (Months 4-6)</h4>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4 mt-1">
                      <li className="list-disc">Deploy AI-enhanced talent tools</li>
                      <li className="list-disc">Launch cross-vertical mentorship program</li>
                      <li className="list-disc">Establish career pathways documentation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white">3</div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Optimization (Months 7-12)</h4>
                    <ul className="text-gray-300 text-sm space-y-1 ml-4 mt-1">
                      <li className="list-disc">Refine processes based on initial feedback</li>
                      <li className="list-disc">Implement advanced analytics for workforce planning</li>
                      <li className="list-disc">Develop predictive retention models</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <ChartBarIcon className="w-5 h-5 mr-2 text-blue-400" />
                Key Performance Indicators
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-700 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Talent Acquisition</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Time-to-hire by vertical and role</li>
                    <li className="list-disc">Quality of hire (6/12 month ratings)</li>
                    <li className="list-disc">Source effectiveness</li>
                    <li className="list-disc">Diversity of candidate pipelines</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Development Effectiveness</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Internal mobility rates</li>
                    <li className="list-disc">Skill acquisition velocity</li>
                    <li className="list-disc">Knowledge sharing participation</li>
                    <li className="list-disc">Internal promotion readiness</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Organizational Health</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Employee engagement scores</li>
                    <li className="list-disc">Voluntary turnover rates</li>
                    <li className="list-disc">Internal Net Promoter Score</li>
                    <li className="list-disc">Cross-vertical collaboration frequency</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Governance</h4>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li className="list-disc">Talent Strategy Council (monthly)</li>
                    <li className="list-disc">Implementation Working Group (bi-weekly)</li>
                    <li className="list-disc">Quarterly talent strategy reviews</li>
                    <li className="list-disc">Annual comprehensive assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
            Conclusion
          </h2>
          
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <p className="text-gray-300 mb-4">
              The Talent Acquisition & Development Strategy represents our commitment to building teams that can successfully 
              execute on the KinOS Ventures vision. By balancing vertical expertise with cross-functional collaboration capabilities, 
              we create a talent ecosystem that drives both specialized excellence and unified innovation.
            </p>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Success Metrics:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <UserGroupIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Attract top talent across all verticals</p>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <AcademicCapIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Develop skills for vertical and cross-vertical success</p>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <UserCircleIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Retain key contributors through growth opportunities</p>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <ArrowPathIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Create free-flowing knowledge across boundaries</p>
                </div>
                
                <div className="bg-slate-700 p-4 rounded-lg text-center">
                  <UserGroupIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white text-sm">Build teams that exemplify excellence and inclusion</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mt-6">
              This strategy will evolve as our organization grows, guided by our core values and responsive to the 
              changing needs of our business verticals and the broader talent marketplace.
            </p>
          </div>
        </section>

        {/* Related Resources Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
            Related Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedResources.map((resource) => (
              <Link 
                key={resource.id} 
                href={`/resources/${resource.id}`}
                className="bg-slate-800 rounded-xl p-5 shadow-lg hover:bg-slate-700 transition duration-300 flex flex-col"
              >
                <div className="flex items-start mb-3">
                  {resource.icon}
                  <h3 className="text-lg font-medium text-white ml-2">{resource.title}</h3>
                </div>
                <p className="text-gray-300 text-sm flex-grow">{resource.description}</p>
                <div className="mt-4 text-blue-400 text-sm font-medium flex items-center">
                  View Resource
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default ResourcePage