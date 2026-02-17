'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, Home, Building2, Store, ArrowRight, Award, 
  Calendar, Users, Ruler, Clock, Shield, CheckCircle2,
  BedDouble, Bath, Square, Zap, Star, Heart
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/common/Container';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

// Property data
const allProperties = [
  // Residential Buildings
  {
    id: 1,
    title: 'Balwant Residency',
    location: 'Boisar West',
    price: '₹42 Lacs - ₹85 Lacs',
    type: 'Residential Apartments',
    size: '1/2 BHK, 450-850 sq.ft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    features: ['Ready to Move', 'Vaastu Compliant', 'Parking Available', 'Near Station'],
    status: 'Ready to Move',
    badgeColor: 'bg-green-100 text-green-700',
    category: 'residential',
    builtYear: '2019',
    units: '48 flats',
    floors: '7',
    area: '45,000 sq.ft',
    bedrooms: '1/2',
    bathrooms: '1/2',
    amenities: ['Gym', 'Garden', 'Security', 'Power Backup', 'Lift'],
    longDescription: 'Premium residential project with modern amenities and vaastu-compliant design. Located close to railway station and market.',
    hoverDetails: [
      { icon: Calendar, label: 'Built', value: '2019' },
      { icon: Ruler, label: 'Area', value: '45,000 sq.ft' },
      { icon: BedDouble, label: 'BHK', value: '1/2' },
      { icon: Bath, label: 'Bathrooms', value: '1/2' }
    ]
  },
  {
    id: 2,
    title: 'Sai Residency',
    location: 'Vasai East',
    price: '₹55 Lacs - ₹1.2 Cr',
    type: 'Luxury Apartments',
    size: '2/3 BHK, 650-1250 sq.ft',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1200',
    features: ['Club House', 'Garden', 'Power Backup', 'Security', 'Gym'],
    status: 'Ready to Move',
    badgeColor: 'bg-green-100 text-green-700',
    category: 'residential',
    builtYear: '2020',
    units: '32 flats',
    floors: '5',
    area: '38,000 sq.ft',
    bedrooms: '2/3',
    bathrooms: '2/3',
    amenities: ['Club House', 'Garden', 'Security', 'Power Backup', 'Gym', 'Children\'s Park'],
    longDescription: 'Luxury apartment project with 2/3 BHK configurations. Features include club house, gym, and advanced security systems.',
    hoverDetails: [
      { icon: Calendar, label: 'Built', value: '2020' },
      { icon: Ruler, label: 'Area', value: '38,000 sq.ft' },
      { icon: BedDouble, label: 'BHK', value: '2/3' },
      { icon: Bath, label: 'Bathrooms', value: '2/3' }
    ]
  },
  {
    id: 3,
    title: 'Green Valley Towers',
    location: 'Virar East',
    price: '₹38 Lacs - ₹75 Lacs',
    type: 'Residential Apartments',
    size: '1/2 BHK, 425-800 sq.ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    features: ['Gym', 'Children\'s Park', '24/7 Security', 'Near Station', 'Rainwater Harvesting'],
    status: 'Ready to Move',
    badgeColor: 'bg-green-100 text-green-700',
    category: 'residential',
    builtYear: '2021',
    units: '64 flats',
    floors: '8',
    area: '72,000 sq.ft',
    bedrooms: '1/2',
    bathrooms: '1/2',
    amenities: ['Gym', 'Children\'s Park', 'Security', 'Rainwater Harvesting', 'Lift'],
    longDescription: 'Large-scale residential complex with 1/2 BHK configurations. Features include gym, children\'s park, and rainwater harvesting.',
    hoverDetails: [
      { icon: Calendar, label: 'Built', value: '2021' },
      { icon: Ruler, label: 'Area', value: '72,000 sq.ft' },
      { icon: BedDouble, label: 'BHK', value: '1/2' },
      { icon: Bath, label: 'Bathrooms', value: '1/2' }
    ]
  },
  {
    id: 4,
    title: 'Sai Dham',
    location: 'Vasai Gaon',
    price: '₹65 Lacs - ₹95 Lacs',
    type: 'Residential Apartments',
    size: '2 BHK, 700-950 sq.ft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    features: ['Temple Nearby', 'Market Access', 'Parking', 'Security', 'Vaastu Compliant'],
    status: 'Ready to Move',
    badgeColor: 'bg-green-100 text-green-700',
    category: 'residential',
    builtYear: '2022',
    units: '56 flats',
    floors: '6',
    area: '52,000 sq.ft',
    bedrooms: '2',
    bathrooms: '2',
    amenities: ['Temple Nearby', 'Market Access', 'Parking', 'Security', 'Lift'],
    longDescription: 'Affordable housing project with 2 BHK configurations. Located near temple and market with all basic amenities.',
    hoverDetails: [
      { icon: Calendar, label: 'Built', value: '2022' },
      { icon: Ruler, label: 'Area', value: '52,000 sq.ft' },
      { icon: BedDouble, label: 'BHK', value: '2' },
      { icon: Bath, label: 'Bathrooms', value: '2' }
    ]
  },
  {
    id: 5,
    title: 'Om Siddhi Vinayak',
    location: 'Nalasopara East',
    price: '₹45 Lacs - ₹82 Lacs',
    type: 'Residential Apartments',
    size: '1/2 BHK, 500-900 sq.ft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    features: ['Near Railway', 'School Nearby', 'Parking', 'Gym', 'Market Access'],
    status: 'Ready to Move',
    badgeColor: 'bg-green-100 text-green-700',
    category: 'residential',
    builtYear: '2023',
    units: '40 flats',
    floors: '5',
    area: '35,000 sq.ft',
    bedrooms: '1/2',
    bathrooms: '1/2',
    amenities: ['Near Railway', 'School Nearby', 'Parking', 'Gym', 'Lift'],
    longDescription: 'Conveniently located project with 1/2 BHK configurations. Walking distance to railway station and schools.',
    hoverDetails: [
      { icon: Calendar, label: 'Built', value: '2023' },
      { icon: Ruler, label: 'Area', value: '35,000 sq.ft' },
      { icon: BedDouble, label: 'BHK', value: '1/2' },
      { icon: Bath, label: 'Bathrooms', value: '1/2' }
    ]
  },
  {
    id: 6,
    title: 'Shree Ganesh CHS',
    location: 'Virar West',
    price: '₹52 Lacs - ₹88 Lacs',
    type: 'Residential Apartments',
    size: '2 BHK, 650-950 sq.ft',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200',
    features: ['Garden', 'Community Hall', 'Parking', 'Security', 'Children\'s Park'],
    status: 'Ready to Move',
    badgeColor: 'bg-green-100 text-green-700',
    category: 'residential',
    builtYear: '2023',
    units: '28 flats',
    floors: '5',
    area: '30,000 sq.ft',
    bedrooms: '2',
    bathrooms: '2',
    amenities: ['Garden', 'Community Hall', 'Parking', 'Security', 'Children\'s Park', 'Lift'],
    longDescription: 'Peaceful residential project with garden and community hall. Ideal for families.',
    hoverDetails: [
      { icon: Calendar, label: 'Built', value: '2023' },
      { icon: Ruler, label: 'Area', value: '30,000 sq.ft' },
      { icon: BedDouble, label: 'BHK', value: '2' },
      { icon: Bath, label: 'Bathrooms', value: '2' }
    ]
  },
  // Land Holdings
  {
    id: 7,
    title: 'Premium Residential Land',
    location: 'Naigaon East',
    price: '₹2.5 Cr per acre',
    type: 'Land Parcel',
    size: '2 Acres (87,120 sq.ft)',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    features: ['NA Permission', 'Road Access', 'Utilities Available', 'Ideal for Township'],
    status: 'Available',
    badgeColor: 'bg-blue-100 text-blue-700',
    category: 'land',
    area: '2 acres',
    longDescription: 'Prime residential development land with NA permission. Ideal for township or group housing project.',
    hoverDetails: [
      { icon: Ruler, label: 'Area', value: '2 Acres' },
      { icon: Zap, label: 'NA Permission', value: 'Yes' },
      { icon: MapPin, label: 'Location', value: 'Naigaon East' },
      { icon: Shield, label: 'Title', value: 'Clear' }
    ]
  },
  {
    id: 8,
    title: 'Prime Development Land',
    location: 'Vasai Gaon',
    price: '₹2.2 Cr per acre',
    type: 'Agricultural Land',
    size: '2 Acres (87,120 sq.ft)',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200',
    features: ['NA Conversion Possible', 'Well Connected', 'School Nearby', 'Good ROI'],
    status: 'Available',
    badgeColor: 'bg-blue-100 text-blue-700',
    category: 'land',
    area: '2 acres',
    longDescription: 'Agricultural land with NA conversion possibility. Well connected to main road and amenities.',
    hoverDetails: [
      { icon: Ruler, label: 'Area', value: '2 Acres' },
      { icon: Zap, label: 'NA Possible', value: 'Yes' },
      { icon: MapPin, label: 'Location', value: 'Vasai Gaon' },
      { icon: Shield, label: 'Title', value: 'Clear' }
    ]
  },
  {
    id: 9,
    title: 'Commercial Land Parcel',
    location: 'Vasai East',
    price: '₹3 Cr per acre',
    type: 'Commercial Land',
    size: '1 Acre (43,560 sq.ft)',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    features: ['Main Road Facing', 'All Permissions', 'High Footfall', 'Ideal for Mall/Office'],
    status: 'Available',
    badgeColor: 'bg-blue-100 text-blue-700',
    category: 'land',
    area: '1 acre',
    longDescription: 'Prime commercial land on main road. All permissions in place. Ideal for mall, office, or commercial complex.',
    hoverDetails: [
      { icon: Ruler, label: 'Area', value: '1 Acre' },
      { icon: Zap, label: 'Permissions', value: 'Ready' },
      { icon: MapPin, label: 'Location', value: 'Vasai East' },
      { icon: Shield, label: 'Title', value: 'Clear' }
    ]
  },
  {
    id: 10,
    title: 'Commercial Shop',
    location: 'Naigaon',
    price: '₹1.2 Cr',
    type: 'Commercial Space',
    size: '1200 sq.ft',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
    features: ['Prime Location', 'High Visibility', 'Parking', 'Ready to Occupy'],
    status: 'Available',
    badgeColor: 'bg-purple-100 text-purple-700',
    category: 'commercial',
    area: '1200 sq.ft',
    longDescription: 'Ready to occupy commercial shop in prime location. High footfall area with parking facility.',
    hoverDetails: [
      { icon: Ruler, label: 'Area', value: '1200 sq.ft' },
      { icon: Zap, label: 'Status', value: 'Ready' },
      { icon: MapPin, label: 'Location', value: 'Naigaon' },
      { icon: Shield, label: 'Title', value: 'Clear' }
    ]
  }
];

