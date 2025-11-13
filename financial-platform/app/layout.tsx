import type { Metadata } from 'next'
import { Inter, Crimson_Pro } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieBanner from '@/components/CookieBanner'
import MarketStatusBar from '@/components/LiveTicker/MarketStatusBar'
import LiveTicker from '@/components/LiveTicker/LiveTicker'
import { generateOrganizationSchema } from '@/lib/metadata'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'money365.market - Advanced Investment Analysis & Market Insights',
  description: 'Professional investment analysis, real-time market data, stock screening tools, and expert financial insights for advanced investors. Daily market intelligence at money365.market',
  keywords: 'investment analysis, stock market, trading, financial analysis, stock screener, market trends, money365, daily market insights',
  metadataBase: new URL('https://money365.market'),

  // Open Graph
  openGraph: {
    title: 'money365.market - Advanced Investment Analysis & Market Insights',
    description: 'Professional investment analysis, real-time market data, stock screening tools, and expert financial insights for advanced investors.',
    url: 'https://money365.market',
    siteName: 'money365.market',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'money365.market - Investment Analysis Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'money365.market - Advanced Investment Analysis',
    description: 'Professional investment analysis, real-time market data, and expert financial insights.',
    images: ['/og-image.jpg'],
    creator: '@money365market',
    site: '@money365market',
  },

  // Robots
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
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${crimsonPro.variable} ${inter.className}`} suppressHydrationWarning>
        <GoogleAnalytics />
        <CookieBanner />
        <Header />
        <MarketStatusBar />
        <LiveTicker />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
