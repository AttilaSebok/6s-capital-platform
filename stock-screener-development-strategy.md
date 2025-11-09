# Stock Screener Development Strategy
## money365.market - Enhanced Screener Roadmap

**Document Version:** 1.0
**Created:** November 9, 2025
**Status:** Planning Phase
**Current State:** 8 stocks, basic filtering (Market Cap, P/E, Dividend Yield)

---

## Executive Summary

The Stock Screener is currently in MVP state with 8 major tech/finance stocks and basic filtering capabilities. This strategy outlines a phased approach to transform it into a comprehensive, engaging tool that keeps users on the platform longer and provides real value for investment research.

**Key Goals:**
- Increase stock coverage from 8 to 30+ stocks across diverse sectors
- Add advanced filtering and sorting capabilities
- Improve user engagement with visual enhancements
- Create individual stock detail pages for SEO and depth
- Maintain performance within Alpha Vantage API rate limits (500/day, 5/min)

---

## Current State Analysis

### ✅ What's Working
- Alpha Vantage API integration with 60-second caching
- Auto-refresh every 2 minutes
- Basic filtering: Market Cap, P/E Ratio, Dividend Yield
- Responsive design with dark theme
- Graceful fallback to sample data
- Real-time "Last Updated" indicator

### ❌ What's Missing
- Limited stock coverage (only 8 stocks)
- No sector diversification
- No sorting capabilities
- Missing Volume and 52-week data
- No visual indicators (charts, trends)
- No individual stock pages
- No "Top Gainers/Losers" quick views
- No export or watchlist features

### 🔍 Competitive Gap Analysis
**vs. Yahoo Finance / Google Finance:**
- They have: Thousands of stocks, advanced charts, news integration
- We focus on: Curated selection, beginner-friendly UI, educational content

**Our Unique Value Proposition:**
- Integrated with our educational articles
- Simplified interface for beginners
- Connected to our investment philosophy (index funds, long-term)

---

## Phase 1: Data Expansion & Foundation
**Timeline:** Week 1 (Nov 11-15, 2025)
**Priority:** HIGH
**Effort:** Medium

### 1.1 Expand Stock Universe (8 → 30+ stocks)

**Objective:** Provide diverse sector representation for meaningful screening

**Implementation:**
```typescript
const DEFAULT_STOCKS = [
  // Technology (9 stocks)
  'AAPL', 'MSFT', 'GOOGL', 'NVDA', 'META', 'AMD', 'INTC', 'CRM', 'ORCL',

  // Finance (7 stocks)
  'JPM', 'BAC', 'GS', 'WFC', 'MS', 'V', 'MA',

  // Healthcare (6 stocks)
  'JNJ', 'PFE', 'UNH', 'ABBV', 'MRK', 'TMO',

  // Consumer (7 stocks)
  'KO', 'PEP', 'WMT', 'COST', 'HD', 'MCD', 'NKE',

  // Energy (3 stocks)
  'XOM', 'CVX', 'SLB',

  // Industrial (3 stocks)
  'CAT', 'BA', 'GE'
]
```

**Rationale:**
- 35 total stocks provide meaningful filtering results
- Sector diversity enables sector-based filtering
- All stocks are highly liquid with reliable API data
- Mix of growth, value, and dividend stocks

**API Rate Limit Considerations:**
- 35 stocks × 2 API calls each = 70 calls per refresh
- With 60-second cache: Max 70 calls/minute on initial load
- **ISSUE:** This exceeds 5 calls/min limit!

**Solution - Batch Loading Strategy:**
```typescript
// Load stocks in batches of 5 with 12-second delays
async function fetchStockDataBatched(symbols: string[]) {
  const batchSize = 5
  const delay = 12000 // 12 seconds between batches

  const batches = []
  for (let i = 0; i < symbols.length; i += batchSize) {
    batches.push(symbols.slice(i, i + batchSize))
  }

  const results = []
  for (const batch of batches) {
    const batchResults = await Promise.all(
      batch.map(symbol => fetchStockData(symbol))
    )
    results.push(...batchResults)
    if (batches.indexOf(batch) < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }

  return results
}
```

