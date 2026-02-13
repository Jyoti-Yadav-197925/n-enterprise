import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import LoanServices from '@/components/home/LoanServices'
import ConstructionServices from '@/components/home/ConstructionServices'
import PropertyServices from '@/components/home/PropertyServices'
import Locations from '@/components/home/Locations'
import ToolsSection from '@/components/home/ToolsSection'
import ContactSection from '@/components/home/ContactSection'
import Stats from '@/sections/Stats'
import Process from '@/sections/Process'
import Testimonials from '@/sections/Testimonials'
import WhatsAppAssistant from '@/components/common/WhatsAppAssistant'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <LoanServices />
      <Process />
      <ConstructionServices />
      <PropertyServices />
      <Locations />
      <ToolsSection />
      <Testimonials />
      <ContactSection />
      <Footer />
      <WhatsAppAssistant />
    </main>
  )
}
