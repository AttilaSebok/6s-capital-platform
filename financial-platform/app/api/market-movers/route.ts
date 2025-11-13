// app/api/market-movers/route.ts

import { NextResponse } from 'next/server';
import { fetchMarketMovers } from '@/lib/api/marketMovers';

// Cache the response for 60 seconds (optimized for API limits)
export const revalidate = 60;

export async function GET() {
  try {
    const data = await fetchMarketMovers();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Market Movers API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch market movers data',
        details: error instanceof Error ? error.message : 'Unknown error',
        gainers: [],
        losers: [],
        mostActive: [],
        timestamp: Date.now()
      },
      { status: 500 }
    );
  }
}
