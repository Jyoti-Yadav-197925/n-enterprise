'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Printer, Download, ArrowRight } from 'lucide-react'

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
    <div id="emi-calculator" className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#C9A44C] to-[#8FAF95] rounded-2xl flex items-center justify-center">
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
                <p className="text-4xl md:text-5xl font-bold text-[#2F4F3E]">
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

export default EMICalculator