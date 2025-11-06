import ArticleLayout from '@/components/ArticleLayout'
import KeyTakeaway from '@/components/article/KeyTakeaway'
import ExampleBox from '@/components/article/ExampleBox'
import Blockquote from '@/components/article/Blockquote'

export const metadata = {
  title: 'Options Trading 101 for Beginners: Calls, Puts & Strategies | money365.market',
  description: 'Learn options trading basics: calls vs puts, strike price, expiration, covered calls, cash-secured puts. Beginner-friendly guide with real examples and risk warnings.',
  keywords: 'options trading, call options, put options, covered calls, cash-secured puts, options basics, strike price, premium',
}

export default function OptionsTrading101Article() {

  return (
    <ArticleLayout
      title="Options Trading 101 for Beginners"
      author="money365.market Research Team"
      publishDate="January 2025"
      readTime="14 min"
      category="Investment Strategies"
      description="Learn options trading basics: calls vs puts, strike price, expiration, covered calls, cash-secured puts. Beginner-friendly guide with real examples and risk warnings."
    >

      <section id="introduction">
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          Options are one of the most powerful—and misunderstood—tools in investing. Used correctly, they generate income, hedge risk, and amplify returns. Used recklessly, they can wipe out accounts in days. This guide teaches you the fundamentals safely.
        </p>

        <KeyTakeaway>
          Options are contracts that give you the right (not obligation) to buy or sell stock at a specific price by a specific date. Master two beginner strategies first: covered calls (generate income from stocks you own) and cash-secured puts (get paid to wait for lower entry prices).
        </KeyTakeaway>
      </section>

      <section id="what-are-options">
        <h2>What Are Options?</h2>

        <p>
          An option is a contract that gives the buyer the <strong>right</strong>, but not the obligation, to buy or sell a stock at a predetermined price (strike price) before a specific date (expiration).
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">Key Concept: Rights Without Obligations</h3>

          <p className="text-sm mb-3">
            Unlike owning stock (you must hold it or sell it), options give you <em>flexibility</em>:
          </p>

          <ul className="space-y-2 text-sm">
            <li>
              <strong>Option Buyer:</strong> Pays a premium for the right to buy/sell stock at strike price
              <br />
              <span className="text-stone-600">Can exercise, sell the option, or let it expire</span>
            </li>
            <li>
              <strong>Option Seller (Writer):</strong> Collects premium but <strong>must</strong> fulfill obligation if buyer exercises
              <br />
              <span className="text-stone-600">Higher risk but higher probability of profit</span>
            </li>
          </ul>
        </div>

        <ExampleBox title="Simple Analogy: Options as Insurance">
          <p className="text-sm">
            Think of a call option like a rain check at a store. The store promises to sell you an item at today's price ($50) even if the price rises to $80 next month. You paid $5 for this guarantee (the premium).
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><strong>If price rises to $80:</strong> You exercise the option, buy at $50, profit $25 (minus $5 premium = $20 net)</li>
            <li><strong>If price falls to $30:</strong> You don't exercise—just lose the $5 premium you paid</li>
          </ul>
          <p className="text-stone-700 text-sm mt-3">
            The seller keeps your $5 premium either way but must sell at $50 if you exercise—even if market price is $80.
          </p>
        </ExampleBox>
      </section>

      <section id="calls-vs-puts">
        <h2>Calls vs Puts: The Two Types of Options</h2>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-3">Call Option</h3>

            <p className="text-sm mb-3">
              <strong>Right to BUY stock at strike price</strong>
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <strong>When to buy calls:</strong>
                <br />
                You think stock price will go UP
              </div>

              <div>
                <strong>Example:</strong>
                <br />
                Apple trades at $180. You buy a $185 call expiring in 30 days for $3/share premium.
              </div>

              <div>
                <strong>Bullish scenario:</strong>
                <br />
                Apple rises to $200 → Exercise call, buy at $185, sell at $200 → Profit: $15 - $3 = $12/share (400% return on $3 premium)
              </div>

              <div>
                <strong>Bearish scenario:</strong>
                <br />
                Apple falls to $170 → Call expires worthless → Loss: $3 premium (100% loss, but capped)
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded border border-green-200">
              <p className="text-xs font-semibold">Call = Bullish Bet</p>
              <p className="text-xs">Profit when stock goes UP above strike price</p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6">
            <h3 className="text-xl font-semibold text-red-900 mb-3">Put Option</h3>

            <p className="text-sm mb-3">
              <strong>Right to SELL stock at strike price</strong>
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <strong>When to buy puts:</strong>
                <br />
                You think stock price will go DOWN (or want insurance)
              </div>

              <div>
                <strong>Example:</strong>
                <br />
                Tesla trades at $250. You buy a $240 put expiring in 30 days for $5/share premium.
              </div>

              <div>
                <strong>Bearish scenario:</strong>
                <br />
                Tesla falls to $200 → Exercise put, sell at $240 even though market is $200 → Profit: $40 - $5 = $35/share (700% return)
              </div>

              <div>
                <strong>Bullish scenario:</strong>
                <br />
                Tesla rises to $280 → Put expires worthless → Loss: $5 premium (100% loss, but capped)
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded border border-red-200">
              <p className="text-xs font-semibold">Put = Bearish Bet (or Protection)</p>
              <p className="text-xs">Profit when stock goes DOWN below strike price</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h4 className="font-semibold text-yellow-900 mb-2">Critical Difference: Buying vs Selling</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Buying options (long calls/puts):</strong> Limited risk (premium paid), unlimited upside potential
              <br />
              <span className="text-xs text-stone-600">Beginner-friendly: Can only lose what you paid</span>
            </li>
            <li>
              <strong>Selling options (short calls/puts):</strong> Limited profit (premium collected), large/unlimited risk
              <br />
              <span className="text-xs text-stone-600">Advanced: Requires margin, can lose more than premium</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="options-terminology">
        <h2>Options Terminology You Must Know</h2>

        <div className="space-y-4 my-6">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Strike Price</h3>
            <p className="text-sm text-stone-700">
              The price at which the option can be exercised. A $150 strike call gives you the right to buy stock at $150, regardless of market price.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Expiration Date</h3>
            <p className="text-sm text-stone-700">
              The last day the option can be exercised. After this date, the option expires and becomes worthless. Common durations: weekly, monthly, quarterly (LEAPS = 1-2 years).
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Premium</h3>
            <p className="text-sm text-stone-700">
              The price you pay to buy an option (or receive when selling). Quoted per share, but options control 100 shares. A $3 premium = $300 total cost (100 shares × $3).
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">In-the-Money (ITM)</h3>
            <p className="text-sm text-stone-700">
              Option has intrinsic value. Call: stock price &gt; strike. Put: stock price &lt; strike. Example: $150 call when stock is $160 (ITM by $10).
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">At-the-Money (ATM)</h3>
            <p className="text-sm text-stone-700">
              Strike price equals (or very close to) current stock price. Example: $150 call when stock is $150. Highest volume, balanced risk/reward.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Out-of-the-Money (OTM)</h3>
            <p className="text-sm text-stone-700">
              Option has no intrinsic value (only time value). Call: stock price &lt; strike. Put: stock price &gt; strike. Example: $150 call when stock is $140 (OTM by $10). Cheaper but lower probability.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Contract</h3>
            <p className="text-sm text-stone-700">
              One options contract = 100 shares. If you buy 1 call contract at $3 premium, total cost = $300 (100 shares × $3). Controls $15,000 of stock with $300 (leverage!).
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
            <h3 className="font-semibold mb-2">Exercise</h3>
            <p className="text-sm text-stone-700">
              Activate your right to buy (call) or sell (put) stock at strike price. Rarely done before expiration—most traders sell the option for profit instead.
            </p>
          </div>
        </div>

        <ExampleBox title="Reading an Options Chain">
          <p className="text-sm mb-3">
            <strong>Apple (AAPL) trading at $180 on Jan 1, 2025</strong>
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white text-xs">
              <thead>
                <tr className="bg-stone-100">
                  <th className="border border-stone-300 px-3 py-2 text-left">Strike</th>
                  <th className="border border-stone-300 px-3 py-2 text-left">Type</th>
                  <th className="border border-stone-300 px-3 py-2 text-right">Premium</th>
                  <th className="border border-stone-300 px-3 py-2 text-left">Expiration</th>
                  <th className="border border-stone-300 px-3 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">$170</td>
                  <td className="border border-stone-300 px-3 py-2">Call</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$12.50</td>
                  <td className="border border-stone-300 px-3 py-2">Feb 21, 2025</td>
                  <td className="border border-stone-300 px-3 py-2 text-green-700">ITM (deep)</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-300 px-3 py-2">$180</td>
                  <td className="border border-stone-300 px-3 py-2">Call</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$5.00</td>
                  <td className="border border-stone-300 px-3 py-2">Feb 21, 2025</td>
                  <td className="border border-stone-300 px-3 py-2 text-blue-700">ATM</td>
                </tr>
                <tr>
                  <td className="border border-stone-300 px-3 py-2">$190</td>
                  <td className="border border-stone-300 px-3 py-2">Call</td>
                  <td className="border border-stone-300 px-3 py-2 text-right">$1.50</td>
                  <td className="border border-stone-300 px-3 py-2">Feb 21, 2025</td>
                  <td className="border border-stone-300 px-3 py-2 text-red-700">OTM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-stone-600 mt-3">
            Notice: ITM options cost more (higher intrinsic value), OTM options are cheaper (lottery tickets). ATM options balance cost and probability.
          </p>
        </ExampleBox>
      </section>

      <section id="why-trade-options">
        <h2>Why Trade Options?</h2>

        <div className="grid md:grid-cols-3 gap-6 my-6">
          <div className="bg-gold-50 border border-gold-200 rounded-lg p-5">
            <h3 className="font-semibold text-gold-900 mb-3">1. Generate Income</h3>
            <p className="text-sm">
              Sell covered calls on stocks you own to collect premium. Earn 1-3% monthly on top of dividends—like creating your own dividend.
            </p>
          </div>

          <div className="bg-olive-50 border border-olive-200 rounded-lg p-5">
            <h3 className="font-semibold text-olive-900 mb-3">2. Leverage</h3>
            <p className="text-sm">
              Control $10,000 of stock with $300 option premium. Amplify returns (and losses) 10-30x. Small movements = big percentage gains.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-3">3. Hedge Risk</h3>
            <p className="text-sm">
              Buy puts as portfolio insurance. Protect against market crashes for a small premium—like buying homeowner's insurance.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-3">Real-World Use Cases</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <strong>Income investor:</strong> Owns 500 shares of Microsoft. Sells 5 call contracts monthly, collects $1,500 premium/month ($18,000/year) on top of $2,500 dividends.
            </li>
            <li>
              <strong>Growth trader:</strong> Wants Tesla exposure but stock is $250. Buys $260 call for $15 instead of buying shares. Tesla hits $300 → Option worth $40 → 167% return vs 20% on stock.
            </li>
            <li>
              <strong>Risk manager:</strong> Holds $100k in S&P 500 index. Buys protective puts for $2k (2% portfolio) as crash insurance. Market drops 30% → Puts gain $28k → Portfolio only down 4%.
            </li>
            <li>
              <strong>Strategic buyer:</strong> Wants Apple at $170 but it's $180. Sells $170 put, collects $3 premium. If assigned, buys at $170 but effectively $167 (premium reduces cost). If not assigned, keeps premium.
            </li>
          </ul>
        </div>
      </section>

      <section id="covered-calls">
        <h2>Strategy 1: Covered Calls (Income Generation)</h2>

        <p>
          The covered call is the safest options strategy—perfect for beginners. You own 100 shares of stock and sell a call against it to generate income.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
          <h3 className="font-semibold mb-3">How Covered Calls Work</h3>

          <ol className="space-y-3 text-sm">
            <li>
              <strong>Step 1:</strong> Own 100 shares of stock (e.g., Apple at $180 = $18,000 invested)
            </li>
            <li>
              <strong>Step 2:</strong> Sell 1 call option at higher strike price (e.g., $190 call expiring in 30 days)
            </li>
            <li>
              <strong>Step 3:</strong> Collect premium (e.g., $3/share = $300 total)
            </li>
            <li>
              <strong>Step 4:</strong> Wait for expiration
            </li>
          </ol>

          <h4 className="font-semibold mt-6 mb-3">Possible Outcomes:</h4>

          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-green-200">
              <strong className="text-green-700">Scenario A: Stock stays below $190 (most common)</strong>
              <p className="text-xs mt-1">
                Call expires worthless. You keep $300 premium + shares. Repeat monthly. Effective yield: 1.67% monthly = 20% annually on top of dividends.
              </p>
            </div>

            <div className="p-3 bg-white rounded border border-yellow-200">
              <strong className="text-yellow-700">Scenario B: Stock rises above $190</strong>
              <p className="text-xs mt-1">
                Shares get "called away" (sold at $190). You profit: ($190 - $180) × 100 = $1,000 capital gain + $300 premium = $1,300 total (7.2% in 30 days). Not bad!
              </p>
            </div>

            <div className="p-3 bg-white rounded border border-red-200">
              <strong className="text-red-700">Scenario C: Stock drops to $170</strong>
              <p className="text-xs mt-1">
                Call expires worthless (good). You keep $300 premium, which cushions loss. Stock down $1,000, but premium reduces loss to -$700. Better than not selling call.
              </p>
            </div>
          </div>
        </div>

        <ExampleBox title="Real Example: Monthly Income from Microsoft">
          <p className="text-sm mb-3">
            <strong>Setup:</strong> You own 300 shares of Microsoft at $380/share ($114,000 investment)
          </p>

          <div className="space-y-2 text-sm">
            <p><strong>Month 1:</strong></p>
            <ul className="ml-4 text-xs">
              <li>Sell 3 calls at $390 strike (1 month out) for $5 each</li>
              <li>Collect: 300 shares × $5 = $1,500 premium</li>
              <li>Microsoft stays at $385 → Calls expire worthless</li>
              <li>Keep: $1,500 (1.3% return in 30 days)</li>
            </ul>

            <p className="mt-3"><strong>Repeat for 12 months:</strong></p>
            <ul className="ml-4 text-xs">
              <li>Annual premium income: $1,500 × 12 = $18,000</li>
              <li>Plus Microsoft dividends: ~$2,700/year</li>
              <li><strong>Total income: $20,700 (18% yield on $114k)</strong></li>
            </ul>
          </div>

          <p className="text-stone-700 text-sm mt-3">
            Even if you get assigned 2-3 times per year (stock rises past strike), you make capital gains plus premium. Win-win.
          </p>
        </ExampleBox>

        <KeyTakeaway>
          <strong>Covered calls = rental income for stocks.</strong> You own the property (shares), collect rent (premium) from renters (call buyers). If they want to buy the property above your price (exercise call), you sell at a profit. If not, keep collecting rent monthly.
        </KeyTakeaway>
      </section>

      <section id="cash-secured-puts">
        <h2>Strategy 2: Cash-Secured Puts (Strategic Entry)</h2>

        <p>
          Cash-secured puts allow you to get paid while waiting to buy stock at your desired price. If assigned, you buy stock cheaper than market price (effective discount = premium).
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <h3 className="font-semibold mb-3">How Cash-Secured Puts Work</h3>

          <ol className="space-y-3 text-sm">
            <li>
              <strong>Step 1:</strong> Identify stock you want to own at lower price (e.g., Tesla at $250, but you want $230)
            </li>
            <li>
              <strong>Step 2:</strong> Sell put at your target price ($230 strike, 30 days out)
            </li>
            <li>
              <strong>Step 3:</strong> Collect premium (e.g., $6/share = $600 per contract)
            </li>
            <li>
              <strong>Step 4:</strong> Set aside cash to buy 100 shares if assigned ($23,000 in this case)
            </li>
          </ol>

          <h4 className="font-semibold mt-6 mb-3">Possible Outcomes:</h4>

          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-blue-200">
              <strong className="text-blue-700">Scenario A: Tesla stays above $230</strong>
              <p className="text-xs mt-1">
                Put expires worthless. You keep $600 premium. Repeat next month. You're getting paid to wait for your entry price.
              </p>
            </div>

            <div className="p-3 bg-white rounded border border-green-200">
              <strong className="text-green-700">Scenario B: Tesla drops to $220 (assignment)</strong>
              <p className="text-xs mt-1">
                You're assigned—must buy 100 shares at $230 ($23,000 cost). But you collected $600 premium, so effective cost = $224/share. Market price is $220, so you're down $4/share ($400 unrealized loss), but you wanted Tesla at $230 anyway. Now sell covered calls at $240 to generate more income.
              </p>
            </div>
          </div>
        </div>

        <ExampleBox title="Real Example: Buying Apple at a Discount">
          <p className="text-sm mb-3">
            <strong>Situation:</strong> Apple trades at $180. You want to buy at $170.
          </p>

          <div className="space-y-3 text-sm">
            <div>
              <strong>Traditional approach:</strong>
              <br />
              <span className="text-xs">Place limit order at $170. Wait. No guarantee of fill. No income while waiting.</span>
            </div>

            <div>
              <strong>Cash-secured put approach:</strong>
              <br />
              <span className="text-xs">Sell $170 put (30 days) for $3 premium ($300 income)</span>
            </div>

            <div className="p-3 bg-stone-50 rounded">
              <p className="text-xs font-semibold">Outcome 1: Apple stays above $170</p>
              <p className="text-xs">Keep $300. Sell another put next month. After 6 months, collected $1,800 while waiting.</p>
            </div>

            <div className="p-3 bg-stone-50 rounded">
              <p className="text-xs font-semibold">Outcome 2: Apple drops to $165 (assigned)</p>
              <p className="text-xs">
                Buy 100 shares at $170 = $17,000 cost
                <br />
                But collected $300 premium → Effective cost: $167/share
                <br />
                <strong>Market price $165, you paid $167 (vs $180 before) = Saved $1,300 total</strong>
              </p>
            </div>
          </div>

          <p className="text-stone-700 text-sm mt-3">
            You got paid $300 to buy stock $13 cheaper than when you started. Cash-secured puts turn waiting into income.
          </p>
        </ExampleBox>

        <h3>Requirements for Cash-Secured Puts</h3>
        <ul>
          <li><strong>Cash reserve:</strong> Must have cash to buy shares if assigned (broker holds this as collateral)</li>
          <li><strong>Genuine interest:</strong> Only sell puts on stocks you actually want to own long-term</li>
          <li><strong>Patience:</strong> Be prepared to hold if assigned—don't panic sell at a loss</li>
        </ul>
      </section>

      <section id="options-pricing">
        <h2>How Options Are Priced (The Greeks)</h2>

        <p>
          Options pricing seems complex but follows logical factors. Understanding these helps you choose profitable strikes and expirations.
        </p>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-6">
          <h3 className="font-semibold mb-4">Two Components of Option Premium</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm">1. Intrinsic Value (What it's worth now)</h4>
              <p className="text-xs text-stone-600 mb-2">
                How much the option is in-the-money
              </p>
              <ul className="text-xs ml-4 space-y-1">
                <li><strong>Call:</strong> Stock Price - Strike Price (if positive)</li>
                <li><strong>Put:</strong> Strike Price - Stock Price (if positive)</li>
                <li><strong>Example:</strong> Stock at $180, $170 call has $10 intrinsic value</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm">2. Time Value (Potential for more profit)</h4>
              <p className="text-xs text-stone-600 mb-2">
                Premium above intrinsic value—represents uncertainty and time for stock to move
              </p>
              <ul className="text-xs ml-4 space-y-1">
                <li><strong>More time = higher premium</strong> (more chance for big moves)</li>
                <li><strong>Higher volatility = higher premium</strong> (bigger expected swings)</li>
                <li><strong>Decays to zero by expiration</strong> (time decay = theta)</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>The Greeks (Simplified)</h3>

        <div className="space-y-3 my-6">
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-1">Delta (Δ): Price Sensitivity</h4>
            <p className="text-xs text-stone-700">
              How much option price changes when stock moves $1. Delta of 0.50 = option gains $0.50 when stock rises $1.
              <br />
              <strong>Calls:</strong> 0 to 1.0 (ITM calls near 1.0, OTM near 0)
              <br />
              <strong>Puts:</strong> -1.0 to 0 (ITM puts near -1.0)
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-1">Theta (Θ): Time Decay</h4>
            <p className="text-xs text-stone-700">
              How much option loses in value each day as expiration approaches. Options are wasting assets—time decay accelerates in final 30 days.
              <br />
              <strong>Sellers benefit from theta</strong> (collect premium as it decays)
              <br />
              <strong>Buyers fight theta</strong> (must overcome decay to profit)
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-1">Vega (V): Volatility Sensitivity</h4>
            <p className="text-xs text-stone-700">
              How much option price changes when volatility changes. High volatility = expensive options (more uncertainty).
              <br />
              <strong>Earnings reports, Fed decisions:</strong> Volatility spikes → Option premiums increase
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-1">Gamma (Γ): Delta's Rate of Change</h4>
            <p className="text-xs text-stone-700">
              How much delta changes when stock moves. High gamma (ATM options near expiration) = delta changes rapidly = high risk/reward.
            </p>
          </div>
        </div>

        <KeyTakeaway>
          <strong>For beginners:</strong> Focus on Delta (how much you gain/lose per $1 stock move) and Theta (how much you lose per day). Ignore the others until you're comfortable with basics.
        </KeyTakeaway>
      </section>

      <section id="risks-warnings">
        <h2>Risks and Warnings: What Can Go Wrong</h2>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
          <h3 className="font-semibold text-red-900 mb-4">Critical Risks to Understand</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-red-800">1. Buying Options: 100% Loss Potential</h4>
              <p className="text-sm">
                If stock doesn't move enough before expiration, your option expires worthless. 75% of options expire worthless—house edge favors sellers.
              </p>
              <p className="text-xs text-stone-600 mt-1">
                <strong>Example:</strong> Buy $5 call on Tesla hoping for earnings pop. Stock flat → Lose entire $500 premium.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-red-800">2. Naked Call Selling: Unlimited Loss</h4>
              <p className="text-sm">
                Selling calls WITHOUT owning stock = naked call. If stock moons, you must buy at high price to deliver shares.
              </p>
              <p className="text-xs text-stone-600 mt-1">
                <strong>Example:</strong> Sell $200 call on GameStop for $5 premium. GME squeezes to $400. You owe buyer shares → Must buy at $400, sell at $200 → <strong>$20,000 loss per contract.</strong>
              </p>
              <p className="text-xs text-red-700 font-semibold mt-1">
                NEVER sell naked calls as a beginner. Stick to covered calls only.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-red-800">3. Leverage Amplifies Losses</h4>
              <p className="text-sm">
                Options magnify both gains AND losses. A 10% adverse stock move can mean 100% option loss.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-red-800">4. Liquidity Risk (Wide Spreads)</h4>
              <p className="text-sm">
                Illiquid options have huge bid-ask spreads. You pay $3.50 to buy, can only sell for $2.50 → Instant 30% loss before stock moves.
              </p>
              <p className="text-xs text-stone-600 mt-1">
                <strong>Avoid:</strong> Low-volume stocks, far OTM strikes, obscure expirations
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-red-800">5. Assignment Risk (Early Exercise)</h4>
              <p className="text-sm">
                Short options can be exercised early (especially before ex-dividend dates). You may be forced to buy/sell shares at inconvenient times.
              </p>
            </div>
          </div>
        </div>

        <Blockquote author="Jesse Livermore, Legendary Trader">
          There is nothing new in Wall Street. There can't be because speculation is as old as the hills. Whatever happens in the stock market today has happened before and will happen again. But options can make old mistakes far more expensive.
        </Blockquote>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Beginner Safety Rules</h3>
          <ol className="space-y-2 text-sm">
            <li><strong>1. Start with covered calls and cash-secured puts only</strong> (limited, defined risk)</li>
            <li><strong>2. Never risk more than 2% of portfolio on one options trade</strong></li>
            <li><strong>3. Only trade liquid stocks (Apple, Microsoft, SPY)</strong> with tight bid-ask spreads</li>
            <li><strong>4. Avoid earnings week initially</strong> (volatility crush can destroy option value overnight)</li>
            <li><strong>5. Don't sell naked calls/puts</strong> until you fully understand unlimited loss potential</li>
            <li><strong>6. Paper trade first</strong> for 1-3 months before risking real money</li>
            <li><strong>7. Set stop-losses</strong> on long options (e.g., sell if down 50%)</li>
          </ol>
        </div>
      </section>

      <section id="getting-started">
        <h2>Getting Started with Options Trading</h2>

        <div className="bg-olive-50 border-l-4 border-olive-600 p-6 my-6">
          <h3 className="font-semibold mb-4">Step-by-Step Beginner Path</h3>

          <ol className="space-y-4">
            <li className="pb-3 border-b border-olive-200">
              <strong className="text-lg">1. Get Approved for Options Trading</strong>
              <p className="text-sm mt-1">
                Apply through your broker (Fidelity, Schwab, Interactive Brokers). You'll be approved for different levels:
              </p>
              <ul className="text-xs ml-4 mt-2">
                <li><strong>Level 1:</strong> Covered calls, cash-secured puts (start here)</li>
                <li><strong>Level 2:</strong> Long calls/puts (buying only)</li>
                <li><strong>Level 3+:</strong> Spreads, naked options (advanced—avoid for now)</li>
              </ul>
            </li>

            <li className="pb-3 border-b border-olive-200">
              <strong className="text-lg">2. Paper Trade for 1-3 Months</strong>
              <p className="text-sm mt-1">
                Use broker's simulation mode or thinkorswim (TD Ameritrade) paper trading. Practice without risk until profitable consistently.
              </p>
            </li>

            <li className="pb-3 border-b border-olive-200">
              <strong className="text-lg">3. Start with 100-Share Lots</strong>
              <p className="text-sm mt-1">
                Buy 100 shares of quality stock you'd hold long-term (Microsoft, Apple, SPY). This allows you to sell 1 covered call.
              </p>
            </li>

            <li className="pb-3 border-b border-olive-200">
              <strong className="text-lg">4. Sell Your First Covered Call</strong>
              <p className="text-sm mt-1">
                Choose strike 5-10% above current price, 30-45 days to expiration. Collect premium. Track what happens.
              </p>
            </li>

            <li>
              <strong className="text-lg">5. Scale Gradually</strong>
              <p className="text-sm mt-1">
                After 5-10 successful trades, increase position size slowly. Learn from mistakes with small amounts before committing serious capital.
              </p>
            </li>
          </ol>
        </div>

        <h3>Recommended Stocks for Beginners</h3>
        <ul>
          <li><strong>Blue chips with high liquidity:</strong> Apple (AAPL), Microsoft (MSFT), Google (GOOGL)</li>
          <li><strong>Index ETFs:</strong> SPY (S&P 500), QQQ (Nasdaq), IWM (Russell 2000)</li>
          <li><strong>Avoid:</strong> Penny stocks, low-volume companies, highly volatile meme stocks (initially)</li>
        </ul>
      </section>

      <section id="conclusion">
        <h2>Conclusion: Options as a Tool, Not a Gamble</h2>

        <p>
          Options are neutral—neither good nor bad. They're tools. Used responsibly (covered calls, cash-secured puts), they generate consistent income and improve entries. Used recklessly (gambling on earnings, selling naked calls), they destroy accounts.
        </p>

        <div className="bg-gold-50 border-l-4 border-gold-600 p-6 my-6">
          <h3 className="font-semibold mb-3">Your Options Trading Checklist</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Get Level 1 options approval from broker</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Paper trade for 1-3 months until consistently profitable</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Understand calls vs puts, strike price, expiration, premium</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Buy 100 shares of quality stock for covered call practice</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Sell first covered call at 30-45 days, 5-10% OTM strike</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Never risk more than 2% of portfolio on single options trade</span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <span>Avoid naked calls/puts until you understand unlimited risk</span>
            </label>
          </div>
        </div>

        <KeyTakeaway>
          <strong>Start conservative. Stay conservative.</strong> The investors making millions from options aren't gambling—they're selling premium to gamblers (covered calls, cash-secured puts) and collecting consistent income. Be the casino, not the gambler.
        </KeyTakeaway>

        <p className="mt-6">
          Options trading is a learnable skill, not magic. Master the basics (calls, puts, covered calls, cash-secured puts) over 6-12 months before attempting advanced strategies. Your future self—with a portfolio generating 1-2% monthly from option premiums—will thank you for learning properly.
        </p>
      </section>
    </ArticleLayout>
  )
}
