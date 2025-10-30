import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export default function DiversifiedPortfolioArticle() {
  return (
    <ArticleLayout
      title="How to Build a Diversified Portfolio: Step-by-Step"
      description="Learn how to construct a properly diversified investment portfolio that balances risk and reward for long-term wealth building."
      category="Portfolio Strategy"
      readTime="12 min read"
      publishDate="January 17, 2025"
      author="6s Capital Research Team"
    >
      <p>
        "Don't put all your eggs in one basket" is investing's oldest advice. But how many baskets do you need? Which ones? And how many eggs in each?
      </p>

      <p>
        Building a diversified portfolio isn't complicated, but most beginners either over-diversify (buying 50+ random stocks) or under-diversify (three tech stocks and calling it a day). This guide will show you exactly how to build a portfolio that's properly balanced for your goals.
      </p>

      <KeyTakeaway variant="info">
        <strong>What You'll Learn:</strong>
        <ul>
          <li>The four levels of diversification every investor needs</li>
          <li>Exactly how many stocks, bonds, and funds to own</li>
          <li>Age-appropriate portfolio allocation strategies</li>
          <li>How to build portfolios for $1,000, $10,000, and $100,000+</li>
          <li>Rebalancing strategies to maintain your target allocation</li>
        </ul>
      </KeyTakeaway>

      <h2>Why Diversification Matters: The Math</h2>

      <p>
        Diversification is the only free lunch in investing. It reduces risk without reducing expected returns. Here's how:
      </p>

      <ExampleBox title="The Power of Diversification">
        <p className="mb-4"><strong>Scenario: Stock A and Stock B each have 10% expected return</strong></p>

        <p className="mb-2"><strong>Portfolio 1: 100% Stock A</strong></p>
        <ul>
          <li>Expected return: 10%</li>
          <li>Standard deviation (volatility): 30%</li>
          <li>Worst year: -40%</li>
        </ul>

        <p className="mt-4 mb-2"><strong>Portfolio 2: 50% Stock A + 50% Stock B (uncorrelated)</strong></p>
        <ul>
          <li>Expected return: 10% (same!)</li>
          <li>Standard deviation: 21%</li>
          <li>Worst year: -25%</li>
        </ul>

        <p className="mt-4 font-semibold">
          Same expected return, 30% less volatility. That's the magic of diversification.
        </p>
      </ExampleBox>

      <p>
        But diversification stops working once stocks become correlated. Owning 10 tech stocks isn't diversified - they all move together. Real diversification means spreading across asset classes, sectors, and geographies that don't move in lockstep.
      </p>

      <h2>The Four Levels of Diversification</h2>

      <h3>Level 1: Asset Class Diversification</h3>
      <p>
        This is the foundation. Different asset types behave differently:
      </p>

      <ul>
        <li><strong>Stocks (equities):</strong> High growth potential, high volatility</li>
        <li><strong>Bonds (fixed income):</strong> Lower returns, lower volatility, income generation</li>
        <li><strong>Real estate:</strong> Income + appreciation, inflation hedge</li>
        <li><strong>Commodities:</strong> Inflation hedge, crisis protection</li>
        <li><strong>Cash:</strong> No growth, but liquidity and safety</li>
      </ul>

      <p>
        Most investors focus on the stock/bond split. Here's a common starting point:
      </p>

      <ExampleBox title="Classic Age-Based Asset Allocation">
        <ul>
          <li><strong>Age 20-30:</strong> 90% stocks / 10% bonds</li>
          <li><strong>Age 30-40:</strong> 80% stocks / 20% bonds</li>
          <li><strong>Age 40-50:</strong> 70% stocks / 30% bonds</li>
          <li><strong>Age 50-60:</strong> 60% stocks / 40% bonds</li>
          <li><strong>Age 60-70:</strong> 50% stocks / 50% bonds</li>
          <li><strong>Age 70+:</strong> 40% stocks / 60% bonds</li>
        </ul>

        <p className="mt-4">
          <strong>Rule of thumb:</strong> Subtract your age from 110 to get your stock percentage. (e.g., age 40 = 70% stocks)
        </p>

        <p className="mt-4 text-sm">
          Note: This is conservative. Many modern portfolios use "120 minus age" given longer lifespans and low bond yields.
        </p>
      </ExampleBox>

      <h3>Level 2: Within-Stock Diversification</h3>
      <p>
        Once you know how much to put in stocks, you need to diversify within stocks:
      </p>

      <ul>
        <li><strong>Market cap:</strong> Large-cap, mid-cap, small-cap</li>
        <li><strong>Style:</strong> Growth vs. value</li>
        <li><strong>Sector:</strong> Technology, healthcare, financials, etc.</li>
        <li><strong>Geography:</strong> U.S., international developed, emerging markets</li>
      </ul>

      <ExampleBox title="Example Stock Diversification (for stock portion)">
        <ul>
          <li><strong>70% U.S. stocks</strong>
            <ul className="ml-4 mt-2">
              <li>50% large-cap (S&P 500)</li>
              <li>15% mid-cap</li>
              <li>5% small-cap</li>
            </ul>
          </li>
          <li className="mt-2"><strong>30% International stocks</strong>
            <ul className="ml-4 mt-2">
              <li>20% developed markets (Europe, Japan, etc.)</li>
              <li>10% emerging markets (China, India, Brazil, etc.)</li>
            </ul>
          </li>
        </ul>

        <p className="mt-4">
          This gives you exposure to thousands of companies across dozens of countries.
        </p>
      </ExampleBox>

      <h3>Level 3: Within-Bond Diversification</h3>
      <p>
        Not all bonds are created equal:
      </p>

      <ul>
        <li><strong>Government bonds:</strong> Safest, lowest yield (Treasury bonds)</li>
        <li><strong>Corporate bonds:</strong> Higher yield, some credit risk</li>
        <li><strong>Municipal bonds:</strong> Tax-free, good for high earners</li>
        <li><strong>International bonds:</strong> Currency risk, diversification benefit</li>
      </ul>

      <p>
        Duration matters too. Short-term bonds (1-3 years) are safer but lower yield. Long-term bonds (10-30 years) have more interest rate risk but higher yields.
      </p>

      <ExampleBox title="Simple Bond Diversification">
        <ul>
          <li><strong>60% U.S. intermediate-term bonds</strong> (5-10 year Treasury/corporate blend)</li>
          <li><strong>20% U.S. short-term bonds</strong> (1-3 year for stability)</li>
          <li><strong>20% TIPS</strong> (Treasury Inflation-Protected Securities for inflation hedge)</li>
        </ul>

        <p className="mt-4">
          Or just use a total bond market index fund for instant diversification.
        </p>
      </ExampleBox>

      <h3>Level 4: Alternative Assets (Optional)</h3>
      <p>
        For larger portfolios ($100k+), consider adding:
      </p>

      <ul>
        <li><strong>REITs (real estate):</strong> 5-10% for income and inflation protection</li>
        <li><strong>Commodities:</strong> 5% for crisis hedge (gold, oil, etc.)</li>
        <li><strong>Alternative strategies:</strong> Market-neutral funds, managed futures (advanced)</li>
      </ul>

      <KeyTakeaway variant="warning">
        <strong>Don't Over-Complicate:</strong> Most investors only need stocks and bonds. Alternatives add complexity and often don't improve returns enough to justify the effort. Start simple, expand later if needed.
      </KeyTakeaway>

      <h2>Sample Portfolios by Size and Age</h2>

      <h3>The $1,000 Starter Portfolio (Age 25)</h3>

      <ExampleBox title="Two-Fund Portfolio - Maximum Simplicity">
        <ul>
          <li><strong>90% - Total Stock Market Index Fund</strong> ($900)
            <ul className="ml-4 mt-2 text-sm">
              <li>Instant diversification across 3,000+ U.S. stocks</li>
              <li>Example: VTI (Vanguard) or ITOT (iShares)</li>
            </ul>
          </li>
          <li className="mt-2"><strong>10% - Total Bond Market Index Fund</strong> ($100)
            <ul className="ml-4 mt-2 text-sm">
              <li>10,000+ bonds for stability</li>
              <li>Example: BND (Vanguard) or AGG (iShares)</li>
            </ul>
          </li>
        </ul>

        <p className="mt-4 font-semibold">
          Total holdings: 13,000+ securities. Two purchases. Done.
        </p>

        <p className="mt-2 text-sm">
          Rebalance annually. Add new money to whichever is under target.
        </p>
      </ExampleBox>

      <h3>The $10,000 Balanced Portfolio (Age 35)</h3>

      <ExampleBox title="Three-Fund Portfolio - The Classic">
        <ul>
          <li><strong>56% - U.S. Total Stock Market</strong> ($5,600)
            <ul className="ml-4 mt-2 text-sm">
              <li>VTI or ITOT</li>
            </ul>
          </li>
          <li className="mt-2"><strong>24% - International Stock Market</strong> ($2,400)
            <ul className="ml-4 mt-2 text-sm">
              <li>VXUS (Vanguard Total International) or IXUS (iShares)</li>
              <li>Adds 8,000+ non-U.S. stocks</li>
            </ul>
          </li>
          <li className="mt-2"><strong>20% - Total Bond Market</strong> ($2,000)
            <ul className="ml-4 mt-2 text-sm">
              <li>BND or AGG</li>
            </ul>
          </li>
        </ul>

        <p className="mt-4">
          <strong>Risk level:</strong> Moderate. 80% stocks, 20% bonds appropriate for mid-career investor.
        </p>

        <p className="mt-2">
          <strong>Expected return:</strong> ~8-9% long-term (historical average)
        </p>

        <p className="mt-2">
          <strong>Worst-case year:</strong> Could drop 30-40% in a severe bear market
        </p>
      </ExampleBox>

      <h3>The $100,000 Advanced Portfolio (Age 45)</h3>

      <ExampleBox title="Diversified Multi-Asset Portfolio">
        <p className="mb-4"><strong>Stock Portion (70% = $70,000)</strong></p>
        <ul>
          <li>35% S&P 500 Index ($35,000) - U.S. large-cap</li>
          <li>10% Small-Cap Value Index ($10,000) - Higher risk/return segment</li>
          <li>15% International Developed Markets ($15,000) - EAFE countries</li>
          <li>10% Emerging Markets ($10,000) - Higher growth potential</li>
        </ul>

        <p className="mt-4 mb-4"><strong>Bond Portion (25% = $25,000)</strong></p>
        <ul>
          <li>15% Intermediate-Term Treasury ($15,000) - Safety</li>
          <li>5% Corporate Bonds ($5,000) - Yield boost</li>
          <li>5% TIPS ($5,000) - Inflation protection</li>
        </ul>

        <p className="mt-4 mb-4"><strong>Alternative Portion (5% = $5,000)</strong></p>
        <ul>
          <li>5% REIT Index ($5,000) - Real estate exposure</li>
        </ul>

        <p className="mt-4 font-semibold">
          Expected volatility: Moderate (stock-heavy but with bond cushion)
        </p>
        <p className="mt-2">
          Rebalance annually or when allocation drifts 5%+ from target.
        </p>
      </ExampleBox>

      <h3>The $500,000+ Pre-Retirement Portfolio (Age 55)</h3>

      <ExampleBox title="Conservative Growth & Income">
        <ul>
          <li><strong>40% U.S. Stocks</strong> ($200,000)
            <ul className="ml-4 mt-2 text-sm">
              <li>30% large-cap blend, 10% dividend aristocrats</li>
            </ul>
          </li>
          <li className="mt-2"><strong>20% International Stocks</strong> ($100,000)
            <ul className="ml-4 mt-2 text-sm">
              <li>15% developed, 5% emerging</li>
            </ul>
          </li>
          <li className="mt-2"><strong>30% Bonds</strong> ($150,000)
            <ul className="ml-4 mt-2 text-sm">
              <li>20% intermediate-term, 5% short-term, 5% TIPS</li>
            </ul>
          </li>
          <li className="mt-2"><strong>10% Alternatives</strong> ($50,000)
            <ul className="ml-4 mt-2 text-sm">
              <li>5% REITs, 5% commodities/gold</li>
            </ul>
          </li>
        </ul>

        <p className="mt-4">
          <strong>Goal:</strong> Preserve capital while maintaining growth potential. 60% stocks still allows growth, 40% bonds/alternatives provide cushion.
        </p>
      </ExampleBox>

      <h2>How Many Individual Stocks Should You Own?</h2>

      <p>
        If you're buying individual stocks instead of funds, here's the research on diversification benefit:
      </p>

      <ExampleBox title="Diminishing Returns of Adding More Stocks">
        <ul>
          <li><strong>1 stock:</strong> 100% company-specific risk</li>
          <li><strong>5 stocks:</strong> Eliminates ~50% of company-specific risk</li>
          <li><strong>10 stocks:</strong> Eliminates ~70% of company-specific risk</li>
          <li><strong>20 stocks:</strong> Eliminates ~85% of company-specific risk</li>
          <li><strong>30 stocks:</strong> Eliminates ~90% of company-specific risk</li>
          <li><strong>50+ stocks:</strong> Marginal additional benefit</li>
        </ul>

        <p className="mt-4 font-semibold">
          The Sweet Spot: 20-30 stocks across different sectors and geographies.
        </p>

        <p className="mt-2">
          Beyond 30, you're essentially recreating an index fund. At that point, just buy the index fund and save yourself the effort.
        </p>
      </ExampleBox>

      <KeyTakeaway variant="info">
        <strong>Individual Stocks vs. Index Funds:</strong>
        <ul>
          <li><strong>Under $25,000:</strong> Stick to index funds. Too little capital to properly diversify individual stocks.</li>
          <li><strong>$25,000-$100,000:</strong> Could do 80% index funds, 20% individual stocks as "satellite" positions.</li>
          <li><strong>$100,000+:</strong> Could build a diversified individual stock portfolio if you have time and interest.</li>
        </ul>
      </KeyTakeaway>

      <h2>Rebalancing: Maintaining Your Target Allocation</h2>

      <p>
        Over time, winners grow and losers shrink. Your 70/30 stock/bond portfolio might become 80/20 after a bull market. Rebalancing brings it back to target.
      </p>

      <h3>Three Rebalancing Strategies</h3>

      <ExampleBox title="Option 1: Calendar Rebalancing">
        <p className="mb-2">
          <strong>Method:</strong> Rebalance on a fixed schedule (annually, quarterly)
        </p>
        <p className="mb-2">
          <strong>Pros:</strong> Simple, disciplined, unemotional
        </p>
        <p className="mb-2">
          <strong>Cons:</strong> Might rebalance when unnecessary
        </p>
        <p className="font-semibold">
          Best for: Most investors. Set a calendar reminder for January 1st each year.
        </p>
      </ExampleBox>

      <ExampleBox title="Option 2: Threshold Rebalancing">
        <p className="mb-2">
          <strong>Method:</strong> Rebalance when any asset drifts 5%+ from target
        </p>
        <p className="mb-2">
          <strong>Example:</strong> 70% stock target. Rebalance if it hits 75% or drops to 65%.
        </p>
        <p className="mb-2">
          <strong>Pros:</strong> Only rebalance when needed
        </p>
        <p className="mb-2">
          <strong>Cons:</strong> Requires monitoring
        </p>
        <p className="font-semibold">
          Best for: Hands-on investors who check portfolio quarterly
        </p>
      </ExampleBox>

      <ExampleBox title="Option 3: Cash-Flow Rebalancing">
        <p className="mb-2">
          <strong>Method:</strong> Direct new contributions to under-weight assets
        </p>
        <p className="mb-2">
          <strong>Example:</strong> Portfolio is 75% stocks (target 70%). Put next 6 months contributions into bonds until back to 70/30.
        </p>
        <p className="mb-2">
          <strong>Pros:</strong> Tax-efficient (no selling), works great for accumulators
        </p>
        <p className="mb-2">
          <strong>Cons:</strong> Only works if you're adding money regularly
        </p>
        <p className="font-semibold">
          Best for: Working-age investors with regular contributions
        </p>
      </ExampleBox>

      <h2>Common Diversification Mistakes</h2>

      <h3>Mistake #1: False Diversification</h3>
      <p>
        Owning 10 tech stocks isn't diversified. Owning Apple, Microsoft, Amazon, Google, Facebook, Tesla, Nvidia, AMD, Intel, and Salesforce means you have 10 bets on the exact same theme.
      </p>

      <p>
        <strong>Fix:</strong> Diversify across sectors. Ensure no single sector is more than 25% of stock portfolio.
      </p>

      <h3>Mistake #2: Over-Diversification ("Diworsification")</h3>
      <p>
        Owning 100 stocks or 50 mutual funds doesn't make you more diversified than owning a single total market index fund. You're just creating complexity without benefit.
      </p>

      <p>
        <strong>Fix:</strong> More isn't always better. 3-5 funds can give you complete global diversification.
      </p>

      <h3>Mistake #3: Home Country Bias</h3>
      <p>
        U.S. investors tend to put 90%+ in U.S. stocks, even though the U.S. is only ~60% of global market cap. This overexposes you to U.S.-specific risks.
      </p>

      <p>
        <strong>Fix:</strong> Aim for 20-40% international exposure in stock portion.
      </p>

      <KeyTakeaway variant="warning">
        <strong>The 2000s Example:</strong> From 2000-2010, U.S. stocks returned 0% (lost decade). International stocks returned +30-40%. If you were 100% U.S., you lost a decade. Proper diversification would have saved you.
      </KeyTakeaway>

      <h3>Mistake #4: Ignoring Correlation</h3>
      <p>
        Stocks and bonds usually move opposite directions (negative correlation). Stocks and gold sometimes move opposite. But stocks and REITs move together (positive correlation). Know what you're diversifying with.
      </p>

      <h2>Building Your Portfolio: Step-by-Step Action Plan</h2>

      <ExampleBox title="Your Diversification Checklist">
        <p className="mb-4 font-semibold">Step 1: Determine Your Asset Allocation</p>
        <ol className="mb-4">
          <li>Calculate stock percentage: 110 (or 120) minus your age</li>
          <li>Remainder goes to bonds</li>
          <li>Adjust based on risk tolerance and goals</li>
        </ol>

        <p className="mb-4 font-semibold">Step 2: Choose Your Funds</p>
        <p className="mb-2">Minimum viable portfolio (3 funds):</p>
        <ul className="mb-4">
          <li>U.S. total stock market index</li>
          <li>International total stock market index</li>
          <li>U.S. total bond market index</li>
        </ul>

        <p className="mb-4 font-semibold">Step 3: Calculate Dollar Amounts</p>
        <p className="mb-4">Example: $10,000, age 35 (80% stocks, 20% bonds)</p>
        <ul className="mb-4">
          <li>$5,600 U.S. stocks (70% of stock portion)</li>
          <li>$2,400 International stocks (30% of stock portion)</li>
          <li>$2,000 bonds</li>
        </ul>

        <p className="mb-4 font-semibold">Step 4: Execute Purchases</p>
        <p className="mb-4">Open account at low-cost brokerage (Vanguard, Fidelity, Schwab). Buy your funds.</p>

        <p className="font-semibold">Step 5: Set Rebalancing Schedule</p>
        <p>Calendar reminder for January 1st each year to review and rebalance.</p>
      </ExampleBox>

      <h2>Final Thoughts: Simplicity Beats Complexity</h2>

      <Blockquote author="Jack Bogle, Founder of Vanguard">
        "The two greatest enemies of the equity fund investor are expenses and emotions. Index funds eliminate the first and help control the second."
      </Blockquote>

      <p>
        You don't need 50 funds to be diversified. You don't need exotic assets. You don't need to constantly tinker. The best portfolios are simple, low-cost, and left alone.
      </p>

      <KeyTakeaway variant="success">
        <strong>The Bottom Line:</strong>
        <ul>
          <li>Most investors need just 3-5 low-cost index funds</li>
          <li>Age-appropriate stock/bond split is your foundation</li>
          <li>Within stocks: diversify across U.S. and international</li>
          <li>Rebalance annually to maintain target allocation</li>
          <li>Resist the urge to over-complicate</li>
        </ul>
      </KeyTakeaway>

      <p>
        Build your diversified portfolio today, set up automatic contributions, and get on with your life. That's how wealth is built: not through complexity and cleverness, but through discipline and diversification.
      </p>
    </ArticleLayout>
  )
}
