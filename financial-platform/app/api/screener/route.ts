import { NextResponse } from 'next/server'

// Force dynamic rendering - prevents static generation at build time
export const dynamic = 'force-dynamic'

// 25 top blue-chip stocks across major sectors
const DEFAULT_STOCKS = [
  // Technology (7 stocks)
  'AAPL', 'MSFT', 'GOOGL', 'NVDA', 'META', 'AMD', 'CRM',

  // Finance (6 stocks)
  'JPM', 'BAC', 'GS', 'WFC', 'V', 'MA',

  // Healthcare (5 stocks)
  'JNJ', 'UNH', 'ABBV', 'MRK', 'TMO',

  // Consumer (4 stocks)
  'WMT', 'COST', 'HD', 'MCD',

  // Energy (2 stocks)
  'XOM', 'CVX',

  // Industrial (1 stock)
  'CAT',
]

// Sample data fallback - 25 stocks, Updated November 10, 2025
// Only includes LIVE data that Finnhub /quote endpoint provides
const SAMPLE_STOCKS = [
  // Technology (7 stocks)
  { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 268.47, change: -1.30, changePercent: '-0.48' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', price: 496.82, change: -0.28, changePercent: '-0.06' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 279.81, change: -5.53, changePercent: '-1.94' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', price: 188.15, change: 0.07, changePercent: '0.04' },
  { symbol: 'META', name: 'Meta Platforms Inc.', sector: 'Technology', price: 621.71, change: 2.77, changePercent: '0.45' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', sector: 'Technology', price: 142.80, change: 3.40, changePercent: '2.44' },
  { symbol: 'CRM', name: 'Salesforce Inc.', sector: 'Technology', price: 328.90, change: 4.20, changePercent: '1.29' },

  // Finance (6 stocks)
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Finance', price: 314.21, change: 2.15, changePercent: '0.69' },
  { symbol: 'BAC', name: 'Bank of America Corp.', sector: 'Finance', price: 53.65, change: 0.55, changePercent: '1.04' },
  { symbol: 'GS', name: 'Goldman Sachs Group', sector: 'Finance', price: 564.89, change: 8.45, changePercent: '1.52' },
  { symbol: 'WFC', name: 'Wells Fargo & Co.', sector: 'Finance', price: 70.75, change: 0.85, changePercent: '1.22' },
  { symbol: 'V', name: 'Visa Inc.', sector: 'Finance', price: 336.50, change: 2.25, changePercent: '0.67' },
  { symbol: 'MA', name: 'Mastercard Inc.', sector: 'Finance', price: 551.97, change: 6.80, changePercent: '1.25' },

  // Healthcare (5 stocks)
  { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 186.74, change: 1.85, changePercent: '1.00' },
  { symbol: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', price: 321.56, change: -8.45, changePercent: '-2.56' },
  { symbol: 'ABBV', name: 'AbbVie Inc.', sector: 'Healthcare', price: 219.16, change: 3.20, changePercent: '1.48' },
  { symbol: 'MRK', name: 'Merck & Co.', sector: 'Healthcare', price: 86.28, change: -1.15, changePercent: '-1.32' },
  { symbol: 'TMO', name: 'Thermo Fisher Scientific', sector: 'Healthcare', price: 572.76, change: 5.85, changePercent: '1.03' },

  // Consumer (4 stocks)
  { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Consumer', price: 104.25, change: 1.45, changePercent: '1.41' },
  { symbol: 'COST', name: 'Costco Wholesale', sector: 'Consumer', price: 1024.50, change: 12.35, changePercent: '1.22' },
  { symbol: 'HD', name: 'Home Depot Inc.', sector: 'Consumer', price: 435.80, change: 4.60, changePercent: '1.07' },
  { symbol: 'MCD', name: 'McDonald\'s Corp.', sector: 'Consumer', price: 313.25, change: 2.90, changePercent: '0.93' },

  // Energy (2 stocks)
  { symbol: 'XOM', name: 'Exxon Mobil Corp.', sector: 'Energy', price: 118.75, change: 2.15, changePercent: '1.85' },
  { symbol: 'CVX', name: 'Chevron Corporation', sector: 'Energy', price: 162.40, change: 1.95, changePercent: '1.22' },

  // Industrial (1 stock)
  { symbol: 'CAT', name: 'Caterpillar Inc.', sector: 'Industrial', price: 416.50, change: 5.85, changePercent: '1.42' },
]

// CRITICAL: Next.js Route Segment Config for CDN-level caching
// This caches the response for ALL users, preventing API spam
export const revalidate = 300; // 5 minutes cache

export async function GET() {
  const apiKey = process.env.FINNHUB_API_KEY

  if (!apiKey) {
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'Sample data shown. Configure FINNHUB_API_KEY in .env.local for live data.',
    })
  }

  console.log(`🔄 Screener API called at ${new Date().toISOString()}`);

  try {
    // Use the internal stock-data API to fetch real data
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const symbolsParam = DEFAULT_STOCKS.join(',')

    const response = await fetch(`${baseUrl}/api/stock-data?symbols=${symbolsParam}`, {
      // Use Next.js fetch cache
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch from stock-data API')
    }

    const data = await response.json()

    if (data.stocks && data.stocks.length > 0) {
      return NextResponse.json(
        {
          stocks: data.stocks,
          note: 'Live data from Finnhub API (cached for 5 minutes, shared across all users)',
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
          },
        }
      )
    }

    // Fallback to sample data if API returns empty
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'Using sample data. Real-time data available during market hours (9:30 AM - 4:00 PM ET)',
    })
  } catch (error) {
    console.error('Error fetching screener data:', error)

    // Return sample data on error
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'Unable to fetch live data. Showing sample data.',
    })
  }
}
