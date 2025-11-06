'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Integrate with your email service (Mailchimp, SendGrid, ConvertKit, etc.)
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStatus('success')
      setMessage('Thank you! Check your email to confirm your subscription.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-crimson text-3xl md:text-4xl font-bold text-white mb-4">
        Stay Ahead of the Market
      </h2>
      <p className="text-lg md:text-xl text-stone-300 mb-8 leading-relaxed">
        Get our daily market analysis, trading insights, and exclusive investment opportunities delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-6 py-3 rounded-none border-2 border-stone-600 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600 transition-all duration-200"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-bronze-600 border-2 border-bronze-700 text-deep-brown hover:bg-bronze-700 hover:text-white font-bold py-3 px-8 rounded-none uppercase tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-4 text-green-300 font-semibold">{message}</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-300 font-semibold">{message}</p>
      )}

      <p className="text-xs md:text-sm text-stone-400 mt-6 uppercase tracking-wider">
        Join 10,000+ investors. Unsubscribe anytime. No spam, ever.
      </p>
    </div>
  )
}
