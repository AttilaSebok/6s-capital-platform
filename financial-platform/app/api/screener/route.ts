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

// Sample data fallback - 35 stocks with realistic data
const SAMPLE_STOCKS = [
  // Technology
  { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 185.50, change: 2.30, changePercent: '1.25', marketCap: '2850000000000', peRatio: '29.5', dividendYield: '0.52', volume: '52340000' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', price: 375.20, change: -1.50, changePercent: '-0.40', marketCap: '2780000000000', peRatio: '35.2', dividendYield: '0.78', volume: '23450000' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 140.30, change: 3.20, changePercent: '2.33', marketCap: '1750000000000', peRatio: '25.8', dividendYield: '0.00', volume: '25680000' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', price: 495.60, change: 8.50, changePercent: '1.74', marketCap: '1220000000000', peRatio: '68.2', dividendYield: '0.04', volume: '48900000' },
  { symbol: 'META', name: 'Meta Platforms Inc.', sector: 'Technology', price: 385.40, change: 5.60, changePercent: '1.47', marketCap: '980000000000', peRatio: '28.9', dividendYield: '0.45', volume: '15670000' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', sector: 'Technology', price: 142.80, change: 3.40, changePercent: '2.44', marketCap: '230000000000', peRatio: '42.1', dividendYield: '0.00', volume: '65320000' },
  { symbol: 'INTC', name: 'Intel Corporation', sector: 'Technology', price: 42.15, change: -0.85, changePercent: '-1.98', marketCap: '172000000000', peRatio: '18.3', dividendYield: '1.52', volume: '34560000' },
  { symbol: 'CRM', name: 'Salesforce Inc.', sector: 'Technology', price: 265.90, change: 4.20, changePercent: '1.60', marketCap: '258000000000', peRatio: '56.4', dividendYield: '0.00', volume: '7890000' },
  { symbol: 'ORCL', name: 'Oracle Corporation', sector: 'Technology', price: 118.75, change: 1.65, changePercent: '1.41', marketCap: '325000000000', peRatio: '32.8', dividendYield: '1.28', volume: '9450000' },

  // Finance
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Finance', price: 158.90, change: 0.80, changePercent: '0.51', marketCap: '452000000000', peRatio: '11.2', dividendYield: '2.45', volume: '12340000' },
  { symbol: 'BAC', name: 'Bank of America Corp.', sector: 'Finance', price: 34.25, change: -0.35, changePercent: '-1.01', marketCap: '278000000000', peRatio: '10.8', dividendYield: '2.87', volume: '45670000' },
  { symbol: 'GS', name: 'Goldman Sachs Group', sector: 'Finance', price: 385.60, change: 2.90, changePercent: '0.76', marketCap: '125000000000', peRatio: '12.5', dividendYield: '2.15', volume: '2340000' },
  { symbol: 'WFC', name: 'Wells Fargo & Co.', sector: 'Finance', price: 48.75, change: 0.45, changePercent: '0.93', marketCap: '168000000000', peRatio: '9.7', dividendYield: '2.95', volume: '18900000' },
  { symbol: 'MS', name: 'Morgan Stanley', sector: 'Finance', price: 94.30, change: 1.20, changePercent: '1.29', marketCap: '152000000000', peRatio: '13.2', dividendYield: '3.12', volume: '7560000' },
  { symbol: 'V', name: 'Visa Inc.', sector: 'Finance', price: 255.80, change: 3.45, changePercent: '1.37', marketCap: '528000000000', peRatio: '31.5', dividendYield: '0.72', volume: '6780000' },
  { symbol: 'MA', name: 'Mastercard Inc.', sector: 'Finance', price: 425.40, change: 5.20, changePercent: '1.24', marketCap: '408000000000', peRatio: '36.2', dividendYield: '0.58', volume: '3240000' },

  // Healthcare
  { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 156.80, change: 1.10, changePercent: '0.71', marketCap: '385000000000', peRatio: '22.4', dividendYield: '3.05', volume: '7890000' },
  { symbol: 'PFE', name: 'Pfizer Inc.', sector: 'Healthcare', price: 28.45, change: -0.25, changePercent: '-0.87', marketCap: '160000000000', peRatio: '14.2', dividendYield: '5.85', volume: '34560000' },
  { symbol: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', price: 528.60, change: 6.80, changePercent: '1.30', marketCap: '488000000000', peRatio: '26.8', dividendYield: '1.45', volume: '3120000' },
  { symbol: 'ABBV', name: 'AbbVie Inc.', sector: 'Healthcare', price: 168.90, change: 2.30, changePercent: '1.38', marketCap: '298000000000', peRatio: '42.5', dividendYield: '3.62', volume: '8760000' },
  { symbol: 'MRK', name: 'Merck & Co.', sector: 'Healthcare', price: 105.40, change: 0.85, changePercent: '0.81', marketCap: '267000000000', peRatio: '16.8', dividendYield: '2.88', volume: '10450000' },
  { symbol: 'TMO', name: 'Thermo Fisher Scientific', sector: 'Healthcare', price: 548.20, change: 4.60, changePercent: '0.85', marketCap: '212000000000', peRatio: '32.1', dividendYield: '0.25', volume: '1560000' },

  // Consumer
  { symbol: 'KO', name: 'Coca-Cola Co.', sector: 'Consumer', price: 62.35, change: 0.45, changePercent: '0.73', marketCap: '268000000000', peRatio: '25.6', dividendYield: '3.12', volume: '14230000' },
  { symbol: 'PEP', name: 'PepsiCo Inc.', sector: 'Consumer', price: 172.80, change: 1.25, changePercent: '0.73', marketCap: '238000000000', peRatio: '26.4', dividendYield: '2.85', volume: '5670000' },
  { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Consumer', price: 165.40, change: 2.10, changePercent: '1.29', marketCap: '442000000000', peRatio: '28.3', dividendYield: '1.42', volume: '8900000' },
  { symbol: 'COST', name: 'Costco Wholesale', sector: 'Consumer', price: 725.60, change: 8.20, changePercent: '1.14', marketCap: '322000000000', peRatio: '44.2', dividendYield: '0.58', volume: '2340000' },
  { symbol: 'HD', name: 'Home Depot Inc.', sector: 'Consumer', price: 365.80, change: 3.45, changePercent: '0.95', marketCap: '368000000000', peRatio: '24.6', dividendYield: '2.38', volume: '4560000' },
  { symbol: 'MCD', name: 'McDonalds Corp.', sector: 'Consumer', price: 298.50, change: 2.80, changePercent: '0.95', marketCap: '218000000000', peRatio: '25.8', dividendYield: '2.15', volume: '3780000' },
  { symbol: 'NKE', name: 'Nike Inc.', sector: 'Consumer', price: 88.40, change: -1.20, changePercent: '-1.34', marketCap: '135000000000', peRatio: '28.4', dividendYield: '1.65', volume: '9450000' },

  // Energy
  { symbol: 'XOM', name: 'Exxon Mobil Corp.', sector: 'Energy', price: 112.60, change: 1.85, changePercent: '1.67', marketCap: '458000000000', peRatio: '12.3', dividendYield: '3.25', volume: '18900000' },
  { symbol: 'CVX', name: 'Chevron Corporation', sector: 'Energy', price: 155.40, change: 2.30, changePercent: '1.50', marketCap: '288000000000', peRatio: '11.8', dividendYield: '3.68', volume: '9870000' },
  { symbol: 'SLB', name: 'Schlumberger Ltd.', sector: 'Energy', price: 42.85, change: 0.95, changePercent: '2.27', marketCap: '60000000000', peRatio: '14.5', dividendYield: '2.42', volume: '15600000' },

  // Industrial
  { symbol: 'CAT', name: 'Caterpillar Inc.', sector: 'Industrial', price: 328.90, change: 4.20, changePercent: '1.29', marketCap: '168000000000', peRatio: '18.6', dividendYield: '1.78', volume: '3450000' },
  { symbol: 'BA', name: 'Boeing Co.', sector: 'Industrial', price: 185.25, change: -2.40, changePercent: '-1.28', marketCap: '112000000000', peRatio: 'N/A', dividendYield: '0.00', volume: '7890000' },
  { symbol: 'GE', name: 'General Electric', sector: 'Industrial', price: 158.60, change: 2.75, changePercent: '1.76', marketCap: '172000000000', peRatio: '22.4', dividendYield: '0.52', volume: '6120000' },
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
