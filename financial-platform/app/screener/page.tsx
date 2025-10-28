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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Stock Screener</h1>

      {/* Filters */}
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Min Market Cap (Billions)
            </label>
            <input
              type="number"
              name="minMarketCap"
              value={filters.minMarketCap}
              onChange={handleFilterChange}
              placeholder="e.g., 100"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Max P/E Ratio
            </label>
            <input
              type="number"
              name="maxPE"
              value={filters.maxPE}
              onChange={handleFilterChange}
              placeholder="e.g., 30"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Min Dividend Yield (%)
            </label>
            <input
              type="number"
              name="minDividendYield"
              value={filters.minDividendYield}
              onChange={handleFilterChange}
              placeholder="e.g., 2"
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button onClick={applyFilters} className="btn-primary">
            Apply Filters
          </button>
          <button onClick={resetFilters} className="btn-secondary">
            Reset
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Results ({filteredStocks.length} stocks)
          </h2>
          <div className="text-sm text-gray-500">
            <strong>Note:</strong> This is sample data. Connect to a real API for live data.
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Symbol</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Change</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Market Cap</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">P/E Ratio</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Div Yield</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredStocks.map((stock) => (
                <tr key={stock.symbol} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-primary-600">
                    {stock.symbol}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{stock.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-semibold">
                    ${stock.price.toFixed(2)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-right font-semibold ${
                    stock.change >= 0 ? 'price-up' : 'price-down'
                  }`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {formatMarketCap(stock.marketCap)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {stock.peRatio.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {stock.dividendYield.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Premium Upsell */}
      <div className="mt-8 card bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Unlock Advanced Screening</h3>
          <p className="mb-6">
            Get access to 50+ screening criteria, real-time data, custom alerts, and more with Premium.
          </p>
          <button className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  )
}
