import Link from 'next/link'
import TradingViewWidget from '@/components/TradingViewWidget'
import MarketOverview from '@/components/MarketOverview'
import NewsletterSignup from '@/components/NewsletterSignup'
import FeaturedArticles from '@/components/FeaturedArticles'

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Advanced Investment Analysis for Serious Investors
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Real-time market data, professional-grade screening tools, and expert analysis to help you make informed investment decisions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/screener" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Stock Screener
              </Link>
              <Link href="/analysis" className="btn-secondary bg-primary-800 hover:bg-primary-700 text-white">
                Market Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Market Overview</h2>
          <MarketOverview />
        </div>
      </section>

      {/* Live Chart Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Live Market Charts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">S&P 500</h3>
              <TradingViewWidget symbol="SPX" />
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">NASDAQ</h3>
              <TradingViewWidget symbol="NASDAQ:IXIC" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose 6S Capital?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Data</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access live market data, charts, and analytics powered by industry-leading data providers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Screening</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Filter stocks by P/E ratio, market cap, dividend yield, and dozens of other metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional market analysis, investment strategies, and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Analysis</h2>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
              View All →
            </Link>
          </div>
          <FeaturedArticles />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section for Brokers (Affiliate) */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Open an account with our recommended brokers and get started today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#"
                className="btn-primary"
                rel="nofollow sponsored"
              >
                Interactive Brokers - $0 Commissions
              </a>
              <a
                href="#"
                className="btn-secondary"
                rel="nofollow sponsored"
              >
                Compare Brokers
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We may receive compensation if you open an account through our links.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
