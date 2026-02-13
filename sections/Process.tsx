'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Handshake, CheckCircle } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'

const steps = [
  {
    icon: Search,
    title: 'Share Requirements',
    description: 'Tell us about your loan, property, or construction needs',
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'We guide you through the required documents',
  },
  {
    icon: Handshake,
    title: 'Expert Assistance',
    description: 'Our team works with banks/developers on your behalf',
  },
  {
    icon: CheckCircle,
    title: 'Successful Closure',
    description: 'Loan sanctioned, property registered, or project completed',
  },
]

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          subtitle="How We Work"
          title="Simple, Transparent Process"
          description="We make complex processes simple. Just share your requirements, we handle the rest."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent to-primary-light opacity-30" />
              )}
              
              <div className="relative inline-block">
                <div className="w-20 h-20 bg-[#F6F3E8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon size={32} className="text-primary-dark" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary-dark font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
