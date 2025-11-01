import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'Market Cycles & Economic Indicators: Complete Guide | 6S Capital',
  description: 'Master market cycles and economic indicators. Learn the 4 stages of market cycles, leading vs lagging indicators, and how to position your portfolio in each phase.',
  keywords: 'market cycles, economic indicators, GDP, unemployment, inflation, yield curve, VIX, business cycle, recession indicators',
}

export default function MarketCyclesEconomicIndicatorsArticle() {

  return (
    <ArticleLayout
      title="Understanding Market Cycles and Economic Indicators"
      author="6S Capital Research Team"
      publishDate="January 2025"
      readTime="13 min"
      category="Market Analysis"
      description="Master market cycles and economic indicators. Learn the 4 stages of market cycles, leading vs lagging indicators, and how to position your portfolio in each phase."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          Markets move in predictable cycles driven by economic fundamentals, investor psychology, and policy changes. Understanding these cycles and the indicators that predict them gives investors a powerful edge in timing and asset allocation.
        </p>

        <KeyTakeaway>
          Markets cycle through four stages: Expansion, Peak, Contraction, and Trough. Leading indicators (yield curve, manufacturing PMI) predict turns, while lagging indicators (unemployment, GDP) confirm them. Position your portfolio accordingly.
        </KeyTakeaway>
      </section>

      <section id="four-stages">
        <h2>The 4 Stages of Market Cycles</h2>

        <p>
          Every market cycle follows a similar pattern, though timing and magnitude vary. Understanding which stage we're in helps you position for what's next.
        </p>

        <div className="space-y-6 my-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-3">Stage 1: Expansion (Early Recovery)</h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Economic Characteristics:</h4>
                <ul className="space-y-1">
                  <li>✓ GDP growth accelerates</li>
                  <li>✓ Unemployment falling</li>
                  <li>✓ Corporate profits improving</li>
                  <li>✓ Low inflation (still recovering)</li>
                  <li>✓ Central bank keeps rates low (stimulative)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Market Behavior:</h4>
                <ul className="space-y-1">
                  <li>✓ Stocks rally strongly (20-30%+ annually)</li>
                  <li>✓ Cyclical sectors lead (tech, consumer discretionary)</li>
                  <li>✓ Credit spreads tighten</li>
                  <li>✓ Volatility (VIX) declines</li>
                  <li>✓ Bond yields start rising</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded border border-green-200">
              <p className="text-xs font-semibold">Best Portfolio Position:</p>
              <p className="text-xs text-stone-700 mt-1">
                <strong>Aggressive growth:</strong> 90% stocks (overweight cyclicals, small-caps, tech), 10% bonds. This is risk-on mode—capture maximum upside.
              </p>
            </div>

            <p className="text-xs text-stone-600 mt-3">
              <strong>Historical Example:</strong> 2009-2010 (post-financial crisis), 2020 Q3-Q4 (post-COVID crash)
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-3">Stage 2: Peak (Late Expansion)</h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Economic Characteristics:</h4>
                <ul className="space-y-1">
                  <li>✓ GDP growth slowing but still positive</li>
                  <li>✓ Unemployment at cycle lows (3-4%)</li>
                  <li>✓ Inflation rising (wage pressure)</li>
                  <li>✓ Central bank raising rates (tightening)</li>
                  <li>✓ Capacity constraints emerging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Market Behavior:</h4>
                <ul className="space-y-1">
                  <li>✓ Stocks grind higher but slower (5-10%)</li>
                  <li>✓ Rotation to defensives (healthcare, utilities)</li>
                  <li>✓ Volatility increases</li>
                  <li>✓ Yield curve flattens/inverts</li>
                  <li>✓ Sentiment becomes euphoric (danger sign)</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded border border-yellow-200">
              <p className="text-xs font-semibold">Best Portfolio Position:</p>
              <p className="text-xs text-stone-700 mt-1">
                <strong>Shift to quality:</strong> 70% stocks (reduce cyclicals, add defensives), 20% bonds, 10% cash. Take some chips off the table.
              </p>
            </div>

            <p className="text-xs text-stone-600 mt-3">
              <strong>Historical Example:</strong> 2018-2019, 2006-2007 (pre-financial crisis)
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6">
            <h3 className="text-xl font-semibold text-red-900 mb-3">Stage 3: Contraction (Recession)</h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Economic Characteristics:</h4>
                <ul className="space-y-1">
                  <li>✗ GDP contracts (2+ quarters negative)</li>
                  <li>✗ Unemployment rising sharply</li>
                  <li>✗ Corporate profits falling</li>
                  <li>✗ Inflation peaks then falls</li>
                  <li>✗ Central bank cuts rates (emergency mode)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Market Behavior:</h4>
                <ul className="space-y-1">
                  <li>✗ Stocks fall 20-50% from peak (bear market)</li>
                  <li>✗ Defensives outperform (least bad)</li>
                  <li>✗ Volatility spikes (VIX &gt;40)</li>
                  <li>✗ Credit spreads widen (defaults rise)</li>
                  <li>✗ Flight to quality (bonds, gold rally)</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded border border-red-200">
              <p className="text-xs font-semibold">Best Portfolio Position:</p>
              <p className="text-xs text-stone-700 mt-1">
                <strong>Defensive:</strong> 40% stocks (defensives only), 40% bonds, 20% cash. Preserve capital, wait for opportunities.
              </p>
            </div>

            <p className="text-xs text-stone-600 mt-3">
              <strong>Historical Example:</strong> 2008-2009 (financial crisis), 2020 Q1-Q2 (COVID crash), 2022 (mini-bear)
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Stage 4: Trough (Bottom)</h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Economic Characteristics:</h4>
                <ul className="space-y-1">
                  <li>◆ GDP stops falling (stabilizes)</li>
                  <li>◆ Unemployment still high but peaking</li>
                  <li>◆ Inflation very low</li>
                  <li>◆ Central bank rates at zero (QE begins)</li>
                  <li>◆ Fiscal stimulus deployed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Market Behavior:</h4>
                <ul className="space-y-1">
                  <li>◆ Stocks bottom (extreme pessimism)</li>
                  <li>◆ Volatility starts declining</li>
                  <li>◆ Smart money accumulates</li>
                  <li>◆ Leading indicators turn positive</li>
                  <li>◆ Sentiment: "things will never recover"</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded border border-blue-200">
              <p className="text-xs font-semibold">Best Portfolio Position:</p>
              <p className="text-xs text-stone-700 mt-1">
                <strong>Accumulate aggressively:</strong> Start moving from 40% → 80% stocks. Buy cyclicals, small-caps, beaten-down quality. This is the opportunity of the cycle.
              </p>
            </div>

            <p className="text-xs text-stone-600 mt-3">
              <strong>Historical Example:</strong> March 2009 (S&P at 666), March 2020 (S&P at 2,237), December 2022 (S&P at 3,764)
            </p>
          </div>
        </div>

        <Blockquote author="Howard Marks, Oaktree Capital">
          The biggest investing errors come not from buying bad assets, but from buying good assets at the wrong time in the cycle. Know where you are.
        </Blockquote>
      </section>

      <section id="leading-vs-lagging">
        <h2>Leading vs Lagging Indicators</h2>

        <p>
          Not all economic indicators are created equal. Some predict the future (leading), others confirm what already happened (lagging).
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Leading Indicators (Predict Turns)</h3>
            <p className="text-xs text-stone-600 mb-3">Change 3-12 months before the economy turns</p>

            <ul className="space-y-2 text-sm">
              <li>
                <strong>Yield Curve (10yr-2yr spread)</strong>
                <br />
                <span className="text-xs text-stone-600">Inversion predicts recession 6-18 months ahead</span>
              </li>
              <li>
                <strong>Manufacturing PMI</strong>
                <br />
                <span className="text-xs text-stone-600">&lt;50 = contraction, &gt;50 = expansion</span>
              </li>
              <li>
                <strong>Consumer Confidence</strong>
                <br />
                <span className="text-xs text-stone-600">Declining confidence → reduced spending → slowdown</span>
              </li>
              <li>
                <strong>Building Permits</strong>
                <br />
                <span className="text-xs text-stone-600">Housing leads the economy by 6-9 months</span>
              </li>
              <li>
                <strong>Stock Market</strong>
                <br />
                <span className="text-xs text-stone-600">Leads economy by 6 months (but gives false signals)</span>
              </li>
              <li>
                <strong>Initial Jobless Claims</strong>
                <br />
                <span className="text-xs text-stone-600">Rising claims signal weakening labor market</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Lagging Indicators (Confirm Trends)</h3>
            <p className="text-xs text-stone-600 mb-3">Change after the economy has already turned</p>

            <ul className="space-y-2 text-sm">
              <li>
                <strong>Unemployment Rate</strong>
                <br />
                <span className="text-xs text-stone-600">Peaks after recession ends (companies hire last)</span>
              </li>
              <li>
                <strong>GDP Growth</strong>
                <br />
                <span className="text-xs text-stone-600">Backward-looking (tells you where we were)</span>
              </li>
              <li>
                <strong>Corporate Profits</strong>
                <br />
                <span className="text-xs text-stone-600">Reported quarterly, reflects past performance</span>
              </li>
              <li>
                <strong>Consumer Price Index (CPI)</strong>
                <br />
                <span className="text-xs text-stone-600">Inflation reacts slowly to policy changes</span>
              </li>
              <li>
                <strong>Prime Rate</strong>
                <br />
                <span className="text-xs text-stone-600">Changes after Fed already moved</span>
              </li>
            </ul>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Watch leading indicators to position ahead of turns.</strong> When yield curve inverts and PMI drops below 50, prepare for recession 6-12 months out. Don't wait for unemployment to spike—that confirms you're already in recession.
        </KeyTakeaway>
      </section>

      <section id="key-indicators">
        <h2>Key Economic Indicators Deep Dive</h2>

        <p>
          Let's examine the most important indicators investors should monitor monthly.
        </p>
      </section>

      <section id="gdp-growth">
        <h2>GDP Growth: The Broadest Measure</h2>

        <p>
          Gross Domestic Product measures the total value of goods and services produced. It's the headline number for economic health but lags by months.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">Understanding GDP</h3>

          <p className="text-sm mb-3">
            <strong>Formula:</strong> GDP = Consumption + Investment + Government Spending + (Exports - Imports)
          </p>

          <div className="space-y-3 text-sm">
            <div>
              <strong>Strong Growth:</strong> 3-4%+ annually
              <br />
              <span className="text-stone-600">Healthy expansion, corporate profits growing, stocks rally</span>
            </div>
            <div>
              <strong>Moderate Growth:</strong> 2-3% annually
              <br />
              <span className="text-stone-600">Sustainable pace, low inflation risk, Goldilocks scenario</span>
            </div>
            <div>
              <strong>Weak Growth:</strong> 0-2% annually
              <br />
              <span className="text-stone-600">Sluggish economy, recession risk rising</span>
            </div>
            <div>
              <strong>Recession:</strong> Negative for 2+ quarters
              <br />
              <span className="text-stone-600">Official recession definition, bear market likely</span>
            </div>
          </div>
        </div>

        <ExampleBox title="GDP and Stock Market Performance (Historical)">
          <div className="space-y-3 text-sm">
            <p>
              <strong>2009-2010 (Recovery):</strong> GDP +2.5% → S&P 500 +15% annually
            </p>
            <p>
              <strong>2015-2016 (Slowdown):</strong> GDP +1.8% → S&P 500 flat to +5%
            </p>
            <p>
              <strong>2020 Q2 (COVID Crash):</strong> GDP -31.4% → S&P 500 -20% from peak
            </p>
            <p>
              <strong>2021 (Boom):</strong> GDP +5.8% → S&P 500 +27%
            </p>
          </div>
          <p className="text-stone-700 mt-3 text-sm">
            <strong>Correlation:</strong> GDP growth correlates moderately with stock returns (~0.4), but stocks are forward-looking—they anticipate GDP 6-12 months ahead.
          </p>
        </ExampleBox>

        <h3>How to Use GDP</h3>
        <ul>
          <li><strong>Track quarter-over-quarter change:</strong> Acceleration/deceleration matters more than absolute level</li>
          <li><strong>Watch components:</strong> Consumer spending (70% of GDP) drives the economy</li>
          <li><strong>Real vs Nominal:</strong> Use real GDP (inflation-adjusted) for true growth</li>
          <li><strong>Don't overreact to one quarter:</strong> Revisions are common—wait for trend</li>
        </ul>
      </section>

      <section id="unemployment">
        <h2>Unemployment Rate: The Labor Market Pulse</h2>

        <p>
          The unemployment rate measures the percentage of people actively seeking work who can't find jobs. It's a lagging indicator but critical for consumer spending and Fed policy.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">Unemployment Levels & Market Implications</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-4 py-3 text-left">Rate</th>
                  <th className="border border-stone-300 px-4 py-3 text-left">Economic Condition</th>
                  <th className="border border-stone-300 px-4 py-3 text-left">Market Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-4 py-3 font-medium">&lt;4%</td>
                  <td className="border border-stone-300 px-4 py-3">Full employment, tight labor</td>
                  <td className="border border-stone-300 px-4 py-3">Wage inflation risk, Fed may tighten</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-4 py-3 font-medium">4-5%</td>
                  <td className="border border-stone-300 px-4 py-3">Healthy balance</td>
                  <td className="border border-stone-300 px-4 py-3">Goldilocks—growth without overheating</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-4 py-3 font-medium">5-7%</td>
                  <td className="border border-stone-300 px-4 py-3">Weakening labor market</td>
                  <td className="border border-stone-300 px-4 py-3">Recession risk, Fed may cut rates</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-4 py-3 font-medium">&gt;7%</td>
                  <td className="border border-stone-300 px-4 py-3">Recession territory</td>
                  <td className="border border-stone-300 px-4 py-3">Bear market likely, emergency stimulus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <ExampleBox title="Unemployment During Recessions">
          <ul className="space-y-2 text-sm">
            <li><strong>2008-2009 Financial Crisis:</strong> Unemployment: 4.5% → 10% (S&P -50%)</li>
            <li><strong>2020 COVID Crash:</strong> Unemployment: 3.5% → 14.7% in 2 months (S&P -34%)</li>
            <li><strong>2023 "Soft Landing":</strong> Unemployment stayed at 3.5-4% (no recession, S&P +24%)</li>
          </ul>
          <p className="text-stone-700 mt-3 text-sm">
            Sharp rises in unemployment (&gt;2% in 6 months) reliably predict bear markets. Stable unemployment suggests economy can handle Fed tightening.
          </p>
        </ExampleBox>

        <h3>Better Leading Indicator: Initial Jobless Claims</h3>
        <p>
          Weekly initial unemployment claims lead the unemployment rate by months. Rising claims (above 300k consistently) signal weakening labor market before unemployment rises.
        </p>
      </section>

      <section id="inflation">
        <h2>Inflation: CPI and PCE</h2>

        <p>
          Inflation measures the rate of price increases. It drives Fed policy, affects corporate margins, and determines real returns for investors.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">Two Key Inflation Measures</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-sm mb-2">CPI (Consumer Price Index)</h4>
              <ul className="space-y-1 text-xs">
                <li><strong>What it tracks:</strong> Urban consumer basket (food, housing, energy)</li>
                <li><strong>Release:</strong> Monthly, mid-month</li>
                <li><strong>Headline CPI:</strong> Includes everything</li>
                <li><strong>Core CPI:</strong> Excludes volatile food & energy</li>
                <li><strong>Fed's view:</strong> Watches but prefers PCE</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">PCE (Personal Consumption Expenditures)</h4>
              <ul className="space-y-1 text-xs">
                <li><strong>What it tracks:</strong> What people actually spend</li>
                <li><strong>Release:</strong> Monthly, end of month</li>
                <li><strong>Methodology:</strong> Adjusts for substitution effects</li>
                <li><strong>Core PCE:</strong> Fed's preferred metric (2% target)</li>
                <li><strong>Typically:</strong> ~0.3% lower than CPI</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Inflation and Market Performance</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 px-4 py-3 text-left">Inflation Level</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Environment</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Best Assets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">0-2% (Low)</td>
                <td className="border border-stone-300 px-4 py-3">Goldilocks—growth without overheating</td>
                <td className="border border-stone-300 px-4 py-3">Stocks, Growth stocks</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">2-4% (Moderate)</td>
                <td className="border border-stone-300 px-4 py-3">Normal expansion, Fed monitoring</td>
                <td className="border border-stone-300 px-4 py-3">Stocks, Value stocks</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">4-6% (High)</td>
                <td className="border border-stone-300 px-4 py-3">Fed tightening aggressively, volatility</td>
                <td className="border border-stone-300 px-4 py-3">Commodities, TIPS, Value</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">&gt;6% (Very High)</td>
                <td className="border border-stone-300 px-4 py-3">Stagflation risk, economic pain</td>
                <td className="border border-stone-300 px-4 py-3">Gold, Commodities, Cash</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ExampleBox title="2021-2023 Inflation Surge">
          <ul className="space-y-2 text-sm">
            <li><strong>2021:</strong> CPI rises from 1.4% → 7.0% (supply chain, stimulus)</li>
            <li><strong>June 2022:</strong> CPI peaks at 9.1% (40-year high)</li>
            <li><strong>Fed response:</strong> Raises rates from 0% → 5.5% in 18 months (fastest ever)</li>
            <li><strong>Market impact:</strong> S&P falls 25%, Nasdaq -33% (2022 bear market)</li>
            <li><strong>2024:</strong> CPI falls to 3.1%, stocks recover +24%</li>
          </ul>
          <p className="text-stone-700 mt-3 text-sm">
            High inflation forces Fed tightening, which crashes growth stocks (high P/E compressed). Falling inflation allows Fed to pause, stocks rally.
          </p>
        </ExampleBox>

        <KeyTakeaway>
          <strong>The "2-4% sweet spot":</strong> Markets perform best with moderate inflation (2-4%). Too low = deflation/recession fears. Too high = Fed kills growth to fight inflation. Watch core PCE—that's what the Fed watches.
        </KeyTakeaway>
      </section>

      <section id="yield-curve">
        <h2>Yield Curve: The Most Reliable Recession Predictor</h2>

        <p>
          The yield curve plots interest rates across different maturities (2-year, 10-year, 30-year bonds). Its shape predicts economic turns with remarkable accuracy.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Three Yield Curve Shapes</h3>

          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h4 className="font-semibold text-green-900 mb-2">Normal Curve (Upward Sloping)</h4>
              <p className="text-sm mb-2">10-year yield &gt; 2-year yield (e.g., 4.5% vs 3.8%)</p>
              <ul className="text-xs space-y-1">
                <li><strong>Meaning:</strong> Healthy economy, investors demand higher rates for longer risk</li>
                <li><strong>Signal:</strong> Economic expansion likely to continue</li>
                <li><strong>Market:</strong> Stocks bullish, credit spreads tight</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Flat Curve</h4>
              <p className="text-sm mb-2">10-year ≈ 2-year yield (e.g., 4.0% vs 3.9%)</p>
              <ul className="text-xs space-y-1">
                <li><strong>Meaning:</strong> Uncertainty—growth slowing, Fed may have overtightened</li>
                <li><strong>Signal:</strong> Economic slowdown possible, watch closely</li>
                <li><strong>Market:</strong> Volatility increases, defensive rotation begins</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-4">
              <h4 className="font-semibold text-red-900 mb-2">Inverted Curve (Downward Sloping)</h4>
              <p className="text-sm mb-2">10-year yield &lt; 2-year yield (e.g., 3.5% vs 4.5%)</p>
              <ul className="text-xs space-y-1">
                <li><strong>Meaning:</strong> Recession expected within 6-18 months</li>
                <li><strong>Signal:</strong> Fed has tightened too much, slowdown coming</li>
                <li><strong>Market:</strong> Prepare for bear market, reduce risk exposure</li>
              </ul>
            </div>
          </div>
        </div>

        <ExampleBox title="Yield Curve Inversion Track Record">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-xs">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Inversion Date</th>
                  <th className="border border-stone-300 px-3 py-2 text-left">Recession Start</th>
                  <th className="border border-stone-300 px-3 py-2 text-left">Lead Time</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-stone-300 px-3 py-2">Dec 1988</td><td className="border border-stone-300 px-3 py-2">July 1990</td><td className="border border-stone-300 px-3 py-2">19 months</td></tr>
                <tr className="bg-stone-50"><td className="border border-stone-300 px-3 py-2">Feb 2000</td><td className="border border-stone-300 px-3 py-2">March 2001</td><td className="border border-stone-300 px-3 py-2">13 months</td></tr>
                <tr><td className="border border-stone-300 px-3 py-2">Aug 2006</td><td className="border border-stone-300 px-3 py-2">Dec 2007</td><td className="border border-stone-300 px-3 py-2">16 months</td></tr>
                <tr className="bg-stone-50"><td className="border border-stone-300 px-3 py-2">Aug 2019</td><td className="border border-stone-300 px-3 py-2">Feb 2020 (COVID)</td><td className="border border-stone-300 px-3 py-2">6 months</td></tr>
                <tr><td className="border border-stone-300 px-3 py-2">July 2022</td><td className="border border-stone-300 px-3 py-2">Not yet (as of Jan 2025)</td><td className="border border-stone-300 px-3 py-2">TBD</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 mt-3 text-sm">
            <strong>Accuracy:</strong> Yield curve inversion has predicted every recession since 1960 with only 2 false positives. Average lead time: 12-18 months.
          </p>
        </ExampleBox>

        <h3>How to Trade the Yield Curve</h3>
        <ul>
          <li>
            <strong>Inversion occurs:</strong> Don't panic sell immediately—you have 6-18 months. Start rotating to defensives.
          </li>
          <li>
            <strong>Curve steepens (2yr falls, 10yr rises):</strong> Recession fears fading, Fed about to cut, prepare for recovery.
          </li>
          <li>
            <strong>Monitor monthly:</strong> Check 10yr-2yr spread at FRED (Federal Reserve Economic Data)
          </li>
        </ul>

        <Blockquote author="Anonymous Market Saying">
          The yield curve has predicted nine of the last seven recessions—but when it inverts, take it seriously. The bond market is rarely wrong.
        </Blockquote>
      </section>

      <section id="vix-fear-index">
        <h2>VIX: The Fear Index</h2>

        <p>
          The VIX (Volatility Index) measures expected stock market volatility over the next 30 days. It's Wall Street's fear gauge—high VIX = high fear, low VIX = complacency.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">VIX Levels and What They Mean</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-4 py-3 text-left">VIX Level</th>
                  <th className="border border-stone-300 px-4 py-3 text-left">Market Condition</th>
                  <th className="border border-stone-300 px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-4 py-3 font-medium">&lt;12</td>
                  <td className="border border-stone-300 px-4 py-3">Extreme complacency, low volatility</td>
                  <td className="border border-stone-300 px-4 py-3 text-yellow-700">Warning: Correction may be near</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-4 py-3 font-medium">12-20</td>
                  <td className="border border-stone-300 px-4 py-3">Normal market, healthy conditions</td>
                  <td className="border border-stone-300 px-4 py-3 text-green-700">Continue normal investing</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-4 py-3 font-medium">20-30</td>
                  <td className="border border-stone-300 px-4 py-3">Elevated fear, correction territory</td>
                  <td className="border border-stone-300 px-4 py-3 text-yellow-700">Stay cautious, add hedges</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-4 py-3 font-medium">30-40</td>
                  <td className="border border-stone-300 px-4 py-3">High fear, bear market conditions</td>
                  <td className="border border-stone-300 px-4 py-3 text-orange-700">Defensive, but watch for bottoms</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-4 py-3 font-medium">&gt;40</td>
                  <td className="border border-stone-300 px-4 py-3">Panic, extreme fear (crisis)</td>
                  <td className="border border-stone-300 px-4 py-3 text-green-700">Contrarian buy signal (be greedy)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <ExampleBox title="VIX During Major Market Events">
          <ul className="space-y-2 text-sm">
            <li><strong>2017 (Calm):</strong> VIX averaged 11 → S&P +21% (complacency before storm)</li>
            <li><strong>Feb 2018 "Volmageddon":</strong> VIX spikes to 50 → S&P -10% in days</li>
            <li><strong>Dec 2018:</strong> VIX hits 36 → S&P -20%, then bottoms (buy signal)</li>
            <li><strong>March 2020 COVID:</strong> VIX hits 82.6 (record) → S&P -34%, then +18% in 3 months</li>
            <li><strong>Oct 2022:</strong> VIX hits 33 → S&P bottoms at 3,577, rallies 24% in 2023</li>
          </ul>
          <p className="text-stone-700 mt-3 text-sm">
            <strong>Pattern:</strong> VIX spikes (&gt;40) mark short-term bottoms. Buying when VIX is elevated has been profitable 80%+ of the time over 1-year horizons.
          </p>
        </ExampleBox>

        <KeyTakeaway>
          <strong>VIX strategy:</strong> When VIX &lt;12, reduce risk exposure (party's ending). When VIX &gt;40, add to stocks aggressively (blood in the streets). The VIX is mean-reverting—extremes don't last.
        </KeyTakeaway>
      </section>

      <section id="portfolio-positioning">
        <h2>Portfolio Positioning by Cycle Stage</h2>

        <p>
          Knowing where we are in the cycle is useless unless you position accordingly. Here's how to allocate assets in each stage.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 px-4 py-3 text-left">Cycle Stage</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Stocks %</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Sector Focus</th>
                <th className="border border-stone-300 px-4 py-3 text-left">Bonds/Cash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">Expansion (Early)</td>
                <td className="border border-stone-300 px-4 py-3">90%</td>
                <td className="border border-stone-300 px-4 py-3">Tech, Cyclicals, Small-caps, Emerging Markets</td>
                <td className="border border-stone-300 px-4 py-3">10% bonds</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">Peak (Late)</td>
                <td className="border border-stone-300 px-4 py-3">70%</td>
                <td className="border border-stone-300 px-4 py-3">Healthcare, Consumer Staples, Quality Dividend</td>
                <td className="border border-stone-300 px-4 py-3">20% bonds, 10% cash</td>
              </tr>
              <tr>
                <td className="border border-stone-300 px-4 py-3 font-medium">Contraction</td>
                <td className="border border-stone-300 px-4 py-3">40%</td>
                <td className="border border-stone-300 px-4 py-3">Utilities, Staples, Gold (defensive only)</td>
                <td className="border border-stone-300 px-4 py-3">40% bonds, 20% cash</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="border border-stone-300 px-4 py-3 font-medium">Trough (Bottom)</td>
                <td className="border border-stone-300 px-4 py-3">60-80%</td>
                <td className="border border-stone-300 px-4 py-3">Cyclicals, Financials, Industrials, Beaten-down Quality</td>
                <td className="border border-stone-300 px-4 py-3">20-40% bonds/cash (deploy gradually)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Sector Rotation Strategy</h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Early Cycle Leaders:</h4>
              <ul className="space-y-1 text-xs">
                <li>✓ Technology (high beta, growth)</li>
                <li>✓ Consumer Discretionary (retailers, autos)</li>
                <li>✓ Industrials (economic recovery)</li>
                <li>✓ Financials (rising rates help banks)</li>
                <li>✓ Small-caps (outperform in expansion)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Late Cycle/Recession Winners:</h4>
              <ul className="space-y-1 text-xs">
                <li>✓ Utilities (stable, high dividends)</li>
                <li>✓ Consumer Staples (people still buy food)</li>
                <li>✓ Healthcare (non-cyclical demand)</li>
                <li>✓ Gold (fear hedge)</li>
                <li>✓ Treasury Bonds (flight to safety)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion: Putting It All Together</h2>

        <p>
          Understanding market cycles and economic indicators gives you a strategic edge. You won't time every turn perfectly, but you'll avoid major disasters and capture major opportunities.
        </p>

        <div className="bg-gold-50 border-l-4 border-gold-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Your Monthly Economic Checklist</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Yield Curve:</strong> Is 10yr-2yr spread positive or inverted?</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>PMI:</strong> Is manufacturing PMI above or below 50?</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Unemployment:</strong> Is it rising or falling? Check jobless claims weekly.</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>Inflation:</strong> Is core PCE moving toward or away from Fed's 2% target?</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>VIX:</strong> Is fear elevated (&gt;30) or complacent (&lt;12)?</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span><strong>GDP Growth:</strong> Is economy accelerating or decelerating?</span>
            </label>
          </div>
        </div>

        <KeyTakeaway>
          <strong>The 3-indicator recession warning system:</strong>
          <br />
          1) Yield curve inverts
          <br />
          2) Unemployment rises 0.5%+ from cycle low
          <br />
          3) PMI falls below 50
          <br />
          <br />
          When all three occur, recession is 90%+ likely within 12 months. Reduce equity exposure accordingly.
        </KeyTakeaway>

        <Blockquote author="Ray Dalio, Bridgewater Associates">
          He who lives by the crystal ball will eat shattered glass. But understanding cycles is different—it's pattern recognition backed by 100 years of data.
        </Blockquote>

        <p className="mt-6">
          You don't need to predict exact cycle turns to profit. Simply recognizing "we're late cycle, yield curve is flat, valuations are stretched" is enough to shift from aggressive to cautious. When VIX spikes to 40 and everyone's panicking, you'll have the confidence to buy. That's the power of understanding cycles.
        </p>
      </section>
    </ArticleLayout>
  )
}
