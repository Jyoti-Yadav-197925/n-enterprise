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
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-4">
        <Sparkles size={14} className="text-accent" />
        <span className="text-xs font-semibold tracking-wider uppercase">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
