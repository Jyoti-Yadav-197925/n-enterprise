'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, Mail, MapPin, Send, User, MessageSquare, CheckCircle } from 'lucide-react'
import Link from 'next/link'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/common/Container'


function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const service = searchParams.get('service')
    const property = searchParams.get('property')
    const source = searchParams.get('source')
    
    let message = ''
    if (service) {
      const serviceNames: Record<string, string> = {
        'home-loan': 'I am interested in Home Loan',
        'project-loan': 'I am interested in Project Loan',
        'redevelopment': 'I am interested in Redevelopment services',
        'sell': 'I want to sell my property',
        'list': 'I want to list my property',
        'valuation': 'I want property valuation'
      }
      message = serviceNames[service] || `I am interested in ${service}`
    } else if (property) {
      message = `I am interested in Property ID: ${property}`
    } else if (source === 'testimonial') {
      message = 'I would like to share my experience'
    }
    
    setFormData(prev => ({ ...prev, message }))
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setLoading(false)
    
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 5000)
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <h3 className="text-xl font-bold text-[#2F4F3E] mb-6">Send Enquiry</h3>
          
          <div>
            <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C]"
              placeholder="10 digit mobile number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Email (Optional)</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Message *</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C]"
              placeholder="Tell us about your requirement..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2F4F3E] text-white py-4 rounded-lg font-semibold hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>
        </form>
      ) : (
        <div className="text-center py-12">
          <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#2F4F3E] mb-2">Thank You!</h3>
          <p className="text-gray-600">We'll contact you within 2 hours.</p>
        </div>
      )}
    </div>
  )
}

// Main component with Suspense
export default function ContactPage() {
  return (
    <main className="bg-[#F6F3E8] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-[#2F4F3E]">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Contact <span className="text-[#C9A44C]">Us</span>
            </h1>
            <p className="text-lg text-white/80">
              Get in touch with our team for loans, property, or construction needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#2F4F3E] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md">
                  <Phone size={20} className="text-[#C9A44C] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2F4F3E]">Call Us</h4>
                    <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-lg font-bold text-[#C9A44C]">
                      +91 {process.env.NEXT_PUBLIC_PHONE}
                    </a>
                    <p className="text-sm text-gray-500">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md">
                  <Mail size={20} className="text-[#C9A44C] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2F4F3E]">Email Us</h4>
                    <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-lg font-bold text-[#C9A44C]">
                      {process.env.NEXT_PUBLIC_EMAIL}
                    </a>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md">
                  <MapPin size={20} className="text-[#C9A44C] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2F4F3E]">Visit Us</h4>
                    <p className="text-[#2F4F3E]">
                      Shop No. 06, Jitesh Apt, Vishal Nagar,<br />
                      Vasai - (W), Palghar - 401501
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
            <Suspense fallback={
              <div className="bg-white p-8 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-[#C9A44C] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600">Loading form...</p>
                </div>
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}