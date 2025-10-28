# 6S Capital - Financial Analysis Platform

A professional financial website built with Next.js, featuring real-time market data, stock screening tools, and investment analysis content for advanced investors.

## Features

- **Real-Time Market Data**: Live charts powered by TradingView
- **Stock Screener**: Filter stocks by market cap, P/E ratio, dividend yield, and more
- **Market Overview**: Multi-asset class dashboard (stocks, forex, commodities, bonds)
- **Investment Analysis**: Blog system for publishing market insights and strategies
- **Newsletter System**: Email subscription for market updates
- **Responsive Design**: Mobile-first approach with dark mode support
- **Monetization Ready**: Affiliate link structure, premium content sections, ad placements

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: TradingView Widgets (free)
- **Data APIs**: Alpha Vantage, Finnhub, or Yahoo Finance (choose one)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd financial-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

4. **Edit `.env.local` and add your API keys**:
   ```env
   # Get free API key from https://www.alphavantage.co/support/#api-key
   ALPHA_VANTAGE_API_KEY=your_key_here

   # Or use Finnhub: https://finnhub.io/register
   FINNHUB_API_KEY=your_key_here

   # Email service (optional, choose one)
   MAILCHIMP_API_KEY=your_key_here
   CONVERTKIT_API_KEY=your_key_here
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
financial-platform/
├── app/
│   ├── api/                  # API routes
│   │   ├── stock/[symbol]/   # Stock data endpoint
│   │   └── newsletter/       # Newsletter signup endpoint
│   ├── screener/             # Stock screener page
│   ├── markets/              # Market overview page
│   ├── analysis/             # Analysis/insights page
│   ├── blog/                 # Blog section
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── TradingViewWidget.tsx # Chart component
│   ├── MarketOverview.tsx    # Market dashboard
│   ├── NewsletterSignup.tsx  # Email capture form
│   └── FeaturedArticles.tsx  # Article cards
├── lib/                      # Utility functions
├── public/                   # Static assets
└── tailwind.config.js        # Tailwind configuration
```

## API Integration

### Stock Data APIs (Choose One)

#### Option 1: Alpha Vantage (Recommended for beginners)
- **Free Tier**: 500 API calls per day
- **Sign up**: https://www.alphavantage.co/support/#api-key
- **Documentation**: https://www.alphavantage.co/documentation/

