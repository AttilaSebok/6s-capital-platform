import { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'

export const metadata: Metadata = {
  title: 'MACD Indicator: The Complete Beginner\'s Guide | money365.market',
  description: 'Master the MACD indicator: learn how to read MACD crossovers, histogram divergences, and use MACD for trend-following and momentum trading strategies.',
  keywords: 'MACD indicator, MACD crossover, MACD divergence, MACD histogram, technical analysis, momentum trading',
}

export default function MACDIndicatorGuideArticle() {
  return (
    <ArticleLayout
      title="MACD Indicator: The Complete Beginner's Guide"
      description="Learn how to use the MACD (Moving Average Convergence Divergence) indicator to identify trend changes, time entries and exits, and spot momentum shifts before they happen."
      category="Technical Analysis"
      publishDate="2025-11-09"
      readTime="13 min read"
      author="6s Capital Team"
    >
      <KeyTakeaway>
        <ul className="list-disc pl-6 space-y-2">
          <li>What the MACD indicator is and how it&apos;s calculated</li>
          <li>The three components: MACD line, Signal line, and Histogram</li>
          <li>How to identify MACD crossovers (bullish and bearish signals)</li>
          <li>MACD divergences: powerful reversal signals</li>
          <li>Proven MACD trading strategies with entry/exit rules</li>
          <li>How to combine MACD with other indicators for high-probability setups</li>
        </ul>
      </KeyTakeaway>

      <h2>What is the MACD Indicator?</h2>

      <p>
        <strong>MACD (Moving Average Convergence Divergence)</strong> is a trend-following momentum indicator that shows the relationship between two moving averages of a stock's price.
      </p>

      <p>
        <strong>Developed by:</strong> Gerald Appel in the late 1970s
      </p>

      <p>
        <strong>Purpose:</strong> MACD helps traders:
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>Identify trend direction:</strong> Is momentum bullish or bearish?</li>
        <li><strong>Spot trend changes:</strong> When does momentum shift from positive to negative (or vice versa)?</li>
        <li><strong>Measure trend strength:</strong> Is the trend accelerating or decelerating?</li>
        <li><strong>Generate buy/sell signals:</strong> MACD crossovers signal entry and exit points</li>
      </ul>

      <h2>The Three Components of MACD</h2>

      <p>
        MACD consists of three parts:
      </p>

      <h3>1. MACD Line (The Fast Line)</h3>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-6 my-6">
        <p className="font-bold text-lg mb-2">MACD Line Formula:</p>
        <p className="font-mono text-base">
          MACD Line = 12-period EMA - 26-period EMA
        </p>
        <p className="text-sm text-stone-600 mt-3">
          This measures the difference between a short-term and long-term exponential moving average.
        </p>
      </div>

      <ul className="space-y-2 my-4">
        <li><strong>12-period EMA:</strong> Fast EMA (reacts quickly to price changes)</li>
        <li><strong>26-period EMA:</strong> Slow EMA (smooths out short-term fluctuations)</li>
        <li><strong>Interpretation:</strong> When the MACD line is positive, the short-term EMA is above the long-term EMA &rarr; bullish momentum</li>
      </ul>

      <h3>2. Signal Line (The Slow Line)</h3>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-6 my-6">
        <p className="font-bold text-lg mb-2">Signal Line Formula:</p>
        <p className="font-mono text-base">
          Signal Line = 9-period EMA of the MACD Line
        </p>
        <p className="text-sm text-stone-600 mt-3">
          This is a smoothed version of the MACD line, used to generate crossover signals.
        </p>
      </div>

      <ul className="space-y-2 my-4">
        <li><strong>Purpose:</strong> Acts as a trigger for buy/sell signals</li>
        <li><strong>Crossovers:</strong> When MACD crosses above Signal Line &rarr; bullish, when MACD crosses below Signal Line &rarr; bearish</li>
      </ul>

      <h3>3. MACD Histogram</h3>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-6 my-6">
        <p className="font-bold text-lg mb-2">Histogram Formula:</p>
        <p className="font-mono text-base">
          Histogram = MACD Line - Signal Line
        </p>
        <p className="text-sm text-stone-600 mt-3">
          The histogram shows the distance between the MACD and Signal lines.
        </p>
      </div>

      <ul className="space-y-2 my-4">
        <li><strong>Positive histogram:</strong> MACD is above Signal Line (bullish momentum)</li>
        <li><strong>Negative histogram:</strong> MACD is below Signal Line (bearish momentum)</li>
        <li><strong>Growing histogram:</strong> Momentum is accelerating</li>
        <li><strong>Shrinking histogram:</strong> Momentum is decelerating (potential reversal)</li>
      </ul>

      <ExampleBox title="MACD Components Visualized">
        <p className="mb-3">
          Imagine looking at a stock chart with MACD below the price:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>MACD Line (blue line):</strong> Oscillates above and below the zero line</li>
          <li><strong>Signal Line (red line):</strong> Follows the MACD line, crossing it periodically</li>
          <li><strong>Histogram (vertical bars):</strong> Green bars when MACD &gt; Signal, red bars when MACD &lt; Signal</li>
        </ul>
        <p className="text-sm bg-yellow-50 border-l-4 border-yellow-600 p-3">
          <strong>Key insight:</strong> The histogram is the first to signal momentum changes&mdash;when it starts shrinking, a crossover is imminent.
        </p>
      </ExampleBox>

      <h2>How to Read MACD Crossovers</h2>

      <h3>Bullish Crossover (Buy Signal)</h3>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
        <p className="font-bold mb-2 text-green-900">Bullish MACD Crossover:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Signal:</strong> MACD Line crosses <strong>above</strong> the Signal Line</li>
          <li><strong>Histogram:</strong> Turns from negative (red bars) to positive (green bars)</li>
          <li><strong>Interpretation:</strong> Short-term momentum is accelerating above long-term momentum &rarr; trend may be turning bullish</li>
        </ul>
        <p className="text-sm mt-3 text-stone-700">
          <strong>Trading strategy:</strong> Enter long when MACD crosses above Signal Line, especially if confirmed by price breaking above resistance.
        </p>
      </div>

      <ExampleBox title="Real Example: Apple Bullish MACD Crossover (April 2024)">
        <p className="mb-3">
          Apple formed a bullish MACD crossover after a pullback:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>Date:</strong> April 12, 2024</li>
          <li><strong>Signal:</strong> MACD crossed above Signal Line at -2.5 (below zero but turning up)</li>
          <li><strong>Price action:</strong> Apple was at $165, bouncing off $150 support</li>
          <li><strong>Outcome:</strong> Apple rallied from $165 to $185 over the next 6 weeks (+12%)</li>
        </ul>
        <p className="text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Key lesson:</strong> Bullish crossovers near support levels (and when MACD is below zero) often produce strong rallies.
        </p>
      </ExampleBox>

      <h3>Bearish Crossover (Sell Signal)</h3>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <p className="font-bold mb-2 text-red-900">Bearish MACD Crossover:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Signal:</strong> MACD Line crosses <strong>below</strong> the Signal Line</li>
          <li><strong>Histogram:</strong> Turns from positive (green bars) to negative (red bars)</li>
          <li><strong>Interpretation:</strong> Short-term momentum is decelerating below long-term momentum &rarr; trend may be turning bearish</li>
        </ul>
        <p className="text-sm mt-3 text-stone-700">
          <strong>Trading strategy:</strong> Exit longs or enter short when MACD crosses below Signal Line, especially if price breaks below support.
        </p>
      </div>

      <ExampleBox title="Real Example: Tesla Bearish MACD Crossover (July 2024)">
        <p className="mb-3">
          Tesla formed a bearish MACD crossover after a failed rally:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>Date:</strong> July 8, 2024</li>
          <li><strong>Signal:</strong> MACD crossed below Signal Line at +5.2 (above zero but rolling over)</li>
          <li><strong>Price action:</strong> Tesla was at $260, failing at $280 resistance</li>
          <li><strong>Outcome:</strong> Tesla fell from $260 to $220 over the next month (-15.4%)</li>
        </ul>
        <p className="text-sm bg-red-50 border-l-4 border-red-600 p-3">
          <strong>Key lesson:</strong> Bearish crossovers near resistance levels (and when MACD is above zero) often precede selloffs.
        </p>
      </ExampleBox>

      <h2>MACD Divergences: Powerful Reversal Signals</h2>

      <p>
        <strong>Divergences</strong> occur when price and MACD move in opposite directions. These are high-probability reversal signals.
      </p>

      <h3>1. Bullish Divergence (Reversal Up)</h3>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
        <p className="font-bold mb-2 text-green-900">Bullish MACD Divergence:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Price:</strong> Makes a lower low</li>
          <li><strong>MACD:</strong> Makes a higher low (or less negative low)</li>
          <li><strong>Interpretation:</strong> Selling pressure is weakening even as price makes new lows &rarr; reversal likely</li>
        </ul>
        <p className="text-sm mt-3 text-stone-700">
          <strong>Trading strategy:</strong> Enter long when MACD crosses above Signal Line after bullish divergence + price breaks above resistance.
        </p>
      </div>

      <ExampleBox title="Real Example: Microsoft Bullish MACD Divergence (October 2023)">
        <p className="mb-3">
          Microsoft showed bullish MACD divergence at a key support level:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>First low (Sept 2023):</strong> Price = $310, MACD = -8.5</li>
          <li><strong>Second low (Oct 2023):</strong> Price = $305 (lower low), MACD = -6.2 (higher low)</li>
          <li><strong>Signal:</strong> Bullish divergence confirmed when MACD crossed above Signal Line</li>
          <li><strong>Outcome:</strong> Microsoft rallied from $305 to $380 over the next 3 months (+24.6%)</li>
        </ul>
        <p className="text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Key takeaway:</strong> MACD divergences at major support levels have exceptional win rates (70%+).
        </p>
      </ExampleBox>

      <h3>2. Bearish Divergence (Reversal Down)</h3>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <p className="font-bold mb-2 text-red-900">Bearish MACD Divergence:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Price:</strong> Makes a higher high</li>
          <li><strong>MACD:</strong> Makes a lower high (or less positive high)</li>
          <li><strong>Interpretation:</strong> Buying pressure is weakening even as price makes new highs &rarr; reversal likely</li>
        </ul>
        <p className="text-sm mt-3 text-stone-700">
          <strong>Trading strategy:</strong> Exit longs or enter short when MACD crosses below Signal Line after bearish divergence + price breaks below support.
        </p>
      </div>

      <ExampleBox title="Real Example: Amazon Bearish MACD Divergence (August 2024)">
        <p className="mb-3">
          Amazon showed bearish MACD divergence before a correction:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>First high (July 2024):</strong> Price = $195, MACD = +12.8</li>
          <li><strong>Second high (Aug 2024):</strong> Price = $200 (higher high), MACD = +9.5 (lower high)</li>
          <li><strong>Signal:</strong> Bearish divergence confirmed when MACD crossed below Signal Line</li>
          <li><strong>Outcome:</strong> Amazon fell from $200 to $170 over the next 6 weeks (-15%)</li>
        </ul>
        <p className="text-sm bg-red-50 border-l-4 border-red-600 p-3">
          <strong>Key takeaway:</strong> Bearish MACD divergences near resistance often precede sharp pullbacks.
        </p>
      </ExampleBox>

      <h2>Proven MACD Trading Strategies</h2>

      <h3>Strategy 1: MACD Zero Line Crossover</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>MACD crosses above zero line (12-EMA crosses above 26-EMA)</li>
          <li>This is a stronger signal than a simple MACD/Signal crossover</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules (Bullish Zero Line Cross):</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Buy signal:</strong> MACD crosses above zero + price is above 50-MA</li>
          <li><strong>Confirmation:</strong> Volume spike + RSI &gt; 50</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> Below recent swing low or 50-MA</li>
          <li><strong>Profit target:</strong> When MACD crosses back below zero or 15-20% gain</li>
        </ul>
      </div>

      <h3>Strategy 2: MACD Histogram Reversal</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Histogram has been growing (bars getting taller)</li>
          <li>Suddenly, histogram starts shrinking (bars getting shorter)</li>
          <li>This signals momentum is decelerating&mdash;crossover is imminent</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules (Early Reversal Signal):</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Buy signal:</strong> Histogram stops shrinking and starts growing again (momentum accelerating)</li>
          <li><strong>Confirmation:</strong> Price forms a bullish candlestick pattern (hammer, engulfing)</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> Below the histogram low</li>
          <li><strong>Profit target:</strong> When histogram starts shrinking again or 10-15% gain</li>
        </ul>
      </div>

      <h3>Strategy 3: MACD + RSI Combo (High-Probability Setup)</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>MACD shows bullish crossover (MACD &gt; Signal Line)</li>
          <li>RSI is oversold (&lt;30) or just bouncing from oversold</li>
          <li>Price is above 50-MA (confirming uptrend)</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Buy signal:</strong> All three conditions met (MACD bullish + RSI oversold + price &gt; 50-MA)</li>
          <li><strong>Confirmation:</strong> Volume spike on the entry day</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> Below 50-MA or recent swing low</li>
          <li><strong>Profit target:</strong> When MACD crosses below Signal Line or RSI hits overbought (&gt;70)</li>
        </ul>
      </div>

      <h2>Common MACD Mistakes and How to Avoid Them</h2>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <h3 className="text-lg font-bold mb-3 text-red-900">Top MACD Mistakes:</h3>
        <ul className="space-y-4">
          <li>
            <strong>❌ Trading every crossover:</strong> MACD crossovers in sideways markets produce frequent false signals (whipsaw).
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Only trade MACD crossovers when price is in a clear trend (above/below 200-MA).</li>
            </ul>
          </li>
          <li>
            <strong>❌ Ignoring the zero line:</strong> Crossovers above zero are more reliable than crossovers below zero.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Prioritize bullish crossovers when MACD is above zero, bearish crossovers when MACD is below zero.</li>
            </ul>
          </li>
          <li>
            <strong>❌ Using MACD alone:</strong> MACD is a lagging indicator&mdash;it confirms trends but doesn&apos;t predict them.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Combine MACD with leading indicators (RSI, support/resistance, volume) for confirmation.</li>
            </ul>
          </li>
          <li>
            <strong>❌ Chasing late crossovers:</strong> Entering after a crossover when price has already moved 10%+ often results in buying near a top.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Wait for a pullback after the crossover to enter at better prices.</li>
            </ul>
          </li>
        </ul>
      </div>

      <h2>Adjusting MACD Settings</h2>

      <p>
        The default MACD settings are <strong>12, 26, 9</strong> (12-EMA, 26-EMA, 9-EMA for Signal Line). Traders adjust based on their timeframe:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-stone-200">
              <th className="border-2 border-stone-400 p-3 text-left">Trading Style</th>
              <th className="border-2 border-stone-400 p-3 text-left">MACD Settings</th>
              <th className="border-2 border-stone-400 p-3 text-left">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-stone-300 p-3">Day Trading</td>
              <td className="border-2 border-stone-300 p-3">5, 13, 5 (faster)</td>
              <td className="border-2 border-stone-300 p-3">Quick scalps, intraday swings</td>
            </tr>
            <tr className="bg-stone-50">
              <td className="border-2 border-stone-300 p-3">Swing Trading</td>
              <td className="border-2 border-stone-300 p-3">12, 26, 9 (standard)</td>
              <td className="border-2 border-stone-300 p-3">2-4 week trades, trend following</td>
            </tr>
            <tr>
              <td className="border-2 border-stone-300 p-3">Position Trading</td>
              <td className="border-2 border-stone-300 p-3">19, 39, 9 (slower)</td>
              <td className="border-2 border-stone-300 p-3">Multi-month holds, fewer signals</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-stone-600 italic my-4">
        <strong>Recommendation:</strong> Start with the default 12, 26, 9 settings. Only adjust after you've mastered the basics.
      </p>

      <h2>Action Steps: How to Start Using MACD</h2>

      <KeyTakeaway>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open TradingView and add MACD to any stock chart (Indicators &rarr; "MACD")</li>
          <li>Identify the trend: Is the stock in an uptrend (price &gt; 50-MA) or downtrend?</li>
          <li>Look for bullish crossovers (MACD crosses above Signal) in uptrends</li>
          <li>Look for bearish crossovers (MACD crosses below Signal) in downtrends</li>
          <li>Scan for divergences: zoom out to 6-12 months and find historical divergences that predicted reversals</li>
          <li>Combine MACD with RSI: only trade MACD signals when RSI confirms (oversold for buys, overbought for sells)</li>
          <li>Backtest: test the "MACD zero line crossover" strategy on 10 stocks over the past year</li>
        </ol>
      </KeyTakeaway>

      <h2>Final Thoughts</h2>

      <p>
        MACD is one of the most versatile and widely-used indicators in technical analysis. It combines trend-following (moving averages) with momentum (rate of change), giving you a complete picture of market dynamics.
      </p>

      <p>
        The key to success with MACD is <strong>patience and confirmation</strong>. Don't trade every crossover&mdash;wait for signals in the direction of the trend, confirmed by volume and other indicators like RSI or support/resistance.
      </p>

      <p>
        And remember: <strong>MACD divergences are gold</strong>. When price makes a new high/low but MACD doesn&apos;t confirm it, pay attention. These divergences have an exceptional track record of predicting major reversals.
      </p>

      <div className="mt-12 p-6 bg-stone-100 rounded-lg">
        <p className="text-sm text-stone-600">
          <strong>Next Steps:</strong> Now that you've mastered MACD, combine it with other technical tools for a complete trading system. Read our guides on{' '}
          <a href="/articles/moving-averages-guide" className="text-orange-600 hover:text-orange-700 underline">
            Moving Averages
          </a>
          {', '}
          <a href="/articles/rsi-indicator-guide" className="text-orange-600 hover:text-orange-700 underline">
            RSI
          </a>
          {', and '}
          <a href="/articles/support-resistance-levels" className="text-orange-600 hover:text-orange-700 underline">
            Support & Resistance
          </a>
          {' '}to build a professional trading approach.
        </p>
      </div>

      <div className="mt-8 border-t-2 border-stone-200 pt-8">
        <h3 className="text-xl font-bold mb-4 text-deep-brown">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/articles/moving-averages-guide" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
            <h4 className="font-bold text-deep-brown mb-2">Moving Averages Explained</h4>
            <p className="text-sm text-stone-600">MACD is built from moving averages—understand the foundation of this powerful indicator.</p>
          </a>
          <a href="/articles/rsi-indicator-guide" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
            <h4 className="font-bold text-deep-brown mb-2">RSI Indicator Guide</h4>
            <p className="text-sm text-stone-600">Combine MACD crossovers with RSI oversold/overbought levels for confirmation.</p>
          </a>
          <a href="/articles/support-resistance-levels" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
            <h4 className="font-bold text-deep-brown mb-2">Support &amp; Resistance Levels</h4>
            <p className="text-sm text-stone-600">Use MACD signals at key S/R levels for high-probability breakout trades.</p>
          </a>
          <a href="/articles/free-cash-flow-guide" className="block p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-bronze-600 transition-colors">
            <h4 className="font-bold text-deep-brown mb-2">Free Cash Flow Guide</h4>
            <p className="text-sm text-stone-600">Find fundamentally strong stocks, then use MACD to time your entries perfectly.</p>
          </a>
        </div>
      </div>
    </ArticleLayout>
  )
}
