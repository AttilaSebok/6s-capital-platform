import { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'

export const metadata: Metadata = {
  title: 'Cash Flow Analysis: Why Cash is King in Investing | money365.market',
  description: 'Learn why cash flow matters more than profit. Master operating cash flow, free cash flow, and the cash flow statement to identify quality investments.',
  keywords: 'cash flow analysis, operating cash flow, free cash flow, cash flow statement, FCF investing',
}

export default function CashFlowAnalysisGuideArticle() {
  return (
    <ArticleLayout
      title="Cash Flow Analysis: Why Cash is King in Investing"
      description="Learn why cash flow matters more than profit. Master operating cash flow, free cash flow, and the cash flow statement to identify quality investments."
      category="Fundamental Analysis"
      publishDate="2025-11-08"
      readTime="14 min read"
      author="6s Capital Team"
    >
      <KeyTakeaway>
        <ul className="list-disc pl-6 space-y-2">
          <li>Why cash flow is more important than accounting profit for investors</li>
          <li>The three sections of the cash flow statement: Operating, Investing, Financing</li>
          <li>How to calculate and interpret Free Cash Flow (FCF)</li>
          <li>Key cash flow metrics: FCF yield, cash conversion ratio, cash flow margin</li>
          <li>Real-world examples: Tesla vs Ford cash flow comparison</li>
          <li>Red flags: negative operating cash flow, rising CapEx without growth</li>
        </ul>
      </KeyTakeaway>

      <h2>Why Cash Flow Matters More Than Profit</h2>
      <p>
        Warren Buffett famously said: <em>"Cash is king."</em> While net income (profit) gets all the headlines, <strong>cash flow</strong> is what actually pays the bills, funds growth, and returns money to shareholders through dividends and buybacks.
      </p>

      <p>
        Here's the fundamental truth about business: <strong>You can't pay employees, suppliers, or dividends with accounting profits—you need actual cash.</strong>
      </p>

      <h3>Profit vs Cash Flow: What's the Difference?</h3>
      <p>
        <strong>Net Income (Profit):</strong> Calculated using accrual accounting, which records revenue when earned (not when cash is received) and expenses when incurred (not when cash is paid).
      </p>

      <p>
        <strong>Cash Flow:</strong> Tracks the actual movement of cash in and out of the business.
      </p>

      <ExampleBox title="Why Profits Don't Equal Cash">
        <p>
          A software company sells a $100,000 annual subscription in January. Under accrual accounting, it records $100,000 in revenue immediately. However, the customer pays $25,000 quarterly.
        </p>
        <p className="mt-2">
          <strong>Income Statement:</strong> Shows $100,000 profit in January
          <strong>Cash Flow Statement:</strong> Shows only $25,000 cash received in January
        </p>
        <p className="mt-2">
          The company has "profit" but needs to wait 9 months for the remaining $75,000 in cash. This is why profitable companies can still go bankrupt—they run out of cash before collecting receivables.
        </p>
      </ExampleBox>

      <h3>Why Investors Prefer Cash Flow Over Earnings</h3>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Harder to Manipulate:</strong> Accounting rules allow earnings manipulation through depreciation schedules, revenue recognition timing, and reserves. Cash flow is objective—cash is either there or it isn't.</li>
        <li><strong>Survival Indicator:</strong> Companies with positive cash flow can weather recessions; those burning cash eventually need expensive financing or bankruptcy.</li>
        <li><strong>Valuation Driver:</strong> Discounted Cash Flow (DCF) models value companies based on future cash flows, not earnings.</li>
        <li><strong>Dividend Sustainability:</strong> Dividends are paid from cash, not accounting profits. If operating cash flow &lt; dividends paid, the dividend is unsustainable.</li>
      </ul>

      <h2>The Cash Flow Statement: Three Critical Sections</h2>
      <p>
        The cash flow statement reconciles net income to actual cash changes. It's divided into three sections:
      </p>

      <h3>1. Operating Cash Flow (OCF) - The Lifeblood</h3>
      <p>
        <strong>What it shows:</strong> Cash generated from the company's core business operations.
      </p>

      <p>
        <strong>Formula:</strong> Net Income + Non-Cash Expenses (Depreciation, Amortization) + Changes in Working Capital
      </p>

      <p><strong>Key Components:</strong></p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>
          <strong>Net Income:</strong> Starting point (from income statement)
        </li>
        <li>
          <strong>Add Back Non-Cash Charges:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Depreciation & Amortization (D&A): Accounting expenses that don't involve cash leaving the business</li>
            <li>Stock-based compensation: Employee stock grants (non-cash expense)</li>
          </ul>
        </li>
        <li>
          <strong>Adjust for Working Capital Changes:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Increase in Accounts Receivable = Cash outflow (customers owe you money but haven't paid)</li>
            <li>Increase in Inventory = Cash outflow (cash tied up in unsold goods)</li>
            <li>Increase in Accounts Payable = Cash inflow (you received goods but haven't paid suppliers yet)</li>
          </ul>
        </li>
      </ul>

      <ExampleBox title="Operating Cash Flow Example">
        <p><strong>Company A Financial Data:</strong></p>
        <ul className="list-none space-y-1 mt-2">
          <li>Net Income: $50 million</li>
          <li>Depreciation & Amortization: +$10 million</li>
          <li>Increase in Accounts Receivable: -$5 million (cash tied up)</li>
          <li>Increase in Inventory: -$3 million (cash tied up)</li>
          <li>Increase in Accounts Payable: +$4 million (delayed payment)</li>
        </ul>
        <p className="mt-2 font-bold">
          Operating Cash Flow = $50M + $10M - $5M - $3M + $4M = <span className="text-green-600">$56 million</span>
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Note: OCF ($56M) &gt; Net Income ($50M) indicates high-quality earnings with strong cash conversion.
        </p>
      </ExampleBox>

      <h3>2. Investing Cash Flow - Growth Spending</h3>
      <p>
        <strong>What it shows:</strong> Cash spent on long-term investments (usually negative).
      </p>

      <p><strong>Typical Items:</strong></p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>
          <strong>Capital Expenditures (CapEx):</strong> Cash spent on PP&E (property, plant, equipment)
          <ul className="list-circle pl-6 mt-1">
            <li>Example: Tesla building a new factory ($5 billion)</li>
            <li>CapEx is necessary to maintain/grow business operations</li>
          </ul>
        </li>
        <li>
          <strong>Acquisitions:</strong> Buying other companies
          <ul className="list-circle pl-6 mt-1">
            <li>Example: Microsoft buying Activision Blizzard ($69 billion)</li>
          </ul>
        </li>
        <li>
          <strong>Asset Sales:</strong> Selling equipment, real estate, or business units (positive cash flow)
        </li>
        <li>
          <strong>Investments in Securities:</strong> Buying/selling stocks, bonds, or other financial instruments
        </li>
      </ul>

      <p className="my-4">
        <strong>What "Normal" Looks Like:</strong> Investing cash flow is usually negative (companies invest cash to grow). Red flag if consistently positive—may indicate the company is selling assets to raise cash.
      </p>

      <h3>3. Financing Cash Flow - How the Company Funds Itself</h3>
      <p>
        <strong>What it shows:</strong> Cash flows between the company and its investors/lenders.
      </p>

      <p><strong>Typical Items:</strong></p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>
          <strong>Debt Issuance/Repayment:</strong>
          <ul className="list-circle pl-6 mt-1">
            <li>Borrowing money = Positive cash flow</li>
            <li>Paying off debt = Negative cash flow</li>
          </ul>
        </li>
        <li>
          <strong>Dividends Paid:</strong> Cash returned to shareholders (negative)
        </li>
        <li>
          <strong>Stock Buybacks:</strong> Repurchasing shares (negative)
        </li>
        <li>
          <strong>Issuing New Stock:</strong> Selling shares to raise cash (positive)
        </li>
      </ul>

      <ExampleBox title="Financing Cash Flow: Apple Example">
        <p>
          Apple generates so much operating cash flow ($100+ billion annually) that it can:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Pay $15 billion in annual dividends</li>
          <li>Repurchase $80+ billion of stock annually</li>
          <li>Still have cash left over</li>
        </ul>
        <p className="mt-2">
          Apple's financing cash flow is highly negative (returning cash to shareholders), funded entirely by operating cash flow—a sign of a mature, cash-rich business.
        </p>
      </ExampleBox>

      <h2>Free Cash Flow (FCF): The Ultimate Metric</h2>
      <p>
        <strong>Free Cash Flow (FCF)</strong> is the cash available after the company pays for operations and capital expenditures. It's the cash that can be returned to shareholders or used for acquisitions.
      </p>

      <div className="my-6 p-6 bg-orange-50 border-l-4 border-orange-600 rounded">
        <p className="text-xl font-bold text-center text-stone-900">
          Free Cash Flow = Operating Cash Flow - Capital Expenditures (CapEx)
        </p>
        <p className="text-center text-sm text-stone-600 mt-2">
          (Cash from operations - Cash spent maintaining/growing the business)
        </p>
      </div>

      <h3>Why FCF Matters</h3>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>True Owner Earnings:</strong> FCF represents cash the owners could theoretically extract from the business.</li>
        <li><strong>Valuation Metric:</strong> FCF Yield = FCF / Market Cap (similar to dividend yield, but includes all cash available, not just dividends)</li>
        <li><strong>Dividend Sustainability:</strong> If dividends &gt; FCF, the payout is unsustainable.</li>
        <li><strong>Growth Indicator:</strong> Growing FCF over time signals a healthy, expanding business.</li>
      </ul>

      <ExampleBox title="Free Cash Flow Calculation: Microsoft">
        <p><strong>Microsoft FY 2023 (simplified in billions):</strong></p>
        <ul className="list-none space-y-1 mt-2">
          <li>Operating Cash Flow: $87.6B</li>
          <li>Capital Expenditures: $28.1B</li>
        </ul>
        <p className="mt-2 font-bold text-lg">
          Free Cash Flow = $87.6B - $28.1B = <span className="text-green-600">$59.5 billion</span>
        </p>
        <p className="mt-2 text-sm text-stone-600">
          Microsoft can use this $59.5B for dividends ($20B), buybacks ($20B), acquisitions ($10B), and still have $9.5B left for debt reduction or reserves.
        </p>
      </ExampleBox>

      <h2>Key Cash Flow Metrics</h2>

      <h3>1. FCF Yield</h3>
      <p>
        <strong>Formula:</strong> (Free Cash Flow / Market Capitalization) × 100
      </p>
      <p>
        Measures how much cash flow you get per dollar invested.
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>FCF Yield &gt; 5%:</strong> Attractive (similar to a 5% dividend)</li>
        <li><strong>FCF Yield 2-5%:</strong> Reasonable</li>
        <li><strong>FCF Yield &lt; 2%:</strong> Expensive (growth stocks often trade here)</li>
      </ul>

      <h3>2. Cash Conversion Ratio</h3>
      <p>
        <strong>Formula:</strong> Operating Cash Flow / Net Income
      </p>
      <p>
        Measures how efficiently profits convert into cash.
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Ratio &gt; 1:</strong> Excellent (generating more cash than reported profit)</li>
        <li><strong>Ratio 0.8-1.0:</strong> Good</li>
        <li><strong>Ratio &lt; 0.8:</strong> Concerning (profits not converting to cash)</li>
      </ul>

      <h3>3. Operating Cash Flow Margin</h3>
      <p>
        <strong>Formula:</strong> (Operating Cash Flow / Revenue) × 100
      </p>
      <p>
        Measures how much cash the company generates per dollar of sales.
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Margin &gt; 20%:</strong> Excellent (software, tech companies)</li>
        <li><strong>Margin 10-20%:</strong> Good</li>
        <li><strong>Margin &lt; 10%:</strong> Low-margin business (retail, groceries)</li>
      </ul>

      <h3>4. CapEx as % of Revenue</h3>
      <p>
        <strong>Formula:</strong> (Capital Expenditures / Revenue) × 100
      </p>
      <p>
        Indicates how capital-intensive the business is.
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>&lt; 5%:</strong> Asset-light (software, consulting)</li>
        <li><strong>5-15%:</strong> Moderate (most industries)</li>
        <li><strong>&gt; 20%:</strong> Capital-intensive (telecom, manufacturing, utilities)</li>
      </ul>

      <h2>Real-World Example: Tesla vs Ford Cash Flow</h2>
      <p>
        Let's compare two automakers with very different cash flow profiles.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse border border-stone-300">
          <thead className="bg-stone-100">
            <tr>
              <th className="border border-stone-300 px-4 py-2 text-left">Metric</th>
              <th className="border border-stone-300 px-4 py-2 text-right">Tesla (2023)</th>
              <th className="border border-stone-300 px-4 py-2 text-right">Ford (2023)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-4 py-2 font-semibold">Revenue</td>
              <td className="border border-stone-300 px-4 py-2 text-right">$96.8B</td>
              <td className="border border-stone-300 px-4 py-2 text-right">$176.2B</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-4 py-2 font-semibold">Net Income</td>
              <td className="border border-stone-300 px-4 py-2 text-right">$15.0B</td>
              <td className="border border-stone-300 px-4 py-2 text-right">$4.3B</td>
            </tr>
            <tr className="bg-green-50">
              <td className="border border-stone-300 px-4 py-2 font-semibold">Operating Cash Flow</td>
              <td className="border border-stone-300 px-4 py-2 text-right">$13.3B</td>
              <td className="border border-stone-300 px-4 py-2 text-right">$11.5B</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-4 py-2 font-semibold">Capital Expenditures</td>
              <td className="border border-stone-300 px-4 py-2 text-right">-$8.9B</td>
              <td className="border border-stone-300 px-4 py-2 text-right">-$8.0B</td>
            </tr>
            <tr className="bg-orange-50 font-bold">
              <td className="border border-stone-300 px-4 py-2">Free Cash Flow</td>
              <td className="border border-stone-300 px-4 py-2 text-right">$4.4B</td>
              <td className="border border-stone-300 px-4 py-2 text-right">$3.5B</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-4 py-2">Cash Conversion Ratio</td>
              <td className="border border-stone-300 px-4 py-2 text-right">0.89</td>
              <td className="border border-stone-300 px-4 py-2 text-right">2.67</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-4 py-2">OCF Margin</td>
              <td className="border border-stone-300 px-4 py-2 text-right">13.7%</td>
              <td className="border border-stone-300 px-4 py-2 text-right">6.5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Analysis:</h3>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>
          <strong>Tesla's Strength:</strong> Higher OCF margin (13.7% vs 6.5%) shows more efficient operations despite lower revenue.
        </li>
        <li>
          <strong>Ford's Strength:</strong> Cash conversion ratio of 2.67 means Ford generates $2.67 in cash for every $1 of profit (working capital improvements).
        </li>
        <li>
          <strong>CapEx:</strong> Both companies spend similar amounts on CapEx (~$8-9B), but Tesla is building new factories while Ford maintains aging infrastructure.
        </li>
        <li>
          <strong>Free Cash Flow:</strong> Tesla edges out Ford despite half the revenue—sign of superior unit economics.
        </li>
      </ul>

      <h2>Red Flags in Cash Flow Analysis</h2>

      <h3>1. Negative Operating Cash Flow</h3>
      <p>
        If a company can't generate cash from operations, it's burning through reserves and will eventually need financing.
      </p>
      <p><strong>When It's Acceptable:</strong> Early-stage growth companies (startups, biotech) burning cash to capture market share.</p>
      <p><strong>When It's Alarming:</strong> Mature companies with negative OCF (sign of deteriorating business).</p>

      <h3>2. FCF &lt; Net Income for Multiple Years</h3>
      <p>
        If free cash flow is consistently below net income, the company is spending heavily on CapEx or has working capital issues.
      </p>
      <p><strong>Red Flag Formula:</strong> FCF / Net Income &lt; 0.7 for 3+ consecutive years</p>

      <h3>3. Rising CapEx Without Revenue Growth</h3>
      <p>
        If capital expenditures are increasing but revenue is flat, the company is getting diminishing returns on investments.
      </p>
      <p><strong>Example:</strong> Legacy telecom companies spending billions on 5G infrastructure with minimal revenue growth.</p>

      <h3>4. Dividends &gt; Free Cash Flow</h3>
      <p>
        If dividends paid exceed FCF, the company is borrowing or selling assets to fund payouts—unsustainable.
      </p>
      <p><strong>Sustainable Dividend Formula:</strong> Dividends / FCF &lt; 0.8 (80% payout ratio leaves cushion)</p>

      <h3>5. Deteriorating Working Capital</h3>
      <p>
        Rapidly increasing accounts receivable or inventory relative to revenue signals:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Customers not paying on time (credit risk)</li>
        <li>Inventory piling up (slowing sales)</li>
        <li>Aggressive revenue recognition (booking sales before cash collected)</li>
      </ul>

      <h3>6. Stock-Based Compensation &gt; 5% of Revenue</h3>
      <p>
        Excessive stock grants dilute shareholders and inflate operating cash flow (SBC is added back as "non-cash expense").
      </p>
      <p><strong>Tech Companies to Watch:</strong> Some startups use 10-20% SBC to conserve cash—massive shareholder dilution.</p>

      <h2>How to Analyze a Cash Flow Statement (Step-by-Step)</h2>

      <h3>Step 1: Check Operating Cash Flow Trend</h3>
      <p>
        Pull 5 years of cash flow statements. Is OCF growing, stable, or declining?
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Growing OCF:</strong> Healthy business expanding profitably</li>
        <li><strong>Declining OCF:</strong> Warning sign—investigate why</li>
      </ul>

      <h3>Step 2: Calculate Free Cash Flow</h3>
      <p>
        FCF = OCF - CapEx. Compare FCF to net income.
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>FCF &gt; Net Income:</strong> Quality earnings (low CapEx requirements)</li>
        <li><strong>FCF &lt; Net Income:</strong> High CapEx needs (capital-intensive business)</li>
      </ul>

      <h3>Step 3: Analyze Working Capital Changes</h3>
      <p>
        Look at changes in AR, inventory, and AP. Are they growing faster than revenue?
      </p>

      <h3>Step 4: Review CapEx Trends</h3>
      <p>
        Is CapEx as % of revenue stable, increasing, or decreasing? Cross-check with revenue growth.
      </p>

      <h3>Step 5: Examine Financing Activities</h3>
      <p>
        Is the company raising debt, issuing stock, or returning cash to shareholders?
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Mature Companies:</strong> Should have negative financing CF (paying dividends, buybacks)</li>
        <li><strong>Growth Companies:</strong> Often have positive financing CF (raising capital)</li>
      </ul>

      <h2>Where to Find Cash Flow Statements</h2>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Company Investor Relations:</strong> Search "[Company] investor relations" → Financials → 10-K or 10-Q</li>
        <li><strong>SEC EDGAR:</strong> <a href="https://www.sec.gov/edgar" className="text-orange-600 hover:text-orange-700 underline" target="_blank" rel="noopener noreferrer">sec.gov/edgar</a></li>
        <li><strong>Financial Websites:</strong> Yahoo Finance, Google Finance, Seeking Alpha (Cash Flow tab)</li>
      </ul>

      <h2>Conclusion: Cash is King</h2>
      <p>
        While net income gets the headlines, cash flow tells the true story of a business. Companies with strong, growing free cash flow can:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Survive recessions without emergency financing</li>
        <li>Fund growth organically (no dilution)</li>
        <li>Return cash to shareholders through dividends and buybacks</li>
        <li>Make strategic acquisitions</li>
      </ul>

      <p>
        As Warren Buffett said: <em>"In business, I look for economic castles protected by unbreachable moats"</em>—and those castles are built on cash flow, not accounting profits.
      </p>

      <KeyTakeaway title="Action Steps">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Pull the cash flow statements for 3 companies you own or want to buy</li>
          <li>Calculate their Free Cash Flow (OCF - CapEx) for the last 5 years</li>
          <li>Check cash conversion ratio (OCF / Net Income)—should be &gt; 0.8</li>
          <li>Compare dividends paid to FCF—unsustainable if dividends &gt; FCF</li>
          <li>Look for red flags: negative OCF, rising inventory, excessive stock compensation</li>
        </ol>
      </KeyTakeaway>

      <div className="mt-12 p-6 bg-stone-100 rounded-lg">
        <p className="text-sm text-stone-600">
          <strong>Next Steps:</strong> Now that you understand cash flow, learn how to use it in valuation. Read our guides on{' '}
          <a href="/articles/how-to-read-balance-sheet" className="text-orange-600 hover:text-orange-700 underline">
            How to Read a Balance Sheet
          </a>{' '}
          and{' '}
          <a href="/articles/return-on-equity-roe-guide" className="text-orange-600 hover:text-orange-700 underline">
            Return on Equity (ROE)
          </a>{' '}
          to complete your fundamental analysis toolkit.
        </p>
      </div>
    </ArticleLayout>
  )
}
