'use client'

import { useEffect, useState } from 'react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px down
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-40
        w-14 h-14
        bg-stone-700 bg-opacity-40 border-2 border-stone-400 border-opacity-40
        rounded-none
        flex flex-col items-center justify-center
        shadow-md
        transition-all duration-300 ease-out
        hover:bg-bronze-600 hover:bg-opacity-100 hover:border-bronze-700 hover:text-white hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2
        text-white
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Back to top"
    >
      <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <span className="text-[10px] font-semibold uppercase tracking-tight mt-0.5">Top</span>
    </button>
  )
}
