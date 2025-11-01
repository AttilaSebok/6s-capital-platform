'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

interface Article {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  publishDate: string
  tags: string[]
  featured?: boolean
}

// Article database - in production, this would come from a CMS or database
const articles: Article[] = [
  {
    slug: 'how-to-start-investing-in-stocks',
    title: 'How to Start Investing in Stocks: Complete 2025 Guide',
    description: 'Everything you need to know to start your investing journey, from opening your first brokerage account to making your first investment.',
    category: 'Beginner Guides',
    readTime: '12 min read',
    publishDate: 'October 29, 2025',
    tags: ['beginner', 'stocks', 'getting-started', 'brokerage'],
    featured: true,
  },
  {
    slug: 'what-is-value-investing',
    title: 'What is Value Investing? Warren Buffett\'s Strategy Explained',
    description: 'Learn the principles of value investing and how legends like Warren Buffett and Benjamin Graham built fortunes with this timeless strategy.',
    category: 'Investment Strategies',
    readTime: '10 min read',
    publishDate: 'October 29, 2025',
    tags: ['value-investing', 'warren-buffett', 'strategy', 'fundamentals'],
    featured: true,
  },
  {
    slug: 'best-dividend-stocks-2025',
    title: '10 Best Dividend Stocks for Passive Income in 2025',
    description: 'Discover reliable dividend stocks that can generate consistent passive income while preserving and growing your capital.',
    category: 'Stock Analysis',
    readTime: '11 min read',
    publishDate: 'October 29, 2025',
    tags: ['dividends', 'passive-income', 'stocks', 'income-investing'],
    featured: true,
  },
  {
    slug: 'technical-analysis-101',
    title: 'Technical Analysis 101: Reading Stock Charts for Beginners',
    description: 'Master the basics of technical analysis, chart patterns, and indicators to time your trades more effectively.',
    category: 'Technical Analysis',
    readTime: '10 min read',
    publishDate: 'October 29, 2025',
    tags: ['technical-analysis', 'charts', 'indicators', 'trading'],
  },
  {
    slug: 'sp500-vs-nasdaq',
    title: 'S&P 500 vs NASDAQ: Which Index is Better for You?',
    description: 'A comprehensive comparison of the two most popular stock market indexes and which one fits your investment goals.',
    category: 'Market Analysis',
    readTime: '9 min read',
    publishDate: 'October 29, 2025',
    tags: ['sp500', 'nasdaq', 'index-funds', 'etf'],
  },
  {
    slug: 'understanding-pe-ratio',
    title: 'Understanding P/E Ratio: Is a Stock Cheap or Expensive?',
    description: 'Learn how to use the Price-to-Earnings ratio to evaluate stocks and avoid overpaying for investments.',
    category: 'Fundamental Analysis',
    readTime: '8 min read',
    publishDate: 'January 15, 2025',
    tags: ['pe-ratio', 'valuation', 'fundamentals', 'stock-analysis'],
  },
  {
    slug: '5-investing-mistakes-beginners',
    title: '5 Investing Mistakes That Cost Beginners Thousands',
    description: 'Learn the most common investing mistakes new investors make and how to avoid them before they damage your portfolio.',
    category: 'Beginner Guides',
    readTime: '10 min read',
    publishDate: 'January 16, 2025',
    tags: ['mistakes', 'beginner', 'lessons', 'portfolio-management'],
  },
  {
    slug: 'how-to-build-diversified-portfolio',
    title: 'How to Build a Diversified Portfolio: Step-by-Step',
    description: 'Learn how to construct a properly diversified investment portfolio that balances risk and reward for long-term wealth building.',
    category: 'Portfolio Strategy',
    readTime: '12 min read',
    publishDate: 'January 17, 2025',
    tags: ['diversification', 'portfolio', 'asset-allocation', 'risk-management'],
  },
  {
    slug: 'dividend-yield-vs-growth-stocks',
    title: 'Dividend Yield vs Growth: Which Strategy is Better?',
    description: 'Compare dividend income investing vs. growth investing strategies to find which approach fits your financial goals and timeline.',
    category: 'Investment Strategies',
    readTime: '10 min read',
    publishDate: 'January 18, 2025',
    tags: ['dividends', 'growth-stocks', 'strategy', 'income-investing'],
  },
  {
    slug: 'what-is-dollar-cost-averaging',
    title: 'What is Dollar-Cost Averaging? (With Real Examples)',
    description: 'Learn how dollar-cost averaging removes emotion from investing and why consistent investing beats trying to time the market.',
    category: 'Beginner Guides',
    readTime: '9 min read',
    publishDate: 'January 19, 2025',
    tags: ['dca', 'dollar-cost-averaging', 'investing-strategy', 'market-timing'],
  },
  {
    slug: 'how-to-read-financial-statements',
    title: 'How to Read Financial Statements: Complete Beginner\'s Guide',
    description: 'Learn to read income statements, balance sheets, and cash flow statements. Master financial analysis with real examples and step-by-step guidance.',
    category: 'Fundamental Analysis',
    readTime: '12 min read',
    publishDate: 'January 20, 2025',
    tags: ['financial-statements', 'income-statement', 'balance-sheet', 'cash-flow'],
  },
  {
    slug: 'etfs-vs-mutual-funds',
    title: 'ETFs vs Mutual Funds: Complete Comparison Guide',
    description: 'Detailed comparison of ETFs and mutual funds. Learn differences in fees, tax efficiency, trading, and which is better for your investment strategy.',
    category: 'Investment Strategies',
    readTime: '10 min read',
    publishDate: 'January 21, 2025',
    tags: ['etf', 'mutual-funds', 'expense-ratio', 'tax-efficiency'],
  },
  {
    slug: 'retirement-accounts-guide',
    title: 'Retirement Accounts Guide: 401k, IRA, and Roth IRA Explained',
    description: 'Complete guide to retirement accounts. Learn the differences between 401k, Traditional IRA, and Roth IRA, plus contribution limits and tax strategies.',
    category: 'Tax & Retirement',
    readTime: '11 min read',
    publishDate: 'January 22, 2025',
    tags: ['401k', 'ira', 'roth-ira', 'retirement', 'tax-strategy'],
  },
  {
    slug: 'stock-valuation-methods',
    title: 'Stock Valuation Methods: DCF, Comps, and Precedents',
    description: 'Learn professional stock valuation techniques including discounted cash flow (DCF), comparable companies, and precedent transactions with real examples.',
    category: 'Fundamental Analysis',
    readTime: '13 min read',
    publishDate: 'January 23, 2025',
    tags: ['valuation', 'dcf', 'comps', 'fundamental-analysis'],
  },
  {
    slug: 'market-cycles-economic-indicators',
    title: 'Understanding Market Cycles and Economic Indicators',
    description: 'Master the four stages of market cycles and key economic indicators like GDP, unemployment, yield curve, and VIX to position your portfolio strategically.',
    category: 'Market Analysis',
    readTime: '11 min read',
    publishDate: 'January 24, 2025',
    tags: ['market-cycles', 'economic-indicators', 'gdp', 'yield-curve', 'vix'],
  },
  {
    slug: 'options-trading-101',
    title: 'Options Trading 101: Calls, Puts, and Beginner Strategies',
    description: 'Learn options trading basics including calls vs puts, covered calls, cash-secured puts, and essential risk management strategies for beginners.',
    category: 'Investment Strategies',
    readTime: '12 min read',
    publishDate: 'January 25, 2025',
    tags: ['options', 'calls', 'puts', 'covered-calls', 'trading'],
  },
  {
    slug: 'real-estate-vs-stocks',
    title: 'Real Estate vs Stocks: Which Investment is Better?',
    description: 'Compare real estate and stock investments across returns, liquidity, leverage, taxes, and time commitment. Includes REITs as a hybrid option.',
    category: 'Investment Strategies',
    readTime: '10 min read',
    publishDate: 'January 26, 2025',
    tags: ['real-estate', 'stocks', 'reits', 'investment-comparison'],
  },
  {
    slug: 'tax-loss-harvesting',
    title: 'Tax-Loss Harvesting: Save Thousands in Taxes',
    description: 'Learn how tax-loss harvesting works, avoid wash-sale violations, and use this strategy to offset capital gains and reduce your tax bill.',
    category: 'Tax & Retirement',
    readTime: '9 min read',
    publishDate: 'January 27, 2025',
    tags: ['tax-loss-harvesting', 'taxes', 'capital-gains', 'wash-sale'],
  },
  {
    slug: 'how-to-analyze-earnings-reports',
    title: 'How to Analyze Quarterly Earnings Reports (10-Q Guide)',
    description: 'Learn to analyze earnings reports like a pro. Understand EPS, revenue growth, forward guidance, and earnings call red flags with real examples.',
    category: 'Fundamental Analysis',
    readTime: '11 min read',
    publishDate: 'January 28, 2025',
    tags: ['earnings-report', '10-q', 'eps', 'forward-guidance'],
  },
  {
    slug: 'emerging-markets-guide',
    title: 'International Investing: Emerging Markets Complete Guide',
    description: 'Learn about emerging market investing. Understand opportunities, risks, top countries, and best ETFs (VWO, IEMG) for portfolio diversification.',
    category: 'Portfolio Strategy',
    readTime: '10 min read',
    publishDate: 'January 29, 2025',
    tags: ['emerging-markets', 'international', 'vwo', 'iemg', 'diversification'],
  },
]

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

  // Get unique categories from articles
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(articles.map(a => a.category))).sort()
    return ['All', ...uniqueCategories]
  }, [])

  // Filter articles based on active category
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') {
      return articles
    }
    return articles.filter(a => a.category === activeCategory)
  }, [activeCategory])

  // Reset visible count when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setVisibleCount(6)
  }

  // Articles to display (limited by visibleCount)
  const displayedArticles = filteredArticles.slice(0, visibleCount)
  const hasMore = visibleCount < filteredArticles.length

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section - Dark Gradient */}
      <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight font-crimson">
              Investment Insights
            </h1>
            <p className="text-lg text-stone-300 font-light">
              Expert analysis for informed investors
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter - Sticky Navigation */}
      <div className="bg-slate-900 border-b border-stone-400 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                aria-pressed={activeCategory === cat}
                aria-label={`Filter by ${cat}`}
                className={`
                  px-4 py-2 text-sm font-semibold rounded-none
                  border-2 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900
                  ${activeCategory === cat
                    ? 'bg-bronze-600 text-white border-bronze-700 shadow-md'
                    : 'bg-white text-stone-900 border-stone-300 hover:bg-stone-50 hover:border-bronze-600'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid - 2 Column, Compact Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Article Count */}
          <div className="mb-6">
            <p className="text-sm font-medium text-stone-700">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
              {activeCategory !== 'All' && <span className="text-stone-500"> in {activeCategory}</span>}
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {displayedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block h-full"
              >
                <article className="
                  bg-white rounded-none border-2 border-stone-300
                  p-5 h-full flex flex-col
                  transition-all duration-200
                  hover:border-bronze-600 hover:shadow-xl
                  focus-within:ring-2 focus-within:ring-bronze-600
                ">
                  {/* Category Badge - Sharp */}
                  <span className="
                    inline-block px-3 py-1 mb-3 self-start
                    text-xs font-bold uppercase tracking-wider
                    bg-olive-100 text-olive-800
                    border border-olive-300
                  ">
                    {article.category}
                  </span>

                  {/* Title - Bold Crimson */}
                  <h2 className="
                    text-2xl font-bold mb-3 leading-tight
                    text-deep-brown font-crimson
                    group-hover:text-bronze-600 transition-colors
                  ">
                    {article.title}
                  </h2>

                  {/* Description - 2 lines max */}
                  <p className="
                    text-sm text-stone-700 mb-4 flex-grow
                    line-clamp-2
                  ">
                    {article.description}
                  </p>

                  {/* Meta Footer - Compact */}
                  <div className="
                    flex items-center justify-between
                    pt-3 border-t border-stone-300
                    text-xs text-stone-700
                  ">
                    <div className="flex items-center gap-2">
                      <time dateTime={article.publishDate}>{article.publishDate}</time>
                      <span aria-hidden="true">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <span className="
                      text-bronze-700 font-semibold
                      group-hover:translate-x-1 transition-transform inline-block
                    " aria-hidden="true">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="px-8 py-3 bg-bronze-600 border-2 border-bronze-700 text-white font-semibold rounded-none shadow-md hover:bg-bronze-700 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2"
              >
                Load More Articles
                <span className="ml-2 text-sm opacity-80">({filteredArticles.length - visibleCount} remaining)</span>
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-stone-700 mb-2">No articles found in this category.</p>
              <button
                onClick={() => handleCategoryChange('All')}
                className="text-bronze-600 font-semibold hover:text-bronze-700 underline"
              >
                View all articles
              </button>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="max-w-6xl mx-auto mt-16">
          <div
            className="rounded-none border-2 border-deep-brown shadow-xl p-8 md:p-12 bg-gradient-to-br from-deep-brown to-rich-brown"
          >
            <div className="text-center text-white">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-none mb-6 bg-bronze-600 border-2 border-bronze-700"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-4 font-crimson"
              >
                Never Miss an Article
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-stone-300">
                Get our latest articles, market insights, and investing tips delivered to your inbox every week
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="flex-1 px-6 py-3 rounded-none border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600 text-deep-brown"
                />
                <button
                  className="px-8 py-3 rounded-none font-semibold transition-all whitespace-nowrap shadow-lg hover:shadow-xl bg-bronze-600 border-2 border-bronze-700 text-white hover:bg-bronze-700 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-deep-brown"
                >
                  Subscribe
                </button>
              </div>

              <p className="text-sm mt-4 text-stone-300">
                Join 1,000+ investors. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
