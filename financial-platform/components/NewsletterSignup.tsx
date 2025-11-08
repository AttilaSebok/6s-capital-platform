'use client'

import { useState } from 'react'
import { trackNewsletterSignup } from '@/lib/analytics'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: '', // Optional: add name field if needed
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 409) {
          setStatus('error')
          setMessage('This email is already subscribed to our newsletter.')
          return
        }
        throw new Error(data.error || 'Failed to subscribe')
      }

      // Track successful signup with GA4
      trackNewsletterSignup('homepage')

      setStatus('success')
      setMessage(data.message || 'Welcome aboard! Confirm your email to start receiving insights.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-label="Email address"
                className="flex-1 sm:w-64 px-4 py-2.5 border-2 border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-soft-orange focus:border-soft-orange text-deep-brown text-sm"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-2.5 bg-soft-orange border-2 border-soft-orange-dark text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none hover:bg-soft-orange-dark hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-soft-orange whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {status === 'success' && (
              <p className="text-xs mt-2 text-green-600 text-center sm:text-left font-semibold">{message}</p>
            )}
            {status === 'error' && (
              <p className="text-xs mt-2 text-red-600 text-center sm:text-left font-semibold">{message}</p>
            )}
            {status === 'idle' && (
              <p className="text-xs mt-2 text-stone-500 text-center sm:text-left">
                Join 1,000+ investors • Unsubscribe anytime
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