**Files to Modify:**
- `app/api/screener/route.ts` - Update DEFAULT_STOCKS array
- `app/api/stock-data/route.ts` - Implement batch loading
- Sample data fallback for all 35 stocks

**Success Metrics:**
- All 35 stocks display correctly
- No API rate limit errors
- Cache hit rate > 80% after initial load
- Page load time < 3 seconds

---

### 1.2 Add Sector Field to Stock Data

**Objective:** Enable sector-based filtering and categorization

**Data Model Update:**
```typescript
interface StockData {
  symbol: string
  name: string
  sector: 'Technology' | 'Finance' | 'Healthcare' | 'Consumer' | 'Energy' | 'Industrial'
  price: number
  change: number
  changePercent: string | number
  volume: string | number        // NEW
  marketCap: string | number
  peRatio: string | number
  dividendYield: string | number
  week52High: string | number     // NEW
  week52Low: string | number      // NEW
}
```

**Sector Mapping:**
```typescript
const SECTOR_MAP: Record<string, string> = {
  'AAPL': 'Technology', 'MSFT': 'Technology', 'GOOGL': 'Technology',
  'JPM': 'Finance', 'BAC': 'Finance', 'GS': 'Finance',
  'JNJ': 'Healthcare', 'PFE': 'Healthcare', 'UNH': 'Healthcare',
  // ... etc
}
```

**Alpha Vantage API Integration:**
- Volume: Already in GLOBAL_QUOTE response (`06. volume`)
- 52-Week High/Low: Need to fetch from OVERVIEW endpoint
- **Challenge:** OVERVIEW endpoint counts toward rate limits!

**Optimization Strategy:**
- Cache OVERVIEW data for 24 hours (company fundamentals change slowly)
- Store in separate cache from real-time quotes
- Only refresh on manual user request or daily

**Files to Modify:**
- `app/api/stock-data/route.ts` - Add sector mapping, fetch volume/52w data
- `app/screener/page.tsx` - Update StockData interface
- Sample data - Add realistic sector, volume, 52w values

---

## Phase 2: Filtering & Sorting
**Timeline:** Week 1-2 (Nov 11-18, 2025)
**Priority:** HIGH
**Effort:** Medium

### 2.1 Sector Filter Dropdown

**UI Design:**
```tsx
<select
  name="sector"
  value={filters.sector}
  onChange={handleFilterChange}
  className="w-full px-4 py-2.5 border-2 border-stone-600 rounded-none bg-slate-700 text-white"
>
  <option value="">All Sectors</option>
  <option value="Technology">Technology</option>
  <option value="Finance">Finance</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Consumer">Consumer Goods</option>
  <option value="Energy">Energy</option>
  <option value="Industrial">Industrial</option>
</select>
```

**Filtering Logic:**
```typescript
if (filters.sector) {
  filtered = filtered.filter(stock => stock.sector === filters.sector)
}
```

**Visual Enhancement:**
- Color-code sectors in table rows
- Sector badge/pill in Name column
- Sector legend below table

**Files to Modify:**
- `app/screener/page.tsx` - Add sector dropdown, filtering logic, color coding

---

### 2.2 Column Sorting

**Objective:** Allow users to sort by any column

**UI Design:**
- Clickable column headers
- Arrow icons (↑/↓) to indicate sort direction
- Active column highlighted

**Implementation:**
```typescript
const [sortConfig, setSortConfig] = useState<{
  key: keyof StockData | null
  direction: 'asc' | 'desc'
}>({ key: null, direction: 'asc' })

const handleSort = (key: keyof StockData) => {
  setSortConfig(prev => ({
    key,
    direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
  }))
}

// Apply sorting to filtered stocks
const sortedStocks = useMemo(() => {
  if (!sortConfig.key) return filteredStocks

  return [...filteredStocks].sort((a, b) => {
    const aVal = parseFloat(String(a[sortConfig.key!]))
    const bVal = parseFloat(String(b[sortConfig.key!]))

    if (sortConfig.direction === 'asc') {
      return aVal - bVal
    } else {
      return bVal - aVal
    }
  })
}, [filteredStocks, sortConfig])
```

