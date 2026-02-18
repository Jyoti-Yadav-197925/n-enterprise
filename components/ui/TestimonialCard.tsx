'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  delay?: number
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
    >
      <Quote size={40} className="absolute top-6 right-6 text-accent/20" />

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center text-white text-xl font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-primary-dark">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed">{content}</p>
    </motion.div>
  )
} 
