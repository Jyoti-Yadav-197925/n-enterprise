'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scale, Home, Briefcase, Building2, Car, Sparkles } from 'lucide-react'

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
    const amount = maxEMI * 12 * 5
    setEligibleAmount(Math.max(0, Math.round(amount / 100000) * 100000))
    setShowDetailed(true)
  }

  return (
    <div id="loan-eligibility" className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A44C] to-[#B38F3A] rounded-2xl flex items-center justify-center">
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
                <p className="text-4xl md:text-5xl font-bold text-[#2F4F3E]">
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

export default LoanEligibility