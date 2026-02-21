'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Shield, MapPin, Phone, TrendingUp, Users, Award, Home, Building2, X } from 'lucide-react'
import Container from '@/components/common/Container'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])
  const [showLocations, setShowLocations] = useState(false)

  // All locations data
  const allLocations = {
    loans: ['Mumbai', 'Thane', 'Navi Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Sangli', 'Satara', 'Ratnagiri', 'Sindhudurg', 'Dhule', 'Jalgaon', 'Amravati', 'Akola', 'Washim', 'Buldhana', 'Yavatmal', 'Nanded', 'Latur', 'Osmanabad', 'Beed', 'Parbhani', 'Hingoli', 'Jalna', 'Ahmadnagar', 'Bhiwandi', 'Malegaon', 'Kalyan', 'Ulhasnagar', 'Panvel', 'Karjat', 'Khopoli', 'Badlapur', 'Ambernath', 'Dombivli', 'Mira-Bhayandar', 'Virar', 'Vasai', 'Boisar', 'Palghar', 'Nalasopara', 'Naigaon'],
    property: ['Andheri', 'Bandra', 'Borivali', 'Vasai', 'Virar', 'Boisar', 'Palghar', 'Nalasopara', 'Naigaon'],
    construction: ['Mumbai', 'Vasai', 'Virar', 'Boisar', 'Palghar', 'Nalasopara']
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src="/images/hero.jpg"
           alt="N Enterprise - Expert Loan, Property & Construction Services in Mumbai"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/80 to-primary-dark/70" />
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A44C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </motion.div>

      {/* Animated Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
          className="grid lg:grid-cols-2 gap-16 items-center py-20"
        >
          {/* Left Content */}
          <div>
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-primary-dark/90 backdrop-blur-sm text-cream px-5 py-2.5 rounded-full mb-8 shadow-lg border border-white/10">
              <Shield size={16} className="text-accent" />
              <span className="text-sm font-medium tracking-wide">TRUSTED BY 270+ CLIENTS</span>
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="text-sm font-medium">PAN INDIA</span>
            </div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Expert Loan Assistance,
              <br />
              <span className="text-accent">Property & Construction</span>
              <br />
              Solutions Across Mumbai
            </motion.h1>

            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              From <span className="font-semibold text-accent">Andheri to Palghar</span>, we help you secure loans, 
              find properties, and complete construction projects. PAN India loan support available.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Free Consultation Button - Original */}
              <Link href="#contact">
                <button className="bg-accent text-primary-dark px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300">
                  Free Consultation
                </button>
              </Link>
              
              {/* View Locations Button - Original Style with Working Popup */}
              <button
                onClick={() => setShowLocations(true)}
                className="px-8 py-4 text-lg font-medium rounded-xl border-2 border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-300"
              >
                View Locations
              </button>
            </motion.div>

            {/* Prime Locations */}
            <motion.div 
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-sm text-white/80">
                <MapPin size={16} className="text-accent" />
                <span className="font-semibold">Prime Locations:</span>
              </div>
              {['Andheri', 'Bandra', 'Borivali'].map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (i * 0.05) }}
                  whileHover={{ scale: 1.1, backgroundColor: '#C9A44C', color: '#2F4F3E' }}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white shadow-sm cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* ... Stats card content (same as before) ... */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                <Award className="text-accent" />
                15+ Years of Excellence
              </h3>
              <div className="space-y-6 mb-8">
                {[
                  { icon: Users, label: 'Loan Clients', value: '121+' },
                  { icon: Home, label: 'Families Housed', value: '150+' },
                  { icon: TrendingUp, label: 'Loans Sanctioned', value: '₹22Cr+' },
                  { icon: Building2, label: 'Projects Completed', value: '3+' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-primary-light/10 rounded-xl flex items-center justify-center">
                      <stat.icon size={20} className="text-primary-dark" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-dark">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="bg-gradient-to-r from-primary-dark/5 to-primary/5 rounded-xl p-5 border border-primary-light/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Need immediate assistance?</p>
                    <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-xl font-bold text-primary-dark hover:text-accent transition-colors flex items-center gap-2">
                      <Phone size={18} className="text-accent" />
                      +91 {process.env.NEXT_PUBLIC_PHONE}
                    </a>
                  </div>
                  <span className="bg-accent/20 text-accent-dark px-3 py-1.5 rounded-full text-xs font-semibold animate-pulse">24/7</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Locations Popup Modal */}
      <AnimatePresence>
        {showLocations && (
          <motion.div
            key="locations-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowLocations(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-primary-dark text-white p-6 rounded-t-3xl flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin size={24} className="text-accent" />
                  <h2 className="text-2xl font-bold">Our Service Locations</h2>
                </div>
                <button onClick={() => setShowLocations(false)} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                {/* PAN India Highlight */}
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-2xl mb-8 border border-accent/20">
                  <h3 className="text-xl font-bold text-primary-dark mb-2 flex items-center gap-2">
                    <Award size={20} className="text-accent" />
                    PAN India Loan Support
                  </h3>
                  <p className="text-gray-600">We provide loan assistance across all major cities in India.</p>
                </div>

                {/* Locations Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-accent border-b border-accent/20 pb-2">Loans (PAN India)</h3>
                    <div className="flex flex-wrap gap-2">
                      {allLocations.loans.slice(0, 12).map((loc, i) => (
                        <span key={i} className="px-3 py-1.5 bg-primary/5 text-primary-dark rounded-full text-xs font-medium">{loc}</span>
                      ))}
                      <span className="px-3 py-1.5 bg-accent/10 text-accent-dark rounded-full text-xs font-medium">+ All Major Cities</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-accent border-b border-accent/20 pb-2">Property Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {allLocations.property.map((loc, i) => (
                        <span key={i} className="px-3 py-1.5 bg-primary/5 text-primary-dark rounded-full text-xs font-medium">{loc}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-accent border-b border-accent/20 pb-2">Construction</h3>
                    <div className="flex flex-wrap gap-2">
                      {allLocations.construction.map((loc, i) => (
                        <span key={i} className="px-3 py-1.5 bg-primary/5 text-primary-dark rounded-full text-xs font-medium">{loc}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-500">Don't see your location? We provide <span className="font-bold text-accent">PAN India</span> loan support.</p>
                  <Link href="#contact" onClick={() => setShowLocations(false)} className="inline-block mt-4 bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary-dark transition-colors">
                    Enquire for Your Location
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block z-20"
      >
        <motion.div className="flex flex-col items-center gap-2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-xs uppercase tracking-wider text-white/80">Scroll</span>
          <div className="w-5 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 h-2 bg-accent rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}