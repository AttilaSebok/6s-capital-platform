'use client'

import { useState, useEffect } from 'react'
import { setCookieConsent, getCookieConsent, acceptAllCookies, acceptNecessaryCookies, revokeConsent } from '@/lib/cookies'
import { useRouter } from 'next/navigation'

export default function CookiePolicyPage() {
  const router = useRouter()
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    const consent = getCookieConsent()
    if (consent) {
      setPreferences({
        analytics: consent.analytics,
        marketing: consent.marketing,
        preferences: consent.preferences,
      })
    }
  }, [])

  const handleSavePreferences = () => {
    setCookieConsent(preferences)
    router.push('/')
  }

  const handleAcceptAll = () => {
    acceptAllCookies()
    setPreferences({
      analytics: true,
      marketing: true,
      preferences: true,
    })
  }

  const handleAcceptNecessary = () => {
    acceptNecessaryCookies()
    setPreferences({
      analytics: false,
      marketing: false,
      preferences: false,
    })
  }

  const handleRevokeConsent = () => {
    revokeConsent()
    setPreferences({
      analytics: false,
      marketing: false,
      preferences: false,
    })
  }

  const handleTogglePreference = (category: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4">
      <div className="max-w-4xl mx-auto bg-dark-header rounded-lg shadow-2xl border border-gray-800">
        {/* Header */}
        <div className="border-b border-gray-700 p-6">
          <h1 className="text-3xl font-bold text-white font-crimson mb-2">Cookie Policy for Money365.Market</h1>
          <p className="text-gray-400 text-sm">Last Updated: November 9, 2025</p>
        </div>

        {/* Cookie Preferences Control Panel */}
        <div className="p-6 border-b border-gray-700 bg-gray-900/50">
          <h2 className="text-xl font-bold text-white mb-4">Manage Your Cookie Preferences</h2>

          <div className="space-y-4 mb-6">
            {/* Necessary Cookies - Always Active */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Strictly Necessary Cookies</h3>
                  <p className="text-sm text-gray-400">Essential for website functionality</p>
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-700 px-3 py-1 rounded">
                  Always Active
                </span>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Performance and Analytics Cookies</h3>
                  <p className="text-sm text-gray-400">Help us improve website functionality</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handleTogglePreference('analytics')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-soft-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-soft-orange"></div>
                </label>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Functional Cookies</h3>
                  <p className="text-sm text-gray-400">Remember your preferences and settings</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={() => handleTogglePreference('preferences')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-soft-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-soft-orange"></div>
                </label>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Targeting/Advertising Cookies</h3>
                  <p className="text-sm text-gray-400">Deliver relevant advertisements</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handleTogglePreference('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-soft-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-soft-orange"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleSavePreferences}
              className="flex-1 bg-soft-orange hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
              Save Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
              Accept All
            </button>
            <button
              onClick={handleAcceptNecessary}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
              Necessary Only
            </button>
            <button
              onClick={handleRevokeConsent}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
              Revoke Consent
            </button>
          </div>
        </div>

        {/* Policy Content */}
        <div className="p-6 space-y-8 text-gray-300">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">1. Introduction</h2>
            <p className="mb-3">
              This Cookie Policy explains how Money365.Market (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies when you visit our website at money365.market (the &quot;Website&quot;). This policy should be read in conjunction with our Privacy Policy.
            </p>
            <p>
              By using our Website, you agree to the use of cookies as described in this Cookie Policy. If you do not agree, you should adjust your browser settings or refrain from using our Website.
            </p>
          </section>

          {/* 2. What Are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">2. What Are Cookies?</h2>
            <p className="mb-3">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="mb-3">Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Session cookies</strong> exist only during your visit and are deleted when you close your browser</li>
              <li><strong>Persistent cookies</strong> remain on your device for a set period or until you delete them</li>
            </ul>
          </section>

          {/* 3. Types of Cookies We Use */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">3. Types of Cookies We Use</h2>

            {/* 3.1 Strictly Necessary */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Strictly Necessary Cookies</h3>
              <p className="mb-3">These cookies are essential for the Website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="border border-gray-700 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">consent_preferences</td>
                      <td className="border border-gray-700 px-4 py-2">Stores your cookie consent choices</td>
                      <td className="border border-gray-700 px-4 py-2">12 months</td>
                      <td className="border border-gray-700 px-4 py-2">First-party</td>
                    </tr>
                    <tr className="bg-gray-800/50">
                      <td className="border border-gray-700 px-4 py-2">session_id</td>
                      <td className="border border-gray-700 px-4 py-2">Maintains your session state</td>
                      <td className="border border-gray-700 px-4 py-2">Session</td>
                      <td className="border border-gray-700 px-4 py-2">First-party</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.2 Performance and Analytics */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">3.2 Performance and Analytics Cookies</h3>
              <p className="mb-3">These cookies collect information about how visitors use our Website, helping us improve its functionality and user experience.</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="border border-gray-700 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Provider</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">_ga</td>
                      <td className="border border-gray-700 px-4 py-2">Google Analytics</td>
                      <td className="border border-gray-700 px-4 py-2">Distinguishes unique users</td>
                      <td className="border border-gray-700 px-4 py-2">2 years</td>
                    </tr>
                    <tr className="bg-gray-800/50">
                      <td className="border border-gray-700 px-4 py-2">_gid</td>
                      <td className="border border-gray-700 px-4 py-2">Google Analytics</td>
                      <td className="border border-gray-700 px-4 py-2">Distinguishes unique users</td>
                      <td className="border border-gray-700 px-4 py-2">24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">_gat</td>
                      <td className="border border-gray-700 px-4 py-2">Google Analytics</td>
                      <td className="border border-gray-700 px-4 py-2">Throttles request rate</td>
                      <td className="border border-gray-700 px-4 py-2">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.3 Functional Cookies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">3.3 Functional Cookies</h3>
              <p className="mb-3">These cookies enable enhanced functionality and personalization, such as remembering your preferences.</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="border border-gray-700 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">user_preferences</td>
                      <td className="border border-gray-700 px-4 py-2">Stores display preferences (theme, language)</td>
                      <td className="border border-gray-700 px-4 py-2">12 months</td>
                      <td className="border border-gray-700 px-4 py-2">First-party</td>
                    </tr>
                    <tr className="bg-gray-800/50">
                      <td className="border border-gray-700 px-4 py-2">portfolio_view</td>
                      <td className="border border-gray-700 px-4 py-2">Remembers your portfolio display settings</td>
                      <td className="border border-gray-700 px-4 py-2">6 months</td>
                      <td className="border border-gray-700 px-4 py-2">First-party</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.4 Targeting/Advertising */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">3.4 Targeting/Advertising Cookies</h3>
              <p className="mb-3">These cookies are used to deliver relevant advertisements and track advertising campaign effectiveness.</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="border border-gray-700 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Provider</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-700 px-4 py-2">_fbp</td>
                      <td className="border border-gray-700 px-4 py-2">Facebook</td>
                      <td className="border border-gray-700 px-4 py-2">Tracks visitors for advertising</td>
                      <td className="border border-gray-700 px-4 py-2">3 months</td>
                    </tr>
                    <tr className="bg-gray-800/50">
                      <td className="border border-gray-700 px-4 py-2">IDE</td>
                      <td className="border border-gray-700 px-4 py-2">Google DoubleClick</td>
                      <td className="border border-gray-700 px-4 py-2">Measures ad performance</td>
                      <td className="border border-gray-700 px-4 py-2">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 4. Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">4. Third-Party Cookies</h2>
            <p className="mb-3">We use services from third-party providers who may also set cookies on your device. These include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics</strong>: For website analytics and performance monitoring</li>
              <li><strong>Social Media Platforms</strong>: When you interact with social media sharing buttons</li>
              <li><strong>Advertising Networks</strong>: For delivering relevant advertisements</li>
              <li><strong>Financial Data Providers</strong>: For real-time market data and charts</li>
            </ul>
            <p className="mt-3">We do not control these third-party cookies. Please review the privacy and cookie policies of these third parties for more information.</p>
          </section>

          {/* 5. How We Use Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">5. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5.1 Essential Website Operation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Authenticating users and preventing fraud</li>
                  <li>Remembering your cookie consent preferences</li>
                  <li>Maintaining security and stability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5.2 Analytics and Performance</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Understanding how visitors use our Website</li>
                  <li>Analyzing traffic patterns and user behavior</li>
                  <li>Improving website functionality and user experience</li>
                  <li>Testing new features and designs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5.3 Personalization</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Remembering your preferences and settings</li>
                  <li>Customizing content based on your interests</li>
                  <li>Providing personalized financial information</li>
                  <li>Maintaining your portfolio and watchlist preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5.4 Marketing and Advertising</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Delivering relevant advertisements</li>
                  <li>Measuring advertising effectiveness</li>
                  <li>Limiting ad frequency</li>
                  <li>Understanding which marketing channels are most effective</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Legal Basis */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">6. Legal Basis for Using Cookies</h2>
            <p className="mb-3">We process data through cookies based on:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consent</strong>: For non-essential cookies (analytics, marketing)</li>
              <li><strong>Legitimate Interest</strong>: For essential cookies necessary for website operation</li>
              <li><strong>Contractual Necessity</strong>: For cookies required to provide services you&apos;ve requested</li>
            </ul>
          </section>

          {/* 7. Your Cookie Choices */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">7. Your Cookie Choices</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">7.1 Cookie Consent Manager</h3>
                <p>You can manage your cookie preferences through our cookie consent banner when you first visit our Website, or by clicking the &quot;Cookie Policy&quot; link in the footer.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">7.2 Browser Settings</h3>
                <p className="mb-3">Most web browsers allow you to control cookies through their settings. You can:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>Block all cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Allow cookies only from specific websites</li>
                  <li>Receive notifications when cookies are being sent</li>
                </ul>
                <p className="mb-2 font-semibold">Browser-specific instructions:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Chrome</strong>: Settings &gt; Privacy and Security &gt; Cookies</li>
                  <li><strong>Firefox</strong>: Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                  <li><strong>Safari</strong>: Preferences &gt; Privacy &gt; Cookies and Website Data</li>
                  <li><strong>Edge</strong>: Settings &gt; Privacy, Search, and Services &gt; Cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">7.3 Opt-Out Tools</h3>
                <p className="mb-3">You can opt out of certain third-party cookies:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Google Analytics</strong>: <a href="https://tools.google.com/dlpage/gaoptout" className="text-soft-orange hover:text-orange-400 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Advertising cookies</strong>: <a href="http://optout.networkadvertising.org/" className="text-soft-orange hover:text-orange-400 underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
                  <li><strong>European users</strong>: <a href="http://www.youronlinechoices.eu/" className="text-soft-orange hover:text-orange-400 underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                </ul>
                <p className="mt-3 font-semibold text-yellow-400">Important Note: Blocking or deleting cookies may impact your ability to use certain features of our Website.</p>
              </div>
            </div>
          </section>

          {/* 8. Do Not Track */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">8. Do Not Track Signals</h2>
            <p>
              Some browsers have a &quot;Do Not Track&quot; (DNT) feature that lets you tell websites you do not want your online activities tracked. Currently, there is no universal standard for how websites should respond to DNT signals. We do not currently respond to DNT signals, but we respect your cookie preferences as set through our cookie consent manager.
            </p>
          </section>

          {/* 9. Mobile Devices */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">9. Mobile Devices</h2>
            <p>
              If you access our Website through a mobile device, you may be able to control cookies through your device settings. Consult your device manufacturer&apos;s instructions for more information.
            </p>
          </section>

          {/* 10. International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">10. International Data Transfers</h2>
            <p>
              Some of our third-party service providers are located outside your country, which may involve the transfer of your data across borders. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
            </p>
          </section>

          {/* 11. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">11. Children&apos;s Privacy</h2>
            <p>
              Our Website is not intended for children under 16 years of age. We do not knowingly collect personal information from children through cookies. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          {/* 12. Changes to This Cookie Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">12. Changes to This Cookie Policy</h2>
            <p className="mb-3">We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our business operations, or for other reasons. We will notify you of material changes by:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Posting a notice on our Website</li>
              <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>Sending an email notification (if you have subscribed to our services)</li>
            </ul>
            <p className="mt-3">We encourage you to review this Cookie Policy periodically.</p>
          </section>

          {/* 13. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">13. Contact Us</h2>
            <p className="mb-3">If you have questions about our use of cookies or this Cookie Policy, please contact us:</p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <p className="font-semibold text-white mb-1">Money365.Market</p>
              <p>Email: <a href="mailto:office@money365.market" className="text-soft-orange hover:text-orange-400 underline">office@money365.market</a></p>
              <p>Website: <a href="https://money365.market/contact" className="text-soft-orange hover:text-orange-400 underline">https://money365.market/contact</a></p>
            </div>
            <p className="mt-3">For specific data protection inquiries, you may also contact us at the same email address.</p>
          </section>

          {/* 14. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">14. Your Rights</h2>
            <p className="mb-3">Under applicable data protection laws (including GDPR and CCPA), you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, please contact us using the details provided above.</p>
          </section>

          {/* 15. Complaints */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">15. Complaints</h2>
            <p>
              If you are located in the European Economic Area and believe we have not adequately addressed your concerns, you have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          {/* Consent Statement */}
          <section className="border-t border-gray-700 pt-6">
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">Consent Statement</h2>
            <p>
              By clicking &quot;Accept All Cookies&quot; on our cookie banner, you consent to the storage of cookies on your device for the purposes described in this Cookie Policy. You can withdraw or modify your consent at any time through our cookie settings.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
