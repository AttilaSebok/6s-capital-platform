/**
 * GDPR-compliant Cookie Management Utility
 * Handles cookie consent and preferences storage
 */

export interface CookieConsent {
  necessary: boolean // Always true, cannot be disabled
  analytics: boolean
  marketing: boolean
  preferences: boolean
  timestamp: number
  version: string
}

const COOKIE_CONSENT_NAME = 'money365_cookie_consent'
const COOKIE_CONSENT_VERSION = '1.0'
const COOKIE_EXPIRY_DAYS = 365

/**
 * Get current cookie consent preferences
 */
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null

  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_NAME)
    if (!consent) return null

    const parsed = JSON.parse(consent) as CookieConsent

    // Check if consent version matches
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null
    }

    // Check if consent is still valid (1 year)
    const consentAge = Date.now() - parsed.timestamp
    const maxAge = COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000

    if (consentAge > maxAge) {
      localStorage.removeItem(COOKIE_CONSENT_NAME)
      return null
    }

    return parsed
  } catch (error) {
    console.error('Error reading cookie consent:', error)
    return null
  }
}

/**
 * Save cookie consent preferences
 */
export function setCookieConsent(consent: Omit<CookieConsent, 'timestamp' | 'version' | 'necessary'>): void {
  if (typeof window === 'undefined') return

  const fullConsent: CookieConsent = {
    ...consent,
    necessary: true, // Always true
    timestamp: Date.now(),
    version: COOKIE_CONSENT_VERSION,
  }

  try {
    localStorage.setItem(COOKIE_CONSENT_NAME, JSON.stringify(fullConsent))

    // Dispatch custom event for components to react to consent changes
    window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: fullConsent }))

    // Apply consent immediately
    applyConsent(fullConsent)
  } catch (error) {
    console.error('Error saving cookie consent:', error)
  }
}

/**
 * Check if user has given consent
 */
export function hasConsent(): boolean {
  return getCookieConsent() !== null
}

/**
 * Check if specific cookie category is allowed
 */
export function isCategoryAllowed(category: keyof Omit<CookieConsent, 'timestamp' | 'version'>): boolean {
  const consent = getCookieConsent()
  if (!consent) return false
  return consent[category] === true
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  setCookieConsent({
    analytics: true,
    marketing: true,
    preferences: true,
  })
}

/**
 * Accept only necessary cookies
 */
export function acceptNecessaryCookies(): void {
  setCookieConsent({
    analytics: false,
    marketing: false,
    preferences: false,
  })
}

/**
 * Revoke cookie consent
 */
export function revokeConsent(): void {
  if (typeof window === 'undefined') return

  localStorage.removeItem(COOKIE_CONSENT_NAME)

  // Clear analytics cookies
  clearAnalyticsCookies()

  // Dispatch event
  window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: null }))
}

/**
 * Apply consent settings (enable/disable tracking)
 */
function applyConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return

  // Handle Google Analytics
  if (consent.analytics) {
    enableGoogleAnalytics()
  } else {
    disableGoogleAnalytics()
  }

  // Handle other tracking services here as needed
}

/**
 * Enable Google Analytics
 */
function enableGoogleAnalytics(): void {
  if (typeof window === 'undefined') return

  // Re-enable Google Analytics if it was disabled
  if ((window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'granted'
    })
  }
}

/**
 * Disable Google Analytics
 */
function disableGoogleAnalytics(): void {
  if (typeof window === 'undefined') return

  // Disable Google Analytics
  if ((window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'denied'
    })
  }

  // Set opt-out flag
  (window as any)[`ga-disable-${process.env.NEXT_PUBLIC_GA_ID}`] = true
}

/**
 * Clear analytics cookies
 */
function clearAnalyticsCookies(): void {
  if (typeof window === 'undefined') return

  // Clear Google Analytics cookies
  const gaCookies = document.cookie.split(';').filter(cookie => {
    const name = cookie.trim().split('=')[0]
    return name.startsWith('_ga') || name.startsWith('_gid')
  })

  gaCookies.forEach(cookie => {
    const name = cookie.trim().split('=')[0]
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`
  })
}

/**
 * Get cookie categories with descriptions
 */
export function getCookieCategories() {
  return [
    {
      id: 'necessary' as const,
      name: 'Necessary Cookies',
      description: 'These cookies are essential for the website to function. They cannot be disabled.',
      required: true,
    },
    {
      id: 'analytics' as const,
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors use the site, allowing us to improve the user experience.',
      required: false,
    },
    {
      id: 'preferences' as const,
      name: 'Preference Cookies',
      description: 'These cookies allow the website to remember your choices (e.g., language, region).',
      required: false,
    },
    {
      id: 'marketing' as const,
      name: 'Marketing Cookies',
      description: 'These cookies are used to display advertisements and measure their performance.',
      required: false,
    },
  ]
}
