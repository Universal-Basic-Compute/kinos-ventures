'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  DocumentTextIcon,
  ChartBarIcon,
  UserGroupIcon,
  LightBulbIcon,
  SparklesIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  CubeIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  ClockIcon,
  ScaleIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  BuildingOffice2Icon,
  BookOpenIcon,
  ArrowRightIcon,
  ServerIcon,
  Cog6ToothIcon,
  BeakerIcon,
  WrenchIcon
} from '@heroicons/react/24/outline'

// Resource page component
const KinOSVenturesManifestoPage = () => {
  const router = useRouter()

  // Related resources navigation
  const relatedResources = [
    { 
      id: 'ai-ethics-responsibility-charter',
      title: 'AI Ethics & Responsibility Charter', 
      description: 'Ethical principles guiding all development and business decisions',
      icon: <ScaleIcon className="h-6 w-6 text-blue-400" />
    },
    { 
      id: 'technology-unification-principles',
      title: 'Technology Unification Principles', 
      description: 'Guidelines for maintaining a cohesive technology core across diverse applications',
      icon: <PuzzlePieceIcon className="h-6 w-6 text-blue-400" />
    },
    { 
      id: 'first-principles-decision-making',
      title: 'First Principles Decision-Making', 
      description: 'Structured approach to making decisions based on fundamental truths',
      icon: <LightBulbIcon className="h-6 w-6 text-blue-400" />
    },
    { 
      id: 'vertical-integration-strategy',
      title: 'Vertical Integration Strategy', 
      description: 'Framework for identifying, developing, and scaling new business verticals',
      icon: <BuildingOffice2Icon className="h-6 w-6 text-blue-400" />
    },
    { 
      id: 'talent-acquisition-development',
      title: 'Talent Acquisition & Development', 
      description: 'Principles for building specialized teams with shared core values',
      icon: <UserGroupIcon className="h-6 w-6 text-blue-400" />
    }
  ]

  const handleRelatedResourceClick = (resourceId: string) => {
    router.push(`/resources/core-philosophy-strategy/${resourceId}`)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-slate-800 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl mb-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              KinOS Ventures Manifesto
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Core values, mission, and vision defining our approach to AI development
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <BookOpenIcon className="h-8 w-8 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        {/* Introduction Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Executive Summary</h2>
          <div className="bg-slate-800 rounded-lg shadow-xl p-6 mb-8">
            <p className="text-gray-300 text-lg">
              The KinOS Ventures Manifesto establishes our foundational philosophy and strategic approach to artificial intelligence development across multiple business verticals. This document articulates our vision of AI as an extension of human capability rather than a replacement, emphasizing symbiotic relationships that preserve human agency while accelerating development potential.
            </p>
            <p className="text-gray-300 text-lg mt-4">
              By embracing transparency, interoperability, ethical responsibility, and pragmatic innovation, we commit to creating AI systems that augment human potential while maintaining a lean organizational structure that enables rapid adaptation and growth.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Vision for AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <LightBulbIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">The KinOS Philosophy</h3>
              </div>
              <p className="text-gray-300 mb-4">
                At KinOS Ventures, we believe in creating AI that acts as a natural extension of human capability. Our systems are designed to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Augment, not replace</strong> human intelligence and creativity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Create <strong className="text-white">symbiotic relationships</strong> between human intuition and AI processing power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Maintain human agency</strong> at all critical decision points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Accelerate development</strong> through intelligent assistance</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Mission Statement</h3>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-white font-medium text-center italic">
                  "We exist to accelerate human potential across diverse domains through ethical, interoperable AI systems built on a unified technological core."
                </p>
              </div>
              <p className="text-gray-300 mb-2">This mission drives us to:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Develop AI systems that enhance human capabilities without diminishing human agency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Create a unified technological foundation that powers specialized vertical solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">Maintain unwavering ethical standards while pursuing rapid innovation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <ArrowPathIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">The Evolution of KinOS</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Our journey began with a vision to democratize AI through decentralized ownership. While maintaining our commitment to accessible technology, we've evolved to a model that emphasizes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <span className="text-blue-400 mr-2">•</span>
                  Specialized vertical applications powered by a common technological core
                </p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <span className="text-blue-400 mr-2">•</span>
                  SaaS and subscription revenue models that create sustainable growth
                </p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <span className="text-blue-400 mr-2">•</span>
                  Strategic enterprise partnerships that extend our reach and impact
                </p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <span className="text-blue-400 mr-2">•</span>
                  Proven use cases that demonstrate real-world value
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Transparency</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We commit to transparent operation in all aspects of our business:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Open communication</strong> about the capabilities and limitations of our AI systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Clear documentation</strong> of AI decision processes and recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Explainable AI</strong> as a fundamental principle in our technology development</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <PuzzlePieceIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Interoperability</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our technology is designed with interoperability as a core principle:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Standards-based approach</strong> to enable ecosystem integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Cross-vertical compatibility</strong> that allows insights to flow between domains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">API-first architecture</strong> that enables extensibility and integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <ScaleIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Ethical Responsibility</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We hold ourselves to the highest ethical standards:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Human oversight</strong> of all AI systems and their recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Privacy by design</strong> in all data collection and processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Continuous ethical review</strong> of applications and implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Bias mitigation</strong> through diverse training data and regular auditing</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <BeakerIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Pragmatic Innovation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We pursue innovation with a clear focus on real-world impact:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Solving tangible problems</strong> rather than chasing theoretical advancements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Measuring value delivery</strong> as our primary metric for success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Balancing cutting-edge technology</strong> with practical utility</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI as Human Augmentation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">AI as Human Augmentation</h2>
          
          <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700 mb-8">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Extending Cognitive Capabilities</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Our AI systems are designed to extend human cognitive capabilities in specific ways:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Memory Augmentation</h4>
                <p className="text-gray-300">Enhancing recall and pattern recognition across time</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Attention Optimization</h4>
                <p className="text-gray-300">Focusing human attention where it creates most value</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Pattern Recognition</h4>
                <p className="text-gray-300">Identifying trends and correlations at scale</p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Knowledge Integration</h4>
                <p className="text-gray-300">Connecting insights across domains and sources</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 text-white">Practical Examples of Human-AI Symbiosis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">TherapyKin</h4>
              </div>
              <p className="text-gray-300">
                AI enhances therapist capabilities by tracking patient history, identifying patterns, and suggesting intervention strategies while preserving the essential human connection that makes therapy effective.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">KinKong</h4>
              </div>
              <p className="text-gray-300">
                Augments financial analysis by processing vast quantities of market data while leaving critical investment decisions to human judgment, enhanced by AI-generated insights.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <SparklesIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Synthetic Souls</h4>
              </div>
              <p className="text-gray-300">
                Amplifies creative processes by generating variations and alternatives based on human creative direction, expanding the creative possibility space without replacing human aesthetic judgment.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <ClockIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">The Limits of Automation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              We recognize and respect the boundaries of AI automation:
            </p>
            <div className="space-y-4">
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong className="text-white">Human judgment remains essential</strong> for ethical decisions, creative direction, and emotional intelligence
                </p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong className="text-white">We establish clear ethical boundaries</strong> that our AI will not cross, particularly in sensitive domains
                </p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong className="text-white">We maintain human oversight</strong> of all automated systems to ensure alignment with our values
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open-Source Philosophy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Open-Source Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <CodeBracketIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Balance of Openness and IP</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We take a nuanced approach to open-source development:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Core components</strong> are shared with the broader community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Application-specific implementations</strong> may incorporate proprietary elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">We contribute actively</strong> to the broader AI ecosystem</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Community Engagement</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our engagement with the developer community is essential to our success:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Collaborative development</strong> through public repositories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Feedback loops</strong> that incorporate community insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Educational initiatives</strong> that help developers understand our technology</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Business Alignment</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We've designed our business model to align with our open-source philosophy:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Value-added services</strong> built on open-core technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Vertical-specific implementations</strong> that address specialized needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Enterprise features</strong> that extend core capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rapid Development Approach Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Rapid Development Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Lean Team Structure</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our organizational design emphasizes small, high-impact teams:
              </p>
              <div className="space-y-3">
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Cross-functional collaboration that eliminates silos
                  </p>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Decision authority at the edge where information is most complete
                  </p>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Elimination of organizational barriers that slow innovation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <ArrowPathIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Iterative Development</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We embrace rapid iteration as our path to excellence:
              </p>
              <div className="space-y-3">
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Continuous deployment of incremental improvements
                  </p>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Data-driven evaluation of impact and effectiveness
                  </p>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Fast failure and rapid learning as a path to innovation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <BuildingOffice2Icon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Vertical-Specific Acceleration</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our unified core technology enables rapid specialization:
              </p>
              <div className="space-y-3">
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Domain expertise is integrated into technical development
                  </p>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Cross-pollination of ideas between verticals
                  </p>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400 mr-2">→</span>
                    Shared learning reduces redundant efforts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Practical Implementation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Practical Implementation</h2>

          <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700 mb-8">
            <div className="flex items-center mb-6">
              <CubeIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">The KinOS Engine</h3>
            </div>
            <p className="text-gray-300 mb-6">
              At the heart of our approach is the KinOS Engine with its key capabilities:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-700 p-5 rounded-lg">
                <h4 className="font-semibold text-white mb-3">Memory</h4>
                <p className="text-gray-300">
                  Persistent context retention across interactions
                </p>
              </div>
              
              <div className="bg-slate-700 p-5 rounded-lg">
                <h4 className="font-semibold text-white mb-3">Adaptation</h4>
                <p className="text-gray-300">
                  Learning from interactions to improve over time
                </p>
              </div>
              
              <div className="bg-slate-700 p-5 rounded-lg">
                <h4 className="font-semibold text-white mb-3">Growth</h4>
                <p className="text-gray-300">
                  Expanding capabilities through structured knowledge acquisition
                </p>
              </div>
            </div>
            
            <div className="bg-slate-900 p-4 rounded-lg mb-4 overflow-x-auto">
              <pre className="text-gray-300 text-sm">
                <code>
{`// Core memory components implemented across all verticals
const MemorySystem = {
  shortTerm: {
    // Conversation context within a session (24-hour retention)
    sessionMemory: SessionMemoryManager,
    // Recent interactions and preferences (30-day retention)
    recentInteractions: RecentInteractionTracker
  },
  longTerm: {
    // User-specific preferences and patterns
    userProfile: UserProfileManager,
    // Domain knowledge specific to the vertical
    domainKnowledge: DomainKnowledgeBase,
    // Cross-vertical insights (with privacy boundaries)
    sharedInsights: SharedInsightRepository
  }
};`}
                </code>
              </pre>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <BuildingOffice2Icon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Vertical Business Units</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our organizational structure supports specialized focus while maintaining unified technology:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Autonomous leadership</strong> within each vertical with domain expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Shared core technology team</strong> supporting all verticals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300"><strong className="text-white">Cross-functional support services</strong> serving all units</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Measuring Success</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We measure our success through concrete metrics:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-700 p-3 rounded">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">User empowerment</strong><br />
                    Increased capabilities and productivity
                  </p>
                </div>
                <div className="bg-slate-700 p-3 rounded">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Development velocity</strong><br />
                    Speed of innovation and adaptation
                  </p>
                </div>
                <div className="bg-slate-700 p-3 rounded">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Cross-vertical synergy</strong><br />
                    Insights and features shared between domains
                  </p>
                </div>
                <div className="bg-slate-700 p-3 rounded">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Business sustainability</strong><br />
                    Revenue growth and profitability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Looking Forward Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Looking Forward</h2>
          
          <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700 mb-8">
            <div className="flex items-center mb-4">
              <Cog6ToothIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Technology Roadmap</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Our development priorities focus on enhancing our core capabilities:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-3">Near-term (0-6 months):</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Unified memory architecture implementation across all verticals</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Enhanced cross-vertical knowledge sharing protocols</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Standardized explainability interfaces for all AI recommendations</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-white mb-3">Medium-term (6-18 months):</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Advanced adaptation mechanisms with accelerated learning capabilities</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Expanded vertical-specific knowledge bases with improved integration</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Enhanced personalization through unified user profiles with privacy protections</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-white mb-3">Long-term (18+ months):</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Fully autonomous knowledge acquisition systems with human oversight</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Seamless cross-vertical intelligence sharing while maintaining privacy</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <p className="text-gray-300">Generalized problem-solving capabilities adaptable to new domains</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Expanding Our Impact</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We see significant opportunities to expand our reach:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">
                    <strong className="text-white">New verticals</strong> on our roadmap include healthcare, education, and enterprise productivity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">
                    <strong className="text-white">Global expansion</strong> through localization and cultural adaptation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">
                    <strong className="text-white">Strategic partnerships</strong> with domain leaders to accelerate adoption
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Call to Action</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-white mb-1">For partners and customers:</h4>
                  <p className="text-gray-300">
                    Join us in defining the future of human-AI collaboration. Engage with our open APIs, provide feedback on your experiences, and help us understand your unique domain challenges.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-white mb-1">For team members and contributors:</h4>
                  <p className="text-gray-300">
                    Embrace our core values and development philosophy. Challenge assumptions, propose innovations, and help us maintain our focus on human augmentation and ethical AI development.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-white mb-1">For the broader AI community:</h4>
                  <p className="text-gray-300">
                    Collaborate with us on open-source initiatives, engage in dialogue about ethical AI development, and help us advance the field toward AI systems that genuinely extend human potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Implementation Guidance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Implementation Guidance</h2>
          
          <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700 mb-8">
            <div className="flex items-center mb-4">
              <WrenchIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Applying the Manifesto in Daily Work</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">1. Decision Making</h4>
                <p className="text-gray-300">
                  When facing choices, refer to our core values and First Principles Decision-Making Framework. Ask: "Does this choice enhance human capability while maintaining human agency?"
                </p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">2. Feature Development</h4>
                <p className="text-gray-300">
                  Every feature should have a clear connection to human augmentation. Document how the feature extends human capability rather than replacing human judgment.
                </p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">3. Cross-Vertical Collaboration</h4>
                <p className="text-gray-300">
                  Regularly share insights and innovations across vertical teams. Our Knowledge Transfer Protocol provides structured methods for this collaboration.
                </p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">4. Ethical Considerations</h4>
                <p className="text-gray-300">
                  Use our AI Ethics & Responsibility Charter as a checklist for all development. When in doubt, elevate ethical concerns for broader discussion.
                </p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">5. User Communication</h4>
                <p className="text-gray-300">
                  Be transparent about AI capabilities and limitations in all user-facing materials. Set appropriate expectations about what our AI can and cannot do.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <ServerIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Manifesto Implementation Tools</h3>
            </div>
            <p className="text-gray-300 mb-4">
              To help implement these principles consistently, we provide:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Value Alignment Verification Tool</h4>
                <p className="text-gray-300">
                  AI-powered system that reviews development plans against our manifesto principles
                </p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Cross-Vertical Knowledge Base</h4>
                <p className="text-gray-300">
                  Centralized repository of insights and learnings shared across teams
                </p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Ethics Review Workflow</h4>
                <p className="text-gray-300">
                  Standardized process for evaluating ethical implications of new features
                </p>
              </div>
              
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Transparency Documentation Generator</h4>
                <p className="text-gray-300">
                  Tool for creating user-facing explanations of AI systems
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conclusion Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Conclusion</h2>
          
          <div className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700">
            <p className="text-lg text-gray-300 mb-6">
              The KinOS Ventures Manifesto is more than a statement of principles—it's our practical guide to building AI systems that genuinely extend human potential. By maintaining our focus on human augmentation, ethical development, and cross-vertical synergy, we will create technology that empowers humans rather than replacing them.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              As we grow and evolve, this manifesto will serve as our foundation, ensuring that our technological advancements remain aligned with our core values and mission. We invite all stakeholders—team members, partners, users, and the broader community—to hold us accountable to these principles and to join us in creating a future where AI serves as a natural extension of human capability.
            </p>
            
            <div className="bg-slate-700 p-5 rounded-lg border-l-4 border-blue-400">
              <p className="text-white font-medium italic">
                "We exist to accelerate human potential across diverse domains through ethical, interoperable AI systems built on a unified technological core."
              </p>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white">Related Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedResources.map((resource) => (
              <div 
                key={resource.id}
                className="bg-slate-800 rounded-lg shadow-xl p-6 border border-slate-700 hover:border-blue-400 transition-all cursor-pointer"
                onClick={() => handleRelatedResourceClick(resource.id)}
              >
                <div className="flex items-center mb-4">
                  {resource.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{resource.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center text-blue-400 font-medium">
                  <span>View resource</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default KinOSVenturesManifestoPage