// 'use client'

// import { motion } from 'framer-motion'
// import { 
//   Home, Briefcase, Car, Building2, Landmark, Shield, 
//   Hammer, HardHat, Store, Factory, CheckCircle, ArrowRight 
// } from 'lucide-react'
// import Button from '@/components/common/Button'

// interface ServiceCardProps {
//   icon: keyof typeof icons
//   title: string
//   description: string
//   features?: string[]
//   locations?: string[]
//   models?: string[]
//   price?: string
//   delay?: number
//   href?: string
// }

// const icons = {
//   home: Home,
//   briefcase: Briefcase,
//   car: Car,
//   building2: Building2,
//   landmark: Landmark,
//   shield: Shield,
//   hammer: Hammer,
//   hardhat: HardHat,
//   store: Store,
//   factory: Factory,
// }

// export default function ServiceCard({ 
//   icon, 
//   title, 
//   description, 
//   features, 
//   locations,
//   models,
//   price,
//   delay = 0,
//   href = '#contact'
// }: ServiceCardProps) {
//   const Icon = icons[icon]

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.5 }}
//       whileHover={{ y: -5 }}
//       className="group bg-[#F6F3E8]/50 hover:bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-xl border border-transparent hover:border-accent/20"
//     >
//       <div className="w-14 h-14 bg-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//         <Icon size={24} className="text-accent" />
//       </div>

//       <h3 className="text-xl font-bold text-primary-dark mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm mb-4">{description}</p>
      
//       {features && features.length > 0 && (
//         <div className="flex flex-wrap gap-2 mb-3">
//           {features.map((feature, idx) => (
//             <span key={idx} className="bg-accent/10 text-accent-dark px-2 py-1 rounded-full text-xs">
//               {feature}
//             </span>
//           ))}
//         </div>
//       )}

//       {models && models.length > 0 && (
//         <div className="flex flex-wrap gap-2 mb-3">
//           {models.map((model, idx) => (
//             <span key={idx} className="bg-primary/10 text-primary-dark px-2 py-1 rounded-full text-xs font-semibold">
//               {model}
//             </span>
//           ))}
//         </div>
//       )}

//       {locations && locations.length > 0 && (
//         <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
//           <span className="font-semibold text-primary">📍</span>
//           <span>{locations.join(', ')}</span>
//         </div>
//       )}

//       {price && (
//         <div className="text-lg font-bold text-accent mb-4">{price}</div>
//       )}

//       <Button href={href} variant="ghost" size="sm" className="mt-2">
//         Enquire Now
//       </Button>
//     </motion.div>
//   )
// }



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