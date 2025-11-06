'use client'

import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import TableOfContents from './TableOfContents'
import BackToTopButton from './BackToTopButton'
import SocialShareBar from './SocialShareBar'

interface ArticleLayoutProps {
  children: ReactNode
  title: string
  description: string
  author?: string
  publishDate: string
  readTime?: string
  category?: string
  tags?: string[]
}

interface Heading {
  id: string
  text: string
  level: number
}

export default function ArticleLayout({
  children,
  title,
  description,
  author = 'Money365.Market Team',
  publishDate,
  readTime = '10 min read',
  category = 'Investing',
  tags = [],
}: ArticleLayoutProps) {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    // Extract headings from article for TOC
    const article = document.querySelector('article')
    if (!article) return

    const headingElements = article.querySelectorAll('h2, h3')
    const extractedHeadings: Heading[] = Array.from(headingElements).map((heading, index) => {
      // Create ID if doesn't exist
      if (!heading.id) {
        const id = heading.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || `heading-${index}`
        heading.id = id
      }

      return {
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName[1]),
      }
    })

    setHeadings(extractedHeadings)
  }, [children])

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Social Share Bar (Desktop only) */}
      <SocialShareBar title={title} description={description} />

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Breadcrumb - Dark Sharp */}
      <div className="bg-slate-900 border-b border-stone-400">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-stone-300" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-bronze-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-bronze-600 transition-colors">
              Articles
            </Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header - Sharp & Wise Dark Gradient */}
      <header className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge - Sharp Olive */}
            <div className="mb-6">
              <span className="inline-block bg-olive-100 text-olive-800 px-3 py-1.5 rounded-none border border-olive-300 text-xs font-bold uppercase tracking-wider">
                {category}
              </span>
            </div>

            {/* Title - White on Dark */}
            <h1
              id="article-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-crimson"
            >
              {title}
            </h1>

            {/* Subtitle/Description */}
            <p className="text-xl md:text-2xl text-stone-300 mb-8 leading-relaxed font-light">
              {description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-300 pb-8 border-b-2 border-bronze-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-soft-orange border-2 border-soft-orange-dark rounded-none flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.86-.96-7-5.15-7-9.5V8.47l7-3.89 7 3.89V11c0 4.35-3.14 8.54-7 9.5z"/>
                    <path d="M9.5 11L8 12.5l3 3 5-5L14.5 9l-3.5 3.5z"/>
                  </svg>
                </div>
                <span className="font-medium text-white">{author}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={publishDate}>{publishDate}</time>
              </div>

              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className={`max-w-7xl mx-auto ${headings.length > 0 ? 'grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12' : 'flex justify-center'}`}>
          {/* Table of Contents - Desktop Sidebar */}
          {headings.length > 0 && (
            <TableOfContents headings={headings} />
          )}

          {/* Article Content - Sharp & Wise Typography */}
          <div className="min-w-0 w-full">
            <article
              className="prose prose-lg max-w-none
                prose-headings:scroll-mt-24
                prose-headings:font-bold
                prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-bronze-600
                prose-h2:text-deep-brown prose-h2:font-crimson
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-rich-brown prose-h3:font-crimson
                prose-p:text-stone-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-lg
                prose-p:first-of-type:text-xl prose-p:first-of-type:leading-[1.7] prose-p:first-of-type:text-stone-800
                prose-a:text-bronze-600 prose-a:no-underline prose-a:font-medium hover:prose-a:underline prose-a:underline-offset-2
                prose-strong:text-deep-brown prose-strong:font-semibold
                prose-ul:my-6 prose-ul:space-y-3
                prose-ol:my-6 prose-ol:space-y-3
                prose-li:text-stone-700 prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-bronze-600 prose-blockquote:pl-6 prose-blockquote:my-8
                prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-stone-800 prose-blockquote:leading-relaxed
                prose-code:bg-stone-200 prose-code:text-bronze-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none prose-code:text-sm prose-code:font-mono
                prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-slate-900 prose-pre:text-stone-100 prose-pre:rounded-none prose-pre:shadow-xl prose-pre:border-2 prose-pre:border-stone-400
                prose-img:rounded-none prose-img:shadow-xl prose-img:border-2 prose-img:border-stone-300
                prose-hr:border-stone-400 prose-hr:my-12 prose-hr:border-t-2
                prose-table:border-2 prose-table:border-stone-300 prose-table:rounded-none
                prose-thead:bg-stone-200
                prose-th:border prose-th:border-stone-300 prose-th:p-3 prose-th:font-bold prose-th:text-deep-brown
                prose-td:border prose-td:border-stone-300 prose-td:p-3
              "
              style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                maxWidth: '720px'
              }}
            >
              {children}
            </article>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-12 pt-8 border-t-2 border-stone-300" style={{ maxWidth: '720px' }}>
                <h3 className="text-lg font-semibold text-deep-brown mb-4 font-crimson">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-stone-200 text-stone-800 px-3 py-1.5 rounded-none border border-stone-300 text-sm font-medium hover:bg-olive-100 hover:border-olive-300 hover:text-olive-800 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter CTA - Sharp & Wise */}
            <div className="mt-12 bg-gradient-to-br from-deep-brown to-rich-brown rounded-none border-2 border-deep-brown shadow-xl p-8 text-white" style={{ maxWidth: '720px' }}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 font-crimson">
                    Want More Investing Insights?
                  </h3>
                  <p className="text-stone-300 text-lg">
                    Get our best articles, market analysis, and tips delivered weekly.
                  </p>
                </div>
                <a
                  href="/#newsletter"
                  className="bg-bronze-600 border-2 border-bronze-700 text-white px-8 py-3 rounded-none font-semibold hover:bg-bronze-700 transition-all hover:shadow-lg whitespace-nowrap"
                >
                  Subscribe Now
                </a>
              </div>
            </div>

            {/* Back to Articles */}
            <div className="mt-8 text-center" style={{ maxWidth: '720px' }}>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-bronze-600 hover:text-bronze-700 font-medium hover:gap-3 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
