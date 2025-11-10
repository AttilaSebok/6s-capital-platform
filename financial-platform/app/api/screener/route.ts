import { NextResponse } from 'next/server'

// 35 stocks across 6 sectors for comprehensive screening
const DEFAULT_STOCKS = [
  // Technology (9 stocks)
  'AAPL', 'MSFT', 'GOOGL', 'NVDA', 'META', 'AMD', 'INTC', 'CRM', 'ORCL',

  // Finance (7 stocks)
  'JPM', 'BAC', 'GS', 'WFC', 'MS', 'V', 'MA',

  // Healthcare (6 stocks)
  'JNJ', 'PFE', 'UNH', 'ABBV', 'MRK', 'TMO',

  // Consumer (7 stocks)
  'KO', 'PEP', 'WMT', 'COST', 'HD', 'MCD', 'NKE',

  // Energy (3 stocks)
  'XOM', 'CVX', 'SLB',

  // Industrial (3 stocks)
  'CAT', 'BA', 'GE',
]

// Sample data fallback - Updated November 9, 2025 with accurate prices
const SAMPLE_STOCKS = [
  // Technology - Prices as of November 9, 2025
  { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 268.47, change: -1.30, changePercent: '-0.48', marketCap: '4150000000000', peRatio: '33.2', dividendYield: '0.45', volume: '48227365' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', price: 496.82, change: -0.28, changePercent: '-0.06', marketCap: '3690000000000', peRatio: '36.8', dividendYield: '0.72', volume: '22450000' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 279.81, change: -5.53, changePercent: '-1.94', marketCap: '3450000000000', peRatio: '24.5', dividendYield: '0.00', volume: '25680000' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', price: 188.15, change: 0.07, changePercent: '0.04', marketCap: '4610000000000', peRatio: '55.3', dividendYield: '0.03', volume: '264942255' },
  { symbol: 'META', name: 'Meta Platforms Inc.', sector: 'Technology', price: 621.71, change: 2.77, changePercent: '0.45', marketCap: '1580000000000', peRatio: '27.4', dividendYield: '0.00', volume: '15670000' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', sector: 'Technology', price: 142.80, change: 3.40, changePercent: '2.44', marketCap: '230000000000', peRatio: '42.1', dividendYield: '0.00', volume: '65320000' },
  { symbol: 'INTC', name: 'Intel Corporation', sector: 'Technology', price: 23.50, change: -0.35, changePercent: '-1.47', marketCap: '98000000000', peRatio: '18.3', dividendYield: '1.80', volume: '34560000' },
  { symbol: 'CRM', name: 'Salesforce Inc.', sector: 'Technology', price: 328.90, change: 4.20, changePercent: '1.29', marketCap: '315000000000', peRatio: '56.4', dividendYield: '0.00', volume: '7890000' },
  { symbol: 'ORCL', name: 'Oracle Corporation', sector: 'Technology', price: 175.25, change: 1.65, changePercent: '0.95', marketCap: '485000000000', peRatio: '32.8', dividendYield: '1.10', volume: '9450000' },

  // Finance - Prices as of November 9, 2025
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Finance', price: 314.21, change: 2.15, changePercent: '0.69', marketCap: '898000000000', peRatio: '13.5', dividendYield: '2.10', volume: '12340000' },
  { symbol: 'BAC', name: 'Bank of America Corp.', sector: 'Finance', price: 53.65, change: 0.55, changePercent: '1.04', marketCap: '408000000000', peRatio: '12.8', dividendYield: '2.45', volume: '45670000' },
  { symbol: 'GS', name: 'Goldman Sachs Group', sector: 'Finance', price: 564.89, change: 8.45, changePercent: '1.52', marketCap: '189000000000', peRatio: '15.2', dividendYield: '2.05', volume: '2340000' },
  { symbol: 'WFC', name: 'Wells Fargo & Co.', sector: 'Finance', price: 70.75, change: 0.85, changePercent: '1.22', marketCap: '241000000000', peRatio: '11.7', dividendYield: '2.40', volume: '18900000' },
  { symbol: 'MS', name: 'Morgan Stanley', sector: 'Finance', price: 125.19, change: 1.85, changePercent: '1.50', marketCap: '195000000000', peRatio: '16.2', dividendYield: '3.10', volume: '7560000' },
  { symbol: 'V', name: 'Visa Inc.', sector: 'Finance', price: 336.50, change: 2.25, changePercent: '0.67', marketCap: '680000000000', peRatio: '32.5', dividendYield: '0.70', volume: '6780000' },
  { symbol: 'MA', name: 'Mastercard Inc.', sector: 'Finance', price: 551.97, change: 6.80, changePercent: '1.25', marketCap: '515000000000', peRatio: '38.2', dividendYield: '0.55', volume: '3240000' },

  // Healthcare - Prices as of November 7-9, 2025
  { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 186.74, change: 1.85, changePercent: '1.00', marketCap: '452000000000', peRatio: '24.2', dividendYield: '2.95', volume: '7890000' },
  { symbol: 'PFE', name: 'Pfizer Inc.', sector: 'Healthcare', price: 24.43, change: -0.35, changePercent: '-1.41', marketCap: '138000000000', peRatio: '9.8', dividendYield: '6.25', volume: '34560000' },
  { symbol: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', price: 321.56, change: -8.45, changePercent: '-2.56', marketCap: '297000000000', peRatio: '21.5', dividendYield: '1.65', volume: '3120000' },
  { symbol: 'ABBV', name: 'AbbVie Inc.', sector: 'Healthcare', price: 219.16, change: 3.20, changePercent: '1.48', marketCap: '387000000000', peRatio: '45.8', dividendYield: '3.15', volume: '8760000' },
  { symbol: 'MRK', name: 'Merck & Co.', sector: 'Healthcare', price: 86.28, change: -1.15, changePercent: '-1.32', marketCap: '218000000000', peRatio: '14.5', dividendYield: '3.25', volume: '10450000' },
  { symbol: 'TMO', name: 'Thermo Fisher Scientific', sector: 'Healthcare', price: 572.76, change: 5.85, changePercent: '1.03', marketCap: '220000000000', peRatio: '34.2', dividendYield: '0.18', volume: '1560000' },

  // Consumer - Prices as of November 9, 2025
  { symbol: 'KO', name: 'Coca-Cola Co.', sector: 'Consumer', price: 73.85, change: 0.65, changePercent: '0.89', marketCap: '320000000000', peRatio: '27.5', dividendYield: '2.85', volume: '14230000' },
  { symbol: 'PEP', name: 'PepsiCo Inc.', sector: 'Consumer', price: 166.40, change: -1.20, changePercent: '-0.72', marketCap: '230000000000', peRatio: '23.8', dividendYield: '3.10', volume: '5670000' },
  { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Consumer', price: 104.25, change: 1.45, changePercent: '1.41', marketCap: '675000000000', peRatio: '42.5', dividendYield: '1.05', volume: '8900000' },
  { symbol: 'COST', name: 'Costco Wholesale', sector: 'Consumer', price: 1024.50, change: 12.35, changePercent: '1.22', marketCap: '455000000000', peRatio: '59.2', dividendYield: '0.45', volume: '2340000' },
  { symbol: 'HD', name: 'Home Depot Inc.', sector: 'Consumer', price: 435.80, change: 4.60, changePercent: '1.07', marketCap: '430000000000', peRatio: '27.8', dividendYield: '2.10', volume: '4560000' },
  { symbol: 'MCD', name: 'McDonald\'s Corp.', sector: 'Consumer', price: 313.25, change: 2.90, changePercent: '0.93', marketCap: '225000000000', peRatio: '27.5', dividendYield: '1.95', volume: '3780000' },
  { symbol: 'NKE', name: 'Nike Inc.', sector: 'Consumer', price: 71.30, change: -0.85, changePercent: '-1.18', marketCap: '105000000000', peRatio: '19.4', dividendYield: '1.85', volume: '9450000' },

  // Energy - Prices as of November 9, 2025
  { symbol: 'XOM', name: 'Exxon Mobil Corp.', sector: 'Energy', price: 118.75, change: 2.15, changePercent: '1.85', marketCap: '492000000000', peRatio: '13.2', dividendYield: '3.10', volume: '18900000' },
  { symbol: 'CVX', name: 'Chevron Corporation', sector: 'Energy', price: 162.40, change: 1.95, changePercent: '1.22', marketCap: '298000000000', peRatio: '12.5', dividendYield: '3.55', volume: '9870000' },
  { symbol: 'SLB', name: 'Schlumberger Ltd.', sector: 'Energy', price: 38.65, change: -0.45, changePercent: '-1.15', marketCap: '54000000000', peRatio: '12.8', dividendYield: '2.55', volume: '15600000' },

  // Industrial - Prices as of November 9, 2025
  { symbol: 'CAT', name: 'Caterpillar Inc.', sector: 'Industrial', price: 416.50, change: 5.85, changePercent: '1.42', marketCap: '212000000000', peRatio: '21.5', dividendYield: '1.55', volume: '3450000' },
  { symbol: 'BA', name: 'Boeing Co.', sector: 'Industrial', price: 152.80, change: -3.25, changePercent: '-2.08', marketCap: '92000000000', peRatio: 'N/A', dividendYield: '0.00', volume: '7890000' },
  { symbol: 'GE', name: 'General Electric', sector: 'Industrial', price: 201.50, change: 3.40, changePercent: '1.72', marketCap: '218000000000', peRatio: '28.6', dividendYield: '0.42', volume: '6120000' },
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
