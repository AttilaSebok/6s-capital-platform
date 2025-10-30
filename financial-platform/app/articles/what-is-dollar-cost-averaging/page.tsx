import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export default function DollarCostAveragingArticle() {
  return (
    <ArticleLayout
      title="What is Dollar-Cost Averaging? (With Real Examples)"
      description="Learn how dollar-cost averaging removes emotion from investing and why consistent investing beats trying to time the market."
      category="Beginner Guides"
      readTime="9 min read"
      publishDate="January 19, 2025"
      author="6s Capital Research Team"
    >
      <p>
        You have $12,000 to invest. Should you invest it all today, or spread it out over 12 months at $1,000 per month?
      </p>

      <p>
        This question has paralyzed countless new investors. They're afraid of investing everything right before a crash. So they wait. And wait. And miss years of gains.
      </p>

      <p>
        Dollar-cost averaging (DCA) solves this problem. It's one of the simplest, most powerful investing strategies ever created. And the best part? It works automatically, removing emotion and guesswork from your investing.
      </p>

      <KeyTakeaway variant="info">
        <strong>What You'll Learn:</strong>
        <ul>
          <li>What dollar-cost averaging is and how it works</li>
          <li>Real examples showing DCA in action during bull and bear markets</li>
          <li>Why DCA beats trying to time the market</li>
          <li>When to use DCA vs. lump-sum investing</li>
          <li>How to set up automatic DCA today</li>
        </ul>
      </KeyTakeaway>

      <h2>What is Dollar-Cost Averaging?</h2>

      <p>
        Dollar-cost averaging is the practice of investing a fixed dollar amount at regular intervals, regardless of what the market is doing.
      </p>

      <p>
        Instead of investing $12,000 all at once, you invest $1,000 per month for 12 months. Or $500 every two weeks. Or $250 per week. The frequency and amount don't matter - what matters is the consistency.
      </p>

      <ExampleBox title="Dollar-Cost Averaging in Action">
        <p className="mb-4"><strong>Scenario: You invest $500 per month in an S&P 500 index fund</strong></p>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Month</th>
              <th className="text-right py-2">Investment</th>
              <th className="text-right py-2">Price/Share</th>
              <th className="text-right py-2">Shares Bought</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Jan</td>
              <td className="text-right">$500</td>
              <td className="text-right">$100</td>
              <td className="text-right">5.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Feb</td>
              <td className="text-right">$500</td>
              <td className="text-right">$90</td>
              <td className="text-right">5.56</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Mar</td>
              <td className="text-right">$500</td>
              <td className="text-right">$80</td>
              <td className="text-right">6.25</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Apr</td>
              <td className="text-right">$500</td>
              <td className="text-right">$85</td>
              <td className="text-right">5.88</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">May</td>
              <td className="text-right">$500</td>
              <td className="text-right">$95</td>
              <td className="text-right">5.26</td>
            </tr>
            <tr className="border-b font-semibold">
              <td className="py-2">Total</td>
              <td className="text-right">$2,500</td>
              <td className="text-right">Avg: $90</td>
              <td className="text-right">27.95 shares</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4">
          <strong>Key Insight:</strong> When prices drop (Feb, Mar), you automatically buy MORE shares with your fixed $500. When prices rise (May), you buy FEWER shares. This averages out your cost per share to $89.42, which is lower than the simple average price of $90.
        </p>

        <p className="mt-4">
          If price returns to $100 in June, your $2,500 investment is now worth $2,795 (27.95 shares × $100 = $2,795), a profit of $295 or 11.8%.
        </p>
      </ExampleBox>

      <h2>How DCA Protects You From Bad Timing</h2>

      <p>
        The biggest benefit of DCA isn't that it maximizes returns (it usually doesn't). It's that it protects you from the worst-case scenario: investing everything right before a crash.
      </p>

      <ExampleBox title="Real Example: 2008 Financial Crisis">
        <p className="mb-4"><strong>Investor A (Lump Sum): Invested $120,000 on January 1, 2008</strong></p>
        <ul>
          <li>S&P 500 at time of investment: 1,468</li>
          <li>S&P 500 at market bottom (March 2009): 677 (-54%)</li>
          <li>Portfolio value at bottom: $55,200 (loss of $64,800)</li>
          <li>Psychological damage: Extreme. Many sold at the bottom.</li>
        </ul>

        <p className="mt-4 mb-4"><strong>Investor B (DCA): Invested $10,000/month for 12 months starting January 2008</strong></p>
        <ul>
          <li>Average purchase price across 12 months: ~1,100 (vs. 1,468 lump sum)</li>
          <li>By March 2009, had deployed full $120,000 at much lower average price</li>
          <li>Portfolio value at bottom: $74,000 (loss of $46,000)</li>
          <li>Psychological advantage: Massive. Felt like "getting a deal" as markets fell.</li>
        </ul>

        <p className="mt-4 font-semibold">
          DCA investor lost 30% less money at the bottom ($46k vs. $65k loss).
        </p>

        <p className="mt-2 font-semibold">
          By 2015, both recovered and had similar total values. But Investor B was far more likely to stay the course and not panic sell.
        </p>
      </ExampleBox>

      <KeyTakeaway variant="success">
        <strong>The Psychological Edge:</strong> DCA's real power isn't mathematical - it's psychological. When markets fall after you've DCA'd in, you don't feel like you made a mistake. You feel like you're getting a discount. This keeps you invested when lump-sum investors are panic selling.
      </KeyTakeaway>

      <h2>DCA vs. Lump Sum: What the Research Says</h2>

      <p>
        Here's an uncomfortable truth: lump-sum investing beats DCA about 2/3 of the time.
      </p>

      <p>
        Vanguard studied this extensively. Over rolling 10-year periods since 1926, investing all at once beat DCA in roughly 68% of cases. The average difference? About 2.3% better performance for lump sum.
      </p>

      <ExampleBox title="Why Lump Sum Usually Wins">
        <p className="mb-4">
          Markets go up more often than they go down. Over any 12-month period, stocks have positive returns about 75% of the time.
        </p>

        <p className="mb-4">
          When you DCA, you're keeping money in cash (earning 0-5%) instead of in the market (averaging 10%). Over 12 months, this "cash drag" adds up.
        </p>

        <p className="font-semibold">
          Example: You have $120,000 to invest in January. Markets rise 15% that year.
        </p>

        <ul className="mt-2">
          <li><strong>Lump sum:</strong> $120,000 × 1.15 = $138,000 (gain of $18,000)</li>
          <li><strong>DCA over 12 months:</strong> Average investment time is 6 months. Effective gain ~$15,000.</li>
          <li><strong>Difference:</strong> Lump sum wins by $3,000.</li>
        </ul>
      </ExampleBox>

      <p>
        So why use DCA if it underperforms? Two reasons:
      </p>

      <ul>
        <li><strong>You don't have a lump sum to invest.</strong> Most people invest from their paycheck. That's automatic DCA.</li>
        <li><strong>Risk reduction matters.</strong> The 32% of the time DCA wins, it wins BIG (market crashes). Most investors would rather give up 2% average return to avoid 40% crash risk.</li>
      </ul>

      <h2>When to Use DCA vs. Lump Sum</h2>

      <ExampleBox title="Use Lump Sum If:">
        <ul>
          <li>You have high risk tolerance and can stomach 40-50% drawdowns</li>
          <li>You're young (30+ years until retirement)</li>
          <li>You can commit to not checking your portfolio during crashes</li>
          <li>The amount is relatively small (&lt;10% of your net worth)</li>
          <li>You're contributing to tax-advantaged accounts where short-term loss doesn't matter</li>
        </ul>

        <p className="mt-4 font-semibold">
          Example: Age 25, inherits $25,000, has $100k net worth, plans to retire at 65. → Invest it all today. You have 40 years to recover from any crashes.
        </p>
      </ExampleBox>

      <ExampleBox title="Use DCA If:">
        <ul>
          <li>You're investing a life-changing amount of money</li>
          <li>You'll lose sleep if it drops 30% tomorrow</li>
          <li>You're within 10 years of needing the money</li>
          <li>Markets are at all-time highs and you're nervous</li>
          <li>The amount is &gt;20% of your net worth</li>
          <li>You're a new investor and need to build confidence</li>
        </ul>

        <p className="mt-4 font-semibold">
          Example: Age 55, sells business for $500,000, needs money for retirement in 8 years. → DCA over 6-12 months. Can't afford to invest it all before a crash.
        </p>
      </ExampleBox>

      <h2>Different DCA Strategies</h2>

      <h3>Strategy 1: Automatic Paycheck DCA (Most Common)</h3>
      <p>
        This is what 99% of retirement savers do automatically. Every paycheck, your 401(k) contribution buys shares. You're DCA'ing without even thinking about it.
      </p>

      <ExampleBox title="Real Example: 30-Year Career of DCA">
        <ul>
          <li>Starting salary: $50,000 (contributes 10% = $5,000/year)</li>
          <li>Ending salary: $120,000 (contributes 10% = $12,000/year)</li>
          <li>Average contribution: ~$7,500/year over 30 years</li>
          <li>Total contributed: $225,000</li>
          <li>Ending 401(k) balance (at 10% annual return): $1,360,000</li>
        </ul>

        <p className="mt-4 font-semibold">
          This person invested through the 2000 dot-com crash, 2008 financial crisis, 2020 COVID crash, and every other downturn. DCA meant they bought more shares when prices were low. Result: millionaire status.
        </p>
      </ExampleBox>

      <h3>Strategy 2: Systematic Lump-Sum DCA</h3>
      <p>
        You receive a windfall ($50k bonus, inheritance, home sale). Instead of investing it all today, you DCA over 6-12 months.
      </p>

      <ExampleBox title="Common Schedules">
        <ul>
          <li><strong>Conservative:</strong> 12 monthly installments (1 year DCA period)</li>
          <li><strong>Moderate:</strong> 6 monthly installments (6 month DCA period)</li>
          <li><strong>Aggressive:</strong> 3 monthly installments (3 month DCA period)</li>
        </ul>

        <p className="mt-4">
          Research shows 3-6 months is optimal. Longer periods sacrifice too much potential return. Shorter periods don't reduce risk enough.
        </p>
      </ExampleBox>

      <h3>Strategy 3: Value-Averaging (Advanced DCA)</h3>
      <p>
        Instead of investing a fixed dollar amount, you invest whatever it takes to hit a target portfolio value.
      </p>

      <ExampleBox title="Value Averaging Example">
        <p className="mb-2">Goal: Grow portfolio by $1,000/month</p>

        <ul>
          <li><strong>Month 1:</strong> Target $1,000. Portfolio $0. Invest $1,000.</li>
          <li><strong>Month 2:</strong> Target $2,000. Portfolio $1,100 (market up). Invest $900.</li>
          <li><strong>Month 3:</strong> Target $3,000. Portfolio $1,800 (market down). Invest $1,200.</li>
        </ul>

        <p className="mt-4">
          <strong>Benefit:</strong> You automatically buy more when prices fall, less when prices rise - even more than regular DCA.
        </p>

        <p className="mt-2">
          <strong>Downside:</strong> More complex. Requires monthly rebalancing. Only for advanced investors.
        </p>
      </ExampleBox>

      <h2>Common DCA Mistakes</h2>

      <h3>Mistake #1: Stopping During Market Crashes</h3>
      <p>
        "The market is down 30%, I'll pause my contributions until it recovers."
      </p>

      <p>
        This is backwards. Market crashes are EXACTLY when DCA works best. You're buying at fire-sale prices. Stopping now is like refusing to shop during a 50%-off sale.
      </p>

      <KeyTakeaway variant="alert">
        <strong>Never Stop DCA During Crashes:</strong> The investors who kept contributing in 2008-2009 made fortunes. The ones who stopped missed the best buying opportunity in decades. Your future self will thank you for staying disciplined.
      </KeyTakeaway>

      <h3>Mistake #2: DCA'ing Into Bad Investments</h3>
      <p>
        DCA doesn't fix a bad investment choice. If you're DCA'ing into a declining industry, overvalued stock, or scam investment, you're just throwing good money after bad.
      </p>

      <p>
        <strong>Fix:</strong> DCA only into broad, diversified index funds or quality individual stocks. Never DCA into speculative investments.
      </p>

      <h3>Mistake #3: DCA'ing Too Long</h3>
      <p>
        Some investors take "DCA over time" to extremes. They'll DCA a $100k windfall over 3-5 years "to be safe."
      </p>

      <p>
        This sacrifices way too much return. Keep DCA period to 3-12 months max. Beyond that, you're just procrastinating.
      </p>

      <h3>Mistake #4: Forgetting About Fees</h3>
      <p>
        If you're DCA'ing with a broker that charges trading fees ($5-10 per trade), those fees eat into returns. Buy commission-free ETFs or use a no-fee broker.
      </p>

      <h2>Real-World DCA Performance: Historical Examples</h2>

      <ExampleBox title="DCA Through the Lost Decade (2000-2010)">
        <p className="mb-4">
          The 2000s were terrible for investors. S&P 500 returned -0.9% total (actually lost money over the decade). But DCA investors did just fine:
        </p>

        <ul>
          <li><strong>Lump sum $120,000 in Jan 2000:</strong> Ended with ~$119,000 (roughly break-even)</li>
          <li><strong>DCA $1,000/month 2000-2010:</strong> Ended with ~$172,000</li>
          <li><strong>Total invested:</strong> $120,000 in both cases</li>
        </ul>

        <p className="mt-4 font-semibold">
          Why DCA won: The crashes in 2001-2002 and 2008-2009 let DCA investors buy at severely depressed prices. By 2010, those shares had recovered while lump-sum investor held expensive year-2000 shares.
        </p>

        <p className="mt-2">
          This is the RARE scenario where DCA significantly beats lump sum. It happens during sideways/declining markets.
        </p>
      </ExampleBox>

      <ExampleBox title="DCA Through the 2010s Bull Market">
        <p className="mb-4">
          The 2010s were the opposite - stocks went straight up. S&P 500 returned 13.6% annualized.
        </p>

        <ul>
          <li><strong>Lump sum $120,000 in Jan 2010:</strong> Ended with ~$437,000</li>
          <li><strong>DCA $1,000/month 2010-2020:</strong> Ended with ~$227,000</li>
          <li><strong>Total invested:</strong> $120,000 in both cases</li>
        </ul>

        <p className="mt-4 font-semibold">
          Lump sum crushed DCA. Why? Markets went up the entire decade. Every month you held cash instead of being fully invested, you lost ground.
        </p>

        <p className="mt-2">
          This is the COMMON scenario. Markets trend up 75% of the time.
        </p>
      </ExampleBox>

      <h2>How to Set Up Automatic DCA Today</h2>

      <ExampleBox title="Step-by-Step DCA Setup">
        <ol>
          <li>
            <strong>Choose your investment account</strong>
            <p className="text-sm mt-1">401(k), IRA, or taxable brokerage account</p>
          </li>
          <li>
            <strong>Select your investment</strong>
            <p className="text-sm mt-1">Total stock market index fund is best for most people</p>
          </li>
          <li>
            <strong>Decide your contribution amount</strong>
            <p className="text-sm mt-1">Common: 10-15% of gross income, or $500-1,000/month</p>
          </li>
          <li>
            <strong>Choose your frequency</strong>
            <p className="text-sm mt-1">Monthly, bi-weekly, or weekly - match your paycheck schedule</p>
          </li>
          <li>
            <strong>Set up automatic transfer</strong>
            <p className="text-sm mt-1">Link checking account → investment account (automated)</p>
          </li>
          <li>
            <strong>Enable auto-invest</strong>
            <p className="text-sm mt-1">Most brokers can auto-purchase your chosen fund when money arrives</p>
          </li>
          <li>
            <strong>Forget about it</strong>
            <p className="text-sm mt-1">Check quarterly or annually. Don't watch daily. Let it run on autopilot.</p>
          </li>
        </ol>

        <p className="mt-4 font-semibold">
          Once set up, this runs forever with zero additional effort. That's the power of automation.
        </p>
      </ExampleBox>

      <h2>DCA and Retirement Accounts: The Perfect Match</h2>

      <p>
        DCA works especially well in 401(k)s and IRAs because:
      </p>

      <ul>
        <li><strong>Forced discipline:</strong> Money comes out of paycheck before you can spend it</li>
        <li><strong>Employer match:</strong> Free money that magnifies DCA benefits (instant 50-100% return on match)</li>
        <li><strong>Tax advantages:</strong> Contributions reduce current taxes (traditional) or grow tax-free (Roth)</li>
        <li><strong>No trading fees:</strong> Most 401(k) platforms don't charge for automatic purchases</li>
        <li><strong>Out of sight, out of mind:</strong> You don't see the balance daily, reducing emotional reactions</li>
      </ul>

      <Blockquote author="Warren Buffett">
        "Consistently buy an S&P 500 low-cost index fund. Keep buying it through thick and thin, and especially through thin."
      </Blockquote>

      <h2>Final Thoughts: DCA is How Most Millionaires Are Made</h2>

      <p>
        Here's a secret: most investment millionaires didn't get rich by timing the market perfectly or picking winning stocks. They got rich by DCA'ing into index funds for 30-40 years.
      </p>

      <KeyTakeaway variant="success">
        <strong>The DCA Millionaire Formula:</strong>
        <ul>
          <li>Start early (age 25-30)</li>
          <li>Invest 10-15% of every paycheck</li>
          <li>Put it in low-cost index funds</li>
          <li>Never stop, even during crashes</li>
          <li>Wait 30-40 years</li>
        </ul>
        <p className="mt-4 font-semibold">
          That's it. No genius required. No market timing. No stock picking. Just systematic investing.
        </p>
      </KeyTakeaway>

      <p>
        Dollar-cost averaging removes the two biggest obstacles to investing success: fear and procrastination. You never have to worry about "Is now a good time?" because you're always investing. You never have to overcome fear because it's automatic.
      </p>

      <p>
        Set up your DCA system today. Your retired self will thank you.
      </p>

      <ExampleBox title="Action Plan: Start DCA This Month">
        <ol>
          <li>Log into your 401(k) and increase contribution by 1% (or start contributing if you haven't)</li>
          <li>Open an IRA if you don't have one (Vanguard, Fidelity, or Schwab)</li>
          <li>Set up automatic $500/month transfer from checking → IRA</li>
          <li>Buy total stock market index fund automatically each month</li>
          <li>Set a calendar reminder for January 1st each year to increase contribution by 1%</li>
        </ol>

        <p className="mt-6 font-semibold">
          In 30 years, you'll have built serious wealth. All from a 30-minute setup today.
        </p>
      </ExampleBox>
    </ArticleLayout>
  )
}
