'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronRight, Phone, Home, Briefcase, Car, 
  Building2, Landmark, Shield, Hammer, Store, Factory, 
  Calculator, Percent, FileText, Scale, TrendingUp,
  Users, Award, CheckCircle, Clock, IndianRupee
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/common/Button'

const navItems = [
  { 
    name: 'Home', 
    href: '/' 
  },
  { 
    name: 'Loans', 
    href: '#loans',
    dropdown: [
      { 
        title: '🏦 Loan Products', 
        items: [
          { 
            icon: Home, 
            name: 'Home Loan', 
            href: '#loans', 
            description: 'Purchase, construction, renovation',
            details: 'Up to ₹5Cr • 8.40% • 30 years',
            cibil: '650+',
            processing: '3-5 days'
          },
          { 
            icon: Building2, 
            name: 'Mortgage Loan', 
            href: '#loans', 
            description: 'Against existing property',
            details: 'Up to ₹10Cr • 8.65% • 15 years',
            cibil: '700+',
            processing: '5-7 days'
          },
          { 
            icon: Landmark, 
            name: 'Loan Against Property', 
            href: '#loans', 
            description: 'Unlock property value',
            details: 'Up to ₹10Cr • 8.55% • 20 years',
            cibil: '675+',
            processing: '4-6 days'
          },
          { 
            icon: Briefcase, 
            name: 'Personal Loan', 
            href: '#loans', 
            description: 'Unsecured instant loans',
            details: 'Up to ₹50L • 10.25% • 5 years',
            cibil: '700+',
            processing: '24 hours'
          },
          { 
            icon: Car, 
            name: 'Vehicle Loan', 
            href: '#loans', 
            description: 'Car, bike, commercial',
            details: 'Up to ₹2Cr • 7.99% • 7 years',
            cibil: '650+',
            processing: '2-3 days'
          },
        ]
      },
      {
        title: '📋 Document Checklist',
        href: '#document-checklist',
        items: [
          { 
            name: 'Salaried Person', 
            href: '#salaried-docs',
            icon: Users,
            count: '5 documents'
          },
          { 
            name: 'Self Employed', 
            href: '#business-docs',
            icon: Briefcase,
            count: '6 documents'
          },
          { 
            name: 'Business Owner', 
            href: '#business-docs',
            icon: Building2,
            count: '7 documents'
          },
          { 
            name: 'Property Documents', 
            href: '#property-docs',
            icon: Landmark,
            count: '4 documents'
          },
        ]
      },
      {
        title: '🎯 Eligibility Criteria',
        href: '#eligibility-criteria',
        items: [
          { 
            name: 'CIBIL Score Guide', 
            href: '#cibil-guide',
            value: '750+ Best',
            icon: TrendingUp
          },
          { 
            name: 'Income Criteria', 
            href: '#income-criteria',
            value: '₹20,000/month',
            icon: IndianRupee
          },
          { 
            name: 'Age Criteria', 
            href: '#age-criteria',
            value: '21-60 years',
            icon: Clock
          },
          { 
            name: 'Check Eligibility', 
            href: '#tools',
            value: 'Calculate Now',
            icon: Scale
          },
        ]
      }
    ]
  },
  { 
    name: 'Property', 
    href: '#property',
    dropdown: [
      {
        title: '🏠 Buy Property',
        href: '#property-buy',
        items: [
          { 
            name: 'Residential Flats', 
            href: '#property-buy',
            locations: ['Andheri', 'Bandra', 'Borivali', 'Vasai'],
            price: '₹45L onwards',
            icon: Home
          },
          { 
            name: 'Commercial Shops', 
            href: '#property-buy',
            locations: ['Oshiwara', 'Bhayandar', 'Virar'],
            price: '₹25L onwards',
            icon: Store
          },
          { 
            name: 'Land & Plots', 
            href: '#property-buy',
            locations: ['Boisar', 'Palghar', 'Vasai'],
            price: '₹15L onwards',
            icon: Factory
          },
        ]
      },
      {
        title: '💰 Sell Property',
        href: '#property-sell',
        items: [
          { 
            name: 'Free Valuation', 
            href: '#tools',
            value: 'Get Estimate',
            icon: Scale
          },
          { 
            name: 'List Your Property', 
            href: '#contact',
            value: '200+ buyers',
            icon: Users
          },
          { 
            name: 'Legal Assistance', 
            href: '#contact',
            value: 'Title verification',
            icon: Shield
          },
        ]
      },
      {
        title: '🔑 Rent/Lease',
        href: '#property-rent',
        items: [
          { 
            name: 'Flats on Rent', 
            href: '#property-rent',
            locations: ['Vasai', 'Virar', 'Boisar'],
            price: '₹8k-25k/month',
            icon: Home
          },
          { 
            name: 'Shops on Lease', 
            href: '#property-rent',
            locations: ['Nalasopara', 'Vasai'],
            price: '₹15k-50k/month',
            icon: Store
          },
          { 
            name: 'Godowns/Warehouse', 
            href: '#property-rent',
            locations: ['Boisar', 'Palghar'],
            price: '₹25k-75k/month',
            icon: Factory
          },
        ]
      }
    ]
  },
  { 
    name: 'Construction', 
    href: '#construction',
    dropdown: [
      {
        title: '🏗️ Services',
        href: '#construction-services',
        items: [
          { 
            name: 'Redevelopment', 
            href: '#construction',
            models: ['70:30', '65:35', '60:40'],
            roi: 'High ROI',
            icon: Building2
          },
          { 
            name: 'Stalled Projects', 
            href: '#construction',
            completion: 'Complete in 12-18 months',
            icon: Hammer
          },
          { 
            name: 'New Construction', 
            href: '#construction',
            warranty: '5 years',
            icon: Home
          },
          { 
            name: 'Renovation', 
            href: '#construction',
            timeline: '2-6 months',
            icon: Hammer
          },
        ]
      },
      {
        title: '✅ Completed Projects',
        href: '#completed-projects',
        items: [
          { 
            name: 'Lotus Tower - Boisar', 
            href: '#construction',
            units: '64 apartments',
            status: 'Completed 2024',
            icon: Award
          },
          { 
            name: 'Sai Residency - Vasai', 
            href: '#construction',
            units: '48 apartments',
            status: 'Ongoing',
            icon: Building2
          },
          { 
            name: 'Green Valley - Palghar', 
            href: '#construction',
            units: '96 units',
            status: 'Completed 2024',
            icon: Home
          },
        ]
      }
    ]
  },
  { 
    name: 'Tools', 
    href: '#tools',
    dropdown: [
      {
        title: '🧮 Calculators',
        href: '#calculators',
        items: [
          { 
            icon: Calculator, 
            name: 'EMI Calculator', 
            href: '#emi-calculator',
            description: 'Home, Personal, Car Loan',
            popular: true
          },
          { 
            icon: Percent, 
            name: 'Interest Rate Compare', 
            href: '#rate-compare',
            description: 'Compare 25+ banks',
          },
          { 
            icon: Scale, 
            name: 'Loan Eligibility', 
            href: '#loan-eligibility',
            description: 'Check how much you qualify',
          },
        ]
      },
      {
        title: '📋 Checkers',
        href: '#checkers',
        items: [
          { 
            icon: FileText, 
            name: 'Document Checklist', 
            href: '#document-checklist',
            description: 'Salaried, Business, Property',
          },
          { 
            icon: TrendingUp, 
            name: 'CIBIL Score Guide', 
            href: '#cibil-guide',
            description: 'Improve your score',
          },
          { 
            icon: Shield, 
            name: 'Property Valuation', 
            href: '#property-valuation',
            description: 'Market price estimate',
          },
        ]
      }
    ]
  },
  { 
    name: 'Contact', 
    href: '#contact' 
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    setActiveDropdown(null)
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#F6F3E8]/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo with Animation */}
        <Link href="/" className="relative group" onClick={(e) => handleSmoothScroll(e, '/')}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-[#2F4F3E] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                <span className="text-2xl font-bold text-[#C9A44C] group-hover:scale-110 transition-transform">N</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A44C] to-[#8FAF95] rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-500 animate-pulse-slow" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#C9A44C] rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#2F4F3E] leading-none">N ENTERPRISE</span>
              <span className="text-[10px] tracking-wider text-[#4F6F52]/70 uppercase">Since 2008</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation with Dropdowns */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <button className="px-4 py-2 text-[#2F4F3E] hover:text-[#C9A44C] transition-all duration-300 text-sm font-medium rounded-lg hover:bg-[#8FAF95]/10 flex items-center gap-1 group">
                    {item.name}
                    <ChevronRight size={14} className="rotate-90 group-hover:rotate-180 transition-transform duration-500" />
                  </button>
                  
                  {/* Mega Dropdown with Animation */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 w-[750px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    style={{
                      opacity: activeDropdown === item.name ? 1 : 0,
                      visibility: activeDropdown === item.name ? 'visible' : 'hidden',
                      transform: `translateY(${activeDropdown === item.name ? '0' : '20'}px)`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {item.dropdown.map((section, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {section.href ? (
                            <Link
                              href={section.href}
                              onClick={(e) => handleSmoothScroll(e, section.href)}
                              className="font-bold text-[#2F4F3E] mb-3 text-sm flex items-center gap-2 hover:text-[#C9A44C] transition-colors"
                            >
                              {section.title}
                              <ChevronRight size={14} />
                            </Link>
                          ) : (
                            <h3 className="font-bold text-[#2F4F3E] mb-3 text-sm">{section.title}</h3>
                          )}
                          <ul className="space-y-2">
                            {section.items.map((subItem, subIdx) => (
                              <motion.li 
                                key={subIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (idx * 0.1) + (subIdx * 0.05) }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => handleSmoothScroll(e, subItem.href)}
                                  className="block text-sm text-gray-600 hover:text-[#C9A44C] transition-all duration-300 p-2 rounded-lg hover:bg-[#F6F3E8]/50 group/item"
                                >
                                  <div className="flex items-start gap-3">
                                    {'icon' in subItem && subItem.icon && (
                                      <div className="mt-1">
                                        <subItem.icon size={14} className="text-[#C9A44C] group-hover/item:scale-110 transition-transform" />
                                      </div>
                                    )}
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <span className="font-medium text-[#2F4F3E] group-hover/item:text-[#C9A44C] transition-colors">
                                          {subItem.name}
                                        </span>
                                        {'popular' in subItem && subItem.popular && (
                                          <span className="px-2 py-0.5 bg-[#C9A44C]/20 text-[#C9A44C] text-[10px] rounded-full font-semibold animate-pulse">
                                            Popular
                                          </span>
                                        )}
                                      </div>
                                      
                                      {'description' in subItem && subItem.description && (
                                        <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                      )}
                                      
                                      {'details' in subItem && subItem.details && (
                                        <p className="text-xs text-[#4F6F52] mt-1 font-medium">{subItem.details}</p>
                                      )}
                                      
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {'cibil' in subItem && subItem.cibil && (
                                          <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                                            CIBIL {subItem.cibil}
                                          </span>
                                        )}
                                        {'processing' in subItem && subItem.processing && (
                                          <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                                            {subItem.processing}
                                          </span>
                                        )}
                                        {'value' in subItem && subItem.value && (
                                          <span className="text-[10px] bg-[#C9A44C]/10 text-[#C9A44C] px-1.5 py-0.5 rounded font-medium">
                                            {subItem.value}
                                          </span>
                                        )}
                                        {'count' in subItem && subItem.count && (
                                          <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                                            {subItem.count}
                                          </span>
                                        )}
                                      </div>
                                      
                                      {'locations' in subItem && subItem.locations && (
                                        <p className="text-[10px] text-gray-500 mt-1">
                                          📍 {subItem.locations.join(' • ')}
                                        </p>
                                      )}
                                      
                                      {'price' in subItem && subItem.price && (
                                        <p className="text-xs font-semibold text-[#C9A44C] mt-1">
                                          {subItem.price}
                                        </p>
                                      )}
                                      
                                      {'models' in subItem && subItem.models && (
                                        <div className="flex gap-1 mt-1">
                                          {subItem.models.map((model, i) => (
                                            <span key={i} className="text-[10px] bg-[#2F4F3E]/10 text-[#2F4F3E] px-1.5 py-0.5 rounded">
                                              {model}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    {item.name === 'Loans' && (
                      <div className="bg-gradient-to-r from-[#2F4F3E] to-[#4F6F52] px-6 py-3">
                        <div className="flex items-center justify-between text-white text-xs">
                          <span className="flex items-center gap-1">
                            <CheckCircle size={12} />
                            Lowest Interest Rates
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            Approval in 24 Hours
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={12} />
                            500+ Happy Clients
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="px-4 py-2 text-[#2F4F3E] hover:text-[#C9A44C] transition-all duration-300 text-sm font-medium rounded-lg hover:bg-[#8FAF95]/10 inline-block"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#2F4F3E] hover:text-[#C9A44C] transition-colors relative"
          >
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <Phone size={18} />
            <span className="text-sm font-semibold">24/7</span>
          </motion.a>
          <Button href="#contact" variant="primary" size="sm" className="animate-glow">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} className="text-[#2F4F3E]" /> : <Menu size={24} className="text-[#2F4F3E]" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 pt-20 pb-8 px-6 bg-[#F6F3E8] shadow-2xl z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="border-b border-[#8FAF95]/20 pb-4"
                >
                  {item.dropdown ? (
                    <>
                      <div className="text-[#2F4F3E] font-medium mb-2 flex items-center justify-between">
                        {item.name}
                        <ChevronRight size={16} className="text-[#C9A44C]" />
                      </div>
                      <div className="pl-4 space-y-3">
                        {item.dropdown.map((section) => (
                          <div key={section.title} className="mb-3">
                            {section.href ? (
                              <Link
                                href={section.href}
                                onClick={(e) => handleSmoothScroll(e, section.href)}
                                className="text-xs font-semibold text-[#4F6F52] mb-2 flex items-center gap-1 hover:text-[#C9A44C] transition-colors"
                              >
                                {section.title}
                                <ChevronRight size={12} />
                              </Link>
                            ) : (
                              <div className="text-xs font-semibold text-[#4F6F52] mb-2">{section.title}</div>
                            )}
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={(e) => handleSmoothScroll(e, subItem.href)}
                                className="block py-2 text-sm text-gray-600 hover:text-[#C9A44C] transition-colors"
                              >
                                <div className="flex items-center gap-2">
                                  {'icon' in subItem && subItem.icon && (
                                    <subItem.icon size={14} className="text-[#C9A44C]" />
                                  )}
                                  {subItem.name}
                                </div>
                                {'description' in subItem && subItem.description && (
                                  <p className="text-xs text-gray-500 mt-0.5 ml-6">{subItem.description}</p>
                                )}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="block py-2 text-[#2F4F3E] font-medium hover:text-[#C9A44C] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 space-y-3"
              >
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                  className="flex items-center justify-center gap-2 bg-[#8FAF95]/20 text-[#2F4F3E] px-6 py-3 rounded-full font-medium hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors"
                >
                  <Phone size={18} />
                  Call: +91 {process.env.NEXT_PUBLIC_PHONE}
                </a>
                <Button href="#contact" variant="primary" fullWidth onClick={() => setIsOpen(false)}>
                  Free Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}