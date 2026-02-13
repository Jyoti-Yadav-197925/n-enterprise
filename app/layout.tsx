import './globals.css'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#2F4F3E',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'N Enterprise - Loan, Property & Construction Experts',
  description: 'PAN India Loan Assistance | Property Dealings Mumbai to Palghar | Construction Redevelopment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#F6F3E8] text-primary-dark">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
