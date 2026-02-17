'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronRight, Phone, Home, Briefcase, Car, 
  Building2, Landmark, Shield, Hammer, Store, Factory, 
  Calculator, Percent, FileText, Scale, TrendingUp,
  Users, Award, CheckCircle, Clock, IndianRupee, ChevronDown
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/Button'

const navItems = [
  { 
    name: 'Home', 
    href: '/' 
  },
  { 
    name: 'Loans', 
    href: '/loan',
    dropdown: [
      { 
        title: '🏦 Loan Products', 
        items: [
          { 
            icon: Home, 
            name: 'Home Loan', 
            href: '/loan#home-loan',
            description: 'Purchase, construction, renovation',
          },
          { 
            icon: Building2, 
            name: 'Mortgage Loan', 
            href: '/loan#mortgage-loan', 
            description: 'Against existing property',
          },
          { 
            icon: Landmark, 
            name: 'Loan Against Property', 
            href: '/loan#loan-against-property', 
            description: 'Unlock property value',
          },
          { 
            icon: Briefcase, 
            name: 'Project Loan',  // ← CHANGED
            href: '/loan#project-loan', 
            description: 'Construction finance for builders',
          },
          { 
            icon: Car, 
            name: 'Vehicle Loan', 
            href: '/loan#vehicle-loan', 
            description: 'Car, bike, commercial',
          },
        ]
      },
      {
        title: '📋 Document Checklist',
        items: [
          { 
            name: 'Salaried Person', 
            href: '/loan#salaried-docs',
            icon: Users,
          },
          { 
            name: 'Self Employed', 
            href: '/loan#business-docs',
            icon: Briefcase,
          },
          { 
            name: 'Business Owner', 
            href: '/loan#business-docs',
            icon: Building2,
          },
          { 
            name: 'Property Documents', 
            href: '/loan#property-docs',
            icon: Landmark,
          },
        ]
      },
      {
        title: '🎯 Eligibility Criteria',
        items: [
          { 
            name: 'CIBIL Score Guide', 
            href: '/loan#cibil-guide',
            icon: TrendingUp
          },
          { 
            name: 'Income Criteria', 
            href: '/loan#income-criteria',
            icon: IndianRupee
          },
          { 
            name: 'Age Criteria', 
            href: '/loan#age-criteria',
            icon: Clock
          },
          { 
            name: 'Check Eligibility', 
            href: '/loan#eligibility',
            icon: Scale
          },
        ]
      }
    ]
  },
  { 
    name: 'Property', 
    href: '/property',
    dropdown: [
      {
        title: '🏠 Buy Property',
        items: [
          { 
            name: 'Residential Flats', 
            href: '/property#residential',
            icon: Home
          },
          { 
            name: 'Commercial Shops', 
            href: '/property#commercial',
            icon: Store
          },
          { 
            name: 'Land & Plots', 
            href: '/property#land',
            icon: Factory
          },
        ]
      },
      {
        title: '💰 Sell Property',
        items: [
          { 
            name: 'Free Valuation', 
            href: '/contact',  
            icon: Scale
          },
          { 
            name: 'List Your Property', 
            href: '/contact',  
            icon: Users
          },
          { 
            name: 'Legal Assistance', 
            href: '/contact',  
            icon: Shield
          },
        ]
      },
      {
        title: '🔑 Rent/Lease',
        items: [
          { 
            name: 'Flats on Rent', 
            href: '/property#rent',
            icon: Home
          },
          { 
            name: 'Shops on Lease', 
            href: '/property#rent',
            icon: Store
          },
          { 
            name: 'Godowns/Warehouse', 
            href: '/property#rent',
            icon: Factory
          },
        ]
      }
    ]
  },
  { 
    name: 'Construction', 
    href: '/construction',
    dropdown: [
      {
        title: '🏗️ Services',
        items: [
          { 
            name: 'Redevelopment', 
            href: '/construction#redevelopment',
            icon: Building2
          },
          { 
            name: 'Stalled Projects', 
            href: '/construction#stalled',
            icon: Hammer
          },
          { 
            name: 'New Construction', 
            href: '/construction#new',
            icon: Home
          },
          { 
            name: 'Renovation', 
            href: '/construction#renovation',
            icon: Hammer
          },
        ]
      },
      {
        title: '✅ Completed Projects',
        items: [
          { 
            name: 'Balwant Residency - Boisar',  // ← UPDATED
            href: '/construction#completed',
            icon: Award
          },
          { 
            name: 'Sai Residency - Vasai', 
            href: '/construction#completed',
            icon: Building2
          },
          { 
            name: 'Green Valley - Palghar', 
            href: '/construction#completed',
            icon: Home
          },
        ]
      }
    ]
  },
  { 
    name: 'Tools', 
    href: '/tools',  // ← CHANGED
    dropdown: [
      {
        title: '🧮 Calculators',
        items: [
          { 
            icon: Calculator, 
            name: 'EMI Calculator', 
            href: '/tools#emi-calculator',  // ← UPDATED
          },
          { 
            icon: Percent, 
            name: 'Interest Rate Compare', 
            href: '/tools#rate-compare',  // ← UPDATED
          },
          { 
            icon: Scale, 
            name: 'Loan Eligibility', 
            href: '/tools#eligibility',  // ← UPDATED
          },
        ]
      },
      {
        title: '📋 Checkers',
        items: [
          { 
            icon: FileText, 
            name: 'Document Checklist', 
            href: '/tools#document-checklist',  
          },
          { 
            icon: TrendingUp, 
            name: 'CIBIL Score Guide', 
            href: '/loan#cibil-guide',  
          },
          { 
            icon: Shield, 
            name: 'Property Valuation', 
            href: '/contact'
          },
        ]
      }
    ]
  },
  { 
    name: 'Contact', 
    href: '/contact' 
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    setActiveDropdown(null)
    
    if (href.startsWith('/')) {
      router.push(href)
    } else if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F6F3E8]/95 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group shrink-0" onClick={(e) => handleNavigation(e, '/')}>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-[#2F4F3E] rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                  <span className="text-xl font-bold text-[#C9A44C] group-hover:scale-110 transition-transform">N</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A44C] to-[#8FAF95] rounded-lg opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#C9A44C] rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#2F4F3E] leading-tight">N ENTERPRISE</span>
                <span className="text-[8px] tracking-wider text-[#4F6F52]/70 uppercase">Since 2008</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <div className="flex items-center gap-0.5 bg-white/20 backdrop-blur-sm rounded-xl px-1 py-0.5">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button 
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1 transition-all duration-200 ${
                          activeDropdown === item.name 
                            ? 'text-[#C9A44C] bg-[#8FAF95]/20' 
                            : 'text-[#2F4F3E] hover:text-[#C9A44C] hover:bg-[#8FAF95]/10'
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown */}
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="grid grid-cols-3 gap-4 p-4">
                            {item.dropdown.map((section, idx) => (
                              <div key={idx}>
                                <h3 className="font-semibold text-[#2F4F3E] mb-2 text-xs border-b border-[#8FAF95]/20 pb-1">
                                  {section.title}
                                </h3>
                                <ul className="space-y-1">
                                  {section.items.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      <Link
                                        href={subItem.href}
                                        onClick={(e) => handleNavigation(e, subItem.href)}
                                        className="block text-xs text-gray-600 hover:text-[#C9A44C] transition-colors p-1.5 rounded-md hover:bg-[#F6F3E8]/50 cursor-pointer"
                                      >
                                        <div className="flex items-start gap-2">
                                          {'icon' in subItem && subItem.icon && (
                                            <subItem.icon size={12} className="text-[#C9A44C] mt-0.5" />
                                          )}
                                          <div>
                                            <span className="font-medium text-[#2F4F3E] text-xs">
                                              {subItem.name}
                                            </span>
                                          </div>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg text-[#2F4F3E] hover:text-[#C9A44C] hover:bg-[#8FAF95]/10 inline-block transition-all duration-200 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              className="flex items-center gap-1 text-[#2F4F3E] hover:text-[#C9A44C] transition-colors relative cursor-pointer px-3 py-1.5"
            >
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <Phone size={14} />
              <span className="text-xs font-semibold">24/7</span>
            </a>
            <Link href="/contact">
              <button className="bg-[#2F4F3E] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors">
                Free Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={20} className="text-[#2F4F3E]" /> : <Menu size={20} className="text-[#2F4F3E]" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-[#F6F3E8] overflow-y-auto z-40 shadow-xl"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-[#8FAF95]/20 last:border-0">
                    {item.dropdown ? (
                      <details className="group">
                        <summary className="flex items-center justify-between text-[#2F4F3E] font-semibold py-4 text-base cursor-pointer list-none">
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4 text-[#C9A44C] group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="mt-2 pl-4 pb-4 space-y-4">
                          {item.dropdown.map((section) => (
                            <div key={section.title}>
                              <h4 className="text-xs font-bold text-[#4F6F52] uppercase tracking-wider mb-2">
                                {section.title}
                              </h4>
                              <div className="space-y-2">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={(e) => handleNavigation(e, subItem.href)}
                                    className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-[#C9A44C]"
                                  >
                                    {'icon' in subItem && subItem.icon && (
                                      <subItem.icon size={16} className="text-[#C9A44C]" />
                                    )}
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href)}
                        className="block py-4 text-[#2F4F3E] font-semibold hover:text-[#C9A44C] text-base"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact */}
                <div className="mt-8 pt-6 border-t border-[#8FAF95]/20 space-y-4">
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                    className="flex items-center justify-center gap-3 bg-[#2F4F3E] text-white px-4 py-4 rounded-xl text-sm font-semibold hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors"
                  >
                    <Phone size={18} className="text-[#C9A44C]" />
                    Call: +91 {process.env.NEXT_PUBLIC_PHONE}
                  </a>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-[#C9A44C] text-[#2F4F3E] py-4 rounded-xl font-semibold hover:bg-white transition-colors">
                      Free Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}