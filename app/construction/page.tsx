import { Metadata } from 'next'
import ConstructionPageClient from '@/components/pages/ConstructionPageClient'

export const metadata: Metadata = {
  title: 'Construction Company Mumbai | Redevelopment & Stalled Projects',
  description: 'Expert construction services in Mumbai for society redevelopment, stalled project completion, and new construction. 70:30, 65:35 models available.',
  keywords: 'construction company Mumbai, society redevelopment, stalled project completion, building contractor Vasai, redevelopment models 70:30',
  openGraph: {
    title: 'Construction & Redevelopment | N Enterprise Mumbai',
    description: 'Expert construction services for redevelopment, stalled projects, and new construction across Mumbai & Palghar.',
    images: [
      {
        url: 'https://www.nenterprises.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N Enterprise Construction Services',
      },
    ],
  }
}

export default function ConstructionPage() {
  return <ConstructionPageClient />
}