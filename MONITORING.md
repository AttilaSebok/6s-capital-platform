# 📊 Monitoring & Analytics Setup Guide

This guide covers monitoring, analytics, and error tracking for the 6s Capital platform.

---

## 🎯 Monitoring Stack Overview

```
┌─────────────────────────────────────────────┐
│           User Traffic                       │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│        Vercel (Hosting)                      │
│        - Built-in Analytics                  │
│        - Speed Insights                      │
│        - Web Vitals                          │
└──────────────────┬──────────────────────────┘
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
┌─────────────────┐  ┌─────────────────┐
│  Error Tracking │  │  Performance    │
│  (Sentry)       │  │  Monitoring     │
└─────────────────┘  └─────────────────┘
```

---

## 1️⃣ Vercel Analytics (Built-in)

### Setup (2 minutes)

1. **Enable in Vercel Dashboard**:
   - Go to your project → Settings → Analytics
   - Click "Enable Analytics"
   - Free on all plans

2. **Install Speed Insights** (optional but recommended):

```bash
cd financial-platform
npm install @vercel/speed-insights
```

3. **Add to your layout**:

```typescript
// financial-platform/app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### What You Get:

- ✅ Page views and unique visitors
- ✅ Top pages and traffic sources
- ✅ Geographic distribution
- ✅ Device and browser analytics
- ✅ Web Vitals (LCP, FID, CLS)
- ✅ Real User Monitoring (RUM)

---

## 2️⃣ Error Tracking with Sentry (Recommended)

### Why Sentry?

- Real-time error tracking
- Stack traces and context
- User impact analysis
- Performance monitoring
- **Free tier**: 5,000 events/month

### Setup (10 minutes)

#### Step 1: Create Sentry Account

1. Go to https://sentry.io/signup/
2. Create a new project → Select "Next.js"
3. Copy your DSN key

#### Step 2: Install Sentry

```bash
cd financial-platform
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

#### Step 3: Configure Sentry

The wizard creates these files:
- `sentry.client.config.js`
- `sentry.server.config.js`
- `sentry.edge.config.js`

Add your DSN to `.env.local`:

```bash
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your-auth-token
```

#### Step 4: Test Error Tracking

Create a test error page:

```typescript
// financial-platform/app/test-error/page.tsx
'use client'

export default function TestError() {
  return (
    <button onClick={() => {
      throw new Error('Test error from 6s Capital!')
    }}>
      Trigger Test Error
    </button>
  )
}
```

Visit `/test-error` and click the button. Check Sentry dashboard!

#### Step 5: Production Setup

Add to Vercel environment variables:
```bash
NEXT_PUBLIC_SENTRY_DSN=your-dsn
SENTRY_AUTH_TOKEN=your-token
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project
```

---

## 3️⃣ Performance Monitoring

### Vercel Web Vitals

Already included! Monitor:
- **LCP** (Largest Contentful Paint) → Target: < 2.5s
- **FID** (First Input Delay) → Target: < 100ms
- **CLS** (Cumulative Layout Shift) → Target: < 0.1

### Lighthouse CI (Automated)

Add to GitHub Actions:

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on:
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://your-preview-url.vercel.app
            https://your-preview-url.vercel.app/markets
            https://your-preview-url.vercel.app/screener
          uploadArtifacts: true
```

---

## 4️⃣ Uptime Monitoring

### Option 1: UptimeRobot (Free)

1. Sign up: https://uptimerobot.com
2. Add your Vercel URL
3. Set check interval: 5 minutes
4. Add alert contacts (email, Slack)

### Option 2: Better Uptime (Free tier)

1. Sign up: https://betteruptime.com
2. More features than UptimeRobot
3. Status page included
4. Incident management

---

## 5️⃣ User Analytics (Optional)

### Google Analytics 4 (Free)

```bash
npm install @next/third-parties
```

```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Plausible Analytics (Privacy-focused, Paid)

```bash
npm install next-plausible
```

More privacy-friendly alternative to Google Analytics.

---

## 6️⃣ Dashboard Setup

### Recommended Dashboard Layout

