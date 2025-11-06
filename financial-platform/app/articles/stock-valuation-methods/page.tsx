import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'Stock Valuation Methods: DCF, Comps, Precedent Transactions | money365.market',
  description: 'Learn the three main stock valuation methods used by Wall Street: Discounted Cash Flow (DCF), comparable companies analysis, and precedent transactions with step-by-step examples.',
  keywords: 'stock valuation, DCF model, discounted cash flow, comparable companies, comps analysis, precedent transactions, intrinsic value',
}

export default function StockValuationMethodsArticle() {

  return (
    <ArticleLayout
      title="Stock Valuation Methods: DCF, Comps, Precedent Transactions"
      author="money365.market Research Team"
      publishDate="January 2025"
      readTime="15 min"
      category="Fundamental Analysis"
      description="Learn the three main stock valuation methods used by Wall Street: Discounted Cash Flow (DCF), comparable companies analysis, and precedent transactions with step-by-step examples."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          What is a stock really worth? This fundamental question drives all investment decisions. Professional investors use three main valuation methods to determine intrinsic value: Discounted Cash Flow, comparable companies analysis, and precedent transactions.
        </p>

        <KeyTakeaway>
          Master these three valuation approaches: DCF (what will the company generate in cash?), Comps (what are similar companies worth?), and Precedent Transactions (what have acquirers paid?). Use all three to triangulate fair value.
        </KeyTakeaway>
      </section>

      <section id="why-valuation-matters">
        <h2>Why Valuation Matters</h2>

        <p>
          Price is what you pay. Value is what you get. Even the best company is a bad investment if you overpay.
        </p>

        <Blockquote author="Warren Buffett">
          It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price. But first, you must know what that fair price is.
        </Blockquote>

        <ExampleBox title="The Cost of Overpaying">
          <p>
            <strong>Company X fundamentals:</strong> Generates $100M in annual free cash flow, grows at 5%/year
          </p>

          <div className="mt-3 space-y-3 text-sm">
            <div className="p-3 bg-green-50 border border-green-200 rounded">
              <strong>Investor A buys at fair value ($2 billion = 20x FCF):</strong>
              <br />
              10-year return: ~120% (8.2% annually)
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <strong>Investor B overpays ($4 billion = 40x FCF):</strong>
              <br />
              10-year return: ~10% (1% annually)
            </div>
          </div>

          <p className="text-stone-700 font-semibold mt-3">
            Same company, same fundamentals—but Investor A's return is 12x better simply by paying the right price. Valuation determines your return.
          </p>
        </ExampleBox>
      </section>

      <section id="dcf-model">
        <h2>Discounted Cash Flow (DCF) Valuation</h2>

        <p>
          The DCF model calculates a company's intrinsic value based on the present value of all future cash flows. It's the most theoretically sound valuation method—a company is worth the sum of all cash it will generate, discounted back to today.
        </p>

        <h3>The DCF Formula</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold">Company Value = PV of Future Cash Flows + Terminal Value</p>
          </div>

          <div className="space-y-3 text-sm">
            <p><strong>Key Components:</strong></p>
            <ul className="ml-6 space-y-2">
              <li>
                <strong>Free Cash Flow (FCF):</strong> Cash generated after capital expenditures
                <br />
                <span className="text-stone-600">FCF = Operating Cash Flow - CapEx</span>
              </li>
              <li>
                <strong>Discount Rate (WACC):</strong> Weighted Average Cost of Capital—the return required by investors
                <br />
                <span className="text-stone-600">Typically 8-12% for stable companies, 12-15%+ for growth companies</span>
              </li>
              <li>
                <strong>Terminal Value:</strong> Value of all cash flows beyond the projection period
                <br />
                <span className="text-stone-600">Usually 70-80% of total company value</span>
              </li>
              <li>
                <strong>Projection Period:</strong> Typically 5-10 years of explicit forecasts
              </li>
            </ul>
          </div>
        </div>

        <h3>DCF Strengths and Weaknesses</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-5">
            <h4 className="font-semibold text-green-900 mb-2">Strengths</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ Based on fundamental cash generation</li>
              <li>✓ Independent of market sentiment</li>
              <li>✓ Theoretically most accurate method</li>
              <li>✓ Forces deep understanding of business</li>
              <li>✓ Customizable to specific company dynamics</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-5">
            <h4 className="font-semibold text-red-900 mb-2">Weaknesses</h4>
            <ul className="space-y-1 text-sm">
              <li>✗ Highly sensitive to assumptions (GIGO)</li>
              <li>✗ Difficult for unprofitable growth companies</li>
              <li>✗ Terminal value dominates result (uncertain)</li>
              <li>✗ Requires financial modeling skills</li>
              <li>✗ Time-consuming to build properly</li>
            </ul>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Garbage in, garbage out:</strong> DCF is only as good as your assumptions. A 1% change in discount rate or growth rate can swing valuation by 20-30%. Always stress-test with multiple scenarios.
        </KeyTakeaway>
      </section>

      <section id="dcf-step-by-step">
        <h2>DCF Step-by-Step Example: Valuing a Coffee Chain</h2>

        <p>
          Let's value "JavaCo," a hypothetical coffee chain with stable cash flows.
        </p>

        <ExampleBox title="JavaCo Financial Data (Current Year)">
          <ul className="space-y-1 text-sm">
            <li><strong>Revenue:</strong> $1,000M</li>
            <li><strong>Operating Cash Flow:</strong> $150M</li>
            <li><strong>Capital Expenditures:</strong> $30M</li>
            <li><strong>Free Cash Flow:</strong> $120M</li>
            <li><strong>Shares Outstanding:</strong> 100M</li>
            <li><strong>Debt:</strong> $200M</li>
            <li><strong>Cash:</strong> $50M</li>
          </ul>
        </ExampleBox>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Step 1: Project Free Cash Flows (5 years)</h3>

          <p className="text-sm mb-3">
            <strong>Assumptions:</strong> Revenue grows 8% annually, FCF margin improves from 12% to 14%
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-xs">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Year</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Revenue</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">FCF Margin</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Free Cash Flow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Year 1</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$1,080M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">12.5%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$135M</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">Year 2</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$1,166M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">13.0%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$152M</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Year 3</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$1,259M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">13.5%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$170M</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">Year 4</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$1,360M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">13.8%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$188M</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Year 5</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$1,469M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">14.0%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$206M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold mt-6 mb-3">Step 2: Calculate Terminal Value</h3>
          <p className="text-sm mb-2">
            <strong>Method:</strong> Perpetuity Growth Model
            <br />
            Terminal Value = Year 5 FCF × (1 + g) ÷ (WACC - g)
          </p>

          <div className="text-sm ml-4 space-y-1">
            <p>Perpetual growth rate (g): 3%</p>
            <p>WACC (discount rate): 10%</p>
            <p>Terminal Value = $206M × 1.03 ÷ (0.10 - 0.03) = $3,034M</p>
          </div>

          <h3 className="font-semibold mt-6 mb-3">Step 3: Discount All Cash Flows to Present Value</h3>

          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse bg-white text-xs">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Year</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">FCF</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Discount Factor</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Present Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Year 1</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$135M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">0.909</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$123M</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">Year 2</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$152M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">0.826</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$126M</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Year 3</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$170M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">0.751</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$128M</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">Year 4</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$188M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">0.683</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$128M</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Year 5</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$206M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">0.621</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$128M</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2 font-semibold">Terminal Value</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$3,034M</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">0.621</td>
                  <td className="border border-stone-300 px-3 py-2 text-right font-semibold">$1,884M</td>
                </tr>
                <tr className="bg-gold-50">
                  <td className="border border-stone-300 px-3 py-2 font-semibold" colSpan={3}>Total Enterprise Value</td>
                  <td className="border border-stone-300 px-3 py-2 text-right font-semibold">$2,517M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold mt-6 mb-3">Step 4: Calculate Equity Value Per Share</h3>

          <div className="text-sm space-y-2 ml-4">
            <p>Enterprise Value: $2,517M</p>
            <p>Less: Net Debt ($200M debt - $50M cash): -$150M</p>
            <p><strong>Equity Value: $2,367M</strong></p>
            <p>Shares Outstanding: 100M</p>
            <p className="text-lg font-semibold text-gold-700">Fair Value Per Share: $23.67</p>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Sensitivity Analysis:</strong> Test different scenarios. If WACC = 9%, value jumps to $28.50. If growth = 2%, value drops to $21.30. Always calculate bull/base/bear cases.
        </KeyTakeaway>
      </section>

      <section id="comparable-companies">
        <h2>Comparable Companies Analysis (Trading Comps)</h2>

        <p>
          Comparable companies analysis values a company based on how similar public companies are trading. If Company A trades at 15x earnings, and Company B is similar, it should also trade around 15x earnings.
        </p>

        <h3>How Comps Work</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <ol className="space-y-3 text-sm">
            <li>
              <strong>1. Identify Comparable Companies</strong>
              <br />
              <span className="text-stone-600">Find 5-10 public companies in same industry, similar size, growth, and business model</span>
            </li>
            <li>
              <strong>2. Calculate Valuation Multiples</strong>
              <br />
              <span className="text-stone-600">Common multiples: P/E, EV/EBITDA, P/S, P/B, EV/FCF</span>
            </li>
            <li>
              <strong>3. Take Median/Average</strong>
              <br />
              <span className="text-stone-600">Find median multiple across comparable set (median is less affected by outliers)</span>
            </li>
            <li>
              <strong>4. Apply to Target Company</strong>
              <br />
              <span className="text-stone-600">Multiply target's metric by comparable multiple to get implied valuation</span>
            </li>
          </ol>
        </div>

        <h3>Common Valuation Multiples</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 px-4 py-3 text-left">Multiple</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Formula</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">P/E Ratio</td>
                <td className="border border-stone-300 px-4 py-3">Price ÷ Earnings Per Share</td>
                <td className="border border-stone-300 px-4 py-3">Profitable, mature companies</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">EV/EBITDA</td>
                <td className="border border-stone-300 px-4 py-3">Enterprise Value ÷ EBITDA</td>
                <td className="border border-stone-300 px-4 py-3">Capital-intensive businesses</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">P/S Ratio</td>
                <td className="border border-stone-300 px-4 py-3">Price ÷ Sales Per Share</td>
                <td className="border border-stone-300 px-4 py-3">Unprofitable growth companies</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">P/B Ratio</td>
                <td className="border border-stone-300 px-4 py-3">Price ÷ Book Value</td>
                <td className="border border-stone-300 px-4 py-3">Banks, asset-heavy firms</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">EV/FCF</td>
                <td className="border border-stone-300 px-4 py-3">Enterprise Value ÷ Free Cash Flow</td>
                <td className="border border-stone-300 px-4 py-3">Cash-generative businesses</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ExampleBox title="Comps Example: Valuing a Retail Company">
          <p className="font-semibold mb-3">Target Company: "RetailCo" with $500M EBITDA</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-xs mb-4">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Comparable</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">EV/EBITDA</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-stone-300 px-3 py-2">Walmart</td><td className="border border-stone-300 px-3 py-2 text-right">10.2x</td></tr>
                <tr className="bg-stone-50"><td className="border border-stone-300 px-3 py-2">Target</td><td className="border border-stone-300 px-3 py-2 text-right">11.5x</td></tr>
                <tr><td className="border border-stone-300 px-3 py-2">Costco</td><td className="border border-stone-300 px-3 py-2 text-right">14.8x</td></tr>
                <tr className="bg-stone-50"><td className="border border-stone-300 px-3 py-2">Dollar General</td><td className="border border-stone-300 px-3 py-2 text-right">12.1x</td></tr>
                <tr><td className="border border-stone-300 px-3 py-2">Kroger</td><td className="border border-stone-300 px-3 py-2 text-right">9.8x</td></tr>
                <tr className="bg-gold-50 font-semibold"><td className="border border-stone-300 px-3 py-2">Median</td><td className="border border-stone-300 px-3 py-2 text-right">11.5x</td></tr>
              </tbody>
            </table>
          </div>

          <div className="text-sm space-y-2">
            <p><strong>Calculation:</strong></p>
            <p>RetailCo EBITDA: $500M</p>
            <p>Median EV/EBITDA: 11.5x</p>
            <p><strong>Implied Enterprise Value: $500M × 11.5 = $5,750M</strong></p>
            <p className="text-stone-700 mt-3">
              If RetailCo has $200M net debt, equity value = $5,550M. Divide by shares outstanding to get price per share.
            </p>
          </div>
        </ExampleBox>

        <h3>Comps Strengths and Weaknesses</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-5">
            <h4 className="font-semibold text-green-900 mb-2">Strengths</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ Based on real market prices</li>
              <li>✓ Quick and simple to calculate</li>
              <li>✓ Reflects current market sentiment</li>
              <li>✓ Easy to explain and understand</li>
              <li>✓ Useful for relative value comparison</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-5">
            <h4 className="font-semibold text-red-900 mb-2">Weaknesses</h4>
            <ul className="space-y-1 text-sm">
              <li>✗ No two companies are perfectly comparable</li>
              <li>✗ Market may misprice entire sector</li>
              <li>✗ Doesn't capture unique competitive advantages</li>
              <li>✗ Sensitive to market bubbles/crashes</li>
              <li>✗ Hard to find good comps for unique businesses</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="precedent-transactions">
        <h2>Precedent Transactions (M&A Comps)</h2>

        <p>
          Precedent transactions analysis examines prices paid in past acquisitions of similar companies. This method answers: "What have acquirers historically paid for businesses like this?"
        </p>

        <h3>How It Works</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <ol className="space-y-3 text-sm">
            <li>
              <strong>1. Identify Relevant Transactions</strong>
              <br />
              <span className="text-stone-600">Find M&A deals in same industry from last 2-5 years (recent transactions more relevant)</span>
            </li>
            <li>
              <strong>2. Calculate Transaction Multiples</strong>
              <br />
              <span className="text-stone-600">Same multiples as comps: EV/EBITDA, EV/Revenue, P/E at acquisition</span>
            </li>
            <li>
              <strong>3. Apply Acquisition Premium</strong>
              <br />
              <span className="text-stone-600">Acquirers typically pay 20-40% premium over trading price (control premium)</span>
            </li>
            <li>
              <strong>4. Calculate Implied Value</strong>
              <br />
              <span className="text-stone-600">Apply median transaction multiple to target company's metrics</span>
            </li>
          </ol>
        </div>

        <ExampleBox title="Precedent Transactions Example: Software Companies">
          <p className="font-semibold mb-3">Target: SaaS company with $200M revenue</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-xs mb-4">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Transaction</th>
                  <th className="border border-stone-300 px-3 py-2 text-left">Year</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">EV/Revenue</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Salesforce acquires Slack</td>
                  <td className="border border-stone-300 px-3 py-2">2021</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">26.0x</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">55%</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">Microsoft acquires Nuance</td>
                  <td className="border border-stone-300 px-3 py-2">2021</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">11.2x</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">23%</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Adobe acquires Figma</td>
                  <td className="border border-stone-300 px-3 py-2">2022</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">50.0x</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">N/A</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">Thoma Bravo buys Coupa</td>
                  <td className="border border-stone-300 px-3 py-2">2023</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">9.5x</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">30%</td>
                </tr>
                <tr className="bg-gold-50 font-semibold">
                  <td className="border border-stone-300 px-3 py-2" colSpan={2}>Median (excl. outlier)</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">11.2x</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">30%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-sm space-y-2">
            <p><strong>Implied Acquisition Value:</strong></p>
            <p>Target Revenue: $200M</p>
            <p>Median EV/Revenue: 11.2x</p>
            <p><strong>Implied Value: $200M × 11.2 = $2,240M</strong></p>
            <p className="text-stone-700 mt-3">
              This suggests an acquirer might pay ~$2.2 billion for the company. Current trading value might be 30% lower ($1,700M) before acquisition premium.
            </p>
          </div>
        </ExampleBox>

        <h3>When to Use Precedent Transactions</h3>
        <ul>
          <li><strong>M&A situations:</strong> Valuing a company for sale or merger</li>
          <li><strong>Strategic buyers:</strong> Understanding what acquirers might pay</li>
          <li><strong>Fairness opinions:</strong> Determining if acquisition price is fair</li>
          <li><strong>Active M&A sector:</strong> Industries with frequent consolidation</li>
        </ul>

        <KeyTakeaway>
          Precedent transactions typically yield higher valuations than trading comps due to control premium and strategic synergies. Use this as an upper bound for valuation range.
        </KeyTakeaway>
      </section>

      <section id="valuing-apple">
        <h2>Real Example: Valuing Apple (AAPL)</h2>

        <p>
          Let's apply all three methods to value Apple as of January 2025.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Apple Financial Snapshot (FY2024)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <ul className="space-y-1">
                <li><strong>Market Cap:</strong> $3,500B</li>
                <li><strong>Revenue:</strong> $385B</li>
                <li><strong>Net Income:</strong> $97B</li>
                <li><strong>Free Cash Flow:</strong> $108B</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li><strong>Shares:</strong> 15.3B</li>
                <li><strong>Current Price:</strong> ~$229</li>
                <li><strong>Net Debt:</strong> $40B</li>
                <li><strong>P/E Ratio:</strong> 36x</li>
              </ul>
            </div>
          </div>

          <h3 className="font-semibold mt-6 mb-3">Method 1: DCF Valuation</h3>
          <div className="text-sm space-y-2">
            <p><strong>Assumptions:</strong> 5% revenue growth, 28% FCF margin, 9% WACC, 3% terminal growth</p>
            <p>5-year FCF projection: $108B → $113B → $119B → $125B → $131B</p>
            <p>PV of 5-year FCF: $475B</p>
            <p>Terminal Value: $131B × 1.03 ÷ (0.09 - 0.03) = $2,249B</p>
            <p>PV of Terminal Value: $1,461B</p>
            <p><strong>Enterprise Value: $1,936B</strong></p>
            <p>Less Net Debt: -$40B</p>
            <p><strong>Equity Value: $1,896B ÷ 15.3B shares = $124/share</strong></p>
          </div>

          <h3 className="font-semibold mt-6 mb-3">Method 2: Comparable Companies</h3>
          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse bg-white text-xs">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Company</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">P/E</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">EV/FCF</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-stone-300 px-3 py-2">Microsoft</td><td className="border border-stone-300 px-3 py-2 text-right">38x</td><td className="border border-stone-300 px-3 py-2 text-right">32x</td></tr>
                <tr className="bg-stone-50"><td className="border border-stone-300 px-3 py-2">Google</td><td className="border border-stone-300 px-3 py-2 text-right">28x</td><td className="border border-stone-300 px-3 py-2 text-right">24x</td></tr>
                <tr><td className="border border-stone-300 px-3 py-2">Amazon</td><td className="border border-stone-300 px-3 py-2 text-right">42x</td><td className="border border-stone-300 px-3 py-2 text-right">35x</td></tr>
                <tr className="bg-stone-50"><td className="border border-stone-300 px-3 py-2">Meta</td><td className="border border-stone-300 px-3 py-2 text-right">32x</td><td className="border border-stone-300 px-3 py-2 text-right">28x</td></tr>
                <tr className="bg-gold-50 font-semibold"><td className="border border-stone-300 px-3 py-2">Median</td><td className="border border-stone-300 px-3 py-2 text-right">35x</td><td className="border border-stone-300 px-3 py-2 text-right">30x</td></tr>
              </tbody>
            </table>
          </div>
          <div className="text-sm mt-3 space-y-1">
            <p>Apple Net Income × 35x P/E = $97B × 35 = $3,395B ($222/share)</p>
            <p>Apple FCF × 30x = $108B × 30 = $3,240B ($212/share)</p>
            <p><strong>Comps Average: ~$217/share</strong></p>
          </div>

          <h3 className="font-semibold mt-6 mb-3">Method 3: Valuation Summary</h3>
          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-4 py-2 text-left">Method</th>
                  <th className="border border-stone-300 px-4 py-2 text-right">Value/Share</th>
                  <th className="border border-stone-300 px-4 py-2 text-left">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-4 py-2">DCF</td>
                  <td className="border border-stone-300 px-4 py-2 text-right">$124</td>
                  <td className="border border-stone-300 px-4 py-2">Conservative—implies undervalued</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-4 py-2">Comps</td>
                  <td className="border border-stone-300 px-4 py-2 text-right">$217</td>
                  <td className="border border-stone-300 px-4 py-2">Market-based—suggests fair value</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-4 py-2">Current Price</td>
                  <td className="border border-stone-300 px-4 py-2 text-right">$229</td>
                  <td className="border border-stone-300 px-4 py-2">Trading at premium to comps</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-stone-700 mt-4">
            <strong>Conclusion:</strong> Apple trades at $229, between DCF ($124) and comps ($217). The premium reflects Apple's brand strength, ecosystem lock-in, and consistent execution. Investors are paying for quality and growth certainty.
          </p>
        </div>
      </section>

      <section id="valuing-tesla">
        <h2>Real Example: Valuing Tesla (TSLA)</h2>

        <p>
          Tesla is notoriously difficult to value due to its growth, volatility, and debates over whether it's a car company or tech company.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Tesla Financial Snapshot (2024)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <ul className="space-y-1">
                <li><strong>Market Cap:</strong> $800B</li>
                <li><strong>Revenue:</strong> $97B</li>
                <li><strong>Net Income:</strong> $15B</li>
                <li><strong>Free Cash Flow:</strong> $6B</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li><strong>P/E Ratio:</strong> 53x</li>
                <li><strong>P/S Ratio:</strong> 8.2x</li>
                <li><strong>EV/FCF:</strong> 133x</li>
                <li><strong>Growth Rate:</strong> 20%+</li>
              </ul>
            </div>
          </div>

          <h3 className="font-semibold mt-6 mb-3">Comparable Companies: The Challenge</h3>

          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse bg-white text-xs">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Comp Set</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Median P/E</th>
                  <th className="border border-stone-300 px-3 py-2 text-left">Implied TSLA Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Auto (Ford, GM, Toyota)</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">8x</td>
                  <td className="border border-stone-300 px-3 py-2">$120B (85% undervalued)</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">Tech (Google, Meta, NVDA)</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">35x</td>
                  <td className="border border-stone-300 px-3 py-2">$525B (35% undervalued)</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Current Trading</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">53x</td>
                  <td className="border border-stone-300 px-3 py-2">$800B (market price)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-stone-600 mt-3">
            <strong>The problem:</strong> Traditional auto comps suggest massive overvaluation. Tech comps suggest moderate overvaluation. Which is right?
          </p>

          <h3 className="font-semibold mt-6 mb-3">Growth-Adjusted Valuation (PEG Ratio)</h3>

          <div className="text-sm space-y-2">
            <p>PEG Ratio = P/E ÷ Growth Rate (lower is better, &lt;1.0 = potentially undervalued)</p>
            <p>Tesla: 53 P/E ÷ 25% growth = <strong>PEG of 2.1</strong></p>
            <p>Apple: 36 P/E ÷ 5% growth = <strong>PEG of 7.2</strong></p>
            <p>Amazon: 42 P/E ÷ 12% growth = <strong>PEG of 3.5</strong></p>
          </div>

          <p className="text-sm text-stone-700 mt-3">
            On a growth-adjusted basis, Tesla's valuation is more defensible than mature tech giants—if you believe the 25% growth continues.
          </p>

          <h3 className="font-semibold mt-6 mb-3">DCF with Multiple Scenarios</h3>

          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse bg-white text-xs">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Scenario</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Revenue Growth</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">FCF Margin</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Fair Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Bear (just a car company)</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">5%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">5%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$200B</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">Base (EV leader)</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">15%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">12%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$600B</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">Bull (autonomy + energy)</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">25%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">20%</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$1,200B</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-stone-700 mt-4">
            <strong>Current price ($800B) implies market is pricing in "base +" case:</strong> Tesla dominates EVs and achieves moderate success in autonomy/energy. Any disappointment = major downside. Full vision execution = 50% upside.
          </p>
        </div>

        <KeyTakeaway>
          <strong>Tesla demonstrates valuation's subjectivity.</strong> Your valuation depends entirely on which future you believe: car company (bearish), EV leader (neutral), or tech/energy giant (bullish). This is why diverse opinions on growth stocks exist.
        </KeyTakeaway>
      </section>

      <section id="when-to-use">
        <h2>When to Use Each Method</h2>

        <div className="space-y-6 my-6">
          <div className="bg-olive-50 border-l-4 border-olive-600 p-6">
            <h3 className="text-lg font-semibold mb-3">Use DCF When:</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Company has predictable cash flows (utilities, consumer staples)</li>
              <li>✓ You have confidence in long-term projections</li>
              <li>✓ Company is mature with stable growth</li>
              <li>✓ You want an absolute intrinsic value (not relative)</li>
              <li>✓ You have time to build detailed model</li>
            </ul>
            <p className="text-xs text-stone-600 mt-3">
              <strong>Best for:</strong> Coca-Cola, Johnson & Johnson, Procter & Gamble, utilities
            </p>
          </div>

          <div className="bg-gold-50 border-l-4 border-gold-600 p-6">
            <h3 className="text-lg font-semibold mb-3">Use Comparable Companies When:</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Good comparable companies exist in same sector</li>
              <li>✓ You need quick valuation check</li>
              <li>✓ Company is mature/profitable</li>
              <li>✓ You want to understand relative value vs peers</li>
              <li>✓ Market is reasonably efficient (not bubble/crash)</li>
            </ul>
            <p className="text-xs text-stone-600 mt-3">
              <strong>Best for:</strong> Banks, retailers, most mature industries with clear peers
            </p>
          </div>

          <div className="bg-stone-50 border-l-4 border-stone-400 p-6">
            <h3 className="text-lg font-semibold mb-3">Use Precedent Transactions When:</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Evaluating potential acquisition target</li>
              <li>✓ Industry has active M&A activity</li>
              <li>✓ You want to understand takeout potential</li>
              <li>✓ Providing fairness opinion on deal</li>
              <li>✓ Recent comparable deals exist (within 3 years)</li>
            </ul>
            <p className="text-xs text-stone-600 mt-3">
              <strong>Best for:</strong> Biotech, software, consolidating industries
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h3 className="font-semibold text-red-900 mb-3">When Valuation Is Most Difficult</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Unprofitable growth companies:</strong> No earnings to value, negative FCF</li>
            <li><strong>Unique business models:</strong> No good comparables (early Amazon, Uber)</li>
            <li><strong>Cyclical companies:</strong> Earnings swing wildly year-to-year</li>
            <li><strong>Disruption situations:</strong> Incumbent vs disruptor (Blockbuster vs Netflix)</li>
            <li><strong>Biotechs pre-revenue:</strong> Binary outcomes based on clinical trials</li>
          </ul>
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion: The Art and Science of Valuation</h2>

        <p>
          Valuation is part mathematics, part judgment. No single method gives you "the answer"—each provides a different lens on value.
        </p>

        <div className="bg-gold-50 border-l-4 border-gold-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Best Practices for Valuation</h3>
          <ol className="space-y-2 text-sm">
            <li>
              <strong>1. Use multiple methods:</strong> DCF + Comps + Precedent Transactions = valuation range
            </li>
            <li>
              <strong>2. Stress-test assumptions:</strong> Run bull/base/bear scenarios
            </li>
            <li>
              <strong>3. Understand the drivers:</strong> What assumptions matter most? (growth rate, margins, multiples)
            </li>
            <li>
              <strong>4. Compare to history:</strong> Is company trading above/below historical multiples?
            </li>
            <li>
              <strong>5. Margin of safety:</strong> Only buy at 20-30% discount to fair value
            </li>
            <li>
              <strong>6. Update regularly:</strong> Revisit valuation quarterly as new data emerges
            </li>
          </ol>
        </div>

        <Blockquote author="Howard Marks, Oaktree Capital">
          You can't predict. You can prepare. Build a valuation range, understand the risks, and demand a margin of safety. That's intelligent investing.
        </Blockquote>

        <KeyTakeaway>
          <strong>Action step:</strong> Pick a company you're interested in. Calculate its P/E, EV/EBITDA, and P/S ratios. Compare to 3-5 competitors. Build a simple 5-year DCF. You'll learn more from one hands-on valuation than reading 100 articles.
        </KeyTakeaway>

        <p className="mt-6">
          Valuation skills separate good investors from great ones. Master DCF for intrinsic value, use comps for relative value, and understand precedent transactions for M&A scenarios. Combined with patience and discipline, proper valuation ensures you buy wonderful businesses at fair prices—the formula for long-term wealth.
        </p>
      </section>
    </ArticleLayout>
  )
}
