import Link from 'next/link'
import NewsletterSignupCompact from './NewsletterSignupCompact'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-header border-t-2 border-soft-orange">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section - Logo & Description */}
        <div className="mb-10">
          <h3 className="font-crimson text-3xl md:text-4xl font-bold text-soft-orange mb-4 tracking-tight">
            money365.market
          </h3>
          <p className="text-white text-sm md:text-base leading-relaxed border-l-4 border-soft-orange pl-4 max-w-2xl">
            Professional investment analysis and market insights for advanced investors.
            Daily intelligence for informed decision-making.
          </p>
        </div>

        {/* Four Column Layout - Sharp & Wise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b-2 border-soft-orange">
              Quick Links
            </h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Home
              </Link>
              <Link
                href="/articles"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Articles
              </Link>
              <Link
                href="/markets"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Markets
              </Link>
              <Link
                href="/screener"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Stock Screener
              </Link>
              <Link
                href="/#newsletter"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Newsletter
              </Link>
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b-2 border-soft-orange">
              Company
            </h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              <Link
                href="/about"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Contact
              </Link>
              <Link
                href="/disclaimer"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Disclaimer
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Cookie Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-soft-orange transition-colors duration-200 text-sm flex items-center group"
              >
                <span className="w-1 h-1 bg-gray-600 group-hover:bg-soft-orange rounded-none mr-2 transition-colors duration-200"></span>
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b-2 border-soft-orange">
              Connect
            </h4>
            <nav className="flex flex-col gap-y-3 mt-4">
              <a
                href="https://x.com/money365market"
                className="text-gray-300 hover:text-soft-orange transition-all duration-200 text-sm flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X (Twitter)
              </a>
              <a
                href="https://linkedin.com/company/money365market"
                className="text-gray-300 hover:text-soft-orange transition-all duration-200 text-sm flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div>
            <NewsletterSignupCompact />
          </div>
        </div>

        {/* Disclaimer & Copyright - Sharp & Wise */}
        <div className="border-t-2 border-gray-700 pt-8">
          {/* Disclaimer Box */}
          <div className="bg-gray-800 bg-opacity-40 border-l-4 border-soft-orange rounded-none p-6 mb-6">
            <p className="text-white text-xs leading-relaxed">
              <span className="text-soft-orange font-bold uppercase tracking-wider">Disclaimer:</span>{' '}
              The information provided on this website is for educational and informational purposes only.
              It should not be considered as financial advice. Always conduct your own research and consult
              with a licensed financial advisor before making any investment decisions. Past performance
              does not guarantee future results.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-soft-orange rounded-none"></span>
              &copy; {currentYear} <span className="font-crimson font-bold text-soft-orange">money365.market</span>
              <span className="hidden md:inline">All rights reserved.</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-500">Built with precision for investors</span>
              <span className="inline-block w-1.5 h-1.5 bg-soft-orange rounded-none"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
