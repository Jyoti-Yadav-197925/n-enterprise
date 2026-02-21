import { Metadata } from 'next'
import PropertyPageClient from '@/components/pages/PropertyPageClient'

export const metadata: Metadata = {
  title: 'Property Dealers in Mumbai | Buy, Sell, Rent Properties',
  description: 'Find best properties in Mumbai, Vasai, Virar, Boisar & Palghar. Residential flats, commercial shops, land. Expert property dealers with transparent dealing.',
  keywords: 'property dealers Mumbai, real estate Vasai, buy flat Virar, sell property Boisar, rent commercial space Palghar',
  openGraph: {
    title: 'Property Dealers | N Enterprise Mumbai',
    description: 'Expert property dealers in Mumbai & Palghar for buying, selling, and renting residential & commercial properties.',
    images: [
      {
        url: 'https://www.nenterprises.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N Enterprise Property Services',
      },
    ],
  }
}

export default function PropertyPage() {
  return <PropertyPageClient />
}