import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About 6s Capital | Financial Education Platform',
  description: 'Learn about 6s Capital - your trusted source for stock market analysis, investment education, and financial insights.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About 6s Capital
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Making investing accessible, transparent, and educational for everyone
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            At 6s Capital, we believe that quality financial education should be accessible to everyone.
            Our mission is to demystify the stock market and empower individuals to make informed investment decisions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We provide in-depth market analysis, educational content, and practical tools to help both
            beginners and experienced investors navigate the complex world of finance.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No hidden agendas. We clearly disclose our methodologies and affiliate relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Education First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on teaching concepts, not just pushing trades or products.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality Over Quantity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every article is thoroughly researched and provides actionable insights.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Core Values
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Integrity & Honesty
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We never compromise on accuracy and always put our readers' interests first.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Continuous Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Markets evolve, and so do we. We stay updated with the latest trends and research.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Accessibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complex financial concepts explained in clear, simple language everyone can understand.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Community Building
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're building a community of informed investors who support and learn from each other.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Can Expect */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What You Can Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Educational Content
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Beginner-friendly investing guides
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  In-depth technical analysis tutorials
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Fundamental analysis breakdowns
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Portfolio management strategies
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Market Tools & Analysis
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Real-time market data and charts
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Stock screener with custom filters
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Economic calendar and news
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Broker reviews and comparisons
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-primary-100 mb-6">
            Get weekly insights, market analysis, and investing tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#newsletter"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe to Newsletter
            </a>
            <a
              href="/contact"
              className="bg-primary-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            <strong>Important Disclaimer:</strong> 6s Capital provides educational content and analysis.
            We are not financial advisors, and nothing on this site should be considered financial advice.
            Always do your own research and consult with a qualified financial professional before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  )
}
