'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calculator, Percent, Scale, ArrowRight, Phone } from 'lucide-react'
import Container from '@/components/common/Container'

const tools = [
  {
    icon: Calculator,
    title: 'EMI Calculator',
    description: 'Calculate your monthly loan installments instantly.',
    features: ['Principal & Interest', 'Amortization Schedule', 'Tax Benefits'],
    href: '/tools#emi-calculator',
    stat: '1.2k+ Uses'
  },
  {
    icon: Percent,
    title: 'Rate Compare',
    description: 'Compare interest rates from multiple banks.',
    features: ['Live Rates', 'Bank Comparison', 'Best Deals'],
    href: '/tools#rate-compare',
    stat: '500+ Comparisons'
  },
  {
    icon: Scale,
    title: 'Eligibility Checker',
    description: 'Check how much loan you qualify for in minutes.',
    features: ['Instant Results', 'CIBIL Based', 'Multiple Banks'],
    href: '/tools#eligibility',
    stat: '2k+ Checks'
  }
]

export default function ToolsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-6">
            <Calculator size={14} className="text-accent" />
            <span className="text-xs font-semibold tracking-wide">FINANCIAL TOOLS</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
            Smart Tools for <span className="text-accent">Smart Decisions</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use our free calculators and checkers to make informed decisions. No registration required.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link href={tool.href} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-[#F6F3E8] p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/20"
              >
                {/* Usage Stat */}
                <span className="inline-block bg-primary-dark text-white text-xs px-3 py-1 rounded-full mb-4">
                  {tool.stat}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon size={24} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                  <span>Open Tool</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link 
            href="/tools"
            className="inline-flex items-center gap-2 bg-primary-dark text-cream px-6 py-3 rounded-full hover:bg-accent hover:text-primary-dark transition-all duration-300 text-sm font-semibold"
          >
            View All Tools
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 24/7 Support - Only here at the bottom */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full">
            <Phone size={14} className="text-accent" />
            <span className="text-xs font-semibold tracking-wide">24/7 SUPPORT</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Call us anytime: <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-accent font-semibold hover:underline">+91 {process.env.NEXT_PUBLIC_PHONE}</a>
          </p>
        </div> */}
      </Container>
    </section>
  )
}