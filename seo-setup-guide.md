# SEO Setup Guide - 6s Capital

## ✅ Completed Setup Steps

### 1. Google Analytics 4 Integration
- [x] Created `lib/analytics.ts` with tracking functions
- [x] Created `GoogleAnalytics.tsx` component
- [x] Added GA component to root layout
- [x] Created TypeScript definitions for gtag
- [x] Set up custom event tracking:
  - Newsletter signups
  - Article reads
  - Tool usage
  - Lead magnet downloads
  - Affiliate clicks
  - Scroll depth
  - Time on page

### 2. Sitemap & Robots.txt
- [x] Created `app/sitemap.ts` (auto-generates `/sitemap.xml`)
- [x] Created `app/robots.ts` (auto-generates `/robots.txt`)
- [x] All 10 articles included in sitemap
- [x] Proper priority and change frequency set

---

## 📋 Next Steps (Manual Configuration Required)

### Step 1: Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon, bottom left)
3. Click **Create Property**
4. Fill in:
   - Property name: `6s Capital`
   - Time zone: Your timezone
   - Currency: USD
5. Click **Next**
6. Business details:
   - Industry: Finance
   - Business size: Small
7. Click **Next**, then **Create**
8. Choose platform: **Web**
9. Set up web stream:
   - Website URL: `https://6s-capital-platform.vercel.app`
   - Stream name: `6s Capital Production`
10. Click **Create stream**
11. **Copy the Measurement ID** (format: G-XXXXXXXXXX)

### Step 2: Add Measurement ID to Environment Variables

1. In your project root, create `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace with your actual Measurement ID)

2. In Vercel dashboard:
   - Go to **Settings** → **Environment Variables**
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - Redeploy site

### Step 3: Verify Google Analytics is Working

1. Visit your live site: https://6s-capital-platform.vercel.app
2. In Google Analytics → **Reports** → **Realtime**
3. You should see yourself as an active user
4. Click around the site to generate pageviews
5. Verify events are firing (check **Events** tab in Realtime)

---

### Step 4: Create Google Search Console Property

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **Add Property**
3. Choose **URL prefix** method
4. Enter: `https://6s-capital-platform.vercel.app`
5. Click **Continue**

6. **Verify ownership** (choose one method):
   - **Recommended: HTML file upload**
     1. Download the HTML verification file
     2. Place it in `public/` folder in your project
     3. Deploy to Vercel
     4. Click "Verify" in GSC

   - **Alternative: HTML tag method**
     1. GSC will give you a meta tag like: `<meta name="google-site-verification" content="abc123..." />`
     2. Add this to `app/layout.tsx` metadata
     3. Deploy to Vercel
     4. Click "Verify" in GSC

### Step 5: Submit Sitemap to Google Search Console

1. In Google Search Console, select your property
2. Go to **Sitemaps** (left sidebar)
3. Enter: `sitemap.xml`
4. Click **Submit**
5. Wait 24-48 hours for Google to crawl
6. Check **Coverage** report to see indexed pages

---

## 🎯 Custom Event Tracking Usage

### In Your Components

```typescript
import { trackNewsletterSignup, trackArticleRead, trackToolUsage } from '@/lib/analytics'

// Newsletter signup button
<button onClick={() => {
  // Your signup logic
  trackNewsletterSignup('homepage')
}}>
  Subscribe
</button>

// When user finishes reading an article
useEffect(() => {
  // Detect when user scrolls to bottom
  trackArticleRead('How to Start Investing', 'Beginner Guides', '12 min read')
}, [])

// When user uses a tool
<button onClick={() => {
  trackToolUsage('Stock Screener', 'filter_applied')
  // Your filter logic
}}>
  Apply Filters
</button>
```

---

## 📊 Analytics Goals to Set Up (In GA4)

### Conversions to Track:
1. **Newsletter Signup**
   - Event: `newsletter_signup`
   - Mark as conversion in GA4

2. **Article Completion**
   - Event: `article_read`
   - Mark as conversion

3. **Tool Usage**
   - Event: `tool_usage`
   - Track as engagement metric

4. **Lead Magnet Download**
   - Event: `lead_magnet_download`
   - Mark as conversion (high value)

