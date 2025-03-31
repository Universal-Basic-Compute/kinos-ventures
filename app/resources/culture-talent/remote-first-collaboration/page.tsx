'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  UsersIcon,
  ClockIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ServerIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ArrowPathIcon,
  LightBulbIcon,
  ClipboardDocumentListIcon,
  PresentationChartBarIcon,
  SignalIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
  CpuChipIcon,
  AcademicCapIcon,
  CubeTransparentIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const RemoteFirstCollaboration = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      
      {/* Resource Header */}
      <header className="relative overflow-hidden bg-slate-800 py-16">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/categories/Culture_Talent/remote-first-collaboration.png"
            alt="Remote-First Collaboration Framework Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Remote-First Collaboration Framework
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Guidelines for effective distributed teamwork and communication in our multi-vertical organization
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 bg-opacity-30 text-blue-300 text-sm">
              <DocumentTextIcon className="w-5 h-5 mr-2" />
              Culture & Talent Resource
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Content Column */}
          <div className="lg:w-2/3">
            {/* Executive Summary Card */}
            <motion.div
              initial="hidden"
              animate="visible" 
              variants={fadeIn}
              className="bg-slate-800 rounded-xl p-6 mb-8 border-l-4 border-blue-500 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Executive Summary</h2>
              <p className="text-gray-300">
                The Remote-First Collaboration Framework establishes a comprehensive set of principles, 
                protocols, and tools to enable high-performance collaboration across KinOS Ventures' 
                distributed organization. This framework addresses the unique challenges of maintaining 
                cohesion, productivity, and innovation in a company with multiple vertical business units 
                operating across different time zones, locations, and domains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700 rounded-lg p-4 flex items-start">
                  <LightBulbIcon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="ml-3 text-gray-300">Maximize the benefits of a distributed workforce</span>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 flex items-start">
                  <ClipboardDocumentListIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="ml-3 text-gray-300">Standardize processes for communication across verticals</span>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 flex items-start">
                  <UserGroupIcon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="ml-3 text-gray-300">Leverage collective intelligence through knowledge sharing</span>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 flex items-start">
                  <CubeTransparentIcon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="ml-3 text-gray-300">Support our multi-vertical business structure</span>
                </div>
              </div>
            </motion.div>

            {/* Foundation Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BuildingOffice2Icon className="w-6 h-6 mr-2 text-blue-400" />
                Foundation: Remote-First Philosophy
              </h2>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Remote-First Principles</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <p className="ml-3 text-gray-300">Documentation over verbal knowledge transfer</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <p className="ml-3 text-gray-300">Asynchronous by default, synchronous when necessary</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <p className="ml-3 text-gray-300">Written communication as the primary record</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-xs font-bold">4</span>
                      </div>
                      <p className="ml-3 text-gray-300">Inclusive meeting practices that don't favor any location</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                        <span className="text-xs font-bold">5</span>
                      </div>
                      <p className="ml-3 text-gray-300">Equal access to information regardless of time zone</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Benefits for KinOS Ventures</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <GlobeAltIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Access to global talent pools critical for AI expertise</p>
                    </div>
                    <div className="flex items-start">
                      <ArrowPathIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Cross-vertical pollination through digital knowledge sharing</p>
                    </div>
                    <div className="flex items-start">
                      <ChartBarIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Reduced facilities costs redirected to technology investment</p>
                    </div>
                    <div className="flex items-start">
                      <BriefcaseIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Enhanced work-life integration leading to higher retention</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Challenges and Mitigation Strategies</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Challenge</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Mitigation Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-300">Communication gaps</td>
                        <td className="px-4 py-3 text-sm text-gray-300">Structured documentation and communication protocols</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-300">Timezone complications</td>
                        <td className="px-4 py-3 text-sm text-gray-300">Asynchronous workflows with clear handoff procedures</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-300">Reduced spontaneous interaction</td>
                        <td className="px-4 py-3 text-sm text-gray-300">Scheduled virtual social events and collaboration sessions</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-300">Sense of disconnection</td>
                        <td className="px-4 py-3 text-sm text-gray-300">Regular video meetings and digital team-building activities</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-300">Uneven technology access</td>
                        <td className="px-4 py-3 text-sm text-gray-300">Technology stipends and minimum hardware requirements</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </section>

            {/* Communication Architecture */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ChatBubbleLeftRightIcon className="w-6 h-6 mr-2 text-blue-400" />
                Communication Architecture
              </h2>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                <motion.div variants={fadeIn} className="col-span-1 md:col-span-2 bg-slate-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Communication Channels</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Channel Type</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Primary Tools</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Best Used For</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Not Appropriate For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-300">Asynchronous Text</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Slack, Email, Notion</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Updates, non-urgent questions, documentation</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Time-sensitive decisions, complex discussions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-300">Synchronous Text</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Slack huddles, Chat</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Quick questions, clarifications</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Detailed explanations, official decisions</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-300">Asynchronous Video</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Loom, Recorded presentations</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Demonstrations, announcements, training</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Discussions requiring immediate feedback</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-300">Synchronous Video</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Zoom, Microsoft Teams</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Decisions, complex discussions, relationship building</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Routine updates, information that could be documented</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-300">Documentation</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Notion, GitHub, Google Workspace</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Knowledge repository, decision records, processes</td>
                          <td className="px-4 py-3 text-sm text-gray-300">Time-sensitive communications</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Asynchronous Communication Guidelines</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-700 p-3 rounded-lg">
                      <p className="text-gray-300">Default to asynchronous communication whenever possible</p>
                    </div>
                    <div className="bg-slate-700 p-3 rounded-lg">
                      <p className="text-gray-300">Create comprehensive context in each communication</p>
                    </div>
                    <div className="bg-slate-700 p-3 rounded-lg">
                      <p className="text-gray-300">Use clear subject lines and tags to enable filtering</p>
                    </div>
                    <div className="bg-slate-700 p-3 rounded-lg">
                      <p className="text-white font-medium">Response time expectations:</p>
                      <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                        <li>• Urgent: Within 4 hours during working hours</li>
                        <li>• Important: Within 24 hours</li>
                        <li>• Standard: Within 48 hours</li>
                        <li>• FYI: No response required</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Synchronous Meeting Protocol</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <ClipboardDocumentListIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Clear agenda distributed minimum 24 hours in advance</p>
                    </div>
                    <div className="flex items-start">
                      <DocumentTextIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Required pre-reading highlighted with expected completion time</p>
                    </div>
                    <div className="flex items-start">
                      <PresentationChartBarIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Decision-focused structure with clear outcomes</p>
                    </div>
                    <div className="flex items-start">
                      <ComputerDesktopIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Record all meetings for those who cannot attend</p>
                    </div>
                    <div className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <p className="ml-3 text-gray-300">Meeting-free days designated across the organization</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </section>
            
            {/* Technology Infrastructure Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ServerIcon className="w-6 h-6 mr-2 text-blue-400" />
                Technology Infrastructure and Tools
              </h2>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 gap-6 mb-8"
              >
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Core Technology Stack</h3>
                  <p className="text-gray-300 mb-4">KinOS Ventures standardizes on these tools across all vertical business units:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Documentation</h4>
                      <p className="text-gray-300 text-sm">Notion, Google Workspace</p>
                      <p className="text-gray-400 text-xs mt-1">Central knowledge repository, collaborative documents</p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Communication</h4>
                      <p className="text-gray-300 text-sm">Slack, Zoom, Microsoft Teams</p>
                      <p className="text-gray-400 text-xs mt-1">Team messaging, video meetings</p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Project Management</h4>
                      <p className="text-gray-300 text-sm">Asana, JIRA</p>
                      <p className="text-gray-400 text-xs mt-1">Task tracking, project coordination</p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Version Control</h4>
                      <p className="text-gray-300 text-sm">GitHub</p>
                      <p className="text-gray-400 text-xs mt-1">Code repository, technical documentation</p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Knowledge Sharing</h4>
                      <p className="text-gray-300 text-sm">Loom, Internal Wiki</p>
                      <p className="text-gray-400 text-xs mt-1">Video documentation, process documentation</p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Virtual Collaboration</h4>
                      <p className="text-gray-300 text-sm">Miro, Figma</p>
                      <p className="text-gray-400 text-xs mt-1">Visual collaboration, design work</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Technology Access Requirements</h3>
                  <p className="text-gray-300 mb-4">To ensure equitable participation, KinOS Ventures provides:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                        <CpuChipIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-white">Technology Stipend</h4>
                        <p className="text-gray-300 text-sm">$1,500 initial, $500 annual refresh</p>
                      </div>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                        <SignalIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-white">Internet Requirements</h4>
                        <p className="text-gray-300 text-sm">100 Mbps download, 10 Mbps upload</p>
                      </div>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                        <ComputerDesktopIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-white">Hardware Package</h4>
                        <p className="text-gray-300 text-sm">Laptop, monitor, peripherals</p>
                      </div>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                        <GlobeAltIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-white">Backup Connectivity</h4>
                        <p className="text-gray-300 text-sm">Mobile hotspot or secondary ISP</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </section>
            
            {/* AI Integration Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CpuChipIcon className="w-6 h-6 mr-2 text-blue-400" />
                AI Integration for Remote Collaboration
              </h2>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-purple-600 bg-opacity-20 flex items-center justify-center mr-3">
                      <ComputerDesktopIcon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Meeting Assistant</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Capabilities:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Real-time transcription with speaker identification
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Automatic action item extraction and assignment
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Meeting summary generation with key points
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Integration with project management systems
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Workflow:</h4>
                    <ol className="space-y-1 text-gray-300 text-sm">
                      <li>1. Team activates Meeting Assistant at the start</li>
                      <li>2. System transcribes discussion in real-time</li>
                      <li>3. Post-meeting, participants receive summary</li>
                      <li>4. Tasks are automatically created in project tools</li>
                      <li>5. Meeting effectiveness analytics provided</li>
                    </ol>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center mr-3">
                      <DocumentTextIcon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Async Collaboration Enhancer</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Capabilities:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Contextual recommendations for relevant documentation
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Quality assessment for written communications
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Automatic linking of related resources
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Gap identification in documentation
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Workflow:</h4>
                    <ol className="space-y-1 text-gray-300 text-sm">
                      <li>1. Team member drafts project documentation</li>
                      <li>2. System analyzes content and suggests improvements</li>
                      <li>3. Related resources from other verticals are surfaced</li>
                      <li>4. Terminology inconsistencies are highlighted</li>
                      <li>5. Documentation completeness score provided</li>
                    </ol>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-green-600 bg-opacity-20 flex items-center justify-center mr-3">
                      <UserGroupIcon className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Cross-Vertical Connection Engine</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Capabilities:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Analysis of work across verticals to identify synergies
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Recommendation of potential collaborators
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Identification of duplicate efforts across teams
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Pattern recognition for successful collaborations
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-yellow-600 bg-opacity-20 flex items-center justify-center mr-3">
                      <ClockIcon className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Time Zone Intelligence System</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Capabilities:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Optimal meeting time recommendations
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Work handoff facilitation between time zones
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Notification timing intelligence
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 text-green-400 mr-2">•</span>
                        Workload balancing across time zones
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </section>
            
            {/* Conclusion Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <RocketLaunchIcon className="w-6 h-6 mr-2 text-blue-400" />
                Remote-First as a Competitive Advantage
              </h2>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-slate-800 rounded-xl p-6 shadow-lg"
              >
                <p className="text-gray-300 mb-4">
                  When properly implemented, this Remote-First Collaboration Framework will:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <GlobeAltIcon className="h-6 w-6 text-blue-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">Global Talent Access</h4>
                    </div>
                    <p className="mt-2 text-gray-300 text-sm">
                      Enable KinOS Ventures to attract top talent regardless of location
                    </p>
                  </div>
                  
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <LightBulbIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">Accelerated Innovation</h4>
                    </div>
                    <p className="mt-2 text-gray-300 text-sm">
                      Through diverse perspectives and cross-vertical insights
                    </p>
                  </div>
                  
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">Work-Life Integration</h4>
                    </div>
                    <p className="mt-2 text-gray-300 text-sm">
                      Leading to higher retention and satisfaction
                    </p>
                  </div>
                  
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <ArrowPathIcon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">Resilient Operations</h4>
                    </div>
                    <p className="mt-2 text-gray-300 text-sm">
                      That aren't dependent on physical locations
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-900 bg-opacity-30 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-white">
                    By embracing these practices, KinOS Ventures will build a culture where distributed work is not merely accommodated but leveraged as a strategic advantage in building our multi-vertical AI business.
                  </p>
                </div>
              </motion.div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              {/* Table of Contents */}
              <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <ClipboardDocumentListIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Quick Navigation
                </h3>
                
                <nav className="space-y-1">
                  <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    Foundation: Remote-First Philosophy
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    Communication Architecture
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    Technology Infrastructure
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    Team Rhythm and Coordination
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    Building Culture and Connection
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    Decision-Making and Governance
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    Knowledge Sharing Across Verticals
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                    AI Integration
                  </a>
                </nav>
              </div>
              
              {/* Related Resources */}
              <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <ArrowPathIcon className="w-5 h-5 mr-2 text-blue-400" />
                  Related Resources
                </h3>
                
                <div className="space-y-4">
                  <Link href="/resources/culture-talent/kinos-knowledge-transfer-protocol" className="block bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors">
                    <div className="flex items-center mb-2">
                      <DocumentTextIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">KinOS Knowledge Transfer Protocol</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Systems for sharing insights and learnings across teams and verticals</p>
                  </Link>
                  
                  <Link href="/resources/culture-talent/talent-acquisition-development" className="block bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors">
                    <div className="flex items-center mb-2">
                      <UsersIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">Talent Acquisition & Development</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Principles for building specialized teams with shared core values</p>
                  </Link>
                  
                  <Link href="/resources/operations-management/organizational-structure-blueprint" className="block bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors">
                    <div className="flex items-center mb-2">
                      <CubeTransparentIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">Organizational Structure Blueprint</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Defining the relationship between core company and vertical business units</p>
                  </Link>
                  
                  <Link href="/resources/culture-talent/innovation-incentive-structure" className="block bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors">
                    <div className="flex items-center mb-2">
                      <LightBulbIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">Innovation Incentive Structure</h4>
                    </div>
                    <p className="text-gray-300 text-sm">How cross-vertical innovation is rewarded and encouraged</p>
                  </Link>
                  
                  <Link href="/resources/technology-product-development/cross-vertical-feature-implementation" className="block bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors">
                    <div className="flex items-center mb-2">
                      <CodeBracketIcon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <h4 className="ml-2 font-medium text-white">Cross-Vertical Feature Implementation</h4>
                    </div>
                    <p className="text-gray-300 text-sm">System for deploying core capabilities across different products</p>
                  </Link>
                </div>
              </div>
              
              {/* Help Card */}
              <div className="bg-blue-900 bg-opacity-30 rounded-xl p-6 mt-8 shadow-lg border border-blue-800">
                <div className="flex items-center mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white ml-2">Need Assistance?</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Have questions about implementing the Remote-First Collaboration Framework in your vertical?
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Contact the Culture Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RemoteFirstCollaboration