import { NextRequest, NextResponse } from 'next/server';

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

// Cache a rate limitek kezelésére
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60000; // 1 perc

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const symbols = searchParams.get('symbols')?.split(',') || [];

  if (symbols.length === 0) {
    return NextResponse.json({ error: 'No symbols provided' }, { status: 400 });
  }

  try {
    const stockData = await Promise.all(
      symbols.map(symbol => fetchStockData(symbol.trim()))
    );

    return NextResponse.json({ stocks: stockData.filter(Boolean) });
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stock data' },
      { status: 500 }
    );
  }
}

async function fetchStockData(symbol: string) {
  // Cache ellenőrzés
  const cacheKey = `quote_${symbol}`;
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    // Global Quote endpoint - valós idejű ár
    const quoteUrl = `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;
    const quoteResponse = await fetch(quoteUrl);
    const quoteData = await quoteResponse.json();

    // Overview endpoint - company details
    const overviewUrl = `${BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;
    const overviewResponse = await fetch(overviewUrl);
    const overviewData = await overviewResponse.json();

    if (quoteData['Global Quote']) {
      const quote = quoteData['Global Quote'];
      const overview = overviewData;

      const stockInfo = {
        symbol: symbol,
        name: overview.Name || symbol,
        price: parseFloat(quote['05. price']) || 0,
        change: parseFloat(quote['09. change']) || 0,
        changePercent: quote['10. change percent']?.replace('%', '') || '0',
        marketCap: overview.MarketCapitalization || 'N/A',
        peRatio: overview.PERatio || 'N/A',
        dividendYield: overview.DividendYield
          ? (parseFloat(overview.DividendYield) * 100).toFixed(2)
          : '0.00',
        volume: quote['06. volume'] || 'N/A',
        high: parseFloat(quote['03. high']) || 0,
        low: parseFloat(quote['04. low']) || 0,
        open: parseFloat(quote['02. open']) || 0,
        previousClose: parseFloat(quote['08. previous close']) || 0,
      };

      // Cache mentés
      cache.set(cacheKey, { data: stockInfo, timestamp: Date.now() });

      return stockInfo;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
    return null;
  }
}
