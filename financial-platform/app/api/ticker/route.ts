// app/api/ticker/route.ts

import { NextResponse } from 'next/server';
import { getTickerData, getCryptoPrice } from '@/lib/finnhub';

// Cache the response for 60 seconds (optimized for API limits)
export const revalidate = 60;

export async function GET() {
  try {
    // Define which symbols to track
    const stockSymbols = [
      'SPY',    // S&P 500 ETF
      'QQQ',    // NASDAQ-100 ETF
      'DIA',    // Dow Jones ETF
      'AAPL',   // Apple
      'MSFT',   // Microsoft
      'GOOGL',  // Alphabet (Google)
      'TSLA',   // Tesla
      'NVDA',   // Nvidia
      'AMZN',   // Amazon
      'META',   // Meta (Facebook)
    ];

    const cryptoSymbols = ['BTC', 'ETH'];

    // Fetch all data in parallel for performance
    const [stocks, ...cryptos] = await Promise.all([
      getTickerData(stockSymbols),
      ...cryptoSymbols.map(crypto => getCryptoPrice(crypto))
    ]);

    // Combine all data
    const allData = [...stocks, ...cryptos];

    return NextResponse.json({
      data: allData,
      timestamp: Date.now()
    });

  } catch (error) {
    console.error('Ticker API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch ticker data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
