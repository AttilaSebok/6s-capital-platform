import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'How to Analyze Quarterly Earnings Reports (10-Q Guide) | money365.market',
  description: 'Learn to analyze earnings reports like a pro. Understand EPS, revenue growth, forward guidance, and earnings call red flags with real examples.',
  keywords: 'earnings report, 10-Q, EPS, revenue growth, forward guidance, earnings call, quarterly results',
}

export default function HowToAnalyzeEarningsReportsArticle() {

  return (
    <ArticleLayout
      title="How to Analyze Quarterly Earnings Reports"
      author="money365.market Research Team"
      publishDate="January 2025"
      readTime="11 min"
      category="Fundamental Analysis"
      description="Learn to analyze earnings reports like a pro. Understand EPS, revenue growth, forward guidance, and earnings call red flags with real examples."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          Every quarter, publicly traded companies release earnings reports revealing financial performance. Learning to analyze these reports gives you an edge—you'll know if a stock is worth buying, holding, or selling before the market fully reacts.
        </p>

        <KeyTakeaway>
          Focus on four critical elements: Revenue growth, EPS vs expectations, forward guidance, and management commentary. These tell you if the company is thriving, struggling, or facing headwinds.
        </KeyTakeaway>
      </section>

      <section id="what-is-earnings-report">
        <h2>What Is an Earnings Report?</h2>

        <p>
          Companies report financial results every quarter via two documents:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">1. Earnings Press Release</h3>
            <p className="text-sm text-stone-700 mb-3">
              A 2-10 page summary highlighting key results, released after market close.
            </p>
            <ul className="text-sm space-y-1">
              <li>Revenue and EPS (actual vs expected)</li>
              <li>Key business metrics (user growth, same-store sales)</li>
              <li>Forward guidance (next quarter projections)</li>
              <li>Management quotes</li>
            </ul>
            <p className="text-xs text-stone-600 mt-3">
              <strong>Read this first.</strong> It's designed for investors and media.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">2. Form 10-Q (Quarterly Report)</h3>
            <p className="text-sm text-stone-700 mb-3">
              A detailed 30-80 page SEC filing with complete financial statements.
            </p>
            <ul className="text-sm space-y-1">
              <li>Full income statement, balance sheet, cash flow</li>
              <li>Management discussion & analysis (MD&A)</li>
              <li>Risk factors</li>
              <li>Legal proceedings</li>
            </ul>
            <p className="text-xs text-stone-600 mt-3">
              <strong>Dive deeper here</strong> if the press release raises questions.
            </p>
          </div>
        </div>

        <ExampleBox title="Earnings Report Timeline">
          <ul className="text-sm space-y-2">
            <li><strong>Pre-Market (7-8am ET):</strong> Some companies release before market opens</li>
            <li><strong>After Market Close (4:05pm ET):</strong> Most companies release earnings</li>
            <li><strong>1-2 hours later:</strong> Earnings conference call with Q&A</li>
            <li><strong>Next Trading Day:</strong> Stock reacts to results (up/down 5-15% common)</li>
          </ul>
        </ExampleBox>
      </section>

      <section id="key-metrics">
        <h2>Key Metrics to Analyze</h2>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="text-xl font-semibold mb-4">Earnings Report Checklist</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gold-700 mb-2">1. Revenue (Top Line)</h4>
              <ul className="text-sm ml-4 space-y-1">
                <li>Compare to analyst expectations (beat, meet, or miss?)</li>
                <li>Year-over-year (YoY) growth rate</li>
                <li>Sequential quarter growth (Q3 vs Q2)</li>
                <li>Revenue breakdown by segment (which divisions growing?)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700 mb-2">2. Earnings Per Share (EPS)</h4>
              <ul className="text-sm ml-4 space-y-1">
                <li>GAAP EPS vs Non-GAAP ("adjusted") EPS</li>
                <li>Actual vs analyst consensus</li>
                <li>YoY growth</li>
                <li>Diluted shares outstanding (buybacks reducing share count?)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700 mb-2">3. Gross Margin & Operating Margin</h4>
              <ul className="text-sm ml-4 space-y-1">
                <li>Expanding or contracting?</li>
                <li>Impact of cost pressures (materials, labor)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700 mb-2">4. Forward Guidance</h4>
              <ul className="text-sm ml-4 space-y-1">
                <li>Next quarter revenue/EPS projections</li>
                <li>Full-year guidance raised or lowered?</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700 mb-2">5. Company-Specific Metrics</h4>
              <ul className="text-sm ml-4 space-y-1">
                <li>Monthly Active Users (tech companies)</li>
                <li>Same-store sales (retail)</li>
                <li>Average Revenue Per User - ARPU (subscription businesses)</li>
                <li>Free cash flow (all companies)</li>
              </ul>
            </div>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Beat and Raise = Bullish.</strong> If a company beats EPS expectations AND raises forward guidance, the stock usually rallies. Miss and lower = bearish selloff.
        </KeyTakeaway>
      </section>

      <section id="revenue-analysis">
        <h2>Revenue Analysis Deep Dive</h2>

        <p>
          Revenue is the lifeblood of any business. Consistent growth signals a healthy, expanding company.
        </p>

        <h3>What to Look For</h3>

        <ul>
          <li>
            <strong>YoY Growth Rate:</strong> 10%+ is solid for mature companies, 20%+ for growth stocks
          </li>
          <li>
            <strong>Acceleration vs Deceleration:</strong> Is growth speeding up or slowing down?
          </li>
          <li>
            <strong>Revenue Segments:</strong> Which products/services driving growth?
          </li>
          <li>
            <strong>Geographic Breakdown:</strong> Domestic vs international performance
          </li>
        </ul>

        <ExampleBox title="Revenue Growth Red Flag: Nvidia (Hypothetical)">
          <div className="space-y-2 text-sm">
            <p><strong>Q1 2024:</strong> Revenue $26B, +262% YoY</p>
            <p><strong>Q2 2024:</strong> Revenue $30B, +122% YoY (decelerating)</p>
            <p><strong>Q3 2024:</strong> Revenue $31B, +94% YoY (further deceleration)</p>
          </div>
          <p className="text-sm text-stone-700 mt-3">
            While still growing fast, the <strong>deceleration</strong> from 262% to 94% might concern growth investors. Management would need to explain if this is temporary or a new normal.
          </p>
        </ExampleBox>

        <h3>Segment Analysis Example</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h4 className="font-semibold mb-3">Apple Q4 2024 Revenue by Segment</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="text-left py-2">Segment</th>
                <th className="text-right py-2">Revenue</th>
                <th className="text-right py-2">YoY Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-200">
                <td className="py-2">iPhone</td>
                <td className="text-right">$46.2B</td>
                <td className="text-right text-green-700">+6%</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Services</td>
                <td className="text-right">$24.2B</td>
                <td className="text-right text-green-700">+12%</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Mac</td>
                <td className="text-right">$7.7B</td>
                <td className="text-right text-red-700">-4%</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">iPad</td>
                <td className="text-right">$7.0B</td>
                <td className="text-right text-green-700">+8%</td>
              </tr>
              <tr>
                <td className="py-2">Wearables</td>
                <td className="text-right">$9.0B</td>
                <td className="text-right text-green-700">+3%</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-stone-600 mt-3">
            <strong>Insight:</strong> Services growing fastest (high-margin recurring revenue). Mac declining but small segment. Overall healthy diversification.
          </p>
        </div>
      </section>

      <section id="eps-analysis">
        <h2>EPS Analysis: GAAP vs Non-GAAP</h2>

        <p>
          Earnings Per Share (EPS) measures profitability on a per-share basis. But companies report two versions:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-stone-50 border-l-4 border-gold-600 p-6">
            <h3 className="text-lg font-semibold mb-3">GAAP EPS</h3>
            <p className="text-sm text-stone-700 mb-3">
              Follows strict accounting rules (Generally Accepted Accounting Principles). Includes all expenses: one-time charges, stock-based compensation, restructuring costs.
            </p>
            <p className="text-xs text-stone-600">
              <strong>The official number.</strong> What appears in SEC filings.
            </p>
          </div>

          <div className="bg-stone-50 border-l-4 border-olive-600 p-6">
            <h3 className="text-lg font-semibold mb-3">Non-GAAP (Adjusted) EPS</h3>
            <p className="text-sm text-stone-700 mb-3">
              Excludes "one-time" or "non-recurring" items to show "normalized" earnings. Companies argue this represents true operational performance.
            </p>
            <p className="text-xs text-stone-600">
              <strong>Use with caution.</strong> Companies can game this number.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-semibold text-yellow-900 mb-2">⚠️ The Adjusted EPS Trap</h4>
          <p className="text-sm text-stone-700">
            Some companies exclude SO MANY items that adjusted EPS becomes meaningless. If stock-based compensation is 20% of expenses and excluded every quarter, is it really "one-time"?
          </p>
          <p className="text-sm text-stone-700 mt-2">
            <strong>Rule:</strong> If the gap between GAAP and non-GAAP EPS is &gt;20%, investigate what they're excluding and why.
          </p>
        </div>

        <ExampleBox title="Real Example: Meta Q3 2024">
          <ul className="text-sm space-y-2">
            <li><strong>GAAP EPS:</strong> $4.50</li>
            <li><strong>Non-GAAP EPS:</strong> $5.16</li>
            <li><strong>Difference:</strong> $0.66 (13% higher adjusted)</li>
            <li><strong>Excluded Items:</strong> Stock-based comp, legal settlements, restructuring</li>
          </ul>
          <p className="text-sm text-stone-700 mt-3">
            Reasonable adjustments. But if this pattern continues for years, stock-based comp is a real ongoing expense, not "one-time."
          </p>
        </ExampleBox>

        <h3>EPS Beat/Miss Impact</h3>

        <p>
          Analyst consensus is the average EPS estimate from Wall Street analysts. Beating or missing expectations drives stock movement:
        </p>

        <ul>
          <li><strong>Beat by 5-10%:</strong> Stock often rallies 2-5%</li>
          <li><strong>Miss by 5-10%:</strong> Stock often drops 5-10%</li>
          <li><strong>Massive beat (20%+):</strong> Can trigger 10-20% rally</li>
          <li><strong>Massive miss:</strong> 15-30% selloff possible</li>
        </ul>
      </section>

      <section id="forward-guidance">
        <h2>Forward Guidance: The Most Important Section</h2>

        <p>
          Past results are known. <strong>Forward guidance</strong> tells you what management expects next quarter and full year. This moves stocks more than historical results.
        </p>

        <KeyTakeaway>
          <strong>Guidance &gt; Historical Results.</strong> A company can beat last quarter but lower guidance—stock will likely fall. Conversely, missing last quarter but raising guidance can result in a rally.
        </KeyTakeaway>

        <h3>Types of Guidance</h3>

        <ul>
          <li>
            <strong>Revenue Guidance:</strong> "We expect Q1 revenue of $28-30B" (range or point estimate)
          </li>
          <li>
            <strong>EPS Guidance:</strong> "We expect Q1 EPS of $1.50-1.60"
          </li>
          <li>
            <strong>Full-Year Guidance:</strong> "Raising full-year revenue outlook to $120B from $115B"
          </li>
          <li>
            <strong>Margin Guidance:</strong> "Expect operating margin to expand 200 basis points"
          </li>
        </ul>

        <ExampleBox title="Guidance Scenarios">
          <div className="space-y-4 text-sm">
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <strong>Scenario 1: Beat and Raise (Bullish)</strong>
              <br />
              Q4 EPS: $2.50 (expected $2.40) ✓
              <br />
              Q1 Guidance: $2.60-2.70 (consensus was $2.55) ✓
              <br />
              <span className="text-green-700 font-semibold">→ Stock rallies 5-10%</span>
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <strong>Scenario 2: Beat but Lower (Mixed/Bearish)</strong>
              <br />
              Q4 EPS: $2.50 (expected $2.40) ✓
              <br />
              Q1 Guidance: $2.30-2.40 (consensus was $2.55) ✗
              <br />
              <span className="text-red-700 font-semibold">→ Stock likely drops 3-8%</span>
            </div>

            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
              <strong>Scenario 3: Miss but Raise (Mixed/Bullish)</strong>
              <br />
              Q4 EPS: $2.35 (expected $2.40) ✗
              <br />
              Full-Year Guidance: Raised to $10.50 from $10.00 ✓
              <br />
              <span className="text-yellow-700 font-semibold">→ Stock reaction depends on reason for miss</span>
            </div>
          </div>
        </ExampleBox>

        <h3>Reading Between the Lines</h3>

        <p>
          Management's language matters as much as the numbers:
        </p>

        <ul>
          <li>
            <strong>Confident:</strong> "We're extremely pleased with demand trends and expect strong growth"
          </li>
          <li>
            <strong>Cautious:</strong> "We're monitoring macroeconomic headwinds closely"
          </li>
          <li>
            <strong>Defensive:</strong> "This quarter's results don't reflect the true potential of our business"
          </li>
        </ul>
      </section>

      <section id="earnings-call">
        <h2>The Earnings Call: Listening for Insights</h2>

        <p>
          1-2 hours after the press release, management hosts a conference call with prepared remarks and analyst Q&A. This is where you learn the "why" behind the numbers.
        </p>

        <h3>Earnings Call Structure</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <ol className="space-y-3">
            <li>
              <strong>1. CEO Opening Remarks (5-10 min):</strong> Big picture strategy, highlights
            </li>
            <li>
              <strong>2. CFO Financial Review (10-15 min):</strong> Detailed results, guidance, commentary
            </li>
            <li>
              <strong>3. Q&A with Analysts (30-45 min):</strong> Tough questions, probing for details
            </li>
          </ol>
        </div>

        <h3>What to Listen For</h3>

        <ul>
          <li>
            <strong>Management tone:</strong> Confident and transparent, or defensive and evasive?
          </li>
          <li>
            <strong>Repeated themes:</strong> "Headwinds," "challenges," "unprecedented demand"
          </li>
          <li>
            <strong>Analyst questions:</strong> What are Wall Street pros worried about?
          </li>
          <li>
            <strong>Non-answers:</strong> If CEO dodges a question, that's a red flag
          </li>
        </ul>

        <ExampleBox title="Red Flag Example from Earnings Call">
          <p className="text-sm">
            <strong>Analyst:</strong> "Can you provide more detail on the $500M restructuring charge and whether we should expect more?"
          </p>
          <p className="text-sm mt-2">
            <strong>CFO:</strong> "We're continuously evaluating our cost structure to optimize efficiency. We'll provide updates as appropriate."
          </p>
          <p className="text-sm text-red-700 mt-3">
            <strong>Translation:</strong> Non-answer suggests more charges coming. Sell signal.
          </p>
        </ExampleBox>

        <Blockquote author="Peter Lynch, Legendary Investor">
          Behind every stock is a company. Find out what it's doing. If you spend 13 minutes per year on economics, you've wasted 10 minutes.
        </Blockquote>
      </section>

      <section id="red-flags">
        <h2>Red Flags to Watch For</h2>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h3 className="text-lg font-semibold text-red-900 mb-4">⚠️ Warning Signs</h3>

          <ul className="space-y-3">
            <li>
              <strong>Declining revenue for 2+ consecutive quarters:</strong> Business shrinking
            </li>
            <li>
              <strong>Contracting gross margins:</strong> Losing pricing power or cost pressures
            </li>
            <li>
              <strong>Lowering guidance repeatedly:</strong> Management can't forecast accurately (bad sign)
            </li>
            <li>
              <strong>Large gap between GAAP and non-GAAP EPS (&gt;30%):</strong> Earnings manipulation
            </li>
            <li>
              <strong>Accounts receivable growing faster than revenue:</strong> Booking sales not collecting cash
            </li>
            <li>
              <strong>Negative operating cash flow:</strong> Burning cash despite profit claims
            </li>
            <li>
              <strong>CFO or CEO departure shortly after earnings:</strong> Rats fleeing ship
            </li>
            <li>
              <strong>Delaying filing 10-Q:</strong> Accounting issues likely
            </li>
            <li>
              <strong>Vague or evasive answers on call:</strong> Hiding problems
            </li>
          </ul>
        </div>

        <ExampleBox title="Case Study: Enron's Earnings Red Flags (2001)">
          <ul className="text-sm space-y-2">
            <li>✗ Revenue growing but cash flow negative</li>
            <li>✗ Massive gap between GAAP and non-GAAP earnings</li>
            <li>✗ CFO Andy Fastow refused to explain off-balance-sheet entities</li>
            <li>✗ CEO Jeff Skilling called questioner an "asshole" on earnings call</li>
          </ul>
          <p className="text-sm text-stone-700 mt-3">
            All red flags present. Company collapsed 6 months later. Forensic investors saw it coming from earnings reports.
          </p>
        </ExampleBox>
      </section>

      <section id="real-example">
        <h2>Real Example: Apple Q4 FY2024 (Oct 31, 2024)</h2>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="text-xl font-semibold mb-4">Apple Earnings Report Analysis</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gold-700 mb-2">📊 Key Results</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li><strong>Revenue:</strong> $94.9B (expected $94.5B) - <span className="text-green-700">✓ Beat</span></li>
                <li><strong>EPS:</strong> $1.64 (expected $1.60) - <span className="text-green-700">✓ Beat</span></li>
                <li><strong>YoY Growth:</strong> +6% revenue, +12% EPS</li>
                <li><strong>Gross Margin:</strong> 46.2% (up from 45.2% last year)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700 mb-2">📈 Segment Performance</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li><strong>iPhone:</strong> $46.2B (+6%) - Flagship strong</li>
                <li><strong>Services:</strong> $24.2B (+12%) - High margin, recurring</li>
                <li><strong>Mac:</strong> $7.7B (-4%) - Slight decline</li>
                <li><strong>iPad:</strong> $7.0B (+8%) - Returning to growth</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700 mb-2">💬 Forward Guidance</h4>
              <p className="text-sm ml-4">
                Management expects "low to mid single-digit revenue growth" for Q1 (holiday quarter). Services growth to continue double-digit.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700 mb-2">🎯 Earnings Call Highlights</h4>
              <ul className="text-sm space-y-1 ml-4">
                <li>CEO Tim Cook: "iPhone 16 seeing strong demand globally"</li>
                <li>Apple Intelligence (AI features) rolling out—adoption strong</li>
                <li>China revenue stable despite macro concerns</li>
                <li>$25B returned to shareholders (dividends + buybacks)</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-gold-50 border-l-4 border-gold-600">
              <p className="text-sm font-semibold">Investment Verdict:</p>
              <p className="text-sm text-stone-700 mt-1">
                <span className="text-green-700 font-semibold">BULLISH.</span> Beat on top and bottom line, expanding margins, Services growth accelerating, strong shareholder returns. Stock rose 3% next day. Classic "beat and raise" scenario.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion: Your Earnings Analysis Checklist</h2>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-3">5-Minute Earnings Report Review</h3>
          <ol className="space-y-2 text-sm">
            <li>
              <strong>1. Revenue:</strong> Beat/miss? YoY growth? Accelerating or decelerating?
            </li>
            <li>
              <strong>2. EPS:</strong> Beat/miss? GAAP vs non-GAAP gap reasonable?
            </li>
            <li>
              <strong>3. Margins:</strong> Expanding or contracting?
            </li>
            <li>
              <strong>4. Guidance:</strong> Raised, lowered, or maintained? Vs consensus?
            </li>
            <li>
              <strong>5. Management Tone:</strong> Confident or cautious on earnings call?
            </li>
          </ol>
        </div>

        <KeyTakeaway>
          <strong>Practice makes perfect.</strong> Follow 3-5 companies you own and analyze their earnings every quarter. Within a year, you'll spot red flags and opportunities faster than 90% of investors.
        </KeyTakeaway>

        <h3>Resources</h3>
        <ul>
          <li>
            <strong>Earnings Calendars:</strong> Yahoo Finance, Earnings Whispers
          </li>
          <li>
            <strong>Analyst Estimates:</strong> Seeking Alpha, MarketBeat
          </li>
          <li>
            <strong>Earnings Call Transcripts:</strong> Seeking Alpha (free), AlphaSense (premium)
          </li>
          <li>
            <strong>SEC Filings (10-Q):</strong> sec.gov/edgar
          </li>
        </ul>

        <p className="mt-6">
          Analyzing earnings reports is a learnable skill, not a talent. Start with companies you understand (Apple, Nike, Starbucks) and read their last 4 quarterly reports. You'll quickly develop pattern recognition for what constitutes strong vs weak results. This skill compounds—giving you an edge for decades of investing.
        </p>
      </section>
    </ArticleLayout>
  )
}
