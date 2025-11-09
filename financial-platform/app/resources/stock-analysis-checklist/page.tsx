import ResourceLayout from '@/components/ResourceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Stock Analysis Checklist | 6s Capital',
  description: 'Download our professional stock analysis checklist. Complete 20-point framework used by institutional investors to evaluate any stock in 30 minutes.',
  keywords: 'stock analysis checklist, fundamental analysis, stock screening, investment checklist, stock evaluation framework',
}

export default function StockAnalysisChecklistPage() {
  return (
    <ResourceLayout
      title="The Complete Stock Analysis Checklist"
      description="Professional 20-point framework to evaluate any stock in 30 minutes or less. Used by institutional investors and serious individual investors."
      downloadTitle="Download Your Free Stock Analysis Checklist"
      downloadDescription="Get instant access to our battle-tested framework (PDF + Excel template)"
    >
      <div className="space-y-8">
        <div>
          <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-4 pb-3 border-b-4 border-bronze-600">
            What You'll Get
          </h2>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-bronze-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-deep-brown">20-Point Stock Analysis Checklist (PDF)</strong> - Comprehensive framework covering financials, valuation, competitive position, and risks</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-bronze-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-deep-brown">Excel Analysis Template</strong> - Pre-built spreadsheet to calculate key metrics and ratios automatically</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-bronze-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-deep-brown">Red Flags Quick Reference Guide</strong> - 15 warning signs that signal you should avoid a stock</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-bronze-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong className="text-deep-brown">Bonus: Industry Benchmark Cheat Sheet</strong> - Know what "good" looks like for different sectors</span>
            </li>
          </ul>
        </div>

        <div className="bg-olive-50 border-l-4 border-bronze-600 p-6">
          <h3 className="font-crimson text-xl font-bold text-deep-brown mb-3">
            Why This Checklist Works
          </h3>
          <p className="text-stone-700 mb-3">
            Most investors make emotional decisions or rely on "tips" from unreliable sources. This checklist forces you to analyze stocks systematically using the same framework as professional analysts:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700">
            <li><strong>Financial Health Check</strong> - Revenue growth, profitability, cash flow quality, balance sheet strength</li>
            <li><strong>Valuation Assessment</strong> - P/E ratio, PEG ratio, EV/EBITDA, DCF valuation framework</li>
            <li><strong>Competitive Moat Analysis</strong> - Does the company have sustainable competitive advantages?</li>
            <li><strong>Risk Evaluation</strong> - Debt levels, insider selling, accounting red flags, industry headwinds</li>
          </ul>
        </div>

        <div>
          <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-4 pb-3 border-b-4 border-bronze-600">
            The 20-Point Framework (Preview)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-deep-brown mb-2">📊 Section 1: Financial Performance (6 points)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-stone-700">
                <li>Revenue growth trend (last 5 years)</li>
                <li>Operating margin trend</li>
                <li>Return on Equity (ROE) consistency</li>
                <li>Free Cash Flow generation</li>
                <li>Debt-to-Equity ratio</li>
                <li>Current ratio (liquidity check)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-deep-brown mb-2">💰 Section 2: Valuation (5 points)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-stone-700">
                <li>P/E ratio vs industry average</li>
                <li>PEG ratio (growth-adjusted valuation)</li>
                <li>Price-to-Book ratio</li>
                <li>EV/EBITDA comparison</li>
                <li>Dividend yield (if applicable)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-deep-brown mb-2">🏰 Section 3: Competitive Position (5 points)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-stone-700">
                <li>Market share trend</li>
                <li>Brand strength / pricing power</li>
                <li>Barriers to entry (moat assessment)</li>
                <li>Customer concentration risk</li>
                <li>R&D investment vs competitors</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-deep-brown mb-2">⚠️ Section 4: Risk Factors (4 points)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-stone-700">
                <li>Insider buying/selling activity</li>
                <li>Accounting quality (check for red flags)</li>
                <li>Regulatory/legal risks</li>
                <li>Industry cyclicality exposure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-soft-orange border-2 border-soft-orange-dark p-6">
          <h3 className="font-crimson text-xl font-bold text-deep-brown mb-3">
            Real Example: How This Checklist Saved Me From a Bad Investment
          </h3>
          <p className="text-stone-900 mb-3">
            In 2022, a popular "growth stock" was trading at all-time highs. The media was bullish. Momentum traders were piling in. But when I ran it through this checklist:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-900">
            <li>✅ Revenue growth: Strong (5-year CAGR of 40%)</li>
            <li>❌ Operating margin: Declining for 3 consecutive quarters</li>
            <li>❌ Free Cash Flow: Negative despite revenue growth</li>
            <li>❌ P/E ratio: 180x (industry avg: 25x)</li>
            <li>❌ Insider selling: CEO and CFO sold $50M+ in shares</li>
          </ul>
          <p className="text-stone-900 mt-3 font-bold">
            Result: I passed on the stock. Six months later, it dropped 78%. The checklist saved me from a massive loss.
          </p>
        </div>

        <div>
          <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-4 pb-3 border-b-4 border-bronze-600">
            Who This Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-deep-brown mb-2">✅ Perfect For:</h3>
              <ul className="list-disc pl-6 space-y-1 text-stone-700">
                <li>Individual investors building a stock portfolio</li>
                <li>Anyone tired of "hot tips" that turn into losses</li>
                <li>Investors who want a systematic approach</li>
                <li>People who want to invest like professionals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-deep-brown mb-2">❌ Not For:</h3>
              <ul className="list-disc pl-6 space-y-1 text-stone-700">
                <li>Day traders looking for quick flips</li>
                <li>People who want "get rich quick" schemes</li>
                <li>Investors who refuse to do research</li>
                <li>Anyone not willing to spend 30 minutes per stock</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-2 border-bronze-600 text-white p-8 -mx-8">
          <h2 className="font-crimson text-2xl md:text-3xl font-bold mb-4 text-center">
            Ready to Start Analyzing Stocks Like a Pro?
          </h2>
          <p className="text-stone-300 text-center mb-6 max-w-2xl mx-auto">
            Enter your email above to get instant access to the complete Stock Analysis Checklist, Excel template, and bonus materials.
          </p>
          <p className="text-sm text-stone-400 text-center">
            100% free. No credit card required. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </ResourceLayout>
  )
}
