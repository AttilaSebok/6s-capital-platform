'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Navigation item type with optional dropdown
type NavItem = {
  href?: string
  label: string
  dropdown?: Array<{
    href: string
    label: string
  }>
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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

  // Navigation structure with dropdown support
  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    {
      label: 'ANALYSIS',
      dropdown: [
        { href: '/articles', label: 'Latest Articles' },
        { href: '/market-news', label: 'Market News' },
      ]
    },
    { href: '/markets', label: 'Markets' },
    { href: '/screener', label: 'Screener' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => pathname === path

  // Check if any dropdown item is active
  const isDropdownActive = (dropdown?: Array<{ href: string; label: string }>) => {
    return dropdown?.some(item => pathname === item.href) || false
  }

  return (
    <header className="bg-dark-header border-b-2 border-soft-orange sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo - money365.market */}
          <Link
            href="/"
            className="font-crimson text-xl md:text-2xl lg:text-3xl font-bold text-soft-orange tracking-tight hover:text-soft-orange-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-soft-orange focus:ring-offset-2 focus:ring-offset-dark-header rounded-none"
            aria-label="money365.market - Home"
          >
            money365.market
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => {
              // Item with dropdown
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`
                        px-3 lg:px-4 py-2
                        text-xs lg:text-sm font-semibold uppercase tracking-wider
                        border-2 rounded-none
                        transition-all duration-200
                        focus:outline-none
                        flex items-center gap-1
                        ${
                          isDropdownActive(item.dropdown) || activeDropdown === item.label
                            ? 'bg-gray-700 bg-opacity-40 text-white border-soft-orange border-opacity-100'
                            : 'bg-gray-700 bg-opacity-40 border-gray-600 border-opacity-40 text-white hover:border-soft-orange hover:border-opacity-100 hover:shadow-md hover:-translate-y-0.5'
                        }
                      `}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-dark-header rounded-none shadow-2xl z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`
                              block px-4 py-3
                              text-sm font-medium uppercase tracking-wide
                              border-b border-gray-700 last:border-b-0
                              transition-all duration-200
                              ${
                                isActive(dropdownItem.href)
                                  ? 'bg-soft-orange text-white border-l-4 border-soft-orange-dark'
                                  : 'text-white hover:bg-soft-orange hover:text-white hover:border-l-4 hover:border-soft-orange-dark'
                              }
                            `}
                            aria-current={isActive(dropdownItem.href) ? 'page' : undefined}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              // Regular link item
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`
                    px-3 lg:px-4 py-2
                    text-xs lg:text-sm font-semibold uppercase tracking-wider
                    border-2 rounded-none
                    transition-all duration-200
                    focus:outline-none
                    ${
                      isActive(item.href!)
                        ? 'bg-gray-700 bg-opacity-40 text-white border-soft-orange border-opacity-100'
                        : 'bg-gray-700 bg-opacity-40 border-gray-600 border-opacity-40 text-white hover:border-soft-orange hover:border-opacity-100 hover:shadow-md hover:-translate-y-0.5'
                    }
                  `}
                  aria-current={isActive(item.href!) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button - Subscribe */}
          <div className="hidden md:block">
            <Link
              href="/#newsletter"
              className="px-4 lg:px-6 py-2 lg:py-2.5 bg-soft-orange border-2 border-soft-orange-dark text-deep-brown font-bold text-xs lg:text-sm uppercase tracking-wide rounded-none shadow-md transition-all duration-200 hover:bg-soft-orange-dark hover:text-white hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-soft-orange focus:ring-offset-2 focus:ring-offset-dark-header inline-block"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 bg-gray-700 bg-opacity-40 border-2 border-gray-600 border-opacity-40 rounded-none text-white flex items-center justify-center transition-all duration-200 hover:bg-soft-orange hover:bg-opacity-100 hover:border-soft-orange-dark focus:outline-none focus:ring-2 focus:ring-soft-orange focus:ring-offset-2 focus:ring-offset-dark-header"
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
          <div className="fixed inset-y-0 right-0 w-80 max-w-full bg-dark-header border-l-2 border-soft-orange shadow-2xl z-50 md:hidden overflow-y-auto">
            {/* Menu Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b-2 border-soft-orange">
              <span className="font-crimson text-xl font-bold text-soft-orange tracking-tight">
                money365.market
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 bg-gray-700 bg-opacity-40 border-2 border-gray-600 border-opacity-40 rounded-none text-white flex items-center justify-center transition-all duration-200 hover:bg-soft-orange hover:bg-opacity-100 hover:border-soft-orange-dark"
                aria-label="Close navigation menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="py-6">
              {navItems.map((item) => {
                // Item with dropdown (mobile accordion)
                if (item.dropdown) {
                  const isExpanded = activeDropdown === item.label
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setActiveDropdown(isExpanded ? null : item.label)}
                        className={`
                          block w-full text-left px-8 py-4
                          text-base font-semibold uppercase tracking-wide
                          border-b border-gray-700
                          transition-all duration-200
                          flex items-center justify-between
                          ${
                            isDropdownActive(item.dropdown)
                              ? 'bg-soft-orange text-white border-l-4 border-soft-orange-dark'
                              : 'text-white hover:bg-soft-orange hover:text-white hover:border-l-4 hover:border-soft-orange-dark'
                          }
                        `}
                      >
                        {item.label}
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Items (accordion content) */}
                      {isExpanded && (
                        <div className="bg-gray-800 bg-opacity-50">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={`
                                block w-full text-left pl-12 pr-8 py-3
                                text-sm font-medium uppercase tracking-wide
                                border-b border-gray-700
                                transition-all duration-200
                                ${
                                  isActive(dropdownItem.href)
                                    ? 'bg-soft-orange text-white border-l-4 border-soft-orange-dark'
                                    : 'text-white hover:bg-soft-orange hover:text-white hover:border-l-4 hover:border-soft-orange-dark'
                                }
                              `}
                              aria-current={isActive(dropdownItem.href) ? 'page' : undefined}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                // Regular link item
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`
                      block w-full text-left px-8 py-4
                      text-base font-semibold uppercase tracking-wide
                      border-b border-gray-700
                      transition-all duration-200
                      ${
                        isActive(item.href!)
                          ? 'bg-soft-orange text-white border-l-4 border-soft-orange-dark'
                          : 'text-white hover:bg-soft-orange hover:text-white hover:border-l-4 hover:border-soft-orange-dark'
                      }
                    `}
                    aria-current={isActive(item.href!) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              })}

              {/* Mobile CTA */}
              <div className="px-8 pt-8">
                <Link
                  href="/#newsletter"
                  className="block w-full text-center px-6 py-3 bg-soft-orange border-2 border-soft-orange-dark text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none shadow-md transition-all duration-200 hover:bg-soft-orange-dark hover:text-white hover:shadow-xl"
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
