import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ symbol: string }> }
) {
  const { symbol } = await params

  try {
    // Option 1: Alpha Vantage API (Uncomment and add API key)
    /*
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
    )
    const data = await response.json()

    if (data['Global Quote']) {
      const quote = data['Global Quote']
      return NextResponse.json({
        symbol: quote['01. symbol'],
        price: parseFloat(quote['05. price']),
        change: parseFloat(quote['09. change']),
        changePercent: parseFloat(quote['10. change percent'].replace('%', '')),
        volume: parseInt(quote['06. volume']),
        lastUpdated: quote['07. latest trading day'],
      })
    }
    */

    // Option 2: Yahoo Finance (using yfinance through a proxy or server-side Python)
    // For now, return sample data
    return NextResponse.json({
      symbol: symbol.toUpperCase(),
      price: 150.25 + Math.random() * 50,
      change: (Math.random() - 0.5) * 10,
      changePercent: (Math.random() - 0.5) * 5,
      volume: Math.floor(Math.random() * 10000000),
      lastUpdated: new Date().toISOString(),
      note: 'This is sample data. Connect to a real API for live data.',
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stock data' },
      { status: 500 }
    )
  }
}

/*
 * API Integration Instructions:
 *
 * 1. Alpha Vantage (Free - 500 calls/day):
 *    - Sign up at: https://www.alphavantage.co/support/#api-key
 *    - Add to .env.local: ALPHA_VANTAGE_API_KEY=your_key_here
 *    - Uncomment the Alpha Vantage code above
 *
 * 2. Finnhub (Free - 60 calls/min):
 *    - Sign up at: https://finnhub.io/register
 *    - Add to .env.local: FINNHUB_API_KEY=your_key_here
 *    - API endpoint: https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}
 *
 * 3. Yahoo Finance (via yfinance library):
 *    - Create a Python microservice or use a Next.js API route
 *    - npm install yahoo-finance2
 *    - Or use a third-party proxy API
 *
 * 4. IEX Cloud (Free tier available):
 *    - Sign up at: https://iexcloud.io/
 *    - API endpoint: https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}
 */
