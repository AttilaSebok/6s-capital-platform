import Link from 'next/link'
import { ReactNode } from 'react'

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-primary-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-primary-600">
            Articles
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-semibold">
              {category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{author}</span>
            </div>

            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{publishDate}</span>
            </div>

            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-primary-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
            prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-img:rounded-lg prose-img:shadow-lg"
          >
            {children}
          </article>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Related Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">
                  Want More Investing Insights?
                </h3>
                <p className="text-primary-100">
                  Get our best articles, market analysis, and tips delivered to your inbox weekly.
                </p>
              </div>
              <a
                href="/#newsletter"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </a>
            </div>
          </div>

          {/* Back to Articles */}
          <div className="mt-8 text-center">
            <Link
              href="/articles"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
