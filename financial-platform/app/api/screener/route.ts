import { NextResponse } from 'next/server'

// Top stocks to screen - you can expand this list
const DEFAULT_STOCKS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'TSLA', 'META', 'JPM'
]

// Sample data fallback
const SAMPLE_STOCKS = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 185.50, change: 2.30, changePercent: '1.25', marketCap: '2850000000000', peRatio: '29.5', dividendYield: '0.52' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 375.20, change: -1.50, changePercent: '-0.40', marketCap: '2780000000000', peRatio: '35.2', dividendYield: '0.78' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 140.30, change: 3.20, changePercent: '2.33', marketCap: '1750000000000', peRatio: '25.8', dividendYield: '0.00' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 152.80, change: 1.80, changePercent: '1.19', marketCap: '1580000000000', peRatio: '78.5', dividendYield: '0.00' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 495.60, change: 8.50, changePercent: '1.74', marketCap: '1220000000000', peRatio: '68.2', dividendYield: '0.04' },
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 245.70, change: -3.20, changePercent: '-1.29', marketCap: '780000000000', peRatio: '65.3', dividendYield: '0.00' },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 385.40, change: 5.60, changePercent: '1.47', marketCap: '980000000000', peRatio: '28.9', dividendYield: '0.45' },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 158.90, change: 0.80, changePercent: '0.51', marketCap: '452000000000', peRatio: '11.2', dividendYield: '2.45' },
]

export async function GET() {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY

  if (!apiKey) {
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'This is sample data. Add ALPHA_VANTAGE_API_KEY to .env.local for live data.',
    })
  }

  try {
    // Use the internal stock-data API to fetch real data
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const symbolsParam = DEFAULT_STOCKS.join(',')

    const response = await fetch(`${baseUrl}/api/stock-data?symbols=${symbolsParam}`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('Failed to fetch from stock-data API')
    }

    const data = await response.json()

    if (data.stocks && data.stocks.length > 0) {
      return NextResponse.json({
        stocks: data.stocks,
        note: 'Live data from Alpha Vantage API',
      })
    }

    // Fallback to sample data if API returns empty
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'API returned no data. Showing sample data.',
    })
  } catch (error) {
    console.error('Error fetching screener data:', error)

    // Return sample data on error
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'Error fetching live data. Showing sample data.',
    })
  }
}
