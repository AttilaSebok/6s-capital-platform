'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense, useState } from 'react'
import { pageview, GA_MEASUREMENT_ID } from '@/lib/analytics'
import { getCookieConsent, isCategoryAllowed } from '@/lib/cookies'

function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [canTrack, setCanTrack] = useState(false)

  useEffect(() => {
    // Check if analytics is allowed
    const checkConsent = () => {
      setCanTrack(isCategoryAllowed('analytics'))
    }

    checkConsent()

    // Listen for consent changes
    const handleConsentChange = () => {
      checkConsent()
    }

    window.addEventListener('cookieConsentChange', handleConsentChange)
    return () => window.removeEventListener('cookieConsentChange', handleConsentChange)
  }, [])

  useEffect(() => {
    if (pathname && canTrack) {
      pageview(pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''))
    }
  }, [pathname, searchParams, canTrack])

  return null
}

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      setHasConsent(isCategoryAllowed('analytics'))
    }

    checkConsent()

    // Listen for consent changes
    const handleConsentChange = () => {
      checkConsent()
    }

    window.addEventListener('cookieConsentChange', handleConsentChange)
    return () => window.removeEventListener('cookieConsentChange', handleConsentChange)
  }, [])

  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null
  }

  // Don't load Google Analytics scripts until user consents
  if (!hasConsent) {
    return null
  }

  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Default consent to denied
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            // Update consent to granted since user has consented
            gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });

            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  )
}
