import { NextRequest, NextResponse } from 'next/server';

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

// Static metadata for stocks (name and sector don't change frequently)
const STOCK_METADATA: Record<string, { name: string; sector: string }> = {
  // Technology (9 stocks)
  'AAPL': { name: 'Apple Inc.', sector: 'Technology' },
  'MSFT': { name: 'Microsoft Corporation', sector: 'Technology' },
  'GOOGL': { name: 'Alphabet Inc.', sector: 'Technology' },
  'NVDA': { name: 'NVIDIA Corporation', sector: 'Technology' },
  'META': { name: 'Meta Platforms Inc.', sector: 'Technology' },
  'AMD': { name: 'Advanced Micro Devices', sector: 'Technology' },
  'INTC': { name: 'Intel Corporation', sector: 'Technology' },
  'CRM': { name: 'Salesforce Inc.', sector: 'Technology' },
  'ORCL': { name: 'Oracle Corporation', sector: 'Technology' },

  // Finance (7 stocks)
  'JPM': { name: 'JPMorgan Chase & Co.', sector: 'Finance' },
  'BAC': { name: 'Bank of America Corp.', sector: 'Finance' },
  'GS': { name: 'Goldman Sachs Group', sector: 'Finance' },
  'WFC': { name: 'Wells Fargo & Co.', sector: 'Finance' },
  'MS': { name: 'Morgan Stanley', sector: 'Finance' },
  'V': { name: 'Visa Inc.', sector: 'Finance' },
  'MA': { name: 'Mastercard Inc.', sector: 'Finance' },

  // Healthcare (6 stocks)
  'JNJ': { name: 'Johnson & Johnson', sector: 'Healthcare' },
  'PFE': { name: 'Pfizer Inc.', sector: 'Healthcare' },
  'UNH': { name: 'UnitedHealth Group', sector: 'Healthcare' },
  'ABBV': { name: 'AbbVie Inc.', sector: 'Healthcare' },
  'MRK': { name: 'Merck & Co.', sector: 'Healthcare' },
  'TMO': { name: 'Thermo Fisher Scientific', sector: 'Healthcare' },

  // Consumer (7 stocks)
  'KO': { name: 'Coca-Cola Co.', sector: 'Consumer' },
  'PEP': { name: 'PepsiCo Inc.', sector: 'Consumer' },
  'WMT': { name: 'Walmart Inc.', sector: 'Consumer' },
  'COST': { name: 'Costco Wholesale', sector: 'Consumer' },
  'HD': { name: 'Home Depot Inc.', sector: 'Consumer' },
  'MCD': { name: 'McDonald\'s Corp.', sector: 'Consumer' },
  'NKE': { name: 'Nike Inc.', sector: 'Consumer' },

  // Energy (3 stocks)
  'XOM': { name: 'Exxon Mobil Corp.', sector: 'Energy' },
  'CVX': { name: 'Chevron Corporation', sector: 'Energy' },
  'SLB': { name: 'Schlumberger Ltd.', sector: 'Energy' },

  // Industrial (3 stocks)
  'CAT': { name: 'Caterpillar Inc.', sector: 'Industrial' },
  'BA': { name: 'Boeing Co.', sector: 'Industrial' },
  'GE': { name: 'General Electric', sector: 'Industrial' },
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

  if (!isMarketOpen()) {
    console.log('⏰ Market is closed - using cached data only (no MCP calls)');
    // Return all cached data when market is closed
    for (const symbol of symbols) {
      const stockData = await fetchStockData(symbol);
      results.push(stockData);
    }
    return results;
  }

  // Market is open - fetch only 1 stock to conserve API calls
  // Use rotation based on current hour to ensure all stocks get updated eventually
  const now = new Date();
  const et = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const currentHour = et.getHours();

  // Calculate which stock to refresh based on current hour
  const stockIndex = currentHour % symbols.length;
  const symbolToRefresh = symbols[stockIndex];

  console.log(`📊 Market is open - refreshing ${symbolToRefresh} (stock ${stockIndex + 1}/${symbols.length})`);
  console.log(`⏰ Next refresh cycle in ~1 hour`);

  // Fetch only the selected stock with fresh MCP call
  for (const symbol of symbols) {
    if (symbol === symbolToRefresh) {
      // Force refresh by clearing cache for this symbol
      const cacheKey = `quote_${symbol}`;
      cache.delete(cacheKey);
      const stockData = await fetchStockData(symbol);
      results.push(stockData);
    } else {
      // Use cached data for all other stocks
      const stockData = await fetchStockData(symbol);
      results.push(stockData);
    }
  }

  const successCount = results.filter(Boolean).length;
  console.log(`✓ Loaded ${successCount}/${symbols.length} stocks (1 fresh, ${successCount - 1} cached)`);
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
