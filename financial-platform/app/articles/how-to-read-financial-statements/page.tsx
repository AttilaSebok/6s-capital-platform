import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'How to Read Financial Statements: Complete Beginner\'s Guide | 6S Capital',
  description: 'Learn to read income statements, balance sheets, and cash flow statements. Master financial analysis with real examples and step-by-step guidance.',
  keywords: 'financial statements, income statement, balance sheet, cash flow statement, financial analysis, accounting basics',
}

export default function HowToReadFinancialStatementsArticle() {

  return (
    <ArticleLayout
      title="How to Read Financial Statements: Complete Beginner's Guide"
      author="6S Capital Research Team"
      publishDate="January 2025"
      readTime="12 min"
      category="Fundamental Analysis"
      description="Learn to read income statements, balance sheets, and cash flow statements. Master financial analysis with real examples and step-by-step guidance."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          Financial statements are the language of business. If you want to invest wisely, you need to understand what companies are telling you through their numbers. This guide breaks down the three essential financial statements in plain English.
        </p>

        <KeyTakeaway>
          Master these three documents: Income Statement (profitability), Balance Sheet (financial position), and Cash Flow Statement (cash movement). Together, they tell the complete story of a company's financial health.
        </KeyTakeaway>
      </section>

      <section id="why-financial-statements">
        <h2>Why Financial Statements Matter</h2>

        <p>
          Before investing a single dollar, you should know:
        </p>

        <ul>
          <li><strong>Is the company profitable?</strong> - Income Statement answers this</li>
          <li><strong>Does it have more assets than debts?</strong> - Balance Sheet shows this</li>
          <li><strong>Is it generating actual cash?</strong> - Cash Flow Statement reveals the truth</li>
        </ul>

        <ExampleBox title="Why All Three Matter">
          <p>
            <strong>Company A</strong> reports $100M profit but has $500M debt and negative cash flow.
            <br />
            <strong>Company B</strong> reports $80M profit with zero debt and strong positive cash flow.
          </p>
          <p className="mt-2">
            Which is the better investment? Company B. Profit alone doesn't tell the full story—you need all three statements.
          </p>
        </ExampleBox>
      </section>

      <section id="income-statement">
        <h2>The Income Statement (Profit & Loss Statement)</h2>

        <p>
          The income statement shows <strong>profitability over a period</strong> (quarter or year). Think of it as a scoreboard: how much did the company earn vs. spend?
        </p>

        <h3>Key Components</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h4 className="text-lg font-semibold text-stone-900 mb-4">Income Statement Structure</h4>
          <div className="space-y-3 font-mono text-sm">
            <div>
              <strong>Revenue (Sales)</strong>
              <div className="ml-4 text-stone-600">Total money from selling products/services</div>
            </div>
            <div className="ml-4">
              <strong>- Cost of Goods Sold (COGS)</strong>
              <div className="ml-4 text-stone-600">Direct costs to make products</div>
            </div>
            <div className="border-t border-stone-300 pt-2">
              <strong>= Gross Profit</strong>
              <div className="ml-4 text-stone-600">Revenue minus production costs</div>
            </div>
            <div className="ml-4 mt-3">
              <strong>- Operating Expenses</strong>
              <div className="ml-4 text-stone-600">Salaries, marketing, R&D, rent</div>
            </div>
            <div className="border-t border-stone-300 pt-2">
              <strong>= Operating Income (EBIT)</strong>
              <div className="ml-4 text-stone-600">Earnings before interest and taxes</div>
            </div>
            <div className="ml-4 mt-3">
              <strong>- Interest & Taxes</strong>
            </div>
            <div className="border-t-2 border-stone-400 pt-2">
              <strong>= Net Income</strong>
              <div className="ml-4 text-stone-600">The "bottom line" - actual profit</div>
            </div>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Gross Margin = Gross Profit ÷ Revenue</strong>
          <br />
          Higher is better. Tech companies: 60-80%. Retailers: 20-40%. This shows pricing power and efficiency.
        </KeyTakeaway>

        <ExampleBox title="Real Example: Apple Q4 2024">
          <ul className="space-y-2">
            <li><strong>Revenue:</strong> $89.5 billion</li>
            <li><strong>Cost of Goods Sold:</strong> $35.4 billion</li>
            <li><strong>Gross Profit:</strong> $54.1 billion (60.4% margin)</li>
            <li><strong>Operating Expenses:</strong> $14.3 billion</li>
            <li><strong>Operating Income:</strong> $39.8 billion</li>
            <li><strong>Net Income:</strong> $34.6 billion</li>
          </ul>
          <p className="mt-3 text-stone-700">
            Apple's 60% gross margin shows strong pricing power (people pay premium for iPhones). Operating income of $39.8B proves operational efficiency.
          </p>
        </ExampleBox>

        <h3>What to Look For</h3>
        <ul>
          <li><strong>Revenue growth:</strong> Is it increasing year-over-year? 10%+ is healthy</li>
          <li><strong>Gross margin trend:</strong> Stable or improving? Declining suggests pricing pressure</li>
          <li><strong>Operating margin:</strong> Operating Income ÷ Revenue. Above 15% is strong</li>
          <li><strong>Net margin:</strong> Net Income ÷ Revenue. Above 10% is excellent</li>
        </ul>
      </section>

      <section id="balance-sheet">
        <h2>The Balance Sheet (Financial Position)</h2>

        <p>
          The balance sheet shows <strong>what a company owns and owes at a specific point in time</strong>. It's a snapshot, not a movie.
        </p>

        <h3>The Accounting Equation</h3>

        <div className="bg-gold-50 border-l-4 border-gold-600 p-6 my-6">
          <p className="text-lg font-semibold text-center">
            Assets = Liabilities + Shareholders' Equity
          </p>
          <p className="text-center text-stone-600 mt-2">
            What you own = What you owe + What's left over
          </p>
        </div>

        <h3>Key Components</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h4 className="text-lg font-semibold text-stone-900 mb-4">Balance Sheet Structure</h4>

          <div className="mb-6">
            <h5 className="font-semibold text-gold-700 mb-2">ASSETS (What the company owns)</h5>
            <div className="ml-4 space-y-2 text-sm">
              <div>
                <strong>Current Assets</strong> (convert to cash within 1 year)
                <ul className="ml-4 text-stone-600">
                  <li>Cash and cash equivalents</li>
                  <li>Accounts receivable (customers owe us)</li>
                  <li>Inventory</li>
                </ul>
              </div>
              <div>
                <strong>Non-Current Assets</strong> (long-term)
                <ul className="ml-4 text-stone-600">
                  <li>Property, plant, equipment (PP&E)</li>
                  <li>Intangible assets (patents, trademarks)</li>
                  <li>Long-term investments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-red-700 mb-2">LIABILITIES (What the company owes)</h5>
            <div className="ml-4 space-y-2 text-sm">
              <div>
                <strong>Current Liabilities</strong> (due within 1 year)
                <ul className="ml-4 text-stone-600">
                  <li>Accounts payable (we owe suppliers)</li>
                  <li>Short-term debt</li>
                  <li>Accrued expenses</li>
                </ul>
              </div>
              <div>
                <strong>Non-Current Liabilities</strong> (long-term)
                <ul className="ml-4 text-stone-600">
                  <li>Long-term debt</li>
                  <li>Deferred tax liabilities</li>
                  <li>Pension obligations</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-olive-700 mb-2">SHAREHOLDERS' EQUITY (Owner's stake)</h5>
            <div className="ml-4 space-y-1 text-sm text-stone-600">
              <div>Common stock + Retained earnings</div>
              <div>(Assets minus Liabilities = What shareholders own)</div>
            </div>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Current Ratio = Current Assets ÷ Current Liabilities</strong>
          <br />
          Above 1.5 is healthy. Below 1.0 means potential liquidity problems (can't pay short-term bills).
        </KeyTakeaway>

        <ExampleBox title="Real Example: Microsoft 2024">
          <div className="space-y-4">
            <div>
              <strong>Assets:</strong> $512 billion
              <ul className="ml-4 text-sm">
                <li>Cash: $111 billion</li>
                <li>Current assets: $225 billion</li>
                <li>PP&E: $154 billion</li>
              </ul>
            </div>
            <div>
              <strong>Liabilities:</strong> $232 billion
              <ul className="ml-4 text-sm">
                <li>Current liabilities: $89 billion</li>
                <li>Long-term debt: $57 billion</li>
              </ul>
            </div>
            <div>
              <strong>Shareholders' Equity:</strong> $280 billion
            </div>
            <p className="text-stone-700 text-sm mt-3">
              Current Ratio: $225B ÷ $89B = 2.53 (excellent liquidity)
              <br />
              Debt-to-Equity: $57B ÷ $280B = 0.20 (low debt, financially healthy)
            </p>
          </div>
        </ExampleBox>

        <h3>What to Look For</h3>
        <ul>
          <li><strong>Cash position:</strong> More cash = more financial flexibility</li>
          <li><strong>Debt levels:</strong> Debt-to-Equity ratio below 0.5 is conservative, above 2.0 is risky</li>
          <li><strong>Current ratio:</strong> Above 1.5 suggests good short-term financial health</li>
          <li><strong>Book value:</strong> Shareholders' Equity ÷ Shares Outstanding = Book Value per Share</li>
        </ul>
      </section>

      <section id="cash-flow-statement">
        <h2>The Cash Flow Statement (Cash Movement)</h2>

        <p>
          The cash flow statement shows <strong>actual cash coming in and going out</strong>. This is where accounting tricks get exposed—you can manipulate profit, but cash flow doesn't lie.
        </p>

        <Blockquote author="Warren Buffett">
          Cash combined with courage in a crisis is priceless. Companies with strong cash flow can weather any storm.
        </Blockquote>

        <h3>Three Sections</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-stone-900 mb-2">1. Operating Cash Flow (OCF)</h4>
              <p className="text-sm text-stone-600 mb-2">Cash from core business operations</p>
              <ul className="text-sm ml-4">
                <li>Net income (starting point)</li>
                <li>+ Depreciation (non-cash expense)</li>
                <li>+/- Changes in working capital</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">
                <strong>This should be positive and growing.</strong> If negative, the business is burning cash.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-stone-900 mb-2">2. Investing Cash Flow</h4>
              <p className="text-sm text-stone-600 mb-2">Cash spent on investments</p>
              <ul className="text-sm ml-4">
                <li>- Purchase of equipment, property (CapEx)</li>
                <li>- Acquisitions of other companies</li>
                <li>+ Sale of assets</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">
                <strong>Usually negative</strong> (companies invest for growth). Very negative might indicate aggressive expansion.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-stone-900 mb-2">3. Financing Cash Flow</h4>
              <p className="text-sm text-stone-600 mb-2">Cash from/to investors and creditors</p>
              <ul className="text-sm ml-4">
                <li>+ Issuing stock or bonds (raising capital)</li>
                <li>- Paying dividends</li>
                <li>- Repaying debt</li>
                <li>- Stock buybacks</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">
                Mature companies often have <strong>negative financing cash flow</strong> (returning cash to shareholders via dividends/buybacks).
              </p>
            </div>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Free Cash Flow (FCF) = Operating Cash Flow - Capital Expenditures</strong>
          <br />
          This is the "true" cash a company generates after maintaining/growing operations. FCF &gt; Net Income is a good sign.
        </KeyTakeaway>

        <ExampleBox title="Real Example: Coca-Cola 2024">
          <ul className="space-y-2">
            <li><strong>Operating Cash Flow:</strong> +$12.5 billion (strong)</li>
            <li><strong>Investing Cash Flow:</strong> -$2.1 billion (normal CapEx)</li>
            <li><strong>Financing Cash Flow:</strong> -$9.8 billion (dividends + buybacks)</li>
            <li><strong>Net Change in Cash:</strong> +$0.6 billion</li>
          </ul>
          <p className="mt-3 text-stone-700">
            <strong>Free Cash Flow:</strong> $12.5B - $2.1B = $10.4B
            <br />
            Coca-Cola generates massive cash, invests modestly, and returns most to shareholders. Classic mature cash cow.
          </p>
        </ExampleBox>

        <h3>What to Look For</h3>
        <ul>
          <li><strong>Positive operating cash flow:</strong> Essential. Negative means burning cash</li>
          <li><strong>OCF &gt; Net Income:</strong> Good quality earnings (not just accounting profit)</li>
          <li><strong>Free cash flow growth:</strong> Growing FCF = sustainable business</li>
          <li><strong>Cash conversion:</strong> How much of net income becomes actual cash? Above 80% is healthy</li>
        </ul>
      </section>

      <section id="real-world-example">
        <h2>Real-World Example: Apple Inc.</h2>

        <p>
          Let's analyze Apple's latest annual financial statements to see how all three work together:
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="text-xl font-semibold mb-4">Apple Inc. - Fiscal Year 2024</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gold-700">Income Statement Highlights</h4>
              <ul className="text-sm ml-4 mt-2">
                <li>Revenue: $385.6 billion (up 2% YoY)</li>
                <li>Gross Profit: $169.1 billion (43.9% margin)</li>
                <li>Operating Income: $114.3 billion (29.6% margin)</li>
                <li>Net Income: $97.0 billion (25.2% margin)</li>
              </ul>
              <p className="text-xs text-stone-600 mt-2">
                <strong>Analysis:</strong> Extremely profitable with industry-leading margins. Net margin of 25% is exceptional.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700">Balance Sheet Highlights</h4>
              <ul className="text-sm ml-4 mt-2">
                <li>Total Assets: $352.8 billion</li>
                <li>Cash: $61.8 billion</li>
                <li>Total Debt: $101.3 billion</li>
                <li>Shareholders' Equity: $74.1 billion</li>
                <li>Current Ratio: 0.96</li>
              </ul>
              <p className="text-xs text-stone-600 mt-2">
                <strong>Analysis:</strong> Strong cash position but current ratio below 1.0 concerns some (Apple manages this via strong OCF). Debt-to-Equity of 1.37 is manageable given cash generation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gold-700">Cash Flow Statement Highlights</h4>
              <ul className="text-sm ml-4 mt-2">
                <li>Operating Cash Flow: $118.3 billion</li>
                <li>CapEx: -$10.5 billion</li>
                <li>Free Cash Flow: $107.8 billion</li>
                <li>Dividends Paid: -$15.2 billion</li>
                <li>Share Buybacks: -$94.9 billion</li>
              </ul>
              <p className="text-xs text-stone-600 mt-2">
                <strong>Analysis:</strong> Exceptional cash generation. FCF of $107.8B exceeds net income, showing high-quality earnings. Returns most cash to shareholders via buybacks.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gold-50 border-l-4 border-gold-600">
            <p className="text-sm font-semibold">Investment Verdict:</p>
            <p className="text-sm text-stone-700 mt-1">
              Apple demonstrates exceptional profitability, strong cash generation, and disciplined capital allocation. The combination of high margins, massive FCF, and shareholder returns makes it a quality investment despite premium valuation.
            </p>
          </div>
        </div>
      </section>

      <section id="key-ratios">
        <h2>Key Financial Ratios to Calculate</h2>

        <p>
          Once you understand the three statements, calculate these ratios to compare companies:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Profitability Ratios</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Gross Margin:</strong> Gross Profit ÷ Revenue</li>
              <li><strong>Operating Margin:</strong> Operating Income ÷ Revenue</li>
              <li><strong>Net Margin:</strong> Net Income ÷ Revenue</li>
              <li><strong>ROE:</strong> Net Income ÷ Shareholders' Equity</li>
              <li><strong>ROA:</strong> Net Income ÷ Total Assets</li>
            </ul>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Liquidity Ratios</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Current Ratio:</strong> Current Assets ÷ Current Liabilities</li>
              <li><strong>Quick Ratio:</strong> (Current Assets - Inventory) ÷ Current Liabilities</li>
              <li><strong>Cash Ratio:</strong> Cash ÷ Current Liabilities</li>
            </ul>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Leverage Ratios</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Debt-to-Equity:</strong> Total Debt ÷ Shareholders' Equity</li>
              <li><strong>Debt-to-Assets:</strong> Total Debt ÷ Total Assets</li>
              <li><strong>Interest Coverage:</strong> EBIT ÷ Interest Expense</li>
            </ul>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Efficiency Ratios</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Asset Turnover:</strong> Revenue ÷ Total Assets</li>
              <li><strong>Inventory Turnover:</strong> COGS ÷ Average Inventory</li>
              <li><strong>Receivables Turnover:</strong> Revenue ÷ Avg. Receivables</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="red-flags">
        <h2>Red Flags to Watch For</h2>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h3 className="text-lg font-semibold text-red-900 mb-3">Warning Signs</h3>
          <ul className="space-y-3">
            <li>
              <strong>Revenue growth but declining cash flow:</strong> Company might be booking fake sales or not collecting payments
            </li>
            <li>
              <strong>Growing accounts receivable faster than revenue:</strong> Customers aren't paying on time
            </li>
            <li>
              <strong>Declining gross margins:</strong> Losing pricing power or facing rising costs
            </li>
            <li>
              <strong>High debt-to-equity (&gt;2.0) with low interest coverage (&lt;3x):</strong> Risky debt load
            </li>
            <li>
              <strong>Negative operating cash flow for multiple years:</strong> Unsustainable business model
            </li>
            <li>
              <strong>Net income positive but FCF negative:</strong> Profit quality concerns (aggressive accounting)
            </li>
            <li>
              <strong>Current ratio &lt;1.0:</strong> Might struggle to pay short-term obligations
            </li>
            <li>
              <strong>Goodwill &gt;50% of assets:</strong> Risk of large impairment charges (from past acquisitions)
            </li>
          </ul>
        </div>

        <ExampleBox title="Case Study: WeWork's Red Flags (Pre-Bankruptcy)">
          <ul className="text-sm space-y-2">
            <li><strong>Negative operating cash flow:</strong> -$2.5 billion (2019)</li>
            <li><strong>Massive losses:</strong> -$1.9 billion net loss on $3.5B revenue</li>
            <li><strong>Liabilities exceeding assets:</strong> Negative equity</li>
            <li><strong>Current ratio:</strong> 0.4 (couldn't pay bills)</li>
          </ul>
          <p className="text-sm text-stone-700 mt-3">
            All three statements screamed "avoid." WeWork filed for bankruptcy in 2023. Financial statements warned investors years in advance.
          </p>
        </ExampleBox>
      </section>

      <section id="conclusion">
        <h2>Conclusion: Your Financial Statement Checklist</h2>

        <p>
          Before investing in any stock, review the last 3-5 years of financial statements and check:
        </p>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Pre-Investment Checklist</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Income Statement:</strong> Revenue growing consistently? Margins stable or improving?</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Balance Sheet:</strong> Reasonable debt levels? Current ratio &gt;1.5? Enough cash?</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Cash Flow:</strong> Positive operating cash flow? FCF growing? OCF &gt; Net Income?</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Ratios:</strong> ROE &gt;15%? Debt-to-Equity &lt;1.0? Net margin &gt;10%?</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Red Flags:</strong> No accounting irregularities? No deteriorating metrics?</span>
            </label>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Practice with real companies.</strong> Visit investor.apple.com or investor.microsoft.com and download their latest 10-K annual report. Read the financial statements section and calculate the ratios yourself. Repetition builds confidence.
        </KeyTakeaway>

        <p>
          Reading financial statements is a skill that improves with practice. Start with simple, profitable companies (Apple, Microsoft, Coca-Cola) before tackling complex financials. Within months, you'll spot investment opportunities and avoid disasters that others miss.
        </p>
      </section>
    </ArticleLayout>
  )
}
