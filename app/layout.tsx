// import './globals.css'
// import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
// import { Metadata, Viewport } from 'next'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'

// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ['latin'],
//   variable: '--font-plus-jakarta',
//   display: 'swap',
// })

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair',
//   display: 'swap',
// })

// export const viewport: Viewport = {
//   themeColor: '#2F4F3E',
//   width: 'device-width',
//   initialScale: 1,
// }

// export const metadata: Metadata = {
//   title: 'N Enterprise - Loan, Property & Construction Experts',
//   description: 'PAN India Loan Assistance | Property Dealings Mumbai to Palghar | Construction Redevelopment',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
//       <body className="font-sans antialiased bg-[#F6F3E8] text-primary-dark">
//         {children}
//         <Analytics />
//         <SpeedInsights />
//       </body>
//     </html>
//   )
// }

// app/layout.tsx
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
  metadataBase: new URL('https://www.nenterprises.in'),
  title: {
    default: 'N Enterprise - Expert Loan, Property & Construction Solutions in Mumbai',
    template: '%s | N Enterprise'
  },
  description: 'Expert loan assistance, property dealing, and construction redevelopment services across Mumbai, Vasai, Virar, Boisar & Palghar. PAN India loan support. Get free consultation.',
  keywords: [
    'home loan Mumbai',
    'property dealers Vasai',
    'construction company Palghar',
    'loan against property',
    'society redevelopment',
    'stalled project completion',
    'business loan',
    'real estate Mumbai',
    'N Enterprise',
    'loan assistance India'
  ],
  authors: [{ name: 'N Enterprise' }],
  creator: 'N Enterprise',
  publisher: 'N Enterprise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'N Enterprise - Loan, Property & Construction Experts',
    description: 'Expert loan assistance, property dealing, and construction redevelopment services across Mumbai, Vasai, Virar, Boisar & Palghar.',
    url: 'https://www.nenterprises.in',
    siteName: 'N Enterprise',
    images: [
      {
        url: 'https://www.nenterprises.in/images/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'N Enterprise - Your Trusted Partner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N Enterprise - Loan, Property & Construction Experts',
    description: 'Expert loan assistance, property dealing, and construction redevelopment services across Mumbai.',
    images: ['https://www.nenterprises.in/images/twitter-image.jpg'], 
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
    google: 'your-google-verification-code', // Add your Google Search Console code
    // yandex: 'your-yandex-code',
    // bing: 'your-bing-code',
  },
  alternates: {
    canonical: 'https://www.nenterprises.in',
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <head>
        {/* Add structured data (JSON-LD) here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "N Enterprise",
              "image": "https://www.nenterprises.in/images/og-image.jpg",
              "@id": "https://www.nenterprises.in",
              "url": "https://www.nenterprises.in",
              "telephone": "+91 9156213334",
              "priceRange": "₹₹",
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
              "sameAs": [
                "https://www.facebook.com/nenterprises",
                "https://www.instagram.com/nenterprises"
              ],
              "description": "Expert loan assistance, property dealing, and construction redevelopment services across Mumbai, Vasai, Virar, Boisar & Palghar.",
              "areaServed": [
                {
                  "@type": "City",
                  "name": ["Mumbai", "Vasai", "Virar", "Boisar", "Palghar", "Nalasopara"]
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Home Loan Assistance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Dealing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Construction & Redevelopment"
                    }
                  }
                ]
              }
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