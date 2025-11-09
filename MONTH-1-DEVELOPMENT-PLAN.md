# 🚀 ETF Integration - Month 1 Development Plan
**Project**: money365.market - ETF Investment Center
**Timeline**: 2 Weeks (14 days)
**Status**: Ready for Implementation
**Last Updated**: January 9, 2025

---

## 📋 Executive Summary

### Objective
Launch a functional ETF Investment Center MVP in **2 weeks** that provides immediate value to users and generates SEO traffic through 50+ indexed ETF pages.

### What We're Building (Week 1-2)
- ✅ **ETF Hub** - Central landing page with popular ETFs & category navigation
- ✅ **ETF Detail Pages** - Dynamic pages for every major ETF (SPY, QQQ, VOO, etc.)
- ✅ **ETF Screener** - Filter ETFs by AUM, expense ratio, yield, category, returns
- ✅ **Education Hub** - 5 beginner-friendly articles
- ✅ **API Integration** - Real-time data from Finnhub

### Success Criteria (End of Month 1)
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Indexed Pages | 50+ ETF pages | Google Search Console |
| Unique Visitors | 1,000 | Google Analytics |
| Avg Session Duration | 2+ minutes | Google Analytics |
| Screener Uses | 200+ | GA Event Tracking |
| First Affiliate Click | 1+ | GA Event Tracking |

### Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, TailwindCSS, shadcn/ui
- **Data Source**: Finnhub API (free tier: 60 calls/min)
- **Charts**: TradingView Widgets
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4

---

## 🎯 Goals & Objectives

### Business Goals
1. **SEO Foundation**: Get 50+ ETF pages indexed quickly for long-tail keywords
2. **User Value**: Provide professional-grade ETF research tools
3. **Monetization Prep**: Set up affiliate tracking (soft CTAs only)
4. **Scalable Architecture**: Easy to add features in Phase 2 & 3

### User Goals by Persona

**Curious Beginner (40% of traffic)**
- "What is an ETF?" → Education articles
- "Which ETF should I start with?" → Top ETFs showcase
- "Is it safe?" → Beginner-friendly explanations

**Active Learner (35% of traffic)**
- "Compare SPY vs VOO" → Screener + detail pages
- "Best tech ETFs" → Category browsing
- "Low expense ratio ETFs" → Screener filters

**Advanced Optimizer (25% of traffic)**
- "ARKK holdings breakdown" → Finnhub widget integration
- "ETF performance charts" → TradingView charts
- "Detailed metrics" → Full data tables

---

## 📅 Detailed Week-by-Week Plan

---

## **WEEK 1: Foundation + ETF Hub + Detail Pages**

### **Day 1-2: Project Setup & API Integration**

#### Morning (4 hours): Project Structure

**Task 1: Folder Structure Creation** (1 hour)

```bash
# Create folder structure
cd "d:\___________________________________Cursor\6s Capital"

# ETF app routes
mkdir -p app/etf/[symbol]
mkdir -p app/etf/screener
mkdir -p app/etf/education/[slug]
mkdir -p app/etf/categories/[category]

# API routes
mkdir -p app/api/etf/list
mkdir -p app/api/etf/[symbol]
mkdir -p app/api/etf/screener

# Components
mkdir -p components/etf

# Lib & Types
mkdir -p lib
mkdir -p types
```

**Task 2: TypeScript Types** (1 hour)

Create `types/etf.ts`:

