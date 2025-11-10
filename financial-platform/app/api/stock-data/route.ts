import { NextRequest, NextResponse } from 'next/server';

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

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

// Cache with market-aware duration
const cache = new Map<string, { data: any; timestamp: number }>();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const symbols = searchParams.get('symbols')?.split(',') || [];

  if (symbols.length === 0) {
    return NextResponse.json({ error: 'No symbols provided' }, { status: 400 });
  }

  try {
    const results = await fetchStockDataBatched(symbols);

    return NextResponse.json({
      stocks: results.filter(Boolean),
    });
  } catch (error) {
    console.error('Error in stock-data API:', error);
    return NextResponse.json({ error: 'Failed to fetch stock data' }, { status: 500 });
  }
}

// Smart API call distribution using MCP Alpha Vantage tools
// Strategy: Fetch 1 stock per hour during market hours to stay within limits
async function fetchStockDataBatched(symbols: string[]) {
  const results: any[] = [];

  const now = new Date();
  const et = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const currentHour = et.getHours();
  const currentMinute = et.getMinutes();

  // Check if it's daily refresh window (9:30-9:35 AM ET)
  const isRefreshWindow = isMarketOpen() && currentHour === 9 && currentMinute >= 30 && currentMinute < 35;

  if (!isRefreshWindow) {
    // Outside refresh window - use cached data only
    const cacheAge = cache.size > 0 ? Math.floor((Date.now() - Array.from(cache.values())[0]?.timestamp) / 1000 / 60 / 60) : 0;
    console.log(`⏰ Using cached data (${cacheAge}h old). Next refresh at 9:30 AM ET.`);

    for (const symbol of symbols) {
      const stockData = await fetchStockData(symbol);
      results.push(stockData);
    }
    return results;
  }

  // It's 9:30-9:35 AM ET - daily refresh of all 25 stocks
  console.log(`📊 Daily market open refresh - fetching all ${symbols.length} stocks...`);

  // Clear all cache to force fresh fetch
  cache.clear();

  // Fetch all stocks (25 API calls total, within free tier limit)
  for (const symbol of symbols) {
    const stockData = await fetchStockData(symbol);
    results.push(stockData);
    // Small delay between calls to avoid overwhelming API
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  const successCount = results.filter(Boolean).length;
  console.log(`✓ Daily refresh complete: ${successCount}/${symbols.length} stocks updated`);
  console.log(`⏰ Next refresh: Tomorrow at 9:30 AM ET`);

  return results;
}

async function fetchStockData(symbol: string) {
  // Cache check
  const cacheKey = `quote_${symbol}`;
  const cached = cache.get(cacheKey);

  const cacheDuration = isMarketOpen() ? 3600000 : 86400000; // 1 hour open, 24 hours closed

  if (cached && Date.now() - cached.timestamp < cacheDuration) {
    console.log(`✓ Using cached data for ${symbol}`);
    return cached.data;
  }

  // Get static metadata
  const metadata = STOCK_METADATA[symbol.toUpperCase()];
  if (!metadata) {
    console.warn(`No metadata found for ${symbol}`);
    return null;
  }

  try {
    // Use Alpha Vantage REST API with GLOBAL_QUOTE
    const quoteUrl = `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;
    const quoteResponse = await fetch(quoteUrl);
    const quoteData = await quoteResponse.json();

    // Check if API rate limit exceeded
    if (quoteData['Information'] && quoteData['Information'].includes('rate limit')) {
      console.warn(`⚠️  Alpha Vantage API rate limit exceeded for ${symbol}`);
      return null;
    }

    if (quoteData['Global Quote'] && Object.keys(quoteData['Global Quote']).length > 0) {
      const quote = quoteData['Global Quote'];

      const stockInfo = {
        symbol: symbol.toUpperCase(),
        name: metadata.name,
        sector: metadata.sector,
        price: parseFloat(quote['05. price']) || 0,
        change: parseFloat(quote['09. change']) || 0,
        changePercent: quote['10. change percent']?.replace('%', '') || '0',
        volume: quote['06. volume'] || 'N/A',
        marketCap: 'N/A', // Will be added manually or via quarterly update
        peRatio: 'N/A',
        dividendYield: '0.00',
        high: parseFloat(quote['03. high']) || 0,
        low: parseFloat(quote['04. low']) || 0,
        open: parseFloat(quote['02. open']) || 0,
        previousClose: parseFloat(quote['08. previous close']) || 0,
      };

      // Save to cache
      cache.set(cacheKey, { data: stockInfo, timestamp: Date.now() });
      console.log(`✓ Fetched ${symbol} via REST API: $${stockInfo.price}`);

      return stockInfo;
    } else {
      console.warn(`No quote data returned for ${symbol}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
    return null;
  }
}
