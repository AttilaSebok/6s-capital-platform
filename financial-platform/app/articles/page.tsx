'use client'

import Link from 'next/link'
import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getAllArticles, getCategories, type Article } from '@/lib/articles'

export default function ArticlesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryParam = searchParams.get('category') || 'All'

  const [activeCategory, setActiveCategory] = useState(categoryParam)
  const [visibleCount, setVisibleCount] = useState(6)

  // Get articles and categories from central registry
  const articles = getAllArticles()
  const categories = getCategories()

  // Sync activeCategory with URL parameter
  useEffect(() => {
    setActiveCategory(categoryParam)
    setVisibleCount(6)
  }, [categoryParam])

  // Filter articles based on active category
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') {
      return articles
    }
    return articles.filter(a => a.category === activeCategory)
  }, [activeCategory, articles])

  // Reset visible count when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setVisibleCount(6)
    // Update URL
    if (cat === 'All') {
      router.push('/articles')
    } else {
      router.push(`/articles?category=${encodeURIComponent(cat)}`)
    }
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
                className="px-8 py-3 bg-bronze-600 border-2 border-bronze-700 text-deep-brown font-bold uppercase tracking-wide rounded-none shadow-md hover:bg-bronze-700 hover:text-white hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2"
              >
                Load More Articles
                <span className="ml-2 text-sm font-normal normal-case opacity-80">({filteredArticles.length - visibleCount} remaining)</span>
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

        {/* Newsletter CTA - Modern Compact Design */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white border-2 border-soft-orange rounded-none shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-soft-orange rounded-none flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 font-crimson text-deep-brown">
                  Never Miss an Article
                </h2>
                <p className="text-sm md:text-base text-stone-600">
                  Get weekly market insights and investing tips in your inbox
                </p>
              </div>

              {/* Form */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="flex-1 sm:w-64 px-4 py-2.5 border-2 border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-soft-orange focus:border-soft-orange text-deep-brown text-sm"
                  />
                  <button
                    className="px-6 py-2.5 bg-soft-orange border-2 border-soft-orange-dark text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none hover:bg-soft-orange-dark hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-soft-orange whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs mt-2 text-stone-500 text-center sm:text-left">
                  Join 1,000+ investors • Unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
