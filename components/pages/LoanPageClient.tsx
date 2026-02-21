'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Home, Briefcase, Building2, Landmark, TrendingUp,
  Clock, Shield, CheckCircle, FileText, IndianRupee,
  Users, CreditCard, Wallet, Calculator, Percent, Scale,
  MapPin, Sparkles, ArrowRight, Award, Phone, Download,
  BookOpen, Target, TrendingDown, HeartHandshake, Banknote,
  PieChart, BadgeCheck, Zap, Heart, Star
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import DocumentChecklist from '@/components/tools/DocumentChecklist';
import RateCompare from '@/components/tools/RateCompare';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

// Realistic loan products with accurate rates
const loanProducts = [
  {
    id: 'home-loan',
    title: 'Home Loan',
    description: 'Purchase or construct your dream home with flexible repayment options.',
    longDescription: 'Make your dream home a reality with our competitive home loan options. We offer attractive interest rates, flexible tenures, and quick approvals.',
    icon: Home,
    rate: '7.5%',
    tenure: '30 yrs',
    amount: 'Up to ₹5Cr',
    features: ['Minimal documentation', 'Quick approval (24-48 hrs)', 'Balance transfer facility', 'Top-up loan available', 'Step-down EMI option'],
    benefits: ['Tax benefits under Section 80C', 'No prepayment charges', 'Part-payment allowed'],
    banks: ['SBI', 'HDFC', 'ICICI', 'Axis', 'PNB'],
    eligibility: 'Salaried/Self-employed with 3+ years experience',
    minIncome: '₹25,000/month',
    cibil: '750+',
    iconColor: 'bg-blue-100 text-blue-600',
    hoverDetails: [
      { icon: Banknote, label: 'Interest Rate', value: '7.5% p.a.' },
      { icon: Clock, label: 'Processing Time', value: '24-48 hours' },
      { icon: BadgeCheck, label: 'CIBIL Required', value: '750+' },
      { icon: PieChart, label: 'LTV Ratio', value: 'Up to 90%' }
    ],
    documents: ['Aadhaar', 'PAN', 'Salary Slips (3 months)', 'Bank Statement (6 months)', 'Property Papers']
  },
  {
    id: 'mortgage-loan',
    title: 'Mortgage Loan',
    description: 'Loan against existing residential or commercial property.',
    longDescription: 'Leverage your property assets to unlock funds for business expansion, education, or medical emergencies.',
    icon: Building2,
    rate: '9.5%',
    tenure: '15 yrs',
    amount: 'Up to ₹3Cr',
    features: ['High LTV up to 75%', 'Long repayment tenure', 'Minimal paperwork', 'Quick disbursal (3-5 days)', 'Flexible EMI options'],
    benefits: ['Retain property ownership', 'Lower interest than personal loan', 'Long tenure reduces EMI'],
    banks: ['HDFC', 'ICICI', 'Axis', 'PNB', 'BOB'],
    eligibility: 'Property owners with clear title',
    minIncome: 'Property based',
    cibil: '700+',
    iconColor: 'bg-green-100 text-green-600',
    hoverDetails: [
      { icon: Banknote, label: 'Interest Rate', value: '9.5% p.a.' },
      { icon: Clock, label: 'Processing Time', value: '3-5 days' },
      { icon: BadgeCheck, label: 'CIBIL Required', value: '700+' },
      { icon: PieChart, label: 'LTV Ratio', value: 'Up to 75%' }
    ],
    documents: ['Aadhaar', 'PAN', 'Property Papers', 'Income Proof', 'Bank Statement']
  },
  {
    id: 'loan-against-property',
    title: 'Loan Against Property',
    description: 'Unlock value from your property for personal or business needs.',
    longDescription: 'Convert your property\'s value into liquid cash for any financial requirement without selling it.',
    icon: Landmark,
    rate: '9.5%',
    tenure: '15 yrs',
    amount: 'Up to ₹5Cr',
    features: ['High loan amount', 'Flexible tenure', 'Competitive interest rates', 'Part-prepayment option', 'Balance transfer facility'],
    benefits: ['No end-use restriction', 'Long repayment tenure', 'Tax benefits available'],
    banks: ['HDFC', 'ICICI', 'Axis', 'PNB', 'BOB'],
    eligibility: 'Property owners, self-employed, business owners',
    minIncome: 'Property based',
    cibil: '675+',
    iconColor: 'bg-purple-100 text-purple-600',
    hoverDetails: [
      { icon: Banknote, label: 'Interest Rate', value: '9.5% p.a.' },
      { icon: Clock, label: 'Processing Time', value: '4-6 days' },
      { icon: BadgeCheck, label: 'CIBIL Required', value: '675+' },
      { icon: PieChart, label: 'LTV Ratio', value: 'Up to 70%' }
    ],
    documents: ['Aadhaar', 'PAN', 'Property Title Deed', 'Income Proof', 'Bank Statement']
  },
  {
    id: 'project-loan',
    title: 'Project Loan',
    description: 'Construction finance for builders, developers, and real estate projects.',
    longDescription: 'Specialized funding for real estate development, construction projects, and infrastructure development.',
    icon: Building2,
    rate: '10%',
    tenure: '5 yrs',
    amount: 'Up to ₹10Cr',
    features: ['Stage-wise disbursement', 'Flexible repayment linked to project cash flow', 'Project assessment by experts', 'Technical sanction included', 'Refinancing options'],
    benefits: ['Interest during construction option', 'Customized repayment schedule', 'Technical expertise included'],
    banks: ['HDFC', 'ICICI', 'Axis', 'PNB', 'Piramal'],
    eligibility: 'Builders/Developers with project approval',
    minIncome: 'Project based',
    cibil: '700+',
    iconColor: 'bg-amber-100 text-amber-600',
    hoverDetails: [
      { icon: Banknote, label: 'Interest Rate', value: '10% p.a.' },
      { icon: Clock, label: 'Disbursement', value: 'Stage-wise' },
      { icon: BadgeCheck, label: 'Project Assessment', value: 'Included' },
      { icon: PieChart, label: 'Loan Amount', value: 'Up to ₹10Cr' }
    ],
    documents: ['Project Report', 'Approvals', 'Land Title', 'Financials', 'Partnership Deed']
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    description: 'Funding to grow your business with minimal documentation.',
    longDescription: 'Fuel your business growth with customized loan solutions for working capital, expansion, or new ventures.',
    icon: Briefcase,
    rate: '10%',
    tenure: '10 yrs',
    amount: 'Up to ₹2Cr',
    features: ['Unsecured options available', 'Fast processing (24-48 hrs)', 'Flexible tenure', 'Minimal collateral', 'Digital documentation'],
    benefits: ['No collateral up to ₹50L', 'Flexible end-use', 'Quick disbursal'],
    banks: ['HDFC', 'ICICI', 'Axis', 'Kotak', 'Yes Bank'],
    eligibility: 'Business with 3+ years vintage',
    minIncome: '₹30,000/month',
    cibil: '700+',
    iconColor: 'bg-indigo-100 text-indigo-600',
    hoverDetails: [
      { icon: Banknote, label: 'Interest Rate', value: '10% p.a.' },
      { icon: Clock, label: 'Processing Time', value: '24-48 hours' },
      { icon: BadgeCheck, label: 'Business Vintage', value: '3+ years' },
      { icon: PieChart, label: 'Unsecured', value: 'Up to ₹50L' }
    ],
    documents: ['Aadhaar', 'PAN', 'ITR (3 years)', 'Bank Statement', 'GST Returns']
  },
  {
    id: 'vehicle-loan',
    title: 'Vehicle Loan',
    description: 'For cars, bikes, and commercial vehicles with quick approval.',
    longDescription: 'Drive your dream vehicle with our attractive vehicle loan options for personal and commercial use.',
    icon: TrendingUp,
    rate: '7.5%',
    tenure: '7 yrs',
    amount: 'Up to ₹50L',
    features: ['Low interest rates', 'Quick disbursal (24 hrs)', 'Flexible EMI options', 'Zero foreclosure charges', 'Part-payment allowed'],
    benefits: ['New and used vehicles covered', 'Commercial vehicle financing', 'Insurance included'],
    banks: ['HDFC', 'ICICI', 'Axis', 'Hero Fincorp', 'Muthoot'],
    eligibility: 'Salaried/Self-employed',
    minIncome: '₹20,000/month',
    cibil: '700+',
    iconColor: 'bg-red-100 text-red-600',
    hoverDetails: [
      { icon: Banknote, label: 'Interest Rate', value: '7.5% p.a.' },
      { icon: Clock, label: 'Processing Time', value: '24 hours' },
      { icon: BadgeCheck, label: 'CIBIL Required', value: '700+' },
      { icon: PieChart, label: 'Loan Amount', value: 'Up to ₹50L' }
    ],
    documents: ['Aadhaar', 'PAN', 'Salary Slips', 'Bank Statement', 'Vehicle Quotation']
  }
];

