'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, User, MessageSquare, Sparkles } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
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
          service: formData.service,
          location: formData.location,
          message: formData.message,
          source: 'Homepage Footer'
        })
      });

      // Google Sheets script returns success even without reading response
      setSubmitted(true);
      console.log('✓ Form saved to Google Sheets');

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          service: '',
          location: '',
          message: '',
        });
      }, 5000);

    } catch (error) {
      console.error('✗ Error:', error);
      alert('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F6F3E8] relative overflow-hidden">
      <div className="absolute top-40 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-xs font-semibold tracking-wide">24/7 SUPPORT</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
              Get Your Free Consultation Today
            </h2>

            <p className="text-gray-600 mb-10">
              Whether you need a loan, want to buy/sell property, or have a construction project -
              our experts are ready to help. PAN India loan support available.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  value: `+91 ${process.env.NEXT_PUBLIC_PHONE}`,
                  subtitle: '24/7 Emergency Support',
                  href: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  value: process.env.NEXT_PUBLIC_EMAIL,
                  subtitle: 'Response within 2 hours',
                  href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  value: process.env.NEXT_PUBLIC_ADDRESS,
                  subtitle: 'Mon-Sat: 10:00 AM - 9:00 PM',
                  // For address, we don't need href, so we set it to undefined
                  href: undefined
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-dark rounded-xl flex items-center justify-center">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-bold text-accent hover:text-primary-dark transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-primary-dark">{item.value}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">
                Send Your Enquiry
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="10 digit mobile number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      I Need Help With *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    >
                      <option value="">Select service</option>
                      <option value="loan">Loan Assistance</option>
                      <option value="property-buy">Buy Property</option>
                      <option value="property-sell">Sell Property</option>
                      <option value="property-rent">Rent Property</option>
                      <option value="construction">Construction/Redevelopment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Your Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      placeholder="City/Area (e.g., Andheri, Vasai, Boisar)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                      placeholder="Tell us about your requirement..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-dark text-cream py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our privacy policy. We never share your information.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <MessageSquare size={48} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-dark mb-3">
                    Thank You!
                  </h4>
                  <p className="text-gray-600 mb-6">
                    We've received your enquiry. Our team will contact you shortly.
                  </p>
                  <div className="bg-[#F6F3E8] p-6 rounded-2xl">
                    <p className="text-sm text-gray-600 mb-2">For immediate assistance:</p>
                    <a
                      href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                      className="text-2xl font-bold text-accent hover:text-primary-dark transition-colors"
                    >
                      +91 {process.env.NEXT_PUBLIC_PHONE}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}