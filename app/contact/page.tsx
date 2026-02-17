'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/common/Container'

// Force dynamic rendering - THIS IS KEY!
export const dynamic = 'force-dynamic'

// Separate component for the form that uses useSearchParams
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
    // Get parameters safely
    const service = searchParams?.get('service')
    const property = searchParams?.get('property')
    const source = searchParams?.get('source')
    
    let message = ''
    
    if (service) {
      const serviceMap: Record<string, string> = {
        'home-loan': 'I am interested in Home Loan',
        'project-loan': 'I am interested in Project Loan',
        'mortgage-loan': 'I am interested in Mortgage Loan',
        'loan-against-property': 'I am interested in Loan Against Property',
        'business-loan': 'I am interested in Business Loan',
        'vehicle-loan': 'I am interested in Vehicle Loan',
        'redevelopment': 'I am interested in Redevelopment',
        'stalled': 'I am interested in Stalled Project',
        'new': 'I am interested in New Construction',
        'construction': 'I am interested in Construction',
        'buy': 'I am interested in Buying Property',
        'sell': 'I am interested in Selling Property',
        'rent': 'I am interested in Renting Property',
        'valuation': 'I need property valuation',
        'list': 'I want to list my property',
        'legal': 'I need legal assistance'
      }
      message = serviceMap[service] || `I am interested in ${service}`
    } else if (property) {
      message = `I am interested in Property ID: ${property}`
    } else if (source === 'testimonial') {
      message = 'I would like to share my experience'
    } else if (source === 'cibil-check') {
      message = 'I would like to check my CIBIL score'
    }
    
    if (message) {
      setFormData(prev => ({ ...prev, message }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
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
          <h3 className="text-2xl font-bold text-[#2F4F3E] mb-6">Send Enquiry</h3>
          
          <div>
            <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C]"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C]"
              placeholder="10 digit mobile number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Email (Optional)</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Message *</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C]"
              placeholder="Tell us about your requirement..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2F4F3E] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>
        </form>
      ) : (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-[#2F4F3E] mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">We'll contact you within 2 hours.</p>
          <div className="bg-[#F6F3E8] p-6 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">For immediate assistance:</p>
            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-2xl font-bold text-[#C9A44C]">
              +91 {process.env.NEXT_PUBLIC_PHONE}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl flex items-center justify-center min-h-[500px]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#C9A44C] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

// Main page component
export default function ContactPage() {
  return (
    <main className="bg-[#F6F3E8] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-[#2F4F3E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A44C" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Contact <span className="text-[#C9A44C]">Us</span>
            </h1>
            <p className="text-xl text-white/80">
              Get in touch for loans, property, or construction needs.
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
              <h2 className="text-3xl font-serif font-bold text-[#2F4F3E] mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Phone size={24} className="text-[#C9A44C] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2F4F3E]">Call Us</h4>
                    <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-xl font-bold text-[#C9A44C] hover:underline">
                      +91 {process.env.NEXT_PUBLIC_PHONE}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Mail size={24} className="text-[#C9A44C] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2F4F3E]">Email Us</h4>
                    <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-xl font-bold text-[#C9A44C] hover:underline">
                      {process.env.NEXT_PUBLIC_EMAIL}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <MapPin size={24} className="text-[#C9A44C] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2F4F3E]">Visit Us</h4>
                    <p className="text-lg text-[#2F4F3E]">
                      Shop No. 06, Jitesh Apt, Vishal Nagar,<br />
                      Vasai - (W), Palghar - 401501
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form with Suspense */}
            <Suspense fallback={<LoadingFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}