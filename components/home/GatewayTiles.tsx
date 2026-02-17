'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Landmark, Building2, HardHat, ArrowRight, Phone, TrendingUp, Users, Map, Clock, Shield } from 'lucide-react'
import Container from '@/components/common/Container'
import { Sparkles } from 'lucide-react'

const tiles = [
  {
    icon: Landmark,
    title: 'Capital & Loans',
    description: 'Strategic bridge between Tier-1 financial institutions and your enterprise goals. PAN India support since 2008.',
    href: '/loan',
    stats: [
      { value: '7+', label: 'Bank Partners' },
      { value: '50+', label: 'Loans Processed' }
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    hoverDetails: [
      { icon: TrendingUp, text: '8.5% - 10.5% Interest Rates' },
      { icon: Clock, text: 'Approval in 48-72 hours' },
      { icon: Shield, text: 'Minimal Documentation' },
      { icon: Users, text: 'Dedicated Relationship Manager' }
    ]
  },
  {
    icon: Building2,
    title: 'Asset Portfolio',
    description: 'High-yield real estate assets curated across the Mumbai-Palghar development corridor. Quality over quantity..',
    href: '/property',
    stats: [
      { value: '10+', label: 'Properties' },
      { value: '5+', label: 'Active Buyers' }
    ],
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1200',
    hoverDetails: [
      { icon: Map, text: 'Locations: Andheri, Bandra, Vasai, Virar, Boisar, Palghar' },
      { icon: Building2, text: 'Residential, Commercial, Industrial' },
      { icon: Shield, text: 'Legal Verification Included' },
      { icon: Users, text: 'Free Property Valuation' }
    ]
  },
  {
    icon: HardHat,
    title: 'Visionary Build',
    description: 'Specialized redevelopment and structural completion of landmark stalled projects. Starting fresh with integrity.',
    href: '/construction',
    stats: [
      { value: '3+', label: 'Projects' },
      { value: '27k+', label: 'Sq Ft Built' }
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    hoverDetails: [
      { icon: Building2, text: 'Models: 70:30, 65:35' },
      { icon: Clock, text: 'Project Completion in 18-24 months' },
      { icon: Shield, text: 'RERA Registered Projects' },
      { icon: TrendingUp, text: 'Free Consultation & Site Visit' }
    ]
  }
]

export default function GatewayTiles() {
  return (
    <section className="py-20 bg-[#F6F3E8]">
      <Container>
        {/* Section Header - With Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-6">
  <Sparkles size={14} className="text-accent" />
  <span className="text-xs font-semibold tracking-wide">ELITE DIVISIONS</span>
</div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
            Integrated <span className="text-accent">Solutions</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three specialized divisions working in unison to deliver comprehensive financial and structural excellence.
          </p>
        </div>

        {/* Tiles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiles.map((tile, index) => (
            <Link href={tile.href} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-[500px] overflow-hidden cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={tile.image} 
                    alt={tile.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2F4F3E] via-[#2F4F3E]/80 to-transparent" />
                </div>
                
                {/* Default Content - Shown normally */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-dark/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <tile.icon size={24} className="text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {tile.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    {tile.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-6">
                    {tile.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-white font-bold">{stat.value}</div>
                        <div className="text-white/60 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <span>EXPLORE DIVISION</span>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Hover Content - Shown on hover */}
                <div className="absolute inset-0 z-20 bg-gradient-to-br from-[#2F4F3E] to-[#1E3F2E] p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-bold text-accent mb-6">Key Highlights</h4>
                  
                  <div className="space-y-4">
                    {tile.hoverDetails.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <detail.icon size={18} className="text-accent mt-0.5" />
                        <span className="text-white/90 text-sm">{detail.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>CLICK TO LEARN MORE</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* 24/7 Support Bar */}
      
       <div className="mt-12 text-center">
  {/* Badge */}
  <div className="inline-flex items-center gap-2 bg-primary-dark text-cream px-4 py-2 rounded-full mb-4">
    <Phone size={14} className="text-accent" />
    <span className="text-xs font-semibold tracking-wide">24/7 SUPPORT</span>
  </div>
  
  {/* Heading */}
  <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
    Get Your Free Consultation Today
  </h3>
  
  {/* Description */}
  <p className="text-gray-600 max-w-2xl mx-auto mb-6">
    Whether you need a loan, want to buy/sell property, or have a construction project - 
    our experts are ready to help. PAN India loan support available.
  </p>
  
  {/* Phone Number - Simple like Contact page */}
  <div className="text-left inline-block">
    <p className="text-sm text-gray-500 mb-1">Call Us</p>
    <a 
      href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} 
      className="text-2xl md:text-3xl font-bold text-accent hover:text-primary-dark transition-colors"
    >
      +91 {process.env.NEXT_PUBLIC_PHONE}
    </a>
  </div>
</div>
      </Container>
    </section>
  )
}