import './css/style.css'

import { Inter, Playfair_Display } from 'next/font/google'

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
  title: 'Inros Lackner Cambodia (ILKH)',
  description: 'ILKH provides local and international engineering know-how and local expertise for the built environment in Cambodia. Structural engineering, geotechnical engineering, topographic surveys, and project management services.',
  keywords: 'civil engineering, consultancy, Cambodia, structural engineering, geotechnical engineering, environmental engineering, infrastructure planning, infrastructure design, surveying, project management, construction supervision, health safety environment, geophysical surveys, GIS, software development',
  openGraph: {
    title: 'Inros Lackner (Cambodia) Co.,Ltd',
    description: 'International engineering know-how and local expertise for Cambodia’s built environment.',
    url: 'https://inros-lackner.com.kh',
    siteName: 'Inros Lackner Cambodia',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1120,
        height: 630,
        alt: 'Inros Lackner Cambodia ',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <link rel="canonical" href="https://inros-lackner.com.kh/" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