// Loan Products Component with Hover Flip
const LoanProducts = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#F6F3E8]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#2F4F3E] text-white px-4 py-2 rounded-full mb-6">
            <Sparkles size={14} className="text-[#C9A44C]" />
            <span className="text-xs font-semibold tracking-wide">LOAN PRODUCTS</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F3E] mb-4">
            Choose Your <span className="text-[#C9A44C]">Loan</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
            Tailored financial solutions designed to meet your specific needs
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loanProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={scaleIn}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative h-[550px] cursor-pointer"
            >
              {/* Front Card */}
              <motion.div
                animate={{
                  rotateY: hoveredId === product.id ? 180 : 0,
                  opacity: hoveredId === product.id ? 0 : 1
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
                className={`absolute inset-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                  hoveredId === product.id ? 'pointer-events-none' : ''
                }`}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header with Icon and Rate */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`w-14 h-14 ${product.iconColor} rounded-xl flex items-center justify-center`}
                    >
                      <product.icon size={28} />
                    </motion.div>
                    <motion.div
                      animate={{ scale: hoveredId === product.id ? 1.1 : 1 }}
                      className="bg-[#C9A44C]/10 text-[#C9A44C] px-3 py-1.5 rounded-full text-sm font-bold"
                    >
                      {product.rate}
                    </motion.div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-[#2F4F3E] mb-2 group-hover:text-[#C9A44C] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4 flex-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle size={14} className="text-[#C9A44C]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-[#F6F3E8] rounded-xl">
                    <div>
                      <span className="text-xs text-gray-400">Tenure</span>
                      <div className="font-semibold text-[#2F4F3E]">{product.tenure}</div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">Max Amount</span>
                      <div className="font-semibold text-[#2F4F3E]">{product.amount}</div>
                    </div>
                  </div>

                  {/* Partner Banks */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.banks.slice(0, 3).map((bank, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {bank}
                      </span>
                    ))}
                    {product.banks.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{product.banks.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Apply Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-xs text-gray-400">Hover for details</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href={`/contact?service=${product.id}`}
                        className="bg-[#2F4F3E] text-white px-4 py-2 rounded-lg hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors text-sm font-medium flex items-center gap-2"
                      >
                        Apply <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Back Card */}
              <motion.div
                animate={{
                  rotateY: hoveredId === product.id ? 0 : -180,
                  opacity: hoveredId === product.id ? 1 : 0
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
                className={`absolute inset-0 bg-[#2F4F3E] text-white rounded-2xl shadow-2xl overflow-hidden p-8 flex flex-col ${
                  hoveredId === product.id ? '' : 'pointer-events-none'
                }`}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A44C" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-1">{product.title}</h3>
                    <p className="text-[#C9A44C] font-semibold">{product.rate} • {product.tenure}</p>
                  </div>

                  <p className="text-white/80 text-sm mb-6 leading-relaxed">{product.longDescription.substring(0, 100)}...</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <Banknote size={20} className="text-[#C9A44C] mb-2" />
                      <div className="text-xs text-white/60">Interest</div>
                      <div className="font-bold text-lg">{product.rate}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <Clock size={20} className="text-[#C9A44C] mb-2" />
                      <div className="text-xs text-white/60">Processing</div>
                      <div className="font-bold text-lg">{product.hoverDetails[1].value}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <BadgeCheck size={20} className="text-[#C9A44C] mb-2" />
                      <div className="text-xs text-white/60">CIBIL</div>
                      <div className="font-bold text-lg">{product.cibil}</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <PieChart size={20} className="text-[#C9A44C] mb-2" />
                      <div className="text-xs text-white/60">Max Amount</div>
                      <div className="font-bold text-lg">{product.amount}</div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto"
                  >
                    <Link
                      href={`/contact?service=${product.id}`}
                      className="block w-full bg-[#C9A44C] text-[#2F4F3E] py-4 rounded-xl font-bold text-center"
                    >
                      Apply Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2F4F3E] text-white px-8 py-4 rounded-lg hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-all duration-300 font-medium"
          >
            Get Expert Advice
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

// Stats Bar Component
const StatsBar = () => {
  const stats = [
    { icon: Banknote, value: '7.5%', label: 'Lowest Rate' },
    { icon: Zap, value: '24hrs', label: 'Quick Approval' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Star, value: '4.8', label: 'Customer Rating' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-[#2F4F3E]">{stat.value}</div>
              <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <stat.icon size={12} className="text-[#C9A44C]" />
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

// CIBIL Section
const CibilSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        source: 'cibil-check'
      });
      window.location.href = `/contact?${params.toString()}`;
    }, 1000);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#2F4F3E] text-white px-4 py-2 rounded-full mb-6">
              <TrendingUp size={14} className="text-[#C9A44C]" />
              <span className="text-xs font-semibold tracking-wide">CREDIT HEALTH</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F3E] mb-4">
              Check Your <span className="text-[#C9A44C]">CIBIL Score</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              Your credit score determines loan eligibility and interest rates. Get a free check and expert advice.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-green-50 p-4 rounded-xl border border-green-200"
              >
                <div className="text-xl font-bold text-green-600">750-900</div>
                <div className="text-xs text-gray-600">Excellent</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-4 rounded-xl border border-blue-200"
              >
                <div className="text-xl font-bold text-blue-600">700-749</div>
                <div className="text-xs text-gray-600">Good</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-yellow-50 p-4 rounded-xl border border-yellow-200"
              >
                <div className="text-xl font-bold text-yellow-600">650-699</div>
                <div className="text-xs text-gray-600">Fair</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-red-50 p-4 rounded-xl border border-red-200"
              >
                <div className="text-xl font-bold text-red-600">Below 650</div>
                <div className="text-xs text-gray-600">Improve</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#2F4F3E] mb-4">Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C]"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C]"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2F4F3E] text-white py-3 rounded-lg hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-all duration-300 font-medium"
              >
                {isSubmitting ? 'Processing...' : 'Get Free Consultation'}
              </motion.button>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
              We'll connect you with our loan experts within 2 hours
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

// Main Page
export default function LoanPageClient() {
  return (
    <main className="bg-[#F6F3E8] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2400"
            alt="Loan Services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2F4F3E]/90" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A44C" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#C9A44C]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#C9A44C]/30">
              <span className="text-xs font-semibold tracking-wide text-white">N • SINCE 2008</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Smart <span className="text-[#C9A44C]">Loan</span> Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              Home loans • Business loans • Project finance • PAN India support
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">10+</div>
                <div className="text-sm text-white/60">Bank Partners</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">₹5Cr+</div>
                <div className="text-sm text-white/60">Loans Disbursed</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">50+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <StatsBar />
      <LoanProducts />
      <RateCompare />
      <DocumentChecklist />
      <CibilSection />

      {/* CTA Section */}
      <section className="py-20 bg-[#2F4F3E] text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Need Help <span className="text-[#C9A44C]">Choosing?</span>
            </h2>
            <p className="text-white/60 mb-8">Our experts will analyze your profile and suggest the best loan option.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <button className="bg-[#C9A44C] text-[#2F4F3E] px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 font-medium inline-flex items-center gap-2 text-lg">
                  Talk to Expert <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}