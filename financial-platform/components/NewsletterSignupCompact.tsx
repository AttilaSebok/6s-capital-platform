'use client'

import { useState } from 'react'
import { trackNewsletterSignup } from '@/lib/analytics'

export default function NewsletterSignupCompact() {
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
          name: '',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 409) {
          setStatus('error')
          setMessage('Already subscribed')
          return
        }
        throw new Error(data.error || 'Failed to subscribe')
      }

      trackNewsletterSignup('footer')

      setStatus('success')
      setMessage('Welcome aboard! Please verify your email to receive your free investment checklist.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Try again')
    }
  }

  return (
    <div>
      <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b-2 border-soft-orange">
        Newsletter
      </h4>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        Get weekly market insights and exclusive analysis delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          aria-label="Email address"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-soft-orange focus:border-soft-orange placeholder-gray-500"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-2 bg-soft-orange hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wide rounded-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
        {status === 'success' && (
          <p className="text-xs text-green-400 font-semibold">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-xs text-red-400 font-semibold">{message}</p>
        )}
        {status === 'idle' && (
          <p className="text-xs text-gray-500">
            Join 1,000+ investors
          </p>
        )}
      </form>
    </div>
  )
}
