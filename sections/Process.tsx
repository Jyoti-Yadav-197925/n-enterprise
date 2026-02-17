'use client'

import { motion } from 'framer-motion'
import { MessageSquare, FileText, CheckCircle, Phone } from 'lucide-react'
import Container from '@/components/common/Container'

const steps = [
  {
    icon: MessageSquare,
    title: 'Corporate Consultation',
    description: 'We analyze your requirements, credit health, and asset position to find the best solution.',
    step: '01'
  },
  {
    icon: FileText,
    title: 'Precision Documentation',
    description: 'Our experts prepare all paperwork to ensure zero-rejection from banks and authorities.',
    step: '02'
  },
  {
    icon: CheckCircle,
    title: 'Elite Execution',
    description: 'Fast-track processing for loan disbursal, property registration, or project completion.',
    step: '03'
  }
]

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header - Exactly like Contact page */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-6">
            <span className="text-xs font-semibold tracking-wide">HOW WE WORK</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
            Simple 3-Step <span className="text-accent">Process</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make complex procedures simple. Just share your requirements, we handle the rest.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-[#F6F3E8] p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/20 overflow-hidden"
            >
              {/* Step Number - Clear Background Element */}
              <div className="absolute top-4 right-4 text-8xl font-bold text-accent/20 select-none">
                {step.step}
              </div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon size={24} className="text-accent" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-primary-dark mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except last) */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 text-accent/30 text-3xl">
                  →
                </div>
              )}

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Success Stats - Simple */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-6">
            <span className="text-xs font-semibold tracking-wide">OUR TRACK RECORD</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div>
              <div className="text-4xl font-bold text-accent">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="w-px h-10 bg-gray-300" />
            <div>
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="w-px h-10 bg-gray-300" />
            <div>
              <div className="text-4xl font-bold text-accent">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full">
            <Phone size={14} className="text-accent" />
            <span className="text-xs font-semibold tracking-wide">24/7 SUPPORT</span>
          </div>
        </div>
      </Container>
    </section>
  )
}