import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'Tax-Loss Harvesting: Save Thousands in Taxes | money365.market',
  description: 'Complete guide to tax-loss harvesting. Learn how to offset gains, deduct $3,000 annually, avoid wash-sale rule, and automate the process to save thousands.',
  keywords: 'tax-loss harvesting, wash sale rule, capital gains tax, tax deduction, investment taxes, tax strategy',
}

export default function TaxLossHarvestingArticle() {

  return (
    <ArticleLayout
      title="Tax-Loss Harvesting: Save Thousands in Taxes"
      author="money365.market Research Team"
      publishDate="January 2025"
      readTime="11 min"
      category="Tax & Retirement"
      description="Complete guide to tax-loss harvesting. Learn how to offset gains, deduct $3,000 annually, avoid wash-sale rule, and automate the process to save thousands."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          Tax-loss harvesting is one of the most powerful yet underutilized tax strategies available to investors. By strategically selling losing investments to offset gains, you can save thousands in taxes annually while maintaining your investment strategy.
        </p>

        <KeyTakeaway>
          Tax-loss harvesting lets you sell investments at a loss to offset capital gains and deduct up to $3,000 annually against ordinary income. Losses you don't use this year carry forward indefinitely. A $100,000 portfolio harvesting $5,000 in losses saves $1,000-2,000 in taxes annually—compounded over decades, this adds hundreds of thousands to your wealth.
        </KeyTakeaway>
      </section>

      <section id="how-it-works">
        <h2>How Tax-Loss Harvesting Works</h2>

        <p>
          Tax-loss harvesting is the practice of selling investments that have declined in value to realize a capital loss, which can offset capital gains and reduce your tax bill.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">The Basic Concept</h3>

          <div className="space-y-4 text-sm">
            <div>
              <strong>Step 1: Identify Losses</strong>
              <br />
              <span className="text-xs text-stone-600">Find investments trading below your purchase price (unrealized losses)</span>
            </div>

            <div>
              <strong>Step 2: Sell to Realize Loss</strong>
              <br />
              <span className="text-xs text-stone-600">Sell the losing position, converting unrealized loss to realized loss for tax purposes</span>
            </div>

            <div>
              <strong>Step 3: Offset Gains</strong>
              <br />
              <span className="text-xs text-stone-600">Use realized losses to offset capital gains from other investments (or deduct $3,000 against ordinary income)</span>
            </div>

            <div>
              <strong>Step 4: Reinvest (Avoid Wash Sale)</strong>
              <br />
              <span className="text-xs text-stone-600">Immediately buy a similar (but not identical) investment to maintain market exposure</span>
            </div>
          </div>
        </div>

        <ExampleBox title="Simple Tax-Loss Harvesting Example">
          <div className="space-y-3 text-sm">
            <p><strong>Your 2024 investment activity:</strong></p>

            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <strong>Winner: Apple Stock</strong>
              <ul className="text-xs ml-4 mt-1">
                <li>Bought: $10,000 in January</li>
                <li>Sold: $15,000 in November</li>
                <li><strong>Capital Gain: $5,000</strong></li>
              </ul>
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <strong>Loser: Tesla Stock</strong>
              <ul className="text-xs ml-4 mt-1">
                <li>Bought: $8,000 in March</li>
                <li>Current value: $5,000</li>
                <li><strong>Unrealized Loss: $3,000</strong></li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-stone-100 rounded">
              <p className="text-sm font-semibold mb-2">Without Tax-Loss Harvesting:</p>
              <ul className="text-xs space-y-1">
                <li>Capital gains: $5,000</li>
                <li>Tax owed (20% long-term rate): <strong>$1,000</strong></li>
              </ul>

              <p className="text-sm font-semibold mt-4 mb-2">With Tax-Loss Harvesting:</p>
              <ul className="text-xs space-y-1">
                <li>Sell Tesla, realize $3,000 loss</li>
                <li>Immediately buy similar EV stock or auto sector ETF (avoid wash sale)</li>
                <li>Net capital gain: $5,000 - $3,000 = $2,000</li>
                <li>Tax owed (20% rate): <strong>$400</strong></li>
                <li><strong>Tax savings: $600</strong></li>
              </ul>
            </div>

            <p className="text-stone-700 mt-3 text-sm">
              You saved $600 in taxes while maintaining exposure to EV stocks. Tesla's loss became a valuable tax asset.
            </p>
          </div>
        </ExampleBox>
      </section>

      <section id="wash-sale-rule">
        <h2>The Wash-Sale Rule: The Most Important Rule</h2>

        <p>
          The wash-sale rule prevents you from claiming a tax loss if you buy the same or "substantially identical" security within 30 days before or after the sale.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h3 className="font-semibold text-red-900 mb-3">What Triggers a Wash Sale</h3>

          <div className="space-y-3 text-sm">
            <p>
              A wash sale occurs if you buy a "substantially identical" security within the <strong>61-day window</strong>: 30 days before the sale + day of sale + 30 days after = 61 days total.
            </p>

            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-semibold mb-2">Examples of Wash Sales (Disallowed):</p>
              <ul className="text-xs space-y-2">
                <li>✗ Sell Apple stock for a loss, buy Apple stock again within 30 days</li>
                <li>✗ Sell Vanguard S&P 500 ETF (VOO), buy it back within 30 days</li>
                <li>✗ Sell Tesla in taxable account, buy Tesla in IRA within 30 days</li>
                <li>✗ Sell a stock, have your spouse buy the same stock within 30 days</li>
                <li>✗ Sell Microsoft, buy call options on Microsoft within 30 days</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-green-200 mt-3">
              <p className="font-semibold mb-2">How to Avoid Wash Sales (Allowed):</p>
              <ul className="text-xs space-y-2">
                <li>✓ Sell VOO (Vanguard S&P 500), immediately buy IVV (iShares S&P 500) - different issuers</li>
                <li>✓ Sell Apple, immediately buy Microsoft or tech sector ETF</li>
                <li>✓ Sell small-cap index, buy mid-cap index</li>
                <li>✓ Wait 31 days, then buy back the exact same security</li>
                <li>✓ Sell individual stock, buy sector ETF containing that stock (not substantially identical)</li>
              </ul>
            </div>
          </div>
        </div>

        <ExampleBox title="Wash Sale Violation Example">
          <div className="space-y-3 text-sm">
            <p><strong>Timeline:</strong></p>
            <ul className="text-xs ml-4 space-y-1">
              <li><strong>Jan 1:</strong> Buy 100 shares Apple at $180 = $18,000</li>
              <li><strong>Oct 15:</strong> Apple drops to $150. Sell all shares = $15,000 (realize $3,000 loss)</li>
              <li><strong>Nov 5:</strong> Apple rebounds to $160. You rebuy 100 shares = $16,000</li>
            </ul>

            <p className="mt-3 p-3 bg-red-50 border border-red-200 rounded text-xs">
              <strong>Result: Wash sale violation!</strong>
              <br />
              You bought substantially identical security (Apple) within 30 days after the sale (Oct 15 → Nov 5 = 21 days).
              <br />
              <strong>Tax consequence:</strong> The $3,000 loss is disallowed for this year. Instead, it's added to the cost basis of your new shares.
              <br />
              New cost basis: $16,000 + $3,000 disallowed loss = $19,000
            </p>

            <p className="mt-3 text-stone-700 text-xs">
              <strong>Solution:</strong> Instead of buying Apple back, buy Microsoft or tech ETF (XLK, VGT) on Nov 5. Maintain tech exposure without triggering wash sale. Buy Apple back after 31 days (Nov 15+) if desired.
            </p>
          </div>
        </ExampleBox>

        <KeyTakeaway>
          <strong>Wash sale golden rule:</strong> Wait 31 calendar days before buying back the identical security. Or swap to a similar-but-different investment immediately (VOO → IVV, Apple → Microsoft, individual stock → sector ETF).
        </KeyTakeaway>
      </section>

      <section id="3000-deduction">
        <h2>The $3,000 Annual Deduction</h2>

        <p>
          Even if you have no capital gains to offset, you can deduct up to $3,000 of net capital losses against ordinary income (W-2 wages, business income) each year.
        </p>

        <div className="bg-gold-50 border-l-4 border-gold-600 p-6 my-6">
          <h3 className="font-semibold mb-3">How the $3,000 Deduction Works</h3>

          <ExampleBox title="$3,000 Deduction Value">
            <div className="space-y-3 text-sm">
              <p><strong>Scenario:</strong> You're in the 24% tax bracket with $80,000 W-2 income.</p>

              <ul className="text-xs space-y-2 mt-3">
                <li>
                  <strong>Year 1:</strong> Market crashes. You harvest $10,000 in losses but have $0 capital gains.
                  <ul className="ml-4 mt-1">
                    <li>Deduct: $3,000 against ordinary income</li>
                    <li>Tax savings: $3,000 × 24% = <strong>$720</strong></li>
                    <li>Carry forward: $7,000 to next year</li>
                  </ul>
                </li>

                <li className="mt-3">
                  <strong>Year 2:</strong> You realize $5,000 capital gains, no new losses.
                  <ul className="ml-4 mt-1">
                    <li>Use $5,000 from carry-forward to offset gains → $0 tax on gains</li>
                    <li>Deduct additional $2,000 against income (remaining carry-forward)</li>
                    <li>Tax savings: ($5,000 × 20%) + ($2,000 × 24%) = $1,000 + $480 = <strong>$1,480</strong></li>
                  </ul>
                </li>

                <li className="mt-3">
                  <strong>Total tax savings from $10,000 harvested losses: $2,200</strong>
                </li>
              </ul>
            </div>
          </ExampleBox>

          <div className="mt-6 space-y-2 text-sm">
            <p><strong>Important Rules:</strong></p>
            <ul className="text-xs ml-4 space-y-1">
              <li>Married filing jointly: $3,000 limit (not $6,000)</li>
              <li>Married filing separately: $1,500 limit each</li>
              <li>Priority: Losses first offset capital gains, then up to $3,000 against income</li>
              <li>Unused losses carry forward indefinitely (no expiration)</li>
            </ul>
          </div>
        </div>

        <Blockquote author="Tax Advisor Saying">
          The $3,000 deduction is like a yearly coupon worth $600-1,200 in tax savings. Most investors throw it away by not harvesting losses. Don't be one of them.
        </Blockquote>
      </section>

      <section id="carry-forward">
        <h2>Carrying Forward Losses Indefinitely</h2>

        <p>
          Capital losses you don't use this year don't disappear—they carry forward to future years with no expiration date.
        </p>

        <ExampleBox title="Multi-Year Loss Carry-Forward Example">
          <div className="space-y-4 text-sm">
            <div className="p-3 bg-stone-50 rounded">
              <strong>2020 (Market Crash):</strong>
              <ul className="text-xs ml-4 mt-1">
                <li>Harvest $25,000 in losses (COVID crash)</li>
                <li>Capital gains: $0</li>
                <li>Deduct $3,000 against income → Save $720 (24% bracket)</li>
                <li><strong>Carry forward: $22,000</strong></li>
              </ul>
            </div>

            <div className="p-3 bg-stone-50 rounded">
              <strong>2021 (Market Recovery):</strong>
              <ul className="text-xs ml-4 mt-1">
                <li>Realize $15,000 capital gains</li>
                <li>Use $15,000 from carry-forward → Offset all gains</li>
                <li>Deduct additional $3,000 against income</li>
                <li>Tax savings: ($15,000 × 20%) + ($3,000 × 24%) = $3,000 + $720 = <strong>$3,720</strong></li>
                <li><strong>Carry forward: $4,000</strong></li>
              </ul>
            </div>

            <div className="p-3 bg-stone-50 rounded">
              <strong>2022:</strong>
              <ul className="text-xs ml-4 mt-1">
                <li>Realize $10,000 capital gains</li>
                <li>Use $4,000 from carry-forward → Offset $4,000 of gains</li>
                <li>Tax on remaining $6,000 gains: $6,000 × 20% = $1,200</li>
                <li>Tax savings from carry-forward: $4,000 × 20% = <strong>$800</strong></li>
                <li><strong>Carry forward: $0 (fully used)</strong></li>
              </ul>
            </div>

            <p className="mt-4 p-3 bg-gold-50 border-l-4 border-gold-600 text-sm">
              <strong>Total tax savings from $25,000 harvested losses:</strong>
              <br />
              2020: $720 + 2021: $3,720 + 2022: $800 = <strong>$5,240 saved over 3 years</strong>
              <br />
              <br />
              That $25,000 loss turned into a $5,240 "tax refund" spread across multiple years.
            </p>
          </div>
        </ExampleBox>

        <KeyTakeaway>
          <strong>Loss carry-forwards are tax gold.</strong> A $50,000 loss harvested in a crash can save $10,000+ in taxes over the next decade as you offset future gains. Never let losses go unharvested.
        </KeyTakeaway>
      </section>

      <section id="step-by-step">
        <h2>Step-by-Step: How to Execute Tax-Loss Harvesting</h2>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-4">Complete Walkthrough</h3>

          <ol className="space-y-4 text-sm">
            <li className="pb-3 border-b border-olive-200">
              <strong>Step 1: Review Your Portfolio (November-December)</strong>
              <p className="text-xs mt-1">
                Log into your brokerage. Run a "Cost Basis" or "Unrealized Gains/Losses" report. Identify positions with losses &gt;5% (worth harvesting).
              </p>
            </li>

            <li className="pb-3 border-b border-olive-200">
              <strong>Step 2: Calculate Your Tax Situation</strong>
              <p className="text-xs mt-1">
                Do you have capital gains this year (from stock sales, mutual fund distributions)? How much? If gains &gt; losses, prioritize offsetting those first.
              </p>
            </li>

            <li className="pb-3 border-b border-olive-200">
              <strong>Step 3: Identify Replacement Securities</strong>
              <p className="text-xs mt-1">
                For each losing position, find a similar-but-not-identical replacement:
                <br />
                • VOO → IVV (both S&P 500, different issuers)
                <br />
                • VTI → ITOT (both total market, different issuers)
                <br />
                • Tech stock → Tech sector ETF (XLK, VGT)
              </p>
            </li>

            <li className="pb-3 border-b border-olive-200">
              <strong>Step 4: Execute Simultaneously</strong>
              <p className="text-xs mt-1">
                <strong>Same day:</strong> Sell losing position (realizes loss), immediately buy replacement (maintains exposure). No gap = no market risk.
              </p>
            </li>

            <li className="pb-3 border-b border-olive-200">
              <strong>Step 5: Track Wash-Sale Window</strong>
              <p className="text-xs mt-1">
                Mark calendar: Do not buy original security for 31 days. Set reminder for Day 32 if you want to swap back.
              </p>
            </li>

            <li>
              <strong>Step 6: Document for Taxes</strong>
              <p className="text-xs mt-1">
                Your brokerage will report on Form 1099-B. If you swap back within 31 days, brokerage may flag wash sale. Double-check in February when 1099s arrive.
              </p>
            </li>
          </ol>
        </div>

        <ExampleBox title="Real Trade Example: Harvesting Tech Stock Loss">
          <div className="space-y-2 text-sm">
            <p><strong>November 15, 2024 - 10:00 AM EST:</strong></p>

            <div className="p-3 bg-red-50 border border-red-200 rounded text-xs">
              <strong>Sell Order:</strong>
              <br />
              Security: Nvidia (NVDA)
              <br />
              Quantity: 50 shares
              <br />
              Purchase price: $500/share ($25,000 cost basis)
              <br />
              Current price: $400/share
              <br />
              Sale proceeds: $20,000
              <br />
              <strong>Realized Loss: $5,000</strong>
            </div>

            <div className="p-3 bg-green-50 border border-green-200 rounded text-xs mt-3">
              <strong>Buy Order (10 minutes later):</strong>
              <br />
              Security: VanEck Semiconductor ETF (SMH) - similar exposure, not identical
              <br />
              Investment: $20,000
              <br />
              Shares: ~120 shares at $167/share
            </div>

            <p className="mt-3 text-xs text-stone-700">
              <strong>Result:</strong> You've realized $5,000 tax loss (saves $1,000-1,500 in taxes) while maintaining semiconductor sector exposure. No wash sale because SMH ≠ NVDA. On December 17 (Day 32), you can sell SMH and buy back NVDA if desired.
            </p>
          </div>
        </ExampleBox>
      </section>

      <section id="when-to-harvest">
        <h2>When to Harvest Losses: Optimal Timing</h2>

        <div className="space-y-4 my-6">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Year-End Tax-Loss Harvesting (November-December)</h3>
            <p className="text-sm">
              The traditional window. Most investors harvest losses in final two months to offset current-year gains.
            </p>
            <ul className="text-xs ml-4 mt-2 space-y-1">
              <li><strong>Pros:</strong> Know your full year's gains, can optimize precisely</li>
              <li><strong>Cons:</strong> Everyone does it → possible selling pressure on losers in December</li>
            </ul>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Opportunistic Harvesting (Year-Round)</h3>
            <p className="text-sm">
              Harvest losses whenever they appear, especially after market corrections.
            </p>
            <ul className="text-xs ml-4 mt-2 space-y-1">
              <li><strong>Pros:</strong> Capture larger losses immediately, spreads out activity</li>
              <li><strong>Cons:</strong> Requires monitoring, may harvest losses you don't need</li>
            </ul>
          </div>

          <div className="bg-gold-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Best Practice: Hybrid Approach</h3>
            <p className="text-sm">
              Harvest large losses (10%+) opportunistically when they occur. Do a year-end sweep in November/December to capture smaller losses and optimize final tax bill.
            </p>
          </div>
        </div>

        <h3>Trigger Points to Harvest</h3>
        <ul className="space-y-2 text-sm">
          <li><strong>Market corrections (10%+ drops):</strong> Broad losses create harvesting opportunities across portfolio</li>
          <li><strong>Individual stock earnings misses:</strong> Stock drops 15%+ → harvest, swap to competitor or sector ETF</li>
          <li><strong>Large unrealized gains elsewhere:</strong> If you sold winners, harvest losers to offset</li>
          <li><strong>December 31 approaching:</strong> Last chance to realize losses for current tax year</li>
        </ul>
      </section>

      <section id="automation-tools">
        <h2>Automation Tools: Set-and-Forget Tax-Loss Harvesting</h2>

        <p>
          Modern robo-advisors automate tax-loss harvesting daily, capturing thousands in tax savings without manual effort.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 px-4 py-3 text-left">Platform</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Tax-Loss Harvesting</th>
                <th className="border border-stone-300 px-4 py-3 text-right">Minimum</th>
                <th className="border border-stone-300 px-4 py-3 text-right">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">Wealthfront</td>
                <td className="border border-stone-300 px-4 py-3">Daily automated TLH</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$500</td>
                <td className="border border-stone-300 px-4 py-3 text-right">0.25%</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">Betterment</td>
                <td className="border border-stone-300 px-4 py-3">Daily automated TLH</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$0</td>
                <td className="border border-stone-300 px-4 py-3 text-right">0.25%</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">Vanguard Personal Advisor</td>
                <td className="border border-stone-300 px-4 py-3">Annual TLH review</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$50,000</td>
                <td className="border border-stone-300 px-4 py-3 text-right">0.30%</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">Schwab Intelligent Portfolios</td>
                <td className="border border-stone-300 px-4 py-3">Automated TLH (premium only)</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$25,000</td>
                <td className="border border-stone-300 px-4 py-3 text-right">0.30%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ExampleBox title="Robo-Advisor Tax-Loss Harvesting Value">
          <div className="space-y-3 text-sm">
            <p><strong>Portfolio:</strong> $200,000 at Wealthfront (0.25% fee = $500/year)</p>

            <p className="text-xs">
              <strong>Annual TLH benefit (conservative estimate):</strong>
              <br />
              Wealthfront harvests ~$4,000 in losses annually on average
              <br />
              Tax savings: $4,000 × 25% bracket = $1,000/year
              <br />
              Net benefit: $1,000 tax savings - $500 fee = <strong>+$500/year</strong>
            </p>

            <p className="text-xs mt-3">
              <strong>30-year compounding impact:</strong>
              <br />
              Reinvesting $1,000 annual tax savings at 8% return
              <br />
              Future value: <strong>$113,000</strong>
            </p>

            <p className="text-stone-700 text-xs mt-3 font-semibold">
              The robo-advisor fee pays for itself through tax savings, with $500/year profit. Over decades, automated TLH can add six figures to your wealth.
            </p>
          </div>
        </ExampleBox>

        <KeyTakeaway>
          <strong>Automation makes sense for:</strong> Investors with $50,000+ in taxable accounts who want hands-off optimization. DIY harvesting works for active investors with time to monitor and execute swaps.
        </KeyTakeaway>
      </section>

      <section id="common-mistakes">
        <h2>Common Mistakes to Avoid</h2>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h3 className="font-semibold text-red-900 mb-4">7 Costly Tax-Loss Harvesting Errors</h3>

          <div className="space-y-4 text-sm">
            <div>
              <strong>1. Violating the Wash-Sale Rule</strong>
              <p className="text-xs text-stone-700">
                Buying back the same security within 30 days. Solution: Use different ETF issuers (VOO → IVV) or wait 31 days.
              </p>
            </div>

            <div>
              <strong>2. Harvesting in Tax-Advantaged Accounts</strong>
              <p className="text-xs text-stone-700">
                IRAs and 401(k)s grow tax-deferred—losses provide zero benefit. Only harvest in taxable brokerage accounts.
              </p>
            </div>

            <div>
              <strong>3. Letting Tax Tail Wag Investment Dog</strong>
              <p className="text-xs text-stone-700">
                Don't sell a great long-term investment just to harvest a small loss. Only harvest if you're comfortable owning the replacement.
              </p>
            </div>

            <div>
              <strong>4. Ignoring Transaction Costs</strong>
              <p className="text-xs text-stone-700">
                Harvesting a $200 loss when trades cost $100 round-trip = net $50 tax benefit (not worth it). Use commission-free brokers.
              </p>
            </div>

            <div>
              <strong>5. Buying Back Too Soon</strong>
              <p className="text-xs text-stone-700">
                "Day 28... close enough to 31, right?" Wrong. IRS counts calendar days. Day 32 is the first safe day.
              </p>
            </div>

            <div>
              <strong>6. Forgetting About Dividends</strong>
              <p className="text-xs text-stone-700">
                Selling right before ex-dividend date means you miss the dividend. Check ex-dates before harvesting dividend stocks.
              </p>
            </div>

            <div>
              <strong>7. Not Tracking Across Accounts</strong>
              <p className="text-xs text-stone-700">
                Selling Apple in taxable account while simultaneously buying Apple in IRA = wash sale. Track all accounts (including spouse's).
              </p>
            </div>
          </div>
        </div>

        <Blockquote author="CPA Maxim">
          The wash-sale rule has no mercy. The IRS will disallow your loss even if you accidentally triggered it. When in doubt, use a different security or wait 31 days. A small delay is better than losing thousands in tax benefits.
        </Blockquote>
      </section>

      <section id="conclusion">
        <h2>Conclusion: Free Money on the Table</h2>

        <p>
          Tax-loss harvesting is one of the few "free lunches" in investing. It reduces your tax bill while maintaining your investment strategy—pure alpha with no downside.
        </p>

        <div className="bg-gold-50 border-l-4 border-gold-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Your Tax-Loss Harvesting Action Plan</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Review taxable account for unrealized losses (&gt;5% down)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Calculate capital gains realized this year (from sales, distributions)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Identify replacement securities for each losing position (avoid wash sales)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Execute sell + buy same day (no market exposure gap)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Mark calendar: 31-day wash-sale window (no buying back original)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Document trades for tax filing (Form 1099-B from broker)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Consider robo-advisor for automated daily harvesting ($50K+ accounts)</span>
            </label>
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">Lifetime Impact: The Power of Annual Harvesting</h3>

          <div className="text-sm">
            <p className="mb-3">
              <strong>Conservative scenario:</strong> Harvest $5,000 losses annually for 30 years
            </p>

            <ul className="text-xs space-y-2">
              <li>Annual tax savings: $5,000 × 25% = $1,250</li>
              <li>Reinvest savings at 8% return</li>
              <li>30-year future value: <strong>$141,000</strong></li>
            </ul>

            <p className="text-stone-700 mt-4 text-sm font-semibold">
              Tax-loss harvesting can add $100,000-200,000 to your retirement portfolio through compounded tax savings. It's the highest-ROI activity per hour of effort in all of investing.
            </p>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Start harvesting today.</strong> Even in a bull market, individual positions create harvesting opportunities. A $10,000 loss harvested now saves $2,000-3,000 in taxes. Do that annually for 30 years, and you've built an extra $150,000+ from losses that would have gone to waste.
        </KeyTakeaway>

        <p className="mt-6">
          Tax-loss harvesting is the closest thing to financial alchemy—turning losses into gold. Master the wash-sale rule, harvest opportunistically, and automate if possible. Your future tax-free self will thank you.
        </p>
      </section>
    </ArticleLayout>
  )
}
