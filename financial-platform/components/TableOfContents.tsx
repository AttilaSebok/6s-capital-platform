'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [progress, setProgress] = useState(0)
  const [readingTime, setReadingTime] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Calculate initial reading time (words / 200 wpm)
    const articleText = document.querySelector('article')?.textContent || ''
    const wordCount = articleText.split(/\s+/).length
    const minutes = Math.ceil(wordCount / 200)
    setReadingTime(minutes)

    // Intersection Observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -66%',
      }
    )

    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    // Scroll progress tracking
    const handleScroll = () => {
      const article = document.querySelector('article')
      if (!article) return

      const articleTop = article.offsetTop
      const articleHeight = article.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      const scrolled = scrollY - articleTop + windowHeight / 2
      const total = articleHeight
      const percentage = Math.min(Math.max((scrolled / total) * 100, 0), 100)

      setProgress(percentage)

      // Update remaining reading time
      const remainingPercentage = 100 - percentage
      const remainingMinutes = Math.ceil((readingTime * remainingPercentage) / 100)
      setReadingTime(remainingMinutes)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) observer.unobserve(element)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings, readingTime])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setIsOpen(false) // Close mobile menu after click
  }

  // Filter to show only H2 and H3
  const visibleHeadings = headings.filter((h) => h.level === 2 || h.level === 3)

  return (
    <>
      {/* Mobile TOC Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-20 right-4 z-40 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-all"
        aria-label="Open table of contents"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile TOC Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Table of Contents</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close table of contents"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-6 py-6" aria-label="Table of Contents">
              {visibleHeadings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    block w-full text-left py-2 px-3 rounded-lg transition-all text-sm
                    ${heading.level === 3 ? 'ml-4' : ''}
                    ${
                      activeId === heading.id
                        ? 'bg-indigo-100 text-indigo-900 font-semibold border-l-3 border-indigo-600'
                        : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-700'
                    }
                  `}
                >
                  {heading.text}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop TOC Sidebar */}
      <aside className="hidden md:block sticky top-32 h-fit">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4 pb-3 border-b border-gray-200">
            Table of Contents
          </h3>

          <nav aria-label="Table of Contents" className="space-y-1">
            {visibleHeadings.map((heading) => (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className={`
                  block w-full text-left py-2 px-3 rounded-lg transition-all text-sm leading-snug
                  ${heading.level === 3 ? 'ml-4 text-xs' : ''}
                  ${
                    activeId === heading.id
                      ? 'bg-indigo-100 text-indigo-900 font-semibold border-l-3 border-indigo-600 pl-2'
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-700'
                  }
                `}
                aria-current={activeId === heading.id ? 'true' : undefined}
              >
                {heading.text}
              </button>
            ))}
          </nav>

          {/* Reading Progress */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime > 0 ? `${readingTime} min left` : 'Complete!'}
              </span>
              <span className="font-semibold text-indigo-600">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
