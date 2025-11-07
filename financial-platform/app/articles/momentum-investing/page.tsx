import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'
import TableOfContents from '@/components/TableOfContents'

export const metadata = {
  title: 'Momentum Investing: Riding the Winners Higher (2025 Strategy Guide) | money365.market',
  description: 'Learn momentum investing strategy: how to identify trending stocks, ride winners higher, and manage risk. Includes entry/exit rules, backtested performance, and practical implementation.',
  keywords: 'momentum investing, momentum strategy, trend following, relative strength, technical analysis, momentum stocks, trading strategy',
  authors: [{ name: 'money365.market Research Team' }],
  openGraph: {
    title: 'Momentum Investing: Riding the Winners Higher',
    description: 'Complete guide to momentum investing with proven strategies, risk management rules, and real-world examples.',
    type: 'article',
    publishedTime: '2025-11-07T00:00:00Z',
    authors: ['money365.market Research Team'],
  },
}

export default function MomentumInvestingArticle() {
  return (
    <ArticleLayout
      title="Momentum Investing: Riding the Winners Higher"
      author="money365.market Research Team"
      publishDate="November 2025"
      readTime="13 min"
      category="Investment Strategies"
      description="'The trend is your friend'—momentum investing capitalizes on one of the most persistent anomalies in finance: stocks that have performed well recently tend to continue outperforming in the near term. This comprehensive guide explains how to identify momentum stocks, when to buy, when to sell, and how to manage the unique risks of this aggressive strategy."
    >
      <TableOfContents
        headings={[
          { id: 'introduction', text: 'The Momentum Anomaly', level: 2 },
          { id: 'what-is-momentum', text: 'What is Momentum Investing?', level: 2 },
          { id: 'why-it-works', text: 'Why Momentum Works (Behavioral Finance)', level: 2 },
          { id: 'types-of-momentum', text: 'Types of Momentum Strategies', level: 2 },
          { id: 'identifying-momentum', text: 'How to Identify Momentum Stocks', level: 2 },
          { id: 'entry-rules', text: 'Entry Rules and Timing', level: 2 },
          { id: 'exit-rules', text: 'Exit Rules and Risk Management', level: 2 },
          { id: 'historical-performance', text: 'Historical Performance and Backtests', level: 2 },
          { id: 'risks', text: 'Risks and Drawdowns', level: 2 },
          { id: 'implementation', text: 'Practical Implementation Guide', level: 2 },
          { id: 'conclusion', text: 'Is Momentum Right for You?', level: 2 },
        ]}
      />

      <section id="introduction">
        <h2>The Momentum Anomaly</h2>
        <p>
          In 2023, NVIDIA stock entered the year at $140. By December, it had rocketed to $495—a 250% gain in 12
          months, driven by AI hype and accelerating earnings growth. Momentum investors who bought in March when
          the trend confirmed (around $200) still captured 150% returns by year-end.
        </p>
        <p>
          This is <strong>momentum investing</strong>: Buying stocks that are already winning and riding the trend
          higher. It defies the "buy low, sell high" mantra that value investors follow. Instead, momentum investors
          follow a different principle: <strong>"Buy high, sell higher"</strong>.
        </p>
        <p>
          Remarkably, this "chase the hot stock" strategy has been one of the most consistently profitable strategies
          in academic research, outperforming value investing and the market over rolling 3-12 month periods for
          decades. But it comes with violent volatility and requires strict discipline to execute successfully.
        </p>
      </section>

      <KeyTakeaway
        title="Key Takeaway: Winners Keep Winning (Until They Don't)"
        headings={[
          'Momentum stocks outperform by 8-12% annually vs the market (academic research)',
          'The strategy works because human psychology creates persistent trends',
          'Typical holding period: 3-12 months (not buy-and-hold)',
          'Requires strict sell discipline—momentum reverses violently when it breaks',
          'Best combined with value (buy momentum stocks that aren\'t extremely expensive)',
        ]}
      />

      <section id="what-is-momentum">
        <h2>What is Momentum Investing?</h2>
        <p>
          <strong>Momentum investing</strong> is the strategy of buying stocks with strong recent price performance
          (3-12 month returns) and holding them as long as the trend continues. When momentum breaks (trend reverses),
          you sell immediately and rotate into new momentum leaders.
        </p>

        <h3>Core Philosophy</h3>
        <ul>
          <li><strong>Winners keep winning:</strong> Strong performers continue outperforming for months</li>
          <li><strong>Trend persistence:</strong> Uptrends extend longer than most investors expect</li>
          <li><strong>Ride the wave:</strong> Don't fight the tape—buy what's working</li>
          <li><strong>Cut losers fast:</strong> Sell immediately when trend breaks (no "hold and hope")</li>
        </ul>

        <h3>Momentum vs Other Strategies</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Dimension</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Momentum</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Value</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Buy & Hold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>Buy Signal</strong></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Price trending up</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Price below intrinsic value</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Quality business</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>Holding Period</strong></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">3-12 months</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2-5 years</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Forever</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>Sell Signal</strong></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Trend breaks</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fair value reached</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Moat deteriorates</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>Risk Profile</strong></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High volatility</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Moderate</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Low-moderate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>Win Rate</strong></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">40-55%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">60-70%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">80%+ long-term</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>Avg Win Size</strong></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Large (30-100%+)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Moderate (20-50%)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Large over decades</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><strong>Avg Loss Size</strong></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Small (5-15% stop loss)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Moderate (can be deep)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Temporary only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="why-it-works">
        <h2>Why Momentum Works (Behavioral Finance)</h2>
        <p>
          Momentum shouldn't work in efficient markets—news should be instantly priced in. But it persists because
          of human behavioral biases:
        </p>

        <h3>1. Underreaction to News</h3>
        <p>
          Investors initially underreact to positive news (earnings beats, new products, analyst upgrades), causing
          gradual price increases as more investors recognize the opportunity. This creates trending moves that last
          months.
        </p>
        <ul>
          <li><strong>Example:</strong> NVIDIA reported blowout AI chip earnings in May 2023. Stock initially up 20%,
          but continued rallying another 100% over 6 months as institutions slowly increased positions.</li>
        </ul>

        <h3>2. Herding Behavior</h3>
        <p>
          As stocks rise, they attract attention (media coverage, fund inflows, retail FOMO). This creates a
          self-reinforcing cycle: Price rise → Attention → More buying → Higher prices.
        </p>

        <h3>3. Anchoring Bias</h3>
        <p>
          Investors anchor to previous prices and slowly adjust expectations upward, creating stair-step rallies
          rather than instant repricing.
        </p>

        <h3>4. Risk-On/Risk-Off Flows</h3>
        <p>
          During bull markets, momentum accelerates as investors rotate from safe assets (bonds, cash) into stocks.
          Leaders get disproportionate flows because "if I'm buying stocks, I want the best ones."
        </p>

        <Blockquote author="William O'Neil, Founder of Investor's Business Daily">
          "What seems too high and risky to the majority generally goes higher and what seems low and cheap generally
          goes lower. The market is not intuitive—it's counterintuitive. Buy the strongest stocks, not the weakest."
        </Blockquote>
      </section>

      <section id="types-of-momentum">
        <h2>Types of Momentum Strategies</h2>
        <p>
          There are several ways to implement momentum investing, from pure price-based to fundamental-enhanced:
        </p>

        <h3>1. Price Momentum (Pure Technical)</h3>
        <p>
          <strong>Rule:</strong> Buy the top 10-20% of stocks by 6-12 month returns, regardless of fundamentals.
        </p>
        <ul>
          <li><strong>Pros:</strong> Simple, no subjective judgment, historically proven (Jegadeesh & Titman research)</li>
          <li><strong>Cons:</strong> Catches bubbles, no fundamental safety net</li>
        </ul>

        <h3>2. Earnings Momentum (Fundamental)</h3>
        <p>
          <strong>Rule:</strong> Buy stocks with accelerating earnings growth and positive earnings surprises.
        </p>
        <ul>
          <li><strong>Example:</strong> Company beats earnings 3 quarters in a row, with each beat larger than the last</li>
          <li><strong>Pros:</strong> Fundamental support, less likely to chase pure hype</li>
          <li><strong>Cons:</strong> Requires earnings analysis, quarterly rebalancing</li>
        </ul>

        <h3>3. Relative Strength Momentum</h3>
        <p>
          <strong>Rule:</strong> Buy stocks outperforming their sector or the S&P 500 by a significant margin.
        </p>
        <ul>
          <li><strong>Example:</strong> Tech stock up 40% while XLK (tech sector ETF) up 15% = strong relative strength</li>
          <li><strong>Pros:</strong> Focuses on sector leaders, better risk-adjusted returns</li>
        </ul>

        <h3>4. Quality Momentum (QMOM)</h3>
        <p>
          <strong>Rule:</strong> Combine momentum with quality metrics (high ROE, low debt, consistent earnings).
        </p>
        <ul>
          <li><strong>Pros:</strong> Avoids low-quality momentum (meme stocks, pump-and-dumps)</li>
          <li><strong>Cons:</strong> Misses some explosive winners (unprofitable growth stocks)</li>
        </ul>
      </section>

      <section id="identifying-momentum">
        <h2>How to Identify Momentum Stocks</h2>
        <p>
          Here's a systematic framework for finding momentum candidates:
        </p>

        <h3>Step 1: Price-Based Screening</h3>
        <p><strong>Criteria:</strong></p>
        <ul>
          <li>6-month return: +20% or higher (outperforming S&P 500 by 10%+)</li>
          <li>3-month return: +10% or higher (acceleration check)</li>
          <li>Price above 50-day and 200-day moving averages (trend confirmation)</li>
          <li>Average daily volume &gt; 500,000 shares (liquidity requirement)</li>
        </ul>

        <h3>Step 2: Fundamental Confirmation</h3>
        <p><strong>Quality filters (avoid junk):</strong></p>
        <ul>
          <li>Market cap &gt; $2 billion (avoid micro-caps)</li>
          <li>Positive earnings or clear path to profitability</li>
          <li>Revenue growth &gt; 15% year-over-year</li>
          <li>No accounting red flags (investigate unusual accruals)</li>
        </ul>

        <h3>Step 3: Relative Strength Index (RSI) Check</h3>
        <p>
          <strong>RSI (14-day):</strong> Measures momentum on 0-100 scale
        </p>
        <ul>
          <li><strong>RSI 50-70:</strong> Strong momentum, not overextended (buy zone)</li>
          <li><strong>RSI 70-80:</strong> Overbought, but can continue in strong trends (hold existing)</li>
          <li><strong>RSI &gt; 80:</strong> Extremely overbought, risk of pullback (wait for consolidation)</li>
          <li><strong>RSI &lt; 50:</strong> Momentum weakening (avoid new buys)</li>
        </ul>

        <h3>Step 4: Catalyst Identification</h3>
        <p>
          Strongest momentum has a <em>reason</em> behind it:
        </p>
        <ul>
          <li>Earnings acceleration (3+ quarters of beats)</li>
          <li>New product launch success</li>
          <li>Market share gains (competitor struggles)</li>
          <li>Industry tailwinds (AI boom, EV adoption, etc.)</li>
          <li>Analyst upgrades and target raises</li>
        </ul>

        <ExampleBox title="Momentum Stock Example: NVIDIA (2023)">
          <p><strong>January 2023 Setup:</strong></p>
          <ul>
            <li>Price: $140 (down 50% from 2021 highs)</li>
            <li>6-month return: -15% (no momentum yet)</li>
            <li>Catalyst: AI boom emerging (ChatGPT launched Nov 2022)</li>
          </ul>
          <p><strong>March 2023 Momentum Confirmation:</strong></p>
          <ul>
            <li>Price: $210 (+50% in 2 months)</li>
            <li>6-month return: +35%</li>
            <li>Above 50-day and 200-day MAs (golden cross)</li>
            <li>RSI: 65 (strong but not overheated)</li>
            <li>Fundamental catalyst: Data center revenue accelerating (AI chip demand)</li>
          </ul>
          <p><strong>Momentum Trade Entry:</strong></p>
          <ul>
            <li>Buy at $210 in March (trend confirmed)</li>
            <li>Stop loss: $180 (15% below entry, below 50-day MA)</li>
          </ul>
          <p><strong>Result:</strong></p>
          <ul>
            <li>Peak in December 2023: $495 (+135% from entry)</li>
            <li>Momentum investors who waited for confirmation still captured 100%+ returns</li>
            <li>Those who chased at $400+ (RSI &gt; 80) experienced 20-30% pullback in early 2024</li>
          </ul>
        </ExampleBox>
      </section>

      <section id="entry-rules">
        <h2>Entry Rules and Timing</h2>
        <p>
          Momentum investing isn't "buy at any price"—timing entries improves risk/reward significantly:
        </p>

        <h3>Best Entry Scenarios</h3>

        <h4>1. Breakout Above Consolidation</h4>
        <p>
          Stock consolidates for 4-8 weeks (building a base), then breaks above resistance on high volume.
        </p>
        <ul>
          <li><strong>Signal:</strong> Price breaks above 52-week high or multi-month resistance</li>
          <li><strong>Volume confirmation:</strong> Breakout volume 50%+ above average</li>
          <li><strong>Risk management:</strong> Stop loss below consolidation low</li>
        </ul>

        <h4>2. Pullback to 21-Day EMA</h4>
        <p>
          Strong uptrend pulls back to 21-day exponential moving average (healthy consolidation), then resumes.
        </p>
        <ul>
          <li><strong>Entry:</strong> Buy when price bounces off 21 EMA with bullish candle</li>
          <li><strong>Stop:</strong> 8-10% below 21 EMA</li>
        </ul>

        <h4>3. Earnings Gap-Up</h4>
        <p>
          Stock gaps up 5-15% on earnings beat, holds gains for 2-3 days (not immediate reversal).
        </p>
        <ul>
          <li><strong>Entry:</strong> Buy on first pullback after gap (consolidation)</li>
          <li><strong>Catalyst:</strong> Positive guidance + analyst upgrades follow</li>
        </ul>

        <h3>Avoid These Entry Mistakes</h3>
        <ul>
          <li><strong>Chasing parabolic moves:</strong> RSI &gt; 80, vertical price action = wait for pullback</li>
          <li><strong>Buying after news is old:</strong> Catalyst announced weeks ago = priced in</li>
          <li><strong>Fighting resistance:</strong> Stock stuck below moving average = no momentum yet</li>
        </ul>
      </section>

      <section id="exit-rules">
        <h2>Exit Rules and Risk Management</h2>
        <p>
          This is where most momentum traders fail. Discipline in selling is more important than buying.
        </p>

        <h3>Hard Stop Loss Rules (Non-Negotiable)</h3>

        <h4>1. Technical Stop Loss (8-15%)</h4>
        <p>
          Set stop 8-15% below entry or below nearest support (50-day MA, consolidation low).
        </p>
        <ul>
          <li><strong>Aggressive:</strong> 8-10% stop (tighter, more trades)</li>
          <li><strong>Conservative:</strong> 12-15% stop (more room, fewer whipsaws)</li>
        </ul>
        <p><strong>No exceptions:</strong> If stop is hit, sell immediately. Momentum can reverse violently.</p>

        <h4>2. Trailing Stop (Lock in Gains)</h4>
        <p>
          As stock rises, raise stop loss to protect profits:
        </p>
        <ul>
          <li><strong>+20% gain:</strong> Move stop to breakeven (lock in 0% loss)</li>
          <li><strong>+30% gain:</strong> Raise stop to +15% (half position if desired)</li>
          <li><strong>+50%+ gain:</strong> Trail stop 15-20% below recent high</li>
        </ul>

        <h4>3. Moving Average Violation</h4>
        <p>
          Sell if stock closes below key moving average on increased volume:
        </p>
        <ul>
          <li><strong>Short-term momentum:</strong> Close below 21 EMA = exit signal</li>
          <li><strong>Intermediate momentum:</strong> Close below 50-day MA = trend break</li>
        </ul>

        <h3>Profit-Taking Strategy</h3>
        <p>
          Don't sell entire position at once—scale out:
        </p>
        <ul>
          <li><strong>+25% gain:</strong> Sell 25% (take some off table)</li>
          <li><strong>+50% gain:</strong> Sell another 25% (50% position remains)</li>
          <li><strong>+100% gain:</strong> Sell another 25% (let 25% ride)</li>
          <li><strong>Final 25%:</strong> Hold with trailing stop until trend breaks</li>
        </ul>

        <ExampleBox title="Exit Strategy Example: Tesla 2020 Momentum Trade">
          <p><strong>Entry (April 2020):</strong></p>
          <ul>
            <li>Price: $140 (post-COVID crash recovery)</li>
            <li>Stop loss: $120 (15% below, under 50-day MA)</li>
          </ul>
          <p><strong>Management:</strong></p>
          <ul>
            <li><strong>June 2020 (+25%):</strong> $175 → Sell 25%, move stop to $140 (breakeven)</li>
            <li><strong>August 2020 (+100%):</strong> $280 → Sell 25%, trail stop to $240</li>
            <li><strong>December 2020 (+300%):</strong> $560 → Sell 25%, trail stop to $480</li>
            <li><strong>January 2021 (+500%):</strong> $700 → Holding 25%, trailing stop at $600</li>
          </ul>
          <p><strong>Exit (March 2021):</strong></p>
          <ul>
            <li>Price drops to $600, stop triggered</li>
            <li>Final 25% sold at $600 (+330% on that piece)</li>
          </ul>
          <p><strong>Total Result:</strong></p>
          <ul>
            <li>Average exit: ~$400 (+185% blended return)</li>
            <li>Avoided 50% decline from $700 peak to $350 in 2022</li>
          </ul>
          <p>
            <em>By scaling out and using trailing stops, captured majority of move while protecting capital from
            reversal.</em>
          </p>
        </ExampleBox>
      </section>

      <section id="historical-performance">
        <h2>Historical Performance and Backtests</h2>
        <p>
          Academic research on momentum investing spans decades, with consistent findings:
        </p>

        <h3>Jegadeesh & Titman Research (1993-2023)</h3>
        <ul>
          <li><strong>Strategy:</strong> Buy top 10% of stocks by 6-month return, hold 6 months, rebalance monthly</li>
          <li><strong>Period:</strong> 1965-2020 (55 years)</li>
          <li><strong>Result:</strong> +12.5% annualized vs S&P 500's +10.1% (2.4% annual alpha)</li>
          <li><strong>Sharpe Ratio:</strong> 0.65 (momentum) vs 0.58 (S&P 500)</li>
        </ul>

        <h3>AQR Momentum Index (Professional Implementation)</h3>
        <ul>
          <li><strong>Strategy:</strong> Long top 33% momentum, short bottom 33% (market-neutral)</li>
          <li><strong>1972-2020:</strong> +8.2% annualized (on top of market return)</li>
          <li><strong>Best years:</strong> 2009 (+58%), 2020 (+32%)</li>
          <li><strong>Worst years:</strong> 2009 Q1 (-36% drawdown), 2020 Q1 (-28%)</li>
        </ul>

        <h3>Momentum vs Value Historical Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Period</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Momentum Return</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Value Return</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">S&P 500 Return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1990s (Bull Market)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+22.3%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+14.8%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+18.2%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2000-2002 (Tech Crash)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-28.4%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+8.2%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-14.5%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2003-2007 (Recovery)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+18.6%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+16.3%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+12.8%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2008-2009 (Financial Crisis)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-42.1%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-35.6%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-38.5%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2010-2020 (Bull Market)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+16.8%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+9.3%</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">+13.5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Key Insight:</strong> Momentum crushes in bull markets, but gets destroyed in crashes when trends
        reverse violently.</p>
      </section>

      <section id="risks">
        <h2>Risks and Drawdowns</h2>
        <p>
          Momentum delivers higher returns, but with painful volatility:
        </p>

        <h3>1. Momentum Crashes</h3>
        <p>
          When trends reverse (bear markets, recessions), momentum stocks fall hardest:
        </p>
        <ul>
          <li><strong>2000-2002 Tech Crash:</strong> Momentum portfolio -60% (tech stocks had highest momentum in
          1999)</li>
          <li><strong>2008-2009 Financial Crisis:</strong> Momentum -50% (financials and consumers led down)</li>
          <li><strong>2020 COVID Crash:</strong> Momentum -35% in 1 month (airlines, hotels, energy crashed)</li>
        </ul>

        <h3>2. Whipsaw Risk</h3>
        <p>
          Choppy markets trigger stops repeatedly, causing death by 1,000 cuts:
        </p>
        <ul>
          <li>Stop triggered → Stock reverses higher (missed gains)</li>
          <li>Re-enter → Stopped out again (double loss)</li>
          <li>Solution: Use wider stops or wait for clearer trends</li>
        </ul>

        <h3>3. Tax Inefficiency</h3>
        <p>
          3-12 month holding periods = short-term capital gains (taxed as ordinary income, 22-37% rates).
        </p>
        <ul>
          <li><strong>Impact:</strong> 15-20% of gains lost to taxes vs long-term capital gains (15-20%)</li>
          <li><strong>Solution:</strong> Implement in tax-advantaged accounts (IRA, 401k)</li>
        </ul>

        <h3>4. Behavioral Challenges</h3>
        <ul>
          <li><strong>Chasing FOMO:</strong> Buying at tops when RSI &gt; 80</li>
          <li><strong>Refusing to cut losses:</strong> "It'll come back" = momentum death spiral</li>
          <li><strong>Selling winners too early:</strong> Taking 20% profit, missing 200% run</li>
        </ul>
      </section>

      <Blockquote author="Jesse Livermore, Legendary Trader (1877-1940)">
        "It was never my thinking that made the big money for me. It always was my sitting. Got that? My sitting
        tight! Men who can both be right and sit tight are uncommon. The trend is your friend—until it bends."
      </Blockquote>

      <section id="implementation">
        <h2>Practical Implementation Guide</h2>
        <p>
          Here's how to implement momentum investing as part of a diversified portfolio:
        </p>

        <h3>Portfolio Allocation</h3>
        <p>
          Momentum is aggressive—don't bet the farm:
        </p>
        <ul>
          <li><strong>Core portfolio (70%):</strong> Index funds (S&P 500, Total Market)</li>
          <li><strong>Momentum sleeve (20%):</strong> 5-10 momentum stocks</li>
          <li><strong>Cash reserve (10%):</strong> Dry powder for new opportunities</li>
        </ul>

        <h3>Position Sizing</h3>
        <ul>
          <li><strong>Max per stock:</strong> 3-5% of portfolio (avoid concentration)</li>
          <li><strong>Max total momentum:</strong> 20-30% (limits drawdown impact)</li>
          <li><strong>Equal-weight initially:</strong> 5 stocks × 4% each = 20% exposure</li>
        </ul>

        <h3>Rebalancing Frequency</h3>
        <ul>
          <li><strong>Monthly screen:</strong> Identify new momentum candidates</li>
          <li><strong>Quarterly rotation:</strong> Replace stocks with broken momentum</li>
          <li><strong>Stop losses:</strong> Trigger immediately (don't wait for month-end)</li>
        </ul>

        <h3>Tools and Resources</h3>
        <ul>
          <li><strong>Screeners:</strong> Finviz, TradingView, Stock Rover (filter by 6-month return, RSI)</li>
          <li><strong>Charting:</strong> TradingView (free), ThinkorSwim (free with TD Ameritrade)</li>
          <li><strong>Backtesting:</strong> Portfolio Visualizer (test momentum strategies historically)</li>
          <li><strong>ETF alternative:</strong> MTUM (iShares Momentum ETF) - 0.15% expense ratio</li>
        </ul>

        <h3>Sample Momentum Portfolio (November 2025)</h3>
        <p><em>This is illustrative only, not investment advice:</em></p>
        <ul>
          <li><strong>NVIDIA (5%):</strong> AI chip leader, 6mo return +45%</li>
          <li><strong>Microsoft (4%):</strong> Azure cloud growth, 6mo +28%</li>
          <li><strong>Eli Lilly (4%):</strong> Weight-loss drug momentum, 6mo +38%</li>
          <li><strong>Costco (3%):</strong> Defensive momentum, 6mo +22%</li>
          <li><strong>Visa (4%):</strong> Payment network, 6mo +25%</li>
        </ul>
        <p><strong>Total momentum allocation:</strong> 20%</p>
        <p><strong>Stop losses:</strong> 12% below entry for each position</p>
      </section>

      <section id="conclusion">
        <h2>Is Momentum Right for You?</h2>
        <p>
          Momentum investing works—decades of data prove it. But it's not for everyone. Consider this strategy if you:
        </p>

        <h3>You're a Good Fit for Momentum If:</h3>
        <ul>
          <li><strong>Can handle volatility:</strong> 20-40% drawdowns don't cause panic selling</li>
          <li><strong>Are disciplined:</strong> Follow stop losses religiously, no exceptions</li>
          <li><strong>Have time to monitor:</strong> Check positions weekly, adjust stops as needed</li>
          <li><strong>Use tax-advantaged accounts:</strong> IRA/401k to avoid short-term cap gains</li>
          <li><strong>Think probabilistically:</strong> Accept 40-50% win rate with asymmetric payoffs</li>
        </ul>

        <h3>Avoid Momentum If You:</h3>
        <ul>
          <li>Can't stomach losses (will hold losers, hoping for recovery)</li>
          <li>Want "set and forget" investing (momentum requires active management)</li>
          <li>Are in high tax bracket (taxable accounts get crushed by short-term gains)</li>
          <li>Panic during volatility (will sell at worst times)</li>
        </ul>

        <h3>Best Approach: Blend Strategies</h3>
        <p>
          Most successful investors combine momentum with other strategies:
        </p>
        <ul>
          <li><strong>70% core:</strong> Index funds (passive, tax-efficient)</li>
          <li><strong>20% momentum:</strong> Capture trends (aggressive growth)</li>
          <li><strong>10% value:</strong> Contrarian positions (balance)</li>
        </ul>

        <p>
          This gives you exposure to momentum's upside while limiting downside through diversification.
        </p>
      </section>

      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-bold mb-3">Start with Paper Trading</h3>
        <p className="mb-4">
          Before risking real money, paper trade momentum strategies for 3-6 months. Track entries, exits, and
          emotions. Most fail because they can't execute the discipline in real-time. Practice makes perfect.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Remember:</strong> The trend is your friend—until it's not. Respect the stops, and let winners
          run.
        </p>
      </div>
    </ArticleLayout>
  )
}
