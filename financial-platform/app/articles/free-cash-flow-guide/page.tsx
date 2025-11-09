import { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'

export const metadata: Metadata = {
  title: 'Free Cash Flow (FCF): The Most Important Metric You\'re Ignoring | money365.market',
  description: 'Learn why Free Cash Flow is Warren Buffett\'s favorite metric and how to use FCF to identify high-quality businesses. Includes FCF yield, growth rates, and red flags.',
  keywords: 'free cash flow, FCF, cash flow investing, FCF yield, owner earnings, Warren Buffett investing, cash flow analysis, quality businesses',
}

export default function FreeCashFlowGuideArticle() {
  return (
    <ArticleLayout
      title="Free Cash Flow: The Most Important Metric You're Ignoring"
      description="Learn why Free Cash Flow is Warren Buffett's favorite metric and how to use FCF to identify high-quality businesses with pricing power and competitive moats."
      category="Fundamental Analysis"
      publishDate="2025-11-08"
      readTime="16 min read"
      author="6s Capital Team"
    >
      <KeyTakeaway>
        <ul className="list-disc pl-6 space-y-2">
          <li>What Free Cash Flow (FCF) measures and why it's more important than earnings</li>
          <li>How to calculate FCF from the cash flow statement</li>
          <li>The difference between FCF and "owner earnings" (Buffett's preferred metric)</li>
          <li>How to use FCF yield to value stocks and find bargains</li>
          <li>Key FCF metrics: FCF margin, FCF growth rate, FCF conversion</li>
          <li>Red flags: negative FCF, declining margins, excessive CapEx</li>
          <li>Real-world examples: Apple vs Tesla FCF analysis</li>
        </ul>
      </KeyTakeaway>

      <h2>What is Free Cash Flow?</h2>

      <p>
        <strong>Free Cash Flow (FCF)</strong> is the cash a company generates after paying for capital expenditures (CapEx) needed to maintain and grow its business. It represents the <em>actual cash available</em> to:
      </p>

      <ul>
        <li>Pay dividends to shareholders</li>
        <li>Buy back shares</li>
        <li>Pay down debt</li>
        <li>Make acquisitions</li>
        <li>Invest in new growth opportunities</li>
      </ul>

      <p>
        Warren Buffett famously said: <em>"In the end, cash is king."</em> Free Cash Flow is the ultimate measure of a company's financial health because it shows <strong>real cash generation</strong>—not accounting profits that can be manipulated through depreciation schedules, revenue recognition, or other non-cash adjustments.
      </p>

      <h2>The FCF Formula</h2>

      <p>
        Free Cash Flow is calculated using data from the <strong>cash flow statement</strong>:
      </p>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-6 my-6">
        <p className="font-bold text-lg mb-2">Free Cash Flow Formula:</p>
        <p className="text-xl font-mono">
          FCF = Operating Cash Flow - Capital Expenditures
        </p>
        <p className="text-sm text-stone-600 mt-2">
          Or: <strong>FCF = Cash from Operations - CapEx</strong>
        </p>
      </div>

      <ExampleBox title="Real Example: Apple's Free Cash Flow (2023)">
        <p className="mb-3">Let's calculate Apple's FCF from their 10-K:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Operating Cash Flow:</strong> $110.5 billion</li>
          <li><strong>Capital Expenditures:</strong> -$10.9 billion</li>
          <li><strong>Free Cash Flow:</strong> $99.6 billion</li>
        </ul>
        <p className="mt-3 text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Analysis:</strong> Apple generated nearly $100 billion in FCF—cash it can use for buybacks, dividends, or acquisitions. This explains why Apple returned $90B+ to shareholders through dividends and repurchases in 2023.
        </p>
      </ExampleBox>

      <h2>Why Free Cash Flow Matters More Than Earnings</h2>

      <p>
        Accounting earnings (net income) can be misleading because they include <strong>non-cash charges</strong> and are subject to <strong>management discretion</strong>:
      </p>

      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-stone-200">
            <th className="border-2 border-stone-400 p-3 text-left">Metric</th>
            <th className="border-2 border-stone-400 p-3 text-left">Pros</th>
            <th className="border-2 border-stone-400 p-3 text-left">Cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-stone-300 p-3"><strong>Net Income (Earnings)</strong></td>
            <td className="border-2 border-stone-300 p-3">
              • Easy to find<br/>
              • Used for P/E ratios<br/>
              • GAAP standard
            </td>
            <td className="border-2 border-stone-300 p-3">
              • Includes non-cash items (depreciation, amortization)<br/>
              • Can be manipulated (revenue recognition, one-time charges)<br/>
              • Doesn't show actual cash
            </td>
          </tr>
          <tr className="bg-stone-50">
            <td className="border-2 border-stone-300 p-3"><strong>Free Cash Flow</strong></td>
            <td className="border-2 border-stone-300 p-3">
              • Shows <strong>real cash</strong> generation<br/>
              • Harder to manipulate<br/>
              • Reveals true business quality
            </td>
            <td className="border-2 border-stone-300 p-3">
              • Can be volatile year-to-year<br/>
              • High CapEx businesses show lower FCF<br/>
              • Requires cash flow statement analysis
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Warren Buffett's "Owner Earnings"</h3>

      <p>
        Warren Buffett prefers <strong>owner earnings</strong>—a modified version of FCF that adds back non-essential CapEx:
      </p>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-6 my-6">
        <p className="font-bold text-lg mb-2">Owner Earnings Formula:</p>
        <p className="text-base font-mono mb-2">
          Owner Earnings = Net Income + Depreciation/Amortization - Maintenance CapEx
        </p>
        <p className="text-sm text-stone-600">
          This focuses on <strong>maintenance CapEx</strong> (spending needed to maintain current operations) rather than total CapEx (which includes growth investments).
        </p>
      </div>

      <h2>How to Calculate Free Cash Flow (Step-by-Step)</h2>

      <p>
        To calculate FCF, you need the company's <strong>cash flow statement</strong> (found in their 10-K or 10-Q filing on SEC.gov or investor relations page):
      </p>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <h3 className="text-lg font-bold mb-3">Step-by-Step Process:</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Find Operating Cash Flow (OCF):</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>Listed as "Net Cash from Operating Activities"</li>
              <li>Usually the first section of the cash flow statement</li>
            </ul>
          </li>
          <li>
            <strong>Find Capital Expenditures (CapEx):</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>Listed as "Purchase of Property, Plant & Equipment" or "Capital Expenditures"</li>
              <li>Found in "Investing Activities" section</li>
              <li>Usually shown as a <em>negative number</em></li>
            </ul>
          </li>
          <li>
            <strong>Calculate FCF:</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>FCF = Operating Cash Flow - Capital Expenditures</li>
            </ul>
          </li>
          <li>
            <strong>Compare to Net Income:</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>If FCF &gt; Net Income → High-quality earnings (cash-backed)</li>
              <li>If FCF &lt; Net Income → Potential red flag (earnings not converting to cash)</li>
            </ul>
          </li>
        </ol>
      </div>

      <ExampleBox title="Real Example: Microsoft's FCF Calculation (FY 2023)">
        <p className="mb-3">Let's walk through Microsoft's cash flow statement:</p>
        <div className="bg-white border-2 border-stone-300 p-4 mb-3">
          <p className="font-bold mb-2">Cash Flow Statement (Simplified):</p>
          <ul className="space-y-1 font-mono text-sm">
            <li>Operating Cash Flow: $87.6 billion</li>
            <li>Capital Expenditures: -$28.1 billion</li>
            <li className="font-bold text-green-700 pt-2 border-t border-stone-300">Free Cash Flow: $59.5 billion</li>
          </ul>
        </div>
        <p className="text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Analysis:</strong> Microsoft generated $59.5B in FCF—enough to cover their $20B in dividends and $21B in share buybacks with $18B+ left over for acquisitions or debt paydown. This is a <strong>cash-generating machine</strong>.
        </p>
      </ExampleBox>

      <h2>Key Free Cash Flow Metrics</h2>

      <h3>1. Free Cash Flow Margin</h3>

      <p>
        <strong>FCF Margin</strong> shows how much of a company's revenue converts to free cash:
      </p>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-4 my-4">
        <p className="font-mono">FCF Margin = (Free Cash Flow / Revenue) × 100</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li><strong>Excellent:</strong> 25%+ (Microsoft, Visa, Mastercard)</li>
          <li><strong>Good:</strong> 15-25% (Apple, Google, Nike)</li>
          <li><strong>Average:</strong> 10-15% (Walmart, Coca-Cola)</li>
          <li><strong>Poor:</strong> &lt;10% or negative (Tesla historically, many retailers)</li>
        </ul>
      </div>

      <h3>2. Free Cash Flow Yield</h3>

      <p>
        <strong>FCF Yield</strong> is like an earnings yield, but using cash instead of accounting profits:
      </p>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-4 my-4">
        <p className="font-mono mb-3">FCF Yield = (Free Cash Flow per Share / Stock Price) × 100</p>
        <p className="text-sm">
          <strong>Interpretation:</strong>
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
          <li><strong>10%+ FCF Yield:</strong> Potentially undervalued (if sustainable)</li>
          <li><strong>5-10% FCF Yield:</strong> Fair value range</li>
          <li><strong>&lt;3% FCF Yield:</strong> Potentially overvalued or high-growth</li>
        </ul>
      </div>

      <ExampleBox title="Example: FCF Yield Comparison">
        <p className="mb-3">Let's compare two stocks with similar P/E ratios but different FCF yields:</p>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-stone-200">
              <th className="border border-stone-400 p-2">Metric</th>
              <th className="border border-stone-400 p-2">Company A</th>
              <th className="border border-stone-400 p-2">Company B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 p-2">Stock Price</td>
              <td className="border border-stone-300 p-2">$100</td>
              <td className="border border-stone-300 p-2">$100</td>
            </tr>
            <tr>
              <td className="border border-stone-300 p-2">P/E Ratio</td>
              <td className="border border-stone-300 p-2">20x</td>
              <td className="border border-stone-300 p-2">20x</td>
            </tr>
            <tr>
              <td className="border border-stone-300 p-2">Free Cash Flow per Share</td>
              <td className="border border-stone-300 p-2">$8.00</td>
              <td className="border border-stone-300 p-2">$3.00</td>
            </tr>
            <tr className="bg-green-50">
              <td className="border border-stone-300 p-2 font-bold">FCF Yield</td>
              <td className="border border-stone-300 p-2 font-bold text-green-700">8.0%</td>
              <td className="border border-stone-300 p-2 font-bold text-red-700">3.0%</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Verdict:</strong> Company A generates far more <em>actual cash</em> relative to its stock price, making it the better value despite identical P/E ratios. Company B may have high earnings but poor cash conversion.
        </p>
      </ExampleBox>

      <h3>3. FCF Growth Rate</h3>

      <p>
        High-quality compounders show <strong>consistent FCF growth</strong> over time:
      </p>

      <ul>
        <li><strong>10%+ annual FCF growth:</strong> Excellent compounders (Microsoft, Visa, Mastercard)</li>
        <li><strong>5-10% annual FCF growth:</strong> Solid businesses (Coca-Cola, Johnson & Johnson)</li>
        <li><strong>&lt;5% FCF growth:</strong> Mature/slow-growth businesses</li>
        <li><strong>Declining FCF:</strong> Red flag—investigate why (competitive pressure, rising CapEx, margin compression)</li>
      </ul>

      <h3>4. FCF Conversion Ratio</h3>

      <p>
        This shows how well a company converts <strong>operating cash flow</strong> into <strong>free cash flow</strong>:
      </p>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-4 my-4">
        <p className="font-mono mb-2">FCF Conversion = (Free Cash Flow / Operating Cash Flow) × 100</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li><strong>80%+:</strong> Excellent (low CapEx needs—software, asset-light models)</li>
          <li><strong>60-80%:</strong> Good (moderate CapEx—consumer goods, healthcare)</li>
          <li><strong>&lt;60%:</strong> Capital-intensive (manufacturing, energy, telecom)</li>
        </ul>
      </div>

      <h2>How to Use FCF to Identify High-Quality Businesses</h2>

      <h3>The 3-Part FCF Quality Test</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Positive & Growing FCF:</strong>
            <ul className="list-circle pl-6 mt-2">
              <li>Look for 5+ years of positive FCF</li>
              <li>Ideally growing at 5-10%+ annually</li>
              <li>Consistency matters more than volatility</li>
            </ul>
          </li>
          <li>
            <strong>FCF &gt; Net Income:</strong>
            <ul className="list-circle pl-6 mt-2">
              <li>If FCF consistently exceeds net income → high-quality earnings</li>
              <li>If FCF &lt; Net Income → earnings may not be converting to cash (investigate!)</li>
            </ul>
          </li>
          <li>
            <strong>High FCF Yield (Relative to Industry):</strong>
            <ul className="list-circle pl-6 mt-2">
              <li>Compare FCF yield to competitors</li>
              <li>5%+ FCF yield is attractive if sustainable</li>
            </ul>
          </li>
        </ol>
      </div>

      <h2>Red Flags: When to Avoid Low/Negative FCF</h2>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <h3 className="text-lg font-bold mb-3 text-red-900">Warning Signs:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Negative FCF for Multiple Years:</strong> Company is burning cash—unsustainable unless it's a high-growth startup with a clear path to profitability
          </li>
          <li>
            <strong>FCF &lt;&lt; Net Income:</strong> Earnings aren't converting to cash—could indicate:
            <ul className="list-circle pl-6 mt-1">
              <li>Rising accounts receivable (customers not paying)</li>
              <li>Inventory buildup (products not selling)</li>
              <li>Excessive CapEx (overinvesting in growth)</li>
            </ul>
          </li>
          <li>
            <strong>Declining FCF Margin:</strong> Margins compressing—sign of competitive pressure or operational issues
          </li>
          <li>
            <strong>CapEx Growing Faster Than Revenue:</strong> Company is investing heavily but not generating proportional growth—inefficient capital allocation
          </li>
        </ul>
      </div>

      <ExampleBox title="Red Flag Example: Tesla's FCF Challenges (2017-2019)">
        <p className="mb-3">Tesla struggled with negative FCF during its Model 3 production ramp:</p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li><strong>2017 FCF:</strong> -$3.5 billion (massive CapEx for Model 3 factory)</li>
          <li><strong>2018 FCF:</strong> -$221 million (still burning cash)</li>
          <li><strong>2019 FCF:</strong> +$1.1 billion (finally cash-positive)</li>
        </ul>
        <p className="text-sm bg-yellow-50 border-l-4 border-yellow-600 p-3">
          <strong>Lesson:</strong> Negative FCF can be acceptable for <em>growth companies</em> if there's a clear path to positive FCF. Tesla eventually turned FCF-positive as Model 3 production scaled, but it was a risky period requiring external financing.
        </p>
      </ExampleBox>

      <h2>Real-World FCF Analysis: Apple vs Amazon</h2>

      <p>
        Let's compare two tech giants with <strong>very different FCF profiles</strong>:
      </p>

      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-stone-200">
            <th className="border-2 border-stone-400 p-3 text-left">Metric (2023)</th>
            <th className="border-2 border-stone-400 p-3">Apple</th>
            <th className="border-2 border-stone-400 p-3">Amazon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-stone-300 p-3">Revenue</td>
            <td className="border-2 border-stone-300 p-3">$383B</td>
            <td className="border-2 border-stone-300 p-3">$574B</td>
          </tr>
          <tr className="bg-stone-50">
            <td className="border-2 border-stone-300 p-3">Operating Cash Flow</td>
            <td className="border-2 border-stone-300 p-3">$110.5B</td>
            <td className="border-2 border-stone-300 p-3">$84.9B</td>
          </tr>
          <tr>
            <td className="border-2 border-stone-300 p-3">Capital Expenditures</td>
            <td className="border-2 border-stone-300 p-3">-$10.9B</td>
            <td className="border-2 border-stone-300 p-3">-$48.4B</td>
          </tr>
          <tr className="bg-green-50">
            <td className="border-2 border-stone-300 p-3 font-bold">Free Cash Flow</td>
            <td className="border-2 border-stone-300 p-3 font-bold text-green-700">$99.6B</td>
            <td className="border-2 border-stone-300 p-3 font-bold text-green-700">$36.5B</td>
          </tr>
          <tr>
            <td className="border-2 border-stone-300 p-3 font-bold">FCF Margin</td>
            <td className="border-2 border-stone-300 p-3 font-bold">26.0%</td>
            <td className="border-2 border-stone-300 p-3 font-bold">6.4%</td>
          </tr>
          <tr className="bg-stone-50">
            <td className="border-2 border-stone-300 p-3 font-bold">FCF Conversion</td>
            <td className="border-2 border-stone-300 p-3 font-bold">90.1%</td>
            <td className="border-2 border-stone-300 p-3 font-bold">43.0%</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
        <p className="font-bold mb-3">Analysis:</p>
        <ul className="space-y-3">
          <li>
            <strong>Apple:</strong> Asset-light model with minimal CapEx needs → 26% FCF margin and 90% FCF conversion. This allows Apple to return massive amounts to shareholders ($90B+ in buybacks + dividends).
          </li>
          <li>
            <strong>Amazon:</strong> Capital-intensive (AWS data centers, fulfillment centers) → lower FCF margin (6.4%) and conversion (43%). Still strong FCF in absolute terms ($36B+), but requires continuous reinvestment.
          </li>
        </ul>
        <p className="mt-3 text-sm">
          <strong>Verdict:</strong> Both are high-quality businesses, but Apple's asset-light model generates superior FCF margins. Amazon's lower margins are acceptable given its growth and competitive moat in e-commerce + cloud.
        </p>
      </div>

      <h2>How to Find FCF Data</h2>

      <p>
        You can find Free Cash Flow data in several places:
      </p>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <h3 className="font-bold mb-3">Best Sources:</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Company 10-K/10-Q (SEC Filings):</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>Go to <a href="https://www.sec.gov/edgar/searchedgar/companysearch.html" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">SEC.gov</a></li>
              <li>Search company name → Latest 10-K or 10-Q</li>
              <li>Look for "Consolidated Statements of Cash Flows"</li>
            </ul>
          </li>
          <li>
            <strong>Financial Websites:</strong>
            <ul className="list-circle pl-6 mt-1">
              <li><strong>Yahoo Finance:</strong> Financials tab → Cash Flow → Look for "Free Cash Flow" row</li>
              <li><strong>Seeking Alpha:</strong> Stock page → Financials → Cash Flow</li>
              <li><strong>Morningstar:</strong> Detailed cash flow statements with 10-year history</li>
            </ul>
          </li>
          <li>
            <strong>Company Investor Relations:</strong>
            <ul className="list-circle pl-6 mt-1">
              <li>Most companies publish earnings presentations with FCF metrics highlighted</li>
            </ul>
          </li>
        </ol>
      </div>

      <h2>Common Mistakes to Avoid</h2>

      <ul className="space-y-4 my-6">
        <li>
          <strong>❌ Ignoring CapEx:</strong> Don't just look at operating cash flow—subtract CapEx to get true FCF. A company with high OCF but massive CapEx isn't cash-rich.
        </li>
        <li>
          <strong>❌ Not Distinguishing Growth vs Maintenance CapEx:</strong> Some CapEx is necessary to maintain operations (maintenance CapEx), while some funds growth (expansion CapEx). Growth CapEx can be paused if needed—maintenance CapEx cannot.
        </li>
        <li>
          <strong>❌ Comparing FCF Across Industries:</strong> Capital-intensive industries (manufacturing, energy, telecom) naturally have lower FCF margins than asset-light businesses (software, payments). Compare companies <em>within the same industry</em>.
        </li>
        <li>
          <strong>❌ Relying on One Year of FCF:</strong> FCF can be volatile year-to-year. Look at <strong>5-10 year trends</strong> to identify consistent cash generators.
        </li>
      </ul>

      <h2>Action Steps: How to Use FCF in Your Investing Process</h2>

      <KeyTakeaway>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Pull the cash flow statements for 3-5 companies you own or are considering</li>
          <li>Calculate their Free Cash Flow: OCF - CapEx</li>
          <li>Check FCF trends: Is FCF growing, stable, or declining over 5+ years?</li>
          <li>Calculate FCF Yield: (FCF per Share / Stock Price) × 100</li>
          <li>Compare FCF to Net Income: Is FCF &gt; Net Income? (Good sign!)</li>
          <li>Calculate FCF Margin: (FCF / Revenue) × 100</li>
          <li>Look for red flags: Negative FCF, declining margins, FCF &lt;&lt; Net Income</li>
        </ol>
      </KeyTakeaway>

      <h2>Final Thoughts</h2>

      <p>
        Free Cash Flow is the <strong>ultimate measure of business quality</strong>. While P/E ratios and earnings growth get more attention, savvy investors like Warren Buffett focus on FCF because:
      </p>

      <ul>
        <li><strong>Cash doesn't lie</strong>—it's harder to manipulate than accounting earnings</li>
        <li><strong>FCF funds dividends, buybacks, and growth</strong>—without FCF, companies must borrow or issue stock</li>
        <li><strong>High FCF businesses have pricing power and competitive moats</strong>—they generate cash without constant reinvestment</li>
      </ul>

      <p>
        As Buffett's mentor Benjamin Graham said: <em>"In the short run, the market is a voting machine, but in the long run, it is a weighing machine."</em> Free Cash Flow is what gets weighed—and companies that consistently generate strong FCF will compound wealth for decades.
      </p>

      <div className="mt-12 p-6 bg-stone-100 rounded-lg">
        <p className="text-sm text-stone-600">
          <strong>Next Steps:</strong> Now that you understand Free Cash Flow, learn how to combine FCF analysis with other quality metrics. Read our guides on{' '}
          <a href="/articles/return-on-equity-roe-guide" className="text-orange-600 hover:text-orange-700 underline">
            Return on Equity (ROE)
          </a>
          {' '}and{' '}
          <a href="/articles/quality-investing-competitive-moats" className="text-orange-600 hover:text-orange-700 underline">
            Competitive Moats
          </a>
          {' '}to build a complete quality investing framework.
        </p>
      </div>

      <div className="mt-8 border-t-2 border-stone-200 pt-8">
        <h3 className="text-xl font-bold mb-4 text-deep-brown">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/articles/how-to-read-financial-statements" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
            <h4 className="font-bold text-deep-brown mb-2">How to Read Financial Statements</h4>
            <p className="text-sm text-stone-600">Learn where to find FCF data on the cash flow statement and balance sheet.</p>
          </a>
          <a href="/articles/stock-valuation-methods" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
            <h4 className="font-bold text-deep-brown mb-2">Stock Valuation Methods</h4>
            <p className="text-sm text-stone-600">Use FCF to calculate intrinsic value with discounted cash flow (DCF) models.</p>
          </a>
          <a href="/articles/moving-averages-guide" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
            <h4 className="font-bold text-deep-brown mb-2">Moving Averages Explained</h4>
            <p className="text-sm text-stone-600">Find high-FCF stocks with fundamental analysis, then time entries with technical analysis.</p>
          </a>
          <a href="/articles/how-to-analyze-earnings-reports" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
            <h4 className="font-bold text-deep-brown mb-2">How to Analyze Earnings Reports</h4>
            <p className="text-sm text-stone-600">Track quarterly FCF trends and compare them to earnings quality.</p>
          </a>
        </div>
      </div>
    </ArticleLayout>
  )
}
