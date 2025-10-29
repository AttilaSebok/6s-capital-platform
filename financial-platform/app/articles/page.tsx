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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Investment Articles & Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Expert guides, market analysis, and educational content to help you become a better investor
          </p>
        </div>

        {/* Categories Filter (Future Enhancement) */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold">
              All Articles
            </button>
            <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Beginner Guides
            </button>
            <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Investment Strategies
            </button>
            <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Stock Analysis
            </button>
            <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Technical Analysis
            </button>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{article.publishDate}</span>
                      <span className="text-primary-600 dark:text-primary-400 group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        {otherArticles.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              All Articles
            </h2>
            <div className="space-y-6">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {article.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:ml-6 text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {article.publishDate}
                      </div>
                      <span className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:underline">
                        Read Article
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Never Miss an Article
            </h3>
            <p className="text-xl text-primary-100 mb-6">
              Get our latest articles, market insights, and investing tips delivered to your inbox every week
            </p>
            <a
              href="/#newsletter"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