```typescript
// Example: app/api/stock/[symbol]/route.ts
const response = await fetch(
  `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
)
```

#### Option 2: Finnhub
- **Free Tier**: 60 API calls per minute
- **Sign up**: https://finnhub.io/register
- **Documentation**: https://finnhub.io/docs/api

```typescript
const response = await fetch(
  `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
)
```

#### Option 3: Yahoo Finance (via yfinance)
- **Free**: Unlimited (unofficial)
- **NPM Package**: `npm install yahoo-finance2`
- **Note**: Not officially supported by Yahoo

#### Option 4: IEX Cloud
- **Free Tier**: 50,000 core messages/month
- **Sign up**: https://iexcloud.io/
- **Documentation**: https://iexcloud.io/docs/

### Email Newsletter Integration

#### Option 1: Mailchimp
```bash
npm install @mailchimp/mailchimp_marketing
```

- **Free Tier**: Up to 500 subscribers, 1,000 emails/month
- **Get API Key**: https://mailchimp.com/help/about-api-keys/

#### Option 2: ConvertKit
- **Free Tier**: Up to 1,000 subscribers
- **Get API Key**: https://app.convertkit.com/account/edit

#### Option 3: SendGrid
```bash
npm install @sendgrid/mail
```

- **Free Tier**: 100 emails per day
- **Get API Key**: https://app.sendgrid.com/settings/api_keys

## Customization

### Branding
- Update site name in `app/layout.tsx` (metadata)
- Update logo in `components/Header.tsx`
- Modify color scheme in `tailwind.config.js`

### Content
- Add articles to `components/FeaturedArticles.tsx`
- Create blog post pages in `app/blog/[slug]/page.tsx`
- Modify homepage sections in `app/page.tsx`

### Charts
- TradingView widgets are free and customizable
- No API key required for basic charts
- Modify symbols in `components/TradingViewWidget.tsx`

## Monetization Strategy

### 1. Affiliate Marketing (Fastest Revenue)

**Broker Affiliates** (High Commission):
- Interactive Brokers: $100-200 per signup
- TD Ameritrade: $50-100 per account
- eToro: $100-600 per deposit
- Trading 212: €30-100 per deposit

**How to Add Affiliate Links**:
```tsx
<a
  href="https://www.interactivebrokers.com?ref=YOUR_AFFILIATE_ID"
  className="btn-primary"
  rel="nofollow sponsored"
>
  Open Account
</a>
```

**Disclosure** (Required):
```tsx
<p className="text-sm text-gray-500">
  We may receive compensation if you open an account through our links.
</p>
```

### 2. Premium Subscription

- **Free Tier**: Basic charts, limited screener, some articles
- **Premium ($19-29/mo)**: Real-time data, advanced screener, all content
- **Pro ($49-79/mo)**: API access, backtesting, alerts, webinars

**Implement with**:
- Stripe or Paddle for payments
- NextAuth.js for authentication
- Database for user management

### 3. Display Advertising

- **Google AdSense**: $1-5 CPM (easy setup)
- **Ezoic**: $10-20 CPM (needs 10k sessions/mo)
- **Mediavine**: $15-30 CPM (needs 50k sessions/mo)

**Note**: Financial niche typically has higher CPM rates ($10-40)

### 4. Sponsored Content

- Broker reviews: $500-5,000 per article
- Platform comparisons: $1,000-10,000
- Newsletter mentions: $200-2,000

**Always label as**:
```tsx
<span className="text-xs font-semibold">Sponsored Content</span>
```

## SEO Optimization

1. **Content Strategy**:
   - Target long-tail keywords: "best dividend stocks 2025", "how to screen value stocks"
   - Write 2,000+ word in-depth guides
   - Update content regularly

2. **Technical SEO**:
   - Next.js handles most SEO automatically
   - Add meta tags in `app/layout.tsx`
   - Use semantic HTML
   - Optimize images (WebP format)

3. **Link Building**:
   - Guest post on other financial blogs
   - HARO (Help a Reporter Out) for backlinks
   - Participate in finance forums (Reddit r/investing, r/stocks)

## Performance Optimization

- **Next.js Image Component**: Use for all images
- **API Caching**: Cache API responses with Redis
- **Static Generation**: Use `generateStaticParams` for blog posts
- **CDN**: Deploy on Vercel (free) or Cloudflare

## Deployment

### Vercel (Recommended - Free)

1. Push code to GitHub
2. Connect to Vercel: https://vercel.com
3. Add environment variables in Vercel dashboard
4. Deploy (automatic on every push)

### Alternative: Netlify, Railway, or Fly.io

## Legal Requirements

1. **Disclaimer** (REQUIRED):
   ```
   The information provided on this website is for educational purposes only.
   It should not be considered as financial advice. Always conduct your own
   research and consult with a licensed financial advisor.
   ```

2. **Affiliate Disclosure** (REQUIRED by FTC):
   ```
   We may receive compensation if you use our affiliate links.
   This does not affect our recommendations or analysis.
   ```

3. **Privacy Policy**: Required if you collect emails
4. **Terms of Service**: Recommended
5. **Cookie Policy**: Required in EU (GDPR)

## Content Ideas

### High-Value Articles (Good for SEO):
- "Best Stock Screeners 2025" (affiliate opportunities)
- "Value Investing Strategy Guide"
- "Technical Analysis Patterns Cheat Sheet"
- "How to Read Financial Statements"
- "Dividend Investing for Passive Income"
- "Options Trading Basics"
- "ETF vs Mutual Funds"
- "Tax-Efficient Investing Strategies"

### Regular Content:
- Daily/Weekly market summaries
- Earnings analysis
- Sector rotation trends
- Fed policy analysis
- Stock picks with rationale

## Growth Roadmap

### Month 1-3 (MVP):
- [x] Basic website with TradingView charts
- [x] Stock screener with sample data
- [x] Newsletter signup
- [ ] 20-30 quality articles
- [ ] Google Analytics setup
- [ ] First affiliate partnerships

### Month 4-6 (Monetization):
- [ ] Connect real-time data APIs
- [ ] 50+ articles published
- [ ] 5,000+ monthly visitors
- [ ] $500-2,000/mo revenue (affiliates + ads)
- [ ] Email list: 500-1,000 subscribers

### Month 7-12 (Scale):
- [ ] Premium subscription launch
- [ ] Advanced screener features
- [ ] Community/forum
- [ ] 20,000+ monthly visitors
- [ ] $5,000-15,000/mo revenue

### Year 2+:
- [ ] API for developers
- [ ] Mobile app
- [ ] Backtesting tools
- [ ] 50,000+ monthly visitors
- [ ] $20,000-50,000/mo revenue

## Costs Estimate

### Initial (First 6 months):
- Domain: $15/year
- Hosting: $0 (Vercel free tier)
- APIs: $0-50/mo (free tiers)
- Email: $0 (free tiers)
- **Total**: ~$0-60/mo

### Growth Phase (6-12 months):
- Hosting: $20-100/mo (as traffic grows)
- APIs: $200-500/mo (premium data)
- Email: $50-150/mo (more subscribers)
- Content: $500-2,000/mo (freelancers)
- **Total**: ~$770-2,750/mo

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- TradingView widgets: https://www.tradingview.com/widget/
- Open an issue on GitHub

## License

ISC License - Feel free to use for your project!

---

**Built with Next.js 16 + TypeScript + Tailwind CSS**
