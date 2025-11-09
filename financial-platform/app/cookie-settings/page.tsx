'use client'

import { useState, useEffect } from 'react'
import { Cookie, Shield, Eye, Settings as SettingsIcon, Save } from 'lucide-react'
import { getCookieConsent, setCookieConsent, getCookieCategories, revokeConsent } from '@/lib/cookies'
import Link from 'next/link'

export default function CookieSettingsPage() {
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    preferences: false,
  })
  const [saved, setSaved] = useState(false)
  const [hasExistingConsent, setHasExistingConsent] = useState(false)

  useEffect(() => {
    const consent = getCookieConsent()
    if (consent) {
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
        preferences: consent.preferences,
      })
      setHasExistingConsent(true)
    }
  }, [])

  const handleTogglePreference = (category: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }))
    setSaved(false)
  }

  const handleSavePreferences = () => {
    setCookieConsent(preferences)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleAcceptAll = () => {
    setPreferences({
      analytics: true,
      marketing: true,
      preferences: true,
    })
    setCookieConsent({
      analytics: true,
      marketing: true,
      preferences: true,
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleRejectAll = () => {
    setPreferences({
      analytics: false,
      marketing: false,
      preferences: false,
    })
    setCookieConsent({
      analytics: false,
      marketing: false,
      preferences: false,
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleRevokeConsent = () => {
    revokeConsent()
    setPreferences({
      analytics: false,
      marketing: false,
      preferences: false,
    })
    setHasExistingConsent(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const categories = getCookieCategories()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <Cookie className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Cookie Settings
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Customize your cookie preferences with the settings below.
            You can revoke or modify your consent at any time.
          </p>
        </div>

        {/* Status Message */}
        {saved && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-center">
            Settings saved successfully!
          </div>
        )}

        {/* Current Status */}
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Current Status
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {hasExistingConsent ? (
              <>
                You have already given cookie consent. You can modify your preferences in the settings below.
              </>
            ) : (
              <>
                You have not yet given cookie consent. Set your preferences by category below.
              </>
            )}
          </p>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-4 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {category.id === 'necessary' && <Shield className="w-5 h-5 text-blue-600" />}
                      {category.id === 'analytics' && <Eye className="w-5 h-5 text-green-600" />}
                      {category.id === 'preferences' && <SettingsIcon className="w-5 h-5 text-purple-600" />}
                      {category.id === 'marketing' && <Cookie className="w-5 h-5 text-orange-600" />}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {category.description}
                    </p>

                    {/* Detailed information */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 text-sm">
                      {category.id === 'necessary' && (
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-700 dark:text-gray-200">Examples:</p>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                            <li>Session identifiers</li>
                            <li>Security cookies</li>
                            <li>Language selection</li>
                          </ul>
                        </div>
                      )}
                      {category.id === 'analytics' && (
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-700 dark:text-gray-200">Examples:</p>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                            <li>Google Analytics (_ga, _gid)</li>
                            <li>Visitor statistics</li>
                            <li>Page performance measurement</li>
                          </ul>
                        </div>
                      )}
                      {category.id === 'preferences' && (
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-700 dark:text-gray-200">Examples:</p>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                            <li>User settings</li>
                            <li>Theme selection (light/dark mode)</li>
                            <li>Layout preferences</li>
                          </ul>
                        </div>
                      )}
                      {category.id === 'marketing' && (
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-700 dark:text-gray-200">Examples:</p>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                            <li>Ad targeting</li>
                            <li>Remarketing</li>
                            <li>Social media integration</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="ml-6">
                    {category.required ? (
                      <span className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
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
                        <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                      </label>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={handleSavePreferences}
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <Save className="w-5 h-5" />
              <span>Save</span>
            </button>
            <button
              onClick={handleAcceptAll}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectAll}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Necessary Only
            </button>
            <button
              onClick={handleRevokeConsent}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Revoke
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
            Additional Information
          </h3>
          <div className="text-blue-800 dark:text-blue-200 space-y-2 text-sm">
            <p>
              Your cookie consent is valid for 1 year. After that, you will need to provide your preferences again.
            </p>
            <p>
              You can revoke or modify your consent at any time on this page.
            </p>
            <p>
              For more information, please read our{' '}
              <Link
                href="/privacy"
                className="font-semibold underline hover:text-blue-600 dark:hover:text-blue-300"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
