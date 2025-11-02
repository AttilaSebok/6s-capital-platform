'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/articles', label: 'Articles' },
    { href: '/markets', label: 'Markets' },
    { href: '/screener', label: 'Screener' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo - money365.market */}
          <Link
            href="/"
            className="font-crimson text-xl md:text-2xl lg:text-3xl font-bold text-bronze-600 tracking-tight hover:text-bronze-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-none"
            aria-label="money365.market - Home"
          >
            money365.market
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-3 lg:px-4 py-2
                  text-xs lg:text-sm font-semibold uppercase tracking-wider
                  border-2 rounded-none
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900
                  ${
                    isActive(item.href)
                      ? 'bg-olive-800 text-white border-b-4 border-bronze-600 border-t-2 border-x-2 border-olive-800'
                      : 'bg-stone-700 bg-opacity-40 border-stone-400 border-opacity-40 text-stone-300 hover:bg-bronze-600 hover:bg-opacity-100 hover:border-bronze-700 hover:text-white hover:shadow-md hover:-translate-y-0.5'
                  }
                `}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Subscribe */}
          <div className="hidden md:block">
            <Link
              href="/#newsletter"
              className="px-4 lg:px-6 py-2 lg:py-2.5 bg-bronze-600 border-2 border-bronze-700 text-white font-bold text-xs lg:text-sm uppercase tracking-wide rounded-none shadow-md transition-all duration-200 hover:bg-bronze-700 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900 inline-block"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 bg-stone-700 bg-opacity-40 border-2 border-stone-400 border-opacity-40 rounded-none text-white flex items-center justify-center transition-all duration-200 hover:bg-bronze-600 hover:bg-opacity-100 hover:border-bronze-700 focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:ring-offset-2 focus:ring-offset-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
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
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-80 max-w-full bg-gradient-to-b from-deep-brown to-stone-900 border-l-2 border-bronze-600 shadow-2xl z-50 md:hidden overflow-y-auto">
            {/* Menu Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b-2 border-bronze-600">
              <span className="font-crimson text-xl font-bold text-bronze-600 tracking-tight">
                money365.market
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 bg-stone-700 bg-opacity-40 border-2 border-stone-400 border-opacity-40 rounded-none text-white flex items-center justify-center transition-all duration-200 hover:bg-bronze-600 hover:bg-opacity-100 hover:border-bronze-700"
                aria-label="Close navigation menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block w-full text-left px-8 py-4
                    text-base font-semibold uppercase tracking-wide
                    border-b border-stone-700
                    transition-all duration-200
                    ${
                      isActive(item.href)
                        ? 'bg-olive-800 text-white border-l-4 border-bronze-600'
                        : 'text-stone-300 hover:bg-bronze-600 hover:text-white hover:border-l-4 hover:border-bronze-700'
                    }
                  `}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="px-8 pt-8">
                <Link
                  href="/#newsletter"
                  className="block w-full text-center px-6 py-3 bg-bronze-600 border-2 border-bronze-700 text-white font-bold text-sm uppercase tracking-wide rounded-none shadow-md transition-all duration-200 hover:bg-bronze-700 hover:shadow-xl"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
