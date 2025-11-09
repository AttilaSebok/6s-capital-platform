'use client'

import { useState, useEffect } from 'react'
import { Cookie, Shield, Eye, Settings as SettingsIcon, Save, Clock, Database, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react'
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
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

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

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  // Cookie details data
  const cookieDetails = {
    necessary: [
      { name: 'money365_cookie_consent', purpose: 'Stores user cookie preferences', duration: '1 year', type: 'First Party' },
      { name: 'session_id', purpose: 'Maintains user session', duration: 'Session', type: 'First Party' },
    ],
    analytics: [
      { name: '_ga', purpose: 'Google Analytics - Distinguishes users', duration: '2 years', type: 'Third Party' },
      { name: '_gid', purpose: 'Google Analytics - Distinguishes users', duration: '24 hours', type: 'Third Party' },
      { name: '_gat', purpose: 'Google Analytics - Throttles request rate', duration: '1 minute', type: 'Third Party' },
    ],
    preferences: [
      { name: 'theme_preference', purpose: 'Remembers theme selection', duration: '1 year', type: 'First Party' },
      { name: 'language_preference', purpose: 'Stores language choice', duration: '1 year', type: 'First Party' },
    ],
    marketing: [
      { name: 'ads_conversion', purpose: 'Tracks ad conversions', duration: '90 days', type: 'Third Party' },
      { name: 'remarketing_id', purpose: 'Enables remarketing campaigns', duration: '180 days', type: 'Third Party' },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Header */}
        <div className="bg-dark-header border-l-4 border-soft-orange rounded-lg p-6 md:p-8 mb-8 shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="bg-soft-orange/10 p-3 rounded-lg">
              <Cookie className="w-8 h-8 text-soft-orange" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-crimson font-bold text-white mb-3">
                Cookie Policy & Settings
              </h1>
              <p className="text-gray-300 leading-relaxed">
                Last Updated: November 2025
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                At money365.market, we use cookies and similar technologies to enhance your experience,
                analyze site traffic, and serve personalized content. This policy explains what cookies we use,
                why we use them, and how you can control them.
              </p>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {saved && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <p className="text-green-800 font-semibold">Settings saved successfully!</p>
            </div>
          </div>
        )}

        {/* Current Status */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-soft-orange" />
            <h2 className="text-2xl font-bold text-dark-header">
              Your Current Consent Status
            </h2>
          </div>
          <div className="bg-gray-50 border-l-4 border-soft-orange p-4 rounded">
            <p className="text-gray-700">
              {hasExistingConsent ? (
                <>
                  <span className="font-semibold text-dark-header">Status:</span> You have given cookie consent.
                  You can modify your preferences below or revoke your consent at any time.
                </>
              ) : (
                <>
                  <span className="font-semibold text-dark-header">Status:</span> You have not yet provided cookie consent.
                  Please review the categories below and set your preferences.
                </>
              )}
            </p>
          </div>
        </div>

        {/* What Are Cookies Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
          <button
            onClick={() => toggleSection('what-are-cookies')}
            className="w-full flex items-center justify-between text-left"
          >
            <h2 className="text-2xl font-bold text-dark-header flex items-center space-x-2">
              <Cookie className="w-6 h-6 text-soft-orange" />
              <span>What Are Cookies?</span>
            </h2>
            {expandedSection === 'what-are-cookies' ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>
          {expandedSection === 'what-are-cookies' && (
            <div className="mt-4 prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files stored on your device when you visit a website. They help websites remember
                your preferences and understand how you interact with the site.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-soft-orange">
                  <h3 className="font-bold text-dark-header mb-2">First-Party Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Set directly by money365.market to provide core functionality and remember your preferences.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                  <h3 className="font-bold text-dark-header mb-2">Third-Party Cookies</h3>
                  <p className="text-sm text-gray-600">
                    Set by external services like Google Analytics to help us understand site usage and improve performance.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cookie Categories & Preferences */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-2xl font-bold text-dark-header mb-6 flex items-center space-x-2">
            <SettingsIcon className="w-6 h-6 text-soft-orange" />
            <span>Cookie Categories & Your Preferences</span>
          </h2>

          <div className="space-y-4">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-soft-orange transition-colors"
              >
                <div className="bg-gradient-to-r from-dark-header to-gray-800 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      {category.id === 'necessary' && <Shield className="w-5 h-5 text-soft-orange" />}
                      {category.id === 'analytics' && <Eye className="w-5 h-5 text-blue-400" />}
                      {category.id === 'preferences' && <SettingsIcon className="w-5 h-5 text-purple-400" />}
                      {category.id === 'marketing' && <Database className="w-5 h-5 text-green-400" />}
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-lg">
                          {category.name}
                        </h3>
                        <p className="text-gray-300 text-sm mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      {category.required ? (
                        <span className="inline-flex items-center px-4 py-2 bg-soft-orange text-white text-sm font-semibold rounded">
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
                          <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-soft-orange/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-soft-orange"></div>
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cookie Details Table */}
                <div className="p-4 bg-gray-50">
                  <button
                    onClick={() => toggleSection(category.id)}
                    className="w-full flex items-center justify-between text-left mb-3"
                  >
                    <h4 className="font-semibold text-dark-header text-sm">Cookie Details</h4>
                    {expandedSection === category.id ? (
                      <ChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                  </button>

                  {expandedSection === category.id && (
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="bg-dark-header text-white">
                            <th className="px-4 py-2 text-left">Cookie Name</th>
                            <th className="px-4 py-2 text-left">Purpose</th>
                            <th className="px-4 py-2 text-left">Duration</th>
                            <th className="px-4 py-2 text-left">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cookieDetails[category.id as keyof typeof cookieDetails].map((cookie, idx) => (
                            <tr key={idx} className="border-b border-gray-200 hover:bg-white">
                              <td className="px-4 py-2 font-mono text-xs text-soft-orange">{cookie.name}</td>
                              <td className="px-4 py-2 text-gray-700">{cookie.purpose}</td>
                              <td className="px-4 py-2 text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{cookie.duration}</span>
                                </div>
                              </td>
                              <td className="px-4 py-2">
                                <span className={`px-2 py-1 rounded text-xs ${
                                  cookie.type === 'First Party'
                                    ? 'bg-soft-orange/20 text-orange-800'
                                    : 'bg-gray-200 text-gray-700'
                                }`}>
                                  {cookie.type}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white border-2 border-soft-orange rounded-lg p-6 mb-8 shadow-lg">
          <h3 className="font-bold text-dark-header mb-4 text-lg">Manage Your Preferences</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={handleSavePreferences}
              className="flex items-center justify-center space-x-2 bg-soft-orange hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              <Save className="w-5 h-5" />
              <span>Save</span>
            </button>
            <button
              onClick={handleAcceptAll}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectAll}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              Necessary Only
            </button>
            <button
              onClick={handleRevokeConsent}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              Revoke
            </button>
          </div>
        </div>

        {/* Additional Legal Information */}
        <div className="space-y-6">
          {/* Your Rights */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <button
              onClick={() => toggleSection('your-rights')}
              className="w-full flex items-center justify-between text-left"
            >
              <h2 className="text-2xl font-bold text-dark-header flex items-center space-x-2">
                <Shield className="w-6 h-6 text-soft-orange" />
                <span>Your Rights Under GDPR</span>
              </h2>
              {expandedSection === 'your-rights' ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {expandedSection === 'your-rights' && (
              <div className="mt-4 space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="inline-block w-1.5 h-1.5 bg-soft-orange rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-dark-header">Right to Access</h4>
                    <p className="text-sm text-gray-600">You can request information about the personal data we hold about you.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="inline-block w-1.5 h-1.5 bg-soft-orange rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-dark-header">Right to Withdraw Consent</h4>
                    <p className="text-sm text-gray-600">You can withdraw your cookie consent at any time using the controls on this page.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="inline-block w-1.5 h-1.5 bg-soft-orange rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-dark-header">Right to Delete</h4>
                    <p className="text-sm text-gray-600">You can request deletion of your personal data, subject to legal obligations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="inline-block w-1.5 h-1.5 bg-soft-orange rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-dark-header">Right to Object</h4>
                    <p className="text-sm text-gray-600">You can object to processing of your data for marketing purposes.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* How to Control Cookies */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <button
              onClick={() => toggleSection('control-cookies')}
              className="w-full flex items-center justify-between text-left"
            >
              <h2 className="text-2xl font-bold text-dark-header flex items-center space-x-2">
                <SettingsIcon className="w-6 h-6 text-soft-orange" />
                <span>How to Control Cookies</span>
              </h2>
              {expandedSection === 'control-cookies' ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {expandedSection === 'control-cookies' && (
              <div className="mt-4 prose max-w-none">
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                  <li><strong>This Page:</strong> Use the preference controls above to enable or disable specific cookie categories.</li>
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete them. Check your browser&apos;s help section for instructions.</li>
                  <li><strong>Third-Party Tools:</strong> Use privacy-focused browser extensions to manage cookies automatically.</li>
                </ol>
                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Blocking necessary cookies may affect website functionality and prevent you from using certain features.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-dark-header border-l-4 border-soft-orange rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies or this policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-soft-orange">Email:</strong> privacy@money365.market</p>
              <p><strong className="text-soft-orange">Address:</strong> money365.market Data Protection Officer</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                For more information, please read our{' '}
                <Link href="/privacy" className="text-soft-orange hover:text-orange-400 underline font-semibold">
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link href="/disclaimer" className="text-soft-orange hover:text-orange-400 underline font-semibold">
                  Terms of Service
                </Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-soft-orange hover:text-orange-500 font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
