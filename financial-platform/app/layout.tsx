import type { Metadata } from 'next'
import { Inter, Crimson_Pro } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
  title: '6S Capital - Advanced Investment Analysis & Market Insights',
  description: 'Professional investment analysis, real-time market data, stock screening tools, and expert financial insights for advanced investors.',
  keywords: 'investment analysis, stock market, trading, financial analysis, stock screener, market trends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${crimsonPro.variable} ${inter.className}`} suppressHydrationWarning>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
