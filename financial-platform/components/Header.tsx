'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            6S Capital
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/articles" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Articles
            </Link>
            <Link href="/markets" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Markets
            </Link>
            <Link href="/screener" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Screener
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button - Newsletter */}
          <div className="hidden md:block">
            <Link href="/#newsletter" className="btn-primary text-sm">
              Newsletter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600">
              Home
            </Link>
            <Link href="/articles" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600">
              Articles
            </Link>
            <Link href="/markets" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600">
              Markets
            </Link>
            <Link href="/screener" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600">
              Screener
            </Link>
            <Link href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600">
              About
            </Link>
            <Link href="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600">
              Contact
            </Link>
            <Link href="/#newsletter" className="block btn-primary text-center text-sm">
              Newsletter
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
