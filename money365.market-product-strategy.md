# 🔵 Product Strategy: 6s Capital Platform Development

## 🚀 Latest Updates (November 9, 2025)

### Major Achievements Today

**1. Content Expansion**
- ✅ Added cross-reference sections to 2 beginner guide articles (#1, #24)
- ✅ Cross-references now in 7 total articles
- ✅ "Continue Your Learning Journey" format standardized
- ✅ Strategic internal linking for SEO and user engagement

**2. Alpha Vantage API Integration**
- ✅ API key configured: `35OX1N6DMLMV87Y7`
- ✅ Created 3 backend API endpoints:
  - `/api/stock-data` - Batch stock fetching with caching
  - `/api/screener` - Filtered stock screening
  - `/api/stock/[symbol]` - Individual stock quotes
- ✅ Implemented 60-second caching to respect rate limits
- ✅ Graceful fallback to sample data on API errors

**3. Stock Screener MVP Complete**
- ✅ Real-time stock data from Alpha Vantage
- ✅ Filter by: Market cap, P/E ratio, dividend yield
- ✅ Auto-refresh every 2 minutes
- ✅ Manual refresh button
- ✅ Loading states and error handling
- ✅ "Last updated" timestamp
- ✅ Dark theme UI matching site design
- ✅ 8 default stocks (AAPL, MSFT, GOOGL, AMZN, NVDA, TSLA, META, JPM)

**4. MCP Integration**
- ✅ Alpha Vantage MCP Server installed
- ✅ Remote HTTP connection: `https://mcp.alphavantage.co/mcp`
- ✅ Status: Connected and active
- ✅ Claude Code now has direct access to:
  - Real-time stock quotes
  - Company fundamentals
  - Options data with Greeks
  - News sentiment and earnings
  - Historical data (20+ years)
  - Economic indicators

**5. Technical Infrastructure**
- ✅ Environment variables configured (`.env.local`)
- ✅ Git commits created for all changes
- ✅ Development server running successfully
- ✅ Error handling and fallbacks implemented

### Impact
- **Daily visit reason**: Stock Screener provides live market data
- **SEO improvement**: Cross-references boost internal linking
- **User engagement**: Multi-article reading paths established
- **Technical foundation**: API infrastructure ready for expansion

---

## 📋 Executive Summary

**Vision**: Transform 6s Capital into a must-visit daily destination for investors (beginners to advanced) through exceptional design and comprehensive, engaging content that provides genuine value.

**Timeline**: 6 months to revenue generation
**Revenue Model**: Multi-channel approach (affiliate marketing, advertising, premium content)
**Current Status**: 41 articles complete (82%), Stock Screener with live API data, Alpha Vantage MCP integration
**Gap**: 9 more articles, advanced tools, monetization setup
**Last Updated**: November 9, 2025

---

## 🎯 Core Strategic Question

**"Why should I visit 6s Capital daily as an investor?"**

### Current Answer (Improved - November 2025)
- ✅ 35 educational articles covering beginner to advanced topics
- ✅ Stock Screener with live market data (auto-refresh every 2 minutes)
- ✅ Real-time stock quotes via Alpha Vantage API
- ✅ Cross-reference system between articles (improved engagement)
- ⏳ No personalization yet
- ⏳ No community/interaction yet

### Target Answer (Strong)
- **Daily market insights** - Fresh analysis every trading day
- **Live portfolio tracking** - My watchlist, my holdings
- **Personalized recommendations** - Content based on my interests
- **Interactive tools** - Screeners, calculators, comparison tools
- **Community value** - Comments, discussions, expert insights
- **Breaking news alerts** - Important market events via newsletter
- **Exclusive research** - Premium reports and deep dives

---

## 👥 Target User Personas

### Persona 1: "Curious Beginner" (40% of traffic)
- **Age**: 25-35
- **Goal**: Learn investing basics, make first investment
- **Pain Points**: Overwhelmed by jargon, afraid to start, analysis paralysis
- **Needs**: Simple guides, step-by-step tutorials, confidence building
- **Daily Visit Reason**: New beginner tip, simple market update, motivational content

### Persona 2: "Active Learner" (35% of traffic)
- **Age**: 30-50
- **Goal**: Improve investing skills, beat market returns
- **Pain Points**: Too much conflicting advice, hard to filter signal from noise
- **Needs**: Intermediate strategies, real examples, actionable insights
- **Daily Visit Reason**: Stock analysis, screening tools, strategy breakdowns

### Persona 3: "Advanced Optimizer" (25% of traffic)
- **Age**: 40-60
- **Goal**: Maximize returns, stay informed on market trends
- **Pain Points**: Time-consuming research, need curated quality content
- **Needs**: Deep analysis, data tools, exclusive research
- **Daily Visit Reason**: Premium research reports, advanced screening, portfolio analytics

---

## 📝 Content & Design Development Priorities

### Phase 1: Content Excellence (Weeks 1-8)

#### 1.1 Article Expansion (Target: 50 articles)

**Articles #1-10 (✅ COMPLETE):**
1. How to Start Investing in Stocks: Complete 2025 Guide
2. What is Value Investing? Warren Buffett's Strategy Explained
3. 10 Best Dividend Stocks for Passive Income in 2025
4. Technical Analysis 101: Reading Stock Charts for Beginners
5. S&P 500 vs NASDAQ: Which Index is Better for You?
6. Understanding P/E Ratio: Is a Stock Cheap or Expensive?
7. 5 Investing Mistakes That Cost Beginners Thousands
8. How to Build a Diversified Portfolio: Step-by-Step
9. Dividend Yield vs Growth: Which Strategy is Better?
10. What is Dollar-Cost Averaging? (With Real Examples)

**Articles #11-20 (✅ COMPLETE):**
11. How to Read Financial Statements: Complete Beginner's Guide
12. ETFs vs Mutual Funds: Complete Comparison Guide
13. Retirement Accounts Guide: 401k, IRA, and Roth IRA Explained
14. Stock Valuation Methods: DCF, Comps, and Precedents
15. Understanding Market Cycles and Economic Indicators
16. Options Trading 101: Calls, Puts, and Beginner Strategies
17. Real Estate vs Stocks: Which Investment is Better?
18. Tax-Loss Harvesting: Save Thousands in Taxes
19. How to Analyze Quarterly Earnings Reports (10-Q Guide)
20. International Investing: Emerging Markets Complete Guide

**Articles #21-30 (✅ COMPLETE):**
21. How to Open Your First Brokerage Account: Step-by-Step Guide
22. What is Compound Interest? The 8th Wonder of the World Explained
23. Asset Allocation 101: Stocks, Bonds, and Cash Explained
24. How Much Money Do You Need to Start Investing?
25. Index Funds Explained: The Simplest Path to Wealth
26. Growth Investing vs Value Investing: Which Strategy Wins?
27. Sector Rotation Strategy: How to Position for Market Cycles
28. Buy and Hold Forever: The Warren Buffett Approach
29. Momentum Investing: Riding the Winners Higher
30. Income Investing Strategy: Building a Passive Income Portfolio

**Articles #31-40 (✅ COMPLETE - Fundamental + Technical Analysis):**
31. Quality Investing: Finding Companies with Competitive Moats (PLANNED)
32. How to Read a Balance Sheet Like a Professional Analyst (PLANNED)
33. Cash Flow Analysis: Why Cash is King in Investing (PLANNED)
34. Debt-to-Equity Ratio: Measuring Financial Leverage and Risk (PLANNED)
35. Return on Equity (ROE): The Ultimate Profitability Metric (PLANNED)
36. ✅ Free Cash Flow: The Most Important Metric You're Ignoring
37. ✅ Moving Averages Explained: 50-Day vs 200-Day Strategies
38. ✅ RSI Indicator: How to Spot Overbought and Oversold Stocks
39. ✅ Support and Resistance Levels: The Foundation of Technical Analysis
40. ✅ MACD Indicator: The Complete Beginner's Guide

**Articles #41-50 (PLANNED - Portfolio + Market + Tax/Retirement):**
41. The 60/40 Portfolio: Is It Still Relevant in 2025?
42. How to Rebalance Your Portfolio: When and How Often
43. Core-Satellite Portfolio Strategy: Best of Both Worlds
44. International Diversification: How Much Foreign Exposure?
45. Bull Markets vs Bear Markets: History, Duration, and What to Do
46. Recession Indicators: 7 Warning Signs to Watch
47. Fed Policy and Stock Markets: How Interest Rates Affect Your Portfolio
48. HSA as Investment Account: The Triple Tax Advantage Explained
49. Social Security Strategies: When to Claim for Maximum Benefits
50. Mega Backdoor Roth: Advanced Retirement Contribution Strategy

**Content Category Targets (50 articles):**
- **Beginner Guides**: 15 articles (#1, #7, #10, #21-25) → ✅ 8/15 complete
- **Investment Strategies**: 12 articles (#2, #9, #12, #16, #17, #26-31) → ✅ 11/12 complete (missing only #31)
- **Fundamental Analysis**: 9 articles (#6, #11, #14, #19, #32-36) → ✅ 5/9 complete (#36 done)
- **Technical Analysis**: 5 articles (#4, #37-40) → ✅ 5/5 complete (#37-40 done)
- **Portfolio Strategy**: 6 articles (#8, #20, #41-44) → 2/6 complete
- **Market Analysis**: 5 articles (#5, #15, #45-47) → 2/5 complete
- **Tax & Retirement**: 5 articles (#13, #18, #48-50) → 2/5 complete
- **Stock Analysis**: 1 article (#3) → ✅ 1/1 complete

**OVERALL PROGRESS: 35/50 articles complete (70%)**

#### 1.1.1 Article Writing Standards (NEW - November 2025)

**Mandatory Article Structure:**

1. **Article Metadata**
   - SEO-optimized title (55-60 chars)
   - Compelling description (150-160 chars)
   - Relevant keywords (5-7 keywords)
   - Category (Beginner Guides, Technical Analysis, Fundamental Analysis, etc.)
   - Read time estimate
   - Publish date

2. **Content Components**
   - `<KeyTakeaway>` section at the beginning (bullet list of what reader will learn)
   - `<ExampleBox>` components for real-world examples
   - `<h2>` and `<h3>` headings for proper structure
   - Actionable "Action Steps" section before final thoughts
   - "Final Thoughts" conclusion paragraph

3. **✅ MANDATORY: Related Articles Section**
   - **MUST BE INCLUDED** at the end of every article
   - Placed after "Final Thoughts" and "Next Steps" box
   - 2x2 grid layout (4 related articles)
   - Each link includes:
     - Title (max 60 chars)
     - Short contextual description (1 sentence explaining why it's relevant)
   - Strategic selection:
     - For Technical Analysis: Link to other TA articles + 1-2 fundamental articles
     - For Fundamental Analysis: Link to other FA articles + 1-2 technical articles
     - Create natural learning paths (beginner → intermediate → advanced)
   - Benefits:
     - Increases average session duration
     - Boosts pageviews per session
     - Improves SEO through internal linking
     - Reduces bounce rate
     - Encourages content discovery

**Example Related Articles Implementation:**
```tsx
<div className="mt-8 border-t-2 border-stone-200 pt-8">
  <h3 className="text-xl font-bold mb-4 text-deep-brown">Related Articles</h3>
  <div className="grid md:grid-cols-2 gap-4">
    <a href="/articles/moving-averages-guide" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
      <h4 className="font-bold text-deep-brown mb-2">Moving Averages Explained</h4>
      <p className="text-sm text-stone-600">MACD is built from moving averages—understand the foundation of this powerful indicator.</p>
    </a>
    {/* 3 more links */}
  </div>
</div>
```

**Articles with Cross-References Implemented (November 9, 2025):**
- ✅ Article #1: How to Start Investing in Stocks (6 cross-references added)
- ✅ Article #24: How Much Money Do You Need to Start Investing? (6 cross-references added)
- ✅ Article #36: Free Cash Flow Guide
- ✅ Article #37: Moving Averages Guide
- ✅ Article #38: RSI Indicator Guide
- ✅ Article #39: Support & Resistance Levels
- ✅ Article #40: MACD Indicator Guide

**Cross-Reference Strategy:**
- Beginner articles link to: How-to guides, Index Funds, Asset Allocation, Common Mistakes
- Technical Analysis articles link to: Other TA indicators + Fundamental Analysis balance
- Each article includes "Continue Your Learning Journey" section with 4-6 contextual links
- Format: Title + one-sentence description explaining relevance
- Placement: After main content, before disclaimer

**TODO: Add cross-references to remaining articles (#2-23, #25-35)**

#### 1.2 Interactive Content (Daily Visit Drivers)

**Stock of the Week**
- In-depth analysis of one company every Monday
- Full valuation breakdown, bull/bear cases
- Archive becomes valuable stock database

**Weekly Market Recap**
- Published every Sunday
- What happened, what matters, what to watch
- 5-minute read format

**Daily Market Snapshot** (Quick Wins)
- S&P 500, NASDAQ, key movers (top 3 up/down)
- One sentence explanation per mover
- Updated daily at market close
- Becomes homepage feature

**Investor Q&A Series**
- Weekly article answering reader questions
- Builds community engagement
- Evergreen searchable content

#### 1.3 Design Enhancements

**Homepage Redesign**
- Hero: Daily market snapshot (dynamic)
- Featured: Latest article + Stock of the Week
- Quick Links: Top tools (Screener, Markets, Newsletter)
- Categories: Visual cards for each content category
- Newsletter signup: Prominent, value-focused

**Article Page Enhancements**
- ✅ **Related Articles Section** (IMPLEMENTED - Standard for all articles)
  - 2x2 grid layout at article end
  - 4 contextual links to related content
  - Hover effect with bronze border
  - Short descriptions explaining relevance
  - Strategic mix of technical + fundamental topics
  - **Example structure:**
    ```
    <div className="mt-8 border-t-2 border-stone-200 pt-8">
      <h3 className="text-xl font-bold mb-4 text-deep-brown">Related Articles</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <a href="/articles/..." className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
          <h4 className="font-bold text-deep-brown mb-2">Article Title</h4>
          <p className="text-sm text-stone-600">Short contextual description</p>
        </a>
        <!-- Repeat for 4 total links -->
      </div>
    </div>
    ```
  - **Benefits:** Increases time-on-site, pageviews per session, and internal linking for SEO
- "Next in series" navigation for sequential learning (PLANNED)
- Progress indicators for article series (PLANNED)
- Estimated reading time + difficulty level badges (PLANNED)
- Social proof: "Read by 5,000+ investors" counters (PLANNED)

**Navigation Improvements**
- Sticky header with search functionality
- Breadcrumb navigation
- Category mega-menu on hover
- "New to investing? Start here" prominent CTA

---

### Phase 2: Interactive Tools (Weeks 9-16)

#### 2.1 Stock Screener (✅ MVP COMPLETE - November 9, 2025)
**User Story**: As an active investor, I want to filter stocks by criteria so I can find investment opportunities matching my strategy.

**✅ Implemented Features:**
- ✅ Filter by: Market cap, P/E ratio, dividend yield
- ✅ Real-time stock data via Alpha Vantage API
- ✅ Auto-refresh every 2 minutes
- ✅ Manual refresh button
- ✅ Loading states and error handling
- ✅ Last updated timestamp display
- ✅ Responsive dark theme design consistent with site
- ✅ Client-side filtering (instant results)
- ✅ 1-minute API response caching (rate limit protection)

**🔄 In Progress:**
- ⏳ Sort by: Performance (1D, 1W, 1M, YTD), volume
- ⏳ Save filters (local storage)
- ⏳ Export results (CSV)
- ⏳ Click stock → detailed page
- ⏳ Expand stock list beyond 8 default stocks

**Data Source**:
- ✅ Alpha Vantage API (API key: 35OX1N6DMLMV87Y7)
- ✅ Global Quote endpoint (real-time prices)
- ✅ Company Overview endpoint (fundamentals)

**Technical Implementation:**
- ✅ Backend: `/api/stock-data` - Multi-stock endpoint with caching
- ✅ Backend: `/api/screener` - Screener-specific endpoint
- ✅ Backend: `/api/stock/[symbol]` - Single stock quotes
- ✅ Frontend: React hooks (useState, useEffect)
- ✅ Auto-refresh: setInterval (120000ms = 2 minutes)
- ✅ Cache: Map-based in-memory cache (60s duration)
- ✅ Fallback: Sample data if API unavailable

**Alpha Vantage MCP Integration (✅ COMPLETE):**
- ✅ Remote HTTP MCP server connected
- ✅ URL: `https://mcp.alphavantage.co/mcp`
- ✅ Status: Connected and active
- ✅ Available tools: Stock quotes, company overview, options data, fundamentals
- ✅ Claude Code can now directly query Alpha Vantage via MCP

#### 2.2 Portfolio Tracker (MVP)
**User Story**: As an investor, I want to track my portfolio performance so I can see gains/losses and allocation.

**Features:**
- Add holdings (ticker, quantity, purchase price, date)
- Real-time current value (API call)
- Gain/loss calculation ($ and %)
- Pie chart: allocation by sector/stock
- Store locally (localStorage) - no login required initially

**Phase 2**: Add user accounts, sync across devices

#### 2.3 Investment Calculators
- **Compound Interest Calculator**: Initial investment, monthly contribution, years, expected return
- **Dividend Income Calculator**: Portfolio size, average yield, projection
- **Tax Impact Calculator**: Capital gains, holding period, tax bracket
- **Retirement Savings Calculator**: Age, target retirement, current savings, required monthly contribution

---

### Phase 3: Technical Infrastructure (Weeks 1-16, Parallel)

#### 3.0 API & Data Infrastructure (✅ November 9, 2025)

**Alpha Vantage API Integration:**
- ✅ API Key configured: `35OX1N6DMLMV87Y7`
- ✅ Environment variable: `ALPHA_VANTAGE_API_KEY` in `.env.local`
- ✅ Free tier: 500 requests/day, 5 requests/minute
- ✅ Endpoints used:
  - `GLOBAL_QUOTE` - Real-time stock prices
  - `OVERVIEW` - Company fundamentals (market cap, P/E, dividend)
- ✅ Response caching (60 seconds) to respect rate limits
- ✅ Error handling with fallback to sample data

**API Routes Created:**
- ✅ `/api/stock-data?symbols=AAPL,MSFT,...` - Batch stock data fetching
- ✅ `/api/screener` - Stock screener with filters
- ✅ `/api/stock/[symbol]` - Individual stock quotes

**MCP (Model Context Protocol) Integration:**
- ✅ Alpha Vantage MCP Server installed and connected
- ✅ Remote HTTP server: `https://mcp.alphavantage.co/mcp`
- ✅ Configuration: `C:\Users\Sebok Attila\.claude.json`
- ✅ Status: Active and connected
- ✅ Capabilities: Direct stock data queries from Claude Code
- ✅ Available categories:
  - Core stock APIs (quotes, historical data)
  - Options data with Greeks
  - Alpha Intelligence (news sentiment, earnings)
  - Fundamental data (financials, earnings calendar)
  - Forex, crypto, commodities
  - Economic indicators, technical indicators

#### 3.1 SEO Optimization

**On-Page SEO:**
- ✅ Meta titles (55-60 chars, keyword-optimized)
- ✅ Meta descriptions (150-160 chars, compelling CTAs)
- ✅ H1-H6 hierarchy (semantic structure)
- ✅ Image alt texts (all images)
- ✅ Internal linking (cross-reference articles) - **IMPROVED Nov 9**
- ✅ Canonical URLs
- ✅ Schema markup (Article, BreadcrumbList, Organization)
- ✅ Open Graph tags (social media sharing)
- ✅ Twitter Card tags

**Technical SEO:**
- ✅ XML sitemap (auto-generated)
- ✅ robots.txt (properly configured)
- ✅ Page speed optimization (target: <2s load time)
- ✅ Mobile responsiveness (already done)
- ✅ HTTPS (Vercel provides)
- ✅ Structured data validation (Google Rich Results Test)

**Content SEO:**
- Keyword research for each article (Ahrefs, SEMrush, or free Google Keyword Planner)
- Long-tail keyword targeting (lower competition)
- Featured snippet optimization (answer boxes, lists, tables)
- Update frequency (Google favors regularly updated content)

#### 3.2 Analytics Setup

**Google Analytics 4:**
- Pageview tracking
- Custom events: Newsletter signup, tool usage, article completion
- User flow analysis
- Traffic source attribution
- Goal completion tracking

**Google Search Console:**
- Submit sitemap
- Monitor search performance
- Identify indexing issues
- Track keyword rankings
- Click-through rate optimization

**Custom Analytics Dashboard:**
- Top performing articles
- Conversion rates (visitor → newsletter subscriber)
- Tool usage metrics
- User retention (returning visitors)
- Reading completion rates

#### 3.3 Newsletter System

**Platform**: ConvertKit (recommended) or Mailchimp

**Signup Flow:**
- Homepage prominent CTA
- Article end CTA (after reading)
- Exit-intent popup (non-intrusive, 5-second delay)
- Tools access incentive ("Get screener updates via email")

**Newsletter Content:**
- **Welcome Series** (5 emails, drip campaign):
  1. Welcome + Best beginner resources
  2. Top 5 most popular articles
  3. How to use tools (screener, calculator)
  4. Investment mistakes to avoid
  5. Exclusive: "10 Stocks We're Watching" (premium feel)

- **Weekly Newsletter**:
  - Subject: "6s Capital Weekly: [Compelling Hook]"
  - Market recap (3 paragraphs)
  - Featured article of the week
  - Stock of the Week summary
  - Quick tip (1 actionable insight)
  - Tool spotlight

**Growth Tactics:**
- Lead magnet: "Beginner's Investment Checklist PDF" (free download for email)
- Referral program: "Share with 3 friends, get premium report"
- Content upgrades: Article-specific bonuses (checklists, templates)

---

## 🗺️ Content Roadmap: Daily Visit Justification

### Week 1-2: Foundation Enhancements
- [ ] Homepage redesign (daily market snapshot placeholder)
- [ ] Category pages (group articles better)
- [ ] Related articles feature
- [ ] Newsletter signup optimization

### Week 3-4: Daily Content Hooks
- [ ] Weekly Market Recap structure (first 2 published)
- [ ] Stock of the Week structure (first 2 published)
- [ ] Daily Market Snapshot (static version initially)

### Week 5-8: Content Expansion
- [ ] Write articles #11-20 (2-3 per week)
- [ ] Create lead magnet PDF
- [ ] Build email welcome series

### Week 9-12: Interactive Tools (MVP)
- [ ] Stock Screener v1 (basic filters)
- [ ] Portfolio Tracker v1 (local storage)
- [ ] Investment calculators (2-3 key calculators)

### Week 13-16: Real-Time Data & Automation
- [ ] Daily market snapshot (auto-update from API)
- [ ] Stock data pipeline (Alpha Vantage → database)
- [ ] Newsletter automation (weekly send)
- [ ] Analytics dashboard

### Week 17-20: Monetization Prep
- [ ] Affiliate links integration (Interactive Brokers, TD Ameritrade, etc.)
- [ ] Ad placements identified (non-intrusive locations)
- [ ] Premium content strategy defined
- [ ] Traffic threshold monitoring (need 10k+ monthly for ads)

### Week 21-24: Launch & Optimize
- [ ] Official "relaunch" marketing push
- [ ] SEO content updates (refresh top 20 articles)
- [ ] A/B testing (newsletter signup, CTAs)
- [ ] User feedback collection & iteration

---

## ✅ Success Metrics

### Traffic Goals
- **Month 1-2**: 500 monthly visitors (organic search starting)
- **Month 3-4**: 2,000 monthly visitors (SEO gaining traction)
- **Month 5-6**: 5,000+ monthly visitors (ready for monetization)

### Engagement Metrics
- Average session duration: >3 minutes
- Pages per session: >2.5
- Bounce rate: <60%
- Newsletter signup rate: >3% of visitors
- Tool usage: >20% of visitors use at least one tool

### Content Metrics
- 50 published articles by Month 4
- Top 10 articles ranking on Google page 1 for target keywords
- 10+ backlinks from quality finance sites

### Monetization Metrics (Month 6+)
- Newsletter subscribers: 1,000+
- Affiliate click-through rate: >2%
- Ad revenue: $200-500/month (at 5k visitors)
- Affiliate revenue: $300-1,000/month (depends on conversions)

---

## 💰 Revenue Channel Breakdown

### Channel 1: Affiliate Marketing (Month 4-6 setup)

**Partners:**
- **Brokerage Accounts**: Interactive Brokers, TD Ameritrade, Robinhood
  - Commission: $50-200 per signup
  - Placement: "Best Brokers" article, beginner guides, tools

- **Financial Tools**: Personal Capital, Seeking Alpha Premium
  - Commission: $20-50 per signup
  - Placement: Portfolio tracker, analysis tools

- **Education**: Courses (Udemy, Coursera investing courses)
  - Commission: 20-30% of sale
  - Placement: Advanced guides, strategy articles

**Implementation:**
- Disclose affiliate relationships (transparency = trust)
- Only recommend products you'd use yourself
- Create dedicated comparison/review articles
- Track performance (which placements convert best)

### Channel 2: Display Advertising (Month 5-6, at 5k+ visitors)

**Networks:**
- Google AdSense (easiest to start)
- Mediavine (requires 50k sessions/month - long-term goal)
- Ezoic (good for growing sites, 10k+ visitors)

**Strategy:**
- Non-intrusive placements (no popups, no mid-article interruptions)
- Above-fold: One banner after introduction
- Below-fold: Sidebar, between sections, article end
- Target: 3-5 ad units per page max
- Expected: $3-8 RPM (revenue per 1,000 pageviews) initially

### Channel 3: Premium Content (Month 6+)

**Tier 1: Free** (Build audience)
- 90% of articles
- Basic tools
- Weekly newsletter

**Tier 2: Email Subscriber Benefits** (Conversion funnel)
- Exclusive weekly deep-dive
- Early access to stock analysis
- PDF guides/checklists
- Tool priority features

**Tier 3: Premium ($9-19/month)** (Future, 6-12 months)
- Full stock analysis database
- Advanced screening features
- Live portfolio sync
- Monthly premium reports
- Community access (Discord/Forum)

---

## ⚠️ Risks & Mitigation

### Risk 1: Low Traffic (SEO takes 3-6 months)
**Mitigation:**
- Start SEO immediately (can't wait)
- Supplement with social media (Twitter/X finance community, Reddit r/investing)
- Guest post on established finance blogs (backlinks + exposure)
- Paid traffic test (small budget, $100-200 to validate conversion)

### Risk 2: Content Overwhelm (50 articles is a lot)
**Mitigation:**
- Hire freelance writer (Upwork, $0.05-0.10/word for finance content)
- Use AI to draft, human to refine/fact-check
- Repurpose content (one long article → multiple shorter ones)
- Accept slower pace (30 articles by Month 6 still valuable)

### Risk 3: Tool Development Complexity
**Mitigation:**
- Start with simple MVP (basic screener, no fancy features)
- Use existing APIs (don't build from scratch)
- Consider no-code tools (Bubble, Webflow integrations)
- Focus on 1-2 tools done well vs. 5 half-finished

### Risk 4: Monetization Dependency (Affiliate links can change)
**Mitigation:**
- Diversify income streams (don't rely on one partner)
- Build email list (asset you own, not platform-dependent)
- Create evergreen affiliate content (not time-sensitive)
- Test multiple partners per category

---

## 🔧 Technical Requirements Summary

### ✅ Completed (As of November 9, 2025)
- ✅ **Alpha Vantage API Integration**
  - API key configured and working
  - 3 API endpoints created (/api/stock-data, /api/screener, /api/stock/[symbol])
  - Response caching (60s) for rate limit protection
  - Auto-refresh mechanism (2 minutes)
- ✅ **Alpha Vantage MCP Server**
  - Remote HTTP MCP server connected
  - Direct stock data queries via Claude Code
  - Comprehensive financial data access
- ✅ **Stock Screener MVP**
  - Real-time filtering by market cap, P/E, dividend yield
  - Loading states, error handling
  - Dark theme UI consistent with site design
- ✅ **Cross-Reference System**
  - 7 articles with "Continue Your Learning Journey" sections
  - Strategic internal linking for SEO and engagement
- ✅ XML sitemap (Next.js automatic)
- ✅ Meta tags for all pages (SEO)

### Immediate Next (Week 1-4)
- ⏳ Google Analytics 4 setup
- ⏳ Google Search Console setup
- ⏳ ConvertKit account + welcome series emails
- ⏳ Lead magnet PDF creation (Figma/Canva design)
- ⏳ Add cross-references to remaining 28 articles

### Short-term (Week 5-12)
- ⏳ Vercel Postgres or Supabase database (stock storage)
- ⏳ Daily cron job (update stock data beyond current 8 stocks)
- ⏳ Expand screener: sorting, save filters, export CSV
- ⏳ Portfolio tracker (localStorage MVP)
- ⏳ Calculator components (React forms + logic)

### Medium-term (Week 13-24)
- User authentication (Clerk, Auth0, or NextAuth)
- Premium content gating
- Affiliate link tracking system
- Ad network integration (Google AdSense)
- Analytics dashboard (custom, React + charts)
- Newsletter automation (ConvertKit workflows)

---

## 📊 Prioritization Matrix (MoSCoW)

### ✅ Completed (As of November 9, 2025)
- ✅ 35 articles complete (70% of target)
- ✅ **Stock Screener MVP** - Real-time data, filtering, auto-refresh
- ✅ **Alpha Vantage API Integration** - 3 endpoints, caching, error handling
- ✅ **MCP Integration** - Direct stock data access via Claude Code
- ✅ Cross-reference system (7 articles, more in progress)
- ✅ SEO meta tags and sitemap
- ✅ Dark theme UI consistency

### Must Have (Next 4-8 Weeks)
- ⏳ Google Analytics 4 setup
- ⏳ Google Search Console setup
- ⏳ Newsletter integration (ConvertKit + signup flow)
- ⏳ Homepage redesign (daily visit reason visible)
- ⏳ Lead magnet PDF
- ⏳ Add cross-references to remaining 28 articles
- ⏳ Write articles #41-50 (complete 50 article target)

### Should Have (Weeks 9-16)
- ⏳ Expand Stock Screener: sorting, save filters, CSV export
- ⏳ Portfolio Tracker MVP
- ⏳ 2-3 Investment Calculators
- ⏳ Weekly Market Recap (automated template)
- ⏳ Stock of the Week (first 5 published)
- ⏳ Database integration (Vercel Postgres or Supabase)

### Could Have (Weeks 17-24)
- User accounts
- Advanced screener features (technical indicators)
- Community features (comments, forum)
- Premium content tier
- Mobile app (PWA conversion)

### Won't Have (Not in 6-month scope)
- Live trading integration
- Robo-advisor features
- Brokerage account opening
- Financial advisor marketplace
- Advanced AI recommendations

---

## 🎯 Next Immediate Actions (Week 1)

1. **Set up analytics** (1-2 hours)
   - Create GA4 property
   - Add tracking code to Next.js layout
   - Create GSC property, submit sitemap
   - Set up conversion events (newsletter signup)

2. **Create lead magnet** (4-6 hours)
   - "Beginner Investor Checklist" PDF (10-page guide)
   - Design in Canva (professional, on-brand)
   - Host on Vercel (downloadable link)

3. **Newsletter setup** (2-3 hours)
   - ConvertKit account (free up to 1,000 subscribers)
   - Create signup form (embed on homepage, articles)
   - Write welcome email series (5 emails, schedule drip)

4. **Homepage redesign** (6-8 hours)
   - Daily market snapshot section (placeholder initially)
   - Featured article hero
   - Category cards (6-8 categories visual)
   - Newsletter signup (above fold)
   - Recent articles feed

5. **Write articles #11-13** (12-15 hours)
   - Financial Statements guide
   - ETF vs Mutual Funds
   - Retirement accounts guide

**Total Week 1 Time Estimate: 25-34 hours**

---

## 📁 Deliverables for This Document

**This strategy document saved as:**
`/6s-capital-product-strategy.md`

**Companion documents to create:**
1. `/content-calendar.md` - 50-article editorial calendar with keywords, outlines
2. `/seo-checklist.md` - Technical SEO implementation checklist
3. `/analytics-dashboard-spec.md` - Custom analytics requirements
4. `/newsletter-email-templates.md` - Welcome series + weekly templates
5. `/monetization-tracking.md` - Revenue channel KPIs and tracking

---

**Status**: ✅ Approved
**Timeline**: 6 months to revenue
**Start Date**: January 2025
**Phase 1 Focus**: Content excellence + Technical infrastructure
