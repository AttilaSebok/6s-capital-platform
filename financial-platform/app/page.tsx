import Link from 'next/link'
import TradingViewWidget from '@/components/TradingViewWidget'
import MarketOverview from '@/components/MarketOverview'
import NewsletterSignup from '@/components/NewsletterSignup'
import FeaturedArticles from '@/components/FeaturedArticles'

export default function Home() {
  return (
    <div className="bg-stone-50">
      {/* Hero Section - Sharp & Wise */}
      <section className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-block bg-olive-800 bg-opacity-40 border-2 border-bronze-600 text-bronze-600 px-4 py-2 rounded-none text-xs font-bold uppercase tracking-wider">
                Professional Investment Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-crimson text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight text-center lg:text-left">
              Advanced Investment Analysis for{' '}
              <span className="text-bronze-600 border-b-4 border-bronze-600">Serious Investors</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-stone-300 mb-10 leading-relaxed max-w-3xl text-center lg:text-left">
              Real-time market data, professional-grade screening tools, and expert analysis
              to help you make informed investment decisions every day.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Link
                href="/screener"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-bronze-600 border-2 border-bronze-700 text-deep-brown font-bold text-sm lg:text-base uppercase tracking-wide rounded-none shadow-xl transition-all duration-200 hover:bg-bronze-700 hover:text-white hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Stock Screener
              </Link>
              <Link
                href="/articles"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-transparent border-2 border-bronze-600 text-bronze-600 font-bold text-sm lg:text-base uppercase tracking-wide rounded-none shadow-xl transition-all duration-200 hover:bg-bronze-600 hover:text-deep-brown hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Market Analysis
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t-2 border-stone-700 grid grid-cols-2 md:grid-cols-4 gap-6 text-center lg:text-left">
              <div>
                <div className="font-crimson text-3xl lg:text-4xl font-bold text-bronze-600 mb-1">365</div>
                <div className="text-xs lg:text-sm text-stone-400 uppercase tracking-wider">Days Analysis</div>
              </div>
              <div>
                <div className="font-crimson text-3xl lg:text-4xl font-bold text-bronze-600 mb-1">50K+</div>
                <div className="text-xs lg:text-sm text-stone-400 uppercase tracking-wider">Investors</div>
              </div>
              <div>
                <div className="font-crimson text-3xl lg:text-4xl font-bold text-bronze-600 mb-1">100+</div>
                <div className="text-xs lg:text-sm text-stone-400 uppercase tracking-wider">Articles</div>
              </div>
              <div>
                <div className="font-crimson text-3xl lg:text-4xl font-bold text-bronze-600 mb-1">24/7</div>
                <div className="text-xs lg:text-sm text-stone-400 uppercase tracking-wider">Market Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview - Sharp & Wise */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold text-deep-brown mb-3 pb-3 border-b-4 border-bronze-600 inline-block">
              Market Overview
            </h2>
            <p className="text-stone-600 mt-4 text-base md:text-lg">
              Real-time data from global markets, updated every minute.
            </p>
          </div>
          <MarketOverview />
        </div>
      </section>

      {/* Live Chart Section - Sharp & Wise */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-900 to-stone-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold text-white mb-3 pb-3 border-b-4 border-bronze-600 inline-block">
              Live Market Charts
            </h2>
            <p className="text-stone-300 mt-4 text-base md:text-lg">
              Track major indices with professional-grade charting tools.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-6 shadow-xl">
              <h3 className="font-crimson text-xl md:text-2xl font-bold text-bronze-600 mb-4 pb-2 border-b-2 border-bronze-600">
                S&P 500
              </h3>
              <TradingViewWidget symbol="SPX" />
            </div>
            <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-6 shadow-xl">
              <h3 className="font-crimson text-xl md:text-2xl font-bold text-bronze-600 mb-4 pb-2 border-b-2 border-bronze-600">
                NASDAQ
              </h3>
              <TradingViewWidget symbol="NASDAQ:IXIC" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Sharp & Wise */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold text-deep-brown mb-4">
              Why Choose <span className="text-bronze-600">money365.market</span>?
            </h2>
            <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto">
              Professional-grade tools and insights designed for serious investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-crimson text-xl md:text-2xl font-bold text-white mb-3 pb-2 border-b-2 border-bronze-600">
                Real-Time Data
              </h3>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                Access live market data, charts, and analytics powered by industry-leading data providers.
                Stay ahead with instant updates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-crimson text-xl md:text-2xl font-bold text-white mb-3 pb-2 border-b-2 border-bronze-600">
                Advanced Screening
              </h3>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                Filter stocks by P/E ratio, market cap, dividend yield, and dozens of other metrics.
                Find opportunities faster.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-200 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-crimson text-xl md:text-2xl font-bold text-white mb-3 pb-2 border-b-2 border-bronze-600">
                Expert Analysis
              </h3>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                Professional market analysis, investment strategies, and actionable insights.
                Make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - Sharp & Wise */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-900 to-stone-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="font-crimson text-3xl md:text-4xl font-bold text-white mb-2">
                Latest Analysis
              </h2>
              <p className="text-stone-300 text-sm md:text-base">
                In-depth articles and market insights from our expert team
              </p>
            </div>
            <Link
              href="/articles"
              className="px-4 py-2 bg-transparent border-2 border-bronze-600 text-bronze-600 font-bold text-sm uppercase tracking-wide rounded-none hover:bg-bronze-600 hover:text-deep-brown transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900 hidden md:inline-block"
            >
              View All →
            </Link>
          </div>
          <FeaturedArticles />
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/articles"
              className="inline-block px-6 py-3 bg-transparent border-2 border-bronze-600 text-bronze-600 font-bold text-sm uppercase tracking-wide rounded-none hover:bg-bronze-600 hover:text-deep-brown transition-all duration-200"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Sharp & Wise */}
      <section id="newsletter" className="py-16 lg:py-20 bg-gradient-to-br from-deep-brown to-rich-brown border-t-2 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      {/* CTA Section for Brokers (Affiliate) - Sharp & Wise */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-8 lg:p-12 shadow-xl text-center">
              <h2 className="font-crimson text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Investing?
              </h2>
              <p className="text-lg md:text-xl text-stone-300 mb-8 leading-relaxed">
                Open an account with our recommended brokers and get started today.
              </p>
              <div className="flex gap-4 justify-center flex-wrap mb-6">
                <a
                  href="#"
                  className="px-6 lg:px-8 py-3 lg:py-4 bg-bronze-600 border-2 border-bronze-700 text-deep-brown font-bold text-sm lg:text-base uppercase tracking-wide rounded-none shadow-xl transition-all duration-200 hover:bg-bronze-700 hover:text-white hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-stone-700"
                  rel="nofollow sponsored"
                >
                  Interactive Brokers - $0 Commissions
                </a>
                <a
                  href="#"
                  className="px-6 lg:px-8 py-3 lg:py-4 bg-transparent border-2 border-bronze-600 text-bronze-600 font-bold text-sm lg:text-base uppercase tracking-wide rounded-none shadow-xl transition-all duration-200 hover:bg-bronze-600 hover:text-deep-brown hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-stone-700"
                  rel="nofollow sponsored"
                >
                  Compare Brokers
                </a>
              </div>
              <div className="bg-olive-800 bg-opacity-40 border-l-4 border-bronze-600 rounded-none px-6 py-4 inline-block">
                <p className="text-xs text-stone-300 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-bronze-600 rounded-none"></span>
                  We may receive compensation if you open an account through our links.
                  <span className="inline-block w-1.5 h-1.5 bg-bronze-600 rounded-none"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
