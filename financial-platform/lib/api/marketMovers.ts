// lib/api/marketMovers.ts

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';
const API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY || process.env.FINNHUB_API_KEY;

// S&P 100 most liquid stocks to track (limited to 50 for API rate limiting)
const POPULAR_STOCKS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA', 'BRK.B',
  'UNH', 'XOM', 'JNJ', 'JPM', 'V', 'PG', 'MA', 'HD', 'CVX', 'MRK',
  'ABBV', 'KO', 'AVGO', 'PEP', 'COST', 'ADBE', 'WMT', 'MCD', 'CSCO',
  'CRM', 'ACN', 'TMO', 'ABT', 'NFLX', 'DHR', 'LIN', 'NKE', 'VZ',
  'DIS', 'ORCL', 'CMCSA', 'INTC', 'AMD', 'QCOM', 'TXN', 'AMGN', 'HON',
  'UPS', 'NEE', 'RTX', 'SPGI'
];

export interface StockQuote {
  symbol: string;
  name?: string;
  price: number;       // Current price (c)
  change: number;      // Change (d)
  changePercent: number; // Percent change (dp)
  volume?: number;     // Volume (if available)
  high?: number;       // High price (h)
  low?: number;        // Low price (l)
  previousClose?: number; // Previous close (pc)
}

export interface MarketMoversData {
  gainers: StockQuote[];
  losers: StockQuote[];
  mostActive: StockQuote[];
  timestamp: number;
}

/**
 * Fetch stock quote from Finnhub
 */
async function fetchStockQuote(symbol: string): Promise<StockQuote | null> {
  try {
    const response = await fetch(
      `${FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`,
      { next: { revalidate: 60 } } // Cache for 60 seconds
    );

    if (!response.ok) {
      console.error(`Failed to fetch quote for ${symbol}`);
      return null;
    }

    const data = await response.json();

    // Validate data
    if (data.dp === undefined || data.c === undefined) {
      return null;
    }

    return {
      symbol,
      price: data.c || 0,
      change: data.d || 0,
      changePercent: data.dp || 0,
      high: data.h,
      low: data.l,
      previousClose: data.pc,
    };
  } catch (error) {
    console.error(`Error fetching quote for ${symbol}:`, error);
    return null;
  }
}

/**
 * Fetch market movers data (top gainers, losers, most active)
 */
export async function fetchMarketMovers(): Promise<MarketMoversData> {
  try {
    // Fetch quotes for all tracked stocks in parallel
    const quotePromises = POPULAR_STOCKS.map(symbol => fetchStockQuote(symbol));
    const quotes = await Promise.all(quotePromises);

    // Filter out null/invalid responses
    const validQuotes = quotes.filter((q): q is StockQuote => q !== null);

    if (validQuotes.length === 0) {
      throw new Error('No valid quotes received');
    }

    // Sort for top gainers (highest positive % change)
    const gainers = [...validQuotes]
      .filter(q => q.changePercent > 0)
      .sort((a, b) => b.changePercent - a.changePercent)
      .slice(0, 5);

    // Sort for top losers (highest negative % change)
    const losers = [...validQuotes]
      .filter(q => q.changePercent < 0)
      .sort((a, b) => a.changePercent - b.changePercent)
      .slice(0, 5);

    // For most active, use absolute change as proxy for activity
    // (Volume data requires additional API calls)
    const mostActive = [...validQuotes]
      .sort((a, b) => Math.abs(b.changePercent) - Math.abs(a.changePercent))
      .slice(0, 5);

    return {
      gainers,
      losers,
      mostActive,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error('Error fetching market movers:', error);

    // Return mock data as fallback
    return {
      gainers: [],
      losers: [],
      mostActive: [],
      timestamp: Date.now(),
    };
  }
}

/**
 * Get company name from symbol (basic mapping for major stocks)
 */
export function getCompanyName(symbol: string): string {
  const nameMap: Record<string, string> = {
    'AAPL': 'Apple Inc.',
    'MSFT': 'Microsoft Corp.',
    'GOOGL': 'Alphabet Inc.',
    'AMZN': 'Amazon.com Inc.',
    'NVDA': 'NVIDIA Corp.',
    'META': 'Meta Platforms Inc.',
    'TSLA': 'Tesla Inc.',
    'BRK.B': 'Berkshire Hathaway',
    'UNH': 'UnitedHealth Group',
    'XOM': 'Exxon Mobil Corp.',
    'JNJ': 'Johnson & Johnson',
    'JPM': 'JPMorgan Chase',
    'V': 'Visa Inc.',
    'PG': 'Procter & Gamble',
    'MA': 'Mastercard Inc.',
    'HD': 'Home Depot Inc.',
    'CVX': 'Chevron Corp.',
    'MRK': 'Merck & Co.',
    'ABBV': 'AbbVie Inc.',
    'KO': 'Coca-Cola Co.',
    'AVGO': 'Broadcom Inc.',
    'PEP': 'PepsiCo Inc.',
    'COST': 'Costco Wholesale',
    'ADBE': 'Adobe Inc.',
    'WMT': 'Walmart Inc.',
    'MCD': 'McDonald\'s Corp.',
    'CSCO': 'Cisco Systems',
    'CRM': 'Salesforce Inc.',
    'ACN': 'Accenture plc',
    'TMO': 'Thermo Fisher Scientific',
    'ABT': 'Abbott Laboratories',
    'NFLX': 'Netflix Inc.',
    'DHR': 'Danaher Corp.',
    'LIN': 'Linde plc',
    'NKE': 'Nike Inc.',
    'VZ': 'Verizon Communications',
    'DIS': 'Walt Disney Co.',
    'ORCL': 'Oracle Corp.',
    'CMCSA': 'Comcast Corp.',
    'INTC': 'Intel Corp.',
    'AMD': 'Advanced Micro Devices',
    'QCOM': 'Qualcomm Inc.',
    'TXN': 'Texas Instruments',
    'AMGN': 'Amgen Inc.',
    'HON': 'Honeywell International',
    'UPS': 'United Parcel Service',
    'NEE': 'NextEra Energy',
    'RTX': 'RTX Corporation',
    'SPGI': 'S&P Global Inc.',
  };

  return nameMap[symbol] || symbol;
}
