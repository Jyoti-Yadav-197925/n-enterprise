'use client'

import { motion } from 'framer-motion'
import { Home, Building2, Store, Factory, MapPin, CheckCircle } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import ServiceCard from '@/components/ui/ServiceCard'
import LocationBadge from '@/components/ui/LocationBadge'
import Image from 'next/image'

const propertyTypes = [
  {
    icon: 'home',
    title: 'Residential Flats',
    description: '1/2/3 BHK apartments in prime locations',
    locations: ['Andheri', 'Bandra', 'Borivali', 'Vasai', 'Virar'],
    features: ['Buy', 'Rent', 'Sell'],
  },
  {
    icon: 'store',
    title: 'Commercial Shops',
    description: 'Retail spaces, showrooms, and commercial outlets',
    locations: ['Oshiwara', 'Bhayandar', 'Naigaon', 'Nalasopara'],
    features: ['Buy', 'Rent', 'Lease'],
  },
  {
    icon: 'factory',
    title: 'Gala / Godowns',
    description: 'Industrial spaces and warehouses',
    locations: ['Vasai', 'Virar', 'Boisar', 'Palghar'],
    features: ['Rent', 'Buy', 'Lease'],
  },
  {
    icon: 'building2',
    title: 'Land & Plots',
    description: 'Residential, commercial, and agricultural land',
    locations: ['Boisar', 'Palghar', 'Vasai', 'Virar'],
    features: ['Buy', 'Sell', 'Investment'],
  },
]

const locations = [
  'Andheri', 'Bandra', 'Oshiwara', 'Mira Road', 'Borivali',
  'Bhayandar', 'Naigaon', 'Vasai', 'Virar', 'Nalasopara', 'Boisar', 'Palghar'
]

export default function PropertyServices() {
  return (
    <section id="property" className="py-20 bg-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/property.jpg"
          alt="Property Services Background"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle="Property Services"
          title="Complete Property Solutions Across Mumbai & Palghar"
          description="From Bandra to Boisar - we help you buy, rent, or sell flats, shops, galas, and land. Expert guidance with complete legal verification."
          className="mb-16"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-primary-dark mb-4 text-center">Our Property Markets</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-2"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.03 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {locations.map((location) => (
              <motion.div
                key={location}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  show: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <LocationBadge name={location} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {propertyTypes.map((property, index) => (
            <ServiceCard
              key={index}
              icon={property.icon as any}
              title={property.title}
              description={property.description}
              features={property.features}
              locations={property.locations}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Properties Sold', value: '350+', icon: '🏢' },
            { label: 'Active Buyers', value: '200+', icon: '👥' },
            { label: 'Properties on Rent', value: '150+', icon: '🔑' },
            { label: 'Happy Owners', value: '500+', icon: '🏠' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-cream to-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-dark mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'For Buyers',
              icon: '🔍',
              features: ['Property search', 'Price negotiation', 'Legal verification', 'Loan assistance'],
            },
            {
              title: 'For Sellers',
              icon: '📢',
              features: ['Market valuation', 'Property listing', 'Documentation', 'Fast closure'],
            },
            {
              title: 'For Investors',
              icon: '📈',
              features: ['High ROI properties', 'Market analysis', 'Portfolio advice', 'Legal due diligence'],
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.02)' }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h4 className="text-lg font-bold text-primary-dark mb-4">{service.title}</h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center gap-2 text-sm text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + idx * 0.05 }}
                  >
                    <CheckCircle size={14} className="text-accent" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
