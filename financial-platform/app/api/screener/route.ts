import { NextResponse } from 'next/server'

// 25 top blue-chip stocks across major sectors
const DEFAULT_STOCKS = [
  // Technology (7 stocks)
  'AAPL', 'MSFT', 'GOOGL', 'NVDA', 'META', 'AMD', 'CRM',

  // Finance (6 stocks)
  'JPM', 'BAC', 'GS', 'WFC', 'V', 'MA',

  // Healthcare (5 stocks)
  'JNJ', 'UNH', 'ABBV', 'MRK', 'TMO',

  // Consumer (4 stocks)
  'WMT', 'COST', 'HD', 'MCD',

  // Energy (2 stocks)
  'XOM', 'CVX',

  // Industrial (1 stock)
  'CAT',
]

// Sample data fallback - 25 stocks, Updated November 9, 2025
const SAMPLE_STOCKS = [
  // Technology (7 stocks)
  { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 268.47, change: -1.30, changePercent: '-0.48', marketCap: '4150000000000', peRatio: '33.2', dividendYield: '0.45', volume: '48227365' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', price: 496.82, change: -0.28, changePercent: '-0.06', marketCap: '3690000000000', peRatio: '36.8', dividendYield: '0.72', volume: '22450000' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 279.81, change: -5.53, changePercent: '-1.94', marketCap: '3450000000000', peRatio: '24.5', dividendYield: '0.00', volume: '25680000' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', price: 188.15, change: 0.07, changePercent: '0.04', marketCap: '4610000000000', peRatio: '55.3', dividendYield: '0.03', volume: '264942255' },
  { symbol: 'META', name: 'Meta Platforms Inc.', sector: 'Technology', price: 621.71, change: 2.77, changePercent: '0.45', marketCap: '1580000000000', peRatio: '27.4', dividendYield: '0.00', volume: '15670000' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', sector: 'Technology', price: 142.80, change: 3.40, changePercent: '2.44', marketCap: '230000000000', peRatio: '42.1', dividendYield: '0.00', volume: '65320000' },
  { symbol: 'CRM', name: 'Salesforce Inc.', sector: 'Technology', price: 328.90, change: 4.20, changePercent: '1.29', marketCap: '315000000000', peRatio: '56.4', dividendYield: '0.00', volume: '7890000' },

  // Finance (6 stocks)
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Finance', price: 314.21, change: 2.15, changePercent: '0.69', marketCap: '898000000000', peRatio: '13.5', dividendYield: '2.10', volume: '12340000' },
  { symbol: 'BAC', name: 'Bank of America Corp.', sector: 'Finance', price: 53.65, change: 0.55, changePercent: '1.04', marketCap: '408000000000', peRatio: '12.8', dividendYield: '2.45', volume: '45670000' },
  { symbol: 'GS', name: 'Goldman Sachs Group', sector: 'Finance', price: 564.89, change: 8.45, changePercent: '1.52', marketCap: '189000000000', peRatio: '15.2', dividendYield: '2.05', volume: '2340000' },
  { symbol: 'WFC', name: 'Wells Fargo & Co.', sector: 'Finance', price: 70.75, change: 0.85, changePercent: '1.22', marketCap: '241000000000', peRatio: '11.7', dividendYield: '2.40', volume: '18900000' },
  { symbol: 'V', name: 'Visa Inc.', sector: 'Finance', price: 336.50, change: 2.25, changePercent: '0.67', marketCap: '680000000000', peRatio: '32.5', dividendYield: '0.70', volume: '6780000' },
  { symbol: 'MA', name: 'Mastercard Inc.', sector: 'Finance', price: 551.97, change: 6.80, changePercent: '1.25', marketCap: '515000000000', peRatio: '38.2', dividendYield: '0.55', volume: '3240000' },

  // Healthcare (5 stocks)
  { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 186.74, change: 1.85, changePercent: '1.00', marketCap: '452000000000', peRatio: '24.2', dividendYield: '2.95', volume: '7890000' },
  { symbol: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', price: 321.56, change: -8.45, changePercent: '-2.56', marketCap: '297000000000', peRatio: '21.5', dividendYield: '1.65', volume: '3120000' },
  { symbol: 'ABBV', name: 'AbbVie Inc.', sector: 'Healthcare', price: 219.16, change: 3.20, changePercent: '1.48', marketCap: '387000000000', peRatio: '45.8', dividendYield: '3.15', volume: '8760000' },
  { symbol: 'MRK', name: 'Merck & Co.', sector: 'Healthcare', price: 86.28, change: -1.15, changePercent: '-1.32', marketCap: '218000000000', peRatio: '14.5', dividendYield: '3.25', volume: '10450000' },
  { symbol: 'TMO', name: 'Thermo Fisher Scientific', sector: 'Healthcare', price: 572.76, change: 5.85, changePercent: '1.03', marketCap: '220000000000', peRatio: '34.2', dividendYield: '0.18', volume: '1560000' },

  // Consumer (4 stocks)
  { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Consumer', price: 104.25, change: 1.45, changePercent: '1.41', marketCap: '675000000000', peRatio: '42.5', dividendYield: '1.05', volume: '8900000' },
  { symbol: 'COST', name: 'Costco Wholesale', sector: 'Consumer', price: 1024.50, change: 12.35, changePercent: '1.22', marketCap: '455000000000', peRatio: '59.2', dividendYield: '0.45', volume: '2340000' },
  { symbol: 'HD', name: 'Home Depot Inc.', sector: 'Consumer', price: 435.80, change: 4.60, changePercent: '1.07', marketCap: '430000000000', peRatio: '27.8', dividendYield: '2.10', volume: '4560000' },
  { symbol: 'MCD', name: 'McDonald\'s Corp.', sector: 'Consumer', price: 313.25, change: 2.90, changePercent: '0.93', marketCap: '225000000000', peRatio: '27.5', dividendYield: '1.95', volume: '3780000' },

  // Energy (2 stocks)
  { symbol: 'XOM', name: 'Exxon Mobil Corp.', sector: 'Energy', price: 118.75, change: 2.15, changePercent: '1.85', marketCap: '492000000000', peRatio: '13.2', dividendYield: '3.10', volume: '18900000' },
  { symbol: 'CVX', name: 'Chevron Corporation', sector: 'Energy', price: 162.40, change: 1.95, changePercent: '1.22', marketCap: '298000000000', peRatio: '12.5', dividendYield: '3.55', volume: '9870000' },

  // Industrial (1 stock)
  { symbol: 'CAT', name: 'Caterpillar Inc.', sector: 'Industrial', price: 416.50, change: 5.85, changePercent: '1.42', marketCap: '212000000000', peRatio: '21.5', dividendYield: '1.55', volume: '3450000' },
]

export async function GET() {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY

  if (!apiKey) {
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'Sample data shown. Configure ALPHA_VANTAGE_API_KEY in .env.local for live data.',
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
        note: 'Live & cached data (1 stock refreshed hourly during market hours)',
      })
    }

    // Fallback to sample data if API returns empty
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'Using sample data. Real-time data available during market hours (9:30 AM - 4:00 PM ET)',
    })
  } catch (error) {
    console.error('Error fetching screener data:', error)

    // Return sample data on error
    return NextResponse.json({
      stocks: SAMPLE_STOCKS,
      note: 'Unable to fetch live data. Showing sample data.',
    })
  }
}
