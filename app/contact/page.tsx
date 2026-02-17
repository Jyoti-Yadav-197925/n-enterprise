// app/contact/page.tsx
import { Phone, Mail, MapPin } from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/common/Container'

// No 'use client' directive - completely static
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

      {/* Contact Info Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phone Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center group hover:shadow-2xl transition-shadow">
              <div className="w-20 h-20 bg-[#2F4F3E]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2F4F3E] transition-colors">
                <Phone size={32} className="text-[#2F4F3E] group-hover:text-[#C9A44C] transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F3E] mb-3">Call Us</h3>
              <a 
                href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} 
                className="text-xl font-bold text-[#C9A44C] hover:underline block mb-2"
              >
                +91 {process.env.NEXT_PUBLIC_PHONE}
              </a>
              <p className="text-gray-500">24/7 Support Available</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center group hover:shadow-2xl transition-shadow">
              <div className="w-20 h-20 bg-[#2F4F3E]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2F4F3E] transition-colors">
                <Mail size={32} className="text-[#2F4F3E] group-hover:text-[#C9A44C] transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F3E] mb-3">Email Us</h3>
              <a 
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} 
                className="text-xl font-bold text-[#C9A44C] hover:underline block mb-2"
              >
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
              <p className="text-gray-500">Response within 2 hours</p>
            </div>

            {/* Visit Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center group hover:shadow-2xl transition-shadow">
              <div className="w-20 h-20 bg-[#2F4F3E]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2F4F3E] transition-colors">
                <MapPin size={32} className="text-[#2F4F3E] group-hover:text-[#C9A44C] transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#2F4F3E] mb-3">Visit Us</h3>
              <p className="text-lg text-[#2F4F3E] mb-2">
                Shop No. 06, Jitesh Apt,<br />Vishal Nagar, Vasai - (W),<br />Palghar - 401501
              </p>
              <p className="text-gray-500">Mon-Sat: 10:00 AM - 7:00 PM</p>
            </div>
          </div>

          {/* Simple Contact Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg">
              Prefer to write? Send us an email at{' '}
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-[#C9A44C] font-semibold hover:underline">
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </p>
            <p className="text-gray-500 mt-2">
              We'll get back to you within 2 hours.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}