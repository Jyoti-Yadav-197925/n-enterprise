'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calculator, TrendingUp, Percent, FileText, Home, Scale,
  ArrowRight, CheckCircle, X, IndianRupee, Calendar, Users,
  Building2, Briefcase, Car, Landmark, Shield, Award, Clock,
  Download, Printer, Share2, BookOpen, GraduationCap, Wallet,
  CreditCard, PiggyBank, Target, Sparkles, ChevronRight, Camera, MapPin
} from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'

// EMI Calculator Component
const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTenure, setLoanTenure] = useState(5)
  const [emi, setEmi] = useState<number | null>(null)
  const [totalInterest, setTotalInterest] = useState<number | null>(null)
  const [totalPayment, setTotalPayment] = useState<number | null>(null)
  const [selectedLoanType, setSelectedLoanType] = useState('home')

  const loanTypes = {
    home: { rate: 8.4, max: 50000000, tenure: 30, name: 'Home Loan' },
    personal: { rate: 10.25, max: 5000000, tenure: 5, name: 'Personal Loan' },
    car: { rate: 7.99, max: 2000000, tenure: 7, name: 'Car Loan' },
    business: { rate: 9.5, max: 20000000, tenure: 10, name: 'Business Loan' },
  }

  const calculateEMI = () => {
    const principal = loanAmount
    const ratePerMonth = interestRate / (12 * 100)
    const months = loanTenure * 12
    
    const emiValue = principal * ratePerMonth * Math.pow(1 + ratePerMonth, months) / (Math.pow(1 + ratePerMonth, months) - 1)
    const totalAmount = emiValue * months
    const interestAmount = totalAmount - principal
    
    setEmi(Math.round(emiValue))
    setTotalInterest(Math.round(interestAmount))
    setTotalPayment(Math.round(totalAmount))
  }

  const handleLoanTypeChange = (type: string) => {
    setSelectedLoanType(type)
    setInterestRate(loanTypes[type as keyof typeof loanTypes].rate)
    setLoanTenure(loanTypes[type as keyof typeof loanTypes].tenure)
    setLoanAmount(loanTypes[type as keyof typeof loanTypes].max / 2)
  }

  return (
    <div id="emi-calculator" className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 card-shine">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#C9A44C] to-[#8FAF95] rounded-2xl flex items-center justify-center animate-float">
            <Calculator size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#2F4F3E]">EMI Calculator</h3>
            <p className="text-sm text-gray-500">Calculate your monthly installments</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Printer size={18} className="text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Download size={18} className="text-gray-500" />
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Loan Type Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Loan Type</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(loanTypes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => handleLoanTypeChange(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedLoanType === key
                      ? 'bg-[#C9A44C] text-[#2F4F3E] shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {value.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
              <span className="text-sm font-semibold text-[#C9A44C]">₹{loanAmount.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100000"
              max={loanTypes[selectedLoanType as keyof typeof loanTypes].max}
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A44C]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹1L</span>
              <span>₹{(loanTypes[selectedLoanType as keyof typeof loanTypes].max / 10000000).toFixed(0)}Cr</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Interest Rate</label>
              <span className="text-sm font-semibold text-[#C9A44C]">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="7"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A44C]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>7%</span>
              <span>15%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Loan Tenure</label>
              <span className="text-sm font-semibold text-[#C9A44C]">{loanTenure} years</span>
            </div>
            <input
              type="range"
              min="1"
              max={loanTypes[selectedLoanType as keyof typeof loanTypes].tenure}
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A44C]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 yr</span>
              <span>{loanTypes[selectedLoanType as keyof typeof loanTypes].tenure} yrs</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateEMI}
            className="w-full bg-gradient-to-r from-[#C9A44C] to-[#B38F3A] text-[#2F4F3E] py-4 rounded-xl font-bold hover:from-[#2F4F3E] hover:to-[#4F6F52] hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <Calculator size={18} className="group-hover:rotate-12 transition-transform" />
            Calculate EMI
          </motion.button>
        </div>

        <div className="bg-gradient-to-br from-[#F6F3E8] to-[#F6F3E8]/50 rounded-2xl p-6 border border-[#8FAF95]/20">
          {emi ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Monthly EMI</p>
                <p className="text-4xl md:text-5xl font-bold text-[#2F4F3E] animate-pulse-slow">
                  ₹{emi.toLocaleString()}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">Principal Amount</p>
                  <p className="text-lg font-bold text-[#2F4F3E]">₹{loanAmount.toLocaleString()}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">Total Interest</p>
                  <p className="text-lg font-bold text-[#C9A44C]">₹{totalInterest?.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Total Payment</p>
                <p className="text-xl font-bold text-[#2F4F3E]">₹{totalPayment?.toLocaleString()}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Loan Tenure</span>
                  <span className="font-semibold text-[#2F4F3E]">{loanTenure} years ({loanTenure * 12} months)</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <Calculator size={48} className="text-[#C9A44C]/30 mb-4" />
              <p className="text-gray-500 mb-2">Enter loan details and click</p>
              <p className="text-lg font-semibold text-[#2F4F3E]">Calculate EMI</p>
              <p className="text-xs text-gray-400 mt-4">to see your monthly installments</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Interest Rate Compare Component
const InterestRateCompare = () => {
  const banks = [
    { name: 'SBI', home: '8.40%', business: '9.75%', personal: '10.50%', property: '8.65%', logo: '🏦' },
    { name: 'HDFC', home: '8.50%', business: '10.00%', personal: '10.75%', property: '8.75%', logo: '🏛️' },
    { name: 'ICICI', home: '8.45%', business: '9.85%', personal: '10.60%', property: '8.70%', logo: '🏢' },
    { name: 'Axis', home: '8.55%', business: '10.25%', personal: '10.90%', property: '8.80%', logo: '🏬' },
    { name: 'N Enterprise', home: '8.35%', business: '9.50%', personal: '10.25%', property: '8.55%', isBest: true, logo: '⭐' },
  ]

  return (
    <div id="rate-compare" className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#2F4F3E] to-[#4F6F52] rounded-2xl flex items-center justify-center animate-pulse-slow">
          <Percent size={24} className="text-[#C9A44C]" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#2F4F3E]">Interest Rate Compare</h3>
          <p className="text-sm text-gray-500">Compare rates from 25+ banks & NBFCs</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-[#F6F3E8] to-[#F6F3E8]/50">
              <th className="px-4 py-4 text-left text-[#2F4F3E] font-semibold rounded-l-xl">Bank</th>
              <th className="px-4 py-4 text-left text-[#2F4F3E] font-semibold">Home Loan</th>
              <th className="px-4 py-4 text-left text-[#2F4F3E] font-semibold">Business</th>
              <th className="px-4 py-4 text-left text-[#2F4F3E] font-semibold">Personal</th>
              <th className="px-4 py-4 text-left text-[#2F4F3E] font-semibold rounded-r-xl">LAP</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`group hover:bg-[#F6F3E8]/50 transition-colors ${
                  bank.isBest ? 'bg-[#C9A44C]/5' : ''
                }`}
              >
                <td className="px-4 py-4 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{bank.logo}</span>
                    <span className={bank.isBest ? 'font-bold text-[#C9A44C]' : 'text-[#2F4F3E]'}>
                      {bank.name}
                    </span>
                    {bank.isBest && (
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, delay: 0.5 }}
                        className="ml-2 px-2 py-1 bg-[#C9A44C] text-[#2F4F3E] text-[10px] rounded-full font-bold animate-pulse"
                      >
                        BEST
                      </motion.span>
                    )}
                  </div>
                </td>
                <td className={`px-4 py-4 font-medium ${bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-gray-700'}`}>
                  {bank.home}
                </td>
                <td className={`px-4 py-4 font-medium ${bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-gray-700'}`}>
                  {bank.business}
                </td>
                <td className={`px-4 py-4 font-medium ${bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-gray-700'}`}>
                  {bank.personal}
                </td>
                <td className={`px-4 py-4 font-medium ${bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-gray-700'}`}>
                  {bank.property}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 bg-gradient-to-r from-[#2F4F3E]/5 to-[#4F6F52]/5 rounded-2xl border border-[#8FAF95]/20"
      >
        <div className="flex items-start gap-3">
          <Award size={20} className="text-[#C9A44C] flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-[#2F4F3E] mb-2">Why choose N Enterprise?</h4>
            <ul className="grid md:grid-cols-3 gap-3 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={14} className="text-[#C9A44C]" />
                Lower interest rates
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={14} className="text-[#C9A44C]" />
                Zero hidden charges
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={14} className="text-[#C9A44C]" />
                95% success rate
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Document Checklist Component - PROFESSIONAL FORMAT

const DocumentChecklist = () => {
  const [activeTab, setActiveTab] = useState('salaried')
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null)

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
          <div className="w-12 h-12 bg-gradient-to-br from-[#2F4F3E] to-[#4F6F52] rounded-2xl flex items-center justify-center animate-bounce-slow">
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
            onClick={() => setActiveTab(key)}
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
          {/* Eligibility Summary - FIXED VERSION */}
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
                    ? currentSection.eligibility.ltv 
                    : currentSection.eligibility.income
                  }
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <p className="text-xs text-gray-500 mb-1">
                  {activeTab === 'property' ? 'Property Age' : 'Experience'}
                </p>
                <p className="font-bold text-[#2F4F3E]">
                  {activeTab === 'property' 
                    ? currentSection.eligibility.propertyAge 
                    : currentSection.eligibility.experience
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Documents Grid - REST OF THE CODE REMAINS SAME */}
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
        <Button href="#contact" variant="primary" size="lg" className="group">
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

// Loan Eligibility Component
const LoanEligibility = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(50000)
  const [existingEMI, setExistingEMI] = useState(0)
  const [loanType, setLoanType] = useState('home')
  const [eligibleAmount, setEligibleAmount] = useState<number | null>(null)
  const [showDetailed, setShowDetailed] = useState(false)

  const loanTypes = {
    home: { 
      name: 'Home Loan', 
      multiplier: 60, 
      maxTenure: 30, 
      rate: 8.4,
      minIncome: 20000,
      icon: Home 
    },
    personal: { 
      name: 'Personal Loan', 
      multiplier: 20, 
      maxTenure: 5, 
      rate: 10.25,
      minIncome: 25000,
      icon: Briefcase 
    },
    business: { 
      name: 'Business Loan', 
      multiplier: 30, 
      maxTenure: 10, 
      rate: 9.5,
      minIncome: 30000,
      icon: Building2 
    },
    vehicle: { 
      name: 'Vehicle Loan', 
      multiplier: 15, 
      maxTenure: 7, 
      rate: 7.99,
      minIncome: 20000,
      icon: Car 
    },
  }

  const calculateEligibility = () => {
    const maxEMI = (monthlyIncome * 0.5) - existingEMI
    const amount = maxEMI * 12 * 5 // 5 year tenure assumption
    setEligibleAmount(Math.max(0, Math.round(amount / 100000) * 100000))
    setShowDetailed(true)
  }

  return (
    <div id="loan-eligibility" className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A44C] to-[#B38F3A] rounded-2xl flex items-center justify-center animate-pulse-slow">
          <Scale size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#2F4F3E]">Loan Eligibility Checker</h3>
          <p className="text-sm text-gray-500">Check how much loan you qualify for</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Loan Type</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(loanTypes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setLoanType(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    loanType === key
                      ? 'bg-[#C9A44C] text-[#2F4F3E] shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <value.icon size={14} />
                  {value.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Monthly Income</label>
              <span className="text-sm font-semibold text-[#C9A44C]">₹{monthlyIncome.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={loanTypes[loanType as keyof typeof loanTypes].minIncome}
              max="500000"
              step="5000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A44C]"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Existing EMI (if any)</label>
              <span className="text-sm font-semibold text-[#C9A44C]">₹{existingEMI.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={existingEMI}
              onChange={(e) => setExistingEMI(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A44C]"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateEligibility}
            className="w-full bg-gradient-to-r from-[#2F4F3E] to-[#4F6F52] text-white py-4 rounded-xl font-bold hover:from-[#C9A44C] hover:to-[#B38F3A] hover:text-[#2F4F3E] transition-all duration-500 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <Scale size={18} className="group-hover:rotate-12 transition-transform" />
            Check Eligibility
          </motion.button>
        </div>

        <div className="bg-gradient-to-br from-[#F6F3E8] to-[#F6F3E8]/50 rounded-2xl p-6 border border-[#8FAF95]/20">
          {eligibleAmount ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">You may be eligible for</p>
                <p className="text-4xl md:text-5xl font-bold text-[#2F4F3E] animate-pulse-slow">
                  ₹{eligibleAmount.toLocaleString()}
                </p>
              </div>
              
              {showDetailed && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h5 className="font-semibold text-[#2F4F3E] mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-[#C9A44C]" />
                      Loan Summary
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Loan Type</span>
                        <span className="font-medium text-[#2F4F3E]">{loanTypes[loanType as keyof typeof loanTypes].name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Rate</span>
                        <span className="font-medium text-[#C9A44C]">{loanTypes[loanType as keyof typeof loanTypes].rate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Max Tenure</span>
                        <span className="font-medium text-[#2F4F3E]">{loanTypes[loanType as keyof typeof loanTypes].maxTenure} years</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#C9A44C]/10 p-4 rounded-xl">
                    <p className="text-xs text-gray-600">
                      <span className="font-bold text-[#C9A44C]">Note:</span> Final approval depends on your CIBIL score, 
                      document verification, and bank policies. This is an estimated amount.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <Scale size={48} className="text-[#C9A44C]/30 mb-4" />
              <p className="text-gray-500 mb-2">Enter your income details</p>
              <p className="text-lg font-semibold text-[#2F4F3E]">Check Eligibility</p>
              <p className="text-xs text-gray-400 mt-4">to see how much loan you can get</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const tools = [
  { id: 'emi', title: 'EMI Calculator', icon: Calculator, component: EMICalculator, href: '#emi-calculator' },
  { id: 'rates', title: 'Interest Rate Compare', icon: Percent, component: InterestRateCompare, href: '#rate-compare' },
  { id: 'documents', title: 'Document Checklist', icon: FileText, component: DocumentChecklist, href: '#document-checklist' },
  { id: 'eligibility', title: 'Loan Eligibility', icon: Scale, component: LoanEligibility, href: '#loan-eligibility' },
]

export default function ToolsSection() {
  const [activeTool, setActiveTool] = useState('emi')

  const handleToolChange = (toolId: string, href: string) => {
    setActiveTool(toolId)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <section id="tools" className="py-20 bg-[#F6F3E8] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A44C]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2F4F3E]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8FAF95]/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Free Financial Tools"
          title="Smart Tools for Smart Decisions"
          description="Use our free calculators and checkers to make informed decisions. No registration required."
          className="mb-12"
        />

        {/* Tool Navigation with Animation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tools.map((tool, idx) => (
            <motion.button
              key={tool.id}
              onClick={() => handleToolChange(tool.id, tool.href)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-md ${
                activeTool === tool.id
                  ? 'bg-[#C9A44C] text-[#2F4F3E] shadow-xl scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tool.icon size={18} className={activeTool === tool.id ? 'animate-pulse' : ''} />
              {tool.title}
              {activeTool === tool.id && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-[#2F4F3E] rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Tool with Animation */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              {activeTool === 'emi' && <EMICalculator />}
              {activeTool === 'rates' && <InterestRateCompare />}
              {activeTool === 'documents' && <DocumentChecklist />}
              {activeTool === 'eligibility' && <LoanEligibility />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Why Choose Us - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { 
              icon: Shield, 
              title: '100% Transparent', 
              desc: 'No hidden charges, complete fee disclosure before processing',
              color: 'from-blue-500 to-blue-600',
              stat: 'Zero Hidden Costs'
            },
            { 
              icon: TrendingUp, 
              title: 'Best Interest Rates', 
              desc: 'Lower than market rates through direct bank negotiation',
              color: 'from-green-500 to-green-600',
              stat: 'Save up to 1.5%'
            },
            { 
              icon: Award, 
              title: '95% Success Rate', 
              desc: 'Even for low CIBIL and previously rejected cases',
              color: 'from-[#C9A44C] to-[#B38F3A]',
              stat: '500+ Happy Clients'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group card-shine"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-50`} />
              <div className="w-16 h-16 bg-gradient-to-br from-[#2F4F3E] to-[#4F6F52] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                <item.icon size={28} className="text-[#C9A44C] group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-bold text-[#2F4F3E] mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              <span className="inline-block px-3 py-1 bg-[#C9A44C]/10 text-[#C9A44C] rounded-full text-xs font-semibold">
                {item.stat}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#2F4F3E] to-[#4F6F52] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A44C]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8FAF95]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Need help choosing the right loan?</h3>
              <p className="text-[#F6F3E8]/90">Our experts will analyze your profile and suggest the best option.</p>
            </div>
            <Button 
              href="#contact" 
              variant="secondary" 
              size="lg" 
              className="whitespace-nowrap shadow-2xl hover:shadow-3xl group/btn"
            >
              Talk to Loan Expert
              <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}