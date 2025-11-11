'use client'

import { useState, useEffect } from 'react'

// Force dynamic rendering - prevents static generation at build time
export const dynamic = 'force-dynamic'

interface StockData {
  symbol: string
  name: string
  sector: string
  price: number
  change: number
  changePercent: string | number
}

// 25 top blue-chip stocks
const DEFAULT_STOCKS = [
  'AAPL', 'MSFT', 'GOOGL', 'NVDA', 'META', 'AMD', 'CRM',
  'JPM', 'BAC', 'GS', 'WFC', 'V', 'MA',
  'JNJ', 'UNH', 'ABBV', 'MRK', 'TMO',
  'WMT', 'COST', 'HD', 'MCD',
  'XOM', 'CVX',
  'CAT',
]

// Company metadata
const COMPANY_INFO: Record<string, { name: string; sector: string }> = {
  'AAPL': { name: 'Apple Inc.', sector: 'Technology' },
  'MSFT': { name: 'Microsoft Corporation', sector: 'Technology' },
  'GOOGL': { name: 'Alphabet Inc.', sector: 'Technology' },
  'NVDA': { name: 'NVIDIA Corporation', sector: 'Technology' },
  'META': { name: 'Meta Platforms Inc.', sector: 'Technology' },
  'AMD': { name: 'Advanced Micro Devices', sector: 'Technology' },
  'CRM': { name: 'Salesforce Inc.', sector: 'Technology' },
  'JPM': { name: 'JPMorgan Chase & Co.', sector: 'Finance' },
  'BAC': { name: 'Bank of America Corp.', sector: 'Finance' },
  'GS': { name: 'Goldman Sachs Group', sector: 'Finance' },
  'WFC': { name: 'Wells Fargo & Co.', sector: 'Finance' },
  'V': { name: 'Visa Inc.', sector: 'Finance' },
  'MA': { name: 'Mastercard Inc.', sector: 'Finance' },
  'JNJ': { name: 'Johnson & Johnson', sector: 'Healthcare' },
  'UNH': { name: 'UnitedHealth Group', sector: 'Healthcare' },
  'ABBV': { name: 'AbbVie Inc.', sector: 'Healthcare' },
  'MRK': { name: 'Merck & Co.', sector: 'Healthcare' },
  'TMO': { name: 'Thermo Fisher Scientific', sector: 'Healthcare' },
  'WMT': { name: 'Walmart Inc.', sector: 'Consumer' },
  'COST': { name: 'Costco Wholesale', sector: 'Consumer' },
  'HD': { name: 'Home Depot Inc.', sector: 'Consumer' },
  'MCD': { name: "McDonald's Corp.", sector: 'Consumer' },
  'XOM': { name: 'Exxon Mobil Corp.', sector: 'Energy' },
  'CVX': { name: 'Chevron Corporation', sector: 'Energy' },
  'CAT': { name: 'Caterpillar Inc.', sector: 'Industrial' },
}

export default function Screener() {
  const [stocks, setStocks] = useState<StockData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [apiNote, setApiNote] = useState('')
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  // Fetch stock data on component mount and every 5 minutes
  useEffect(() => {
    fetchStockData() // Initial load

    const interval = setInterval(() => {
      fetchStockData() // Auto-refresh every 5 minutes
    }, 300000) // 5 minutes = 300000ms

    return () => clearInterval(interval)
  }, [])

  const fetchStockData = async () => {
    setIsLoading(true)
    
    const apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY
    
    if (!apiKey) {
      setApiNote('API key not configured. Please add NEXT_PUBLIC_FINNHUB_API_KEY to environment variables.')
      setIsLoading(false)
      return
    }

    try {
      // Fetch directly from Finnhub API (client-side)
      const stockPromises = DEFAULT_STOCKS.map(async (symbol) => {
        try {
          const response = await fetch(
            `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
          )

          if (!response.ok) {
            console.error(`Failed to fetch ${symbol}:`, response.status)
            return null
          }

          const data = await response.json()
          const info = COMPANY_INFO[symbol]

          return {
            symbol,
            name: info?.name || symbol,
            sector: info?.sector || 'Unknown',
            price: data.c || 0,
            change: data.d || 0,
            changePercent: data.dp?.toFixed(2) || '0.00',
          }
        } catch (error) {
          console.error(`Error fetching ${symbol}:`, error)
          return null
        }
      })

      const results = await Promise.all(stockPromises)
      const validStocks = results.filter((stock): stock is StockData => stock !== null)

      if (validStocks.length > 0) {
        setStocks(validStocks)
        setApiNote('Live data from Finnhub API (refreshed every 5 minutes)')
        setLastUpdate(new Date())
      } else {
        setApiNote('Unable to fetch live data. Please try again.')
      }
    } catch (error) {
      console.error('Error fetching stock data:', error)
      setApiNote('Error fetching data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section - Dark Gradient */}
      <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <h1 className="font-crimson text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  Stock Screener
                </h1>
                <p className="text-lg text-stone-300 font-light">
                  Real-time tracking of 25 top blue-chip stocks with live price updates
                </p>
              </div>
              {lastUpdate && (
                <div className="text-sm text-stone-400">
                  <span className="text-green-400">● </span>
                  Last updated: {lastUpdate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Refresh button */}
          <div className="mb-8 flex justify-end">
            <button
              onClick={fetchStockData}
              disabled={isLoading}
              className="px-6 py-2.5 bg-soft-orange border-2 border-soft-orange text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none hover:bg-soft-orange/90 transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-soft-orange disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Refresh Data'}
            </button>
          </div>

          {/* Results */}
          <div className="bg-slate-800 border-2 border-stone-400 rounded-none shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 border-b-2 border-bronze-600">
              <h2 className="font-crimson text-2xl font-bold text-white">
                {stocks.length} Blue-Chip Stocks
              </h2>
              {apiNote && (
                <div className="text-xs text-stone-400 bg-stone-700 px-4 py-2 rounded-none border border-stone-600">
                  <strong>Note:</strong> {apiNote}
                </div>
              )}
            </div>

            {isLoading ? (
              <div className="p-12 text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-bronze-600"></div>
                <p className="mt-4 text-stone-300">Loading stock data...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-stone-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Symbol</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Name</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Sector</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Price</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Change</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Change %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-700">
                    {stocks.map((stock) => {
                      const changePercent = typeof stock.changePercent === 'string' ? parseFloat(stock.changePercent) : stock.changePercent

                      return (
                        <tr key={stock.symbol} className="hover:bg-slate-700 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap font-bold text-bronze-600">
                            {stock.symbol}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-stone-200">{stock.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-stone-300">{stock.sector}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right font-semibold text-white">
                            ${stock.price.toFixed(2)}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-right font-semibold ${
                            stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-right font-semibold ${
                            changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Premium Upsell */}
          <div className="mt-12 bg-gradient-to-br from-slate-900 to-stone-900 border-2 border-stone-700 rounded-none shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="font-crimson text-3xl md:text-4xl font-bold mb-4 text-white">
                Unlock Advanced Screening
              </h3>
              <p className="text-lg md:text-xl mb-8 text-stone-300 max-w-2xl mx-auto">
                Get access to 50+ screening criteria, advanced fundamentals, custom alerts, and more with Premium.
              </p>
              <button className="px-8 py-3 bg-soft-orange border-2 border-soft-orange-dark text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none hover:bg-soft-orange-dark hover:text-white transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-soft-orange focus:ring-offset-2 focus:ring-offset-slate-900">
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
