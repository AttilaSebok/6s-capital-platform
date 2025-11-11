import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market News - Latest Financial News & Updates | money365.market',
  description: 'Stay informed with real-time market news, company updates, and financial analysis. Get the latest breaking news from trusted sources worldwide.',
  keywords: 'market news, financial news, stock market news, business news, company news, real-time news',
}

// Force dynamic rendering to fetch fresh news
export const dynamic = 'force-dynamic'

export default function MarketNewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
