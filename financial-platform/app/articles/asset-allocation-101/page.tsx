import Link from 'next/link'
import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'Asset Allocation 101: Stocks, Bonds, and Cash Explained | money365.market',
  description: 'Master asset allocation strategies for optimal portfolio balance. Learn how to allocate between stocks, bonds, and cash based on your age, goals, and risk tolerance.',
  keywords: 'asset allocation, portfolio allocation, stocks vs bonds, diversification, investment strategy, risk management',
}

export default function AssetAllocation101Article() {

  return (
    <ArticleLayout
      title="Asset Allocation 101: Stocks, Bonds, and Cash Explained"
      author="money365.market Research Team"
      publishDate="November 2025"
      readTime="11 min"
      category="Beginner Guides"
      description="Master asset allocation strategies for optimal portfolio balance. Learn how to allocate between stocks, bonds, and cash based on your age, goals, and risk tolerance."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          Asset allocation is the single most important investment decision you'll make—more important than which individual stocks you pick. Research shows that 90% of portfolio returns come from how you allocate assets, not from timing the market or stock selection.
        </p>

        <KeyTakeaway>
          Asset allocation means dividing your portfolio among different asset classes (stocks, bonds, cash, real estate). A 25-year-old might use 90% stocks / 10% bonds. A 65-year-old might use 40% stocks / 60% bonds. Your allocation determines your risk and expected returns.
        </KeyTakeaway>
      </section>

      <section id="what-is-asset-allocation">
        <h2>What is Asset Allocation?</h2>

        <p>
          <strong>Asset allocation</strong> is how you divide your investment portfolio among different asset categories. The three main classes are:
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-6">
          <div className="bg-gold-50 border-2 border-gold-300 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gold-800 mb-3">Stocks (Equities)</h3>
            <ul className="text-sm space-y-2">
              <li><strong>What:</strong> Ownership shares in companies</li>
              <li><strong>Return:</strong> 7-10% annually (historical)</li>
              <li><strong>Risk:</strong> High volatility, can drop 30-50% in crashes</li>
              <li><strong>Best For:</strong> Long-term growth (10+ years)</li>
            </ul>
          </div>

          <div className="bg-olive-50 border-2 border-olive-300 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-olive-800 mb-3">Bonds (Fixed Income)</h3>
            <ul className="text-sm space-y-2">
              <li><strong>What:</strong> Loans to governments/corporations</li>
              <li><strong>Return:</strong> 3-5% annually (historical)</li>
              <li><strong>Risk:</strong> Low-moderate, stable income</li>
              <li><strong>Best For:</strong> Stability and income</li>
            </ul>
          </div>

          <div className="bg-stone-100 border-2 border-stone-300 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-stone-800 mb-3">Cash (& Equivalents)</h3>
            <ul className="text-sm space-y-2">
              <li><strong>What:</strong> Savings accounts, money market funds, CDs</li>
              <li><strong>Return:</strong> 0.5-5% annually (varies with rates)</li>
              <li><strong>Risk:</strong> Very low, FDIC insured</li>
              <li><strong>Best For:</strong> Emergency fund, short-term needs</li>
            </ul>
          </div>
        </div>

        <Blockquote author="Harry Markowitz (Nobel Prize, Modern Portfolio Theory)">
          Diversification is the only free lunch in investing. Asset allocation allows you to reduce risk without sacrificing returns.
        </Blockquote>
      </section>

      <section id="why-it-matters">
        <h2>Why Asset Allocation Matters More Than Stock Picking</h2>

        <p>
          A famous 1986 study by Brinson, Hood, and Beebower found that <strong>asset allocation explains 93.6% of portfolio return variation</strong>. Stock selection and market timing contributed minimally.
        </p>

        <ExampleBox title="Same Stocks, Different Allocations, Vastly Different Results">
          <p className="text-sm mb-3">
            Two investors both own the same S&P 500 index fund and Treasury bonds from 2000-2020:
          </p>
          <div className="space-y-4">
            <div className="bg-gold-50 border border-gold-200 rounded p-4">
              <strong>Investor A: 80% Stocks / 20% Bonds</strong>
              <ul className="ml-4 mt-2 text-sm">
                <li>Average annual return: <strong>7.2%</strong></li>
                <li>$100k → $394,000 (20 years)</li>
                <li>Worst year loss: -33% (2008)</li>
                <li>Sleepless nights: Many</li>
              </ul>
            </div>
            <div className="bg-olive-50 border border-olive-200 rounded p-4">
              <strong>Investor B: 40% Stocks / 60% Bonds</strong>
              <ul className="ml-4 mt-2 text-sm">
                <li>Average annual return: <strong>5.1%</strong></li>
                <li>$100k → $271,000 (20 years)</li>
                <li>Worst year loss: -14% (2008)</li>
                <li>Sleepless nights: Few</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-stone-700 mt-3">
            <strong>Difference:</strong> $123,000 more for Investor A, but with 2.4x higher maximum drawdown. Asset allocation determined their experience and returns.
          </p>
        </ExampleBox>
      </section>

      <section id="risk-vs-return">
        <h2>The Risk-Return Tradeoff</h2>

        <p>
          The fundamental rule of investing: <strong>higher potential returns require accepting higher risk</strong>. You can't have both safety and maximum growth.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold mb-4">Historical Risk & Return by Asset Class (1926-2023)</h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-stone-300">
                <th className="text-left py-2">Asset Class</th>
                <th className="text-right py-2">Avg. Annual Return</th>
                <th className="text-right py-2">Worst Year</th>
                <th className="text-right py-2">Volatility (Std Dev)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-200">
                <td className="py-2">Large-Cap Stocks (S&P 500)</td>
                <td className="text-right font-mono">10.3%</td>
                <td className="text-right font-mono text-red-700">-43% (2008)</td>
                <td className="text-right font-mono">19.8%</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Small-Cap Stocks</td>
                <td className="text-right font-mono">12.1%</td>
                <td className="text-right font-mono text-red-700">-58% (1937)</td>
                <td className="text-right font-mono">31.6%</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Long-Term Corporate Bonds</td>
                <td className="text-right font-mono">6.3%</td>
                <td className="text-right font-mono text-red-700">-8% (2008)</td>
                <td className="text-right font-mono">8.4%</td>
              </tr>
              <tr className="border-b border-stone-200">
                <td className="py-2">Government Bonds (10-Year)</td>
                <td className="text-right font-mono">5.2%</td>
                <td className="text-right font-mono text-red-700">-11% (2009)</td>
                <td className="text-right font-mono">7.8%</td>
              </tr>
              <tr>
                <td className="py-2">Treasury Bills (Cash)</td>
                <td className="text-right font-mono">3.3%</td>
                <td className="text-right font-mono text-red-700">0% (2008)</td>
                <td className="text-right font-mono">3.1%</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-stone-600 mt-3">
            Source: Ibbotson SBBI Yearbook. Returns are nominal (not inflation-adjusted). Volatility measured as standard deviation.
          </p>
        </div>

        <KeyTakeaway>
          <strong>Key Insight:</strong> Stocks returned 10.3% but with -43% worst year. Bonds returned 5.2% with only -11% worst year. Asset allocation lets you choose your risk-return profile.
        </KeyTakeaway>
      </section>

      <section id="age-based-allocation">
        <h2>Age-Based Asset Allocation: The "100 Minus Age" Rule</h2>

        <p>
          The classic rule: <strong>Stock allocation = 100 - Your Age</strong>
        </p>

        <div className="bg-gold-50 border-l-4 border-gold-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Traditional "100 Minus Age" Rule</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Age 25:</strong> 75% stocks / 25% bonds</li>
            <li><strong>Age 35:</strong> 65% stocks / 35% bonds</li>
            <li><strong>Age 45:</strong> 55% stocks / 45% bonds</li>
            <li><strong>Age 55:</strong> 45% stocks / 55% bonds</li>
            <li><strong>Age 65:</strong> 35% stocks / 65% bonds</li>
          </ul>
        </div>

        <p>
          <strong>Modern Update:</strong> Many experts now recommend <strong>"120 Minus Age"</strong> due to longer lifespans and lower bond yields.
        </p>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Updated "120 Minus Age" Rule</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Age 25:</strong> 95% stocks / 5% bonds</li>
            <li><strong>Age 35:</strong> 85% stocks / 15% bonds</li>
            <li><strong>Age 45:</strong> 75% stocks / 25% bonds</li>
            <li><strong>Age 55:</strong> 65% stocks / 35% bonds</li>
            <li><strong>Age 65:</strong> 55% stocks / 45% bonds</li>
          </ul>
          <p className="text-xs text-stone-600 mt-3">
            <strong>Rationale:</strong> People live to 85-90+, so a 65-year-old still has a 20-30 year time horizon. They can handle more stock exposure.
          </p>
        </div>

        <ExampleBox title="Why Age Matters: Recovery Time">
          <p className="text-sm mb-3">
            <strong>Scenario:</strong> Stock market crashes 40% (like 2008)
          </p>
          <div className="space-y-3 text-sm">
            <div className="bg-gold-50 border border-gold-200 rounded p-3">
              <strong>Age 30 Investor:</strong>
              <ul className="ml-4 mt-1">
                <li>90% stocks = $90k drops to $54k (-$36k)</li>
                <li>Time to recover: 35 years until retirement</li>
                <li>Can keep buying during crash (dollar-cost averaging)</li>
                <li><strong>Outcome:</strong> Massive gains from buying low</li>
              </ul>
            </div>
            <div className="bg-stone-100 border border-stone-200 rounded p-3">
              <strong>Age 68 Investor:</strong>
              <ul className="ml-4 mt-1">
                <li>90% stocks = $450k drops to $270k (-$180k)</li>
                <li>Needs to withdraw $30k/year for living expenses</li>
                <li>Selling at lows = permanent loss</li>
                <li><strong>Outcome:</strong> Portfolio devastated</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-stone-700 mt-3">
            Young investors can recover from crashes. Retirees can't. Age-based allocation protects when you need it most.
          </p>
        </ExampleBox>
      </section>

      <section id="common-allocations">
        <h2>Common Asset Allocation Models</h2>

        <div className="space-y-6 my-6">
          <div className="bg-white border-2 border-gold-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              <span>Aggressive Growth (90/10)</span>
              <span className="text-xs bg-gold-100 text-gold-800 px-3 py-1 rounded-full">Age 20-35</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm mb-2"><strong>Allocation:</strong></p>
                <ul className="text-sm ml-4">
                  <li>90% Stocks (70% US, 20% International)</li>
                  <li>10% Bonds</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Expected:</strong></p>
                <ul className="text-sm ml-4">
                  <li>Return: 9-10% annually</li>
                  <li>Max drawdown: -40% to -50%</li>
                  <li>Volatility: Very high</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-3 bg-gold-50 rounded text-sm">
              <strong>ETF Portfolio Example:</strong> 60% VTI (US Total Market) + 30% VXUS (International) + 10% BND (Total Bond)
            </div>
          </div>

          <div className="bg-white border-2 border-olive-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              <span>Moderate Growth (70/30)</span>
              <span className="text-xs bg-olive-100 text-olive-800 px-3 py-1 rounded-full">Age 35-50</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm mb-2"><strong>Allocation:</strong></p>
                <ul className="text-sm ml-4">
                  <li>70% Stocks (55% US, 15% International)</li>
                  <li>30% Bonds</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Expected:</strong></p>
                <ul className="text-sm ml-4">
                  <li>Return: 7-8% annually</li>
                  <li>Max drawdown: -30% to -35%</li>
                  <li>Volatility: Moderate</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-3 bg-olive-50 rounded text-sm">
              <strong>ETF Portfolio Example:</strong> 50% VTI + 20% VXUS + 30% BND
            </div>
          </div>

          <div className="bg-white border-2 border-stone-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              <span>Balanced (60/40)</span>
              <span className="text-xs bg-stone-200 text-stone-800 px-3 py-1 rounded-full">Age 50-60</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm mb-2"><strong>Allocation:</strong></p>
                <ul className="text-sm ml-4">
                  <li>60% Stocks (45% US, 15% International)</li>
                  <li>40% Bonds</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Expected:</strong></p>
                <ul className="text-sm ml-4">
                  <li>Return: 6-7% annually</li>
                  <li>Max drawdown: -25% to -30%</li>
                  <li>Volatility: Moderate-low</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-3 bg-stone-100 rounded text-sm">
              <strong>ETF Portfolio Example:</strong> 40% VTI + 20% VXUS + 40% BND
              <br />
              <span className="text-xs text-stone-600">Classic "60/40 portfolio" - most studied allocation in finance</span>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
              <span>Conservative (40/60)</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Age 60-70+</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm mb-2"><strong>Allocation:</strong></p>
                <ul className="text-sm ml-4">
                  <li>40% Stocks (30% US, 10% International)</li>
                  <li>60% Bonds</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2"><strong>Expected:</strong></p>
                <ul className="text-sm ml-4">
                  <li>Return: 5-6% annually</li>
                  <li>Max drawdown: -15% to -20%</li>
                  <li>Volatility: Low</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-50 rounded text-sm">
              <strong>ETF Portfolio Example:</strong> 25% VTI + 15% VXUS + 60% BND
            </div>
          </div>
        </div>
      </section>

      <section id="rebalancing">
        <h2>Rebalancing: Maintaining Your Target Allocation</h2>

        <p>
          Over time, your allocation drifts. If stocks outperform, you'll end up with 85% stocks when you wanted 70%. <strong>Rebalancing</strong> means selling winners and buying losers to return to your target.
        </p>

        <ExampleBox title="Example: Rebalancing in Action">
          <div className="space-y-4 text-sm">
            <div>
              <strong>January 1, 2023: Starting Portfolio ($100,000)</strong>
              <ul className="ml-4 mt-2">
                <li>70% Stocks ($70,000)</li>
                <li>30% Bonds ($30,000)</li>
              </ul>
            </div>
            <div>
              <strong>December 31, 2023: After Strong Stock Year (+25%, Bonds +5%)</strong>
              <ul className="ml-4 mt-2">
                <li>Stocks: $70,000 × 1.25 = $87,500 (now 73.5%)</li>
                <li>Bonds: $30,000 × 1.05 = $31,500 (now 26.5%)</li>
                <li>Total: $119,000</li>
              </ul>
            </div>
            <div className="bg-gold-50 border border-gold-200 rounded p-3">
              <strong>Rebalancing Action:</strong>
              <ul className="ml-4 mt-1">
                <li>Target: 70% stocks = $83,300, 30% bonds = $35,700</li>
                <li><strong>Sell:</strong> $4,200 of stocks</li>
                <li><strong>Buy:</strong> $4,200 of bonds</li>
                <li>Back to 70/30 allocation</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-stone-700 mt-3">
            <strong>Why rebalance?</strong> Forces you to "sell high, buy low" automatically. Studies show rebalancing adds 0.3-0.5% annual return and reduces risk.
          </p>
        </ExampleBox>

        <h3>How Often to Rebalance?</h3>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <div className="space-y-3 text-sm">
            <div>
              <strong>🗓 Calendar-Based (Annual or Semi-Annual)</strong>
              <p className="text-xs text-stone-600 mt-1">
                Rebalance on January 1 every year, or twice yearly. Simple and disciplined.
              </p>
            </div>
            <div>
              <strong>📊 Threshold-Based (5% Drift)</strong>
              <p className="text-xs text-stone-600 mt-1">
                Rebalance when any asset class drifts 5%+ from target (e.g., 70% stocks becomes 75%+). More responsive.
              </p>
            </div>
            <div>
              <strong>💰 Contribution-Based (New Money)</strong>
              <p className="text-xs text-stone-600 mt-1">
                Instead of selling, direct new contributions to underweight assets. Tax-efficient.
              </p>
            </div>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Best approach for most investors:</strong> Rebalance annually on a set date (e.g., your birthday). Use new contributions to buy underweight assets throughout the year. This minimizes taxes and trading costs.
        </KeyTakeaway>
      </section>

      <section id="beyond-stocks-bonds">
        <h2>Beyond Stocks and Bonds: Other Asset Classes</h2>

        <p>
          Advanced investors add alternative assets for further diversification:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Real Estate (REITs)</h3>
            <p className="text-sm text-stone-600 mb-2">
              <strong>Allocation:</strong> 5-10% of portfolio
            </p>
            <p className="text-sm text-stone-600 mb-2">
              <strong>Why:</strong> Income + inflation hedge, low correlation to stocks
            </p>
            <p className="text-sm">
              <strong>ETFs:</strong> VNQ (Vanguard Real Estate), SCHH (Schwab US REIT)
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">Commodities & Gold</h3>
            <p className="text-sm text-stone-600 mb-2">
              <strong>Allocation:</strong> 0-5% of portfolio
            </p>
            <p className="text-sm text-stone-600 mb-2">
              <strong>Why:</strong> Inflation protection, crisis hedge
            </p>
            <p className="text-sm">
              <strong>ETFs:</strong> GLD (Gold), DBC (Commodities), PDBC (Invesco Commodities)
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">International Bonds</h3>
            <p className="text-sm text-stone-600 mb-2">
              <strong>Allocation:</strong> 10-20% of bond allocation
            </p>
            <p className="text-sm text-stone-600 mb-2">
              <strong>Why:</strong> Geographic diversification, different interest rate cycles
            </p>
            <p className="text-sm">
              <strong>ETFs:</strong> BNDX (Vanguard International Bond), IAGG (iShares Core International)
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-3">TIPS (Inflation-Protected)</h3>
            <p className="text-sm text-stone-600 mb-2">
              <strong>Allocation:</strong> 5-15% of bond allocation
            </p>
            <p className="text-sm text-stone-600 mb-2">
              <strong>Why:</strong> Principal adjusts with inflation
            </p>
            <p className="text-sm">
              <strong>ETFs:</strong> VTIP (Vanguard Short-Term TIPS), SCHP (Schwab TIPS)
            </p>
          </div>
        </div>

        <p className="text-sm text-stone-700">
          <strong>Advanced allocation example (Age 40):</strong> 50% US Stocks + 15% International Stocks + 5% REITs + 25% Bonds + 5% Gold = diversified portfolio with multiple return drivers
        </p>
      </section>

      <section id="lifecycle-changes">
        <h2>Adjusting Allocation Through Life Stages</h2>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-4">Sample Lifecycle Allocation Plan</h3>
          <div className="space-y-4 text-sm">
            <div>
              <strong>Age 25-35: Accumulation Phase</strong>
              <ul className="ml-4 mt-1">
                <li>Allocation: 90% stocks / 10% bonds</li>
                <li>Goal: Maximum growth</li>
                <li>Risk tolerance: High (long time to recover)</li>
                <li>Action: Aggressive contributions, ride out volatility</li>
              </ul>
            </div>
            <div>
              <strong>Age 35-50: Peak Earning Phase</strong>
              <ul className="ml-4 mt-1">
                <li>Allocation: 80% stocks / 20% bonds</li>
                <li>Goal: Strong growth with some stability</li>
                <li>Risk tolerance: Moderate-high</li>
                <li>Action: Max out retirement accounts, add bonds gradually</li>
              </ul>
            </div>
            <div>
              <strong>Age 50-60: Pre-Retirement</strong>
              <ul className="ml-4 mt-1">
                <li>Allocation: 60% stocks / 40% bonds</li>
                <li>Goal: Preserve wealth while maintaining growth</li>
                <li>Risk tolerance: Moderate</li>
                <li>Action: Increase bonds 2-3% per year, reduce volatility</li>
              </ul>
            </div>
            <div>
              <strong>Age 60-70: Early Retirement</strong>
              <ul className="ml-4 mt-1">
                <li>Allocation: 50% stocks / 50% bonds</li>
                <li>Goal: Income + modest growth</li>
                <li>Risk tolerance: Low-moderate</li>
                <li>Action: Build 2-3 year cash buffer, shift to dividend stocks</li>
              </ul>
            </div>
            <div>
              <strong>Age 70+: Late Retirement</strong>
              <ul className="ml-4 mt-1">
                <li>Allocation: 40% stocks / 60% bonds</li>
                <li>Goal: Capital preservation + income</li>
                <li>Risk tolerance: Low</li>
                <li>Action: Focus on stability, maintain some growth for longevity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="mistakes-to-avoid">
        <h2>Common Asset Allocation Mistakes</h2>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h3 className="text-lg font-semibold text-red-900 mb-3">Avoid These Errors</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>❌ Being too conservative when young:</strong> A 25-year-old with 50/50 stocks/bonds is leaving massive growth on the table. You have 40 years to recover from crashes.
            </li>
            <li>
              <strong>❌ Being too aggressive when old:</strong> A 68-year-old with 90% stocks risks running out of money if a crash happens early in retirement.
            </li>
            <li>
              <strong>❌ Never rebalancing:</strong> Letting winners run sounds good, but you end up overconcentrated in whatever did well recently (often right before a correction).
            </li>
            <li>
              <strong>❌ Panic-selling during crashes:</strong> Switching from 80/20 to 20/80 after stocks drop 30% locks in losses. Stick to your plan.
            </li>
            <li>
              <strong>❌ Chasing performance:</strong> Shifting to 100% stocks after a bull run, then 100% bonds after a crash = buying high, selling low.
            </li>
            <li>
              <strong>❌ Ignoring international diversification:</strong> US stocks won't always outperform. International adds diversification (20-30% of stock allocation).
            </li>
          </ul>
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion: Build Your Allocation Plan</h2>

        <p>
          Asset allocation is personal. Your age, risk tolerance, financial goals, and time horizon all matter. But the principles are universal: diversify, rebalance, and adjust as you age.
        </p>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Your Asset Allocation Action Plan</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Step 1:</strong> Determine your target allocation using "120 minus age" as starting point</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Step 2:</strong> Assess current portfolio—calculate actual stock/bond percentages</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Step 3:</strong> Rebalance if off by 5%+ (sell overweight, buy underweight)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Step 4:</strong> Set calendar reminder to review allocation annually (same date each year)</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Step 5:</strong> Adjust allocation -1% stocks per year starting at age 50</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Step 6:</strong> Use simple ETFs (VTI, VXUS, BND) to implement allocation</span>
            </label>
          </div>
        </div>

        <Blockquote author="John Bogle (Founder, Vanguard)">
          Time is your friend; impulse is your enemy. Asset allocation and rebalancing are your weapons against impulse.
        </Blockquote>

        <p className="mt-6">
          Remember: the "perfect" allocation doesn't exist. What matters is having a plan, sticking to it, and adjusting gradually as your life changes. The investor who follows a decent plan consistently beats the investor who chases the perfect plan and never executes.
        </p>

        <KeyTakeaway>
          <strong>Next steps:</strong> Learn how to implement your allocation with low-cost index funds in our guide <Link href="/articles/index-funds-explained" className="text-soft-orange hover:underline">"Index Funds Explained: The Simplest Path to Wealth"</Link>.
        </KeyTakeaway>
      </section>

      <hr className="my-8" />

      <div className="bg-stone-50 border-l-4 border-soft-orange p-6 my-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Continue Your Learning Journey</h3>
        <p className="text-gray-700 mb-4">Now that you understand asset allocation, here's what to read next:</p>
        <ul className="space-y-3">
          <li>
            <Link href="/articles/index-funds-explained" className="text-soft-orange hover:underline font-semibold">
              Index Funds Explained: The Simplest Path to Wealth
            </Link>
            <span className="text-gray-600"> - Implement your allocation with low-cost funds</span>
          </li>
          <li>
            <Link href="/articles/how-to-start-investing-in-stocks" className="text-soft-orange hover:underline font-semibold">
              How to Start Investing in Stocks: Complete Guide
            </Link>
            <span className="text-gray-600"> - The full beginner roadmap</span>
          </li>
          <li>
            <Link href="/articles/how-to-open-brokerage-account" className="text-soft-orange hover:underline font-semibold">
              How to Open Your First Brokerage Account
            </Link>
            <span className="text-gray-600"> - Get started in 30 minutes</span>
          </li>
          <li>
            <Link href="/articles/how-much-money-to-start-investing" className="text-soft-orange hover:underline font-semibold">
              How Much Money Do You Need to Start Investing?
            </Link>
            <span className="text-gray-600"> - Start with fractional shares for just $1</span>
          </li>
          <li>
            <Link href="/articles/5-investing-mistakes-beginners" className="text-soft-orange hover:underline font-semibold">
              5 Investing Mistakes That Cost Beginners Thousands
            </Link>
            <span className="text-gray-600"> - Avoid these common pitfalls</span>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
