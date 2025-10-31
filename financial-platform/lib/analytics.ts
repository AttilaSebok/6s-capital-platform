// Google Analytics 4 tracking functions

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID as string, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, params?: Record<string, any>) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, params)
  }
}

// Custom events for 6s Capital
export const trackNewsletterSignup = (location: string) => {
  event('newsletter_signup', {
    event_category: 'engagement',
    event_label: location, // 'homepage', 'article_end', 'sidebar', etc.
  })
}

export const trackArticleRead = (articleTitle: string, category: string, readTime: string) => {
  event('article_read', {
    event_category: 'content',
    event_label: articleTitle,
    article_category: category,
    reading_time: readTime,
  })
}

export const trackToolUsage = (toolName: string, action: string) => {
  event('tool_usage', {
    event_category: 'tools',
    event_label: toolName,
    tool_action: action, // 'open', 'filter_applied', 'export', etc.
  })
}

export const trackLeadMagnetDownload = (magnetName: string) => {
  event('lead_magnet_download', {
    event_category: 'conversion',
    event_label: magnetName,
  })
}

export const trackAffiliateClick = (partner: string, placement: string) => {
  event('affiliate_click', {
    event_category: 'monetization',
    event_label: partner,
    placement: placement,
  })
}

// Scroll depth tracking
export const trackScrollDepth = (depth: number) => {
  event('scroll_depth', {
    event_category: 'engagement',
    value: depth, // 25, 50, 75, 100
  })
}

// Time on page tracking
export const trackTimeOnPage = (seconds: number, pagePath: string) => {
  event('time_on_page', {
    event_category: 'engagement',
    event_label: pagePath,
    value: seconds,
  })
}
