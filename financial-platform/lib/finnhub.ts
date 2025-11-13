// lib/finnhub.ts

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
const BASE_URL = 'https://finnhub.io/api/v1';

export interface TickerData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: number;
}

/**
 * Fetch stock quote data from Finnhub
 * @param symbols - Array of stock symbols (e.g., ['AAPL', 'MSFT'])
 * @returns Array of ticker data
 */
export async function getTickerData(symbols: string[]): Promise<TickerData[]> {
  try {
    const promises = symbols.map(async (symbol) => {
      const response = await fetch(
        `${BASE_URL}/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`,
        { next: { revalidate: 60 } } // Cache for 60 seconds (optimized for API limits)
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch ${symbol}`);
      }

      const data = await response.json();

      return {
        symbol,
        name: symbol,
        price: data.c || 0,  // Current price
        change: data.d || 0, // Change
        changePercent: data.dp || 0, // Change percent
        timestamp: data.t || Date.now()
      };
    });

    return await Promise.all(promises);
  } catch (error) {
    console.error('Error fetching ticker data:', error);
    throw error;
  }
}

/**
 * Fetch cryptocurrency price data
 * @param symbol - Crypto symbol (e.g., 'BTC', 'ETH')
 * @returns Ticker data for crypto
 */
export async function getCryptoPrice(symbol: string): Promise<TickerData> {
  try {
    const response = await fetch(
      `${BASE_URL}/quote?symbol=BINANCE:${symbol}USDT&token=${FINNHUB_API_KEY}`,
      { next: { revalidate: 60 } } // Cache for 60 seconds (optimized for API limits)
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch crypto ${symbol}`);
    }

    const data = await response.json();

    return {
      symbol,
      name: symbol,
      price: data.c || 0,
      change: data.d || 0,
      changePercent: data.dp || 0,
      timestamp: data.t || Date.now()
    };
  } catch (error) {
    console.error(`Error fetching crypto ${symbol}:`, error);
    throw error;
  }
}
