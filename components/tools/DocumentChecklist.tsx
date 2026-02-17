'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, Users, Briefcase, Landmark, CreditCard, Wallet, Building2, 
  MapPin, IndianRupee, CheckCircle, BookOpen, Target, ArrowRight, ChevronRight,
  Camera, Award, Download, Printer
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/common/Button'

const DocumentChecklist = () => {
  const [activeTab, setActiveTab] = useState('salaried')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#salaried-docs') {
        setActiveTab('salaried')
        document.getElementById('salaried-docs')?.scrollIntoView({ behavior: 'smooth' })
      } else if (hash === '#business-docs') {
        setActiveTab('business')
        document.getElementById('business-docs')?.scrollIntoView({ behavior: 'smooth' })
      } else if (hash === '#property-docs') {
        setActiveTab('property')
        document.getElementById('property-docs')?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const documentSections = {
    salaried: {
      id: 'salaried-docs',
      title: 'Salaried Person',
      icon: Users,
      color: 'blue',
      documents: [
        {
          category: 'Identity & Address Proof',
          icon: CreditCard,
          items: [
            { name: 'Aadhaar Card', required: true, notes: 'Original for verification' },
            { name: 'PAN Card', required: true, notes: 'Mandatory for all loans' },
            { name: 'Passport/Voter ID/Driving License', required: false, notes: 'Any one additional ID' },
          ]
        },
        {
          category: 'Income Proof',
          icon: Wallet,
          items: [
            { name: 'Last 3 months Salary Slips', required: true, notes: 'With company stamp' },
            { name: 'Last 6 months Bank Statement', required: true, notes: 'Salary account' },
            { name: 'Form 16 - Last 2 years', required: true, notes: 'From employer' },
            { name: 'Employment Certificate', required: true, notes: 'On company letterhead' },
          ]
        },
        {
          category: 'Employment Proof',
          icon: Briefcase,
          items: [
            { name: 'Employee ID Card', required: true, notes: 'Front & back copy' },
            { name: 'Latest Appointment Letter', required: true, notes: 'If job tenure < 2 years' },
            { name: 'Previous Employer Experience Letter', required: false, notes: 'If applicable' },
          ]
        },
        {
          category: 'Photographs',
          icon: Camera,
          items: [
            { name: 'Passport Size Photos', required: true, notes: '4 copies, white background' },
          ]
        },
      ],
      eligibility: {
        cibil: '750+ (Best rates)',
        age: '21 to 58 years',
        income: '₹20,000 per month minimum',
        experience: '1+ year current job',
      }
    },
    business: {
      id: 'business-docs',
      title: 'Self Employed / Business',
      icon: Briefcase,
      color: 'purple',
      documents: [
        {
          category: 'Identity & Address Proof',
          icon: CreditCard,
          items: [
            { name: 'Aadhaar Card', required: true, notes: 'Original for verification' },
            { name: 'PAN Card', required: true, notes: 'Mandatory for all loans' },
            { name: 'Passport/Voter ID/Driving License', required: false, notes: 'Any one additional ID' },
          ]
        },
        {
          category: 'Business Proof',
          icon: Building2,
          items: [
            { name: 'GST Registration Certificate', required: true, notes: 'If registered' },
            { name: 'Udyam/MSME Certificate', required: true, notes: 'For MSME benefits' },
            { name: 'Shop & Establishment Act License', required: true, notes: 'Local body license' },
            { name: 'Trade License / Gumasta', required: true, notes: 'Municipal license' },
            { name: 'Partnership Deed / MOA & AOA', required: true, notes: 'For firms/companies' },
          ]
        },
        {
          category: 'Income Proof',
          icon: Wallet,
          items: [
            { name: 'IT Returns - Last 3 Years', required: true, notes: 'With computation of income' },
            { name: 'Business Bank Statements', required: true, notes: 'Last 12 months - current & savings' },
            { name: 'Profit & Loss Account', required: true, notes: 'CA certified' },
            { name: 'Balance Sheet', required: true, notes: 'CA certified' },
          ]
        },
        {
          category: 'Business Address Proof',
          icon: MapPin,
          items: [
            { name: 'Rent Agreement', required: true, notes: 'If rented premises' },
            { name: 'Electricity Bill', required: true, notes: 'Last 3 months' },
            { name: 'Property Tax Receipt', required: true, notes: 'If owned' },
          ]
        },
      ],
      eligibility: {
        cibil: '700+ (Good)',
        age: '21 to 65 years',
        income: 'ITR showing minimum ₹3L/year',
        experience: '3+ years business vintage',
      }
    },
    property: {
      id: 'property-docs',
      title: 'Property / Mortgage Loan',
      icon: Landmark,
      color: 'amber',
      documents: [
        {
          category: 'Property Title Documents',
          icon: FileText,
          items: [
            { name: 'Sale Deed / Conveyance Deed', required: true, notes: 'Registered document' },
            { name: 'Index II', required: true, notes: 'Encumbrance certificate' },
            { name: '7/12 Extract', required: true, notes: 'For land/agricultural' },
            { name: 'City Survey Record', required: true, notes: 'Property card' },
          ]
        },
        {
          category: 'Property Approvals',
          icon: CheckCircle,
          items: [
            { name: 'Building Plan Approval', required: true, notes: 'From local authority' },
            { name: 'Occupation Certificate (OC)', required: true, notes: 'Completion certificate' },
            { name: 'Commencement Certificate', required: true, notes: 'If under construction' },
          ]
        },
        {
          category: 'Society Documents',
          icon: Building2,
          items: [
            { name: 'Society Share Certificate', required: true, notes: 'For apartments' },
            { name: 'Society NOC', required: true, notes: 'No Objection Certificate' },
            { name: 'Maintenance Bill', required: true, notes: 'Last 3 months' },
          ]
        },
        {
          category: 'Tax & Utilities',
          icon: IndianRupee,
          items: [
            { name: 'Property Tax Receipt', required: true, notes: 'Last 3 years' },
            { name: 'Water Tax Receipt', required: true, notes: 'If applicable' },
            { name: 'Electricity Bill', required: true, notes: 'Last 3 months' },
          ]
        },
      ],
      eligibility: {
        cibil: '675+',
        age: '21 to 65 years',
        ltv: 'Up to 75% of property value',
        propertyAge: 'Upto 40 years old',
      }
    }
  }

  const currentSection = documentSections[activeTab as keyof typeof documentSections]

  return (
    <div id="document-checklist" className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#2F4F3E] to-[#4F6F52] rounded-2xl flex items-center justify-center">
            <FileText size={24} className="text-[#C9A44C]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#2F4F3E]">Document Checklist</h3>
            <p className="text-sm text-gray-500">Complete list of documents required for loan approval</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Download size={18} className="text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Printer size={18} className="text-gray-500" />
          </button>
        </div>
      </div>
      
      {/* Category Tabs */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {Object.entries(documentSections).map(([key, section]) => (
          <motion.button
            key={key}
            onClick={() => {
              setActiveTab(key)
              window.location.hash = section.id
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeTab === key
                ? 'bg-[#C9A44C] text-[#2F4F3E] shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <section.icon size={16} />
            {section.title}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Eligibility Summary */}
          <div className={`bg-${currentSection.color}-50 p-5 rounded-2xl border border-${currentSection.color}-200`}>
            <h4 className="font-bold text-[#2F4F3E] mb-3 flex items-center gap-2">
              <Target size={18} className="text-[#C9A44C]" />
              Eligibility Criteria
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-xs text-gray-500 mb-1">CIBIL Score</p>
                <p className="font-bold text-[#2F4F3E]">{currentSection.eligibility.cibil}</p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Age Criteria</p>
                <p className="font-bold text-[#2F4F3E]">{currentSection.eligibility.age}</p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-xs text-gray-500 mb-1">
                  {activeTab === 'property' ? 'LTV Ratio' : 'Income Required'}
                </p>
                <p className="font-bold text-[#2F4F3E]">
                  {activeTab === 'property' 
                    ? (currentSection.eligibility as any).ltv 
                    : (currentSection.eligibility as any).income}
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-xs text-gray-500 mb-1">
                  {activeTab === 'property' ? 'Property Age' : 'Experience'}
                </p>
                <p className="font-bold text-[#2F4F3E]">
                  {activeTab === 'property' 
                    ? (currentSection.eligibility as any).propertyAge 
                    : (currentSection.eligibility as any).experience}
                </p>
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {currentSection.documents.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F6F3E8]/30 p-5 rounded-2xl border border-[#8FAF95]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 bg-${currentSection.color}-100 rounded-lg flex items-center justify-center`}>
                    <section.icon size={16} className={`text-${currentSection.color}-600`} />
                  </div>
                  <h5 className="font-semibold text-[#2F4F3E]">{section.category}</h5>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (idx * 0.1) + (itemIdx * 0.05) }}
                      className="flex items-start gap-2 text-sm group"
                    >
                      {item.required ? (
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      ) : (
                        <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${item.required ? 'text-[#2F4F3E]' : 'text-gray-600'}`}>
                            {item.name}
                          </span>
                          {item.required && (
                            <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        {item.notes && (
                          <p className="text-xs text-gray-500 mt-0.5">{item.notes}</p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="bg-[#C9A44C]/10 p-5 rounded-2xl border border-[#C9A44C]/30">
            <div className="flex items-start gap-3">
              <BookOpen size={18} className="text-[#C9A44C] flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-[#2F4F3E] mb-2">Important Guidelines</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C9A44C] rounded-full" />
                    All documents must be self-attested
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C9A44C] rounded-full" />
                    Carry original documents for verification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C9A44C] rounded-full" />
                    Additional documents may be requested based on profile
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <Button href="/contact" variant="primary" size="lg" className="group">
          Get Expert Assistance
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-xs text-gray-500 mt-3">
          Our loan experts will help you prepare all documents correctly
        </p>
      </motion.div>
    </div>
  )
}

export default DocumentChecklist