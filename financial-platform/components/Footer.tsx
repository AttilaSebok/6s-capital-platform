import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">6S Capital</h3>
            <p className="text-sm">
              Professional investment analysis and market insights for advanced investors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/markets" className="hover:text-primary-400">Markets</Link></li>
              <li><Link href="/screener" className="hover:text-primary-400">Stock Screener</Link></li>
              <li><Link href="/analysis" className="hover:text-primary-400">Analysis</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/brokers" className="hover:text-primary-400">Best Brokers</Link></li>
              <li><Link href="/education" className="hover:text-primary-400">Investment Education</Link></li>
              <li><Link href="/tools" className="hover:text-primary-400">Trading Tools</Link></li>
              <li><Link href="/premium" className="hover:text-primary-400">Premium Features</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-400">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-400">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary-400">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p className="mb-2">
            <strong>Disclaimer:</strong> The information provided on this website is for educational and informational purposes only.
            It should not be considered as financial advice. Always conduct your own research and consult with a licensed financial advisor.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} 6S Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
