'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, MapPin } from 'lucide-react'

interface StatCardProps {
  number: string
  label: string
  suffix?: string
  icon?: 'trending' | 'users' | 'award' | 'map'
  delay?: number
}

const icons = {
  trending: TrendingUp,
  users: Users,
  award: Award,
  map: MapPin,
}

export default function StatCard({ 
  number, 
  label, 
  suffix, 
  icon = 'trending',
  delay = 0 
}: StatCardProps) {
  const Icon = icons[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary-dark/10 rounded-xl flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
          <Icon size={24} className="text-primary-dark group-hover:text-accent transition-colors duration-300" />
        </div>
        <div>
          <div className="text-2xl lg:text-3xl font-bold text-primary-dark group-hover:text-accent transition-colors duration-300">
            {number}
          </div>
          <div className="text-sm text-gray-600">{label}</div>
          {suffix && (
            <div className="text-xs text-accent mt-0.5">{suffix}</div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