**Column Headers:**
```tsx
<th
  onClick={() => handleSort('price')}
  className="cursor-pointer hover:bg-stone-600 transition-colors"
>
  <div className="flex items-center justify-end">
    Price
    {sortConfig.key === 'price' && (
      <span className="ml-2">
        {sortConfig.direction === 'asc' ? '↑' : '↓'}
      </span>
    )}
  </div>
</th>
```

**Sortable Columns:**
- Symbol (alphabetical)
- Name (alphabetical)
- Price (numerical)
- Change % (numerical)
- Volume (numerical)
- Market Cap (numerical)
- P/E Ratio (numerical)
- Dividend Yield (numerical)

**Files to Modify:**
- `app/screener/page.tsx` - Add sorting state, logic, UI

---

### 2.3 Additional Filters

**Volume Filter:**
```tsx
<div>
  <label>Min Daily Volume (Millions)</label>
  <input
    type="number"
    name="minVolume"
    placeholder="e.g., 10"
    // Filter logic: volume >= minVolume * 1,000,000
  />
</div>
```

**52-Week Position Filter:**
```tsx
<div>
  <label>% From 52-Week High</label>
  <select name="weekPosition">
    <option value="">Any</option>
    <option value="within5">Within 5% of High</option>
    <option value="within10">Within 10% of High</option>
    <option value="below20">20%+ Below High</option>
  </select>
</div>
```

**Files to Modify:**
- `app/screener/page.tsx` - Add new filter inputs and logic

---

## Phase 3: Visual Enhancements
**Timeline:** Week 2-3 (Nov 18-25, 2025)
**Priority:** MEDIUM
**Effort:** High

### 3.1 Top Gainers / Top Losers Tabs

**Objective:** Quick access to daily movers

**UI Design:**
```tsx
<div className="flex gap-4 mb-6">
  <button
    onClick={() => setActiveTab('all')}
    className={`px-6 py-3 ${activeTab === 'all' ? 'bg-bronze-600' : 'bg-stone-700'}`}
  >
    All Stocks ({allStocks.length})
  </button>
  <button
    onClick={() => setActiveTab('gainers')}
    className={`px-6 py-3 ${activeTab === 'gainers' ? 'bg-green-600' : 'bg-stone-700'}`}
  >
    Top Gainers 📈
  </button>
  <button
    onClick={() => setActiveTab('losers')}
    className={`px-6 py-3 ${activeTab === 'losers' ? 'bg-red-600' : 'bg-stone-700'}`}
  >
    Top Losers 📉
  </button>
</div>
```

**Logic:**
```typescript
const topGainers = useMemo(() => {
  return [...allStocks]
    .sort((a, b) => {
      const aChange = typeof a.changePercent === 'string' ? parseFloat(a.changePercent) : a.changePercent
      const bChange = typeof b.changePercent === 'string' ? parseFloat(b.changePercent) : b.changePercent
      return bChange - aChange
    })
    .slice(0, 10)
}, [allStocks])

const topLosers = useMemo(() => {
  return [...allStocks]
    .sort((a, b) => {
      const aChange = typeof a.changePercent === 'string' ? parseFloat(a.changePercent) : a.changePercent
      const bChange = typeof b.changePercent === 'string' ? parseFloat(b.changePercent) : b.changePercent
      return aChange - bChange
    })
    .slice(0, 10)
}, [allStocks])
```

**Display Logic:**
```typescript
const displayStocks = useMemo(() => {
  if (activeTab === 'gainers') return topGainers
  if (activeTab === 'losers') return topLosers
  return filteredStocks
}, [activeTab, topGainers, topLosers, filteredStocks])
```

