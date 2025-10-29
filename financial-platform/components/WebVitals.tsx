'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log Web Vitals in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Web Vital:', {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
      })
    }

    // In production, you can send metrics to your analytics service
    // Example: analytics.track('web-vital', metric)

    // Vercel Analytics automatically tracks Web Vitals
    // No additional code needed if using @vercel/analytics

    // For custom analytics (Google Analytics, Mixpanel, etc.):
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      })
    }
  })

  return null
}

// Web Vitals Thresholds (for reference):
// LCP (Largest Contentful Paint): < 2.5s (good), < 4s (needs improvement), >= 4s (poor)
// FID (First Input Delay): < 100ms (good), < 300ms (needs improvement), >= 300ms (poor)
// CLS (Cumulative Layout Shift): < 0.1 (good), < 0.25 (needs improvement), >= 0.25 (poor)
// TTFB (Time to First Byte): < 800ms (good), < 1800ms (needs improvement), >= 1800ms (poor)
// FCP (First Contentful Paint): < 1.8s (good), < 3s (needs improvement), >= 3s (poor)
