'use client'

import { useState, useEffect } from 'react'

interface StockData {
  symbol: string
  name: string
  sector: string
  price: number
  change: number
  changePercent: string | number
  volume: string | number
  marketCap: string | number
  peRatio: string | number
  dividendYield: string | number
}

export default function Screener() {
  const [allStocks, setAllStocks] = useState<StockData[]>([])
  const [filteredStocks, setFilteredStocks] = useState<StockData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [apiNote, setApiNote] = useState('')

  const [filters, setFilters] = useState({
    minMarketCap: '',
    maxPE: '',
    minDividendYield: '',
  })

  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  // Fetch stock data on component mount and every hour
  useEffect(() => {
    fetchStockData() // Initial load

    const interval = setInterval(() => {
      fetchStockData() // Auto-refresh every hour (aligns with API strategy)
    }, 3600000) // 1 hour = 3600000ms

    return () => clearInterval(interval)
  }, [])

  const fetchStockData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/screener', {
        cache: 'no-store'
      })
      const data = await response.json()

      if (data.stocks) {
        setAllStocks(data.stocks)
        setFilteredStocks(data.stocks)
        setApiNote(data.note || '')
        setLastUpdate(new Date())
      }
    } catch (error) {
      console.error('Error fetching stock data:', error)
      setApiNote('Error fetching data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const formatMarketCap = (value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value
    if (isNaN(numValue)) return 'N/A'

    if (numValue >= 1000000000000) {
      return `$${(numValue / 1000000000000).toFixed(2)}T`
    } else if (numValue >= 1000000000) {
      return `$${(numValue / 1000000000).toFixed(2)}B`
    }
    return `$${(numValue / 1000000).toFixed(2)}M`
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    let filtered = allStocks

    if (filters.minMarketCap) {
      const minCap = parseFloat(filters.minMarketCap) * 1000000000
      filtered = filtered.filter(stock => {
        const marketCap = typeof stock.marketCap === 'string' ? parseFloat(stock.marketCap) : stock.marketCap
        return !isNaN(marketCap) && marketCap >= minCap
      })
    }

    if (filters.maxPE) {
      filtered = filtered.filter(stock => {
        const peRatio = typeof stock.peRatio === 'string' ? parseFloat(stock.peRatio) : stock.peRatio
        return !isNaN(peRatio) && peRatio <= parseFloat(filters.maxPE)
      })
    }

    if (filters.minDividendYield) {
      filtered = filtered.filter(stock => {
        const dividendYield = typeof stock.dividendYield === 'string' ? parseFloat(stock.dividendYield) : stock.dividendYield
        return !isNaN(dividendYield) && dividendYield >= parseFloat(filters.minDividendYield)
      })
    }

    setFilteredStocks(filtered)
  }

  const resetFilters = () => {
    setFilters({
      minMarketCap: '',
      maxPE: '',
      minDividendYield: '',
    })
    setFilteredStocks(allStocks)
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
                  Filter and discover stocks that match your investment criteria
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

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={applyFilters}
                disabled={isLoading}
                className="px-6 py-2.5 bg-bronze-600 border-2 border-bronze-700 text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none hover:bg-bronze-700 hover:text-white transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-bronze-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Apply Filters
              </button>
              <button
                onClick={resetFilters}
                disabled={isLoading}
                className="px-6 py-2.5 bg-transparent border-2 border-stone-500 text-stone-300 font-bold text-sm uppercase tracking-wide rounded-none hover:bg-stone-700 hover:border-stone-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stone-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Reset
              </button>
              <button
                onClick={fetchStockData}
                disabled={isLoading}
                className="px-6 py-2.5 bg-soft-orange border-2 border-soft-orange text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none hover:bg-soft-orange/90 transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-soft-orange disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Loading...' : 'Refresh Data'}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-slate-800 border-2 border-stone-400 rounded-none shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 border-b-2 border-bronze-600">
              <h2 className="font-crimson text-2xl font-bold text-white">
                Results ({filteredStocks.length} stocks)
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
                      <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Price</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Change</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Market Cap</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">P/E Ratio</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-stone-300 uppercase tracking-wider border-b border-stone-600">Div Yield</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-700">
                    {filteredStocks.map((stock) => {
                      const changePercent = typeof stock.changePercent === 'string' ? parseFloat(stock.changePercent) : stock.changePercent
                      const peRatio = typeof stock.peRatio === 'string' ? stock.peRatio : stock.peRatio.toFixed(2)
                      const dividendYield = typeof stock.dividendYield === 'string' ? stock.dividendYield : stock.dividendYield.toFixed(2)

                      return (
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
                            {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-stone-300">
                            {formatMarketCap(stock.marketCap)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-stone-300">
                            {peRatio}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-stone-300">
                            {dividendYield}%
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
                Get access to 50+ screening criteria, real-time data, custom alerts, and more with Premium.
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
