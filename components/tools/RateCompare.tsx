'use client'

import { motion } from 'framer-motion'
import { Percent, Award, CheckCircle, TrendingDown, Shield, Clock } from 'lucide-react'

const InterestRateCompare = () => {
  const banks = [
    { 
      name: 'SBI', 
      home: '8.40%', 
      business: '9.75%', 
      lap: '8.65%', 
      project: '10.25%',
      logo: '🏦' 
    },
    { 
      name: 'HDFC', 
      home: '8.50%', 
      business: '10.00%', 
      lap: '8.75%', 
      project: '10.50%',
      logo: '🏛️' 
    },
    { 
      name: 'ICICI', 
      home: '8.45%', 
      business: '9.85%', 
      lap: '8.70%', 
      project: '10.35%',
      logo: '🏢' 
    },
    { 
      name: 'Axis', 
      home: '8.55%', 
      business: '10.25%', 
      lap: '8.80%', 
      project: '10.60%',
      logo: '🏬' 
    },
    { 
      name: 'PNB', 
      home: '8.60%', 
      business: '10.15%', 
      lap: '8.85%', 
      project: '10.45%',
      logo: '🏦' 
    },
    { 
      name: 'Piramal', 
      home: '8.75%', 
      business: '10.50%', 
      lap: '8.95%', 
      project: '10.75%',
      logo: '🏢' 
    },
    { 
      name: 'Hero Fincorp', 
      home: '8.80%', 
      business: '10.35%', 
      lap: '9.00%', 
      project: '10.80%',
      logo: '🏍️' 
    },
    { 
      name: 'Muthoot', 
      home: '8.90%', 
      business: '10.60%', 
      lap: '9.10%', 
      project: '11.00%',
      logo: '🏛️' 
    },
    { 
      name: 'Awas', 
      home: '8.35%', 
      business: '9.80%', 
      lap: '8.60%', 
      project: '10.15%',
      logo: '🏠' 
    },
    { 
      name: 'GIC', 
      home: '8.70%', 
      business: '10.20%', 
      lap: '8.90%', 
      project: '10.55%',
      logo: '🏛️' 
    },
    { 
      name: 'N Enterprise', 
      home: '7.5%', 
      business: '10%', 
      lap: '9.5%', 
      project: '10%',
      isBest: true, 
      logo: '⭐' 
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Header - Homepage Style */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#2F4F3E] rounded-xl flex items-center justify-center">
            <Percent size={24} className="text-[#C9A44C]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2F4F3E]">Interest Rate Compare</h3>
            <p className="text-sm text-gray-500">Compare rates from top banks & NBFCs</p>
          </div>
        </div>
      </div>

      {/* Table - Scrollable on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F6F3E8]">
              <th className="px-6 py-4 text-left text-[#2F4F3E] font-semibold">Bank</th>
              <th className="px-6 py-4 text-left text-[#2F4F3E] font-semibold">Home Loan</th>
              <th className="px-6 py-4 text-left text-[#2F4F3E] font-semibold">Business Loan</th>
              <th className="px-6 py-4 text-left text-[#2F4F3E] font-semibold">Loan Against Property</th>
              <th className="px-6 py-4 text-left text-[#2F4F3E] font-semibold">Project Loan</th>
            </tr>
          </thead>
          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-gray-100"
          >
            {banks.map((bank, idx) => (
              <motion.tr
                key={idx}
                variants={itemVariants}
                whileHover={{ backgroundColor: '#F6F3E8', scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`transition-all duration-200 cursor-default ${
                  bank.isBest ? 'bg-[#C9A44C]/5' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{bank.logo}</span>
                    <span className={`font-medium ${bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-[#2F4F3E]'}`}>
                      {bank.name}
                    </span>
                    {bank.isBest && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, delay: 0.5 }}
                        className="px-2 py-0.5 bg-[#C9A44C] text-[#2F4F3E] text-[10px] rounded-full font-bold"
                      >
                        BEST RATES
                      </motion.span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-gray-700'}>
                    {bank.home}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-gray-700'}>
                    {bank.business}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-gray-700'}>
                    {bank.lap}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={bank.isBest ? 'text-[#C9A44C] font-bold' : 'text-gray-700'}>
                    {bank.project}
                  </span>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>

      {/* Why Choose Us Section - Homepage Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="p-6 bg-[#F6F3E8] border-t border-gray-200"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-[#2F4F3E] rounded-lg flex items-center justify-center flex-shrink-0">
            <Award size={20} className="text-[#C9A44C]" />
          </div>
          <div>
            <h4 className="font-bold text-[#2F4F3E] mb-3">Why Choose N Enterprise?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <TrendingDown size={16} className="text-[#C9A44C]" />
                <span>Lower interest rates than market</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <Shield size={16} className="text-[#C9A44C]" />
                <span>Zero hidden charges</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <Clock size={16} className="text-[#C9A44C]" />
                <span>85% success rate for complex cases</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Note */}
      <div className="p-4 text-center text-xs text-gray-400 border-t border-gray-100">
        *Rates are indicative and subject to change based on bank policies and individual eligibility
      </div>
    </motion.div>
  )
}

export default InterestRateCompare