'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

interface LocationBadgeProps {
  name: string
  variant?: 'default' | 'small' | 'large'
  onClick?: () => void
}

export default function LocationBadge({ 
  name, 
  variant = 'default',
  onClick 
}: LocationBadgeProps) {
  const variants = {
    small: 'px-2 py-1 text-xs',
    default: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base',
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`inline-flex items-center gap-1 bg-[#F6F3E8] text-primary-dark rounded-full font-medium hover:bg-primary-dark hover:text-cream transition-colors cursor-default shadow-sm ${variants[variant]}`}
    >
      <MapPin size={variant === 'small' ? 12 : 14} className="text-accent" />
      {name}
    </motion.span>
  )
}