// Categories
const categories = [
  { name: 'All Properties', filter: 'all' },
  { name: 'Residential', filter: 'residential' },
  { name: 'Land', filter: 'land' },
  { name: 'Commercial', filter: 'commercial' },
];

// Properties Grid Component with Hover Flip
const PropertiesGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter properties based on category
  const filteredProperties = activeCategory === 'all' 
    ? allProperties 
    : allProperties.filter(p => p.category === activeCategory);

  return (
    <section className="py-13">
      <Container>
        {/* Category Filter */}
        <div className="sticky top-13 z-40 bg-white border-b border-gray-200 shadow-sm mb-8">
          <Container>
            <div className="flex items-center py-3 overflow-x-auto hide-scrollbar gap-1">
              {categories.map((category) => (
                <button
                  key={category.filter}
                  onClick={() => setActiveCategory(category.filter)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    activeCategory === category.filter
                      ? 'bg-[#2F4F3E] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
              <span className="text-xs text-gray-400 ml-2">
                {filteredProperties.length} items
              </span>
            </div>
          </Container>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">No properties found in this category.</p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={scaleIn}
                onHoverStart={() => setHoveredId(property.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative h-[500px] cursor-pointer"
              >
                {/* Front Card */}
                <motion.div
                  animate={{
                    rotateY: hoveredId === property.id ? 180 : 0,
                    opacity: hoveredId === property.id ? 0 : 1
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ backfaceVisibility: 'hidden' }}
                  className={`absolute inset-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                    hoveredId === property.id ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold ${property.badgeColor}`}>
                      {property.status}
                    </div>
                    {property.area && property.category === 'land' && (
                      <div className="absolute top-4 left-4 bg-[#2F4F3E]/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                        {property.area}
                      </div>
                    )}
                    {property.builtYear && property.category === 'residential' && (
                      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                        Built {property.builtYear}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2F4F3E] mb-2 line-clamp-1">{property.title}</h3>
                    
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                      <MapPin size={14} className="text-[#C9A44C]" />
                      {property.location}
                    </div>

                    <p className="text-gray-600 text-sm mb-3">{property.size}</p>
                    
                    {property.units && (
                      <p className="text-xs text-[#C9A44C] font-semibold mb-3">{property.units}</p>
                    )}

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-[#C9A44C] font-bold text-lg">{property.price}</span>
                      <span className="text-xs text-gray-400">Hover for details</span>
                    </div>
                  </div>
                </motion.div>

                {/* Back Card - Hover Details - Consistent Dark Green */}
              {/* Back Card - Hover Details - Clean & Simple */}
<motion.div
  animate={{
    rotateY: hoveredId === property.id ? 0 : -180,
    opacity: hoveredId === property.id ? 1 : 0
  }}
  transition={{ duration: 0.6 }}
  style={{ backfaceVisibility: 'hidden' }}
  className={`absolute inset-0 bg-[#2F4F3E] text-white rounded-2xl shadow-2xl overflow-hidden p-8 flex flex-col ${
    hoveredId === property.id ? '' : 'pointer-events-none'
  }`}
>
  {/* Simple Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{ 
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A44C" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      backgroundSize: '30px 30px'
    }} />
  </div>

  <div className="relative z-10 h-full flex flex-col">
    {/* Simple Header */}
    <div className="mb-4">
      <h3 className="text-2xl font-bold mb-1">{property.title}</h3>
      <div className="flex items-center gap-1 text-white/60 text-sm">
        <MapPin size={14} className="text-[#C9A44C]" />
        {property.location}
      </div>
    </div>

    {/* Short Description */}
    <p className="text-white/80 text-sm mb-6">{property.longDescription.substring(0, 100)}...</p>

    {/* Key Details - Simple Grid */}
    <div className="grid grid-cols-2 gap-4 mb-8">
      {property.hoverDetails.slice(0, 4).map((detail, idx) => (
        <div key={idx} className="bg-white/10 p-4 rounded-xl">
          <detail.icon size={20} className="text-[#C9A44C] mb-2" />
          <div className="text-xs text-white/60">{detail.label}</div>
          <div className="font-bold text-lg">{detail.value}</div>
        </div>
      ))}
    </div>

    {/* Price */}
    <div className="mt-auto mb-4">
      <div className="text-2xl font-bold text-[#C9A44C]">{property.price}</div>
    </div>

    {/* Simple CTA */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`/contact?property=${property.id}`}
        className="block w-full bg-[#C9A44C] text-[#2F4F3E] py-4 rounded-xl font-bold text-center"
      >
        Inquire Now
      </Link>
    </motion.div>
  </div>
</motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
};

// Stats Bar
const StatsBar = () => {
  const stats = [
    { icon: Home, value: '6+', label: 'Projects' },
    { icon: Ruler, value: '5+', label: 'Acres Land' },
    { icon: Users, value: '250+', label: 'Families' },
    { icon: Star, value: '4.8', label: 'Rating' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-[#2F4F3E]">{stat.value}</div>
              <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <stat.icon size={12} className="text-[#C9A44C]" />
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

// Main Page
export default function PropertyPage() {
  return (
    <main className="bg-[#F6F3E8] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2400"
            alt="Premium Properties"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2F4F3E]/90" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A44C" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#C9A44C]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#C9A44C]/30">
              <span className="text-xs font-semibold tracking-wide text-white">N • SINCE 2008</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Premium <span className="text-[#C9A44C]">Properties</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              Residential flats • Land parcels • Commercial spaces across Mumbai, Vasai, Virar, Boisar & Palghar
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">6+</div>
                <div className="text-sm text-white/60">Residential Projects</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">5+</div>
                <div className="text-sm text-white/60">Acres Land Bank</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">250+</div>
                <div className="text-sm text-white/60">Happy Families</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <StatsBar />
      <PropertiesGrid />

      {/* CTA Section */}
      <section className="py-20 bg-[#2F4F3E] text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Find Your <span className="text-[#C9A44C]">Dream Space</span>
            </h2>
            <p className="text-white/60 mb-8">Get in touch with our property experts for personalized assistance.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <button className="bg-[#C9A44C] text-[#2F4F3E] px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 font-medium inline-flex items-center gap-2 text-lg">
                  Contact Us <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}