```typescript
// types/etf.ts

export interface ETFData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  aum: string; // Formatted (e.g., "$500B")
  aumRaw: number; // Raw number for filtering
  expenseRatio: number; // Percentage (e.g., 0.03 = 0.03%)
  dividendYield: number; // Percentage (e.g., 1.5 = 1.5%)
  inceptionDate: string;
  description: string;
  category: ETFCategory;
  ytdReturn?: number;
  oneYearReturn?: number;
  threeYearReturn?: number;
  fiveYearReturn?: number;
}

export interface Holding {
  symbol: string;
  name: string;
  weight: number; // Percentage (e.g., 5.2 = 5.2%)
  shares?: number;
  marketValue?: number;
}

export interface ETFHoldings {
  symbol: string;
  holdings: Holding[];
  topHoldings: Holding[]; // Top 10 only
  asOfDate: string;
}

export type ETFCategory =
  | 'Broad Market'
  | 'Technology'
  | 'Innovation'
  | 'Dividend'
  | 'International'
  | 'Bond'
  | 'Commodity'
  | 'Sector';

export interface ETFFilters {
  minAUM?: number;
  maxAUM?: number;
  maxExpenseRatio?: number;
  minDividendYield?: number;
  category?: ETFCategory | 'all';
  minReturn1Y?: number;
  sortBy?: 'aum' | 'expenseRatio' | 'dividendYield' | 'return1Y';
  sortOrder?: 'asc' | 'desc';
}

export interface ScreenerResult {
  etfs: ETFData[];
  count: number;
  filters: ETFFilters;
}
```

**Task 3: Environment Setup** (30 min)

Create `.env.local`:

```bash
# Finnhub API (Get from https://finnhub.io/)
NEXT_PUBLIC_FINNHUB_API_KEY=your_api_key_here

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Site URL
NEXT_PUBLIC_SITE_URL=https://money365.market
```

**Task 4: Finnhub API Client** (1.5 hours)

Create `lib/finnhub.ts`:

```typescript
// lib/finnhub.ts

const FINNHUB_API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
const BASE_URL = 'https://finnhub.io/api/v1';

export class FinnhubClient {
  private async request<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const url = new URL(endpoint, BASE_URL);
    url.searchParams.append('token', FINNHUB_API_KEY!);

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Finnhub API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Get quote (price, change, etc.)
  async getQuote(symbol: string) {
    return this.request(`/quote`, { symbol });
  }

  // Get company profile (name, description, etc.)
  async getProfile(symbol: string) {
    return this.request(`/stock/profile2`, { symbol });
  }

  // Get ETF holdings
  async getETFHoldings(symbol: string) {
    return this.request(`/etf/holdings`, { symbol });
  }

  // Get ETF profile (specific ETF data)
  async getETFProfile(symbol: string) {
    return this.request(`/etf/profile`, { symbol });
  }
}

export const finnhub = new FinnhubClient();
```

#### Afternoon (4 hours): ETF Data Layer

**Task 5: ETF Data Functions** (2 hours)

Create `lib/etfData.ts`:

```typescript
// lib/etfData.ts
import { finnhub } from './finnhub';
import { ETFData, ETFHoldings, Holding } from '@/types/etf';

// Popular ETFs to showcase
export const POPULAR_ETFS = [
  'SPY', 'QQQ', 'VOO', 'VTI', 'ARKK', 'IWM',
  'XLK', 'VGT', 'ARKW', 'ARKG', 'VYM', 'SCHD'
];

// ETF Categories mapping
const ETF_CATEGORIES: Record<string, string> = {
  'SPY': 'Broad Market',
  'VOO': 'Broad Market',
  'VTI': 'Broad Market',
  'QQQ': 'Technology',
  'XLK': 'Technology',
  'VGT': 'Technology',
  'ARKK': 'Innovation',
  'ARKW': 'Innovation',
  'ARKG': 'Innovation',
  'VYM': 'Dividend',
  'SCHD': 'Dividend',
  'IWM': 'Broad Market'
};

// Fetch single ETF details
export async function fetchETFDetails(symbol: string): Promise<ETFData> {
  try {
    const [quote, profile, etfProfile] = await Promise.all([
      finnhub.getQuote(symbol),
      finnhub.getProfile(symbol),
      finnhub.getETFProfile(symbol).catch(() => null) // ETF profile might not exist
    ]);

    return {
      symbol,
      name: profile.name || symbol,
      price: quote.c,
      change: quote.d,
      changePercent: quote.dp,
      aum: formatMarketCap(etfProfile?.aum || 0),
      aumRaw: etfProfile?.aum || 0,
      expenseRatio: etfProfile?.expenseRatio || 0,
      dividendYield: etfProfile?.yield || 0,
      inceptionDate: etfProfile?.inceptionDate || 'N/A',
      description: profile.description || '',
      category: ETF_CATEGORIES[symbol] || 'Broad Market',
      ytdReturn: etfProfile?.ytdReturn,
      oneYearReturn: etfProfile?.return1Y,
      threeYearReturn: etfProfile?.return3Y,
      fiveYearReturn: etfProfile?.return5Y
    };
  } catch (error) {
    console.error(`Error fetching ETF ${symbol}:`, error);
    throw error;
  }
}

// Fetch ETF holdings
export async function fetchETFHoldings(symbol: string): Promise<ETFHoldings> {
  try {
    const data = await finnhub.getETFHoldings(symbol);

    return {
      symbol,
      holdings: data.holdings || [],
      topHoldings: (data.holdings || []).slice(0, 10),
      asOfDate: data.atDate || new Date().toISOString()
    };
  } catch (error) {
    console.error(`Error fetching holdings for ${symbol}:`, error);
    return {
      symbol,
      holdings: [],
      topHoldings: [],
      asOfDate: new Date().toISOString()
    };
  }
}

// Fetch multiple ETFs
export async function fetchMultipleETFs(symbols: string[]): Promise<ETFData[]> {
  const promises = symbols.map(symbol => fetchETFDetails(symbol));
  const results = await Promise.allSettled(promises);

  return results
    .filter((result): result is PromiseFulfilledResult<ETFData> => result.status === 'fulfilled')
    .map(result => result.value);
}

// Utility: Format market cap
function formatMarketCap(value: number): string {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  return `$${value.toFixed(2)}`;
}
```

