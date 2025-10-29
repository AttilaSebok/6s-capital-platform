'use client'

import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import TableOfContents from './TableOfContents'
import ReadingProgressBar from './ReadingProgressBar'
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
  author = '6s Capital Team',
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
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Social Share Bar (Desktop only) */}
      <SocialShareBar title={title} description={description} />

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-stone-600" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-indigo-600 transition-colors">
            Articles
          </Link>
          <span>/</span>
          <span className="text-stone-900 line-clamp-1">{title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="bg-gradient-to-b from-white to-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                {category}
              </span>
            </div>

            {/* Title */}
            <h1
              id="article-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight tracking-tight"
              style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
            >
              {title}
            </h1>

            {/* Subtitle/Description */}
            <p className="text-xl md:text-2xl text-stone-600 mb-8 leading-relaxed font-light">
              {description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-600 pb-8 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  6S
                </div>
                <span className="font-medium">{author}</span>
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

          {/* Article Content */}
          <div className="min-w-0 w-full">
            <article
              className="prose prose-lg max-w-none
                prose-headings:scroll-mt-24
                prose-headings:font-bold
                prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-stone-200
                prose-h2:text-stone-900
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-stone-800
                prose-p:text-stone-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-lg
                prose-p:first-of-type:text-xl prose-p:first-of-type:leading-[1.7] prose-p:first-of-type:text-stone-800
                prose-a:text-indigo-600 prose-a:no-underline prose-a:font-medium hover:prose-a:underline prose-a:underline-offset-2
                prose-strong:text-stone-900 prose-strong:font-semibold
                prose-ul:my-6 prose-ul:space-y-3
                prose-ol:my-6 prose-ol:space-y-3
                prose-li:text-stone-700 prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-6 prose-blockquote:my-8
                prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-stone-800 prose-blockquote:leading-relaxed
                prose-code:bg-stone-100 prose-code:text-indigo-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-stone-900 prose-pre:text-stone-100 prose-pre:rounded-lg prose-pre:shadow-lg
                prose-img:rounded-lg prose-img:shadow-xl
                prose-hr:border-stone-300 prose-hr:my-12
                prose-table:border prose-table:border-stone-300
                prose-thead:bg-stone-100
                prose-th:border prose-th:border-stone-300 prose-th:p-3
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
              <div className="mt-12 pt-8 border-t border-stone-200" style={{ maxWidth: '720px' }}>
                <h3 className="text-lg font-semibold text-stone-900 mb-4">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-stone-200 text-stone-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-stone-300 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter CTA */}
            <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-8 text-white" style={{ maxWidth: '720px' }}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Want More Investing Insights?
                  </h3>
                  <p className="text-indigo-100 text-lg">
                    Get our best articles, market analysis, and tips delivered weekly.
                  </p>
                </div>
                <a
                  href="/#newsletter"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all hover:shadow-lg whitespace-nowrap"
                >
                  Subscribe Now
                </a>
              </div>
            </div>

            {/* Back to Articles */}
            <div className="mt-8 text-center" style={{ maxWidth: '720px' }}>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium hover:gap-3 transition-all"
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
