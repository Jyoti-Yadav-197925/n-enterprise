// 'use client'

// import { motion } from 'framer-motion'
// import { TrendingUp, Users, Award, MapPin } from 'lucide-react'

// interface StatCardProps {
//   number: string
//   label: string
//   suffix?: string
//   icon?: 'trending' | 'users' | 'award' | 'map'
//   delay?: number
// }

// const icons = {
//   trending: TrendingUp,
//   users: Users,
//   award: Award,
//   map: MapPin,
// }

// export default function StatCard({ 
//   number, 
//   label, 
//   suffix, 
//   icon = 'trending',
//   delay = 0 
// }: StatCardProps) {
//   const Icon = icons[icon]

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.5 }}
//       className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//     >
//       <div className="flex items-center gap-4">
//         <div className="w-12 h-12 bg-primary-dark/10 rounded-xl flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300">
//           <Icon size={24} className="text-primary-dark group-hover:text-accent transition-colors duration-300" />
//         </div>
//         <div>
//           <div className="text-2xl lg:text-3xl font-bold text-primary-dark group-hover:text-accent transition-colors duration-300">
//             {number}
//           </div>
//           <div className="text-sm text-gray-600">{label}</div>
//           {suffix && (
//             <div className="text-xs text-accent mt-0.5">{suffix}</div>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, MapPin, Sparkles } from 'lucide-react'

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
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-[#C9A44C]/50"
    >
      <div className="flex items-center gap-4">
        {/* Icon with hover effect - from premium version */}
        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-[#C9A44C] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon size={24} className="text-white group-hover:text-[#2F4F3E] transition-colors duration-300" />
        </div>
        
        {/* Content */}
        <div>
          <div className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#C9A44C] transition-colors duration-300">
            {number}
          </div>
          <div className="text-sm text-white/80">{label}</div>
          {suffix && (
            <div className="text-xs text-[#C9A44C] mt-1 font-semibold group-hover:opacity-100 transition-opacity">
              {suffix}
            </div>
          )}
        </div>
      </div>

      {/* Decorative gold dot - from premium version */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-[#C9A44C]/30 rounded-full group-hover:bg-[#C9A44C] transition-colors" />
      
      {/* Bottom hover line - from premium version */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A44C] group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}