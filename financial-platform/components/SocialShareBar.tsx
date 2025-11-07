'use client'

import { useState } from 'react'

interface SocialShareBarProps {
  title: string
  description: string
}

export default function SocialShareBar({ title, description }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`
    window.open(twitterUrl, '_blank', 'width=550,height=420')
  }

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(linkedInUrl, '_blank', 'width=550,height=420')
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent(title)
    const body = encodeURIComponent(`${description}\n\nRead more: ${shareUrl}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  return (
    <div className="hidden xl:block fixed left-8 top-[55%] z-30">
      <div className="flex flex-col gap-3">
        {/* Copy Link - Sharp & Wise */}
        <div className="relative">
          <button
            onClick={copyToClipboard}
            className="group w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-stone-400 border-opacity-40 rounded-none flex items-center justify-center transition-all duration-200 hover:bg-bronze-600 hover:bg-opacity-100 hover:border-bronze-700 hover:text-white shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 text-white"
            aria-label="Copy link to clipboard"
          >
            {copied ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
          {copied && (
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-deep-brown text-white text-xs px-3 py-1.5 rounded-none border border-bronze-600 whitespace-nowrap animate-fade-in shadow-lg">
              Copied!
            </div>
          )}
        </div>

        {/* X (Twitter) - Sharp & Wise */}
        <button
          onClick={shareOnTwitter}
          className="group w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-stone-400 border-opacity-40 rounded-none flex items-center justify-center transition-all duration-200 hover:bg-bronze-600 hover:bg-opacity-100 hover:border-bronze-700 hover:text-white shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 text-white"
          aria-label="Share on X"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        {/* LinkedIn - Sharp & Wise */}
        <button
          onClick={shareOnLinkedIn}
          className="group w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-stone-400 border-opacity-40 rounded-none flex items-center justify-center transition-all duration-200 hover:bg-bronze-600 hover:bg-opacity-100 hover:border-bronze-700 hover:text-white shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 text-white"
          aria-label="Share on LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </button>

        {/* Email - Sharp & Wise */}
        <button
          onClick={shareViaEmail}
          className="group w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-stone-400 border-opacity-40 rounded-none flex items-center justify-center transition-all duration-200 hover:bg-bronze-600 hover:bg-opacity-100 hover:border-bronze-700 hover:text-white shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 text-white"
          aria-label="Share via email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
