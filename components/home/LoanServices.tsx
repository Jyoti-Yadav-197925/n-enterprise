'use client'

import { motion } from 'framer-motion'
import { Home, Briefcase, Car, Building2, Landmark, Shield, Clock, TrendingUp } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import ServiceCard from '@/components/ui/ServiceCard'
import Image from 'next/image'

const loans = [
  {
    icon: 'home',
    title: 'Home Loan',
    description: 'Purchase, construction, or renovation of residential properties.',
    features: ['Up to ₹5Cr', 'Flexible tenure', 'Minimal documentation'],
  },
  {
    icon: 'building2',
    title: 'Mortgage Loan',
    description: 'Loan against existing residential or commercial property.',
    features: ['Up to ₹10Cr', 'High LTV ratio', 'Quick disbursal'],
  },
  {
    icon: 'landmark',
    title: 'Loan Against Property',
    description: 'Unlock value from your property for business or personal needs.',
    features: ['Up to ₹10Cr', 'Competitive rates', 'Long tenure'],
  },
  {
    icon: 'briefcase',
    title: 'Personal Loan',
    description: 'Unsecured loans for immediate financial requirements.',
    features: ['Up to ₹50L', 'Instant approval', 'No collateral'],
  },
  {
    icon: 'car',
    title: 'Vehicle Loan',
    description: 'Finance for new and used cars, bikes, and commercial vehicles.',
    features: ['Up to ₹2Cr', 'Low interest', 'Flexible EMI'],
  },
  {
    icon: 'shield',
    title: 'Loan Assistance',
    description: 'Expert guidance for loan eligibility and documentation.',
    features: ['PAN India', 'Documentation support', 'Bank liaison'],
  },
]

export default function LoanServices() {
  return (
    <section id="loans" className="py-20 bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/loan.jpg"
          alt="Loan Services Background"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Loan Services"
          title="Complete Loan Solutions, PAN India"
          description="We provide expert loan assistance for all your needs - from home loans to business loans. Our team helps you get the best rates and smooth approval."
          className="mb-16"
        />

        

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: TrendingUp, title: 'Best Interest Rates', desc: 'Tied up with 25+ banks & NBFCs' },
            { icon: Clock, title: 'Quick Processing', desc: 'Eligibility check in 10 minutes' },
            { icon: Shield, title: '100% Transparency', desc: 'No hidden charges, clear process' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.02)' }}
              className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary-dark">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan, index) => (
            <ServiceCard
              key={index}
              icon={loan.icon as any}
              title={loan.title}
              description={loan.description}
              features={loan.features}
              delay={index * 0.1}
              href="#contact"
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-primary-dark/5 rounded-2xl border border-primary-light/20 backdrop-blur-sm"
        >
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold text-primary-dark">Disclaimer:</span> We are a loan assistance service provider. 
            Loan approval, interest rates, and terms are at the sole discretion of banks/NBFCs. 
            We do not guarantee loan approval or modification of credit scores.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
