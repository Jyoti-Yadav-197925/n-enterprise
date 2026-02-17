// 'use client'

// import { motion } from 'framer-motion'
// import { Building2, Hammer, Home, HardHat, MapPin, CheckCircle } from 'lucide-react'
// import SectionTitle from '@/components/common/SectionTitle'
// import Container from '@/components/common/Container'
// import Button from '@/components/common/Button'
// import ServiceCard from '@/components/ui/ServiceCard'
// import Image from 'next/image'

// const services = [
//   {
//     icon: 'building2',
//     title: 'Redevelopment Projects',
//     description: 'Complete redevelopment of old buildings with modern amenities.',
//     models: ['70:30', '65:35', '60:40'],
//     locations: ['Mumbai', 'Vasai', 'Virar'],
//   },
//   {
//     icon: 'hammer',
//     title: 'Stalled Project Completion',
//     description: 'Takeover and completion of half-built residential/commercial projects.',
//     features: ['Legal clearance', 'Structural audit', 'Fast completion'],
//     locations: ['Boisar', 'Palghar', 'Nalasopara'],
//   },
//   {
//     icon: 'home',
//     title: 'New Construction',
//     description: 'End-to-end construction of residential and commercial buildings.',
//     features: ['Quality materials', 'Expert team', 'Timely delivery'],
//     locations: ['All areas'],
//   },
//   {
//     icon: 'hardhat',
//     title: 'Renovation & Remodeling',
//     description: 'Complete interior and exterior renovation services.',
//     features: ['Modern designs', 'Cost-effective', 'Minimal disruption'],
//     locations: ['Mumbai', 'Thane', 'Palghar'],
//   },
// ]

// const projects = [
//   {
//     title: 'Lotus Tower',
//     location: 'Boisar West',
//     description: 'Successfully completed stalled residential project. 64 apartments delivered.',
//     status: 'Completed',
//   },
//   {
//     title: 'Sai Residency',
//     location: 'Vasai East',
//     description: 'Redevelopment of 30-year-old building with modern amenities.',
//     status: 'Ongoing',
//   },
//   {
//     title: 'Green Valley',
//     location: 'Palghar',
//     description: 'Half-built project takeover and completion of 48 units.',
//     status: 'Completed',
//   },
// ]

// export default function ConstructionServices() {
//   return (
//     <section id="construction" className="py-20 bg-[#F6F3E8] relative overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/construction.jpg"
//           alt="Construction Services Background"
//           fill
//           className="object-cover opacity-10"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/95 to-cream" />
//       </div>

//       <Container className="relative z-10">
//         <SectionTitle
//           subtitle="Construction & Redevelopment"
//           title="Expert Construction Solutions Across Mumbai & Palghar"
//           description="Specialized in building redevelopment, stalled project completion, and new construction. We work on various profit-sharing models including 70:30, 65:35, and 60:40."
//           className="mb-16"
//         />

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap items-center justify-center gap-3 mb-16"
//         >
//           <MapPin size={20} className="text-accent" />
//           <span className="font-semibold text-primary-dark">Active Construction Areas:</span>
//           {['Mumbai', 'Vasai', 'Virar', 'Boisar', 'Palghar', 'Nalasopara', 'Naigaon'].map((city, i) => (
//             <motion.span
//               key={city}
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05 }}
//               whileHover={{ scale: 1.1, backgroundColor: '#2F4F3E', color: '#F6F3E8' }}
//               className="bg-primary-dark text-cream px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-300"
//             >
//               {city}
//             </motion.span>
//           ))}
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 mb-20">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={index}
//               icon={service.icon as any}
//               title={service.title}
//               description={service.description}
//               features={service.features}
//               models={service.models}
//               locations={service.locations}
//               delay={index * 0.1}
//             />
//           ))}
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 mb-16">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
//             >
//               <div className="h-48 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black/20 group-hover:scale-110 transition-transform duration-700" />
//                 <Building2 size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/80 group-hover:scale-110 transition-transform duration-500" />
                
//                 {/* Animated overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <h4 className="text-lg font-bold text-primary-dark group-hover:text-accent transition-colors">{project.title}</h4>
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                     project.status === 'Completed' 
//                       ? 'bg-primary text-cream' 
//                       : 'bg-accent text-primary-dark'
//                   }`}>
//                     {project.status}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//                   <MapPin size={14} className="text-accent" />
//                   <span>{project.location}</span>
//                 </div>
//                 <p className="text-sm text-gray-600">{project.description}</p>
                
//                 {/* Animated border on hover */}
//                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.02 }}
//           className="bg-gradient-to-r from-primary-dark to-primary rounded-3xl p-10 text-white text-center relative overflow-hidden group"
//         >
//           {/* Animated background effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
//           <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
//             Have a Stalled or Redevelopment Project?
//           </h3>
//           <p className="text-cream/90 mb-8 max-w-2xl mx-auto relative z-10">
//             We take possession and complete half-built projects. Free consultation and site visit.
//           </p>
//           <Button href="#contact" variant="secondary" size="lg" className="relative z-10">
//             Discuss Your Project
//           </Button>
//         </motion.div>
//       </Container>
//     </section>
//   )
// }



'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, Hammer, Home, HardHat } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'

const services = [
  {
    icon: Building2,
    title: 'Redevelopment',
    description: 'Society & building redevelopment projects',
    models: ['70:30', '65:35'],
    href: '/construction#redevelopment'
  },
  {
    icon: Hammer,
    title: 'Stalled Projects',
    description: 'Completion of half-built projects',
    projects: '2 ongoing',
    href: '/construction#stalled'
  },
  {
    icon: Home,
    title: 'New Construction',
    description: 'Residential & commercial buildings',
    areas: ['Vasai', 'Virar', 'Boisar'],
    href: '/construction#new'
  },
  {
    icon: HardHat,
    title: 'Renovation',
    description: 'Interior & exterior renovation',
    href: '/construction#renovation'
  }
]

export default function ConstructionServices() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          subtitle="Construction Services"
          title="Building Trust Since 2008"
          description="Specialized in redevelopment, stalled project completion, and new construction across Mumbai & Palghar."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#F6F3E8] p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#C9A44C]/20 group"
              >
                <div className="w-12 h-12 bg-[#2F4F3E] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon size={24} className="text-[#C9A44C]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2F4F3E] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                {service.models && (
                  <div className="flex gap-2 mb-2">
                    {service.models.map((model, i) => (
                      <span key={i} className="text-xs bg-[#2F4F3E] text-white px-2 py-1 rounded-full">
                        {model}
                      </span>
                    ))}
                  </div>
                )}
                {service.projects && (
                  <p className="text-sm text-[#C9A44C] font-semibold mb-2">{service.projects}</p>
                )}
                <div className="text-[#2F4F3E] text-sm font-medium flex items-center gap-1 group-hover:text-[#C9A44C]">
                  Learn More <span className="text-lg">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/construction" variant="outline">
            View Our Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}