5. **Affiliate Click**
   - Event: `affiliate_click`
   - Track revenue potential

### How to Mark Events as Conversions in GA4:
1. Go to **Admin** → **Events**
2. Find your custom event (e.g., `newsletter_signup`)
3. Toggle **Mark as conversion**

---

## 🔍 SEO Checklist (On-Page)

### Homepage
- [ ] Compelling meta title (55-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] H1 tag present and keyword-optimized
- [ ] Internal links to key pages (articles, tools)
- [ ] Clear CTA (newsletter signup)
- [ ] Fast load time (<2 seconds)

### Article Pages
- [ ] Unique meta title per article
- [ ] Unique meta description per article
- [ ] H1 = Article title
- [ ] H2-H6 proper hierarchy
- [ ] Internal links to related articles (3-5 per article)
- [ ] External links to authoritative sources
- [ ] Images have alt text
- [ ] Reading time displayed
- [ ] Social share buttons
- [ ] Schema markup (Article type)

### Technical SEO
- [x] Sitemap.xml auto-generated
- [x] Robots.txt configured
- [x] HTTPS enabled (Vercel default)
- [ ] Canonical URLs set (prevent duplicate content)
- [ ] Open Graph tags (social sharing)
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD for articles)

---

## 🚀 Next SEO Enhancements

### Week 2-3: Add Structured Data

Create `/lib/structuredData.ts`:

```typescript
export function generateArticleSchema(article: {
  title: string
  description: string
  publishDate: string
  author: string
  category: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.publishDate,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "6s Capital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://6s-capital-platform.vercel.app/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "articleSection": article.category
  }
}
```

Add to article pages in `<script type="application/ld+json">` tag.

### Week 3-4: Add Open Graph Tags

In each article's metadata:

```typescript
export const metadata = {
  title: 'Article Title',
  description: 'Article description',
  openGraph: {
    title: 'Article Title',
    description: 'Article description',
    url: 'https://6s-capital-platform.vercel.app/articles/slug',
    siteName: '6s Capital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'article',
    publishedTime: '2025-01-19',
    authors: ['6s Capital Research Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Article Title',
    description: 'Article description',
    images: ['/og-image.jpg'],
  },
}
```

---

## 📈 Monitoring & Reporting

### Weekly Check (Every Monday):
1. Google Analytics → **Realtime** (verify tracking works)
2. Google Analytics → **Reports → Acquisition** (traffic sources)
3. Google Search Console → **Performance** (search queries, clicks, impressions)
4. Google Search Console → **Coverage** (indexing status)

### Monthly Review (First of month):
1. Top 10 pages by traffic
2. Top 10 search queries
3. Conversion rates (newsletter signups, tool usage)
4. Bounce rate trends
5. Average session duration

### Quarterly Deep Dive:
1. Keyword rankings progress
2. Backlink analysis (use Ahrefs free tier or Moz)
3. Competitor analysis
4. Content gaps (what keywords are competitors ranking for that we're not?)

---

## 🎯 SEO Goals - 6 Month Targets

| Metric | Month 1 | Month 3 | Month 6 |
|--------|---------|---------|---------|
| Organic Sessions | 100-200 | 1,000-2,000 | 5,000-10,000 |
| Indexed Pages | 15 | 30 | 50+ |
| Keywords Ranking (Top 10) | 0-2 | 5-10 | 15-25 |
| Domain Authority | 0 | 10-15 | 20-30 |
| Backlinks | 0 | 5-10 | 20-30 |

---

## ✅ Action Items

1. **Today**: Create GA4 property, get Measurement ID
2. **Today**: Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to `.env.local` and Vercel
3. **Today**: Deploy updated code
4. **Today**: Create Google Search Console property
5. **Today**: Verify ownership and submit sitemap
6. **This Week**: Check GA4 Realtime to confirm tracking works
7. **This Week**: Mark key events as conversions in GA4
8. **Next Week**: Add structured data to article pages
9. **Next Week**: Create Open Graph images (1200x630px)

---

**Status**: Infrastructure ready, awaiting GA4 Measurement ID configuration
**Next**: Create GA4 property and GSC property (manual steps above)
