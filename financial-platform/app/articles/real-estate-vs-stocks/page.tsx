import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'Real Estate vs Stocks: Which Investment is Better? | 6S Capital',
  description: 'Comprehensive comparison of real estate vs stocks: historical returns, liquidity, leverage, taxes, time commitment, REITs. Data-driven analysis for informed decisions.',
  keywords: 'real estate vs stocks, real estate investing, stock market returns, REITs, leverage, investment comparison, diversification',
}

export default function RealEstateVsStocksArticle() {

  return (
    <ArticleLayout
      title="Real Estate vs Stocks: Which Investment is Better?"
      author="6S Capital Research Team"
      publishDate="January 2025"
      readTime="13 min"
      category="Investment Strategies"
      description="Comprehensive comparison of real estate vs stocks: historical returns, liquidity, leverage, taxes, time commitment, REITs. Data-driven analysis for informed decisions."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          The age-old debate: should you invest in real estate or stocks? Both have created generational wealth, yet they differ dramatically in returns, liquidity, taxes, and effort. This comprehensive comparison helps you make the right choice for your situation.
        </p>

        <KeyTakeaway>
          <strong>The short answer:</strong> Stocks historically deliver higher returns (10% annually) with zero effort and perfect liquidity. Real estate offers leverage, tax benefits, and tangible assets but requires significant time and capital. For most investors, a diversified approach using both makes sense.
        </KeyTakeaway>
      </section>

      <section id="historical-returns">
        <h2>Historical Returns Comparison: The Data</h2>

        <p>
          Let's start with the most important question: which makes you more money over time?
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 px-4 py-3 text-left font-semibold">Asset Class</th>
                <th className="border border-stone-300 px-4 py-3 text-right font-semibold">Annual Return (1950-2024)</th>
                <th className="border border-stone-300 px-4 py-3 text-right font-semibold">$100K After 30 Years</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">S&P 500 (Stocks)</td>
                <td className="border border-stone-300 px-4 py-3 text-right">10.2%</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$1,744,000</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">Real Estate (National Average)</td>
                <td className="border border-stone-300 px-4 py-3 text-right">3.8%</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$309,000</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">REITs (Publicly Traded)</td>
                <td className="border border-stone-300 px-4 py-3 text-right">9.5%</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$1,500,000</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">Rental Property (Unleveraged)</td>
                <td className="border border-stone-300 px-4 py-3 text-right">8.0%</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$1,006,000</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">Rental Property (4:1 Leverage)</td>
                <td className="border border-stone-300 px-4 py-3 text-right">15%+</td>
                <td className="border border-stone-300 px-4 py-3 text-right">$6,600,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-stone-600 mb-6">
          Data sources: S&P 500 (Morningstar), Case-Shiller Home Price Index, NAREIT REIT Index. Rental property returns include appreciation + rental income - expenses.
        </p>

        <ExampleBox title="Real-World 30-Year Scenario: $100,000 Investment in 1994">
          <div className="space-y-4">
            <div>
              <strong className="text-sm">Stock Market (S&P 500 Index Fund):</strong>
              <ul className="text-xs ml-4 mt-1 space-y-1">
                <li>Initial investment: $100,000</li>
                <li>2024 value: $1,745,000</li>
                <li>Total return: 1,645% (10.2% annually)</li>
                <li>Dividends reinvested automatically</li>
                <li>Zero effort required (set and forget)</li>
              </ul>
            </div>

            <div className="mt-3">
              <strong className="text-sm">Real Estate (Rental Property with Leverage):</strong>
              <ul className="text-xs ml-4 mt-1 space-y-1">
                <li>Initial investment: $100,000 (20% down on $500,000 property)</li>
                <li>Property value 2024: $1,400,000 (3.8% appreciation)</li>
                <li>Mortgage paid off: $400,000 principal paid down</li>
                <li>Rental income (net, after expenses): ~$720,000 cumulative</li>
                <li>Total equity: $1,400,000 + $720,000 = $2,120,000</li>
                <li>Total return: 2,020% (11.2% annually)</li>
              </ul>
            </div>

            <p className="text-stone-700 text-sm mt-4 font-semibold">
              Leveraged real estate can outperform stocks, but requires active management, tenant issues, maintenance, and significant time. Unleveraged real estate significantly underperforms stocks.
            </p>
          </div>
        </ExampleBox>

        <KeyTakeaway>
          <strong>Key insight:</strong> Stocks beat unleveraged real estate by 2-3x over long periods. But with leverage (mortgage), real estate can match or exceed stock returns—at the cost of effort, risk, and illiquidity.
        </KeyTakeaway>
      </section>

      <section id="liquidity">
        <h2>Liquidity: Stocks Win Decisively</h2>

        <p>
          Liquidity is the ability to convert an asset to cash quickly without losing value. This is stocks' biggest advantage.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Stocks: Instant Liquidity</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Sell anytime market is open (9:30am-4pm ET)</li>
              <li>✓ Cash in account within 2 business days (T+2 settlement)</li>
              <li>✓ Sell any amount (1 share or 10,000 shares)</li>
              <li>✓ No transaction costs at most brokers (commission-free)</li>
              <li>✓ Zero impact on price for small positions</li>
              <li>✓ Emergency access to capital in minutes</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Real Estate: Highly Illiquid</h3>
            <ul className="space-y-2 text-sm">
              <li>✗ Average time to sell: 2-6 months</li>
              <li>✗ Transaction costs: 6-10% (agent fees, closing costs)</li>
              <li>✗ Must sell entire property (can't sell 10% of a house)</li>
              <li>✗ Market timing risk (forced to sell in bad market = big losses)</li>
              <li>✗ Carrying costs while listed (mortgage, taxes, utilities)</li>
              <li>✗ No emergency liquidity (can't access equity quickly)</li>
            </ul>
          </div>
        </div>

        <ExampleBox title="Liquidity Crisis Scenario">
          <p className="text-sm mb-3">
            <strong>Situation:</strong> Medical emergency requires $50,000 immediately.
          </p>

          <div className="space-y-3 text-sm">
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <strong>Stock investor:</strong>
              <br />
              <span className="text-xs">
                Log into brokerage → Sell $50,000 of index funds → Cash in account by Wednesday → Wire to bank → Total time: 48 hours. Cost: $0 in fees.
              </span>
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <strong>Real estate investor:</strong>
              <br />
              <span className="text-xs">
                Options: 1) Take out home equity loan (2-4 weeks, high interest), 2) Sell property (3-6 months, lose 8% to fees), 3) Find private lender (expensive). Emergency access impossible without major costs/delays.
              </span>
            </div>
          </div>
        </ExampleBox>

        <Blockquote author="John Bogle, Vanguard Founder">
          Liquidity is an underrated asset feature. In 2008, real estate owners couldn't access their wealth when they needed it most. Stock investors could sell instantly, albeit at painful losses. Liquidity gives you options.
        </Blockquote>
      </section>

      <section id="leverage">
        <h2>Leverage: Real Estate's Superpower</h2>

        <p>
          Real estate's biggest advantage is easy access to cheap leverage through mortgages. This amplifies returns dramatically.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">How Leverage Amplifies Returns</h3>

          <ExampleBox title="$100,000 Investment: Leveraged vs Unleveraged">
            <div className="space-y-4">
              <div>
                <strong className="text-sm">Scenario A: Stocks (No Leverage)</strong>
                <ul className="text-xs ml-4 mt-1 space-y-1">
                  <li>Invest: $100,000</li>
                  <li>10% return: $10,000 profit</li>
                  <li>ROI on your capital: 10%</li>
                </ul>
              </div>

              <div>
                <strong className="text-sm">Scenario B: Real Estate (5:1 Leverage, 20% Down)</strong>
                <ul className="text-xs ml-4 mt-1 space-y-1">
                  <li>Invest: $100,000 (20% down on $500,000 property)</li>
                  <li>Borrow: $400,000 at 6% mortgage</li>
                  <li>Property appreciates 5%: $500,000 → $525,000 (+$25,000)</li>
                  <li>Rental income (net after mortgage/expenses): +$6,000</li>
                  <li>Mortgage principal paydown: +$8,000</li>
                  <li>Total gain: $39,000</li>
                  <li><strong>ROI on your capital: 39%</strong> (vs 5% unleveraged property return)</li>
                </ul>
              </div>
            </div>

            <p className="text-stone-700 text-sm mt-4 font-semibold">
              Leverage turned a 5% property return into a 39% return on your invested capital. This is real estate's magic—and why many millionaires made fortunes in property.
            </p>
          </ExampleBox>
        </div>

        <h3>Leverage Comparison: Real Estate vs Stocks</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 px-4 py-3 text-left">Factor</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Real Estate Mortgage</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Stock Margin Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">Leverage Ratio</td>
                <td className="border border-stone-300 px-4 py-3">4:1 to 9:1 (10-25% down)</td>
                <td className="border border-stone-300 px-4 py-3">2:1 maximum (50% margin)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">Interest Rate</td>
                <td className="border border-stone-300 px-4 py-3">5-7% fixed (30 years)</td>
                <td className="border border-stone-300 px-4 py-3">8-12% variable</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">Margin Call Risk</td>
                <td className="border border-stone-300 px-4 py-3 text-green-700">None (unless you stop paying)</td>
                <td className="border border-stone-300 px-4 py-3 text-red-700">High (forced selling in crashes)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">Tax Deductibility</td>
                <td className="border border-stone-300 px-4 py-3 text-green-700">Yes (mortgage interest deduction)</td>
                <td className="border border-stone-300 px-4 py-3 text-red-700">Limited (only investment income)</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">Term</td>
                <td className="border border-stone-300 px-4 py-3">15-30 years (predictable)</td>
                <td className="border border-stone-300 px-4 py-3">Callable anytime by broker</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-semibold text-yellow-900 mb-2">The Dark Side of Leverage: 2008 Financial Crisis</h4>
          <p className="text-sm text-stone-700">
            Leverage magnifies losses equally. In 2008, homeowners with 10% down lost 100% of equity when prices dropped 20% (from $500K → $400K = $100K loss on $50K equity). Many walked away from underwater mortgages. Stock investors with no leverage just held through the crash.
          </p>
        </div>

        <KeyTakeaway>
          <strong>Leverage lesson:</strong> Real estate offers cheap, long-term, stable leverage (mortgages) that amplifies returns. Stocks offer expensive, risky leverage (margin) that triggers forced selling in downturns. Leverage is real estate's edge—if used responsibly.
        </KeyTakeaway>
      </section>

      <section id="tax-implications">
        <h2>Tax Implications: Real Estate Wins on Strategy</h2>

        <p>
          Both assets have tax advantages, but real estate offers more creative tax strategies for high earners.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Stock Taxes</h3>

            <div className="space-y-3 text-sm">
              <div>
                <strong>Capital Gains (Long-Term):</strong>
                <br />
                <span className="text-xs text-stone-600">0%, 15%, or 20% based on income. Hold &gt;1 year for preferential rates.</span>
              </div>

              <div>
                <strong>Dividends (Qualified):</strong>
                <br />
                <span className="text-xs text-stone-600">Same as long-term capital gains (0-20%)</span>
              </div>

              <div>
                <strong>Tax-Loss Harvesting:</strong>
                <br />
                <span className="text-xs text-stone-600">Offset gains with losses, deduct $3,000 annually against income</span>
              </div>

              <div>
                <strong>No Depreciation:</strong>
                <br />
                <span className="text-xs text-stone-600">Can't deduct anything against stock gains</span>
              </div>

              <div>
                <strong>Step-Up Basis at Death:</strong>
                <br />
                <span className="text-xs text-stone-600">Heirs inherit at current value (no capital gains tax)</span>
              </div>
            </div>
          </div>

          <div className="bg-gold-50 border border-stone-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Real Estate Taxes</h3>

            <div className="space-y-3 text-sm">
              <div>
                <strong>Depreciation Deduction:</strong>
                <br />
                <span className="text-xs text-stone-600">Deduct 1/27.5 of property value annually (even while appreciating!)</span>
              </div>

              <div>
                <strong>Mortgage Interest Deduction:</strong>
                <br />
                <span className="text-xs text-stone-600">Deduct interest on loans up to $750,000</span>
              </div>

              <div>
                <strong>Operating Expense Deductions:</strong>
                <br />
                <span className="text-xs text-stone-600">Property taxes, insurance, repairs, management fees—all deductible</span>
              </div>

              <div>
                <strong>1031 Exchange:</strong>
                <br />
                <span className="text-xs text-stone-600">Defer capital gains indefinitely by rolling into new property</span>
              </div>

              <div>
                <strong>$250K/$500K Exclusion (Primary):</strong>
                <br />
                <span className="text-xs text-stone-600">Tax-free gains on primary residence if lived in 2 of last 5 years</span>
              </div>
            </div>
          </div>
        </div>

        <ExampleBox title="Tax Comparison: $500,000 Rental Property">
          <div className="space-y-3 text-sm">
            <p><strong>Annual rental income:</strong> $30,000</p>
            <p><strong>Expenses:</strong></p>
            <ul className="ml-4 text-xs space-y-1">
              <li>Mortgage interest: $18,000</li>
              <li>Property taxes: $6,000</li>
              <li>Insurance: $1,500</li>
              <li>Maintenance/repairs: $2,000</li>
              <li>Depreciation: $18,000 ($500K building ÷ 27.5 years)</li>
              <li><strong>Total deductions: $45,500</strong></li>
            </ul>
            <p className="mt-3">
              <strong>Taxable income: -$15,500 (loss on paper!)</strong>
              <br />
              <span className="text-xs text-stone-600">
                Despite collecting $30K cash and building $10K equity, you report a $15K loss for tax purposes. This can offset W-2 income if you're a real estate professional or offset passive income for others.
              </span>
            </p>
          </div>

          <p className="text-stone-700 text-sm mt-4 font-semibold">
            Real estate allows you to generate cash flow while showing "losses" on taxes through depreciation—a powerful wealth-building hack unavailable to stock investors.
          </p>
        </ExampleBox>

        <KeyTakeaway>
          <strong>Tax winner:</strong> Real estate for active investors and high earners. Depreciation, expense deductions, and 1031 exchanges create tax-free or tax-deferred wealth. Stocks are simpler but less tax-efficient for high-income individuals.
        </KeyTakeaway>
      </section>

      <section id="time-effort">
        <h2>Time & Effort Required: Stocks Win for Passive Investors</h2>

        <p>
          This is where real estate's reputation as "passive income" meets reality. Rental properties are anything but passive.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 px-4 py-3 text-left">Task</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Stocks (Index Funds)</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Rental Real Estate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 px-4 py-3">Initial Research</td>
                <td className="border border-stone-300 px-4 py-3">2-5 hours (choose index funds)</td>
                <td className="border border-stone-300 px-4 py-3">50-100 hours (find, analyze, inspect properties)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3">Purchase Process</td>
                <td className="border border-stone-300 px-4 py-3">10 minutes (online)</td>
                <td className="border border-stone-300 px-4 py-3">1-3 months (negotiations, inspections, closing)</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3">Ongoing Management</td>
                <td className="border border-stone-300 px-4 py-3">1 hour/year (rebalancing)</td>
                <td className="border border-stone-300 px-4 py-3">5-20 hours/month (tenants, repairs, accounting)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3">Midnight Emergencies</td>
                <td className="border border-stone-300 px-4 py-3">Never</td>
                <td className="border border-stone-300 px-4 py-3">Burst pipes, broken AC, tenant calls at 2am</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3">Tax Complexity</td>
                <td className="border border-stone-300 px-4 py-3">Simple (1099-DIV form)</td>
                <td className="border border-stone-300 px-4 py-3">Complex (Schedule E, depreciation, expenses)</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3">Selling Time</td>
                <td className="border border-stone-300 px-4 py-3">1 minute (click sell button)</td>
                <td className="border border-stone-300 px-4 py-3">2-6 months (list, show, negotiate, close)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ExampleBox title="A Week in the Life: Stock Investor vs Landlord">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <strong className="text-sm">Stock Investor (Monday-Sunday):</strong>
              <ul className="text-xs ml-4 mt-2 space-y-1">
                <li>Monday: Checks portfolio (2 min)</li>
                <li>Tuesday-Saturday: Does nothing</li>
                <li>Sunday: Reads investing article (15 min)</li>
                <li><strong>Total time: 17 minutes</strong></li>
              </ul>
            </div>

            <div>
              <strong className="text-sm">Landlord (Monday-Sunday):</strong>
              <ul className="text-xs ml-4 mt-2 space-y-1">
                <li>Monday: Tenant calls about broken dishwasher (1 hour coordinating repair)</li>
                <li>Tuesday: Meet repairman at property (2 hours including drive time)</li>
                <li>Wednesday: Collect rent from slow-paying tenant (30 min)</li>
                <li>Thursday: Review property tax bill, dispute assessment (1 hour)</li>
                <li>Friday: Screen new tenant applications (2 hours)</li>
                <li>Saturday: Mow lawn, fix fence (3 hours)</li>
                <li>Sunday: Update accounting, pay contractors (1.5 hours)</li>
                <li><strong>Total time: 11 hours</strong></li>
              </ul>
            </div>
          </div>
        </ExampleBox>

        <h3>Property Management: Worth the 8-10% Fee?</h3>
        <p>
          Hiring a property manager solves the time problem but costs 8-10% of gross rent plus tenant placement fees ($500-1,000). On a $2,000/month rental, that's $2,400-3,600 annually—enough to eliminate most cash flow.
        </p>

        <Blockquote author="Naval Ravikant, Investor and Entrepreneur">
          Earn with your mind, not your time. Real estate ties you to a specific location and demands your time. Stocks scale infinitely with zero additional effort. Choose assets that respect your time.
        </Blockquote>
      </section>

      <section id="reits-alternative">
        <h2>REITs: Best of Both Worlds?</h2>

        <p>
          Real Estate Investment Trusts (REITs) let you invest in real estate with stock-like liquidity and zero management hassles.
        </p>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-3">What Are REITs?</h3>
          <p className="text-sm mb-3">
            REITs are companies that own income-producing real estate (apartments, offices, malls, warehouses). By law, they must distribute 90% of income as dividends.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">REIT Advantages:</h4>
              <ul className="space-y-1 text-xs">
                <li>✓ Stock-like liquidity (trade instantly)</li>
                <li>✓ Professional management (no tenant calls)</li>
                <li>✓ Diversification (own 100s of properties for $1,000)</li>
                <li>✓ High dividend yields (3-5% typical)</li>
                <li>✓ Low minimums ($100 to start)</li>
                <li>✓ Access to commercial real estate (offices, warehouses)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">REIT Disadvantages:</h4>
              <ul className="space-y-1 text-xs">
                <li>✗ No leverage (can't get mortgage on REIT shares)</li>
                <li>✗ No depreciation deductions (you don't own property)</li>
                <li>✗ Dividends taxed as ordinary income (not qualified)</li>
                <li>✗ Market volatility (trades like stock, not property)</li>
                <li>✗ Management fees embedded in structure</li>
              </ul>
            </div>
          </div>
        </div>

        <ExampleBox title="Popular REIT Examples (2025)">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-xs">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">REIT</th>
                  <th className="border border-stone-300 px-3 py-2 text-left">Type</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Dividend Yield</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-stone-300 px-3 py-2">Vanguard Real Estate ETF (VNQ)</td><td className="border border-stone-300 px-3 py-2">Diversified</td><td className="border border-stone-300 px-3 py-2 text-right">4.2%</td></tr>
                <tr className="bg-stone-50"><td className="border border-stone-300 px-3 py-2">Realty Income (O)</td><td className="border border-stone-300 px-3 py-2">Retail</td><td className="border border-stone-300 px-3 py-2 text-right">5.4%</td></tr>
                <tr><td className="border border-stone-300 px-3 py-2">Prologis (PLD)</td><td className="border border-stone-300 px-3 py-2">Industrial/Warehouses</td><td className="border border-stone-300 px-3 py-2 text-right">3.1%</td></tr>
                <tr className="bg-stone-50"><td className="border border-stone-300 px-3 py-2">AvalonBay (AVB)</td><td className="border border-stone-300 px-3 py-2">Apartments</td><td className="border border-stone-300 px-3 py-2 text-right">3.8%</td></tr>
              </tbody>
            </table>
          </div>
        </ExampleBox>

        <KeyTakeaway>
          <strong>REITs are ideal for:</strong> Investors who want real estate exposure without buying property, diversification across geographies/sectors, and passive income. Not ideal for those seeking leverage or tax benefits of direct ownership.
        </KeyTakeaway>
      </section>

      <section id="diversification">
        <h2>Diversification Benefits: Why Not Both?</h2>

        <p>
          Stocks and real estate have low correlation—they don't move together. This makes them excellent diversification partners.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">Correlation During Market Crises</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-4 py-3 text-left">Crisis Period</th>
                  <th className="border border-stone-300 px-4 py-3 text-right">Stocks (S&P 500)</th>
                  <th className="border border-stone-300 px-4 py-3 text-right">Housing Prices</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-4 py-3">2000-2002 (Dot-com Crash)</td>
                  <td className="border border-stone-300 px-4 py-3 text-right text-red-700">-49%</td>
                  <td className="border border-stone-300 px-4 py-3 text-right text-green-700">+30%</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-4 py-3">2008-2009 (Financial Crisis)</td>
                  <td className="border border-stone-300 px-4 py-3 text-right text-red-700">-57%</td>
                  <td className="border border-stone-300 px-4 py-3 text-right text-red-700">-33%</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-4 py-3">2020 (COVID Crash)</td>
                  <td className="border border-stone-300 px-4 py-3 text-right text-red-700">-34%</td>
                  <td className="border border-stone-300 px-4 py-3 text-right text-green-700">+10%</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-4 py-3">2022 (Bear Market)</td>
                  <td className="border border-stone-300 px-4 py-3 text-right text-red-700">-25%</td>
                  <td className="border border-stone-300 px-4 py-3 text-right">+2%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-stone-700 mt-4">
            Notice: Except for 2008 (housing-caused crisis), real estate held up during stock crashes. This diversification protected balanced portfolios.
          </p>
        </div>

        <h3>Sample Balanced Portfolio</h3>
        <ul className="space-y-2">
          <li><strong>50% Stocks</strong> (Total stock market index: VTI, VTSAX)</li>
          <li><strong>30% Bonds</strong> (Total bond market: BND, VBTLX)</li>
          <li><strong>10% REITs</strong> (Real estate index: VNQ, VGSLX)</li>
          <li><strong>10% Direct Real Estate</strong> (rental property or REIT alternative)</li>
        </ul>

        <p className="text-sm text-stone-700 mt-3">
          This allocation captures stock growth, bond stability, REIT income, and real estate tax benefits—maximizing diversification.
        </p>
      </section>

      <section id="which-to-choose">
        <h2>Which Should You Choose?</h2>

        <div className="space-y-6 my-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-3">Choose Stocks If:</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ You value simplicity and passive income</li>
              <li>✓ You have limited capital (&lt;$50,000)</li>
              <li>✓ You want liquidity for emergencies</li>
              <li>✓ You don't want to deal with tenants/repairs</li>
              <li>✓ You're early in your career (time for compounding)</li>
              <li>✓ You live in high-cost area (California, New York) where real estate is unaffordable</li>
            </ul>
          </div>

          <div className="bg-gold-50 border-l-4 border-gold-600 p-6">
            <h3 className="text-xl font-semibold text-gold-900 mb-3">Choose Real Estate If:</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ You have significant capital ($100,000+)</li>
              <li>✓ You're willing to manage tenants (or pay manager)</li>
              <li>✓ You want tangible assets and control</li>
              <li>✓ You benefit from tax deductions (high earner)</li>
              <li>✓ You enjoy hands-on investing</li>
              <li>✓ You're in affordable market with good cash-flow properties</li>
              <li>✓ You can leverage (good credit, stable income)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Choose REITs If:</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ You want real estate exposure without buying property</li>
              <li>✓ You value liquidity but want real estate returns</li>
              <li>✓ You have limited capital (&lt;$10,000)</li>
              <li>✓ You want diversification across property types/locations</li>
              <li>✓ You're retired and need dividend income</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion: The Hybrid Approach Wins</h2>

        <p>
          The debate isn't stocks vs real estate—it's stocks AND real estate. The wealthiest investors own both.
        </p>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Recommended Strategy by Age/Wealth</h3>

          <div className="space-y-4 text-sm">
            <div>
              <strong>Ages 20-30 (Building foundation):</strong>
              <br />
              <span className="text-xs">90% stocks (max growth), 10% REITs. Focus on career income and saving. Don't buy property yet.</span>
            </div>

            <div>
              <strong>Ages 30-40 (First property):</strong>
              <br />
              <span className="text-xs">70% stocks, 10% REITs, 20% real estate (primary residence or first rental if you have $50K+ down payment).</span>
            </div>

            <div>
              <strong>Ages 40-55 (Wealth acceleration):</strong>
              <br />
              <span className="text-xs">50% stocks, 15% REITs, 25% rental properties, 10% bonds. Leverage is safer now with stable income.</span>
            </div>

            <div>
              <strong>Ages 55+ (Income focus):</strong>
              <br />
              <span className="text-xs">40% stocks (for growth), 20% REITs (dividends), 20% rental properties (paid off, pure cash flow), 20% bonds (stability).</span>
            </div>
          </div>
        </div>

        <KeyTakeaway>
          <strong>The verdict:</strong> Stocks win for passive investors seeking maximum returns with minimal effort. Real estate wins for active investors who can leverage debt, handle tenants, and optimize taxes. REITs win for those wanting real estate exposure without the hassle. Most should own all three.
        </KeyTakeaway>

        <p className="mt-6">
          Start with stocks (easy, liquid, proven 10% returns). Once you have $100,000+ in stocks and stable income, add real estate (leverage amplifies returns, tax benefits multiply). Use REITs to bridge the gap and diversify. The combination of stock market returns, real estate leverage, and tax optimization creates generational wealth.
        </p>
      </section>
    </ArticleLayout>
  )
}
