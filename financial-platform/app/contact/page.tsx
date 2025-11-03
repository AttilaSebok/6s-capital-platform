'use client'

import { useState } from 'react'
import CustomSelect from '@/components/CustomSelect'
import './contact-input.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        // Reset error message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-stone-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
        {/* Hero Section - Sharp & Wise */}
        <div className="max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="border-l-4 border-bronze-600 pl-6">
            <h1 className="font-crimson text-3xl md:text-4xl font-bold text-bronze-600 mb-3 tracking-tight">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-stone-300 leading-relaxed">
              Professional support for advanced investors. We're here to assist you with inquiries,
              feedback, and partnership opportunities.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 md:items-start">
          {/* Contact Form - Sharp & Wise */}
          <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-5 lg:p-6 shadow-xl h-full">
            <h2 className="font-crimson text-xl md:text-2xl font-bold text-white mb-5 pb-2 border-b-2 border-bronze-600">
              Send a Message
            </h2>

            {status === 'success' && (
              <div className="mb-6 bg-olive-800 bg-opacity-40 border-l-4 border-bronze-600 rounded-none px-6 py-4">
                <p className="font-bold text-bronze-600 text-sm uppercase tracking-wider mb-1">Success</p>
                <p className="text-stone-300 text-sm">Message sent successfully! We'll respond within 24-48 hours.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 bg-red-900 bg-opacity-40 border-l-4 border-red-600 rounded-none px-6 py-4">
                <p className="font-bold text-red-400 text-sm uppercase tracking-wider mb-1">Error</p>
                <p className="text-stone-300 text-sm">Something went wrong. Please try again or email us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Your Name <span className="text-bronze-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border-2 border-stone-400 border-opacity-40 rounded-none text-white placeholder-stone-500 focus:border-bronze-600 focus:bg-stone-900 hover:bg-stone-900 active:bg-stone-900 focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-800 focus:outline-none transition-all duration-200 autofill:bg-stone-900 autofill:text-white [-webkit-autofill]:bg-stone-900 [-webkit-autofill]:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Email Address <span className="text-bronze-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border-2 border-stone-400 border-opacity-40 rounded-none text-white placeholder-stone-500 focus:border-bronze-600 focus:bg-stone-900 hover:bg-stone-900 active:bg-stone-900 focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-800 focus:outline-none transition-all duration-200 autofill:bg-stone-900 autofill:text-white [-webkit-autofill]:bg-stone-900 [-webkit-autofill]:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Subject <span className="text-bronze-600">*</span>
                </label>
                <CustomSelect
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(value) => setFormData({ ...formData, subject: value })}
                  required
                  placeholder="Select a subject"
                  options={[
                    { value: 'general', label: 'General Inquiry' },
                    { value: 'feedback', label: 'Feedback' },
                    { value: 'partnership', label: 'Partnership Opportunity' },
                    { value: 'technical', label: 'Technical Issue' },
                    { value: 'content', label: 'Content Suggestion' },
                    { value: 'other', label: 'Other' },
                  ]}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-bold text-xs uppercase tracking-wider mb-2">
                  Message <span className="text-bronze-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border-2 border-stone-400 border-opacity-40 rounded-none text-white placeholder-stone-500 focus:border-bronze-600 focus:bg-stone-900 focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-800 focus:outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-bronze-600 border-2 border-bronze-700 text-white font-bold text-sm uppercase tracking-wide rounded-none shadow-md transition-all duration-200 hover:bg-bronze-700 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-sm text-stone-400 text-center flex items-center justify-center gap-2">
                <span className="inline-block w-1 h-1 bg-bronze-600 rounded-none"></span>
                We typically respond within 24-48 hours
                <span className="inline-block w-1 h-1 bg-bronze-600 rounded-none"></span>
              </p>
            </form>
          </div>

          {/* Contact Information - Sharp & Wise */}
          <div className="flex flex-col gap-5 lg:gap-6 h-full">
            {/* Direct Contact */}
            <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-5 lg:p-6 shadow-xl flex-1">
              <h2 className="font-crimson text-xl md:text-2xl font-bold text-white mb-5 pb-2 border-b-2 border-bronze-600">
                Direct Contact
              </h2>

              <div className="space-y-6">
                <a
                  href="mailto:office@money365.market"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-bronze-600 rounded-none flex items-center justify-center group-hover:bg-bronze-600 transition-all duration-200">
                    <svg className="w-5 h-5 text-bronze-600 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
                      Email
                    </h3>
                    <p className="text-bronze-600 group-hover:text-bronze-700 transition-colors duration-200 text-base font-semibold">
                      office@money365.market
                    </p>
                    <p className="text-sm text-stone-300 mt-1">
                      For general inquiries and support
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-bronze-600 rounded-none flex items-center justify-center">
                    <svg className="w-5 h-5 text-bronze-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
                      Response Time
                    </h3>
                    <p className="text-stone-300 text-base font-semibold">
                      24-48 hours
                    </p>
                    <p className="text-sm text-stone-300 mt-1">
                      During business days (Mon-Fri)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media - Sharp & Wise */}
            <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-5 lg:p-6 shadow-xl">
              <h2 className="font-crimson text-xl md:text-2xl font-bold text-white mb-5 pb-2 border-b-2 border-bronze-600">
                Connect With Us
              </h2>

              <div className="space-y-6">
                <a
                  href="https://x.com/money365market"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-bronze-600 rounded-none flex items-center justify-center group-hover:bg-bronze-600 transition-all duration-200">
                    <svg className="w-5 h-5 text-bronze-600 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">X (Twitter)</h3>
                    <p className="text-sm text-stone-300">Follow us for market insights</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/company/money365market"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-bronze-600 rounded-none flex items-center justify-center group-hover:bg-bronze-600 transition-all duration-200">
                    <svg className="w-5 h-5 text-bronze-600 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">LinkedIn</h3>
                    <p className="text-sm text-stone-300">Connect with our team</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours Info - Sharp & Wise */}
            <div className="bg-olive-800 bg-opacity-40 border-l-4 border-bronze-600 rounded-none p-5 lg:p-6 shadow-xl">
              <div className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-bronze-600 rounded-none mt-1.5"></span>
                <div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
                    Professional Support
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Our team of investment analysts and platform specialists is available during business hours
                    to assist with inquiries, technical support, and partnership opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
