import './css/style.css'

import { Inter, Playfair_Display } from 'next/font/google'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/json-ld'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})

export const metadata = {
  metadataBase: new URL('https://inros-lackner.com.kh'),
  title: {
    template: '%s | Inros Lackner Cambodia',
    default: 'Inros Lackner Cambodia – Engineering Consultancy in Cambodia',
  },
  description: 'Inros Lackner (Cambodia) Co., Ltd. (ILKH) is a multi-disciplinary engineering consultancy in Cambodia offering structural engineering, geotechnical investigations, topographic surveys, BIM, construction supervision, and infrastructure planning services in Phnom Penh and across Cambodia.',
  keywords: 'engineering consultancy Cambodia, civil engineering Cambodia, structural engineering Cambodia, geotechnical engineering Cambodia, topographic survey Cambodia, construction supervision Cambodia, infrastructure design Cambodia, environmental engineering Cambodia, project management Cambodia, Phnom Penh engineering firm, BIM Cambodia, geophysical investigations Cambodia, GIS mapping Cambodia',
  openGraph: {
    title: 'Inros Lackner Cambodia – Engineering Consultancy',
    description: 'International engineering know-how and local expertise for Cambodia’s built environment.',
    url: 'https://inros-lackner.com.kh',
    siteName: 'Inros Lackner Cambodia',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1120,
        height: 630,
        alt: 'Inros Lackner Cambodia – Engineering Consultancy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inros Lackner Cambodia – Engineering Consultancy',
    description: 'Multi-disciplinary engineering consultancy in Cambodia. Structural, geotechnical, surveying, and infrastructure services.',
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
