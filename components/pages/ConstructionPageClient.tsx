'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, Hammer, HardHat, CheckCircle2, ArrowRight, 
  Award, MapPin, Calendar, Users, Ruler, Clock, Shield,
  FileText, TrendingUp, Home, Star, PenTool
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

// Construction Services
const services = [
  {
    id: 'redevelopment',
    title: 'Redevelopment',
    description: 'Transform aging societies into modern landmarks with premium amenities.',
    longDescription: 'Complete redevelopment solutions for old buildings and societies. We handle everything from legal clearances to construction and possession.',
    icon: Building2,
    features: [
      'Society redevelopment with 60:40, 65:35, 70:30 models',
      'Building renovation and structural upgrades',
      'Legal clearances and NOC management',
      'Premium amenities like gym, garden, parking'
    ],
    benefits: [
      'Increase property value by 40-60%',
      'Additional FSI and floor space',
      'Modern amenities and safety features',
      'No cost to members during construction'
    ],
    models: ['60:40', '65:35', '70:30'],
    stats: [
      { label: 'Projects', value: '5+' },
      { label: 'Units Created', value: '200+' },
      { label: 'Avg. Time', value: '24 months' }
    ],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200',
    hoverDetails: [
      { icon: Ruler, label: 'Area Handled', value: '2L+ sq.ft' },
      { icon: Clock, label: 'Avg. Completion', value: '24 months' },
      { icon: Users, label: 'Families Housed', value: '200+' },
      { icon: Shield, label: 'RERA Registered', value: 'Yes' }
    ],
    documents: ['Society NOC', 'Title Deed', 'Approved Plans', 'Member List', 'Tax Receipts']
  },
  {
    id: 'stalled',
    title: 'Stalled Projects',
    description: 'Complete stalled construction projects with legal and financial assistance.',
    longDescription: 'Specialized in reviving stuck construction projects. We provide funding, legal resolution, and complete construction to deliver your dream home.',
    icon: Hammer,
    features: [
      'Project assessment and feasibility study',
      'Funding assistance and bank partnerships',
      'Legal resolution and clearances',
      'Fast-track completion (12-18 months)'
    ],
    benefits: [
      'No additional cost to existing buyers',
      'Legal dispute resolution included',
      'Quality assurance and warranties',
      'Possession within guaranteed timeline'
    ],
    models: [],
    stats: [
      { label: 'Projects Revived', value: '3+' },
      { label: 'Units Saved', value: '150+' },
      { label: 'Success Rate', value: '95%' }
    ],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    hoverDetails: [
      { icon: Ruler, label: 'Projects Revived', value: '3+' },
      { icon: Clock, label: 'Completion Time', value: '12-18 months' },
      { icon: Users, label: 'Units Saved', value: '150+' },
      { icon: Shield, label: 'Legal Resolution', value: 'Guaranteed' }
    ],
    documents: ['Existing Approvals', 'Title Deed', 'Court Orders', 'Buyer List', 'Bank Statements']
  },
  {
    id: 'new',
    title: 'New Construction',
    description: 'Build from scratch with expert guidance and quality materials.',
    longDescription: 'End-to-end construction services for residential and commercial projects. From design to handover, we ensure quality and timely delivery.',
    icon: HardHat,
    features: [
      'Residential apartments and villas',
      'Commercial complexes and offices',
      'Industrial buildings and warehouses',
      'Turnkey solutions with design'
    ],
    benefits: [
      'Quality materials and workmanship',
      'Timely delivery with milestones',
      'Transparent pricing and contracts',
      'Post-construction support'
    ],
    models: [],
    stats: [
      { label: 'Projects', value: '4+' },
      { label: 'Sq.ft Built', value: '2.5L+' },
      { label: 'Happy Clients', value: '150+' }
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    hoverDetails: [
      { icon: Ruler, label: 'Area Built', value: '2.5L sq.ft' },
      { icon: Clock, label: 'Delivery Time', value: '18-24 months' },
      { icon: Users, label: 'Homes Delivered', value: '150+' },
      { icon: Shield, label: 'Structural Warranty', value: '10 years' }
    ],
    documents: ['Land Title', 'Approved Plans', 'NOCs', 'Contractor License', 'Bank Guarantee']
  }
];

// Completed Projects
const completedProjects = [
  {
    name: 'Balwant Residency',
    location: 'Boisar West',
    type: 'Residential High-Rise',
    description: '48-unit premium residential project with modern amenities and vaastu-compliant design.',
    fullDescription: 'Successfully completed 48-unit residential project with 60:40 profit-sharing model. Features include gym, garden, 24/7 security, and power backup.',
    status: 'Completed',
    year: '2019',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    badgeColor: 'bg-green-100 text-green-700',
    model: '60:40',
    units: '48 flats',
    floors: '7 floors',
    area: '45,000 sq.ft',
    amenities: ['Gym', 'Garden', 'Security', 'Power Backup'],
    hoverDetails: [
      { icon: Calendar, label: 'Completed', value: '2019' },
      { icon: Ruler, label: 'Area', value: '45,000 sq.ft' },
      { icon: Users, label: 'Families', value: '48' },
      { icon: Shield, label: 'Model', value: '60:40' }
    ]
  },
  {
    name: 'Sai Residency',
    location: 'Vasai East',
    type: 'Luxury Apartments',
    description: '32-unit luxury apartment complex with modern amenities and premium finishes.',
    fullDescription: 'Luxury apartment project with 2/3 BHK configurations. Features include club house, garden, and advanced security systems.',
    status: 'Completed',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1200',
    badgeColor: 'bg-green-100 text-green-700',
    model: '65:35',
    units: '32 flats',
    floors: '5 floors',
    area: '38,000 sq.ft',
    amenities: ['Club House', 'Garden', 'Security', 'Parking'],
    hoverDetails: [
      { icon: Calendar, label: 'Completed', value: '2020' },
      { icon: Ruler, label: 'Area', value: '38,000 sq.ft' },
      { icon: Users, label: 'Families', value: '32' },
      { icon: Shield, label: 'Model', value: '65:35' }
    ]
  },
  {
    name: 'Green Valley Towers',
    location: 'Virar East',
    type: 'Residential Complex',
    description: '64-unit residential project with modern amenities and green spaces.',
    fullDescription: 'Large-scale residential complex with 1/2 BHK configurations. Features include gym, children\'s park, and rainwater harvesting.',
    status: 'Completed',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    badgeColor: 'bg-green-100 text-green-700',
    model: '70:30',
    units: '64 flats',
    floors: '8 floors',
    area: '72,000 sq.ft',
    amenities: ['Gym', 'Children\'s Park', 'Security', 'Rainwater Harvesting'],
    hoverDetails: [
      { icon: Calendar, label: 'Completed', value: '2021' },
      { icon: Ruler, label: 'Area', value: '72,000 sq.ft' },
      { icon: Users, label: 'Families', value: '64' },
      { icon: Shield, label: 'Model', value: '70:30' }
    ]
  },
  {
    name: 'Sai Dham',
    location: 'Vasai Gaon',
    type: 'Residential Apartments',
    description: '56-unit residential project with vaastu-compliant design.',
    fullDescription: 'Affordable housing project with 2 BHK configurations. Located near temple and market with all basic amenities.',
    status: 'Completed',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    badgeColor: 'bg-green-100 text-green-700',
    model: '60:40',
    units: '56 flats',
    floors: '6 floors',
    area: '52,000 sq.ft',
    amenities: ['Temple Nearby', 'Market Access', 'Parking', 'Security'],
    hoverDetails: [
      { icon: Calendar, label: 'Completed', value: '2022' },
      { icon: Ruler, label: 'Area', value: '52,000 sq.ft' },
      { icon: Users, label: 'Families', value: '56' },
      { icon: Shield, label: 'Model', value: '60:40' }
    ]
  },
  {
    name: 'Om Siddhi Vinayak',
    location: 'Nalasopara East',
    type: 'Residential Apartments',
    description: '40-unit residential project near railway station.',
    fullDescription: 'Conveniently located project with 1/2 BHK configurations. Walking distance to railway station and schools.',
    status: 'Completed',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    badgeColor: 'bg-green-100 text-green-700',
    model: '65:35',
    units: '40 flats',
    floors: '5 floors',
    area: '35,000 sq.ft',
    amenities: ['Near Railway', 'School Nearby', 'Parking', 'Gym'],
    hoverDetails: [
      { icon: Calendar, label: 'Completed', value: '2023' },
      { icon: Ruler, label: 'Area', value: '35,000 sq.ft' },
      { icon: Users, label: 'Families', value: '40' },
      { icon: Shield, label: 'Model', value: '65:35' }
    ]
  }
];

// Services Component with Hover Flip
const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#F6F3E8]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#2F4F3E] text-white px-4 py-2 rounded-full mb-6">
            <HardHat size={14} className="text-[#C9A44C]" />
            <span className="text-xs font-semibold tracking-wide">OUR SERVICES</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F3E] mb-4">
            Construction <span className="text-[#C9A44C]">Solutions</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
            End-to-end construction services for residential and commercial projects
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={scaleIn}
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative h-[550px] cursor-pointer"
            >
              {/* Front Card */}
              <motion.div
                animate={{
                  rotateY: hoveredId === service.id ? 180 : 0,
                  opacity: hoveredId === service.id ? 0 : 1
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
                className={`absolute inset-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                  hoveredId === service.id ? 'pointer-events-none' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{service.title}</div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                  {/* Models */}
                  {service.models && service.models.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.models.map((model, i) => (
                        <span key={i} className="bg-[#2F4F3E] text-white text-xs px-3 py-1 rounded-full">
                          {model}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Key Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-[#C9A44C]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-[#F6F3E8] rounded-xl">
                    {service.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="font-bold text-[#2F4F3E]">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">Hover for details</span>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="bg-[#2F4F3E] text-white px-4 py-2 rounded-lg hover:bg-[#C9A44C] hover:text-[#2F4F3E] transition-colors text-sm font-medium flex items-center gap-2"
                    >
                      Get Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Back Card */}
              <motion.div
                animate={{
                  rotateY: hoveredId === service.id ? 0 : -180,
                  opacity: hoveredId === service.id ? 1 : 0
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
                className={`absolute inset-0 bg-[#2F4F3E] text-white rounded-2xl shadow-2xl overflow-hidden p-8 flex flex-col ${
                  hoveredId === service.id ? '' : 'pointer-events-none'
                }`}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A44C" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                    {service.models && service.models.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {service.models.map((model, i) => (
                          <span key={i} className="text-xs bg-[#C9A44C] text-[#2F4F3E] px-2 py-1 rounded-full font-semibold">
                            {model}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-white/80 text-sm mb-6">{service.longDescription.substring(0, 100)}...</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.hoverDetails.slice(0, 4).map((detail, idx) => (
                      <div key={idx} className="bg-white/10 p-4 rounded-xl">
                        <detail.icon size={20} className="text-[#C9A44C] mb-2" />
                        <div className="text-xs text-white/60">{detail.label}</div>
                        <div className="font-bold text-lg">{detail.value}</div>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto"
                  >
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="block w-full bg-[#C9A44C] text-[#2F4F3E] py-4 rounded-xl font-bold text-center"
                    >
                      Get Quote
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#2F4F3E] text-white px-4 py-2 rounded-full mb-6">
            <Award size={14} className="text-[#C9A44C]" />
            <span className="text-xs font-semibold tracking-wide">COMPLETED PROJECTS</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F3E] mb-4">
            Our <span className="text-[#C9A44C]">Success Stories</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
            Delivered with excellence and transparency
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {completedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-[450px] cursor-pointer"
            >
              {/* Front Card */}
              <motion.div
                animate={{
                  rotateY: hoveredIndex === index ? 180 : 0,
                  opacity: hoveredIndex === index ? 0 : 1
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
                className={`absolute inset-0 bg-[#F6F3E8] rounded-xl overflow-hidden shadow-lg ${
                  hoveredIndex === index ? 'pointer-events-none' : ''
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold ${project.badgeColor}`}>
                    {project.status}
                  </div>
                  <div className="absolute top-4 left-4 bg-[#2F4F3E]/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    {project.model}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2F4F3E] mb-2">{project.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <MapPin size={14} className="text-[#C9A44C]" />
                    {project.location}
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <div className="font-bold text-[#C9A44C]">{project.units}</div>
                      <div className="text-xs text-gray-500">Units</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-[#C9A44C]">{project.floors}</div>
                      <div className="text-xs text-gray-500">Floors</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-[#C9A44C]">{project.year}</div>
                      <div className="text-xs text-gray-500">Year</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.amenities.slice(0, 3).map((item, i) => (
                      <span key={i} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-gray-400">Hover for details</div>
                </div>
              </motion.div>

              {/* Back Card */}
              <motion.div
                animate={{
                  rotateY: hoveredIndex === index ? 0 : -180,
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
                className={`absolute inset-0 bg-[#2F4F3E] text-white rounded-xl shadow-2xl overflow-hidden p-6 flex flex-col ${
                  hoveredIndex === index ? '' : 'pointer-events-none'
                }`}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A44C" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.fullDescription}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.hoverDetails.map((detail, idx) => (
                      <div key={idx} className="bg-white/10 p-3 rounded-xl">
                        <detail.icon size={16} className="text-[#C9A44C] mb-1" />
                        <div className="text-xs text-white/70">{detail.label}</div>
                        <div className="font-bold text-sm">{detail.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.amenities.map((item, i) => (
                        <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto"
                  >
                    <Link
                      href={`/contact?project=${project.name}`}
                      className="block w-full bg-[#C9A44C] text-[#2F4F3E] py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors text-center"
                    >
                      Inquire Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

// Stats Bar
const StatsBar = () => {
  const stats = [
    { icon: Building2, value: '5+', label: 'Projects' },
    { icon: Users, value: '200+', label: 'Families' },
    { icon: Ruler, value: '2.5L+', label: 'Sq.ft Built' },
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
export default function ConstructionPageClient() {
  return (
    <main className="bg-[#F6F3E8] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2400"
            alt="Construction Services"
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
              Building <span className="text-[#C9A44C]">Excellence</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              Redevelopment • Stalled Projects • New Construction
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">5+</div>
                <div className="text-sm text-white/60">Projects</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">200+</div>
                <div className="text-sm text-white/60">Families</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">2.5L+</div>
                <div className="text-sm text-white/60">Sq.ft Built</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <StatsBar />
      <ServicesSection />
      <ProjectsSection />

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
              Start Your <span className="text-[#C9A44C]">Project</span>
            </h2>
            <p className="text-white/60 mb-8">Get in touch with our construction experts for a free consultation.</p>
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