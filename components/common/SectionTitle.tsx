

'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface SectionTitleProps {
  subtitle: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {/* Premium Subtitle with Icon */}
      <div className="inline-flex items-center gap-3 bg-[#2F4F3E]/5 px-5 py-2.5 rounded-full mb-6 border border-[#C9A44C]/20">
        <Sparkles size={14} className="text-[#C9A44C]" />
        <span className="text-xs font-black tracking-[0.3em] text-[#2F4F3E] uppercase">{subtitle}</span>
        <div className="w-1.5 h-1.5 bg-[#C9A44C] rounded-full" />
      </div>

      {/* Premium Title with Playfair Font */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2F4F3E] mb-6 leading-[1.1] tracking-tight">
        {title}
      </h2>

      {/* Description with proper spacing */}
      {description && (
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
          {description}
        </p>
      )}
    </motion.div>
  )
}