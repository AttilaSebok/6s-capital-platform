import { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'

export const metadata: Metadata = {
  title: 'Support and Resistance Levels: The Foundation of Technical Analysis | money365.market',
  description: 'Master support and resistance: learn how to identify key levels, trade breakouts and bounces, and use horizontal levels, trendlines, and moving averages for better entries.',
  keywords: 'support and resistance, technical analysis, breakout trading, support levels, resistance levels, trading strategies',
}

export default function SupportResistanceLevelsArticle() {
  return (
    <ArticleLayout
      title="Support and Resistance Levels: The Foundation of Technical Analysis"
      description="Learn how to identify and trade support and resistance levels&mdash;the most fundamental concept in technical analysis. Includes breakout strategies, bounce trades, and how to combine S/R with volume."
      category="Technical Analysis"
      publishDate="2025-11-09"
      readTime="14 min read"
      author="6s Capital Team"
    >
      <KeyTakeaway>
        <ul className="list-disc pl-6 space-y-2">
          <li>What support and resistance levels are and why they matter</li>
          <li>How to identify horizontal support/resistance levels on charts</li>
          <li>The difference between support, resistance, and supply/demand zones</li>
          <li>Breakout vs bounce trading strategies with entry/exit rules</li>
          <li>How to use trendlines, moving averages, and psychological levels as S/R</li>
          <li>Common S/R mistakes and how false breakouts trap traders</li>
        </ul>
      </KeyTakeaway>

      <h2>What Are Support and Resistance Levels?</h2>

      <p>
        <strong>Support</strong> and <strong>Resistance</strong> are price levels where buying or selling pressure is strong enough to pause or reverse a trend. They're the most fundamental concept in technical analysis.
      </p>

      <h3>Support: The "Floor"</h3>

      <p>
        <strong>Support</strong> is a price level where demand (buying pressure) is strong enough to prevent the price from falling further.
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>What it means:</strong> Buyers step in at this level, creating a "floor" under the price</li>
        <li><strong>Visualization:</strong> Price repeatedly bounces off the same level without breaking below it</li>
        <li><strong>Psychology:</strong> Traders view this price as a "good deal" and start buying</li>
      </ul>

      <h3>Resistance: The "Ceiling"</h3>

      <p>
        <strong>Resistance</strong> is a price level where supply (selling pressure) is strong enough to prevent the price from rising further.
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>What it means:</strong> Sellers step in at this level, creating a "ceiling" above the price</li>
        <li><strong>Visualization:</strong> Price repeatedly fails to break above the same level</li>
        <li><strong>Psychology:</strong> Traders view this price as "expensive" and start selling or taking profits</li>
      </ul>

      <div className="bg-stone-100 border-l-4 border-bronze-600 p-6 my-6">
        <p className="font-bold mb-3">Key Principle: Role Reversal</p>
        <p className="text-sm text-stone-700">
          When support is broken, it often becomes resistance (and vice versa). This happens because traders who bought at the old support level now want to "break even" when price returns to that level, creating selling pressure.
        </p>
      </div>

      <ExampleBox title="Simple Example: $100 Support Level">
        <p className="mb-3">
          Imagine a stock that has bounced off $100 three times in the past 6 months:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>Bounce #1 (January):</strong> Dips to $100, rallies to $120 (+20%)</li>
          <li><strong>Bounce #2 (March):</strong> Pulls back to $102, rallies to $125 (+22.5%)</li>
          <li><strong>Bounce #3 (June):</strong> Falls to $99, bounces to $118 (+19%)</li>
        </ul>
        <p className="text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Interpretation:</strong> $100 is a strong support level. Buyers consistently step in near this price. If the stock approaches $100 again, it&apos;s likely a low-risk buying opportunity.
        </p>
      </ExampleBox>

      <h2>How to Identify Support and Resistance Levels</h2>

      <h3>1. Horizontal Support and Resistance</h3>

      <p>
        The most common type of S/R: <strong>horizontal price levels</strong> where price has historically reversed or stalled.
      </p>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <h4 className="font-bold mb-3">How to Draw Horizontal Levels:</h4>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Zoom out to a 6-12 month chart:</strong> Identify areas where price has repeatedly reversed
          </li>
          <li>
            <strong>Look for at least 2-3 touches:</strong> A level is more significant if price has tested it multiple times
          </li>
          <li>
            <strong>Draw a horizontal line through the highs (resistance) or lows (support)</strong>
          </li>
          <li>
            <strong>Use whole numbers and psychological levels:</strong> Prices like $50, $100, $200 often act as S/R
          </li>
        </ol>
      </div>

      <ExampleBox title="Real Example: Tesla $200 Resistance (2023)">
        <p className="mb-3">
          Tesla repeatedly failed to break above $200 in mid-2023:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>May 2023:</strong> Hit $207, rejected &rarr; fell to $180 (-13%)</li>
          <li><strong>July 2023:</strong> Reached $201, rejected &rarr; pulled back to $185 (-8%)</li>
          <li><strong>August 2023:</strong> Touched $205, rejected again &rarr; dropped to $195 (-4.9%)</li>
        </ul>
        <p className="text-sm bg-red-50 border-l-4 border-red-600 p-3 mb-3">
          <strong>What happened:</strong> $200 acted as strong resistance for months. Traders who shorted near $200 or sold into strength captured multiple profitable trades.
        </p>
        <p className="text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>The breakout:</strong> In September 2023, Tesla finally broke above $200 on high volume &rarr; rallied to $265 (+32.5%). Once resistance broke, it became support.
        </p>
      </ExampleBox>

      <h3>2. Trendlines as Dynamic Support/Resistance</h3>

      <p>
        <strong>Trendlines</strong> are diagonal lines connecting a series of highs (downtrend) or lows (uptrend). They act as dynamic S/R levels.
      </p>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <h4 className="font-bold mb-3">How to Draw Trendlines:</h4>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Uptrend:</strong> Connect at least 2-3 swing lows with a diagonal line sloping upward
          </li>
          <li>
            <strong>Downtrend:</strong> Connect at least 2-3 swing highs with a diagonal line sloping downward
          </li>
          <li>
            <strong>Validation:</strong> The more times price touches the trendline without breaking it, the stronger it is
          </li>
        </ol>
      </div>

      <p>
        <strong>Trading strategy:</strong> Buy when price touches an uptrend line (support), sell/short when price touches a downtrend line (resistance).
      </p>

      <h3>3. Moving Averages as Support/Resistance</h3>

      <p>
        Moving averages (especially 50-day and 200-day) often act as <strong>dynamic support in uptrends</strong> and <strong>dynamic resistance in downtrends</strong>.
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>In uptrends:</strong> Price repeatedly bounces off the 50-MA or 200-MA &rarr; use these as buy zones</li>
        <li><strong>In downtrends:</strong> Price fails at the 50-MA or 200-MA &rarr; use these as sell/short zones</li>
        <li><strong>Breakout signal:</strong> When price breaks above/below a major MA, it signals a trend change</li>
      </ul>

      <p className="text-stone-600 italic">
        See our <a href="/articles/moving-averages-guide" className="text-orange-600 hover:underline">Moving Averages Guide</a> for detailed strategies on trading MA support/resistance.
      </p>

      <h3>4. Psychological Levels (Round Numbers)</h3>

      <p>
        Traders pay special attention to <strong>round numbers</strong>: $50, $100, $150, $200, etc. These often become self-fulfilling support/resistance levels.
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>Why they work:</strong> Traders place orders at round numbers (limit orders, stop losses)</li>
        <li><strong>Example:</strong> A stock at $98 is likely to face resistance at $100 as traders take profits</li>
        <li><strong>Institutional behavior:</strong> Fund managers often have mandates to buy/sell at specific round-number levels</li>
      </ul>

      <h2>Support and Resistance Trading Strategies</h2>

      <h3>Strategy 1: The Bounce Trade (Buy Support, Sell Resistance)</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Identify a clearly defined support or resistance level (at least 2-3 prior touches)</li>
          <li>Price approaches the level</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules (Buying Support):</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Buy signal:</strong> Price touches support + forms a bullish reversal candle (hammer, bullish engulfing)</li>
          <li><strong>Confirmation:</strong> Volume spike on the bounce + RSI oversold (&lt;30)</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> 2-3% below the support level (or below the swing low)</li>
          <li><strong>Profit target:</strong> Next resistance level or 10-15% gain</li>
        </ul>
      </div>

      <ExampleBox title="Real Example: Apple $150 Support Bounce (2024)">
        <p className="mb-3">
          Apple bounced off $150 support multiple times in 2024:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>Setup:</strong> $150 had acted as support 4 times over 12 months</li>
          <li><strong>Signal:</strong> In April 2024, Apple dipped to $151, formed a bullish hammer candle on heavy volume</li>
          <li><strong>Entry:</strong> Buy at $152 the next day (above the hammer high)</li>
          <li><strong>Stop loss:</strong> $147 (just below support)</li>
          <li><strong>Outcome:</strong> Apple rallied from $152 to $185 over the next 3 months (+21.7%)</li>
        </ul>
        <p className="text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Risk/Reward:</strong> Risked $5 per share ($152 - $147), gained $33 per share &rarr; 6.6:1 reward-to-risk ratio.
        </p>
      </ExampleBox>

      <h3>Strategy 2: The Breakout Trade (Break Above Resistance, Break Below Support)</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Price has been consolidating below resistance (or above support) for weeks/months</li>
          <li>Volume starts to increase (accumulation or distribution)</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules (Breakout Above Resistance):</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Buy signal:</strong> Price closes decisively above resistance on <strong>high volume</strong> (at least 1.5x average)</li>
          <li><strong>Confirmation:</strong> Hold above resistance for 1-3 days (not a false breakout)</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> Just below the old resistance (which should now act as support)</li>
          <li><strong>Profit target:</strong> Measure the height of the consolidation range and project upward</li>
        </ul>
      </div>

      <ExampleBox title="Real Example: Nvidia $500 Breakout (2024)">
        <p className="mb-3">
          Nvidia broke out above $500 resistance in early 2024:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>Setup:</strong> Nvidia consolidated between $450-$500 for 6 weeks</li>
          <li><strong>Breakout:</strong> On February 22, 2024, Nvidia closed at $512 on volume 3x higher than average</li>
          <li><strong>Confirmation:</strong> Held above $500 for the next 3 days</li>
          <li><strong>Entry:</strong> Buy at $515 (after confirmation)</li>
          <li><strong>Stop loss:</strong> $495 (below old resistance, now support)</li>
          <li><strong>Outcome:</strong> Nvidia rallied from $515 to $950 over the next 4 months (+84.5%)</li>
        </ul>
        <p className="text-sm bg-green-50 border-l-4 border-green-600 p-3">
          <strong>Key lesson:</strong> High-volume breakouts from multi-week consolidations tend to produce explosive moves.
        </p>
      </ExampleBox>

      <h3>Strategy 3: The Failed Breakout (Fade False Breakouts)</h3>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <p className="font-bold mb-3">Setup:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Price breaks above resistance (or below support) but on <strong>low volume</strong></li>
          <li>Within 1-2 days, price reverses back inside the range ("bull trap" or "bear trap")</li>
        </ul>
        <p className="font-bold mb-3">Entry Rules (Fading a False Breakout Above Resistance):</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Short/sell signal:</strong> Price breaks above resistance on low volume, then closes back below it</li>
          <li><strong>Confirmation:</strong> Bearish reversal candle (shooting star, bearish engulfing)</li>
        </ul>
        <p className="font-bold mb-3">Exit Rules:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Stop loss:</strong> Above the false breakout high</li>
          <li><strong>Profit target:</strong> Middle of the range or next support level</li>
        </ul>
      </div>

      <p className="text-red-700 font-bold my-4">
        ⚠️ Warning: False breakouts are common. Always wait for volume confirmation before trading breakouts.
      </p>

      <h2>How to Spot False Breakouts (and Avoid Getting Trapped)</h2>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <h3 className="text-lg font-bold mb-3 text-red-900">5 Signs of a False Breakout:</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Low Volume:</strong> Breakout occurs on below-average volume &rarr; not enough conviction
          </li>
          <li>
            <strong>Small Candle:</strong> Breakout candle is small (not decisive) &rarr; weak momentum
          </li>
          <li>
            <strong>Gap Up/Down:</strong> Price gaps through resistance but can&apos;t hold &rarr; often reverses
          </li>
          <li>
            <strong>Quick Reversal:</strong> Within 1-2 days, price is back inside the range &rarr; trap
          </li>
          <li>
            <strong>No Follow-Through:</strong> After breakout, price doesn&apos;t make new highs &rarr; failed move
          </li>
        </ol>
      </div>

      <ExampleBox title="Real Example: AMC False Breakout (2021)">
        <p className="mb-3">
          AMC had multiple false breakouts during the meme stock frenzy:
        </p>
        <ul className="space-y-2 mb-3">
          <li><strong>June 2, 2021:</strong> AMC broke above $70 resistance &rarr; hit $72 intraday</li>
          <li><strong>Volume:</strong> Lower than the previous 3 days (warning sign #1)</li>
          <li><strong>Reversal:</strong> Closed at $62 the same day &rarr; back below resistance (warning sign #2)</li>
          <li><strong>Outcome:</strong> AMC fell from $72 to $30 over the next month (-58%)</li>
        </ul>
        <p className="text-sm bg-red-50 border-l-4 border-red-600 p-3">
          <strong>Lesson:</strong> Low-volume breakouts in parabolic rallies often fail. Wait for confirmation before buying.
        </p>
      </ExampleBox>

      <h2>Supply and Demand Zones (Advanced S/R Concept)</h2>

      <p>
        While traditional S/R uses horizontal lines, <strong>supply and demand zones</strong> use <strong>price rectangles</strong> to identify areas where institutional buying or selling occurred.
      </p>

      <h3>Demand Zone (Support Zone)</h3>

      <ul className="space-y-2 my-4">
        <li><strong>What it is:</strong> A price zone where heavy buying occurred (usually marked by a strong rally away from the zone)</li>
        <li><strong>How to identify:</strong> Look for a consolidation area followed by a sharp move up on high volume</li>
        <li><strong>Trading strategy:</strong> Buy when price returns to the demand zone and shows signs of bouncing</li>
      </ul>

      <h3>Supply Zone (Resistance Zone)</h3>

      <ul className="space-y-2 my-4">
        <li><strong>What it is:</strong> A price zone where heavy selling occurred (usually marked by a strong drop away from the zone)</li>
        <li><strong>How to identify:</strong> Look for a consolidation area followed by a sharp move down on high volume</li>
        <li><strong>Trading strategy:</strong> Sell/short when price returns to the supply zone and shows signs of rejecting</li>
      </ul>

      <p className="text-stone-600 italic my-4">
        <strong>Why zones work better than lines:</strong> Institutional orders are not placed at exact prices&mdash;they&apos;re spread across a range. Zones account for this.
      </p>

      <h2>Combining S/R with Volume for Confirmation</h2>

      <p>
        <strong>Volume is the key to validating support and resistance.</strong> Without volume, S/R levels are weak.
      </p>

      <div className="bg-stone-50 border-2 border-stone-300 p-6 my-6">
        <h3 className="font-bold mb-3">Volume Rules for S/R Trading:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Support bounce:</strong> Volume should spike on the bounce (buyers stepping in aggressively)
          </li>
          <li>
            <strong>Resistance rejection:</strong> Volume should spike on the rejection (sellers overwhelming buyers)
          </li>
          <li>
            <strong>Breakout:</strong> Volume should be <strong>at least 1.5-2x average</strong> to confirm (otherwise likely false breakout)
          </li>
          <li>
            <strong>Low volume at S/R:</strong> Weak signal &rarr; wait for confirmation before entering
          </li>
        </ul>
      </div>

      <h2>Common S/R Mistakes and How to Avoid Them</h2>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
        <h3 className="text-lg font-bold mb-3 text-red-900">Top S/R Mistakes:</h3>
        <ul className="space-y-4">
          <li>
            <strong>❌ Drawing too many levels:</strong> Cluttering charts with 10+ S/R lines makes them useless.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Focus on the 2-3 most obvious levels with multiple touches.</li>
            </ul>
          </li>
          <li>
            <strong>❌ Expecting perfect bounces:</strong> Price doesn&apos;t always bounce exactly at S/R&mdash;it can overshoot or undershoot.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Use zones (ranges) instead of exact lines. Allow for $1-2 wiggle room.</li>
            </ul>
          </li>
          <li>
            <strong>❌ Ignoring volume:</strong> A support bounce on low volume is weak and likely to fail.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Always confirm S/R signals with volume spikes.</li>
            </ul>
          </li>
          <li>
            <strong>❌ Buying breakouts without confirmation:</strong> 50%+ of breakouts fail&mdash;don&apos;t chase.
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> Wait for 1-3 days of confirmation (price holding above/below level + volume).</li>
            </ul>
          </li>
          <li>
            <strong>❌ Not respecting role reversal:</strong> Old support becomes new resistance (and vice versa).
            <ul className="list-circle pl-6 mt-2">
              <li><strong>Solution:</strong> After a breakout, use the old level as your new stop loss or entry point.</li>
            </ul>
          </li>
        </ul>
      </div>

      <h2>Action Steps: How to Start Using S/R</h2>

      <KeyTakeaway>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open TradingView and pull up a stock you&apos;re researching (zoom out to 6-12 months)</li>
          <li>Identify 2-3 obvious support levels where price has bounced multiple times</li>
          <li>Identify 2-3 obvious resistance levels where price has been rejected</li>
          <li>Draw horizontal lines through these levels (use the drawing tools)</li>
          <li>Add round numbers ($50, $100, $150, etc.) as additional S/R levels</li>
          <li>Check historical volume: Did volume spike at these levels? (Confirms strength)</li>
          <li>Set price alerts: Get notified when price approaches key S/R levels</li>
          <li>Backtest: Review the past year and see if S/R bounce trades would have worked</li>
        </ol>
      </KeyTakeaway>

      <h2>Final Thoughts</h2>

      <p>
        Support and resistance are the <strong>foundation of all technical analysis</strong>. Every other indicator&mdash;moving averages, RSI, MACD&mdash;is ultimately trying to identify S/R levels in different ways.
      </p>

      <p>
        The beauty of S/R is its simplicity: <strong>price has memory</strong>. Levels that worked in the past tend to work again. Traders remember where they bought or sold before, and they place orders at the same levels. This creates self-fulfilling prophecies.
      </p>

      <p>
        The key to success with S/R is:
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>Patience:</strong> Wait for price to reach your level (don&apos;t chase)</li>
        <li><strong>Confirmation:</strong> Use volume, candlestick patterns, and RSI to confirm bounces/breakouts</li>
        <li><strong>Discipline:</strong> Always use stop losses just beyond S/R levels</li>
      </ul>

      <p>
        Master support and resistance, and you'll have a framework for every trade you make.
      </p>

      <div className="mt-12 p-6 bg-stone-100 rounded-lg">
        <p className="text-sm text-stone-600">
          <strong>Next Steps:</strong> Now that you understand S/R, combine it with momentum indicators for high-probability setups. Read our guides on{' '}
          <a href="/articles/rsi-indicator-guide" className="text-orange-600 hover:text-orange-700 underline">
            RSI
          </a>
          {', '}
          <a href="/articles/moving-averages-guide" className="text-orange-600 hover:text-orange-700 underline">
            Moving Averages
          </a>
          {', and '}
          <a href="/articles/macd-indicator-guide" className="text-orange-600 hover:text-orange-700 underline">
            MACD
          </a>
          {' '}to build a complete trading system.
        </p>
      </div>
    </ArticleLayout>
  )
}
