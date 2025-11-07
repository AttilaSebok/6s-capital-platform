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
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section - Dark Gradient */}
      <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-crimson text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Markets
            </h1>
            <p className="text-lg text-stone-300 font-light">
              Real-time market data and live charts for major indices and popular stocks
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Market Overview Widget */}
          <section className="mb-12">
            <h2 className="font-crimson text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
              Market Overview
            </h2>
            <div className="mt-6 bg-white border-2 border-stone-300 rounded-none shadow-xl p-6">
              <MarketOverview />
            </div>
          </section>

          {/* Major Indices */}
          <section className="mb-12">
            <h2 className="font-crimson text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
              Major Indices
            </h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {majorIndices.map((index) => (
                <div key={index.symbol} className="bg-slate-800 border-2 border-stone-400 rounded-none shadow-xl overflow-hidden">
                  <div className="p-4 border-b-2 border-bronze-600">
                    <h3 className="font-crimson text-xl md:text-2xl font-bold text-white">
                      {index.name}
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="w-full overflow-hidden">
                      <TradingViewWidget symbol={index.symbol} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Stocks */}
          <section className="mb-12">
            <h2 className="font-crimson text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
              Most Watched Stocks
            </h2>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {popularStocks.map((stock) => (
                <div key={stock.symbol} className="bg-slate-800 border-2 border-stone-400 rounded-none shadow-xl overflow-hidden">
                  <div className="p-4 border-b-2 border-bronze-600">
                    <h3 className="font-crimson text-xl md:text-2xl font-bold text-white">
                      {stock.name} ({stock.symbol})
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="w-full overflow-hidden">
                      <TradingViewWidget symbol={stock.symbol} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Economic Calendar Widget */}
          <section className="mb-12">
            <h2 className="font-crimson text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
              Economic Calendar
            </h2>
            <div className="mt-6 bg-white border-2 border-stone-300 rounded-none shadow-xl p-6 overflow-hidden">
              <EconomicCalendar />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
