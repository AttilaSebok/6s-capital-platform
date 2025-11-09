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
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
        onClick={() => !showSettings && setIsVisible(false)}
      />

      {/* Banner */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden pointer-events-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Cookie className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">
              Süti beállítások
            </h2>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Bezárás"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showSettings ? (
            // Simple view
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Weboldalunk sütiket használ a legjobb felhasználói élmény biztosítása érdekében.
                A sütik segítenek az oldal működésében, a tartalom személyre szabásában és a látogatások elemzésében.
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                A &quot;Mind elfogadom&quot; gombra kattintva hozzájárul minden süti használatához.
                Részletes beállításokért kattintson a &quot;Beállítások&quot; gombra.{' '}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                >
                  Adatvédelmi irányelvek
                </Link>
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Mind elfogadom
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Csak a szükségesek
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Beállítások</span>
                </button>
              </div>
            </div>
          ) : (
            // Detailed settings view
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Testre szabhatja a süti preferenciáit az alábbi kategóriák szerint:
                </p>
              </div>

              {/* Cookie categories */}
              <div className="space-y-4">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {category.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        {category.required ? (
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Mindig aktív
                          </span>
                        ) : (
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences[category.id as keyof typeof preferences]}
                              onChange={() => handleTogglePreference(category.id as keyof typeof preferences)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Beállítások mentése
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Vissza
                </button>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Bármikor módosíthatja beállításait az oldal alján található &quot;Süti beállítások&quot; linken keresztül.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