**Task 6: API Routes** (2 hours)

Create `app/api/etf/list/route.ts`:

```typescript
// app/api/etf/list/route.ts
import { NextResponse } from 'next/server';
import { POPULAR_ETFS, fetchMultipleETFs } from '@/lib/etfData';

export async function GET() {
  try {
    const etfs = await fetchMultipleETFs(POPULAR_ETFS);

    return NextResponse.json({
      success: true,
      count: etfs.length,
      etfs
    });
  } catch (error) {
    console.error('ETF list API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch ETF list' },
      { status: 500 }
    );
  }
}

export const revalidate = 300; // Cache for 5 minutes
```

Create `app/api/etf/[symbol]/route.ts`:

```typescript
// app/api/etf/[symbol]/route.ts
import { NextResponse } from 'next/server';
import { fetchETFDetails } from '@/lib/etfData';

export async function GET(
  request: Request,
  { params }: { params: { symbol: string } }
) {
  try {
    const { symbol } = params;
    const etf = await fetchETFDetails(symbol.toUpperCase());

    return NextResponse.json({
      success: true,
      etf
    });
  } catch (error) {
    console.error(`ETF ${params.symbol} API error:`, error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch ETF data' },
      { status: 500 }
    );
  }
}

export const revalidate = 300; // Cache for 5 minutes
```

**Day 1-2 Deliverables**:
- ✅ Project structure complete
- ✅ TypeScript types defined
- ✅ Finnhub API client working
- ✅ ETF data functions implemented
- ✅ API routes live and testable

---

### **Day 3-4: ETF Hub Landing Page**

#### Task 1: ETF Hub Page Layout (3 hours)

Create `app/etf/page.tsx`:

