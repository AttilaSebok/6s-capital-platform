'use client'

import Link from 'next/link'
import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getAllArticles, getCategories, isNewArticle, type Article } from '@/lib/articles'

function ArticlesContent() {
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
      {/* Hero Section - Dark Gradient (matching ArticleLayout) */}
      <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-crimson">
              Investment Insights
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-4 leading-relaxed font-light">
              Expert analysis and strategies for informed investors
            </p>
            {/* Article Count */}
            <div className="border-t-2 border-bronze-600 pt-4">
              <p className="text-sm font-medium text-stone-300">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
                {activeCategory !== 'All' && <span className="text-stone-400"> in {activeCategory}</span>}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter - Sticky Navigation (matching ArticleLayout dark bar) */}
      <div className="bg-slate-900 border-b border-stone-400 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max px-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  aria-pressed={activeCategory === cat}
                  aria-label={`Filter by ${cat}`}
                  className={`
                    px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-none
                    border transition-all duration-200 whitespace-nowrap
                    focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900
                    ${activeCategory === cat
                      ? 'bg-bronze-600 text-white border-bronze-700 shadow-md'
                      : 'bg-olive-100 text-olive-800 border-olive-300 active:bg-olive-200 active:border-olive-400'
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Centered Wrap Layout */}
          <div className="hidden md:flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                aria-pressed={activeCategory === cat}
                aria-label={`Filter by ${cat}`}
                className={`
                  px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-none
                  border transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900
                  ${activeCategory === cat
                    ? 'bg-bronze-600 text-white border-bronze-700 shadow-md'
                    : 'bg-olive-100 text-olive-800 border-olive-300 hover:bg-olive-200 hover:border-olive-400'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles List - Text-Only Design (matching ArticleLayout style) */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Articles Grid - Two Columns, Text-Only */}
          <div className="grid md:grid-cols-2 gap-6">
            {displayedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block"
              >
                <article className="
                  bg-white rounded-none border-2 border-stone-300
                  p-5 h-full flex flex-col
                  transition-all duration-200
                  hover:border-bronze-600 hover:shadow-xl
                  focus-within:ring-2 focus-within:ring-bronze-600
                ">
                  {/* Category Badge and NEW Badge - Sharp (matching ArticleLayout) */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="
                      inline-block px-3 py-1.5
                      text-xs font-bold uppercase tracking-wider
                      bg-olive-100 text-olive-800
                      border border-olive-300 rounded-none
                    ">
                      {article.category}
                    </span>
                    {isNewArticle(article.publishDate) && (
                      <span className="
                        inline-flex items-center px-2 py-1
                        text-xs font-bold uppercase tracking-wider
                        bg-soft-orange text-deep-brown
                        border-2 border-soft-orange-dark rounded-none
                        animate-pulse
                      ">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Title - Bold Crimson */}
                  <h2 className="
                    text-xl md:text-2xl font-bold mb-3 leading-tight
                    text-deep-brown font-crimson
                  ">
                    {article.title}
                  </h2>

                  {/* Description - 2-3 lines max */}
                  <p className="
                    text-sm md:text-base text-stone-700 mb-4 leading-relaxed flex-grow
                    line-clamp-3
                  ">
                    {article.description}
                  </p>

                  {/* Meta Footer - More Spacious (matching ArticleLayout meta) */}
                  <div className="
                    flex items-center gap-4
                    pt-4 border-t-2 border-stone-300
                    text-sm text-stone-700
                  ">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <time dateTime={article.publishDate}>{article.publishDate}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{article.readTime}</span>
                    </div>
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
              </Link>
            ))}
          </div>

          {/* Load More Button - Matching ArticleLayout button style */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="px-8 py-3 bg-bronze-600 border-2 border-bronze-700 text-white font-bold uppercase tracking-wide rounded-none shadow-md hover:bg-bronze-700 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2"
              >
                Load More Articles
                <span className="ml-2 text-sm font-normal normal-case opacity-90">({filteredArticles.length - visibleCount} remaining)</span>
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12 bg-white border-2 border-stone-300 rounded-none p-8">
              <p className="text-xl text-stone-700 mb-4 font-semibold">No articles found in this category.</p>
              <button
                onClick={() => handleCategoryChange('All')}
                className="text-bronze-600 font-semibold hover:text-bronze-700 underline underline-offset-2"
              >
                View all articles
              </button>
            </div>
          )}
        </div>

        {/* Newsletter CTA - Redesigned - Single Column Width - Centered */}
        <div className="max-w-7xl mx-auto mt-16 flex justify-center">
          <div className="bg-white rounded-none border-2 border-stone-300 shadow-xl p-6 w-full md:w-[calc(50%-0.75rem)]">
            <div className="flex items-start gap-4 mb-4">
              {/* Email Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-soft-orange rounded-none flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-1 text-deep-brown font-crimson">
                  Never Miss an Article
                </h3>
                <p className="text-stone-700 text-sm">
                  Get weekly market insights and investing tips in your inbox
                </p>
              </div>
            </div>

            {/* Email Form */}
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-2 border-stone-300 rounded-none text-stone-700 placeholder-stone-400 focus:outline-none focus:border-soft-orange transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-soft-orange border-2 border-soft-orange-dark text-white font-bold uppercase tracking-wide rounded-none shadow-md hover:bg-soft-orange-dark transition-all"
              >
                Subscribe
              </button>
              <p className="text-xs text-stone-500 text-center">
                Join 1,000+ investors • Unsubscribe anytime
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-bronze-600"></div>
          <p className="mt-4 text-stone-600">Loading articles...</p>
        </div>
      </div>
    }>
      <ArticlesContent />
    </Suspense>
  )
}