**Visual Badges:**
- 🔥 Badge for gainers > +5%
- 💥 Badge for losers < -5%
- Crown icon for #1 gainer/loser

**Files to Modify:**
- `app/screener/page.tsx` - Add tab state, filtering logic, badges

---

### 3.2 Sparkline Mini-Charts

**Objective:** Show 7-day price trend for each stock

**Library:** Use `recharts` (already in project) or lightweight `react-sparklines`

**Installation:**
```bash
npm install react-sparklines
```

**Implementation:**
```tsx
import { Sparklines, SparklinesLine } from 'react-sparklines'

// In table cell:
<td className="px-6 py-4">
  <Sparklines data={stock.priceHistory7d} width={80} height={30}>
    <SparklinesLine
      color={stock.change >= 0 ? '#4ade80' : '#f87171'}
      style={{ strokeWidth: 2, fill: 'none' }}
    />
  </Sparklines>
</td>
```

**Data Source Challenge:**
- Alpha Vantage TIME_SERIES_DAILY requires separate API call
- **Rate limit concern:** 35 stocks × 1 call = 35 extra calls!

**Solution - Progressive Enhancement:**
1. **Phase 3A:** Show sparklines only for visible/filtered stocks
2. **Phase 3B:** Lazy load on hover/demand
3. **Phase 3C:** Cache daily data for 24 hours (market data doesn't change retroactively)

**Alternative - Generate from existing data:**
```typescript
// Use synthetic 7-day data based on current price and volatility
function generateSparklineData(currentPrice: number, volatility: number = 0.02) {
  const data = []
  let price = currentPrice * (1 - volatility * 3.5) // Start ~7% lower

  for (let i = 0; i < 7; i++) {
    const change = (Math.random() - 0.5) * volatility * price
    price += change
    data.push(price)
  }

  data[6] = currentPrice // End at current price
  return data
}
```

**Decision:** Use synthetic data for MVP, upgrade to real TIME_SERIES_DAILY later

**Files to Modify:**
- `package.json` - Add react-sparklines
- `app/api/stock-data/route.ts` - Generate synthetic sparkline data
- `app/screener/page.tsx` - Add Sparklines column

---

### 3.3 Enhanced Styling

**Heatmap Color Coding:**
```tsx
// Color-code change % cells
const getChangeColor = (changePercent: number) => {
  if (changePercent >= 3) return 'bg-green-900/30 text-green-400'
  if (changePercent >= 1) return 'bg-green-800/20 text-green-400'
  if (changePercent > 0) return 'text-green-400'
  if (changePercent > -1) return 'text-red-400'
  if (changePercent > -3) return 'bg-red-800/20 text-red-400'
  return 'bg-red-900/30 text-red-400'
}
```

**Sector Color Badges:**
```typescript
const SECTOR_COLORS: Record<string, string> = {
  'Technology': 'bg-blue-600 text-white',
  'Finance': 'bg-emerald-600 text-white',
  'Healthcare': 'bg-red-600 text-white',
  'Consumer': 'bg-purple-600 text-white',
  'Energy': 'bg-yellow-600 text-black',
  'Industrial': 'bg-gray-600 text-white'
}
```

**Hover Effects:**
- Expanded row on hover showing additional metrics
- Tooltip with 52-week range bar chart
- Quick actions: "Add to Watchlist", "View Details"

**Files to Modify:**
- `app/screener/page.tsx` - Enhanced styling, tooltips

---

## Phase 4: Individual Stock Pages
**Timeline:** Week 3-4 (Nov 25 - Dec 2, 2025)
**Priority:** MEDIUM
**Effort:** High

### 4.1 Create Stock Detail Route

**Route Structure:**
```
/stock/[symbol]
  → app/stock/[symbol]/page.tsx
```

**Page Components:**
1. **Header Section**
   - Company name, symbol, sector
   - Current price (large, prominent)
   - Change $ and % (color-coded)
   - Last updated timestamp

2. **Key Metrics Grid**
   - Market Cap
   - P/E Ratio
   - Dividend Yield
   - Volume
   - 52-Week High/Low with range bar
   - Average Volume
   - EPS (if available)
   - Beta (if available)

3. **Price Chart**
   - 30-day, 90-day, 1-year, 5-year tabs
   - Full recharts implementation
   - Volume bars below price line

4. **Company Overview**
   - Fetch from OVERVIEW endpoint (cached 24h)
   - Description, industry, employees
   - Headquarters, founded year

5. **Related Articles**
   - Link to relevant money365.market articles
   - "Learn more about investing in [sector]"
   - Educational content integration

6. **Call-to-Action**
   - "Open Brokerage Account" button
   - "Add to Watchlist" (future feature)
   - Social share buttons

**Implementation:**
```tsx
// app/stock/[symbol]/page.tsx
import { Metadata } from 'next'

type Props = {
  params: Promise<{ symbol: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { symbol } = await params

  return {
    title: `${symbol.toUpperCase()} Stock Price & Analysis | money365.market`,
    description: `View real-time ${symbol.toUpperCase()} stock price, key metrics, charts, and analysis. Learn about investing in ${symbol.toUpperCase()}.`
  }
}

export default async function StockPage({ params }: Props) {
  const { symbol } = await params

  // Fetch stock data server-side
  const stockData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stock/${symbol}`)
  const stock = await stockData.json()

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Stock detail page content */}
    </div>
  )
}
```

**SEO Benefits:**
- 35 new indexed pages (one per stock)
- Long-tail keywords: "[SYMBOL] stock price", "[SYMBOL] analysis"
- Internal linking from Screener table
- Schema.org markup for financial data

**Files to Create:**
- `app/stock/[symbol]/page.tsx` - Main stock detail page
- `components/StockChart.tsx` - Reusable chart component
- `components/StockMetrics.tsx` - Key metrics display

**Files to Modify:**
- `app/screener/page.tsx` - Add Links to stock symbols

---

### 4.2 Make Symbols Clickable in Screener

**Implementation:**
```tsx
import Link from 'next/link'

