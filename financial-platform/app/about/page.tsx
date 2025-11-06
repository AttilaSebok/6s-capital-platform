import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About money365.market | Professional Investment Platform',
  description: 'Learn about money365.market - your trusted source for professional-grade market analysis, investment education, and financial insights for serious investors.',
}

export default function AboutPage() {
  return (
    <div className="bg-stone-50">
      {/* Hero Section - Sharp & Wise */}
      <section className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-crimson text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              About <span className="text-bronze-600">money365.market</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              Professional investment analysis and market intelligence for advanced investors, 365 days a year.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-soft-orange rounded-none shadow-xl p-8 lg:p-12">
              <h2 className="font-crimson text-3xl md:text-4xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
                Our Mission
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                At <span className="font-semibold text-bronze-600">money365.market</span>, we provide professional-grade investment analysis and market intelligence to serious investors who demand excellence. Our platform operates 365 days a year, delivering real-time data, advanced screening tools, and expert analysis.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                We believe that institutional-quality research should be accessible to all dedicated investors. Whether you're building wealth, managing a portfolio, or seeking alpha, we provide the tools and insights you need to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-stone-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-8 shadow-xl">
                <div className="w-16 h-16 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-crimson text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-bronze-600">
                  Professional Standards
                </h3>
                <p className="text-stone-300 leading-relaxed">
                  Institutional-quality research and analysis with complete transparency. We disclose our methodologies and maintain the highest ethical standards.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-8 shadow-xl">
                <div className="w-16 h-16 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-crimson text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-bronze-600">
                  Real-Time Intelligence
                </h3>
                <p className="text-stone-300 leading-relaxed">
                  Live market data, instant updates, and advanced screening tools powered by industry-leading data providers. Stay ahead of market movements.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-8 shadow-xl">
                <div className="w-16 h-16 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-crimson text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-bronze-600">
                  Actionable Insights
                </h3>
                <p className="text-stone-300 leading-relaxed">
                  Every piece of analysis is designed to be actionable. We focus on insights that help you make better investment decisions, not just noise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold text-deep-brown mb-12 text-center">
              Our Core Principles
            </h2>
            <div className="space-y-6">
              {[
                {
                  number: 1,
                  title: 'Integrity & Accuracy',
                  description: 'We never compromise on data accuracy or analysis quality. Every recommendation is backed by rigorous research and transparent methodology.'
                },
                {
                  number: 2,
                  title: 'Investor-First Approach',
                  description: 'Your success is our success. We prioritize investor interests above all else and maintain complete editorial independence.'
                },
                {
                  number: 3,
                  title: 'Continuous Innovation',
                  description: 'Markets evolve rapidly, and so do we. We invest heavily in technology and research to provide cutting-edge tools and analysis.'
                },
                {
                  number: 4,
                  title: 'Professional Excellence',
                  description: 'We maintain institutional standards in everything we do, from data quality to analysis methodology to user experience.'
                }
              ].map((principle) => (
                <div key={principle.number} className="flex items-start bg-white border-2 border-stone-300 rounded-none p-6 shadow-md hover:shadow-xl transition-shadow duration-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center text-white font-bold text-xl mr-6">
                    {principle.number}
                  </div>
                  <div>
                    <h3 className="font-crimson text-xl font-bold text-deep-brown mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-stone-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-crimson text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What You Get on money365.market
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Professional Tools */}
              <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-8 shadow-xl">
                <h3 className="font-crimson text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-bronze-600">
                  Professional Tools
                </h3>
                <ul className="space-y-3 text-stone-300">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <span>Advanced stock screener with 50+ filters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <span>Real-time market data and live charts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <span>Portfolio tracking and analysis tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <span>Economic calendar with market impact ratings</span>
                  </li>
                </ul>
              </div>

              {/* Expert Analysis */}
              <div className="bg-stone-700 bg-opacity-50 border-l-4 border-bronze-600 rounded-none p-8 shadow-xl">
                <h3 className="font-crimson text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-bronze-600">
                  Expert Analysis
                </h3>
                <ul className="space-y-3 text-stone-300">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <span>In-depth market analysis and commentary</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <span>Technical and fundamental analysis guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <span>Investment strategies for all market conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <span>Earnings analysis and company deep-dives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-deep-brown to-rich-brown border-2 border-bronze-600 rounded-none shadow-xl p-8 lg:p-12 text-center">
              <h2 className="font-crimson text-3xl md:text-4xl font-bold text-white mb-6">
                Join the money365.market Community
              </h2>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                Get professional market analysis, investment insights, and trading opportunities delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#newsletter"
                  className="px-8 py-4 bg-bronze-600 border-2 border-bronze-700 text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none shadow-xl hover:bg-bronze-700 hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-200 focus:outline-none"
                >
                  Subscribe to Newsletter
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-bronze-600 text-bronze-600 font-bold text-sm uppercase tracking-wide rounded-none shadow-xl hover:bg-bronze-600 hover:text-deep-brown hover:shadow-2xl hover:scale-105 transition-all duration-200 focus:outline-none"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-stone-50 border-t-2 border-stone-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 bg-opacity-40 border-l-4 border-bronze-600 rounded-none p-6">
              <p className="text-white text-xs leading-relaxed">
                <span className="text-bronze-600 font-bold uppercase tracking-wider">Important Disclaimer:</span>{' '}
                money365.market provides educational content and market analysis for informational purposes only.
                We are not registered financial advisors, and nothing on this platform should be considered personalized financial advice.
                All investments carry risk. Always conduct thorough research and consult with licensed financial professionals before making investment decisions.
                Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
