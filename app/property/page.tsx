'use client'

import { Metadata } from 'next'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Home, Building2, ArrowRight, Award, Calendar, Users, Ruler, BedDouble, Bath, Zap, Star } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/common/Container';


export const metadata: Metadata = {
  title: 'Property Dealers in Mumbai | Buy, Sell, Rent Properties',
  description: 'Find best properties in Mumbai, Vasai, Virar, Boisar & Palghar. Residential flats, commercial shops, land. Expert property dealers with transparent dealing.',
  keywords: 'property dealers Mumbai, real estate Vasai, buy flat Virar, sell property Boisar, rent commercial space Palghar',
  openGraph: {
    title: 'Property Dealers | N Enterprise Mumbai',
    description: 'Expert property dealers in Mumbai & Palghar for buying, selling, and renting residential & commercial properties.',
  }
}

// Property data (simplified for brevity)
const allProperties = [
  { id: 1, title: 'Balwant Residency', location: 'Boisar West', price: '₹42 Lacs - ₹85 Lacs', category: 'residential', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200', status: 'Ready to Move', badgeColor: 'bg-green-100 text-green-700', builtYear: '2019', area: '45,000 sq.ft', bedrooms: '1/2', longDescription: 'Premium residential project with modern amenities.', hoverDetails: [{ icon: Calendar, label: 'Built', value: '2019' }, { icon: Ruler, label: 'Area', value: '45,000 sq.ft' }, { icon: BedDouble, label: 'BHK', value: '1/2' }] },
  { id: 2, title: 'Sai Residency', location: 'Vasai East', price: '₹55 Lacs - ₹1.2 Cr', category: 'residential', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1200', status: 'Ready to Move', badgeColor: 'bg-green-100 text-green-700', builtYear: '2020', area: '38,000 sq.ft', bedrooms: '2/3', longDescription: 'Luxury apartment complex.', hoverDetails: [{ icon: Calendar, label: 'Built', value: '2020' }, { icon: Ruler, label: 'Area', value: '38,000 sq.ft' }, { icon: BedDouble, label: 'BHK', value: '2/3' }] },
  { id: 3, title: 'Green Valley Towers', location: 'Virar East', price: '₹38 Lacs - ₹75 Lacs', category: 'residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', status: 'Ready to Move', badgeColor: 'bg-green-100 text-green-700', builtYear: '2021', area: '72,000 sq.ft', bedrooms: '1/2', longDescription: 'Large residential complex.', hoverDetails: [{ icon: Calendar, label: 'Built', value: '2021' }, { icon: Ruler, label: 'Area', value: '72,000 sq.ft' }, { icon: BedDouble, label: 'BHK', value: '1/2' }] },
  { id: 7, title: 'Premium Residential Land', location: 'Naigaon East', price: '₹2.5 Cr per acre', category: 'land', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200', status: 'Available', badgeColor: 'bg-blue-100 text-blue-700', area: '2 acres', longDescription: 'Prime residential land.', hoverDetails: [{ icon: Ruler, label: 'Area', value: '2 Acres' }, { icon: Zap, label: 'NA Permission', value: 'Yes' }] },
  { id: 10, title: 'Commercial Shop', location: 'Naigaon', price: '₹1.2 Cr', category: 'commercial', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200', status: 'Available', badgeColor: 'bg-purple-100 text-purple-700', area: '1200 sq.ft', longDescription: 'Commercial shop.', hoverDetails: [{ icon: Ruler, label: 'Area', value: '1200 sq.ft' }, { icon: Zap, label: 'Status', value: 'Ready' }] }
];

const categories = [
  { name: 'All Properties', filter: 'all' },
  { name: 'Residential', filter: 'residential' },
  { name: 'Land', filter: 'land' },
  { name: 'Commercial', filter: 'commercial' },
];

export default function PropertyPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Filter properties
  const filteredProperties = activeCategory === 'all' 
    ? allProperties 
    : allProperties.filter(p => p.category === activeCategory);

  return (
    <main className="bg-[#F6F3E8] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-[#2F4F3E] overflow-hidden">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A44C]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#C9A44C]/30">
              <span className="text-xs font-semibold tracking-wide text-white">N • SINCE 2008</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Premium <span className="text-[#C9A44C]">Properties</span>
            </h1>
            <p className="text-xl text-white/80">Residential • Land • Commercial</p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <Container>
          <div className="flex items-center py-3 gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.filter}
                onClick={() => {
                  console.log('Setting category to:', category.filter);
                  setActiveCategory(category.filter);
                  setHoveredId(null); // Reset hover state
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.filter
                    ? 'bg-[#2F4F3E] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name} ({allProperties.filter(p => category.filter === 'all' ? true : p.category === category.filter).length})
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Properties Grid */}
      <section className="py-10">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="relative h-[450px] cursor-pointer group"
                onMouseEnter={() => setHoveredId(property.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Front Card */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                    hoveredId === property.id ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                    <div className="relative h-48">
                      <Image src={property.image} alt={property.title} width={600} height={400} className="w-full h-full object-cover" />
                      <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold ${property.badgeColor}`}>
                        {property.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#2F4F3E] mb-2">{property.title}</h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                        <MapPin size={14} className="text-[#C9A44C]" /> {property.location}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-[#C9A44C] font-bold text-lg">{property.price}</span>
                        <span className="text-xs text-gray-400">Hover for details</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Card */}
                <div
                  className={`absolute inset-0 w-full h-full bg-[#2F4F3E] text-white rounded-xl shadow-2xl overflow-hidden p-6 transition-all duration-500 ${
                    hoveredId === property.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{property.longDescription}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {property.hoverDetails.map((detail, idx) => (
                        <div key={idx} className="bg-white/10 p-3 rounded-xl">
                          <detail.icon size={18} className="text-[#C9A44C] mb-1" />
                          <div className="text-xs text-white/60">{detail.label}</div>
                          <div className="font-bold text-sm">{detail.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <div className="text-xl font-bold text-[#C9A44C] mb-3">{property.price}</div>
                      <Link href={`/contact?property=${property.id}`} className="block w-full bg-[#C9A44C] text-[#2F4F3E] py-3 rounded-lg font-bold text-center">
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}