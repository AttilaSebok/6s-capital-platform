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
]

export default function ArticlesPage() {
  const featuredArticles = articles.filter((a) => a.featured)
  const otherArticles = articles.filter((a) => !a.featured)
  const heroArticle = featuredArticles[0]
  const secondaryFeatured = featuredArticles.slice(1)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFCFC' }}>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white via-white" style={{ backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #FDFCFC)', borderBottom: '1px solid #E7E5E4' }}>
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
              style={{ background: 'linear-gradient(to right, #B8941F, #D4AF37)' }}
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
              <div className="h-px flex-1 ml-8" style={{ background: 'linear-gradient(to right, #D6D3D1, transparent)' }}></div>
            </div>

            {/* Hero Article - Large Featured Card */}
            {heroArticle && (
              <Link
                href={`/articles/${heroArticle.slug}`}
                className="group block mb-8"
              >
                <div
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border"
                  style={{ borderColor: '#E7E5E4' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B8941F' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E7E5E4' }}
                >
                  <div className="grid md:grid-cols-2">
                    {/* Image Placeholder */}
                    <div
                      className="h-64 md:h-auto flex items-center justify-center relative overflow-hidden"
                      style={{ background: 'linear-gradient(to bottom right, #5D4037, #6D4C41, #4A5D23)' }}
                    >
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                      <div className="relative text-white text-center p-8">
                        <div
                          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center backdrop-blur-sm"
                          style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                        >
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold uppercase tracking-wider">Featured Article</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                            style={{ backgroundColor: '#E8EDE0', color: '#4A5D23' }}
                          >
                            {heroArticle.category}
                          </span>
                          <span className="flex items-center text-sm" style={{ color: '#78716C' }}>
                            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {heroArticle.readTime}
                          </span>
                        </div>

                        <h3
                          className="text-2xl md:text-3xl font-bold mb-4 transition-colors"
                          style={{ fontFamily: "'Crimson Pro', Georgia, serif", color: '#3E2723' }}
                        >
                          {heroArticle.title}
                        </h3>

                        <p className="text-lg leading-relaxed mb-6" style={{ color: '#57534E' }}>
                          {heroArticle.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {heroArticle.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-1 rounded-full"
                              style={{ backgroundColor: '#F5F4F3', color: '#78716C' }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#E7E5E4' }}>
                        <span className="text-sm" style={{ color: '#A8A29E' }}>{heroArticle.publishDate}</span>
                        <span className="inline-flex items-center font-semibold group-hover:gap-3 gap-2 transition-all" style={{ color: '#6D4C41' }}>
                          Read Article
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Secondary Featured Articles - Grid */}
            {secondaryFeatured.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {secondaryFeatured.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group block"
                  >
                    <div
                      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full border hover:-translate-y-1"
                      style={{ borderColor: '#E7E5E4' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B8941F' }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E7E5E4' }}
                    >
                      {/* Image Placeholder */}
                      <div
                        className="h-48 flex items-center justify-center relative overflow-hidden"
                        style={{ background: 'linear-gradient(to bottom right, #5F762C, #8D6E63, #92732D)' }}
                      >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                        <div className="relative text-white text-center">
                          <svg className="w-12 h-12 mx-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                            style={{ backgroundColor: '#E8EDE0', color: '#4A5D23' }}
                          >
                            {article.category}
                          </span>
                          <span className="flex items-center text-xs" style={{ color: '#A8A29E' }}>
                            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {article.readTime}
                          </span>
                        </div>

                        <h3
                          className="text-xl font-bold mb-3 transition-colors line-clamp-2"
                          style={{ color: '#3E2723' }}
                        >
                          {article.title}
                        </h3>

                        <p className="mb-4 line-clamp-2 text-sm leading-relaxed" style={{ color: '#57534E' }}>
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between text-sm pt-3 border-t" style={{ borderColor: '#E7E5E4' }}>
                          <span style={{ color: '#A8A29E' }}>{article.publishDate}</span>
                          <span className="font-semibold group-hover:underline" style={{ color: '#6D4C41' }}>
                            Read more →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* All Articles Section */}
        {otherArticles.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif", color: '#3E2723' }}
              >
                All Articles
              </h2>
              <div className="h-px flex-1 ml-8" style={{ background: 'linear-gradient(to right, #D6D3D1, transparent)' }}></div>
            </div>

            <div className="space-y-4">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border"
                  style={{ borderColor: '#E7E5E4' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B8941F' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E7E5E4' }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                            style={{ backgroundColor: '#E8EDE0', color: '#4A5D23' }}
                          >
                            {article.category}
                          </span>
                          <span className="flex items-center text-xs" style={{ color: '#A8A29E' }}>
                            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {article.readTime}
                          </span>
                          <span className="text-xs" style={{ color: '#D6D3D1' }}>•</span>
                          <span className="text-xs" style={{ color: '#A8A29E' }}>{article.publishDate}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors" style={{ color: '#3E2723' }}>
                          {article.title}
                        </h3>

                        <p className="mb-3 leading-relaxed" style={{ color: '#57534E' }}>
                          {article.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded"
                              style={{ backgroundColor: '#F5F4F3', color: '#78716C' }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="md:ml-6 flex items-center">
                        <span className="inline-flex items-center font-semibold group-hover:gap-3 gap-2 transition-all whitespace-nowrap" style={{ color: '#6D4C41' }}>
                          Read Article
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl shadow-xl p-8 md:p-12 text-white overflow-hidden relative"
            style={{ background: 'linear-gradient(to right, #4E342E, #4A5D23)' }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

            <div className="relative text-center">
              <div
                className="inline-block p-3 rounded-full mb-6 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
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
                  style={{ background: 'linear-gradient(to right, #B8941F, #D4AF37)', color: 'white' }}
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
