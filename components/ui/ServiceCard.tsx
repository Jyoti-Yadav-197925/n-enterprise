

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  features?: string[]
  delay?: number
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  href,
  features = [],
  delay = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[#C9A44C] transition-all hover:shadow-xl relative overflow-hidden"
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A44C]/0 to-[#C9A44C]/0 group-hover:from-[#C9A44C]/5 group-hover:to-[#2F4F3E]/5 transition-all duration-500" />
      
      <div className="text-4xl mb-4 relative z-10">{icon}</div>
      <h3 className="text-xl font-semibold text-[#2F4F3E] mb-2 group-hover:text-[#C9A44C] transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 relative z-10">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-4 relative z-10">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C9A44C] rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <Link href={href} className="inline-flex items-center text-sm text-[#2F4F3E] font-medium hover:text-[#C9A44C] transition-colors group/link relative z-10">
        Learn More
        <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
      </Link>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A44C] group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}