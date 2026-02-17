

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import Stats from '@/sections/Stats'
import GatewayTiles from '@/components/home/GatewayTiles'
import Process from '@/sections/Process'
import FAQSection from '@/components/home/FAQSection'
import Testimonials from '@/sections/Testimonials'
import ToolsSection from '@/components/home/ToolsSection'
import ContactSection from '@/components/home/ContactSection'
import WhatsAppAssistant from '@/components/common/WhatsAppAssistant'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <GatewayTiles />
      <Process />
      <FAQSection />
      <Testimonials />
      <ToolsSection />
      <ContactSection />
      <Footer />
      <WhatsAppAssistant />
    </main>
  )
}