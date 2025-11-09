'use client'

import { useState, useEffect } from 'react'
import { X, Settings, Cookie } from 'lucide-react'
import { hasConsent, acceptAllCookies, acceptNecessaryCookies, getCookieCategories, setCookieConsent } from '@/lib/cookies'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    // Check if user has already given consent
    const hasGivenConsent = hasConsent()
    setIsVisible(!hasGivenConsent)
  }, [])

  const handleAcceptAll = () => {
    acceptAllCookies()
    setIsVisible(false)
  }

  const handleAcceptNecessary = () => {
    acceptNecessaryCookies()
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    setCookieConsent(preferences)
    setIsVisible(false)
  }

  const handleTogglePreference = (category: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  if (!isVisible) return null

  const categories = getCookieCategories()

  return (
    <>
      {/* Backdrop for settings modal */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 pointer-events-auto"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Cookie Bar - Slim bottom bar */}
      <div className={`fixed ${showSettings ? 'bottom-0' : 'bottom-0'} left-0 right-0 z-50 pointer-events-none transition-all duration-300`}>
        {/* Settings Panel */}
        {showSettings && (
          <div className="pointer-events-auto bg-dark-header border-t-2 border-soft-orange shadow-2xl max-w-4xl mx-auto mb-2 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Cookie className="w-5 h-5 text-soft-orange" />
                  <h3 className="text-lg font-bold text-white">Cookie Preferences</h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-soft-orange transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 mb-4">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {category.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {category.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        {category.required ? (
                          <span className="text-xs font-medium text-gray-400 bg-gray-700 px-3 py-1 rounded">
                            Always Active
                          </span>
                        ) : (
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences[category.id as keyof typeof preferences]}
                              onChange={() => handleTogglePreference(category.id as keyof typeof preferences)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-soft-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-soft-orange"></div>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-soft-orange hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                  Save Settings
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Slim Bottom Bar */}
        <div className="pointer-events-auto bg-dark-header border-t-2 border-soft-orange shadow-2xl">
          <div className="container mx-auto px-4 py-3">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between gap-4">
              {/* Left side - Message */}
              <div className="flex items-center space-x-3 flex-1">
                <Cookie className="w-5 h-5 text-soft-orange flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white text-sm leading-tight">
                    We use cookies to enhance your experience.{' '}
                    <Link
                      href="/cookie-policy"
                      className="text-soft-orange hover:text-orange-400 underline"
                    >
                      Cookie Policy
                    </Link>
                  </p>
                </div>
              </div>

              {/* Right side - Action buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-gray-300 hover:text-soft-orange transition-colors text-sm font-medium px-3 py-1.5 rounded border border-gray-600 hover:border-soft-orange"
                >
                  <Settings className="w-4 h-4 inline mr-1" />
                  Settings
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="text-white hover:text-gray-300 transition-colors text-sm font-medium px-3 py-1.5 rounded border border-gray-600 hover:border-gray-500"
                >
                  Necessary Only
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="bg-soft-orange hover:bg-orange-500 text-white font-semibold text-sm px-4 py-1.5 rounded transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
              <div className="flex items-center space-x-2">
                <Cookie className="w-5 h-5 text-soft-orange flex-shrink-0" />
                <p className="text-white text-xs leading-tight flex-1">
                  We use cookies to enhance your experience.{' '}
                  <Link
                    href="/cookie-policy"
                    className="text-soft-orange hover:text-orange-400 underline"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 text-gray-300 hover:text-soft-orange transition-colors text-xs font-medium px-2 py-1.5 rounded border border-gray-600 hover:border-soft-orange"
                >
                  <Settings className="w-3 h-3 inline mr-1" />
                  Settings
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="flex-1 text-white hover:text-gray-300 transition-colors text-xs font-medium px-2 py-1.5 rounded border border-gray-600 hover:border-gray-500"
                >
                  Necessary
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-soft-orange hover:bg-orange-500 text-white font-semibold text-xs px-3 py-1.5 rounded transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
