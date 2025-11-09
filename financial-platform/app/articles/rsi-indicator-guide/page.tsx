import { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'

export const metadata: Metadata = {
  title: 'RSI Indicator: How to Spot Overbought and Oversold Stocks | money365.market',
  description: 'Master the Relative Strength Index (RSI): learn how to identify overbought/oversold conditions, spot divergences, and use RSI for better trade timing.',
  keywords: 'RSI indicator, relative strength index, overbought oversold, RSI divergence, RSI strategy, technical analysis',
}

export default function RSIIndicatorGuideArticle() {
  return (
    <ArticleLayout
      title="RSI Indicator: How to Spot Overbought and Oversold Stocks"
      description="Learn how to use the Relative Strength Index (RSI) to identify overbought and oversold conditions, spot bullish/bearish divergences, and improve your entry and exit timing."
      category="Technical Analysis"
      publishDate="2025-11-09"
      readTime="13 min read"
      author="6s Capital Team"
    >
      <KeyTakeaway>
        <ul className="list-disc pl-6 space-y-2">
          <li>What the RSI indicator measures and how it's calculated</li>
          <li>How to identify overbought (&gt;70) and oversold (&lt;30) conditions</li>
          <li>RSI divergences: the most powerful RSI signal for reversals</li>
          <li>Proven RSI trading strategies with entry/exit rules</li>
          <li>Common RSI mistakes and how to avoid false signals</li>
          <li>How to combine RSI with moving averages and support/resistance</li>
        </ul>
      </KeyTakeaway>

      <h2>What is the RSI Indicator?</h2>

      <p>
        The <strong>Relative Strength Index (RSI)</strong> is a momentum oscillator that measures the speed and magnitude of price changes to identify <strong>overbought</strong> or <strong>oversold</strong> conditions.
      </p>

      <p>
        <strong>Developed by:</strong> J. Welles Wilder Jr. in 1978 (same creator as the ATR and ADX indicators)
      </p>

      <p>
        <strong>Range:</strong> RSI oscillates between 0 and 100
      </p>

      <ul>
        <li><strong>RSI &gt; 70:</strong> Overbought (stock may be due for a pullback)</li>
        <li><strong>RSI &lt; 30:</strong> Oversold (stock may be due for a bounce)</li>
        <li><strong>RSI = 50:</strong> Neutral (balanced buying and selling pressure)</li>
      </ul>

      <h2>How RSI is Calculated</h2>

      <p>
        RSI measures the ratio of upward price movements to downward price movements over a specific period (default: 14 days):
      </p>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-6 my-6">
        <p className="font-bold text-lg mb-2">RSI Formula:</p>
        <p className="font-mono text-base mb-2">
          RSI = 100 - (100 / (1 + RS))
        </p>
        <p className="text-sm text-stone-600 mb-2">
          Where: <strong>RS (Relative Strength) = Average Gain / Average Loss</strong>
        </p>
        <p className="text-sm text-stone-600">
          <strong>Calculation:</strong><br/>
          1. Calculate average gains and losses over 14 periods<br/>
          2. RS = Average Gain / Average Loss<br/>
          3. RSI = 100 - (100 / (1 + RS))
        </p>
      </div>

      <ExampleBox title="Simple RSI Example">
        <p className="mb-3">
          Let's say over the last 14 days:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>Average Gain:</strong> $2.00 per day</li>
          <li><strong>Average Loss:</strong> $1.00 per day</li>
          <li><strong>RS:</strong> $2.00 / $1.00 = 2.0</li>
          <li><strong>RSI:</strong> 100 - (100 / (1 + 2.0)) = 100 - 33.33 = <strong>66.67</strong></li>
        </ul>
        <p className="text-sm bg-yellow-50 border-l-4 border-yellow-600 p-3">
          <strong>Interpretation:</strong> RSI of 66.67 suggests the stock is in strong upward momentum but not yet overbought (would need to exceed 70).
        </p>
      </ExampleBox>

      <p className="text-stone-600 italic my-4">
        <strong>Note:</strong> You don't need to calculate RSI manuallyall charting platforms calculate it automatically. Understanding the formula helps you interpret what RSI is actually measuring: the balance between buying and selling pressure.
      </p>

      <h2>Overbought and Oversold Signals</h2>

      <h3>Overbought: RSI &gt; 70</h3>

      <p>
        When RSI exceeds 70, the stock is considered <strong>overbought</strong>:
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>What it means:</strong> Recent gains have been strong and sustainedthe stock may be due for a pullback or consolidation</li>
        <li><strong>Interpretation:</strong> Too much buying pressure in too short a time</li>
        <li><strong>Trader action:</strong> Consider taking profits, tightening stops, or waiting for a pullback before adding</li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <p className="font-bold mb-2 text-red-900">Warning: Overbought ` Sell Signal</p>
        <p className="text-sm text-stone-700">
          In strong uptrends, RSI can stay overbought (&gt;70) for weeks or months. <strong>Don't automatically sell just because RSI hits 70.</strong> Wait for confirmation (price breaking support, bearish divergence, etc.).
        </p>
      </div>

      <h3>Oversold: RSI &lt; 30</h3>

      <p>
        When RSI falls below 30, the stock is considered <strong>oversold</strong>:
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>What it means:</strong> Recent losses have been steepthe stock may be due for a bounce or reversal</li>
        <li><strong>Interpretation:</strong> Too much selling pressure in too short a time</li>
        <li><strong>Trader action:</strong> Watch for reversal signals (bullish candles, support bounces) to enter long positions</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
        <p className="font-bold mb-2 text-green-900">Warning: Oversold ` Buy Signal</p>
        <p className="text-sm text-stone-700">
          In strong downtrends, RSI can stay oversold (&lt;30) for weeks. <strong>Don't catch a falling knife.</strong> Wait for confirmation (price breaking above resistance, bullish divergence, volume spike) before buying.
        </p>
      </div>

      <ExampleBox title="Real Example: Tesla RSI Overbought (January 2023)">
        <p className="mb-3">
          Tesla's RSI exceeded 80 after a massive rally in early 2023:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>Date:</strong> January 27, 2023</li>
          <li><strong>Price:</strong> $177 (up from $108 in two weeks = +64%)</li>
          <li><strong>RSI:</strong> 83 (extremely overbought)</li>
          <li><strong>What happened next:</strong> Tesla pulled back to $160 over the next week (-9.6%)</li>
        </ul>
        <p className="text-sm bg-yellow-50 border-l-4 border-yellow-600 p-3">
          <strong>Lesson:</strong> Extreme overbought readings (RSI &gt; 80) often precede short-term pullbacks, even in strong uptrends. Traders who took profits near RSI 80 could re-enter at better prices.
        </p>
      </ExampleBox>

      <h2>RSI Divergences: The Most Powerful RSI Signal</h2>

      <p>
        <strong>Divergences</strong> occur when price and RSI move in opposite directions. These are among the most reliable reversal signals in technical analysis.
      </p>

      <h3>1. Bullish Divergence (Reversal Up)</h3>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
        <p className="font-bold mb-2 text-green-900">Bullish Divergence Setup:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Price:</strong> Makes a lower low</li>
          <li><strong>RSI:</strong> Makes a higher low</li>
          <li><strong>Interpretation:</strong> Selling pressure is weakening even as price makes new lows ’ reversal likely</li>
        </ul>
        <p className="text-sm mt-3 text-stone-700">
          <strong>Trading strategy:</strong> Wait for price to break above recent resistance + RSI crosses above 30 ’ go long
        </p>
      </div>

      <ExampleBox title="Real Example: Apple Bullish Divergence (December 2022)">
        <p className="mb-3">
          Apple showed a bullish RSI divergence at the 2022 lows:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>First low (Oct 2022):</strong> Price = $138, RSI = 28</li>
          <li><strong>Second low (Dec 2022):</strong> Price = $125 (lower), RSI = 32 (higher)</li>
          <li><strong>Signal:</strong> Bullish divergence (price made a lower low but RSI made a higher low)</li>
          <li><strong>Outcome:</strong> Apple rallied from $125 to $180+ over the next 6 months (+44%)</li>
        </ul>
        <p className="text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Key takeaway:</strong> Bullish divergences at major support levels are high-probability reversal signals.
        </p>
      </ExampleBox>

      <h3>2. Bearish Divergence (Reversal Down)</h3>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <p className="font-bold mb-2 text-red-900">Bearish Divergence Setup:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Price:</strong> Makes a higher high</li>
          <li><strong>RSI:</strong> Makes a lower high</li>
          <li><strong>Interpretation:</strong> Buying pressure is weakening even as price makes new highs ’ reversal likely</li>
        </ul>
        <p className="text-sm mt-3 text-stone-700">
          <strong>Trading strategy:</strong> Wait for price to break below recent support + RSI crosses below 70 ’ go short or sell
        </p>
      </div>

      <ExampleBox title="Real Example: Nvidia Bearish Divergence (June 2024)">
        <p className="mb-3">
          Nvidia showed bearish divergence before a pullback:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>First high (May 2024):</strong> Price = $950, RSI = 78</li>
          <li><strong>Second high (June 2024):</strong> Price = $980 (higher), RSI = 72 (lower)</li>
          <li><strong>Signal:</strong> Bearish divergence (price made a higher high but RSI made a lower high)</li>
          <li><strong>Outcome:</strong> Nvidia pulled back from $980 to $800 over the next month (-18.4%)</li>
        </ul>
        <p className="text-sm bg-red-50 border-l-4 border-red-600 p-3">
          <strong>Key takeaway:</strong> Bearish divergences near resistance or after strong rallies warn of exhaustion.
        </p>
      </ExampleBox>

      <h2>Proven RSI Trading Strategies</h2>

      <h3>Strategy 1: RSI Oversold Bounce (Buy the Dip)</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Stock is in a confirmed uptrend (price above 50-MA and 200-MA)</li>
          <li>RSI dips below 30 (oversold) during a pullback</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Buy signal:</strong> RSI crosses back above 30 + price bounces off support level</li>
          <li><strong>Confirmation:</strong> Volume spike on the bounce</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> Below the recent swing low</li>
          <li><strong>Profit target:</strong> RSI reaches 70 (overbought) or price hits previous high</li>
        </ul>
      </div>

      <h3>Strategy 2: RSI Overbought Fade (Sell the Rip)</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Stock is in a downtrend or range-bound (not a strong uptrend)</li>
          <li>RSI exceeds 70 (overbought) on a rally</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Short/sell signal:</strong> RSI crosses back below 70 + price fails at resistance</li>
          <li><strong>Confirmation:</strong> Bearish candlestick pattern (shooting star, engulfing)</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> Above the recent swing high</li>
          <li><strong>Profit target:</strong> RSI reaches 30 (oversold) or price hits next support</li>
        </ul>
      </div>

      <h3>Strategy 3: RSI Divergence Reversal</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Identify bullish or bearish divergence (see examples above)</li>
          <li>Confirm divergence occurs at a major support or resistance level</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Bullish:</strong> Enter when price breaks above resistance after bullish divergence</li>
          <li><strong>Bearish:</strong> Enter when price breaks below support after bearish divergence</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> Just beyond the divergence low/high</li>
          <li><strong>Profit target:</strong> 2-3x the risk (2:1 or 3:1 reward-to-risk ratio)</li>
        </ul>
      </div>

      <h2>Common RSI Mistakes and How to Avoid Them</h2>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <h3 className="text-lg font-bold mb-3 text-red-900">Top RSI Mistakes:</h3>
        <ul className="space-y-4">
          <li>
            <strong>L Buying every time RSI hits 30:</strong> Oversold doesn't mean "buy now"especially in downtrends.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Only buy oversold RSI in confirmed uptrends (price above 50-MA and 200-MA).</li>
            </ul>
          </li>
          <li>
            <strong>L Selling every time RSI hits 70:</strong> In strong uptrends, RSI can stay overbought for weeks.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Use RSI &gt; 70 as a warning to tighten stops, not an automatic sell signal.</li>
            </ul>
          </li>
          <li>
            <strong>L Using RSI in isolation:</strong> RSI works best when combined with price action, support/resistance, and volume.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Confirm RSI signals with other indicators (moving averages, trendlines, chart patterns).</li>
            </ul>
          </li>
          <li>
            <strong>L Ignoring the trend:</strong> Counter-trend RSI trades (buying oversold in downtrends, selling overbought in uptrends) have low success rates.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Trade with the trend: buy oversold in uptrends, sell overbought in downtrends/ranges.</li>
            </ul>
          </li>
        </ul>
      </div>

      <h2>Combining RSI with Other Indicators</h2>

      <h3>RSI + Moving Averages</h3>

      <ul className="space-y-2 my-4">
        <li><strong>Setup:</strong> Price above 50-MA + RSI oversold (&lt;30) ’ high-probability dip buy</li>
        <li><strong>Logic:</strong> Trend is up (MA confirms), but short-term pullback (RSI confirms)</li>
        <li><strong>Entry:</strong> Buy when RSI crosses back above 30 while price holds above 50-MA</li>
      </ul>

      <h3>RSI + Support/Resistance</h3>

      <ul className="space-y-2 my-4">
        <li><strong>Setup:</strong> Price at major support + RSI oversold ’ very strong buy signal</li>
        <li><strong>Logic:</strong> Two forms of support (horizontal level + momentum oversold)</li>
        <li><strong>Entry:</strong> Buy when price bounces off support AND RSI bounces off 30</li>
      </ul>

      <h3>RSI + Volume</h3>

      <ul className="space-y-2 my-4">
        <li><strong>Setup:</strong> RSI oversold bounce + volume spike ’ institutional buying</li>
        <li><strong>Logic:</strong> Heavy volume confirms that the oversold bounce is real (not a weak dead-cat bounce)</li>
        <li><strong>Entry:</strong> Buy when RSI crosses above 30 AND volume exceeds 1.5x average</li>
      </ul>

      <h2>Adjusting RSI Settings</h2>

      <p>
        The default RSI period is <strong>14 days</strong>, but traders adjust based on their timeframe:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-stone-200">
              <th className="border-2 border-stone-400 p-3 text-left">Trading Style</th>
              <th className="border-2 border-stone-400 p-3 text-left">RSI Period</th>
              <th className="border-2 border-stone-400 p-3 text-left">Overbought/Oversold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-stone-300 p-3">Day Trading</td>
              <td className="border-2 border-stone-300 p-3">9-period RSI (faster)</td>
              <td className="border-2 border-stone-300 p-3">80 / 20 (wider thresholds)</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="border-2 border-stone-300 p-3">Swing Trading</td>
              <td className="border-2 border-stone-300 p-3">14-period RSI (standard)</td>
              <td className="border-2 border-stone-300 p-3">70 / 30 (standard)</td>
            </tr>
            <tr>
              <td className="border-2 border-stone-300 p-3">Position Trading</td>
              <td className="border-2 border-stone-300 p-3">21-period RSI (slower)</td>
              <td className="border-2 border-stone-300 p-3">65 / 35 (tighter thresholds)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-stone-600 italic my-4">
        <strong>Recommendation:</strong> Start with the default 14-period RSI and 70/30 levels. Only adjust after you've mastered the basics.
      </p>

      <h2>Action Steps: How to Start Using RSI</h2>

      <KeyTakeaway>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open TradingView and add RSI to any stock chart (Indicators ’ "RSI")</li>
          <li>Identify the trend: Is the stock in an uptrend, downtrend, or range?</li>
          <li>Look for oversold bounces (&lt;30 ’ cross back above 30) in uptrends</li>
          <li>Look for overbought fades (&gt;70 ’ cross back below 70) in downtrends/ranges</li>
          <li>Scan for divergences: zoom out to 6-12 months and find historical divergences that predicted reversals</li>
          <li>Combine RSI with moving averages: only trade RSI signals when aligned with the trend (above/below 50-MA)</li>
          <li>Backtest: test the "RSI oversold bounce" strategy on 10 stocks over the past year to see if it works</li>
        </ol>
      </KeyTakeaway>

      <h2>Final Thoughts</h2>

      <p>
        RSI is one of the most powerful and widely-used momentum indicators in trading. When used correctlyespecially in combination with trend analysis, support/resistance, and volumeRSI can dramatically improve your entry and exit timing.
      </p>

      <p>
        The key is to <strong>respect the trend</strong>. Don't fight strong trends by fading overbought readings in uptrends or buying oversold readings in downtrends. Instead, use RSI to time entries <em>with</em> the trend: buy oversold dips in uptrends, sell overbought rallies in downtrends.
      </p>

      <p>
        And remember: <strong>divergences are your best friend.</strong> Bullish and bearish RSI divergences have an exceptional track record of predicting major reversals when they occur at significant support or resistance levels.
      </p>

      <div className="mt-12 p-6 bg-stone-100 rounded-lg">
        <p className="text-sm text-stone-600">
          <strong>Next Steps:</strong> Now that you've mastered RSI, learn how to combine it with other momentum tools. Read our guides on{' '}
          <a href="/articles/moving-averages-guide" className="text-orange-600 hover:text-orange-700 underline">
            Moving Averages
          </a>
          {' '}and{' '}
          <a href="/articles/macd-indicator-guide" className="text-orange-600 hover:text-orange-700 underline">
            MACD
          </a>
          {' '}to build a complete technical analysis system.
        </p>
      </div>
    </ArticleLayout>
  )
}
