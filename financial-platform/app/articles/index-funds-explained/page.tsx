import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'Index Funds Explained: The Simplest Path to Wealth (2025) | money365.market',
  description: 'Discover why index funds beat 90% of actively managed funds. Learn how to invest in low-cost index funds, compare S&P 500 options, and build wealth automatically.',
  keywords: 'index funds, S&P 500, VOO, VTI, passive investing, low-cost investing, ETF vs mutual fund, index fund investing',
}

export default function IndexFundsExplainedArticle() {

  return (
    <ArticleLayout
      title="Index Funds Explained: The Simplest Path to Wealth"
      author="money365.market Research Team"
      publishDate="November 2025"
      readTime="11 min"
      category="Beginner Guides"
      description="Discover why index funds beat 90% of actively managed funds. Learn how to invest in low-cost index funds, compare S&P 500 options, and build wealth automatically."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          Warren Buffett's advice for 99% of investors: buy a low-cost S&P 500 index fund and never sell. Why? Because over 15-year periods, index funds beat 92% of actively managed funds. They're simpler, cheaper, and more effective than trying to pick winning stocks or fund managers.
        </p>

        <KeyTakeaway>
          An index fund is a basket of stocks that tracks a market index (like the S&P 500). Instead of buying Apple, Microsoft, and Amazon individually, you buy one fund that owns all 500 companies. It costs as little as 0.03% annually ($3 per $10,000 invested) and requires zero stock-picking skill.
        </KeyTakeaway>
      </section>

      <section id="what-are-index-funds">
        <h2>What is an Index Fund?</h2>

        <p>
          An <strong>index fund</strong> is an investment fund designed to replicate the performance of a specific market index. It owns the same stocks as the index, in the same proportions.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold mb-3">How Index Funds Work</h3>
          <div className="space-y-4 text-sm">
            <div>
              <strong>1. Pick an Index to Track</strong>
              <p className="text-xs text-stone-600 mt-1">
                Example: S&P 500 (500 largest US companies)
              </p>
            </div>
            <div>
              <strong>2. Buy All the Stocks in That Index</strong>
              <p className="text-xs text-stone-600 mt-1">
                The fund buys shares of Apple, Microsoft, Amazon, etc. in the exact percentages they represent in the S&P 500
              </p>
            </div>
            <div>
              <strong>3. Rebalance Automatically</strong>
              <p className="text-xs text-stone-600 mt-1">
                When index composition changes (companies added/removed), the fund adjusts holdings
              </p>
            </div>
            <div>
              <strong>4. Investors Buy Shares of the Fund</strong>
              <p className="text-xs text-stone-600 mt-1">
                You buy 1 share of the index fund = instant ownership of all 500 companies
              </p>
            </div>
          </div>
        </div>

        <ExampleBox title="Example: Vanguard S&P 500 ETF (VOO)">
          <div className="space-y-3 text-sm">
            <div>
              <strong>What it tracks:</strong> S&P 500 Index (500 largest US companies)
            </div>
            <div>
              <strong>Holdings (Top 10, ~30% of fund):</strong>
              <ul className="ml-4 mt-1 text-xs">
                <li>Apple: 7.1%</li>
                <li>Microsoft: 6.8%</li>
                <li>Amazon: 3.4%</li>
                <li>Nvidia: 3.2%</li>
                <li>Alphabet (Google): 2.8%</li>
                <li>Meta (Facebook): 2.3%</li>
                <li>Tesla: 1.9%</li>
                <li>Berkshire Hathaway: 1.7%</li>
                <li>+ 492 more companies</li>
              </ul>
            </div>
            <div className="bg-gold-50 border border-gold-200 rounded p-3">
              <strong>When you buy 1 share of VOO (~$450):</strong>
              <p className="text-xs mt-1">
                You instantly own tiny fractions of all 500 companies. Apple's stock goes up? Your fund goes up. Total diversification in one purchase.
              </p>
            </div>
          </div>
        </ExampleBox>

        <Blockquote author="John Bogle (Founder of Vanguard, Creator of First Index Fund)">
          Don't look for the needle in the haystack. Just buy the haystack! Index funds let you own the entire market at the lowest cost.
        </Blockquote>
      </section>

      <section id="why-index-funds-win">
        <h2>Why Index Funds Beat Active Funds</h2>

        <p>
          <strong>Active funds</strong> try to beat the market by picking "winning" stocks. <strong>Index funds</strong> simply match the market. Counterintuitively, matching the market beats trying to beat it.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Active Funds (Trying to Beat the Market)</h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong>How They Work:</strong>
                <p className="text-xs text-stone-600 mt-1">
                  Professional managers research stocks, pick winners, avoid losers. Frequent trading.
                </p>
              </div>
              <div>
                <strong>Costs:</strong>
                <ul className="text-xs ml-4">
                  <li>Expense ratio: 0.5-1.5% annually</li>
                  <li>Trading costs: Hidden but significant</li>
                  <li>Load fees: 3-5% upfront (some funds)</li>
                </ul>
              </div>
              <div>
                <strong>Performance:</strong>
                <ul className="text-xs ml-4">
                  <li>15-year success rate: <strong>8%</strong> beat their index</li>
                  <li>20-year success rate: <strong>5%</strong> beat their index</li>
                  <li>After fees, most underperform</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gold-50 border-2 border-gold-400 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gold-800 mb-3">Index Funds (Matching the Market)</h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong>How They Work:</strong>
                <p className="text-xs text-stone-600 mt-1">
                  Automatically buy all stocks in an index. No manager decisions. Minimal trading.
                </p>
              </div>
              <div>
                <strong>Costs:</strong>
                <ul className="text-xs ml-4">
                  <li>Expense ratio: 0.03-0.20% annually</li>
                  <li>Trading costs: Nearly zero</li>
                  <li>No load fees</li>
                </ul>
              </div>
              <div>
                <strong>Performance:</strong>
                <ul className="text-xs ml-4">
                  <li>Matches market return (S&P 500: ~10% historically)</li>
                  <li>Beats 92% of active funds over 15 years</li>
                  <li>Guaranteed average, which is above average after fees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3>The Math: Why Fees Matter Enormously</h3>

        <ExampleBox title="$10,000 Invested for 30 Years at 10% Annual Return">
          <div className="space-y-4 text-sm">
            <div className="bg-gold-50 border border-gold-200 rounded p-4">
              <strong>Index Fund (0.03% expense ratio):</strong>
              <ul className="ml-4 mt-2">
                <li>Gross return: 10%</li>
                <li>After fees: 9.97%</li>
                <li>Final value: <strong className="text-gold-700">$174,207</strong></li>
                <li>Total fees paid: $765</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <strong>Active Fund (1.0% expense ratio):</strong>
              <ul className="ml-4 mt-2">
                <li>Gross return: 10% (assuming it matches market)</li>
                <li>After fees: 9.0%</li>
                <li>Final value: <strong className="text-red-700">$132,677</strong></li>
                <li>Total fees paid: $42,295</li>
              </ul>
            </div>
            <div className="p-4 bg-stone-100 border-2 border-stone-400 rounded">
              <p className="font-bold">Difference: $41,530 lost to fees!</p>
              <p className="text-xs mt-1">
                A 1% higher fee doesn't sound like much, but over 30 years it costs you 24% of your wealth. Index funds' low fees are their superpower.
              </p>
            </div>
          </div>
        </ExampleBox>
      </section>

      <section id="types-of-index-funds">
        <h2>Types of Index Funds</h2>

        <p>
          Index funds come in two structures: <strong>Mutual Funds</strong> and <strong>ETFs</strong> (Exchange-Traded Funds). Both track indexes, but differ in how you buy/sell them.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold mb-4">Index Mutual Funds vs Index ETFs</h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300">
                <th className="text-left py-2">Feature</th>
                <th className="text-center py-2">Index Mutual Fund</th>
                <th className="text-center py-2">Index ETF</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-200">
                <td className="py-2">How You Buy</td>
                <td className="text-center text-xs">Once per day (after market close)</td>
                <td className="text-center text-xs">Anytime during market hours</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Minimum Investment</td>
                <td className="text-center text-xs">$1,000-3,000 (often waived)</td>
                <td className="text-center text-xs">Price of 1 share (~$50-500)</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Trading Fees</td>
                <td className="text-center text-xs">None (typically)</td>
                <td className="text-center text-xs">$0 at most brokers</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Tax Efficiency</td>
                <td className="text-center text-xs">Good</td>
                <td className="text-center text-xs">Better (lower capital gains)</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Auto-Invest</td>
                <td className="text-center text-xs">Easy (set $ amount)</td>
                <td className="text-center text-xs">Harder (need fractional shares)</td>
              </tr>
              <tr>
                <td className="py-2">Best For</td>
                <td className="text-center text-xs">401(k)s, automatic contributions</td>
                <td className="text-center text-xs">Brokerage accounts, flexibility</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 p-3 bg-gold-50 border-l-4 border-gold-600 text-sm">
            <strong>Bottom Line:</strong> For most investors, <strong>ETFs are better</strong> (lower fees, more tax-efficient, flexible). But mutual funds work great in 401(k)s where ETFs aren't available.
          </div>
        </div>
      </section>

      <section id="best-index-funds">
        <h2>Best Index Funds for Beginners (2025)</h2>

        <h3>S&P 500 Index Funds (Most Popular)</h3>

        <div className="space-y-6 my-6">
          <div className="bg-white border-2 border-gold-400 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2 flex items-center justify-between">
              <span>VOO - Vanguard S&P 500 ETF</span>
              <span className="text-xs bg-gold-100 text-gold-800 px-3 py-1 rounded-full">BEST OVERALL</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <strong>Tracks:</strong> S&P 500 (500 largest US companies)
                <br />
                <strong>Expense Ratio:</strong> 0.03% ($3 per $10k)
                <br />
                <strong>Price:</strong> ~$450/share
                <br />
                <strong>Dividends:</strong> ~1.5% yield, quarterly
              </div>
              <div>
                <strong>10-Year Return:</strong> ~12.5% annually
                <br />
                <strong>Assets Under Management:</strong> $500+ billion
                <br />
                <strong>Where to Buy:</strong> Any major broker
                <br />
                <strong>Minimum:</strong> 1 share (or fractional)
              </div>
            </div>
            <div className="mt-3 p-3 bg-gold-50 rounded text-xs">
              <strong>Why VOO:</strong> Lowest cost S&P 500 ETF, massive liquidity, Vanguard's investor-first philosophy. Warren Buffett recommended this exact fund in his will.
            </div>
          </div>

          <div className="bg-white border border-stone-300 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">SPY - SPDR S&P 500 ETF</h4>
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <strong>Tracks:</strong> S&P 500
                <br />
                <strong>Expense Ratio:</strong> 0.09% ($9 per $10k)
                <br />
                <strong>Price:</strong> ~$500/share
                <br />
                <strong>Dividends:</strong> ~1.5% yield, quarterly
              </div>
              <div>
                <strong>10-Year Return:</strong> ~12.5% annually
                <br />
                <strong>Assets Under Management:</strong> $400+ billion
                <br />
                <strong>Unique:</strong> Most traded ETF globally
                <br />
                <strong>Best For:</strong> Active traders (high liquidity)
              </div>
            </div>
            <div className="mt-3 p-3 bg-stone-100 rounded text-xs">
              <strong>Why SPY:</strong> First ETF ever created (1993). Slightly higher fee than VOO but unmatched liquidity if you trade frequently.
            </div>
          </div>

          <div className="bg-white border border-stone-300 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">IVV - iShares Core S&P 500 ETF</h4>
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <strong>Tracks:</strong> S&P 500
                <br />
                <strong>Expense Ratio:</strong> 0.03% ($3 per $10k)
                <br />
                <strong>Price:</strong> ~$525/share
                <br />
                <strong>Dividends:</strong> ~1.5% yield, quarterly
              </div>
              <div>
                <strong>10-Year Return:</strong> ~12.5% annually
                <br />
                <strong>Assets Under Management:</strong> $400+ billion
                <br />
                <strong>Provider:</strong> BlackRock (iShares)
                <br />
                <strong>Best For:</strong> Identical to VOO, preference choice
              </div>
            </div>
            <div className="mt-3 p-3 bg-stone-100 rounded text-xs">
              <strong>Why IVV:</strong> Tied with VOO for lowest cost. Choose based on broker preference or which you can buy fractional shares of.
            </div>
          </div>
        </div>

        <h3>Total Market Index Funds (Even More Diversified)</h3>

        <div className="space-y-6 my-6">
          <div className="bg-white border-2 border-olive-400 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2 flex items-center justify-between">
              <span>VTI - Vanguard Total Stock Market ETF</span>
              <span className="text-xs bg-olive-100 text-olive-800 px-3 py-1 rounded-full">MOST DIVERSIFIED</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <strong>Tracks:</strong> CRSP US Total Market Index
                <br />
                <strong>Holdings:</strong> 3,600+ US companies (all sizes)
                <br />
                <strong>Expense Ratio:</strong> 0.03% ($3 per $10k)
                <br />
                <strong>Price:</strong> ~$260/share
              </div>
              <div>
                <strong>10-Year Return:</strong> ~12.8% annually
                <br />
                <strong>Includes:</strong> Large, mid, small cap stocks
                <br />
                <strong>Allocation:</strong> 83% large, 14% mid, 3% small
                <br />
                <strong>Best For:</strong> Total US market exposure
              </div>
            </div>
            <div className="mt-3 p-3 bg-olive-50 rounded text-xs">
              <strong>VTI vs VOO:</strong> VTI owns 3,600 companies (S&P 500 + mid/small caps). VOO owns 500. Performance nearly identical, but VTI is technically more diversified. Both excellent choices.
            </div>
          </div>

          <div className="bg-white border border-stone-300 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">ITOT - iShares Core S&P Total US Stock Market ETF</h4>
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <strong>Tracks:</strong> S&P Total Market Index
                <br />
                <strong>Holdings:</strong> 3,500+ US companies
                <br />
                <strong>Expense Ratio:</strong> 0.03%
                <br />
                <strong>Price:</strong> ~$115/share (lower price point)
              </div>
              <div>
                <strong>10-Year Return:</strong> ~12.7% annually
                <br />
                <strong>Provider:</strong> BlackRock (iShares)
                <br />
                <strong>Best For:</strong> VTI alternative, lower share price
              </div>
            </div>
          </div>
        </div>

        <h3>Global Market Index Funds (International Diversification)</h3>

        <div className="bg-white border-2 border-blue-400 rounded-lg p-6 my-6">
          <h4 className="text-xl font-semibold mb-2">VT - Vanguard Total World Stock ETF</h4>
          <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <strong>Tracks:</strong> FTSE Global All Cap Index
              <br />
              <strong>Holdings:</strong> 9,000+ stocks globally
              <br />
              <strong>Expense Ratio:</strong> 0.07% ($7 per $10k)
              <br />
              <strong>Price:</strong> ~$105/share
            </div>
            <div>
              <strong>Allocation:</strong> 60% US, 40% International
              <br />
              <strong>Countries:</strong> 50+ countries
              <br />
              <strong>Best For:</strong> Ultimate diversification, global exposure
              <br />
              <strong>Benefit:</strong> Auto-adjusts to global market cap
            </div>
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded text-xs">
            <strong>One-Fund Portfolio:</strong> Many investors own 100% VT and nothing else. You're globally diversified across every major company on Earth in one ETF.
          </div>
        </div>

        <KeyTakeaway>
          <strong>Can't decide?</strong> Just buy VOO or VTI. Both are excellent. VOO = S&P 500 only. VTI = total US market. Performance is nearly identical. Pick one and stick with it.
        </KeyTakeaway>
      </section>

      <section id="index-fund-mutual-funds">
        <h2>Best Index Mutual Funds (For 401(k)s)</h2>

        <p>
          If your employer 401(k) doesn't offer ETFs, look for these low-cost index mutual funds:
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <div className="space-y-4 text-sm">
            <div>
              <strong>VFIAX - Vanguard 500 Index Fund Admiral Shares</strong>
              <ul className="ml-4 mt-1 text-xs">
                <li>Tracks: S&P 500</li>
                <li>Expense ratio: 0.04%</li>
                <li>Minimum: $3,000 (often waived in 401(k)s)</li>
              </ul>
            </div>
            <div>
              <strong>FXAIX - Fidelity 500 Index Fund</strong>
              <ul className="ml-4 mt-1 text-xs">
                <li>Tracks: S&P 500</li>
                <li>Expense ratio: 0.015% (lowest available)</li>
                <li>Minimum: $0</li>
              </ul>
            </div>
            <div>
              <strong>VTSAX - Vanguard Total Stock Market Index Admiral</strong>
              <ul className="ml-4 mt-1 text-xs">
                <li>Tracks: Total US market (3,600+ stocks)</li>
                <li>Expense ratio: 0.04%</li>
                <li>Minimum: $3,000 (waived in 401(k)s)</li>
              </ul>
            </div>
            <div>
              <strong>FSKAX - Fidelity Total Market Index Fund</strong>
              <ul className="ml-4 mt-1 text-xs">
                <li>Tracks: Total US market</li>
                <li>Expense ratio: 0.015%</li>
                <li>Minimum: $0</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-invest">
        <h2>How to Invest in Index Funds</h2>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-4">Step-by-Step: Buying Your First Index Fund</h3>
          <div className="space-y-4 text-sm">
            <div>
              <strong>Step 1: Open a Brokerage Account</strong>
              <p className="text-xs text-stone-600 mt-1">
                Fidelity, Schwab, or Vanguard (all offer $0 commissions, fractional shares)
              </p>
            </div>
            <div>
              <strong>Step 2: Fund Your Account</strong>
              <p className="text-xs text-stone-600 mt-1">
                Transfer money from your bank ($100-1,000+ to start)
              </p>
            </div>
            <div>
              <strong>Step 3: Choose Your Index Fund</strong>
              <p className="text-xs text-stone-600 mt-1">
                Beginner recommendation: VOO (S&P 500) or VTI (Total Market)
              </p>
            </div>
            <div>
              <strong>Step 4: Place Your Order</strong>
              <ul className="ml-4 mt-1 text-xs">
                <li>Search for ticker: "VOO"</li>
                <li>Click "Buy"</li>
                <li>Enter dollar amount (e.g., $500) or number of shares</li>
                <li>Order type: "Market order" (simplest)</li>
                <li>Confirm and submit</li>
              </ul>
            </div>
            <div>
              <strong>Step 5: Set Up Automatic Contributions</strong>
              <p className="text-xs text-stone-600 mt-1">
                Invest $100-500/month automatically. This is the key to wealth building.
              </p>
            </div>
          </div>
        </div>

        <ExampleBox title="Sample Portfolio Allocation with Index Funds">
          <div className="space-y-4 text-sm">
            <div>
              <strong>Age 25 (Aggressive Growth):</strong>
              <ul className="ml-4 mt-1">
                <li>100% VTI or VOO</li>
                <li>Rationale: 40 years to retirement, maximize growth</li>
              </ul>
            </div>
            <div>
              <strong>Age 40 (Balanced Growth):</strong>
              <ul className="ml-4 mt-1">
                <li>70% VTI (US stocks)</li>
                <li>30% BND (US bonds)</li>
                <li>Rationale: Still growth-focused but adding stability</li>
              </ul>
            </div>
            <div>
              <strong>Age 60 (Pre-Retirement):</strong>
              <ul className="ml-4 mt-1">
                <li>40% VTI (US stocks)</li>
                <li>20% VXUS (International stocks)</li>
                <li>40% BND (US bonds)</li>
                <li>Rationale: Balanced, diversified globally, reduced volatility</li>
              </ul>
            </div>
          </div>
        </ExampleBox>
      </section>

      <section id="common-questions">
        <h2>Common Questions</h2>

        <div className="space-y-6 my-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Should I buy S&P 500 (VOO) or Total Market (VTI)?</h3>
            <p className="text-sm text-stone-700">
              <strong>Performance is nearly identical.</strong> Over the past 20 years, they've differed by less than 0.5% annually. VOO = 500 companies. VTI = 3,600 companies (includes mid/small caps). Both are excellent. Pick one and don't overthink it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Can I just invest in one index fund forever?</h3>
            <p className="text-sm text-stone-700">
              <strong>Yes!</strong> 100% VTI or 100% VT (world index) is a valid lifetime strategy. Warren Buffett's will instructs his trustee to invest in a single S&P 500 index fund. Simplicity works.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What about sector-specific index funds (tech, healthcare)?</h3>
            <p className="text-sm text-stone-700">
              <strong>Avoid for most investors.</strong> Sector funds concentrate risk. The S&P 500 already includes tech (Apple, Microsoft, Nvidia). If tech does well, VOO does well. Don't overthink it with sector bets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Should I buy when the market is down or up?</h3>
            <p className="text-sm text-stone-700">
              <strong>Always.</strong> Time in the market beats timing the market. Dollar-cost averaging (investing the same amount monthly) removes emotion. Buy when it's up, buy when it's down. Consistency wins.
            </p>
          </div>
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion: The Only Investment Guide You Need</h2>

        <p>
          Index fund investing isn't sexy. It won't make you rich overnight. But over 20-40 years, it's the most reliable path to wealth for 99% of investors. No stock picking. No fund manager fees. Just consistent contributions to a low-cost index fund.
        </p>

        <Blockquote author="Warren Buffett (2013 Shareholder Letter)">
          Both large and small investors should stick with low-cost index funds. My advice to the trustee of my estate: Put 90% in a very low-cost S&P 500 index fund and 10% in short-term government bonds.
        </Blockquote>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Your Index Fund Action Plan</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Week 1:</strong> Open brokerage account (Fidelity, Schwab, Vanguard)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Week 2:</strong> Transfer $500-1,000 to account (or whatever you can afford)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Week 3:</strong> Buy VOO, VTI, or VT (pick one, stick with it)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Week 4:</strong> Set up automatic $100-500/month contributions</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Year 1:</strong> Resist checking daily. Check quarterly at most.</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Year 10:</strong> Rebalance if allocation drifted significantly</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Year 30:</strong> Retire wealthy, thank your past self</span>
            </label>
          </div>
        </div>

        <ExampleBox title="Final Motivation: The $500/Month Index Fund Challenge">
          <p className="text-sm mb-3">
            If you invest $500/month in an S&P 500 index fund (VOO) starting at age 25:
          </p>
          <ul className="text-sm space-y-1">
            <li>By age 35: $91,473</li>
            <li>By age 45: $294,910</li>
            <li>By age 55: $745,514</li>
            <li>By age 65: <strong className="text-gold-700">$1,745,503</strong></li>
          </ul>
          <p className="text-sm mt-3 text-stone-700">
            You contributed $240,000 total. The other $1.5 million? That's compounding at work. Index funds + time + consistency = wealth.
          </p>
        </ExampleBox>

        <KeyTakeaway>
          <strong>Next steps:</strong> Understand how to allocate your portfolio with <em>"Asset Allocation 101"</em>, or learn when to rebalance with <em>"How to Rebalance Your Portfolio"</em>. But first—open that account and buy your first index fund this week.
        </KeyTakeaway>
      </section>
    </ArticleLayout>
  )
}
