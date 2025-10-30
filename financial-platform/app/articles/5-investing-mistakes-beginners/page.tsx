import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export default function InvestingMistakesArticle() {
  return (
    <ArticleLayout
      title="5 Investing Mistakes That Cost Beginners Thousands"
      description="Learn the most common investing mistakes new investors make and how to avoid them before they damage your portfolio."
      category="Beginner Guides"
      readTime="10 min read"
      publishDate="January 16, 2025"
      author="6s Capital Research Team"
    >
      <p>
        If you're new to investing, you're going to make mistakes. That's inevitable. But some mistakes are more expensive than others.
      </p>

      <p>
        After analyzing thousands of investor portfolios and studying behavioral finance research, we've identified five mistakes that consistently cost beginners the most money. The good news? Every single one is preventable once you know what to look for.
      </p>

      <KeyTakeaway variant="alert">
        <strong>The Cost of Mistakes:</strong> These five mistakes collectively cost the average beginning investor 3-5% in annual returns. Over 30 years, that could mean hundreds of thousands of dollars in lost wealth. But you can avoid all of them starting today.
      </KeyTakeaway>

      <h2>Mistake #1: Trying to Time the Market</h2>

      <p>
        This is the big one. More money has been lost trying to time the market than in any other single investing mistake.
      </p>

      <h3>What It Looks Like</h3>
      <p>
        You're convinced the market is about to crash, so you sell everything and move to cash. Or you think stocks are "too high," so you wait for a pullback that never comes. Or you panic during a downturn and sell at the bottom.
      </p>

      <ExampleBox title="Real Example: The Cost of Missing the Best Days">
        <p className="mb-4"><strong>S&P 500 Performance (1993-2023, 30 years)</strong></p>

        <ul>
          <li><strong>Fully invested entire time:</strong> 9.8% annual return</li>
          <li><strong>Missed best 10 days:</strong> 6.1% annual return</li>
          <li><strong>Missed best 20 days:</strong> 3.6% annual return</li>
          <li><strong>Missed best 30 days:</strong> 1.4% annual return</li>
        </ul>

        <p className="mt-4">
          <strong>On a $10,000 investment:</strong>
        </p>
        <ul>
          <li>Fully invested: $169,000</li>
          <li>Missed 30 best days: $14,300</li>
          <li><strong>Cost of market timing: $154,700</strong></li>
        </ul>

        <p className="mt-4 text-sm">
          Source: JP Morgan Asset Management. The best days often occur right after the worst days. If you're out of the market, you miss both the recovery and the crash protection.
        </p>
      </ExampleBox>

      <h3>Why People Do It</h3>
      <p>
        Market timing feels like it should work. When the market drops 20%, it seems "obvious" that you should sell and buy back cheaper. When it's up 50%, it seems "obvious" it will correct.
      </p>

      <p>
        But here's the problem: nobody knows what will happen next. Not professionals, not economists, not you. The research is clear: even professional fund managers consistently fail at market timing.
      </p>

      <h3>The Fix</h3>
      <KeyTakeaway variant="success">
        <strong>Time IN the market beats timing THE market.</strong> Instead of trying to predict tops and bottoms:
        <ul>
          <li>Stay invested through ups and downs</li>
          <li>Use dollar-cost averaging to invest consistently</li>
          <li>Rebalance on a schedule (annually), not based on market predictions</li>
          <li>Accept that volatility is the price you pay for long-term returns</li>
        </ul>
      </KeyTakeaway>

      <h2>Mistake #2: Putting All Your Eggs in One Basket</h2>

      <p>
        "I know this company. I believe in it. I'm going all in."
      </p>

      <p>
        This is how beginners turn small accounts into zero. One stock, no matter how good it looks, can go to zero. Diversified portfolios can't.
      </p>

      <ExampleBox title="Real Example: The Enron Employees">
        <p className="mb-4">
          Enron employees had an average of 62% of their 401(k) in Enron stock. Many executives had over 90%. They believed in the company. They worked there. They "knew" it was solid.
        </p>

        <p className="mb-4">
          When Enron collapsed in 2001, employees lost an average of $1.2 million in retirement savings. Some lost everything.
        </p>

        <p className="font-semibold">
          The executives with "insider knowledge" lost the most. Knowledge doesn't protect you from company-specific risk.
        </p>
      </ExampleBox>

      <h3>Other Concentration Risks</h3>
      <p>
        It's not just individual stocks. Beginners also concentrate risk by:
      </p>

      <ul>
        <li><strong>Sector concentration:</strong> "I love tech stocks" → portfolio of 10 tech stocks = still not diversified</li>
        <li><strong>Geographic concentration:</strong> Investing only in your home country</li>
        <li><strong>Asset class concentration:</strong> 100% stocks, no bonds or other assets</li>
        <li><strong>Employer stock:</strong> Working at AND owning lots of company stock (double exposure)</li>
      </ul>

      <h3>The Fix</h3>
      <KeyTakeaway variant="info">
        <strong>Diversification Rules of Thumb:</strong>
        <ul>
          <li>No single stock should be more than 5% of your portfolio</li>
          <li>No single sector more than 25%</li>
          <li>Own at least 20-30 different stocks (or use index funds)</li>
          <li>Include international exposure (20-40% of stocks)</li>
          <li>Consider bonds/other assets as you get older</li>
        </ul>
      </KeyTakeaway>

      <p>
        Index funds are the easiest way to achieve instant diversification. One S&P 500 fund gives you 500 companies. One total market fund gives you thousands.
      </p>

      <h2>Mistake #3: Chasing Performance</h2>

      <p>
        "This fund returned 50% last year! I should buy it."
      </p>

      <p>
        This is exactly backward. What went up the most is often what's most likely to disappoint going forward.
      </p>

      <ExampleBox title="The Performance Chase Cycle">
        <ol>
          <li>Tech stocks soar 40% → Investors pile in</li>
          <li>Tech becomes expensive → Returns slow</li>
          <li>Energy stocks soar 30% → Investors sell tech, buy energy</li>
          <li>Investors sell at tech bottom, buy energy top</li>
          <li>Repeat forever, losing money each time</li>
        </ol>

        <p className="mt-4 font-semibold">
          Average stock fund return (1993-2023): 9.5% per year
        </p>
        <p className="font-semibold">
          Average stock fund investor return: 6.8% per year
        </p>
        <p className="mt-2">
          The 2.7% gap? Almost entirely from chasing performance and poor timing.
        </p>

        <p className="mt-4 text-sm">
          Source: Dalbar QAIB Study. Investors underperform their own funds by buying high and selling low.
        </p>
      </ExampleBox>

      <h3>Why It's So Tempting</h3>
      <p>
        Our brains are wired to extrapolate recent trends. If something went up, we assume it will keep going up. Financial media makes it worse by constantly highlighting "top performers" and "hot sectors."
      </p>

      <p>
        But investment returns mean-revert. What's hot becomes cold. What's hated becomes loved. This cycle never ends.
      </p>

      <h3>The Fix</h3>
      <KeyTakeaway variant="success">
        <strong>Instead of chasing winners:</strong>
        <ul>
          <li>Rebalance into underperformers (sell high, buy low)</li>
          <li>Look at 5-10 year performance, not just last year</li>
          <li>Favor low-cost index funds over "hot" active funds</li>
          <li>Set an asset allocation and stick to it</li>
          <li>Remember: "This time is different" are the four most expensive words in investing</li>
        </ul>
      </KeyTakeaway>

      <Blockquote author="John Bogle, Founder of Vanguard">
        "In investing, you get what you don't pay for. Costs matter. So buy low-cost index funds."
      </Blockquote>

      <h2>Mistake #4: Ignoring Fees and Taxes</h2>

      <p>
        "It's only 1.5% per year. That's nothing."
      </p>

      <p>
        That's not nothing. That's $500,000 on a $1 million portfolio over 30 years.
      </p>

      <ExampleBox title="The Devastating Math of Fees">
        <p className="mb-4"><strong>Scenario: $100,000 invested for 30 years at 8% annual return</strong></p>

        <ul>
          <li><strong>0.1% fee (index fund):</strong> $967,000 final value</li>
          <li><strong>1.0% fee (typical active fund):</strong> $761,000 final value</li>
          <li><strong>2.0% fee (some advisor + active fund):</strong> $574,000 final value</li>
        </ul>

        <p className="mt-4 font-semibold">
          The 1.9% fee difference costs you $393,000. That's 40% of your ending wealth gone to fees.
        </p>

        <p className="mt-4">
          And this doesn't include trading costs, bid-ask spreads, or tax drag from excessive trading.
        </p>
      </ExampleBox>

      <h3>Hidden Fees Beginners Miss</h3>
      <ul>
        <li><strong>Expense ratios:</strong> The annual fee charged by mutual funds/ETFs</li>
        <li><strong>Trading commissions:</strong> Cost to buy/sell (now $0 at most brokers, but watch options/penny stocks)</li>
        <li><strong>Bid-ask spreads:</strong> Hidden cost in illiquid stocks or ETFs</li>
        <li><strong>Advisory fees:</strong> 1% AUM is typical, but adds up massively</li>
        <li><strong>12b-1 fees:</strong> Marketing fees some mutual funds charge</li>
        <li><strong>Load fees:</strong> Upfront or back-end sales charges (avoid these entirely)</li>
      </ul>

      <h3>The Tax Mistake</h3>
      <p>
        Trading frequently triggers short-term capital gains taxed at your ordinary income rate (up to 37%). Hold over one year and you pay long-term rates (0%, 15%, or 20% depending on income).
      </p>

      <p>
        Every time you sell for a gain and re-buy something else, you give money to the IRS unnecessarily.
      </p>

      <h3>The Fix</h3>
      <KeyTakeaway variant="success">
        <strong>Keep More of Your Returns:</strong>
        <ul>
          <li>Use low-cost index funds (under 0.2% expense ratio)</li>
          <li>Avoid load funds and high-fee advisors</li>
          <li>Minimize trading (buy and hold)</li>
          <li>Use tax-advantaged accounts (401k, IRA, HSA)</li>
          <li>Hold for &gt;1 year to get long-term capital gains rates</li>
          <li>Consider tax-loss harvesting in taxable accounts</li>
        </ul>
      </KeyTakeaway>

      <h2>Mistake #5: Investing Money You'll Need Soon</h2>

      <p>
        "I need this money in 6 months for a house down payment, but I'll just put it in stocks to 'grow it' in the meantime."
      </p>

      <p>
        This is how you turn a house down payment into half a house down payment.
      </p>

      <ExampleBox title="Real Example: The 2022 Market Correction">
        <p className="mb-4">
          January 2022: Investor puts $50,000 in stock market, planning to buy a house in December
        </p>
        <p className="mb-4">
          December 2022: S&P 500 is down 18%, account worth $41,000
        </p>
        <p className="mb-4">
          <strong>Result:</strong> Investor must either delay house purchase or come up with extra $9,000. If they sell, they lock in losses. If they wait, they might miss the house.
        </p>
        <p className="font-semibold">
          Investing short-term money in stocks is speculation, not investing.
        </p>
      </ExampleBox>

      <h3>The Volatility Problem</h3>
      <p>
        Stocks can drop 20-50% at any time. If you need the money soon, you might be forced to sell at the worst possible time. Even "safe" bond funds can drop 10-15% in rising rate environments.
      </p>

      <h3>Time Horizon Matters</h3>
      <ul>
        <li><strong>Under 1 year:</strong> High-yield savings account or money market (currently 4-5%)</li>
        <li><strong>1-3 years:</strong> CDs, short-term bonds, or high-yield savings</li>
        <li><strong>3-5 years:</strong> Balanced fund (60/40 stocks/bonds) at most</li>
        <li><strong>5+ years:</strong> Can take on full stock market risk</li>
        <li><strong>10+ years:</strong> Best time horizon for aggressive growth portfolios</li>
      </ul>

      <h3>The Emergency Fund Rule</h3>
      <p>
        Before you invest a single dollar in stocks, you need 3-6 months of expenses in cash. This prevents you from having to sell stocks at a loss during emergencies.
      </p>

      <h3>The Fix</h3>
      <KeyTakeaway variant="info">
        <strong>The Bucket System:</strong>
        <ul>
          <li><strong>Bucket 1 (Cash):</strong> 6 months expenses + any money needed in &lt;2 years</li>
          <li><strong>Bucket 2 (Bonds/Conservative):</strong> Money needed in 2-5 years</li>
          <li><strong>Bucket 3 (Stocks/Growth):</strong> Money you won't touch for 5+ years</li>
        </ul>
        Only invest in stocks what you can afford to see drop 50% without needing to sell.
      </KeyTakeaway>

      <h2>How to Avoid All Five Mistakes: Your Action Plan</h2>

      <ExampleBox title="The Beginner's Mistake-Prevention Checklist">
        <p className="mb-4 font-semibold">Before making ANY investment decision, ask:</p>

        <ol>
          <li>
            <strong>Am I trying to time the market?</strong>
            <p className="text-sm mt-1">If yes → Stop. Invest consistently instead.</p>
          </li>
          <li>
            <strong>Is this more than 5% of my portfolio?</strong>
            <p className="text-sm mt-1">If yes → Reduce position size. Diversify.</p>
          </li>
          <li>
            <strong>Am I buying because it went up a lot recently?</strong>
            <p className="text-sm mt-1">If yes → Pause. Check if you're performance chasing.</p>
          </li>
          <li>
            <strong>What are the fees?</strong>
            <p className="text-sm mt-1">If over 0.5% → Find a cheaper alternative.</p>
          </li>
          <li>
            <strong>When will I need this money?</strong>
            <p className="text-sm mt-1">If under 3 years → Don't invest in stocks.</p>
          </li>
        </ol>

        <p className="mt-6 font-semibold">
          Pass all five? Proceed with confidence.
        </p>
      </ExampleBox>

      <h2>The Cost of Mistakes vs The Benefit of Avoiding Them</h2>

      <ExampleBox title="30-Year Projection: $500/month Investment">
        <p className="mb-4"><strong>Beginner making all 5 mistakes:</strong></p>
        <ul>
          <li>Poor market timing: -1.5% annual return</li>
          <li>Concentration risk blowup: -0.5% annual return</li>
          <li>Performance chasing: -1.0% annual return</li>
          <li>High fees: -1.5% annual return</li>
          <li>Occasional panic selling: -0.5% annual return</li>
          <li><strong>Net return: 3.0% per year</strong></li>
          <li><strong>Ending balance: $291,000</strong></li>
        </ul>

        <p className="mt-4 mb-4"><strong>Investor avoiding all mistakes:</strong></p>
        <ul>
          <li>Buy and hold: +0% impact (market return)</li>
          <li>Diversified: +0% impact (market return)</li>
          <li>Systematic investing: +0% impact (market return)</li>
          <li>Low fees: +1.5% annual return</li>
          <li>Long-term holding: +0.5% annual return (tax efficiency)</li>
          <li><strong>Net return: 10.0% per year</strong></li>
          <li><strong>Ending balance: $1,036,000</strong></li>
        </ul>

        <p className="mt-6 font-semibold text-lg">
          Difference: $745,000
        </p>

        <p className="mt-2">
          Same contribution amount. Same time period. Avoiding mistakes turns $291k into $1 million.
        </p>
      </ExampleBox>

      <h2>Final Thoughts: Mistakes Are Expensive, But Fixable</h2>

      <p>
        Here's the good news: you don't have to be a genius to be a successful investor. You just have to avoid being stupid.
      </p>

      <KeyTakeaway variant="success">
        <strong>The Five Fixes (One More Time):</strong>
        <ul>
          <li><strong>Don't time the market:</strong> Stay invested. Use dollar-cost averaging.</li>
          <li><strong>Diversify:</strong> No single stock over 5%. Use index funds.</li>
          <li><strong>Don't chase performance:</strong> Rebalance systematically, not emotionally.</li>
          <li><strong>Minimize fees:</strong> Use low-cost index funds. Avoid frequent trading.</li>
          <li><strong>Match time horizon to risk:</strong> Stocks for 5+ years only. Cash for short-term.</li>
        </ul>
      </KeyTakeaway>

      <p>
        Most investing success comes from avoiding mistakes, not from brilliant stock picks. The investors who get rich aren't the ones who found the next Amazon. They're the ones who stayed invested, kept costs low, and didn't do anything stupid.
      </p>

      <p>
        You can be one of them. Start by eliminating these five mistakes today.
      </p>

      <Blockquote author="Warren Buffett">
        "The stock market is a device for transferring money from the impatient to the patient."
      </Blockquote>

      <p>
        Patience, discipline, and avoiding these mistakes will make you wealthy. Guaranteed.
      </p>
    </ArticleLayout>
  )
}
