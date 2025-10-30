import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export default function UnderstandingPERatioArticle() {
  return (
    <ArticleLayout
      title="Understanding P/E Ratio: Is a Stock Cheap or Expensive?"
      description="Learn how to use the Price-to-Earnings ratio to evaluate stocks and avoid overpaying for investments."
      category="Fundamental Analysis"
      readTime="8 min read"
      publishDate="January 15, 2025"
      author="6s Capital Research Team"
    >
      <p>
        When you're looking at a stock and trying to decide if it's worth buying, one of the first questions you should ask is: "Am I paying a fair price?" The Price-to-Earnings (P/E) ratio is one of the most widely used metrics to answer this question.
      </p>

      <p>
        Think of the P/E ratio as a price tag for earnings. Just like comparing the price per pound of apples at different grocery stores, the P/E ratio helps you compare the "price" of earnings across different companies.
      </p>

      <KeyTakeaway variant="info">
        <strong>What You'll Learn:</strong>
        <ul>
          <li>What the P/E ratio measures and why it matters</li>
          <li>How to calculate and interpret P/E ratios</li>
          <li>When high P/E ratios are justified (and when they're not)</li>
          <li>Common P/E ratio mistakes to avoid</li>
        </ul>
      </KeyTakeaway>

      <h2>What is the P/E Ratio?</h2>

      <p>
        The Price-to-Earnings ratio is calculated by dividing a company's stock price by its earnings per share (EPS):
      </p>

      <ExampleBox title="P/E Ratio Formula">
        <p className="mb-4"><strong>P/E Ratio = Stock Price ÷ Earnings Per Share</strong></p>

        <p className="mb-2"><strong>Example:</strong></p>
        <ul>
          <li>Stock Price: $100</li>
          <li>Annual Earnings Per Share: $5</li>
          <li>P/E Ratio: $100 ÷ $5 = 20</li>
        </ul>

        <p className="mt-4">
          This means you're paying $20 for every $1 of annual earnings. Another way to think about it: at the current earnings rate, it would take 20 years to "earn back" your investment price (assuming earnings stay constant).
        </p>
      </ExampleBox>

      <h2>What Does the P/E Ratio Tell You?</h2>

      <p>
        The P/E ratio gives you a quick sense of whether a stock is expensive or cheap relative to its earnings:
      </p>

      <h3>Low P/E Ratio (typically under 15)</h3>
      <p>
        A low P/E might indicate:
      </p>
      <ul>
        <li><strong>Value opportunity:</strong> The stock might be undervalued by the market</li>
        <li><strong>Slow growth:</strong> The company's growth prospects are limited</li>
        <li><strong>Higher risk:</strong> The market perceives problems with the business</li>
        <li><strong>Cyclical business:</strong> Earnings are temporarily high (mining, energy companies)</li>
      </ul>

      <h3>High P/E Ratio (typically above 25)</h3>
      <p>
        A high P/E might indicate:
      </p>
      <ul>
        <li><strong>Growth expectations:</strong> Investors expect earnings to grow significantly</li>
        <li><strong>Quality premium:</strong> Strong competitive advantages justify higher valuation</li>
        <li><strong>Overvaluation:</strong> The stock might be in a bubble</li>
        <li><strong>Temporary low earnings:</strong> Company is investing heavily for future growth</li>
      </ul>

      <KeyTakeaway variant="warning">
        <strong>Important Context:</strong> There's no universally "good" or "bad" P/E ratio. What matters is context - comparing the P/E to the company's growth rate, industry peers, and historical averages.
      </KeyTakeaway>

      <h2>Real-World P/E Ratio Examples</h2>

      <ExampleBox title="Case Study: Different P/E Ratios in Action">
        <p className="mb-4"><strong>Company A - Mature Utility Stock</strong></p>
        <ul>
          <li>P/E Ratio: 12</li>
          <li>Annual Growth: 3%</li>
          <li>Dividend Yield: 4.5%</li>
          <li><strong>Analysis:</strong> Low P/E reflects slow but stable growth. Appropriate for income investors.</li>
        </ul>

        <p className="mt-4 mb-4"><strong>Company B - Tech Growth Stock</strong></p>
        <ul>
          <li>P/E Ratio: 45</li>
          <li>Annual Growth: 25%</li>
          <li>Dividend Yield: 0%</li>
          <li><strong>Analysis:</strong> High P/E reflects growth expectations. Could be justified if growth continues.</li>
        </ul>

        <p className="mt-4 mb-4"><strong>Company C - Value Stock</strong></p>
        <ul>
          <li>P/E Ratio: 8</li>
          <li>Annual Growth: 8%</li>
          <li>Dividend Yield: 3%</li>
          <li><strong>Analysis:</strong> Low P/E with decent growth might indicate market pessimism or hidden value.</li>
        </ul>
      </ExampleBox>

      <h2>Types of P/E Ratios</h2>

      <h3>Trailing P/E</h3>
      <p>
        Uses actual earnings from the past 12 months. This is the most common P/E ratio you'll see reported.
      </p>
      <p>
        <strong>Formula:</strong> Current Price ÷ Last 12 Months Earnings
      </p>

      <h3>Forward P/E</h3>
      <p>
        Uses estimated earnings for the next 12 months. Based on analyst forecasts.
      </p>
      <p>
        <strong>Formula:</strong> Current Price ÷ Estimated Next 12 Months Earnings
      </p>

      <KeyTakeaway variant="info">
        <strong>Which to Use?</strong> Both have value. Trailing P/E is based on facts, while forward P/E incorporates growth expectations. Compare both to get the full picture.
      </KeyTakeaway>

      <h2>P/E Ratio by Industry: What's Normal?</h2>

      <p>
        Different industries naturally have different P/E ratios. Here are typical ranges:
      </p>

      <ExampleBox title="Average P/E Ratios by Sector (2024-2025)">
        <ul>
          <li><strong>Technology:</strong> 25-35 (high growth expectations)</li>
          <li><strong>Healthcare:</strong> 20-30 (innovation premium)</li>
          <li><strong>Consumer Goods:</strong> 15-25 (stable growth)</li>
          <li><strong>Financials:</strong> 10-15 (cyclical, regulated)</li>
          <li><strong>Utilities:</strong> 12-18 (slow growth, stable)</li>
          <li><strong>Energy:</strong> 8-15 (highly cyclical)</li>
          <li><strong>Real Estate (REITs):</strong> 15-25 (income focus)</li>
        </ul>

        <p className="mt-4 text-sm">
          Note: These are general ranges. Always compare to specific industry peers and historical averages.
        </p>
      </ExampleBox>

      <h2>The PEG Ratio: A Better Metric?</h2>

      <p>
        The P/E ratio doesn't account for growth. A P/E of 40 might be reasonable for a company growing 50% per year, but terrible for one growing 5%.
      </p>

      <p>
        Enter the PEG (Price/Earnings to Growth) ratio:
      </p>

      <ExampleBox title="PEG Ratio Explained">
        <p className="mb-4"><strong>PEG Ratio = P/E Ratio ÷ Annual EPS Growth Rate</strong></p>

        <p className="mb-2"><strong>Example 1: High P/E Tech Stock</strong></p>
        <ul>
          <li>P/E Ratio: 40</li>
          <li>Expected Growth Rate: 30% per year</li>
          <li>PEG Ratio: 40 ÷ 30 = 1.33</li>
          <li><strong>Interpretation:</strong> Fairly valued (PEG around 1.0-1.5 is reasonable)</li>
        </ul>

        <p className="mt-4 mb-2"><strong>Example 2: Low P/E Value Stock</strong></p>
        <ul>
          <li>P/E Ratio: 12</li>
          <li>Expected Growth Rate: 5% per year</li>
          <li>PEG Ratio: 12 ÷ 5 = 2.4</li>
          <li><strong>Interpretation:</strong> Might actually be expensive despite low P/E</li>
        </ul>

        <p className="mt-4">
          <strong>Rule of Thumb:</strong> PEG under 1.0 = potentially undervalued, PEG around 1.0-1.5 = fairly valued, PEG above 2.0 = potentially overvalued.
        </p>
      </ExampleBox>

      <h2>Common P/E Ratio Mistakes</h2>

      <h3>1. Ignoring Negative Earnings</h3>
      <p>
        If a company has negative earnings, the P/E ratio is meaningless (you can't divide by negative numbers meaningfully). Many growth companies have no P/E ratio because they're not yet profitable.
      </p>

      <h3>2. Not Comparing to Peers</h3>
      <p>
        A P/E of 30 might seem high, but if the industry average is 40, it's actually relatively cheap. Always compare to similar companies.
      </p>

      <h3>3. Ignoring One-Time Events</h3>
      <p>
        A company might have temporarily low or high earnings due to asset sales, lawsuits, or restructuring. This can distort the P/E ratio.
      </p>

      <KeyTakeaway variant="alert">
        <strong>Watch Out For:</strong> Companies can manipulate earnings through accounting tricks. Always look at cash flow (Price-to-Cash-Flow ratio) as a sanity check alongside P/E.
      </KeyTakeaway>

      <h3>4. Forgetting About Debt</h3>
      <p>
        Two companies with identical P/E ratios aren't equally risky if one is loaded with debt and the other has no debt. Consider the Enterprise Value-to-EBITDA ratio for a more complete picture.
      </p>

      <h3>5. Assuming Low P/E = Bargain</h3>
      <p>
        Sometimes a low P/E is deserved. The company might be in a declining industry, facing lawsuits, or losing competitive position. Low P/E can be a value trap.
      </p>

      <h2>How to Use P/E Ratio in Your Investment Process</h2>

      <ExampleBox title="Practical P/E Analysis Checklist">
        <ol>
          <li>
            <strong>Calculate both trailing and forward P/E</strong>
            <p className="text-sm mt-1">Look for consistency between past and expected earnings</p>
          </li>
          <li>
            <strong>Compare to industry peers</strong>
            <p className="text-sm mt-1">Find 3-5 similar companies and compare P/E ratios</p>
          </li>
          <li>
            <strong>Check historical P/E range</strong>
            <p className="text-sm mt-1">Is current P/E high or low vs. company's 5-year average?</p>
          </li>
          <li>
            <strong>Calculate PEG ratio</strong>
            <p className="text-sm mt-1">Factor in growth rate for more accurate valuation</p>
          </li>
          <li>
            <strong>Look at earnings quality</strong>
            <p className="text-sm mt-1">Are earnings growing consistently? Any one-time items?</p>
          </li>
          <li>
            <strong>Consider the business model</strong>
            <p className="text-sm mt-1">Strong moats justify higher P/E; commodity businesses deserve lower</p>
          </li>
        </ol>
      </ExampleBox>

      <Blockquote author="Benjamin Graham, The Intelligent Investor">
        "In the short run, the market is a voting machine, but in the long run, it is a weighing machine."
      </Blockquote>

      <p>
        Graham's point: P/E ratios reflect current market sentiment (voting), but over time, actual business performance (weighing) determines returns.
      </p>

      <h2>When to Ignore the P/E Ratio</h2>

      <p>
        The P/E ratio isn't useful in these situations:
      </p>

      <ul>
        <li><strong>Unprofitable companies:</strong> No earnings = no P/E ratio. Look at Price-to-Sales or Price-to-Book instead.</li>
        <li><strong>Financial companies:</strong> Banks and insurance companies have different earnings structures. Use Price-to-Book ratio.</li>
        <li><strong>REITs:</strong> Real estate investment trusts have special tax structures. Use FFO (Funds From Operations) multiples.</li>
        <li><strong>Cyclical peaks/troughs:</strong> Energy and materials companies at earnings extremes have misleading P/E ratios.</li>
      </ul>

      <h2>S&P 500 P/E Ratio: Market-Wide Context</h2>

      <p>
        The S&P 500's P/E ratio gives you a sense of overall market valuation:
      </p>

      <ExampleBox title="Historical S&P 500 P/E Ratios">
        <ul>
          <li><strong>Historical Average:</strong> 15-16</li>
          <li><strong>2024-2025 Current:</strong> ~20-22</li>
          <li><strong>Dot-com Bubble (2000):</strong> 30+</li>
          <li><strong>Financial Crisis (2009):</strong> Negative (many companies had losses)</li>
          <li><strong>COVID-19 Bottom (2020):</strong> 14</li>
        </ul>

        <p className="mt-4">
          When the market P/E is above 20, stocks are generally expensive. Below 15, they're generally cheap. But this is a very rough guide - interest rates, growth expectations, and economic conditions all matter.
        </p>
      </ExampleBox>

      <h2>Final Thoughts: P/E Ratio as One Tool Among Many</h2>

      <p>
        The P/E ratio is powerful because it's simple and widely available. But it's just one metric. Never make an investment decision based solely on P/E ratio.
      </p>

      <KeyTakeaway variant="success">
        <strong>Key Takeaways:</strong>
        <ul>
          <li>P/E ratio shows how much you pay per dollar of earnings</li>
          <li>Always compare P/E to industry peers and historical averages</li>
          <li>Use PEG ratio to factor in growth rates</li>
          <li>Low P/E doesn't always mean cheap; high P/E doesn't always mean expensive</li>
          <li>Combine P/E with other metrics (debt, cash flow, competitive position)</li>
          <li>Context matters more than absolute P/E numbers</li>
        </ul>
      </KeyTakeaway>

      <p>
        Remember: A "cheap" P/E ratio on a dying business is no bargain. A high P/E ratio on a high-quality, fast-growing company might be perfectly reasonable. The P/E ratio is your starting point, not your endpoint.
      </p>

      <p>
        Master the P/E ratio, but never stop there. The best investors combine valuation metrics with qualitative analysis of business quality, competitive advantages, and management capability.
      </p>
    </ArticleLayout>
  )
}
