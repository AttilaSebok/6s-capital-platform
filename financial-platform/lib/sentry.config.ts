// Sentry Configuration
// This file is ready for Sentry setup when you're ready to enable error tracking

export const sentryConfig = {
  // Get your DSN from https://sentry.io/
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',

  // Environment
  environment: process.env.NODE_ENV || 'development',

  // Trace sample rate (0.0 to 1.0)
  // In production, you might want to use 0.1 (10%) to reduce costs
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Enable debug mode in development
  debug: process.env.NODE_ENV === 'development',

  // Ignore certain errors
  ignoreErrors: [
    // Browser extensions
    'top.GLOBALS',
    'canvas.contentDocument',
    // Network errors that are not actionable
    'NetworkError',
    'Network request failed',
    // Random plugins/extensions
    'ResizeObserver loop limit exceeded',
  ],

  // Release tracking
  release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,

  // User context
  beforeSend(event: any, hint: any) {
    // Filter out non-production errors if needed
    if (process.env.NODE_ENV !== 'production') {
      console.log('Sentry Event:', event)
    }
    return event
  },
}

// Quick setup instructions:
// 1. Sign up at https://sentry.io/
// 2. Create a new Next.js project
// 3. Copy your DSN
// 4. Add to Vercel environment variables:
//    NEXT_PUBLIC_SENTRY_DSN=your-dsn-here
// 5. Install Sentry: npx @sentry/wizard@latest -i nextjs
// 6. Run: npm run build
