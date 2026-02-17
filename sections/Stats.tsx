'use client'

import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import StatCard from '@/components/ui/StatCard'

const stats = [
  { number: '5+', label: 'Years of Excellence', suffix: 'Since 2019', icon: 'award' },
  { number: '50+', label: 'Happy Clients', suffix: 'Trusted', icon: 'users' },
  { number: '₹5Cr+', label: 'Loans Sanctioned', suffix: 'Value', icon: 'trending' },
  { number: '3+', label: 'Projects Completed', suffix: 'Success', icon: 'map' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#264435] to-[#4F6F52] text-white relative overflow-hidden">
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



// 'use client'

// import { motion } from 'framer-motion'
// import Container from '@/components/common/Container'
// import { Award, Users, TrendingUp, MapPin, Sparkles } from 'lucide-react'

// const stats = [
//   {
//     number: '10+',
//     label: 'Projects Completed',
//     suffix: 'Since 2008',
//     icon: Award,
//     color: 'from-amber-500 to-amber-600',
//     bgColor: 'bg-amber-50'
//   },
//   {
//     number: '250+',
//     label: 'Happy Clients',
//     suffix: 'And growing',
//     icon: Users,
//     color: 'from-blue-500 to-blue-600',
//     bgColor: 'bg-blue-50'
//   },
//   {
//     number: '15+',
//     label: 'Bank Partners',
//     suffix: 'PAN India',
//     icon: TrendingUp,
//     color: 'from-green-500 to-green-600',
//     bgColor: 'bg-green-50'
//   },
//   {
//     number: '12+',
//     label: 'Areas Covered',
//     suffix: 'Mumbai to Palghar',
//     icon: MapPin,
//     color: 'from-purple-500 to-purple-600',
//     bgColor: 'bg-purple-50'
//   }
// ]

// export default function Stats() {
//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       <Container>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//             >
//               {/* Icon */}
//               <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
//                 <stat.icon size={28} className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
//               </div>

//               {/* Content */}
//               <div>
//                 <div className="text-3xl font-bold text-[#2F4F3E] group-hover:text-[#C9A44C] transition-colors">
//                   {stat.number}
//                 </div>
//                 <div className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</div>
//                 <div className="text-xs text-[#C9A44C] mt-1 font-semibold">{stat.suffix}</div>
//               </div>

//               {/* Decorative Element */}
//               <div className="absolute top-4 right-4 w-2 h-2 bg-[#C9A44C]/20 rounded-full group-hover:bg-[#C9A44C] transition-colors" />
              
//               {/* Hover Line */}
//               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A44C] group-hover:w-full transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   )
// }