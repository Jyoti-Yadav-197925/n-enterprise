'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp, Award, Shield, Heart } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/common/Container'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-dark text-cream relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary-light to-primary" />
      
      <Container className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-dark">N</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">N ENTERPRISE</span>
                <p className="text-xs text-accent tracking-wider mt-1">SINCE 2008</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              Your trusted partner for loan assistance, property dealing, and construction redevelopment 
              across Mumbai, Vasai, Virar, Boisar & Palghar. PAN India loan support available.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Award, label: 'ISO Certified' },
                { Icon: Shield, label: '100% Secure' },
                { Icon: Heart, label: 'Trusted' },
              ].map(({ Icon, label }, i) => (
                <div key={i} className="flex items-center gap-1 text-xs text-cream/70">
                  <Icon size={14} className="text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Loans', 'Construction', 'Property', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-cream/80 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent/60 rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Home Loan',
                'Mortgage Loan',
                'Loan Against Property',
                'Project Loan',
                'Vehicle Loan',
                'Construction',
                'Property Dealing',
              ].map((item) => (
                <li key={item}>
                  <span className="text-cream/80 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent/60 rounded-full" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                    className="text-white hover:text-accent transition-colors text-sm font-semibold"
                  >
                    +91 {process.env.NEXT_PUBLIC_PHONE}
                  </a>
                  <p className="text-xs text-cream/60 mt-1">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    className="text-white hover:text-accent transition-colors text-sm"
                  >
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                  <p className="text-xs text-cream/60 mt-1">Response within 2 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white text-sm">Shop No. 06, Jitesh Apartment</p>
                  <p className="text-cream/80 text-xs">Vishal Nagar, Vasai - (W), Palghar - 401501</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-xs text-cream/60">
            © {new Date().getFullYear()} N Enterprise. All rights reserved. | RERA: A0123456789
          </p>
          <div className="flex gap-6 mt-4 lg:mt-0">
            <Link href="#" className="text-xs text-cream/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-cream/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-cream/60 hover:text-accent transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        onClick={scrollToTop}
        className="absolute -top-5 right-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-dark hover:bg-white transition-all duration-300 shadow-2xl"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
