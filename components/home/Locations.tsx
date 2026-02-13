'use client'

import { motion } from 'framer-motion'
import { MapPin, Building2, Home } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import LocationBadge from '@/components/ui/LocationBadge'

const locations = [
  {
    zone: 'South Mumbai',
    areas: ['Andheri', 'Bandra', 'Oshiwara'],
    services: ['Flats', 'Shops', 'Redevelopment'],
  },
  {
    zone: 'Western Suburbs',
    areas: ['Mira Road', 'Borivali', 'Bhayandar'],
    services: ['Apartments', 'Commercial', 'Construction'],
  },
  {
    zone: 'Palghar District',
    areas: ['Naigaon', 'Vasai', 'Virar', 'Nalasopara'],
    services: ['Flats', 'Galas', 'Land', 'Redevelopment'],
  },
  {
    zone: 'North Palghar',
    areas: ['Boisar', 'Palghar'],
    services: ['Land', 'Plots', 'Industrial', 'Construction'],
  },
]

const serviceMatrix = {
  loans: ['PAN India'],
  property: ['Mumbai', 'Vasai', 'Virar', 'Boisar', 'Palghar', 'All above areas'],
  construction: ['Mumbai', 'Vasai', 'Virar', 'Boisar', 'Palghar', 'Nalasopara'],
}

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-[#F6F3E8]">
      <Container>
        <SectionTitle
          subtitle="Service Locations"
          title="PAN India Loans | Mumbai to Palghar Properties"
          description="We serve clients across India for loans. Property and construction services are focused on Mumbai, Vasai, Virar, Boisar, Palghar, and all surrounding areas."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
              <MapPin className="text-accent" size={20} />
              Loan Services
            </h3>
            <p className="text-3xl font-bold text-accent mb-2">PAN India</p>
            <p className="text-sm text-gray-600">All states, all cities</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="inline-block bg-accent/10 text-accent-dark px-3 py-1 rounded-full text-xs font-semibold">
                Available Anywhere in India
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
              <Building2 className="text-accent" size={20} />
              Property Services
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {serviceMatrix.property.map((area) => (
                <LocationBadge key={area} name={area} variant="small" />
              ))}
            </div>
            <p className="text-sm text-gray-600">Flats, Shops, Galas, Land - Buy/Rent/Sell</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
              <Home className="text-accent" size={20} />
              Construction Services
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {serviceMatrix.construction.map((area) => (
                <LocationBadge key={area} name={area} variant="small" />
              ))}
            </div>
            <p className="text-sm text-gray-600">Redevelopment, Stalled Projects, New Construction</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-bold text-primary-dark mb-3">{location.zone}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {location.areas.map((area) => (
                  <span key={area} className="bg-primary-dark text-cream px-3 py-1 rounded-full text-xs font-medium">
                    {area}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-primary">Services:</p>
                <div className="flex flex-wrap gap-1">
                  {location.services.map((service) => (
                    <span key={service} className="bg-accent/10 text-accent-dark px-2 py-0.5 rounded-full text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            <span className="font-bold text-primary-dark">Don't see your location?</span> We provide loan assistance PAN India.
            Contact us for any city in India.
          </p>
          <Button href="#contact" variant="primary">
            Enquire for Your Location
          </Button>
        </div>
      </Container>
    </section>
  )
}
