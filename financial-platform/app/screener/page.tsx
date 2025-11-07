'use client'

import { useState } from 'react'

interface StockData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  marketCap: number
  peRatio: number
  dividendYield: number
}

// Sample data - in production, this would come from your API
const sampleStocks: StockData[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 185.50, change: 2.30, changePercent: 1.25, marketCap: 2850000000000, peRatio: 29.5, dividendYield: 0.52 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 375.20, change: -1.50, changePercent: -0.40, marketCap: 2780000000000, peRatio: 35.2, dividendYield: 0.78 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 140.30, change: 3.20, changePercent: 2.33, marketCap: 1750000000000, peRatio: 25.8, dividendYield: 0.00 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 152.80, change: 1.80, changePercent: 1.19, marketCap: 1580000000000, peRatio: 78.5, dividendYield: 0.00 },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 495.60, change: 8.50, changePercent: 1.74, marketCap: 1220000000000, peRatio: 68.2, dividendYield: 0.04 },
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 245.70, change: -3.20, changePercent: -1.29, marketCap: 780000000000, peRatio: 65.3, dividendYield: 0.00 },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 385.40, change: 5.60, changePercent: 1.47, marketCap: 980000000000, peRatio: 28.9, dividendYield: 0.45 },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 158.90, change: 0.80, changePercent: 0.51, marketCap: 452000000000, peRatio: 11.2, dividendYield: 2.45 },
]

export default function Screener() {
  const [filters, setFilters] = useState({
    minMarketCap: '',
    maxPE: '',
    minDividendYield: '',
  })

  const [filteredStocks, setFilteredStocks] = useState(sampleStocks)

  const formatMarketCap = (value: number) => {
    if (value >= 1000000000000) {
      return `$${(value / 1000000000000).toFixed(2)}T`
    } else if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(2)}B`
    }
    return `$${(value / 1000000).toFixed(2)}M`
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    let filtered = sampleStocks

    if (filters.minMarketCap) {
      const minCap = parseFloat(filters.minMarketCap) * 1000000000
      filtered = filtered.filter(stock => stock.marketCap >= minCap)
    }

    if (filters.maxPE) {
      filtered = filtered.filter(stock => stock.peRatio <= parseFloat(filters.maxPE))
    }

    if (filters.minDividendYield) {
      filtered = filtered.filter(stock => stock.dividendYield >= parseFloat(filters.minDividendYield))
    }

    setFilteredStocks(filtered)
  }

  const resetFilters = () => {
    setFilters({
      minMarketCap: '',
      maxPE: '',
      minDividendYield: '',
    })
    setFilteredStocks(sampleStocks)
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section - Dark Gradient */}
      <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-crimson text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Stock Screener
            </h1>
            <p className="text-lg text-stone-300 font-light">
              Filter and discover stocks that match your investment criteria
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="bg-slate-800 border-2 border-stone-400 rounded-none shadow-xl p-6 mb-8">
            <h2 className="font-crimson text-2xl font-bold text-white mb-6 pb-3 border-b-2 border-bronze-600">
              Filters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-300 mb-2 uppercase tracking-wider">
                  Min Market Cap (Billions)
                </label>
                <input
                  type="number"
                  name="minMarketCap"
                  value={filters.minMarketCap}
                  onChange={handleFilterChange}
                  placeholder="e.g., 100"
                  className="w-full px-4 py-2.5 border-2 border-stone-600 rounded-none bg-slate-700 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-300 mb-2 uppercase tracking-wider">
                  Max P/E Ratio
                </label>
                <input
                  type="number"
                  name="maxPE"
                  value={filters.maxPE}
                  onChange={handleFilterChange}
                  placeholder="e.g., 30"
                  className="w-full px-4 py-2.5 border-2 border-stone-600 rounded-none bg-slate-700 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-300 mb-2 uppercase tracking-wider">
                  Min Dividend Yield (%)
                </label>
                <input
                  type="number"
                  name="minDividendYield"
                  value={filters.minDividendYield}
                  onChange={handleFilterChange}
                  placeholder="e.g., 2"
                  step="0.1"
                  className="w-full px-4 py-2.5 border-2 border-stone-600 rounded-none bg-slate-700 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                onClick={applyFilters}
                className="px-6 py-2.5 bg-bronze-600 border-2 border-bronze-700 text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none hover:bg-bronze-700 hover:text-white transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-bronze-600"
              >
                Apply Filters
              </button>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 bg-transparent border-2 border-stone-500 text-stone-300 font-bold text-sm uppercase tracking-wide rounded-none hover:bg-stone-700 hover:border-stone-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stone-500"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-slate-800 border-2 border-stone-400 rounded-none shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 border-b-2 border-bronze-600">
              <h2 className="font-crimson text-2xl font-bold text-white">
                Results ({filteredStocks.length} stocks)
              </h2>
              <div className="text-xs text-stone-400 bg-stone-700 px-4 py-2 rounded-none border border-stone-600">
                <strong>Note:</strong> This is sample data. Connect to a real API for live data.
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Symbol</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Name</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Price</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Change</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Market Cap</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">P/E Ratio</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Div Yield</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-700">
                  {filteredStocks.map((stock) => (
                    <tr key={stock.symbol} className="hover:bg-slate-700 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-bold text-bronze-600">
                        {stock.symbol}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-stone-200">{stock.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right font-semibold text-white">
                        ${stock.price.toFixed(2)}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-right font-semibold ${
                        stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-stone-300">
                        {formatMarketCap(stock.marketCap)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-stone-300">
                        {stock.peRatio.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-stone-300">
                        {stock.dividendYield.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Premium Upsell */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 border-2 border-blue-700 rounded-none shadow-xl p-8 text-white">
            <div className="text-center">
              <h3 className="font-crimson text-3xl font-bold mb-4">Unlock Advanced Screening</h3>
              <p className="text-lg mb-6 text-blue-100">
                Get access to 50+ screening criteria, real-time data, custom alerts, and more with Premium.
              </p>
              <button className="px-8 py-3 bg-white border-2 border-white text-blue-700 font-bold uppercase tracking-wide rounded-none hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700">
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
