import { Metadata } from 'next'
import LoanPageClient from '@/components/pages/LoanPageClient'

export const metadata: Metadata = {
  title: 'Loan Assistance | Home, Business, Project Loans Mumbai',
  description: 'Get expert loan assistance in Mumbai for home loans, business loans, loan against property, and project loans. PAN India support. Lowest interest rates, quick approval.',
  keywords: 'home loan Mumbai, business loan Vasai, loan against property, project finance, construction loan, mortgage loan',
  openGraph: {
    title: 'Loan Assistance | N Enterprise Mumbai',
    description: 'Expert loan assistance for home, business, and project loans across Mumbai & Palghar.',
    images: [
      {
        url: 'https://www.nenterprises.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N Enterprise Loan Services',
      },
    ],
  }
}

export default function LoanPage() {
  return <LoanPageClient />
}