'use client'

import { useState, useEffect } from 'react'

type NewsArticle = {
  id: number
  category: string
  datetime: number
  headline: string
  image: string
  related: string
  source: string
  summary: string
  url: string
}

export default function MarketNewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('top')
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/market-news')

      if (!response.ok) {
        throw new Error('Failed to fetch market news')
      }

      const data = await response.json()
      setNews(data.news)
      setLastUpdated(new Date().toLocaleString())
      setError(null)
    } catch (err) {
      setError('Unable to load market news. Please try again later.')
      console.error('Error fetching news:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatTimeAgo = (timestamp: number) => {
    const now = Math.floor(Date.now() / 1000)
    const diff = now - timestamp

    if (diff < 3600) {
      const minutes = Math.floor(diff / 60)
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600)
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`
    } else {
      const days = Math.floor(diff / 86400)
      return `${days} day${days !== 1 ? 's' : ''} ago`
    }
  }

  const categories = ['top', 'company', 'crypto', 'forex', 'merger']

  const getCategoryCount = (category: string) => {
    return news.filter(article => article.category === category).length
  }

  const filteredNews = news.filter(article => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section - Dark Gradient (matching Articles page) */}
      <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 py-6 md:py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight tracking-tight font-crimson">
              Market News
            </h1>
            <p className="text-base md:text-2xl text-stone-300 mb-3 md:mb-4 leading-relaxed font-light">
              Stay informed with the latest financial news and market updates from trusted sources worldwide
            </p>
            {/* News Count & Last Updated */}
            <div className="border-t-2 border-bronze-600 pt-3 md:pt-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-sm font-medium text-stone-300">
                  {filteredNews.length} {filteredNews.length === 1 ? 'article' : 'articles'}
                  <span className="text-stone-400"> in {selectedCategory}</span>
                </p>
                {lastUpdated && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-stone-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-stone-300 text-xs md:text-sm">
                      Last updated: {lastUpdated}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter - Sticky Navigation (matching Articles page) */}
      <div className="bg-slate-900 border-b border-stone-400 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          {/* Mobile: Horizontal Scroll with Arrow Indicators */}
          <div className="md:hidden relative">
            {/* Left Arrow Indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10 flex items-center justify-start">
              <svg className="w-4 h-4 text-soft-orange ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            {/* Scrollable Categories */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 min-w-max px-1">
                {categories.map((category) => {
                  const count = getCategoryCount(category)
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`
                        px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-none
                        border transition-all duration-200 whitespace-nowrap
                        focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900
                        ${selectedCategory === category
                          ? 'bg-bronze-600 text-white border-bronze-700 shadow-md'
                          : 'bg-olive-100 text-olive-800 border-olive-300 active:bg-olive-200 active:border-olive-400'
                        }
                      `}
                      aria-label={`Filter by ${category}, ${count} articles`}
                      aria-pressed={selectedCategory === category}
                    >
                      {category}
                    </button>
                  )
                })}
                {/* Refresh Button inline with categories on mobile */}
                <button
                  onClick={fetchNews}
                  disabled={loading}
                  className="px-4 py-2 bg-olive-100 border border-olive-300 text-olive-800 active:bg-olive-200 active:border-olive-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-none whitespace-nowrap"
                  aria-label="Refresh news articles"
                >
                  <svg
                    className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Arrow Indicator */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10 flex items-center justify-end">
              <svg className="w-4 h-4 text-soft-orange mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Desktop: Centered Wrap Layout */}
          <div className="hidden md:flex items-center justify-between gap-4 max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 flex-grow justify-center">
              {categories.map((category) => {
                const count = getCategoryCount(category)
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-none
                      border transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900
                      ${selectedCategory === category
                        ? 'bg-bronze-600 text-white border-bronze-700 shadow-md'
                        : 'bg-olive-100 text-olive-800 border-olive-300 hover:bg-olive-200 hover:border-olive-400'
                      }
                    `}
                    aria-label={`Filter by ${category}, ${count} articles`}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            <button
              onClick={fetchNews}
              disabled={loading}
              className="flex-shrink-0 px-4 py-2 bg-olive-100 border border-olive-300 text-olive-800 hover:bg-olive-200 hover:border-olive-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group rounded-none"
              aria-label="Refresh news articles"
            >
              <svg
                className={`w-5 h-5 ${loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-300'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* News List - Text-Only Design (matching Articles page) */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Skeleton Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white border-2 border-stone-300 rounded-none p-5 animate-pulse">
                  {/* Category Badge */}
                  <div className="h-5 bg-stone-200 rounded-none w-20 mb-3"></div>

                  {/* Headline */}
                  <div className="space-y-2 mb-3">
                    <div className="h-6 bg-stone-200 rounded-none"></div>
                    <div className="h-6 bg-stone-200 rounded-none w-3/4"></div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-stone-200 rounded-none"></div>
                    <div className="h-4 bg-stone-200 rounded-none"></div>
                    <div className="h-4 bg-stone-200 rounded-none w-2/3"></div>
                  </div>

                  {/* Meta Footer */}
                  <div className="flex items-center gap-4 pt-3 border-t-2 border-stone-200">
                    <div className="h-4 bg-stone-200 rounded-none w-24"></div>
                    <div className="h-4 bg-stone-200 rounded-none w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-white border-2 border-red-600 rounded-none p-8 text-center">
              <p className="text-red-700 text-lg mb-4">{error}</p>
              <button
                onClick={fetchNews}
                className="px-8 py-3 bg-bronze-600 border-2 border-bronze-700 text-white font-bold uppercase tracking-wide rounded-none shadow-md hover:bg-bronze-700 hover:shadow-xl transition-all duration-200"
              >
                Try Again
              </button>
            </div>
          )}

          {/* News List - Two Columns, Text-Only (matching Articles page) */}
          {!loading && !error && (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredNews.map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <article className="
                    bg-white rounded-none border-2 border-stone-300
                    p-5 h-full flex flex-col
                    transition-all duration-200
                    hover:border-bronze-600 hover:shadow-xl
                    focus-within:ring-2 focus-within:ring-bronze-600
                  ">
                    {/* Category Badge and Time Badge */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="
                        inline-block px-3 py-1.5
                        text-xs font-bold uppercase tracking-wider
                        bg-olive-100 text-olive-800
                        border border-olive-300 rounded-none
                      ">
                        {article.category}
                      </span>
                      <span className="
                        inline-block px-2 py-1
                        text-xs font-medium
                        bg-stone-100 text-stone-700
                        border border-stone-300 rounded-none
                      ">
                        {formatTimeAgo(article.datetime)}
                      </span>
                    </div>

                    {/* Headline - Compact Bold Crimson (matching Articles page) */}
                    <h2 className="
                      text-xl md:text-2xl font-bold mb-3 leading-tight
                      text-deep-brown font-crimson
                    ">
                      {article.headline}
                    </h2>

                    {/* Summary - Compact (matching Articles page) */}
                    <p className="
                      text-sm md:text-base text-stone-700 mb-4 leading-relaxed flex-grow
                      line-clamp-3
                    ">
                      {article.summary}
                    </p>

                    {/* Meta Footer - Compact */}
                    <div className="
                      flex items-center gap-4 flex-wrap
                      pt-3 border-t-2 border-stone-300
                      text-sm text-stone-700
                    ">
                      {/* Source Badge */}
                      <span className="
                        inline-flex items-center px-2 py-1
                        text-xs font-bold uppercase tracking-wider
                        bg-stone-100 text-stone-600
                        border border-stone-300 rounded-none
                      ">
                        {article.source}
                      </span>

                      {/* Related Stocks - Compact */}
                      {article.related && (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {article.related.split(',').slice(0, 2).map((ticker, index) => (
                            <span
                              key={`${article.id}-ticker-${index}-${ticker.trim()}`}
                              className="bg-stone-100 text-bronze-700 px-2 py-1 text-xs font-mono uppercase font-bold border border-stone-300 rounded-none"
                            >
                              ${ticker.trim()}
                            </span>
                          ))}
                        </div>
                      )}

                      <span className="
                        text-bronze-600 font-semibold ml-auto
                        group-hover:gap-2 inline-flex items-center transition-all
                      ">
                        Read Article
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          )}

          {/* Empty State (matching Articles page) */}
          {!loading && !error && filteredNews.length === 0 && (
            <div className="text-center py-12 bg-white border-2 border-stone-300 rounded-none p-8">
              <p className="text-xl text-stone-700 mb-4 font-semibold">
                No articles found in {selectedCategory}.
              </p>
              <button
                onClick={() => setSelectedCategory('top')}
                className="text-bronze-600 font-semibold hover:text-bronze-700 underline underline-offset-2"
              >
                View top articles
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
