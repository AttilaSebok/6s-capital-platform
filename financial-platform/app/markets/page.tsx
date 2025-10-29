import MarketOverview from '@/components/MarketOverview'
import TradingViewWidget from '@/components/TradingViewWidget'
import EconomicCalendar from '@/components/EconomicCalendar'

export default function MarketsPage() {
  const majorIndices = [
    { symbol: 'SPX', name: 'S&P 500' },
    { symbol: 'NASDAQ:IXIC', name: 'NASDAQ Composite' },
    { symbol: 'DJI', name: 'Dow Jones' },
    { symbol: 'RUT', name: 'Russell 2000' },
  ]

  const popularStocks = [
    { symbol: 'AAPL', name: 'Apple' },
    { symbol: 'MSFT', name: 'Microsoft' },
    { symbol: 'GOOGL', name: 'Alphabet' },
    { symbol: 'NVDA', name: 'NVIDIA' },
    { symbol: 'TSLA', name: 'Tesla' },
    { symbol: 'AMZN', name: 'Amazon' },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Markets</h1>

        {/* Market Overview Widget */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Market Overview</h2>
          <div className="card">
            <MarketOverview />
          </div>
        </section>

        {/* Major Indices */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Major Indices</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {majorIndices.map((index) => (
              <div key={index.symbol} className="card">
                <h3 className="text-xl font-semibold mb-4">{index.name}</h3>
                <TradingViewWidget symbol={index.symbol} />
              </div>
            ))}
          </div>
        </section>

        {/* Popular Stocks */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Most Watched Stocks</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {popularStocks.map((stock) => (
              <div key={stock.symbol} className="card">
                <h3 className="text-xl font-semibold mb-4">
                  {stock.name} ({stock.symbol})
                </h3>
                <TradingViewWidget symbol={stock.symbol} />
              </div>
            ))}
          </div>
        </section>

        {/* Economic Calendar Widget */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Economic Calendar</h2>
          <div className="card">
            <EconomicCalendar />
          </div>
        </section>
      </div>
    </div>
  )
}
