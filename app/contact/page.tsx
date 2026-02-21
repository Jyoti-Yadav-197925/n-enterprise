import { Metadata } from 'next'
import ContactPageClient from '@/components/pages/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact N Enterprise | Loan, Property & Construction Experts',
  description: 'Get in touch with N Enterprise for expert loan assistance, property dealing, and construction services in Mumbai. Free consultation. 24/7 support.',
  keywords: 'contact N Enterprise, loan expert Mumbai, property consultant Vasai, construction contractor Palghar',
  openGraph: {
    title: 'Contact N Enterprise | Mumbai',
    description: 'Get in touch with N Enterprise for expert loan, property, and construction services in Mumbai & Palghar.',
    images: [
      {
        url: 'https://www.nenterprises.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact N Enterprise',
      },
    ],
  }
}

export default function ContactPage() {
  return <ContactPageClient />
}