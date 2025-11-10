import { NextRequest, NextResponse } from 'next/server';

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
const BASE_URL = 'https://finnhub.io/api/v1';

// Static metadata for 25 top stocks
const STOCK_METADATA: Record<string, { name: string; sector: string }> = {
  // Technology (7 stocks)
  'AAPL': { name: 'Apple Inc.', sector: 'Technology' },
  'MSFT': { name: 'Microsoft Corporation', sector: 'Technology' },
  'GOOGL': { name: 'Alphabet Inc.', sector: 'Technology' },
  'NVDA': { name: 'NVIDIA Corporation', sector: 'Technology' },
  'META': { name: 'Meta Platforms Inc.', sector: 'Technology' },
  'AMD': { name: 'Advanced Micro Devices', sector: 'Technology' },
  'CRM': { name: 'Salesforce Inc.', sector: 'Technology' },

  // Finance (6 stocks)
  'JPM': { name: 'JPMorgan Chase & Co.', sector: 'Finance' },
  'BAC': { name: 'Bank of America Corp.', sector: 'Finance' },
  'GS': { name: 'Goldman Sachs Group', sector: 'Finance' },
  'WFC': { name: 'Wells Fargo & Co.', sector: 'Finance' },
  'V': { name: 'Visa Inc.', sector: 'Finance' },
  'MA': { name: 'Mastercard Inc.', sector: 'Finance' },

  // Healthcare (5 stocks)
  'JNJ': { name: 'Johnson & Johnson', sector: 'Healthcare' },
  'UNH': { name: 'UnitedHealth Group', sector: 'Healthcare' },
  'ABBV': { name: 'AbbVie Inc.', sector: 'Healthcare' },
  'MRK': { name: 'Merck & Co.', sector: 'Healthcare' },
  'TMO': { name: 'Thermo Fisher Scientific', sector: 'Healthcare' },

  // Consumer (4 stocks)
  'WMT': { name: 'Walmart Inc.', sector: 'Consumer' },
  'COST': { name: 'Costco Wholesale', sector: 'Consumer' },
  'HD': { name: 'Home Depot Inc.', sector: 'Consumer' },
  'MCD': { name: 'McDonald\'s Corp.', sector: 'Consumer' },

  // Energy (2 stocks)
  'XOM': { name: 'Exxon Mobil Corp.', sector: 'Energy' },
  'CVX': { name: 'Chevron Corporation', sector: 'Energy' },

  // Industrial (1 stock)
  'CAT': { name: 'Caterpillar Inc.', sector: 'Industrial' },
};

// Check if US stock market is open (9:30 AM - 4:00 PM ET, Monday-Friday)
function isMarketOpen(): boolean {
  const now = new Date();
  const et = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));

  const hour = et.getHours();
  const minute = et.getMinutes();
  const day = et.getDay();

  // Weekend check
  if (day === 0 || day === 6) {
    return false;
  }

  // Before 9:30 AM
  if (hour < 9 || (hour === 9 && minute < 30)) {
    return false;
  }

  // After 4:00 PM
  if (hour >= 16) {
    return false;
  }

  return true;
}

// CRITICAL: Next.js Route Segment Config for CDN-level caching
// This ensures that even with 1000 concurrent users, only 1 API call is made every 5 minutes!
// The response is cached at Vercel CDN level and shared across ALL users.
export const revalidate = 300; // 5 minutes cache (300 seconds)

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const symbols = searchParams.get('symbols')?.split(',') || [];

  if (symbols.length === 0) {
    return NextResponse.json({ error: 'No symbols provided' }, { status: 400 });
  }

  console.log(`🔄 API Route called at ${new Date().toISOString()} - This should only happen once per 5 minutes thanks to caching!`);

  try {
    const results = await fetchStockDataBatched(symbols);

    return NextResponse.json(
      {
        stocks: results.filter(Boolean),
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
        },
      }
    );
  } catch (error) {
    console.error('Error in stock-data API:', error);
    return NextResponse.json({ error: 'Failed to fetch stock data' }, { status: 500 });
  }
}

// Finnhub API Strategy: 60 calls/minute limit
// 25 stocks = 25 calls for quotes only (live price data)
// This uses only 25/60 calls per minute - well within the limit!
// WITH CACHING: Even 1000 users only trigger this once per 5 minutes!
async function fetchStockDataBatched(symbols: string[]) {
  const results: any[] = [];

  console.log(`📊 Fetching data for ${symbols.length} stocks via Finnhub API...`);
  console.log(`⏰ Time: ${new Date().toISOString()}`);

  // Fetch all stocks with a small delay between calls to be safe
  for (const symbol of symbols) {
    const stockData = await fetchStockData(symbol);
    results.push(stockData);
    
    // 50ms delay = 20 calls/second max = 25 stocks in ~1.25 seconds
    await new Promise(resolve => setTimeout(resolve, 50));
  }

  const successCount = results.filter(Boolean).length;
  console.log(`✓ Finnhub fetch complete: ${successCount}/${symbols.length} stocks updated`);

  return results;
}

async function fetchStockData(symbol: string) {
  // Get static metadata
  const metadata = STOCK_METADATA[symbol.toUpperCase()];
  if (!metadata) {
    console.warn(`No metadata found for ${symbol}`);
    return null;
  }

  try {
    // Fetch quote data from Finnhub
    const quoteUrl = `${BASE_URL}/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;
    const quoteResponse = await fetch(quoteUrl, {
      // Next.js fetch cache for redundancy (in addition to Route Segment cache)
      next: { revalidate: 300 }
    });
    
    if (!quoteResponse.ok) {
      console.error(`❌ Finnhub API error for ${symbol}: ${quoteResponse.status}`);
      return null;
    }

    const quoteData = await quoteResponse.json();

    // Check if we got valid data
    if (quoteData.c === 0 && quoteData.d === 0) {
      console.warn(`⚠️  No quote data available for ${symbol}`);
      return null;
    }

    // Finnhub response structure:
    // c: current price, d: change, dp: percent change

    const stockInfo = {
      symbol: symbol.toUpperCase(),
      name: metadata.name,
      sector: metadata.sector,
      price: quoteData.c || 0,
      change: quoteData.d || 0,
      changePercent: quoteData.dp?.toFixed(2) || '0',
    };

    console.log(`✓ Fetched ${symbol}: $${stockInfo.price.toFixed(2)} (${stockInfo.changePercent}%)`);

    return stockInfo;
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
    return null;
  }
}