```typescript
// app/etf/page.tsx
import { Metadata } from 'next';
import { fetchMultipleETFs, POPULAR_ETFS } from '@/lib/etfData';
import { ETFCard } from '@/components/etf/ETFCard';

export const metadata: Metadata = {
  title: 'ETF Investment Center | Money365.Market',
  description: 'Discover, compare, and analyze ETFs with professional-grade tools. Browse popular ETFs, use our screener, and make informed investment decisions.',
  keywords: ['ETF', 'ETF screener', 'ETF analysis', 'best ETFs', 'ETF investment'],
};

export default async function ETFHubPage() {
  const popularETFs = await fetchMultipleETFs(POPULAR_ETFS);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-brown to-bronze-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ETF Investment Center
            </h1>
            <p className="text-xl text-cream-100 mb-8">
              Research, compare, and track Exchange-Traded Funds with professional-grade tools
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex items-center max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search ETFs (e.g., SPY, QQQ, VOO)..."
                className="flex-1 px-4 py-2 text-deep-brown outline-none"
              />
              <button className="bg-bronze-600 text-white px-6 py-2 rounded-md hover:bg-bronze-700">
                Search
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-bronze-300">{POPULAR_ETFS.length}+</div>
                <div className="text-sm text-cream-200">ETFs Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bronze-300">$5T+</div>
                <div className="text-sm text-cream-200">Total AUM</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bronze-300">0.03%</div>
                <div className="text-sm text-cream-200">Avg Expense Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular ETFs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown mb-8">Popular ETFs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularETFs.map((etf) => (
              <ETFCard key={etf.symbol} etf={etf} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-deep-brown mb-8">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Broad Market', 'Technology', 'Innovation', 'Dividend', 'International', 'Bond', 'Commodity', 'Sector'].map((category) => (
              <a
                key={category}
                href={`/etf/categories/${category.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-6 rounded-lg border-2 border-stone-200 hover:border-bronze-600 transition-colors text-center"
              >
                <h3 className="text-lg font-bold text-deep-brown">{category}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bronze-50 border-2 border-bronze-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-deep-brown mb-4">
                Find Your Perfect ETF
              </h3>
              <p className="text-stone-600 mb-6">
                Use our advanced screener to filter ETFs by expense ratio, AUM, dividend yield, and more.
              </p>
              <a
                href="/etf/screener"
                className="inline-block bg-bronze-600 text-white px-6 py-3 rounded-md hover:bg-bronze-700"
              >
                Launch Screener →
              </a>
            </div>

            <div className="bg-cream-50 border-2 border-stone-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-deep-brown mb-4">
                New to ETF Investing?
              </h3>
              <p className="text-stone-600 mb-6">
                Learn the basics with our beginner-friendly guides and make informed investment decisions.
              </p>
              <a
                href="/etf/education"
                className="inline-block bg-deep-brown text-white px-6 py-3 rounded-md hover:bg-deep-brown/90"
              >
                Start Learning →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const revalidate = 3600; // Revalidate every hour
```

#### Task 2: ETFCard Component (2 hours)

Create `components/etf/ETFCard.tsx`:

```typescript
// components/etf/ETFCard.tsx
import Link from 'next/link';
import { ETFData } from '@/types/etf';

interface ETFCardProps {
  etf: ETFData;
}

export function ETFCard({ etf }: ETFCardProps) {
  const isPositive = etf.changePercent >= 0;

  return (
    <Link href={`/etf/${etf.symbol}`}>
      <div className="bg-white border-2 border-stone-200 rounded-lg p-6 hover:border-bronze-600 hover:shadow-lg transition-all">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-bronze-600">{etf.symbol}</h3>
            <p className="text-sm text-stone-500 line-clamp-1">{etf.name}</p>
          </div>

          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isPositive
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {isPositive ? '+' : ''}{etf.changePercent.toFixed(2)}%
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-3xl font-bold text-deep-brown">
            ${etf.price.toFixed(2)}
          </div>
          <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{etf.change.toFixed(2)} today
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-2 border-t border-stone-200 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-stone-500">AUM</span>
            <span className="font-semibold text-deep-brown">{etf.aum}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-stone-500">Expense Ratio</span>
            <span className="font-semibold text-deep-brown">{etf.expenseRatio.toFixed(2)}%</span>
          </div>

          {etf.dividendYield > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">Dividend Yield</span>
              <span className="font-semibold text-deep-brown">{etf.dividendYield.toFixed(2)}%</span>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="mt-4">
          <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">
            {etf.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
```

#### Task 3: Test & Polish (3 hours)

- Test API endpoints
- Verify all ETF cards display correctly
- Mobile responsiveness testing
- Fix any layout issues

**Day 3-4 Deliverables**:
- ✅ ETF Hub landing page live
- ✅ 12 popular ETFs displayed
- ✅ Category navigation
- ✅ Search bar (UI only, functionality Day 5-6)
- ✅ Responsive design

---

### **Day 5-7: ETF Detail Pages + Finnhub Widget**

#### Task 1: Dynamic ETF Detail Page (4 hours)

Create `app/etf/[symbol]/page.tsx`:

```typescript
// app/etf/[symbol]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchETFDetails, fetchETFHoldings } from '@/lib/etfData';
import { ETFHeader } from '@/components/etf/ETFHeader';
import { ETFQuickStats } from '@/components/etf/ETFQuickStats';
import { ETFHoldingsWidget } from '@/components/etf/ETFHoldingsWidget';
import { TradingViewChart } from '@/components/etf/TradingViewChart';
import { HoldingsTable } from '@/components/etf/HoldingsTable';

export async function generateMetadata({ params }: { params: { symbol: string } }): Promise<Metadata> {
  try {
    const etf = await fetchETFDetails(params.symbol.toUpperCase());

    return {
      title: `${etf.symbol} - ${etf.name} | ETF Analysis`,
      description: `Detailed analysis of ${etf.symbol} ETF: Current price $${etf.price.toFixed(2)}, AUM ${etf.aum}, Expense Ratio ${etf.expenseRatio}%. View holdings, performance, and more.`,
      keywords: [`${etf.symbol} ETF`, `${etf.name}`, 'ETF holdings', 'ETF analysis'],
    };
  } catch {
    return {
      title: 'ETF Not Found',
    };
  }
}

export default async function ETFDetailPage({ params }: { params: { symbol: string } }) {
  const symbol = params.symbol.toUpperCase();

  try {
    const [etf, holdings] = await Promise.all([
      fetchETFDetails(symbol),
      fetchETFHoldings(symbol)
    ]);

    return (
      <div className="min-h-screen bg-cream-50">
        {/* Header */}
        <ETFHeader etf={etf} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <ETFQuickStats etf={etf} />

              {/* TradingView Chart */}
              <div className="bg-white rounded-lg border-2 border-stone-200 p-6">
                <h2 className="text-2xl font-bold text-deep-brown mb-4">Price Chart</h2>
                <TradingViewChart symbol={symbol} />
              </div>

              {/* About */}
              <div className="bg-white rounded-lg border-2 border-stone-200 p-6">
                <h2 className="text-2xl font-bold text-deep-brown mb-4">About {etf.symbol}</h2>
                <p className="text-stone-600 leading-relaxed">{etf.description}</p>
              </div>

              {/* Top Holdings */}
              <div className="bg-white rounded-lg border-2 border-stone-200 p-6">
                <h2 className="text-2xl font-bold text-deep-brown mb-4">Top 10 Holdings</h2>
                <HoldingsTable holdings={holdings.topHoldings} />
                <p className="text-sm text-stone-500 mt-4">
                  As of {new Date(holdings.asOfDate).toLocaleDateString()}
                </p>
              </div>

              {/* Finnhub Holdings Widget */}
              <div className="bg-white rounded-lg border-2 border-stone-200 p-6">
                <h2 className="text-2xl font-bold text-deep-brown mb-4">Full Holdings Analysis</h2>
                <ETFHoldingsWidget symbol={symbol} />
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Affiliate CTA */}
              <div className="bg-bronze-50 border-2 border-bronze-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-deep-brown mb-2">Trade {symbol}</h3>
                <p className="text-sm text-stone-600 mb-4">
                  Start investing in {etf.name} with commission-free trading.
                </p>
                <button className="w-full bg-bronze-600 text-white py-3 rounded-md hover:bg-bronze-700 font-semibold">
                  Open Free Account →
                </button>
                <p className="text-xs text-stone-500 mt-2">
                  Commission-free trading available
                </p>
              </div>

              {/* Similar ETFs */}
              <div className="bg-white rounded-lg border-2 border-stone-200 p-6">
                <h3 className="text-xl font-bold text-deep-brown mb-4">Similar ETFs</h3>
                <div className="space-y-3">
                  {/* Placeholder - will be dynamic later */}
                  <a href="/etf/VOO" className="block p-3 bg-stone-50 rounded hover:bg-stone-100">
                    <div className="font-semibold text-bronze-600">VOO</div>
                    <div className="text-sm text-stone-500">Vanguard S&P 500 ETF</div>
                  </a>
                  <a href="/etf/IVV" className="block p-3 bg-stone-50 rounded hover:bg-stone-100">
                    <div className="font-semibold text-bronze-600">IVV</div>
                    <div className="text-sm text-stone-500">iShares Core S&P 500</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export const revalidate = 300; // Revalidate every 5 minutes
```

#### Task 2: Supporting Components (4 hours)

Create component files (I'll provide the code in the actual implementation).

**Day 5-7 Deliverables**:
- ✅ Dynamic ETF detail pages working
- ✅ Finnhub widget integrated
- ✅ TradingView charts embedded
- ✅ Top 10 holdings table
- ✅ Affiliate CTA present (tracking ready)

---

## **WEEK 2: Screener + Education + Polish**

### **Day 8-10: ETF Screener**

#### Task 1: Screener UI (4 hours)

Create `app/etf/screener/page.tsx` with:
- Filter panel (AUM, expense ratio, yield, category, returns)
- Results table (sortable columns)
- Export button (CSV download)

#### Task 2: Screener API (2 hours)

Create `app/api/etf/screener/route.ts`:
- Filter logic implementation
- Sorting functionality
- Return matching ETFs

#### Task 3: Testing (2 hours)

- Test all filter combinations
- Verify sorting works
- Mobile responsiveness

**Day 8-10 Deliverables**:
- ✅ Working screener with filters
- ✅ Sortable results table
- ✅ Export functionality
- ✅ Mobile-friendly

---

### **Day 11-12: Education Hub**

#### Task: Create 5 Core Articles

1. **What is an ETF?** (2 hours)
   - Definition, how ETFs work, benefits
   - Target keyword: "what is etf"

2. **ETF vs Mutual Funds vs Stocks** (2 hours)
   - Comparison table, pros/cons
   - Target keyword: "etf vs mutual fund"

3. **How to Choose the Right ETF** (2 hours)
   - Step-by-step guide, criteria
   - Target keyword: "how to choose etf"

4. **Understanding Expense Ratios** (1.5 hours)
   - What they are, why they matter
   - Target keyword: "etf expense ratio"

5. **Top ETFs for Beginners 2025** (2.5 hours)
   - SPY, VOO, VTI breakdown
   - Target keyword: "best etfs for beginners"

**Day 11-12 Deliverables**:
- ✅ 5 education articles published
- ✅ Education hub landing page
- ✅ Internal linking to ETF detail pages

---

### **Day 13-14: Polish, SEO, Launch**

#### Task 1: SEO Optimization (3 hours)

- Meta tags for all pages
- Structured data (schema.org)
- XML sitemap update
- robots.txt check
- Internal linking audit

#### Task 2: Analytics Setup (2 hours)

- Google Analytics 4 events
- Track: ETF views, screener uses, affiliate clicks
- Set up conversion goals

#### Task 3: Performance Optimization (2 hours)

- Image optimization
- Code splitting
- Caching strategy review
- Lighthouse audit (target: 90+ score)

#### Task 4: Final Testing (1 hour)

- Cross-browser testing
- Mobile testing
- Link checking
- Error handling

**Day 13-14 Deliverables**:
- ✅ All pages SEO-optimized
- ✅ Analytics tracking live
- ✅ Performance score 90+
- ✅ Ready for production launch

---

## 📊 Success Metrics & Tracking

### Week 1 Checkpoint (End of Day 7)
- [ ] ETF Hub live with 12 popular ETFs
- [ ] 12+ dynamic ETF detail pages
- [ ] Finnhub API integration working
- [ ] TradingView charts embedded
- [ ] Mobile responsive

### Week 2 Checkpoint (End of Day 14)
- [ ] ETF Screener functional
- [ ] 5 education articles published
- [ ] SEO metadata complete
- [ ] Analytics tracking live
- [ ] Deployed to production

### Month 1 Success Criteria
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Indexed Pages | 50+ | ___ | ⏳ |
| Unique Visitors | 1,000 | ___ | ⏳ |
| Avg Session Duration | 2+ min | ___ | ⏳ |
| Screener Uses | 200+ | ___ | ⏳ |
| First Affiliate Click | 1+ | ___ | ⏳ |

---

## 🚨 Risks & Mitigation

### Risk 1: Finnhub API Rate Limits
**Probability**: Medium
**Impact**: High

**Mitigation**:
- Implement aggressive caching (5-minute revalidation)
- Use Next.js ISR (Incremental Static Regeneration)
- Fallback to cached data if API fails
- Monitor API usage daily

### Risk 2: Content Creation Delay
**Probability**: Medium
**Impact**: Medium

**Mitigation**:
- Start education articles on Day 8 (parallel to screener dev)
- Use AI assistance for drafts (Claude, GPT-4)
- Focus on quality over quantity (5 articles is enough for MVP)

### Risk 3: Performance Issues
**Probability**: Low
**Impact**: Medium

**Mitigation**:
- Use Next.js Image optimization
- Lazy load TradingView widgets
- Implement code splitting
- Monitor with Vercel Analytics

---

## 🎯 Next Steps After Month 1

Once Phase 1 is complete (Week 2), prepare for Phase 2:

**Phase 2 Planning (Week 3-5)**:
- ETF Comparison Tool
- Portfolio Tracker (requires Supabase setup)
- User Authentication
- Watchlist functionality
- Email alerts

**Priority Order**:
1. **Comparison Tool** (high value, medium effort)
2. **Supabase + Auth** (enables portfolio features)
3. **Portfolio Tracker** (high user value)
4. **Alerts** (retention driver)

---

## 📁 File Checklist

### Must Create (Week 1-2)

**Types**:
- [ ] `types/etf.ts`

**Lib**:
- [ ] `lib/finnhub.ts`
- [ ] `lib/etfData.ts`

**API Routes**:
- [ ] `app/api/etf/list/route.ts`
- [ ] `app/api/etf/[symbol]/route.ts`
- [ ] `app/api/etf/screener/route.ts`

**Pages**:
- [ ] `app/etf/page.tsx` (Hub)
- [ ] `app/etf/[symbol]/page.tsx` (Detail)
- [ ] `app/etf/screener/page.tsx` (Screener)
- [ ] `app/etf/education/page.tsx` (Education hub)
- [ ] `app/etf/education/[slug]/page.tsx` (Articles)

**Components**:
- [ ] `components/etf/ETFCard.tsx`
- [ ] `components/etf/ETFHeader.tsx`
- [ ] `components/etf/ETFQuickStats.tsx`
- [ ] `components/etf/ETFHoldingsWidget.tsx`
- [ ] `components/etf/TradingViewChart.tsx`
- [ ] `components/etf/HoldingsTable.tsx`
- [ ] `components/etf/ScreenerFilters.tsx`
- [ ] `components/etf/ScreenerResults.tsx`

---

## ✅ Daily Standup Template

Use this for daily progress tracking:

```markdown
## Day X Standup

**Yesterday**:
- ✅ Completed: [task list]
- ⚠️ Blocked: [blockers]

**Today**:
- 🎯 Focus: [main task]
- 📋 Tasks: [task list]

**Blockers**:
- None / [describe blocker]

**Notes**:
- [Any important observations]
```

---

## 🚀 Launch Checklist (Day 14)

Before going live:

**Technical**:
- [ ] All API endpoints tested
- [ ] Error handling implemented
- [ ] Loading states added
- [ ] Mobile responsive verified
- [ ] Performance score 90+

**Content**:
- [ ] 12+ ETF pages live
- [ ] 5 education articles published
- [ ] All images optimized
- [ ] Internal links checked

**SEO**:
- [ ] Meta tags on all pages
- [ ] Sitemap updated
- [ ] Schema markup added
- [ ] robots.txt configured
- [ ] Google Search Console verified

**Analytics**:
- [ ] GA4 tracking code added
- [ ] Events configured
- [ ] Conversions set up
- [ ] Dashboard created

**Legal**:
- [ ] Affiliate disclosure added
- [ ] Terms of service updated
- [ ] Privacy policy updated

---

**Ready to start?** 🚀

Let me know if you want me to:
1. Generate the actual component code files
2. Create a detailed Git workflow
3. Set up project management board (tasks in GitHub Projects)
4. Write testing plan
