'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Phone, MessageCircle } from 'lucide-react'
import Container from '@/components/common/Container'
import { useRouter } from 'next/navigation'

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Small Business Owner, Vasai',
    content: 'Got my business loan approved in 3 days. The team was very supportive throughout the process. Recommended!',
    rating: 5,
    highlight: 'Business Loan',
    initials: 'RM'
  },
  {
    name: 'Priya Sharma',
    role: 'Home Buyer, Virar',
    content: 'Found a great 2BHK within our budget. Transparent dealing and no hidden charges. Thank you N Enterprise!',
    rating: 5,
    highlight: 'Property Deal',
    initials: 'PS'
  },
  {
    name: 'Suresh Patil',
    role: 'Society Member, Boisar',
    content: 'They helped us with documentation for our society redevelopment project. Professional and honest work.',
    rating: 4,
    highlight: 'Consultation',
    initials: 'SP'
  }
]

export default function Testimonials() {
  const router = useRouter();

  return (
    <section className="py-20 bg-[#F6F3E8]">
      <Container>
        {/* Header - With Icon on Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-6">
            <MessageCircle size={14} className="text-accent" />
            <span className="text-xs font-semibold tracking-wide">CLIENT FEEDBACK</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
            What Our <span className="text-accent">Clients Say</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from our customers across Mumbai & Palghar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon - Subtle */}
              <Quote size={32} className="text-accent/20 mb-2" />

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gray-300" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Highlight Badge */}
              <span className="inline-block bg-primary-dark/10 text-primary-dark text-xs px-3 py-1 rounded-full mb-4">
                {testimonial.highlight}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark text-base">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip - Realistic */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">4.8/5</div>
              <div className="text-xs text-gray-500">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">121+</div>
              <div className="text-xs text-gray-500">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">3+</div>
              <div className="text-xs text-gray-500">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Share Your Story Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 bg-primary-dark text-cream px-6 py-3 rounded-full hover:bg-accent hover:text-primary-dark transition-all duration-300 text-sm font-semibold"
          >
            <MessageCircle size={16} className="text-accent" />
            Share Your Story
          </button>
        </div>

        {/* 24/7 Support */}
        {/* <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full">
            <Phone size={14} className="text-accent" />
            <span className="text-xs font-semibold tracking-wide">24/7 SUPPORT</span>
          </div>
        </div> */}
      </Container>
    </section>
  )
}