```
┌──────────────────────────────────────────────────────┐
│  6s Capital - Production Monitoring Dashboard        │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ⬆️ Uptime: 99.9%        📊 Visitors: 1,234         │
│  ⚡ Avg Response: 234ms  🔥 Error Rate: 0.1%        │
│                                                       │
├─────────────────┬────────────────────────────────────┤
│                 │                                     │
│  Traffic        │   Top Pages                        │
│  [Graph]        │   1. Home (45%)                    │
│                 │   2. Markets (30%)                 │
│                 │   3. Screener (25%)                │
│                 │                                     │
├─────────────────┼────────────────────────────────────┤
│                 │                                     │
│  Web Vitals     │   Recent Errors                    │
│  LCP: 1.2s ✅   │   1. API timeout (2 mins ago)     │
│  FID: 45ms ✅   │   2. Widget load fail (5 mins)    │
│  CLS: 0.05 ✅   │                                     │
│                 │                                     │
└─────────────────┴────────────────────────────────────┘
```

---

## 7️⃣ Alerts Configuration

### Critical Alerts (Immediate Action)

```yaml
High Priority (Slack + Email + SMS):
  - Site down (uptime < 99%)
  - Error rate > 5%
  - Response time > 3s
  - Critical errors (database, auth)
```

### Warning Alerts (Review Soon)

```yaml
Medium Priority (Slack + Email):
  - Error rate > 1%
  - Response time > 1s
  - Web Vitals degraded
  - High memory usage
```

### Info Alerts (Daily Digest)

```yaml
Low Priority (Email only):
  - Daily traffic summary
  - New errors detected
  - Performance trends
  - User behavior insights
```

---

## 8️⃣ Monitoring Checklist

### Daily
- [ ] Check error rate in Sentry
- [ ] Review uptime status
- [ ] Verify critical user flows

### Weekly
- [ ] Analyze traffic trends
- [ ] Review Web Vitals scores
- [ ] Check performance degradation
- [ ] Review user feedback

### Monthly
- [ ] Cost analysis
- [ ] Performance benchmarking
- [ ] Security audit
- [ ] Capacity planning

---

## 📊 Key Metrics to Track

### Performance Metrics
- **Response Time**: < 500ms
- **Time to First Byte (TTFB)**: < 200ms
- **Largest Contentful Paint**: < 2.5s
- **First Input Delay**: < 100ms

### Reliability Metrics
- **Uptime**: > 99.9%
- **Error Rate**: < 0.1%
- **Success Rate**: > 99.9%

### User Metrics
- **Page Views**: Track trends
- **Unique Visitors**: Growth rate
- **Bounce Rate**: < 40%
- **Avg Session Duration**: > 2 minutes

---

## 🚨 Incident Response

### When Error Rate Spikes:

1. **Check Sentry** for error patterns
2. **Review recent deployments** (last 24h)
3. **Check external services** (TradingView API)
4. **Rollback if necessary**
5. **Document incident**

### When Site is Down:

1. **Check Vercel status**: https://vercel-status.com
2. **Verify DNS** propagation
3. **Check domain** registration
4. **Review recent** config changes
5. **Contact Vercel** support if needed

---

## 💰 Cost Breakdown

```
Free Tier (Recommended for MVP):
├─ Vercel Analytics: $0/month ✅
├─ Sentry (5K events): $0/month ✅
├─ UptimeRobot: $0/month ✅
└─ Total: $0/month

Startup Tier (Growing Product):
├─ Vercel Pro: $20/month
├─ Sentry Team (50K events): $26/month
├─ Better Uptime: $18/month
└─ Total: $64/month

Enterprise Tier (High Scale):
├─ Vercel Enterprise: Custom
├─ Sentry Business: Custom
├─ Datadog: Starting $15/host/month
└─ Total: $200+/month
```

---

## 🎉 Setup Complete!

You now have:
- ✅ Real-time error tracking
- ✅ Performance monitoring
- ✅ Uptime alerts
- ✅ User analytics
- ✅ Automated reporting

**Next Steps:**
1. Set up your first dashboard
2. Configure alert thresholds
3. Test error tracking
4. Share dashboard with team
5. Schedule weekly reviews

---

**Last Updated**: January 2025
**Monitoring Stack**: Vercel Analytics + Sentry + UptimeRobot
**Estimated Setup Time**: 30 minutes
**Monthly Cost**: $0 (free tier) - $64 (startup tier)
