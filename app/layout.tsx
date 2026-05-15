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
  // BROWSER TAB - Clean & Professional
  title: {
    default: 'N Enterprise - Loan, Property & Construction Experts',
    template: '%s | N Enterprise'
  },
  
  // GOOGLE SEARCH DESCRIPTION - EXACTLY as you want it
  description: `N Enterprise - Loan, Property & Construction Experts

Since 2008 ★ 4.8 (121+ reviews)

🏆 15+ Years Experience | 270+ Happy Clients | PAN India Services
✅ All Types of Loans (PAN India) • ✅ Property Services (Vasai-Palghar) • ✅ Construction (Overall Mumbai)
📍 Vasai • Virar • Boisar • Mumbai • Palghar • Borivali
⏰ Mon-Sat 10AM-7PM | ⚡ 24/7 Support: +91 9156213334

Expert Loan Assistance, Property & Construction Solutions Across Mumbai. From Andheri to Palghar, we help you secure loans, find properties, and complete construction projects. ...read more`,
  
  keywords: [
    'home loan', 'business loan', 'project loan', 'mortgage loan', 
    'loan against property', 'personal loan', 'vehicle loan', 
    'construction loan', 'property in vasai', 'property in mumbai',
    'redevelopment projects', 'stalled project completion',
    'n enterprise', 'loan assistance mumbai', 'vasai virar properties',
    'borivali properties', 'palghar properties'
  ],
  
  authors: [{ name: 'N Enterprise' }],
  creator: 'N Enterprise',
  publisher: 'N Enterprise',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  metadataBase: new URL('https://nenterprises.in'),
  
  alternates: {
    canonical: '/',
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  
  // OPEN GRAPH - For Google & Social Media
  openGraph: {
    title: 'N Enterprise - Loan, Property & Construction Experts',
    description: 'Since 2008 ★ 4.8 (121+ reviews). 🏆 15+ Years Experience | 270+ Happy Clients | PAN India Services. ✅ All Types of Loans • ✅ Property Services • ✅ Construction. 📍 Vasai • Virar • Boisar • Mumbai • Palghar • Borivali',
    url: 'https://nenterprises.in',
    siteName: 'N Enterprise',
    images: [
      {
        url: 'https://nenterprises.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N Enterprise - Your Trusted Partner Since 2008',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  
  // TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'N Enterprise - Loan, Property & Construction Experts',
    description: 'Since 2008 ★ 4.8 (121+ reviews). 🏆 15+ Years Experience | 270+ Happy Clients | PAN India Services. ✅ All Types of Loans • ✅ Property Services • ✅ Construction',
    images: ['https://nenterprises.in/images/twitter-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: process.env.NEXT_GOOGLE_VERIFICATION,
  },
  
  category: 'finance',
  
  other: {
    'og:site_name': 'N Enterprise',
    'og:email': 'n.enterprise879@gmail.com',
    'og:phone_number': '+91 9156213334',
    'og:region': 'Maharashtra',
    'og:postal-code': '401202',
    'og:country-name': 'India',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* COMPREHENSIVE SCHEMA MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "N Enterprise",
              "image": "https://nenterprises.in/images/og-image.jpg",
              "@id": "https://nenterprises.in",
              "url": "https://nenterprises.in",
              "telephone": "+91 9156213334",
              "priceRange": "₹₹",
              "description": "Expert Loan Assistance, Property & Construction Solutions Across Mumbai. From Andheri to Palghar, we help you secure loans, find properties, and complete construction projects.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No. 06, Jitesh Apartment, Vishal Nagar, Vartak Road",
                "addressLocality": "Vasai West",
                "addressRegion": "Palghar",
                "postalCode": "401202",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.3836,
                "longitude": 72.6624
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "19:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "121",
                "bestRating": "5",
                "worstRating": "1"
              },
              "areaServed": [
                {"@type": "City", "name": "Mumbai"},
                {"@type": "City", "name": "Vasai"},
                {"@type": "City", "name": "Virar"},
                {"@type": "City", "name": "Boisar"},
                {"@type": "City", "name": "Palghar"},
                {"@type": "City", "name": "Borivali"}
              ],
              "foundingDate": "2008",
              "numberOfEmployees": "15+",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9156213334",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi", "Marathi"]
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Loan Services",
                    "itemListElement": [
                      {"@type": "Service", "name": "Home Loan"},
                      {"@type": "Service", "name": "Business Loan"},
                      {"@type": "Service", "name": "Project Loan"},
                      {"@type": "Service", "name": "Mortgage Loan"},
                      {"@type": "Service", "name": "Loan Against Property"},
                      {"@type": "Service", "name": "Personal Loan"},
                      {"@type": "Service", "name": "Vehicle Loan"}
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Property Services",
                    "itemListElement": [
                      {"@type": "Service", "name": "Buy Property"},
                      {"@type": "Service", "name": "Sell Property"},
                      {"@type": "Service", "name": "Rent Property"}
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Construction Services",
                    "itemListElement": [
                      {"@type": "Service", "name": "Redevelopment Projects"},
                      {"@type": "Service", "name": "Stalled Project Completion"},
                      {"@type": "Service", "name": "New Construction"}
                    ]
                  }
                ]
              }
            })
          }}
        />

        {/* WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "N Enterprise",
              "url": "https://nenterprises.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://nenterprises.in/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* BREADCRUMB SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://nenterprises.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Loans",
                  "item": "https://nenterprises.in/loan"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Property",
                  "item": "https://nenterprises.in/property"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Construction",
                  "item": "https://nenterprises.in/construction"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Contact",
                  "item": "https://nenterprises.in/contact"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Tools",
                  "item": "https://nenterprises.in/tools"
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F6F3E8] text-primary-dark">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}