// In table cell:
<td className="px-6 py-4 whitespace-nowrap font-bold">
  <Link
    href={`/stock/${stock.symbol}`}
    className="text-bronze-600 hover:text-bronze-700 hover:underline transition-colors"
  >
    {stock.symbol}
  </Link>
</td>
```

**User Flow:**
1. User filters stocks in Screener
2. Clicks on AAPL symbol
3. Navigates to `/stock/AAPL`
4. Sees detailed analysis
5. Reads related articles
6. Returns to Screener or opens brokerage account

**Files to Modify:**
- `app/screener/page.tsx` - Wrap symbols in Link components

---

## Phase 5: Advanced Features (Future)
**Timeline:** Week 4+ (Dec 2025+)
**Priority:** LOW
**Effort:** High

### 5.1 Watchlist Feature
- User can save favorite stocks
- LocalStorage persistence (no backend needed initially)
- Quick access dropdown in header
- Email alerts when watchlist stocks hit targets (premium feature)

### 5.2 Export Functionality
- Export filtered results to CSV
- Download PDF report
- Share filtered screener URL (query params)

### 5.3 Advanced Charts
- Technical indicators (SMA, EMA, RSI, MACD)
- Comparison mode (overlay 2-3 stocks)
- Drawing tools for trend lines
- Full-screen chart mode

### 5.4 News Integration
- Alpha Vantage NEWS_SENTIMENT endpoint
- Show latest 5 news articles per stock
- Sentiment score visualization
- Filter by news sentiment

### 5.5 Earnings Calendar
- Show upcoming earnings dates
- Historical earnings performance
- Beat/miss indicators

---

## Technical Considerations

### API Rate Limit Management

**Alpha Vantage Free Tier:**
- 500 calls per day
- 5 calls per minute

**Our Usage (35 stocks):**
- Initial load: 35 calls (with batching over 7 minutes)
- Refresh (every 2 min): Served from cache
- Cache duration: 60 seconds
- Daily refreshes: ~720 (24 hours × 30 refreshes/hour)
- **Status:** EXCEEDS daily limit!

**Mitigation Strategies:**

1. **Increase Cache Duration**
   - Market hours only: 9:30 AM - 4 PM ET (6.5 hours)
   - Outside market hours: Cache for 1 hour
   - Reduces daily calls to ~200

2. **Smart Refresh**
   - Only refresh visible/filtered stocks
   - Prioritize most-viewed stocks
   - Background refresh for others

3. **Upgrade Alpha Vantage Plan**
   - $49.99/month: 75 calls/min, 75,000/day
   - More than enough for production

4. **Alternative: Multiple API Keys**
   - Rotate between 3-5 free API keys
   - Distributes load
   - Not ideal, but works for MVP

**Recommendation:** Start with Strategy #1 (smart caching), upgrade to paid plan when we exceed 500/day consistently.

---

### Performance Optimization

**Current Performance:**
- Initial load: ~3 seconds (8 stocks)
- Projected with 35 stocks: ~10-15 seconds (unacceptable)

**Optimizations:**

1. **Progressive Loading**
   ```tsx
   // Show skeleton UI immediately
   // Load stocks in batches of 5
   // Update table as batches complete
   ```

2. **Virtual Scrolling**
   - Only render visible rows
   - Use `react-window` or `react-virtualized`
   - Handles 1000+ stocks smoothly

3. **Service Worker Caching**
   - Cache API responses in browser
   - Instant load on repeat visits
   - Background sync for updates

4. **SSR for Initial Load**
   - Server-side fetch stock data
   - Send pre-rendered HTML
   - Hydrate on client
   - Improves perceived performance

**Files to Modify:**
- `app/screener/page.tsx` - Implement progressive loading
- `next.config.js` - Enable SWC optimizations

---

### Database Consideration

**Current:** No database, all data from API

**When to Add Database:**
- User accounts (watchlists, portfolios)
- Historical data storage (reduce API calls)
- Custom alerts, notifications
- Premium features

**Recommended Stack:**
- PostgreSQL (Vercel Postgres or Supabase)
- Prisma ORM
- tRPC for type-safe API

**Not needed for Phase 1-3.**

---

## Success Metrics

### Phase 1 Success Criteria
- ✅ 35+ stocks displaying correctly
- ✅ All sectors represented
- ✅ No API rate limit errors
- ✅ Page load < 5 seconds
- ✅ Cache hit rate > 70%

### Phase 2 Success Criteria
- ✅ Sector filter working smoothly
- ✅ All columns sortable
- ✅ Filters can be combined
- ✅ User can find stocks matching criteria in < 30 seconds

### Phase 3 Success Criteria
- ✅ Top Gainers/Losers tabs functional
- ✅ Sparklines display for all stocks
- ✅ Visual enhancements improve engagement
- 📊 Average time on page increases by 50%
- 📊 Bounce rate decreases by 30%

### Phase 4 Success Criteria
- ✅ All 35 stock detail pages live
- ✅ Pages indexed by Google within 1 week
- 📊 Screener → Stock page conversion > 20%
- 📊 Stock page → Article conversion > 15%

---

## Risk Assessment

### High Risk
1. **API Rate Limits**
   - Mitigation: Smart caching, batch loading, upgrade plan

2. **Performance with 35+ stocks**
   - Mitigation: Progressive loading, virtual scrolling, SSR

3. **Data accuracy from sample data fallback**
   - Mitigation: Clear labeling, encourage API setup

### Medium Risk
1. **User expectations (vs. Yahoo Finance)**
   - Mitigation: Set expectations (curated list, beginner-friendly)

2. **Mobile performance**
   - Mitigation: Responsive design, table horizontal scroll

### Low Risk
1. **Sparkline library compatibility**
   - Mitigation: Use well-maintained library, test thoroughly

2. **SEO cannibalization with articles**
   - Mitigation: Clear content differentiation, internal linking

---

## Dependencies

### Required for Phase 1-2
- ✅ Alpha Vantage API key (already have)
- ✅ Next.js 16+ (already on 16.0.1)
- ✅ React 19+ (already on 19.2.0)
- ✅ Tailwind CSS (already configured)

### Required for Phase 3
- ⬜ react-sparklines or recharts
- ⬜ Additional API endpoints (TIME_SERIES_DAILY)

### Required for Phase 4
- ⬜ recharts (full implementation)
- ⬜ Stock detail page templates

### Optional for Phase 5
- ⬜ Database (PostgreSQL + Prisma)
- ⬜ Authentication (NextAuth.js)
- ⬜ Email service (Resend, already have)

---

## Timeline Summary

| Phase | Duration | Effort | Priority | Status |
|-------|----------|--------|----------|--------|
| Phase 1: Data Expansion | 3-5 days | Medium | HIGH | 📋 Planning |
| Phase 2: Filtering & Sorting | 3-5 days | Medium | HIGH | 📋 Planning |
| Phase 3: Visual Enhancements | 5-7 days | High | MEDIUM | 📋 Planning |
| Phase 4: Stock Detail Pages | 5-7 days | High | MEDIUM | 📋 Planning |
| Phase 5: Advanced Features | Ongoing | High | LOW | 🔮 Future |

**Total Estimated Timeline:** 3-4 weeks for Phases 1-4

---

## Next Steps

### Immediate Actions (This Week)
1. ✅ Create this strategy document
2. ⬜ Implement batch loading for API calls
3. ⬜ Expand DEFAULT_STOCKS to 35+ stocks
4. ⬜ Add sector mapping
5. ⬜ Update sample data with all new stocks
6. ⬜ Test with real API (verify no rate limit errors)

### Week 2 Actions
1. ⬜ Add sector filter dropdown
2. ⬜ Implement column sorting
3. ⬜ Add Volume and 52-week data
4. ⬜ Create Top Gainers/Losers tabs
5. ⬜ User testing with 5-10 people

### Week 3-4 Actions
1. ⬜ Add sparkline charts
2. ⬜ Create stock detail page template
3. ⬜ Implement first 5 stock detail pages
4. ⬜ SEO optimization and testing
5. ⬜ Deploy to production

---

## Open Questions

1. **Should we add ETFs to the screener?**
   - Pros: Aligns with index fund philosophy, more coverage
   - Cons: Different metrics (expense ratio vs. P/E), API complications
   - Decision: **Phase 6 - ETF Screener as separate tool**

2. **Real-time vs. delayed data?**
   - Alpha Vantage is ~15 min delayed
   - Real-time requires paid API (Polygon, IEX Cloud)
   - Decision: **Delayed is fine for our audience (long-term investors)**

3. **International stocks?**
   - Alpha Vantage supports global markets
   - Adds complexity (currencies, exchanges)
   - Decision: **US stocks only for MVP, international in Phase 5+**

4. **Cryptocurrency?**
   - High user interest
   - Very different asset class
   - Decision: **Separate crypto screener in future**

---

## Conclusion

This Stock Screener enhancement strategy balances ambition with practicality. By focusing on data expansion, filtering capabilities, and visual engagement in Phases 1-3, we can deliver significant value within 2-3 weeks. Phase 4 adds SEO value and depth, while Phase 5 provides a roadmap for premium features.

The key to success is respecting API rate limits through smart caching and batch loading, maintaining performance as we scale, and staying true to our mission: **making investing accessible and understandable for beginners.**

---

**Document Owner:** money365.market Development Team
**Last Updated:** November 9, 2025
**Next Review:** November 16, 2025 (post-Phase 1)
