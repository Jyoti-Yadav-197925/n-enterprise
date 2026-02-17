


'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'

const areas = [
  { name: 'Mumbai', services: 'Loans, Property, Construction' },
  { name: 'Vasai', services: 'Property, Construction' },
  { name: 'Virar', services: 'Property, Construction' },
  { name: 'Boisar', services: 'Property, Construction' },
  { name: 'Palghar', services: 'Property, Construction' },
  { name: 'Nalasopara', services: 'Property' },
  { name: 'Andheri', services: 'Loans, Property' },
  { name: 'Bandra', services: 'Loans' }
]

export default function Locations() {
  return (
    <section className="py-20 bg-[#F6F3E8]">
      <Container>
        <SectionTitle
          subtitle="Service Areas"
          title="Where We Operate"
          description="PAN India for loans | Property & Construction across Mumbai, Vasai, Virar, Boisar & Palghar"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} className="text-[#C9A44C]" />
                <h3 className="font-semibold text-[#2F4F3E]">{area.name}</h3>
              </div>
              <p className="text-xs text-gray-500">{area.services}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}