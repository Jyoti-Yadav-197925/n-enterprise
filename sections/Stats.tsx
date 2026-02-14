'use client'

import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import StatCard from '@/components/ui/StatCard'

const stats = [
  { number: '15+', label: 'Years of Excellence', suffix: 'Since 2008', icon: 'award' },
  { number: '120+', label: 'Happy Clients', suffix: 'Trusted', icon: 'users' },
  { number: '₹22Cr+', label: 'Loans Sanctioned', suffix: 'Value', icon: 'trending' },
  { number: '10+', label: 'Projects Completed', suffix: 'Success', icon: 'map' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2F4F3E] to-[#4F6F52] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-[#C9A44C]/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#8FAF95]/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <Container className="relative z-10">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon as any}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}