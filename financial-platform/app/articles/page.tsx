import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Investment Articles & Market Insights | 6s Capital',
  description: 'Expert investment guides, market analysis, and financial education. Learn about stocks, dividends, technical analysis, and building wealth.',
}

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
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight"
              style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            >
              Investment Insights
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed font-light">
              Expert guides, market analysis, and educational content to help you become a better investor
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories Filter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-all">
              All Articles
            </button>
            <button className="bg-white text-stone-700 px-5 py-2.5 rounded-full font-medium text-sm border border-stone-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all">
              Beginner Guides
            </button>
            <button className="bg-white text-stone-700 px-5 py-2.5 rounded-full font-medium text-sm border border-stone-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all">
              Investment Strategies
            </button>
            <button className="bg-white text-stone-700 px-5 py-2.5 rounded-full font-medium text-sm border border-stone-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all">
              Stock Analysis
            </button>
            <button className="bg-white text-stone-700 px-5 py-2.5 rounded-full font-medium text-sm border border-stone-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all">
              Technical Analysis
            </button>
          </div>
        </div>

        {/* Featured Articles Section */}
        {featuredArticles.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              >
                Featured Articles
              </h2>
              <div className="h-px flex-1 ml-8 bg-gradient-to-r from-stone-300 to-transparent"></div>
            </div>

            {/* Hero Article - Large Featured Card */}
            {heroArticle && (
              <Link
                href={`/articles/${heroArticle.slug}`}
                className="group block mb-8"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-200 hover:border-indigo-300">
                  <div className="grid md:grid-cols-2">
                    {/* Image Placeholder */}
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 h-64 md:h-auto flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                      <div className="relative text-white text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
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
                          <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {heroArticle.category}
                          </span>
                          <span className="flex items-center text-sm text-stone-600">
                            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {heroArticle.readTime}
                          </span>
                        </div>

                        <h3
                          className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 group-hover:text-indigo-600 transition-colors"
                          style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
                        >
                          {heroArticle.title}
                        </h3>

                        <p className="text-stone-600 text-lg leading-relaxed mb-6">
                          {heroArticle.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {heroArticle.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                        <span className="text-sm text-stone-500">{heroArticle.publishDate}</span>
                        <span className="inline-flex items-center text-indigo-600 font-semibold group-hover:gap-3 gap-2 transition-all">
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
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full border border-stone-200 hover:border-indigo-300 hover:-translate-y-1">
                      {/* Image Placeholder */}
                      <div className="bg-gradient-to-br from-indigo-400 to-purple-500 h-48 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
                        <div className="relative text-white text-center">
                          <svg className="w-12 h-12 mx-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {article.category}
                          </span>
                          <span className="flex items-center text-xs text-stone-500">
                            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-stone-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between text-sm pt-3 border-t border-stone-200">
                          <span className="text-stone-500">{article.publishDate}</span>
                          <span className="text-indigo-600 font-semibold group-hover:underline">
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
                className="text-3xl md:text-4xl font-bold text-stone-900"
                style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
              >
                All Articles
              </h2>
              <div className="h-px flex-1 ml-8 bg-gradient-to-r from-stone-300 to-transparent"></div>
            </div>

            <div className="space-y-4">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-stone-200 hover:border-indigo-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {article.category}
                          </span>
                          <span className="flex items-center text-xs text-stone-500">
                            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {article.readTime}
                          </span>
                          <span className="text-xs text-stone-400">•</span>
                          <span className="text-xs text-stone-500">{article.publishDate}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-stone-600 mb-3 leading-relaxed">
                          {article.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="md:ml-6 flex items-center">
                        <span className="inline-flex items-center text-indigo-600 font-semibold group-hover:gap-3 gap-2 transition-all whitespace-nowrap">
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
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

            <div className="relative text-center">
              <div className="inline-block p-3 bg-white bg-opacity-10 rounded-full mb-6 backdrop-blur-sm">
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
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get our latest articles, market insights, and investing tips delivered to your inbox every week
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                />
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all whitespace-nowrap shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>

              <p className="text-sm text-indigo-200 mt-4">
                Join 1,000+ investors. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
