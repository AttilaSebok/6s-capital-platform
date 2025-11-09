import Link from 'next/link'
import { ReactNode } from 'react'

interface ResourceLayoutProps {
  title: string
  description: string
  children: ReactNode
  downloadTitle?: string
  downloadDescription?: string
}

export default function ResourceLayout({
  title,
  description,
  children,
  downloadTitle = "Download Your Free Resource",
  downloadDescription = "Get instant access to this professional-grade tool"
}: ResourceLayoutProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <span className="inline-block bg-soft-orange border-2 border-soft-orange-dark text-deep-brown px-4 py-2 text-xs font-bold uppercase tracking-wider">
                Free Resource
              </span>
            </div>

            {/* Title */}
            <h1 className="font-crimson text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Download CTA Box */}
          <div className="bg-gradient-to-br from-soft-orange to-soft-orange-dark border-2 border-soft-orange-dark rounded-none shadow-2xl p-8 mb-12">
            <div className="text-center">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-3">
                {downloadTitle}
              </h2>
              <p className="text-base md:text-lg text-stone-900 mb-6">
                {downloadDescription}
              </p>

              {/* Email Form */}
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="flex-1 px-4 py-3 border-2 border-deep-brown rounded-none focus:outline-none focus:ring-2 focus:ring-deep-brown text-deep-brown"
                  />
                  <button className="px-6 py-3 bg-deep-brown border-2 border-stone-900 text-white font-bold uppercase tracking-wide rounded-none hover:bg-stone-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-deep-brown whitespace-nowrap">
                    Get Free Access
                  </button>
                </div>
                <p className="text-xs mt-3 text-stone-700">
                  No spam. Unsubscribe anytime. Your email is safe with us.
                </p>
              </div>
            </div>
          </div>

          {/* Resource Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white border-2 border-stone-300 rounded-none p-8 shadow-md">
              {children}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-white border-2 border-bronze-600 rounded-none p-8">
            <h3 className="font-crimson text-2xl font-bold text-deep-brown mb-3">
              Want More Free Resources?
            </h3>
            <p className="text-stone-700 mb-6">
              Subscribe to get exclusive investment tools, checklists, and analysis templates.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block px-8 py-3 bg-bronze-600 border-2 border-bronze-700 text-deep-brown font-bold uppercase tracking-wide rounded-none hover:bg-bronze-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bronze-600"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
