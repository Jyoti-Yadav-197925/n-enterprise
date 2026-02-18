'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Phone, HelpCircle } from 'lucide-react'
import Container from '@/components/common/Container'
import Link from 'next/link'

const faqs = [
  {
    question: 'What are your primary lending regions?',
    answer: 'We provide PAN India support for major loan categories, with direct localized liaison in Mumbai, Thane, and Palghar districts. Our network spans across major financial institutions.'
  },
  {
    question: 'How do you handle society redevelopment?',
    answer: 'We operate on transparent equity sharing models (70:30, 65:35, 60:40), providing bank guarantees and structural excellence. Our team manages everything from legal clearances to final possession.'
  },
  {
    question: 'Is a minimum CIBIL score required for loans?',
    answer: 'While 750+ is ideal for best rates, we also help clients with lower scores. Our experts work with multiple banks to find solutions and help rebuild credit health.'
    },
  {
    question: 'Do you handle stalled construction takeovers?',
    answer: 'Yes, our legal and engineering teams specialize in revitalizing projects stuck due to capital crunch or regulatory hurdles. We provide end-to-end solutions.'
  },
  {
    question: 'What documents are needed for home loans?',
    answer: 'For salaried: Aadhar, PAN, last 3 months salary slips, 6 months bank statements, Form 16. For self-employed: IT returns (3 years), GST certificates, business proof, and bank statements.'
  }
]

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left group"
      >
        <span className="text-base font-semibold text-primary-dark group-hover:text-accent transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 bg-[#F6F3E8] rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-300 ${isOpen ? 'bg-accent' : ''}`}>
          <Plus className={`text-primary-dark group-hover:text-white transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`} size={16} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 text-sm leading-relaxed pl-2 border-l-2 border-accent">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="lg:sticky lg:top-32">
            {/* Badge with Icon */}
            <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-6">
              <HelpCircle size={14} className="text-accent" />
              <span className="text-xs font-semibold tracking-wide">COMMON QUESTIONS</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
              Frequently Asked <br />
              <span className="text-accent">Questions</span>
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions? We're here to help. Browse through our most commonly asked questions or reach out to us directly.
            </p>
            
            {/* Contact Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-primary-dark text-cream px-6 py-3 rounded-full hover:bg-accent hover:text-primary-dark transition-all duration-300 text-sm font-semibold"
            >
              <Phone size={16} className="text-accent" />
              Contact Us
            </Link>

            {/* Quick Stats */}
            <div className="mt-8 flex gap-6">
              <div>
                <div className="text-2xl font-bold text-accent">121+</div>
                <div className="text-xs text-gray-500">Clients Served</div>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="bg-[#F6F3E8] p-6 rounded-2xl">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>

        {/* 24/7 Support Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full">
            <Phone size={14} className="text-accent" />
            <span className="text-xs font-semibold tracking-wide">24/7 SUPPORT</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Call us anytime: <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-accent font-semibold hover:underline">+91 {process.env.NEXT_PUBLIC_PHONE}</a>
          </p>
        </div>
      </Container>
    </section>
  )
}