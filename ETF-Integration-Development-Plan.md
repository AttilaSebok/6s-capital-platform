# Money365.Market - ETF Integration Development Plan

**Project**: money365.market Financial Platform  
**Feature**: ETF Investment Center  
**Version**: 1.0  
**Last Updated**: November 9, 2025  
**Status**: Planning Phase

---

## 📑 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Vision & Philosophy](#vision--philosophy)
3. [Site Structure](#site-structure)
4. [Development Phases](#development-phases)
5. [Technical Architecture](#technical-architecture)
6. [Component Library](#component-library)
7. [API Integration](#api-integration)
8. [Monetization Strategy](#monetization-strategy)
9. [SEO & Content Strategy](#seo--content-strategy)
10. [Success Metrics](#success-metrics)
11. [Timeline & Milestones](#timeline--milestones)

---

## Executive Summary

### Objective
Build a comprehensive ETF (Exchange-Traded Fund) investment center within money365.market that provides advanced retail investors with professional-grade tools for ETF research, comparison, and portfolio management.

### Key Features
- **ETF Hub**: Central landing page with categorized ETF browsing
- **ETF Detail Pages**: In-depth analysis with live holdings data via Finnhub widget
- **ETF Screener**: Advanced filtering and comparison tools
- **Education Center**: Comprehensive ETF learning resources
- **Portfolio Tracker**: Personal portfolio management (Phase 2)
- **AI Analysis**: Intelligent ETF recommendations (Phase 3)

### Revenue Targets
- **Month 1**: $100 (affiliate clicks)
- **Month 3**: $500 (first conversions + ads)
- **Month 6**: $1,500+ (premium subscriptions + affiliates + ads)

### Traffic Projections
- **Month 1**: 1,000 unique visitors
- **Month 3**: 5,000 unique visitors
- **Month 6**: 15,000+ unique visitors

---

## Vision & Philosophy

### Information Pyramid Model

```
                    🎓 EXPERT LEVEL
                  /                    \
        AI-Powered Analysis        Portfolio Optimization
             /                                          \
         📊 INTERMEDIATE LEVEL                    Advanced Tools
        /                                                      \
    ETF Holdings    Screener    Performance    Comparison Tools
   /                                                              \
📚 BEGINNER LEVEL                                            Education
═══════════════════════════════════════════════════════════════════════
  "What is ETF?" → "Top ETFs" → "ETF Details" → "Compare" → "Invest"
```

### User Journey Principles

1. **Progressive Disclosure**: Information complexity increases with user expertise
2. **Multiple Entry Points**: Users can start at any level and navigate naturally
3. **Action-Oriented**: Every page has a clear next step (CTA)
4. **Educational First**: Build trust through quality content before monetization
5. **Data-Driven**: Real-time data from professional sources (Finnhub, TradingView)

### Core Values

- **Transparency**: Clear about affiliate relationships and data sources
- **Quality**: Professional-grade tools and accurate information
- **Education**: Empower users to make informed decisions
- **Performance**: Fast loading, responsive design
- **Accessibility**: Content accessible to all skill levels

---

## Site Structure

### Complete Folder Structure (Next.js 14 App Router)

```
money365.market/
│
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                          # Landing page
│   │   ├── about/page.tsx                    # About us
│   │   └── contact/page.tsx                  # Contact
│   │
│   ├── screener/
│   │   └── page.tsx                          # Stock Screener (existing)
│   │
│   ├── etf/                                  # 🆕 ETF CENTER
│   │   ├── page.tsx                          # ETF Hub landing
│   │   │
│   │   ├── [symbol]/                         # Dynamic ETF pages
│   │   │   ├── page.tsx                      # ETF overview
│   │   │   ├── holdings/page.tsx             # Detailed holdings
│   │   │   ├── performance/page.tsx          # Performance charts
│   │   │   └── analysis/page.tsx             # AI analysis (Phase 3)
│   │   │
│   │   ├── screener/
│   │   │   └── page.tsx                      # ETF Screener
│   │   │
│   │   ├── compare/
│   │   │   └── page.tsx                      # Compare ETFs
│   │   │
│   │   ├── categories/
│   │   │   ├── page.tsx                      # Category listing
│   │   │   ├── [category]/page.tsx           # Category detail
│   │   │   └── layout.tsx                    # Category layout
│   │   │
│   │   └── education/                        # Education hub
│   │       ├── page.tsx                      # Education home
│   │       ├── what-is-etf/page.tsx          # Beginner guide
│   │       ├── etf-vs-mutual-funds/page.tsx  # Comparison
│   │       ├── how-to-choose/page.tsx        # Selection guide
│   │       ├── expense-ratios/page.tsx       # Cost education
│   │       ├── dividend-etfs/page.tsx        # Income strategy
│   │       └── portfolio-building/page.tsx   # Portfolio guide
│   │
│   ├── portfolio/                            # 🔮 PHASE 2
│   │   ├── page.tsx                          # Portfolio dashboard
│   │   ├── builder/page.tsx                  # Portfolio builder
│   │   └── watchlist/page.tsx                # Watchlist
│   │
│   ├── markets/
│   │   └── page.tsx                          # Market overview
│   │
│   ├── articles/
│   │   ├── page.tsx                          # Blog home
│   │   └── [slug]/page.tsx                   # Article detail
│   │
│   └── api/                                  # API ROUTES
│       ├── stocks/
│       │   └── route.ts                      # Stock data (existing)
│       │
│       ├── etf/                              # 🆕 ETF APIs
│       │   ├── list/route.ts                 # ETF list
│       │   ├── [symbol]/route.ts             # ETF details
│       │   ├── holdings/[symbol]/route.ts    # Holdings data
│       │   ├── screener/route.ts             # Screener API
│       │   └── compare/route.ts              # Comparison API
│       │
│       └── portfolio/                        # 🔮 PHASE 2
│           ├── route.ts                      # Portfolio CRUD
│           └── [id]/route.ts                 # Portfolio detail
│
├── components/
│   ├── etf/                                  # 🆕 ETF Components
│   │   ├── ETFCard.tsx
│   │   ├── ETFRow.tsx
│   │   ├── ETFHeader.tsx
│   │   ├── ETFHoldingsWidget.tsx
│   │   ├── ETFQuickStats.tsx
│   │   ├── ETFSearchBar.tsx
│   │   ├── SectorChart.tsx
│   │   ├── PerformanceChart.tsx
│   │   ├── HoldingsTable.tsx
│   │   ├── ComparisonTable.tsx
│   │   └── CategoryBadge.tsx
│   │
│   ├── portfolio/                            # 🔮 PHASE 2
│   │   ├── PortfolioOverview.tsx
│   │   ├── HoldingsTable.tsx
│   │   ├── AllocationChart.tsx
│   │   └── AddPositionModal.tsx
│   │
│   ├── ui/                                   # shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── select.tsx
│   │   ├── input.tsx
│   │   └── dialog.tsx
│   │
│   └── shared/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Navigation.tsx
│       └── SearchBar.tsx
│
├── lib/
│   ├── stockData.ts                          # Existing stock logic
│   ├── etfData.ts                            # 🆕 ETF data logic
│   ├── finnhub.ts                            # 🆕 Finnhub API client
│   ├── portfolio.ts                          # 🔮 Portfolio logic
│   └── utils.ts                              # Utilities
│
├── types/
│   ├── stock.ts
│   ├── etf.ts                                # 🆕 ETF types
│   └── portfolio.ts                          # 🔮 Portfolio types
│
└── public/
    ├── images/
    └── icons/
```

### Navigation Structure

```
Main Navigation:
├── Home
├── Markets
│   ├── Stock Screener
│   └── Market Overview
├── ETF Center ⭐ NEW
│   ├── ETF Hub
│   ├── ETF Screener
│   ├── Compare ETFs
│   ├── Education
│   └── Browse Categories
├── Portfolio 🔮 PHASE 2
├── Articles
└── About

Footer Navigation:
├── Resources
│   ├── Blog
│   ├── ETF Education
│   ├── Glossary
│   └── FAQ
├── Tools
│   ├── Stock Screener
│   ├── ETF Screener
│   ├── ETF Compare
│   └── Portfolio Tracker
└── Legal
    ├── Privacy Policy
    ├── Terms of Service
    └── Disclaimer
```

---

## Development Phases

### PHASE 1: Foundation (Weeks 1-2) - MVP

**Goal**: Launch core ETF functionality that provides immediate value and generates SEO traffic.

#### Deliverables

**1. ETF Hub Landing Page** (`/etf/page.tsx`)
- Hero section with ETF search
- Popular ETFs showcase (SPY, QQQ, VOO, VTI, ARKK, IWM)
- Category navigation (Tech, S&P 500, Innovation, Dividend, etc.)
- Quick stats (Total ETFs, Total AUM, Avg Expense Ratio)
- Education CTA
- Latest articles feed

**2. ETF Detail Pages** (`/etf/[symbol]/page.tsx`)
- Dynamic routing for all ETF symbols
- Live price data from Finnhub
- Key metrics dashboard (AUM, Expense Ratio, Dividend Yield, etc.)
- Finnhub Holdings Widget integration ⭐
- TradingView price chart
- Top 10 holdings preview
- About & strategy sections
- Similar ETFs recommendations
- Affiliate CTA ("Trade this ETF")

**3. ETF Screener** (`/etf/screener/page.tsx`)
- Filter by:
  - Min/Max AUM
  - Max Expense Ratio
  - Min Dividend Yield
  - Category (Equity, Bond, Commodity, Sector)
  - Min 1Y Return
- Results table with sorting
- Export to CSV (premium feature marker)

**4. Education Hub** (`/etf/education/`)
- Education landing page
- 5 core articles:
  1. What is an ETF?
  2. ETF vs Mutual Funds vs Stocks
  3. How to Choose the Right ETF
  4. Understanding Expense Ratios
  5. Top ETFs for Beginners 2025

**5. API Routes**
- `GET /api/etf/list` - ETF list
- `GET /api/etf/[symbol]` - ETF details
- `GET /api/etf/screener` - Screener results

#### Technical Requirements
- Finnhub API integration
- API rate limiting & caching
- Error handling & fallbacks
- Responsive design (mobile-first)
- SEO optimization (meta tags, structured data)

#### Time Estimate
- **Week 1**: ETF Hub + Detail Pages + API setup
- **Week 2**: Screener + Education + Polish

#### Success Metrics (End of Month 1)
- ✅ 50+ ETF pages indexed by Google
- ✅ 1,000 unique visitors
- ✅ 5 education articles live
- ✅ Avg session: 2+ minutes
- ✅ First affiliate click

---

### PHASE 2: Enhancement (Weeks 3-5)

**Goal**: Add comparison tools and portfolio tracking to increase engagement and retention.

#### New Features

**1. ETF Comparison Tool** (`/etf/compare/page.tsx`)
- Side-by-side comparison (up to 4 ETFs)
- Comparison metrics:
  - Price, AUM, Expense Ratio, Dividend Yield
  - 1Y/3Y/5Y returns
  - Beta, Sharpe Ratio, Volatility
- Performance chart overlay
- Holdings overlap analysis (Venn diagram)
- Export comparison PDF

**2. Portfolio Tracker** (`/portfolio/page.tsx`)
- User authentication (Supabase)
- Portfolio overview dashboard
  - Total value, day's gain, total return
  - Asset allocation pie chart
- Holdings table
  - Symbol, shares, avg cost, current price, gain/loss
- Add/edit/delete positions
- Portfolio performance chart
- Export holdings to CSV

**3. Watchlist** (`/portfolio/watchlist/page.tsx`)
- Add ETFs to watchlist
- Price alerts (email notifications)
- Quick add from ETF detail pages

**4. Advanced Screener Filters**
- Technical indicators (RSI, MACD)
- Sector allocation filters
- ESG scores (if available)
- Multi-column sorting
- Save screener presets (for logged-in users)

**5. Email Alerts System**
- Price change alerts
- Dividend announcement alerts
- Holdings change alerts
- Weekly portfolio summary

#### Technical Requirements
- Supabase setup (auth + database)
- User schema design
- Email service integration (SendGrid/Resend)
- Background jobs for alerts
- Portfolio calculation engine

#### Time Estimate
- **Week 3**: Comparison tool + Portfolio UI
- **Week 4**: Portfolio backend + Auth
- **Week 5**: Alerts + Advanced filters + Testing

#### Success Metrics (End of Month 3)
- ✅ 5,000 unique visitors
- ✅ 100+ user sign-ups
- ✅ 50+ active portfolio users
- ✅ 500+ screener uses
- ✅ First affiliate conversion

---

### PHASE 3: Advanced Features (Weeks 6-10)

**Goal**: Differentiate with AI-powered insights and premium features to drive subscription revenue.

#### Premium Features

**1. AI-Powered ETF Analysis** (`/etf/[symbol]/analysis/page.tsx`)
- AI-generated insights using Claude API
- Key strengths & weaknesses analysis
- Risk assessment (0-100 score)
- Investment recommendation with reasoning
- Competitor comparison
- Sector trend analysis

**2. Portfolio Builder** (`/portfolio/builder/page.tsx`)
- Investor profile questionnaire
  - Investment timeline (short/medium/long)
  - Risk tolerance (conservative/moderate/aggressive)
  - Investment goals (growth/income/balanced)
- AI-recommended portfolio allocation
- Customizable allocation sliders
- Backtest results (historical performance)
- Rebalancing recommendations
- Implementation guide with broker links

**3. Factor Analysis Tools**
- Factor investing filters (value, growth, momentum, quality)
- Smart beta strategies
- Historical correlation analysis
- Volatility metrics (standard deviation, max drawdown)

**4. Premium Screener Features**
- Unlimited screener saves
- Advanced technical indicators
- Custom formulas & calculations
- Bulk export (unlimited CSV downloads)
- API access for power users

**5. Research Reports**
- AI-generated monthly ETF reports
- Sector rotation analysis
- Thematic investment opportunities
- Custom watchlist reports

#### Technical Requirements
- Claude API integration for AI analysis
- Advanced calculation engine
- Backtesting infrastructure
- Premium paywall implementation (Stripe)
- PDF report generation

#### Time Estimate
- **Week 6-7**: AI Analysis foundation
- **Week 8**: Portfolio Builder
- **Week 9**: Premium features + Paywall
- **Week 10**: Testing + Launch prep

#### Success Metrics (End of Month 6)
- ✅ 15,000+ unique visitors
- ✅ 500+ registered users
- ✅ 50 premium subscribers ($9.99/mo)
- ✅ $1,500+ monthly revenue
- ✅ Top 10 Google ranking for key terms

---

## Technical Architecture

### Tech Stack

```yaml
Frontend:
  Framework: Next.js 14 (App Router)
  Language: TypeScript
  Styling: TailwindCSS
  UI Components: shadcn/ui
  Charts: Recharts / Chart.js
  State Management: React Context + Zustand (for complex state)
  
Data Sources:
  Primary API: Finnhub.io
  Backup API: Alpha Vantage
  Charts: TradingView Widgets
  Market Data: CoinGecko (for crypto ETFs)
  
Backend:
  API: Next.js API Routes
  Database: Supabase (PostgreSQL)
  Authentication: Supabase Auth
  File Storage: Supabase Storage
  
Deployment:
  Hosting: Vercel
  CDN: Vercel Edge Network
  Domain: money365.market
  
Analytics:
  Web Analytics: Google Analytics 4
  Performance: Vercel Analytics
  User Behavior: Hotjar / Microsoft Clarity
  
Email:
  Service: SendGrid / Resend
  Templates: React Email
  
Payments:
  Gateway: Stripe
  Subscription: Stripe Subscriptions
  
AI:
  Provider: Anthropic Claude API
  Models: Claude Sonnet 4
```

### Database Schema

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  subscription_tier VARCHAR(50) DEFAULT 'free',
  subscription_expires_at TIMESTAMP
);

-- Portfolios
CREATE TABLE portfolios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Portfolio Holdings
CREATE TABLE holdings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  portfolio_id UUID REFERENCES portfolios(id) ON DELETE CASCADE,
  symbol VARCHAR(10) NOT NULL,
  shares DECIMAL(10,4) NOT NULL,
  avg_cost DECIMAL(10,2) NOT NULL,
  purchase_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Watchlist
CREATE TABLE watchlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  symbol VARCHAR(10) NOT NULL,
  added_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, symbol)
);

-- Price Alerts
CREATE TABLE price_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  symbol VARCHAR(10) NOT NULL,
  condition VARCHAR(20) NOT NULL, -- 'above', 'below'
  target_price DECIMAL(10,2) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Screener Presets
CREATE TABLE screener_presets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  filters JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### API Integration Pattern

```typescript
// lib/finnhub.ts
export class FinnhubClient {
  private apiKey: string;
  private baseUrl = 'https://finnhub.io/api/v1';
  
  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY!;
  }
  
  async getETFList() {
    return this.request('/etf/list', { exchange: 'US' });
  }
  
  async getETFProfile(symbol: string) {
    return this.request('/stock/profile2', { symbol });
  }
  
  async getETFHoldings(symbol: string) {
    return this.request('/etf/holdings', { symbol });
  }
  
  async getQuote(symbol: string) {
    return this.request('/quote', { symbol });
  }
  
  private async request(endpoint: string, params: Record<string, any>) {
    const url = new URL(endpoint, this.baseUrl);
    url.searchParams.append('token', this.apiKey);
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
    
    const response = await fetch(url.toString(), {
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`Finnhub API error: ${response.status}`);
    }
    
    return response.json();
  }
}
```

### Environment Variables

```bash
# .env.local

# Finnhub API
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_pk
STRIPE_SECRET_KEY=your_stripe_sk
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# Email
SENDGRID_API_KEY=your_sendgrid_key
FROM_EMAIL=noreply@money365.market

# Claude AI (Phase 3)
ANTHROPIC_API_KEY=your_anthropic_key

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
```

---

## Component Library

### Core ETF Components

#### 1. ETFCard Component

```typescript
// components/etf/ETFCard.tsx
interface ETFCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  aum?: string;
  expenseRatio?: number;
}

export function ETFCard({ 
  symbol, 
  name, 
  price, 
  change, 
  changePercent,
  aum,
  expenseRatio 
}: ETFCardProps) {
  return (
    <Link href={`/etf/${symbol}`}>
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-orange-500">{symbol}</h3>
              <p className="text-sm text-slate-400">{name}</p>
            </div>
            <Badge variant={changePercent >= 0 ? 'success' : 'destructive'}>
              {changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Price</span>
              <span className="font-semibold">${price.toFixed(2)}</span>
            </div>
            {aum && (
              <div className="flex justify-between">
                <span className="text-slate-400">AUM</span>
                <span className="font-semibold">{aum}</span>
              </div>
            )}
            {expenseRatio && (
              <div className="flex justify-between">
                <span className="text-slate-400">Expense Ratio</span>
                <span className="font-semibold">{expenseRatio}%</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
```

#### 2. ETFHoldingsWidget Component

```typescript
// components/etf/ETFHoldingsWidget.tsx
interface ETFHoldingsWidgetProps {
  symbol: string;
  theme?: 'light' | 'dark';
  height?: number;
}

export function ETFHoldingsWidget({ 
  symbol, 
  theme = 'dark',
  height = 600 
}: ETFHoldingsWidgetProps) {
  const widgetUrl = `https://widget.finnhub.io/widgets/etf-holdings?symbol=${symbol}&theme=${theme}`;
  
  return (
    <div className="rounded-lg overflow-hidden border border-slate-700">
      <iframe
        src={widgetUrl}
        style={{ 
          width: '100%', 
          height: `${height}px`, 
          border: 'none' 
        }}
        title={`${symbol} ETF Holdings`}
        loading="lazy"
      />
    </div>
  );
}
```

#### 3. ETFScreener Component

```typescript
// components/etf/ETFScreener.tsx
'use client';

import { useState } from 'react';

export function ETFScreener() {
  const [filters, setFilters] = useState({
    minAUM: '',
    maxExpenseRatio: '',
    minDividendYield: '',
    category: 'all',
    minReturn1Y: ''
  });
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const handleApplyFilters = async () => {
    setLoading(true);
    
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    
    try {
      const res = await fetch(`/api/etf/screener?${params}`);
      const data = await res.json();
      setResults(data.results);
    } catch (error) {
      console.error('Screener error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Filter Panel */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Filters</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Min AUM (Billions)</Label>
              <Input
                type="number"
                placeholder="e.g., 100"
                value={filters.minAUM}
                onChange={(e) => setFilters({...filters, minAUM: e.target.value})}
              />
            </div>
            
            <div>
              <Label>Max Expense Ratio (%)</Label>
              <Input
                type="number"
                step="0.01"
                placeholder="e.g., 0.5"
                value={filters.maxExpenseRatio}
                onChange={(e) => setFilters({...filters, maxExpenseRatio: e.target.value})}
              />
            </div>
            
            <div>
              <Label>Min Dividend Yield (%)</Label>
              <Input
                type="number"
                step="0.1"
                placeholder="e.g., 2"
                value={filters.minDividendYield}
                onChange={(e) => setFilters({...filters, minDividendYield: e.target.value})}
              />
            </div>
            
            <div>
              <Label>Category</Label>
              <Select 
                value={filters.category}
                onValueChange={(value) => setFilters({...filters, category: value})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="equity">Equity</SelectItem>
                  <SelectItem value="bond">Bond</SelectItem>
                  <SelectItem value="commodity">Commodity</SelectItem>
                  <SelectItem value="sector">Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Min 1Y Return (%)</Label>
              <Input
                type="number"
                placeholder="e.g., 15"
                value={filters.minReturn1Y}
                onChange={(e) => setFilters({...filters, minReturn1Y: e.target.value})}
              />
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <Button onClick={handleApplyFilters} disabled={loading}>
              {loading ? 'Loading...' : 'Apply Filters'}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setFilters({
                minAUM: '',
                maxExpenseRatio: '',
                minDividendYield: '',
                category: 'all',
                minReturn1Y: ''
              })}
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Results */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Results ({results.length} ETFs)</h2>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-12">
              <Spinner />
            </div>
          ) : results.length === 0 ? (
            <p className="text-center text-slate-400 py-12">
              No ETFs found. Try adjusting your filters.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">AUM</TableHead>
                    <TableHead className="text-right">Exp. Ratio</TableHead>
                    <TableHead className="text-right">Div. Yield</TableHead>
                    <TableHead className="text-right">1Y Return</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((etf) => (
                    <ETFRow key={etf.symbol} etf={etf} />
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## API Integration

### Finnhub API Setup

**Step 1: Get API Key**
1. Visit https://finnhub.io/
2. Click "Get free API key"
3. Register (email + password)
4. Copy your API key

**Step 2: Add to Environment**
```bash
# .env.local
NEXT_PUBLIC_FINNHUB_API_KEY=your_api_key_here
```

### Key Endpoints

```typescript
// lib/etfData.ts
import { FinnhubClient } from './finnhub';

const client = new FinnhubClient();

// Popular ETF symbols
const POPULAR_ETFS = [
  'SPY', 'QQQ', 'VOO', 'VTI', 'ARKK', 'IWM',
  'XLK', 'VGT', 'ARKW', 'ARKG', 'VYM', 'SCHD'
];

export interface ETFData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  aum: string;
  expenseRatio: number;
  dividendYield: number;
  inceptionDate: string;
  description: string;
  holdings: Holding[];
}

export interface Holding {
  symbol: string;
  name: string;
  weight: number;
  marketValue: number;
  shares: number;
}

export async function fetchETFList(): Promise<string[]> {
  const data = await client.getETFList();
  return data.map(etf => etf.symbol);
}

export async function fetchETFDetails(symbol: string): Promise<ETFData> {
  const [profile, quote, holdings, metrics] = await Promise.all([
    client.getETFProfile(symbol),
    client.getQuote(symbol),
    client.getETFHoldings(symbol),
    client.getETFMetrics(symbol)
  ]);
  
  return {
    symbol,
    name: profile.name,
    price: quote.c,
    change: quote.d,
    changePercent: quote.dp,
    aum: formatMarketCap(metrics.aum),
    expenseRatio: metrics.expenseRatio,
    dividendYield: metrics.dividendYield * 100,
    inceptionDate: profile.inceptionDate,
    description: profile.description,
    holdings: holdings.holdings
  };
}

export async function searchETFs(filters: ETFFilters): Promise<ETFData[]> {
  // Implementation of screener logic
  // Filter ETFs based on criteria
}

function formatMarketCap(value: number): string {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  return `$${value.toFixed(2)}`;
}
```

### Rate Limiting & Caching

```typescript
// lib/cache.ts
import { unstable_cache } from 'next/cache';

export const getCachedETFData = unstable_cache(
  async (symbol: string) => {
    return await fetchETFDetails(symbol);
  },
  ['etf-data'],
  {
    revalidate: 300, // 5 minutes
    tags: ['etf']
  }
);
```

---

## Monetization Strategy

### Revenue Streams

#### 1. Affiliate Marketing (60% of revenue)

**Target Partners**:
- **Interactive Brokers** (CPA: $50-200)
- **Trading 212** (CPA: $30-50)
- **eToro** (CPA: $100-300)
- **Revolut** (CPA: $20-40)

**Placement Strategy**:
```
High-Intent Pages (ETF Detail):
├── Primary CTA: "Trade {SYMBOL}" (above fold)
├── Sidebar Widget: "Open Free Account"
└── Bottom CTA: "Start Investing Today"

Medium-Intent Pages (Screener):
├── Post-results CTA: "Trade These ETFs"
└── Sidebar: "Commission-Free Trading"

Low-Intent Pages (Education):
└── Subtle Footer: "Ready to Invest?"
```

**Tracking**:
```typescript
// Track affiliate clicks
function trackAffiliateClick(broker: string, etf?: string) {
  gtag('event', 'affiliate_click', {
    broker,
    etf,
    page: window.location.pathname
  });
}
```

#### 2. Premium Subscription (30% of revenue)

**Tier Structure**:

| Feature | Free | Premium ($9.99/mo) |
|---------|------|-------------------|
| ETF Screener | ✅ Basic | ✅ Advanced |
| Portfolio Tracking | 1 Portfolio | Unlimited |
| Price Alerts | 3 alerts | Unlimited |
| Holdings Export | ❌ | ✅ CSV/PDF |
| AI Analysis | ❌ | ✅ Included |
| Saved Screeners | ❌ | ✅ Unlimited |
| Ad-Free | ❌ | ✅ |
| API Access | ❌ | ✅ Limited |

**Implementation**:
```typescript
// Stripe integration
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession(userId: string) {
  return await stripe.checkout.sessions.create({
    customer_email: user.email,
    payment_method_types: ['card'],
    line_items: [{
      price: 'price_premium_monthly', // Stripe Price ID
      quantity: 1,
    }],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_URL}/premium/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/premium`,
  });
}
```

#### 3. Display Advertising (10% of revenue)

**Ad Placements**:
- Header banner (728x90 leaderboard)
- Sidebar (300x250 medium rectangle)
- In-content (responsive native ads)
- Between screener results (native ads)

**Networks**:
- Google AdSense
- Ezoic (premium tier)
- MediaVine (when traffic > 50k/mo)

### Revenue Projections

```
Month 1:
├── Affiliate clicks: 50 → $100
├── Premium: 0 → $0
└── Ads (1k visitors): $20
Total: $120

Month 3:
├── Affiliate conversions: 5 → $400
├── Premium: 10 subs → $100
└── Ads (5k visitors): $150
Total: $650

Month 6:
├── Affiliate conversions: 15 → $1,200
├── Premium: 50 subs → $500
└── Ads (15k visitors): $450
Total: $2,150

Month 12:
├── Affiliate conversions: 40 → $3,500
├── Premium: 150 subs → $1,500
└── Ads (40k visitors): $1,200
Total: $6,200/month
```

---

## SEO & Content Strategy

### Target Keywords

**Primary Keywords (High Volume)**:
```
Keyword                      Volume/mo    Difficulty    Priority
─────────────────────────────────────────────────────────────────
best etfs 2025               40,500       High          ★★★★★
etf screener                 22,200       Medium        ★★★★★
compare etfs                 14,800       Medium        ★★★★★
top performing etfs          12,100       Medium        ★★★★☆
etf holdings                  8,900       Low           ★★★★★
```

**Long-Tail Keywords (Lower Competition)**:
```
Keyword                              Volume/mo    Priority
───────────────────────────────────────────────────────────
arkk etf holdings                    8,100        ★★★★★
spy vs voo comparison                5,400        ★★★★★
best technology etfs                 4,800        ★★★★☆
dividend etfs 2025                   3,900        ★★★★☆
low expense ratio etfs               2,400        ★★★★☆
```

### Content Calendar

**Monthly Output**: 8-12 articles (2-3 per week)

**Content Mix**:
- **30%** - Evergreen Education (e.g., "What is an ETF?")
- **30%** - ETF Reviews (e.g., "ARKK ETF Analysis")
- **20%** - Comparisons (e.g., "SPY vs VOO vs IVV")
- **20%** - Strategy Guides (e.g., "Building a Dividend Portfolio")

**Example Content Plan (Month 1)**:

| Week | Article | Type | Target Keyword |
|------|---------|------|----------------|
| 1 | What is an ETF? A Beginner's Guide | Education | what is etf |
| 1 | Top 10 ETFs for 2025 | Listicle | best etfs 2025 |
| 2 | ARKK ETF Holdings Breakdown | Review | arkk holdings |
| 2 | SPY vs VOO vs IVV: Which S&P 500 ETF is Best? | Comparison | spy vs voo |
| 3 | How to Choose the Right ETF | Guide | how to choose etf |
| 3 | 5 Best Dividend ETFs for Passive Income | Listicle | dividend etfs |
| 4 | Understanding ETF Expense Ratios | Education | expense ratio |
| 4 | Best Technology ETFs to Buy Now | Review | technology etfs |

### On-Page SEO Checklist

```markdown
For Every Page:
- [ ] Title tag (50-60 chars) with primary keyword
- [ ] Meta description (150-160 chars) with CTA
- [ ] H1 tag with primary keyword
- [ ] H2-H6 hierarchy with semantic keywords
- [ ] Alt text for all images
- [ ] Internal links to related content (3-5 per page)
- [ ] External links to authoritative sources
- [ ] Schema markup (Article, Organization, BreadcrumbList)
- [ ] Open Graph tags for social sharing
- [ ] Canonical URL
```

### Technical SEO

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s | Money365.Market',
    default: 'Money365.Market - ETF Investment Center'
  },
  description: 'Discover, compare, and track ETFs with professional-grade tools.',
  keywords: ['ETF', 'investment', 'screener', 'portfolio', 'stocks'],
  authors: [{ name: 'Money365 Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://money365.market',
    siteName: 'Money365.Market',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@money365market',
  },
};

// Dynamic ETF pages
export async function generateMetadata({ params }): Promise<Metadata> {
  const etf = await fetchETFDetails(params.symbol);
  
  return {
    title: `${etf.symbol} - ${etf.name} | ETF Analysis`,
    description: `Detailed analysis of ${etf.symbol} ETF including holdings, performance, expense ratio, and more.`,
    openGraph: {
      title: `${etf.symbol} ETF Analysis`,
      description: etf.description,
      images: [`/og/${etf.symbol}.png`],
    },
  };
}
```

### Link Building Strategy

**Internal Linking**:
- Hub-and-spoke model (Education hub → Individual articles)
- Contextual links within articles
- Related ETFs suggestions
- "You might also like" sections

**External Linking**:
- Guest posts on finance blogs
- Resource page link building
- HARO (Help a Reporter Out) responses
- Partnership with finance educators

---

## Success Metrics

### Key Performance Indicators (KPIs)

#### Traffic Metrics
```
Month 1:
├── Unique Visitors: 1,000
├── Pageviews: 3,000
├── Avg Session Duration: 2:00
├── Bounce Rate: <60%
└── Pages/Session: 3.0

Month 3:
├── Unique Visitors: 5,000
├── Pageviews: 17,500
├── Avg Session Duration: 2:30
├── Bounce Rate: <55%
└── Pages/Session: 3.5

Month 6:
├── Unique Visitors: 15,000
├── Pageviews: 60,000
├── Avg Session Duration: 3:00
├── Bounce Rate: <50%
└── Pages/Session: 4.0
```

#### Engagement Metrics
```
Month 1:
├── Email Signups: 50
├── Portfolio Creates: 20
├── Screener Uses: 200
└── Article Shares: 30

Month 3:
├── Email Signups: 300
├── Portfolio Creates: 150
├── Screener Uses: 1,500
└── Article Shares: 200

Month 6:
├── Email Signups: 1,000
├── Portfolio Creates: 500
├── Screener Uses: 5,000
└── Article Shares: 800
```

#### Revenue Metrics
```
Month 1:
├── Affiliate Clicks: 50
├── Affiliate Conversions: 1
├── Premium Signups: 0
└── Total Revenue: $120

Month 3:
├── Affiliate Clicks: 300
├── Affiliate Conversions: 5
├── Premium Signups: 10
└── Total Revenue: $650

Month 6:
├── Affiliate Clicks: 1,200
├── Affiliate Conversions: 15
├── Premium Signups: 50
└── Total Revenue: $2,150
```

#### SEO Metrics
```
Month 1:
├── Indexed Pages: 50
├── Ranking Keywords: 100
├── Top 10 Rankings: 5
├── Backlinks: 10
└── Domain Authority: 15

Month 3:
├── Indexed Pages: 150
├── Ranking Keywords: 500
├── Top 10 Rankings: 25
├── Backlinks: 50
└── Domain Authority: 22

Month 6:
├── Indexed Pages: 300
├── Ranking Keywords: 1,500
├── Top 10 Rankings: 100
├── Backlinks: 150
└── Domain Authority: 30
```

### Analytics Setup

```typescript
// lib/analytics.ts
export function trackEvent(
  eventName: string, 
  eventParams: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

// Usage examples
trackEvent('etf_view', { symbol: 'SPY' });
trackEvent('screener_search', { filters: filtersUsed });
trackEvent('portfolio_create', { etf_count: holdings.length });
trackEvent('affiliate_click', { broker: 'interactive-brokers' });
```

---

## Timeline & Milestones

### Detailed Development Timeline

```
┌─────────────────────────────────────────────────────────────────┐
│                        PHASE 1: FOUNDATION                       │
│                          (Weeks 1-2)                             │
└─────────────────────────────────────────────────────────────────┘

Week 1: Core Infrastructure
├── Day 1-2: Project Setup
│   ├── Next.js 14 project initialization
│   ├── TailwindCSS + shadcn/ui setup
│   ├── Folder structure creation
│   └── Git repository setup
│
├── Day 3-4: API Integration
│   ├── Finnhub API key acquisition
│   ├── API client library (lib/finnhub.ts)
│   ├── ETF data functions (lib/etfData.ts)
│   └── API routes (/api/etf/*)
│
└── Day 5-7: ETF Hub & Detail Pages
    ├── ETF Hub landing page design
    ├── Dynamic [symbol] routing
    ├── ETF detail page layout
    ├── Finnhub widget integration
    └── TradingView chart integration

Week 2: Features & Content
├── Day 8-10: ETF Screener
│   ├── Filter UI components
│   ├── Results table with sorting
│   ├── Screener API endpoint
│   └── Export functionality (basic)
│
├── Day 11-12: Education Hub
│   ├── Education landing page
│   ├── 5 core articles (markdown)
│   ├── Article layout/design
│   └── Navigation structure
│
└── Day 13-14: Polish & Launch Prep
    ├── Responsive design testing
    ├── SEO metadata optimization
    ├── Performance optimization
    ├── Bug fixes
    └── Deploy to Vercel

🎯 MILESTONE: Phase 1 Launch (End of Week 2)

┌─────────────────────────────────────────────────────────────────┐
│                      PHASE 2: ENHANCEMENT                        │
│                          (Weeks 3-5)                             │
└─────────────────────────────────────────────────────────────────┘

Week 3: Comparison & Portfolio UI
├── Day 15-17: ETF Comparison Tool
│   ├── Multi-select ETF picker
│   ├── Comparison table layout
│   ├── Performance chart overlay
│   ├── Holdings overlap visualization
│   └── Export comparison PDF
│
└── Day 18-21: Portfolio Tracker UI
    ├── Portfolio dashboard design
    ├── Holdings table component
    ├── Asset allocation chart
    ├── Add/edit position modals
    └── Performance calculations

Week 4: Backend & Authentication
├── Day 22-24: Supabase Setup
│   ├── Database schema design
│   ├── Migration scripts
│   ├── Row-level security policies
│   └── API client setup
│
└── Day 25-28: Authentication & Data
    ├── User registration/login
    ├── Portfolio CRUD operations
    ├── Watchlist functionality
    └── Data persistence

Week 5: Alerts & Advanced Features
├── Day 29-31: Email Alert System
│   ├── SendGrid/Resend integration
│   ├── Alert creation UI
│   ├── Background job setup
│   └── Email templates
│
└── Day 32-35: Advanced Screener
    ├── Technical indicator filters
    ├── Sector allocation filters
    ├── Multi-column sorting
    ├── Save screener presets
    └── Testing & bug fixes

🎯 MILESTONE: Phase 2 Launch (End of Week 5)

┌─────────────────────────────────────────────────────────────────┐
│                    PHASE 3: ADVANCED FEATURES                    │
│                         (Weeks 6-10)                             │
└─────────────────────────────────────────────────────────────────┘

Week 6-7: AI Analysis Foundation
├── Day 36-40: AI Integration
│   ├── Anthropic API setup
│   ├── Prompt engineering
│   ├── Analysis generation logic
│   └── Caching strategy
│
└── Day 41-49: AI Features
    ├── Strengths/weaknesses analysis
    ├── Risk assessment scoring
    ├── Investment recommendations
    ├── Competitor comparison
    └── UI/UX for AI outputs

Week 8: Portfolio Builder
├── Day 50-54: Questionnaire & Logic
│   ├── Investor profile quiz
│   ├── Risk tolerance assessment
│   ├── Goal-based allocation
│   └── Recommendation engine
│
└── Day 55-56: Builder UI
    ├── Allocation sliders
    ├── Backtest visualization
    └── Implementation guide

Week 9: Premium Features & Paywall
├── Day 57-60: Stripe Integration
│   ├── Subscription setup
│   ├── Checkout flow
│   ├── Webhook handlers
│   └── Subscription management
│
└── Day 61-63: Premium Content
    ├── Feature gating
    ├── Premium screener filters
    ├── Unlimited exports
    └── Ad removal

Week 10: Testing & Launch
├── Day 64-68: QA & Polish
│   ├── End-to-end testing
│   ├── Performance optimization
│   ├── Mobile responsiveness
│   ├── Accessibility audit
│   └── Security review
│
└── Day 69-70: Launch Prep
    ├── Marketing materials
    ├── Launch announcement
    ├── Monitor initial feedback
    └── Quick iterations

🎯 MILESTONE: Phase 3 Launch (End of Week 10)
```

### Major Milestones Summary

| Milestone | Date | Deliverables |
|-----------|------|--------------|
| **Phase 1 MVP** | Week 2 | ETF Hub, Detail Pages, Screener, 5 Articles |
| **First 1K Visitors** | Week 4 | Traffic milestone |
| **Phase 2 Launch** | Week 5 | Comparison, Portfolio, Alerts |
| **First Premium User** | Week 7 | Revenue milestone |
| **Phase 3 Launch** | Week 10 | AI Analysis, Builder, Full Premium |
| **10K Visitors** | Week 12 | Traffic milestone |
| **$1K MRR** | Week 16 | Revenue milestone |

---

## Next Steps

### Immediate Actions (This Week)

1. **API Setup** (Day 1)
   - [ ] Register for Finnhub account
   - [ ] Obtain API key
   - [ ] Create `.env.local` file
   - [ ] Test API connection

2. **Project Structure** (Day 1-2)
   - [ ] Create `/app/etf` folder structure
   - [ ] Set up components library
   - [ ] Initialize TypeScript types
   - [ ] Configure TailwindCSS

3. **First Page** (Day 2-3)
   - [ ] Build ETF Hub landing page
   - [ ] Create ETFCard component
   - [ ] Implement basic navigation
   - [ ] Add sample data

4. **API Integration** (Day 3-4)
   - [ ] Create Finnhub client
   - [ ] Build ETF data functions
   - [ ] Set up API routes
   - [ ] Test data fetching

5. **ETF Detail Page** (Day 4-5)
   - [ ] Dynamic routing setup
   - [ ] Integrate Finnhub widget
   - [ ] Add TradingView chart
   - [ ] Style and polish

### Weekly Checkpoints

**Week 1 Checkpoint**:
- ✅ API integrated and working
- ✅ ETF Hub live
- ✅ 5+ ETF detail pages
- ✅ Basic navigation functional

**Week 2 Checkpoint**:
- ✅ Screener functional
- ✅ 5 education articles published
- ✅ SEO metadata complete
- ✅ Deployed to production

**Week 3-5 Checkpoint**:
- ✅ User authentication working
- ✅ Portfolio tracker live
- ✅ Comparison tool functional
- ✅ 50+ registered users

**Week 6-10 Checkpoint**:
- ✅ AI analysis working
- ✅ Premium tier launched
- ✅ First paying customers
- ✅ All features complete

---

## Resources & References

### Documentation
- [Finnhub API Docs](https://finnhub.io/docs/api)
- [Next.js 14 App Router](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Stripe Subscriptions](https://stripe.com/docs/billing/subscriptions)
- [TradingView Widgets](https://www.tradingview.com/widget/)

### Design Inspiration
- [Bloomberg Terminal](https://www.bloomberg.com/professional/solution/bloomberg-terminal/)
- [Finviz](https://finviz.com/)
- [Seeking Alpha](https://seekingalpha.com/)
- [Morningstar](https://www.morningstar.com/)

### Competitor Analysis
- ETF.com
- ETFdb.com
- VettaFi
- Morningstar ETF Research

### Tools
- Figma (design)
- Vercel (hosting)
- Supabase (backend)
- PostHog (analytics alternative)
- Hotjar (user behavior)

---

## Appendix

### Glossary

**ETF (Exchange-Traded Fund)**: Investment fund traded on stock exchanges, holding assets like stocks, bonds, or commodities.

**AUM (Assets Under Management)**: Total market value of investments managed by a fund.

**Expense Ratio**: Annual fee charged by ETF as percentage of assets.

**Holdings**: Individual securities (stocks/bonds) within an ETF.

**Dividend Yield**: Annual dividend payment as percentage of price.

**NAV (Net Asset Value)**: Per-share value of ETF's holdings.

**P/E Ratio**: Price-to-earnings ratio of holdings.

**Beta**: Volatility measure compared to market.

**Sharpe Ratio**: Risk-adjusted return measure.

### Common ETF Categories

- **Broad Market**: SPY, VOO, VTI
- **Technology**: QQQ, XLK, VGT
- **Innovation**: ARKK, ARKW, ARKG
- **Dividend**: VYM, SCHD, DVY
- **International**: VEA, VWO, EFA
- **Bonds**: AGG, BND, TLT
- **Commodities**: GLD, SLV, USO
- **Sector-Specific**: XLF, XLE, XLV, XLI

---

## Document Control

**Version History**:
- v1.0 (2025-11-09): Initial comprehensive plan created

**Authors**:
- Development Plan: Claude (Anthropic)
- Project Owner: Attila (money365.market)

**Status**: ✅ Ready for Implementation

**Next Review Date**: After Phase 1 completion

---

*This document is part of the money365.market project portfolio and should be kept updated as the project evolves.*
