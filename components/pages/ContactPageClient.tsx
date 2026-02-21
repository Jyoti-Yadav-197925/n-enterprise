'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Phone, Mail, MapPin, Send, CheckCircle, Clock,
  MessageSquare, Users, Building2, HardHat, Award,
  Sparkles, ArrowRight
} from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/common/Container'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL!, {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          source: 'Contact Page'
        })
      });

      setSubmitted(true);
      console.log('✓ Form saved to Google Sheets');

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('✗ Error:', error);
      alert('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F6F3E8] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2400"
            alt="Contact Us Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2F4F3E]/90" />
        </div>

        <motion.div
          className="absolute inset-0 z-0 opacity-20"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A44C" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }} />
        </motion.div>

        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#C9A44C]/10 rounded-full blur-3xl z-0"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl z-0"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#C9A44C]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#C9A44C]/30"
            >
              <Sparkles size={14} className="text-[#C9A44C]" />
              <span className="text-xs font-semibold tracking-wide text-white">GET IN TOUCH</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Let's <span className="text-[#C9A44C]">Connect</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Have questions about loans, property, or construction? Our team is here to help you 24/7.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-8"
            >
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#C9A44C]" />
                <span className="text-white/80">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-[#C9A44C]" />
                <span className="text-white/80">2hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#C9A44C]" />
                <span className="text-white/80">15+ Years</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: '24/7', label: 'Support Available' },
              { icon: MessageSquare, value: '2hr', label: 'Response Time' },
              { icon: Users, value: '50+', label: 'Happy Clients' },
              { icon: Award, value: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-[#C9A44C]">{stat.value}</div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <stat.icon size={14} className="text-[#2F4F3E]" />
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold text-[#2F4F3E] mb-4">
                Get in <span className="text-[#C9A44C]">Touch</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
                Choose your preferred way to reach us. We're always ready to assist you with any questions.
              </motion.p>

              {/* Service Cards */}
              <motion.div variants={staggerContainer} className="space-y-4">
                {/* Call Card */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-[#C9A44C]/20"
                >
                  <div className="w-14 h-14 bg-[#2F4F3E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={28} className="text-[#C9A44C]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#2F4F3E] mb-1">Call Us</h4>
                    <a
                      href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                      className="text-2xl font-bold text-[#C9A44C] hover:text-[#2F4F3E] transition-colors"
                    >
                      +91 {process.env.NEXT_PUBLIC_PHONE}
                    </a>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">24/7 Available</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Toll Free</span>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-[#C9A44C]/20"
                >
                  <div className="w-14 h-14 bg-[#2F4F3E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={28} className="text-[#C9A44C]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#2F4F3E] mb-1">Email Us</h4>
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                      className="text-xl font-bold text-[#C9A44C] hover:text-[#2F4F3E] transition-colors break-all"
                    >
                      {process.env.NEXT_PUBLIC_EMAIL}
                    </a>
                    <p className="text-sm text-gray-500 mt-2">Response within 2 hours</p>
                  </div>
                </motion.div>

                {/* Visit Card */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-[#C9A44C]/20"
                >
                  <div className="w-14 h-14 bg-[#2F4F3E] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={28} className="text-[#C9A44C]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#2F4F3E] mb-2">Visit Us</h4>
                    <div className="space-y-2">
                      <p className="text-base text-[#2F4F3E] leading-relaxed">
                        <span className="font-bold text-[#C9A44C]">N Enterprise</span><br />
                        Shop No. 06, Jitesh Apartment,<br />
                        Vishal Nagar, Vartak Road, Vasai (W),<br />
                        Palghar - 401202.
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="inline-flex items-center gap-1 text-xs bg-[#F6F3E8] text-[#2F4F3E] px-3 py-1.5 rounded-full">
                          <Clock size={12} className="text-[#C9A44C]" />
                          Mon-Sat: 10AM - 7PM
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-[#C9A44C]/10 text-[#2F4F3E] px-3 py-1.5 rounded-full">
                          Closed Sunday
                        </span>
                      </div>

                      <a
                        href="https://www.google.com/maps/search/Neha+Enterprises+vasai+w/@19.3835822,72.6623774,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#C9A44C] hover:text-[#2F4F3E] transition-colors mt-2"
                      >
                        <MapPin size={14} />
                        Get Directions
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Service Tags */}
              <motion.div variants={fadeInUp} className="mt-8">
                <p className="text-sm text-gray-500 mb-3">We specialize in:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Building2, label: 'Home Loans' },
                    { icon: Building2, label: 'Property' },
                    { icon: HardHat, label: 'Construction' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1 bg-white px-3 py-2 rounded-full shadow-sm">
                      <item.icon size={14} className="text-[#C9A44C]" />
                      <span className="text-xs font-medium text-[#2F4F3E]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                {!submitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-[#2F4F3E] mb-2">Send Enquiry</h3>
                    <p className="text-gray-500 text-sm mb-6">Fill the form and we'll get back to you within 2 hours</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C] transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C] transition-all"
                          placeholder="10 digit mobile number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Email (Optional)</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C] transition-all"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2F4F3E] mb-2">I'm interested in</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C] transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="home-loan">Home Loan</option>
                          <option value="project-loan">Project Loan</option>
                          <option value="mortgage-loan">Mortgage Loan</option>
                          <option value="business-loan">Business Loan</option>
                          <option value="buy-property">Buy Property</option>
                          <option value="sell-property">Sell Property</option>
                          <option value="rent-property">Rent Property</option>
                          <option value="construction">Construction / Redevelopment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2F4F3E] mb-2">Message *</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C9A44C] focus:ring-1 focus:ring-[#C9A44C] transition-all resize-none"
                          placeholder="Tell us about your requirement..."
                          required
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#2F4F3E] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <Send size={18} />
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-gray-400 text-center">
                        By submitting, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={48} className="text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2F4F3E] mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">We've received your enquiry. Our team will contact you within 2 hours.</p>

                    <div className="bg-[#F6F3E8] p-6 rounded-xl mb-6">
                      <p className="text-sm text-gray-600 mb-2">For immediate assistance:</p>
                      <a
                        href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                        className="text-2xl font-bold text-[#C9A44C] hover:text-[#2F4F3E] transition-colors"
                      >
                        +91 {process.env.NEXT_PUBLIC_PHONE}
                      </a>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#2F4F3E] font-medium hover:text-[#C9A44C] transition-colors"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F3E] mb-4">
              Find Us on <span className="text-[#C9A44C]">Map</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <span className="font-semibold text-[#2F4F3E]">N Enterprise</span> - Shop No. 06, Jitesh Apartment, Vishal Nagar, Vartak Road, Vasai (W), Palghar - 401202
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60218.63351480579!2d72.78616144772838!3d19.383670406768452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af000ea9b005%3A0x341ad8b9213abad8!2sNeha%20Enterprises!5e0!3m2!1sen!2sin!4v1771346186615!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="N Enterprise - Vasai West"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[#2F4F3E] text-white px-4 py-2 rounded-full">
              <MapPin size={14} className="text-[#C9A44C]" />
              <span className="text-xs font-semibold tracking-wide">N ENTERPRISE • SINCE 2008</span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              <span className="font-medium text-[#2F4F3E]">Landmark:</span> Near Vartak Road, Vishal Nagar, Vasai West
            </p>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}