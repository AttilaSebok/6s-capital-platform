'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('article')
      if (!article) return

      const articleTop = article.offsetTop
      const articleHeight = article.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // Calculate how much of the article has been scrolled
      const scrolled = scrollY - articleTop + windowHeight / 3
      const total = articleHeight
      const percentage = Math.min(Math.max((scrolled / total) * 100, 0), 100)

      setProgress(percentage)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 z-50 h-0.5 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 transition-all duration-100 ease-linear shadow-lg"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />
    </div>
  )
}
