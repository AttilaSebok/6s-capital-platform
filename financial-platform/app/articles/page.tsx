'use client'

import Link from 'next/link'

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
  const featuredArticles = articles.filter((a) => a.featured)
  const otherArticles = articles.filter((a) => !a.featured)
  const heroArticle = featuredArticles[0]
  const secondaryFeatured = featuredArticles.slice(1)

  // Group articles by category
  const articlesByCategory: { [key: string]: Article[] } = {}
  articles.forEach((article) => {
    if (!articlesByCategory[article.category]) {
      articlesByCategory[article.category] = []
    }
    articlesByCategory[article.category].push(article)
  })

  const categories = Object.keys(articlesByCategory).sort()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFCFC' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E7E5E4' }}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: "'Crimson Pro', Georgia, serif", color: '#3E2723' }}
            >
              Investment Insights
            </h1>
            <p className="text-xl leading-relaxed font-light" style={{ color: '#57534E' }}>
              Expert guides, market analysis, and educational content to help you become a better investor
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories Filter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              className="px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-all text-white"
              style={{ backgroundColor: '#B8941F' }}
            >
              All Articles
            </button>
            <button
              className="bg-white px-5 py-2.5 rounded-full font-medium text-sm border transition-all"
              style={{ color: '#4E342E', borderColor: '#D6D3D1' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#B8941F'
                e.currentTarget.style.backgroundColor = '#F9F5E8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D6D3D1'
                e.currentTarget.style.backgroundColor = 'white'
              }}
            >
              Beginner Guides
            </button>
            <button
              className="bg-white px-5 py-2.5 rounded-full font-medium text-sm border transition-all"
              style={{ color: '#4E342E', borderColor: '#D6D3D1' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#B8941F'
                e.currentTarget.style.backgroundColor = '#F9F5E8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D6D3D1'
                e.currentTarget.style.backgroundColor = 'white'
              }}
            >
              Investment Strategies
            </button>
            <button
              className="bg-white px-5 py-2.5 rounded-full font-medium text-sm border transition-all"
              style={{ color: '#4E342E', borderColor: '#D6D3D1' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#B8941F'
                e.currentTarget.style.backgroundColor = '#F9F5E8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D6D3D1'
                e.currentTarget.style.backgroundColor = 'white'
              }}
            >
              Stock Analysis
            </button>
            <button
              className="bg-white px-5 py-2.5 rounded-full font-medium text-sm border transition-all"
              style={{ color: '#4E342E', borderColor: '#D6D3D1' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#B8941F'
                e.currentTarget.style.backgroundColor = '#F9F5E8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D6D3D1'
                e.currentTarget.style.backgroundColor = 'white'
              }}
            >
              Technical Analysis
            </button>
          </div>
        </div>

        {/* Featured Articles Section */}
        {featuredArticles.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif", color: '#3E2723' }}
              >
                Featured Articles
              </h2>
              <div className="h-px flex-1 ml-8" style={{ backgroundColor: '#E7E5E4' }}></div>
            </div>

            {/* Hero Article - Text Only */}
            {heroArticle && (
              <Link
                href={`/articles/${heroArticle.slug}`}
                className="group block mb-6"
              >
                <article
                  className="bg-white rounded-lg p-8 border-l-4 transition-all duration-200"
                  style={{ borderColor: '#B8941F' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: '#B8941F' }}
                    >
                      Featured
                    </span>
                    <span className="text-xs" style={{ color: '#D6D3D1' }}>•</span>
                    <span
                      className="text-xs font-medium uppercase"
                      style={{ color: '#4A5D23' }}
                    >
                      {heroArticle.category}
                    </span>
                  </div>

                  <h3
                    className="text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:underline"
                    style={{ fontFamily: "'Crimson Pro', Georgia, serif", color: '#3E2723' }}
                  >
                    {heroArticle.title}
                  </h3>

                  <p className="text-lg leading-relaxed mb-6" style={{ color: '#57534E' }}>
                    {heroArticle.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#E7E5E4' }}>
                    <div className="flex items-center gap-4 text-sm" style={{ color: '#A8A29E' }}>
                      <span>{heroArticle.publishDate}</span>
                      <span>•</span>
                      <span>{heroArticle.readTime}</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#6D4C41' }}>
                      Read Article →
                    </span>
                  </div>
                </article>
              </Link>
            )}

            {/* Secondary Featured Articles - Text Only Grid */}
            {secondaryFeatured.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                {secondaryFeatured.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group block"
                  >
                    <article
                      className="bg-white rounded-lg p-6 border-l-2 transition-all duration-200 h-full"
                      style={{ borderColor: '#E7E5E4' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B8941F' }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E7E5E4' }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-medium uppercase"
                          style={{ color: '#4A5D23' }}
                        >
                          {article.category}
                        </span>
                        <span className="text-xs" style={{ color: '#D6D3D1' }}>•</span>
                        <span className="text-xs" style={{ color: '#A8A29E' }}>
                          {article.readTime}
                        </span>
                      </div>

                      <h3
                        className="text-xl font-bold mb-2 leading-tight group-hover:underline"
                        style={{ fontFamily: "'Crimson Pro', Georgia, serif", color: '#3E2723' }}
                      >
                        {article.title}
                      </h3>

                      <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: '#57534E' }}>
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between text-xs pt-3 border-t" style={{ borderColor: '#E7E5E4' }}>
                        <span style={{ color: '#A8A29E' }}>{article.publishDate}</span>
                        <span className="font-semibold" style={{ color: '#6D4C41' }}>
                          Read →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Articles by Category */}
        {categories.map((category) => (
          <div key={category} className="max-w-6xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif", color: '#3E2723' }}
              >
                {category}
              </h2>
              <div className="h-px flex-1 ml-8" style={{ backgroundColor: '#E7E5E4' }}></div>
            </div>

            <div className="space-y-3">
              {articlesByCategory[category].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block"
                >
                  <article
                    className="bg-white rounded-lg p-6 border-l-2 transition-all duration-200"
                    style={{ borderColor: '#E7E5E4' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B8941F' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E7E5E4' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs" style={{ color: '#A8A29E' }}>
                            {article.readTime}
                          </span>
                          <span className="text-xs" style={{ color: '#D6D3D1' }}>•</span>
                          <span className="text-xs" style={{ color: '#A8A29E' }}>{article.publishDate}</span>
                        </div>

                        <h3
                          className="text-xl md:text-2xl font-bold mb-2 leading-tight group-hover:underline"
                          style={{ fontFamily: "'Crimson Pro', Georgia, serif", color: '#3E2723' }}
                        >
                          {article.title}
                        </h3>

                        <p className="text-sm md:text-base leading-relaxed" style={{ color: '#57534E' }}>
                          {article.description}
                        </p>
                      </div>

                      <div className="md:ml-6 flex items-center md:justify-end">
                        <span className="text-sm font-semibold" style={{ color: '#6D4C41' }}>
                          Read →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Newsletter CTA */}
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden relative"
            style={{ backgroundColor: '#4E342E' }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

            <div className="relative text-center text-white">
              <div
                className="inline-block p-3 rounded-full mb-6"
                style={{ backgroundColor: '#6B5416' }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              >
                Never Miss an Article
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#F9F5E8' }}>
                Get our latest articles, market insights, and investing tips delivered to your inbox every week
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ color: '#3E2723', backgroundColor: 'white', borderColor: '#E7E5E4' }}
                />
                <button
                  className="px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#B8941F', color: 'white' }}
                >
                  Subscribe
                </button>
              </div>

              <p className="text-sm mt-4" style={{ color: '#F9F5E8', opacity: 0.8 }}>
                Join 1,000+ investors. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
