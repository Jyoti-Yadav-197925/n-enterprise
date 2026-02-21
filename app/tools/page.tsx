import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calculator, Percent, Scale, ArrowRight, Award, Phone, TrendingUp, Clock, Shield } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import EMICalculator from '@/components/tools/EMICalculator';
import RateCompare from '@/components/tools/RateCompare';
import DocumentChecklist from '@/components/tools/DocumentChecklist';
import EligibilityChecker from '@/components/tools/EligibilityChecker';

export const metadata: Metadata = {
  title: 'Financial Tools | EMI Calculator, Rate Compare & Loan Eligibility',
  description: 'Free financial tools: EMI calculator, interest rate comparison, loan eligibility checker, and document checklist for home loans, business loans, and more.',
  keywords: 'EMI calculator, loan eligibility checker, interest rate compare, home loan calculator, business loan eligibility, document checklist',
};
export default function ToolsPage() {
  return (
    <main className="bg-[#F6F3E8] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2400"
            alt="Financial Tools"
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
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A44C]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#C9A44C]/30">
              <span className="text-xs font-semibold tracking-wide text-white">N • SINCE 2008</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Financial <span className="text-[#C9A44C]">Tools</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              EMI Calculator • Rate Compare • Eligibility Checker • Document Checklist
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">1k+</div>
                <div className="text-sm text-white/60">Monthly Users</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">Free</div>
                <div className="text-sm text-white/60">No Registration</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#C9A44C]">24/7</div>
                <div className="text-sm text-white/60">Available</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2F4F3E]">1.2k+</div>
              <div className="text-xs text-gray-500">EMI Calculations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2F4F3E]">500+</div>
              <div className="text-xs text-gray-500">Rate Comparisons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2F4F3E]">2k+</div>
              <div className="text-xs text-gray-500">Eligibility Checks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2F4F3E]">Free</div>
              <div className="text-xs text-gray-500">No Registration</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Tools Grid */}
      <section className="py-20">
        <Container>
          <div className="space-y-12">
            <EMICalculator />
            <RateCompare />
            <DocumentChecklist />
            <EligibilityChecker />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2F4F3E] text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Need Expert <span className="text-[#C9A44C]">Advice?</span>
            </h2>
            <p className="text-white/60 mb-8">Our financial experts are here to help you make the right decision.</p>
            <Link href="/contact">
              <button className="bg-[#C9A44C] text-[#2F4F3E] px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 font-medium inline-flex items-center gap-2 text-lg">
                Talk to Expert <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}