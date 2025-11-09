import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer for Money365.Market | money365.market',
  description: 'Important legal disclaimers, investment risk disclosure, and terms of use for money365.market. Not financial advice.',
  keywords: 'disclaimer, legal, investment disclaimer, risk disclosure, not financial advice',
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4">
      <div className="max-w-4xl mx-auto bg-dark-header rounded-lg shadow-2xl border border-gray-800">
        {/* Header */}
        <div className="border-b border-gray-700 p-6">
          <h1 className="text-3xl font-bold text-white font-crimson mb-2">
            Disclaimer for Money365.Market
          </h1>
          <p className="text-gray-400 text-sm">Last Updated: November 9, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 text-gray-300">

          {/* Important Notice */}
          <section className="bg-red-900/20 border-2 border-red-500/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">Important Notice</h2>
            <p className="mb-3 font-semibold text-yellow-400">
              PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING MONEY365.MARKET
            </p>
            <p className="text-gray-300">
              This Disclaimer applies to the website money365.market and all content, information, tools, products, and services provided by Money365.Market ("we", "us", "our", or "the Website"). By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
            </p>
          </section>

          {/* 1. General Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">1. General Disclaimer</h2>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">1.1 No Financial Advice</h3>
            <p className="mb-3 font-semibold text-red-400">
              THE CONTENT ON MONEY365.MARKET IS FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY. IT DOES NOT CONSTITUTE FINANCIAL, INVESTMENT, LEGAL, TAX, OR PROFESSIONAL ADVICE.
            </p>
            <p className="mb-3">
              We are not registered investment advisors, financial planners, brokers, or securities dealers. Nothing on this Website should be interpreted as:
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>A recommendation to buy, sell, or hold any security or investment</li>
              <li>Personalized investment advice tailored to your specific situation</li>
              <li>A solicitation or offer to buy or sell securities</li>
              <li>Professional financial planning or wealth management services</li>
              <li>Tax, legal, or accounting advice</li>
            </ul>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">1.2 Not a Fiduciary</h3>
            <p className="mb-4">
              We do not act as a fiduciary or advisor to you or any other user. We do not have a professional or advisory relationship with you, and no such relationship is created by your use of our Website or Services.
            </p>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">1.3 Educational Content Only</h3>
            <p>
              All articles, guides, tutorials, analysis, and commentary on Money365.Market are provided for educational purposes to help you become a more informed investor. They are not tailored to your specific circumstances, risk tolerance, investment objectives, or financial situation.
            </p>
          </section>

          {/* 2. Investment Risk Disclosure */}
          <section className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">2. Investment Risk Disclosure</h2>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">2.1 Risk of Loss</h3>
            <p className="mb-3 font-semibold text-red-400">
              ALL INVESTMENTS INVOLVE RISK, INCLUDING THE POSSIBLE LOSS OF PRINCIPAL.
            </p>
            <p className="mb-3">
              Investing in stocks, bonds, mutual funds, ETFs, options, futures, cryptocurrencies, and other financial instruments carries significant risk. You may lose some or all of your invested capital.
            </p>
            <p className="mb-2 font-semibold">Key Investment Risks Include:</p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li><strong>Market Risk</strong>: Securities prices fluctuate based on market conditions</li>
              <li><strong>Volatility Risk</strong>: Investment values can change rapidly and unpredictably</li>
              <li><strong>Liquidity Risk</strong>: You may not be able to sell investments quickly at fair prices</li>
              <li><strong>Credit Risk</strong>: Issuers may default on their obligations</li>
              <li><strong>Interest Rate Risk</strong>: Bond values decline when interest rates rise</li>
              <li><strong>Currency Risk</strong>: Exchange rate fluctuations can affect international investments</li>
              <li><strong>Inflation Risk</strong>: Rising prices can erode investment returns</li>
              <li><strong>Regulatory Risk</strong>: Changes in laws or regulations can affect investments</li>
              <li><strong>Company-Specific Risk</strong>: Individual companies may underperform or fail</li>
              <li><strong>Cryptocurrency Risk</strong>: Highly volatile, unregulated, and speculative assets</li>
            </ul>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">2.2 Past Performance</h3>
            <p className="mb-3 font-semibold text-red-400">
              PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.
            </p>
            <p className="mb-4">
              Historical returns, back-tested results, and simulated performance do not guarantee future performance. Investment returns and principal values will fluctuate, and investments may be worth more or less than their original cost when sold.
            </p>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">2.3 No Guaranteed Returns</h3>
            <p className="mb-2">We make no representations, warranties, or guarantees regarding:</p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>Investment performance or returns</li>
              <li>The success of any investment strategy</li>
              <li>The achievement of financial goals</li>
              <li>The accuracy of forecasts or predictions</li>
              <li>The preservation of capital</li>
            </ul>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">2.4 Suitability</h3>
            <p className="mb-2">Before making any investment decision, you should:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Assess your own financial situation, risk tolerance, and investment objectives</li>
              <li>Conduct thorough independent research and due diligence</li>
              <li>Consult with qualified financial, tax, and legal professionals</li>
              <li>Understand the specific risks associated with each investment</li>
              <li>Only invest money you can afford to lose</li>
            </ul>
          </section>

          {/* 3. Accuracy of Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">3. Accuracy of Information</h2>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">3.1 No Guarantee of Accuracy</h3>
            <p className="mb-2">While we strive to provide accurate, current, and reliable information, we make no representations or warranties about:</p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>The accuracy, completeness, or timeliness of any content</li>
              <li>The reliability of data from third-party sources</li>
              <li>The absence of errors, omissions, or inaccuracies</li>
              <li>The currentness of financial data or market information</li>
            </ul>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">3.2 Third-Party Data</h3>
            <p className="mb-2">We obtain financial data, stock quotes, and market information from third-party sources including:</p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Alpha Vantage</li>
              <li>Yahoo Finance</li>
              <li>CoinGecko</li>
              <li>Other financial data providers</li>
            </ul>
            <p className="mb-2 font-semibold">We are not responsible for:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Errors or inaccuracies in third-party data</li>
              <li>Delays in data delivery</li>
              <li>Interruptions in data feeds</li>
              <li>Actions you take based on third-party data</li>
            </ul>
          </section>

          {/* 5. Affiliate and Advertising Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">5. Affiliate and Advertising Disclaimer</h2>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">5.1 Affiliate Relationships</h3>
            <p className="mb-2">Money365.Market participates in affiliate marketing programs and may earn commissions when you:</p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Click on affiliate links</li>
              <li>Purchase products or services through our referral links</li>
              <li>Sign up for brokerage accounts or financial services through our links</li>
            </ul>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">5.2 Editorial Independence</h3>
            <p className="mb-3">
              Despite our affiliate relationships, we maintain editorial independence. Our content, reviews, and recommendations are based on objective analysis and research. However, we acknowledge that affiliate relationships may create potential conflicts of interest.
            </p>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">5.3 Your Due Diligence</h3>
            <p className="mb-2">Before clicking affiliate links or making purchases:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Conduct your own research on products and services</li>
              <li>Read terms and conditions carefully</li>
              <li>Compare multiple options and providers</li>
              <li>Understand all fees, costs, and risks</li>
              <li>Verify that products meet your specific needs</li>
            </ul>
          </section>

          {/* 11. Limitation of Liability */}
          <section className="bg-red-900/20 border-2 border-red-500/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">11. Limitation of Liability</h2>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">11.1 No Liability for Losses</h3>
            <p className="mb-4 font-semibold text-red-400">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MONEY365.MARKET SHALL NOT BE LIABLE FOR ANY INVESTMENT LOSSES, FINANCIAL DAMAGES, OR OTHER HARM ARISING FROM YOUR USE OF OUR WEBSITE OR RELIANCE ON OUR CONTENT.
            </p>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">11.2 Use at Your Own Risk</h3>
            <p className="mb-2">You acknowledge and agree that:</p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>You use our Website at your own risk</li>
              <li>All investment decisions are your sole responsibility</li>
              <li>We are not liable for any financial losses you incur</li>
              <li>We are not liable for errors, omissions, or inaccuracies in content</li>
            </ul>

            <p className="text-sm">
              For complete limitation of liability terms, please refer to our{' '}
              <Link href="/terms" className="text-soft-orange hover:underline">Terms of Service</Link>.
            </p>
          </section>

          {/* 13. Regulatory Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">13. Regulatory Disclaimer</h2>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">13.1 Not a Registered Investment Advisor</h3>
            <p className="mb-2">Money365.Market is <strong>not registered</strong> as:</p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>An investment advisor with the SEC or any state securities regulator</li>
              <li>A broker-dealer</li>
              <li>A securities dealer</li>
              <li>A financial planner</li>
              <li>An insurance agent</li>
            </ul>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">13.2 Not FINRA/SEC Regulated</h3>
            <p className="mb-2">We are not subject to regulation by:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>The Securities and Exchange Commission (SEC)</li>
              <li>Financial Industry Regulatory Authority (FINRA)</li>
              <li>Any state securities regulator</li>
              <li>Any other financial regulatory body</li>
            </ul>
          </section>

          {/* 17. Professional Consultation */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">17. Professional Consultation</h2>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">17.1 Seek Professional Advice</h3>
            <p className="mb-2">Before making any investment decision, you should consult with qualified professionals, including:</p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li><strong>Financial Advisors</strong>: For personalized investment advice and planning</li>
              <li><strong>Tax Advisors</strong>: For tax implications and strategies</li>
              <li><strong>Legal Advisors</strong>: For legal considerations and estate planning</li>
              <li><strong>Accountants</strong>: For financial planning and record-keeping</li>
            </ul>

            <h3 className="text-xl font-semibold text-soft-orange mb-3">17.2 Credentials Matter</h3>
            <p className="mb-2">When selecting professionals, verify their:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Credentials and licenses</li>
              <li>Regulatory status and compliance history</li>
              <li>Fiduciary status (do they act in your best interest?)</li>
              <li>Fee structure and potential conflicts of interest</li>
              <li>Professional experience and expertise</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">18. Contact Information</h2>
            <p className="mb-3">If you have questions about this Disclaimer, please contact us:</p>
            <div className="bg-stone-800 p-4 rounded-lg">
              <p className="font-semibold">Money365.Market</p>
              <p>Email: <a href="mailto:office@money365.market" className="text-soft-orange hover:underline">office@money365.market</a></p>
              <p>Website: <Link href="/contact" className="text-soft-orange hover:underline">https://money365.market/contact</Link></p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">20. Acknowledgment and Acceptance</h2>
            <p className="mb-3 font-semibold">BY USING MONEY365.MARKET, YOU ACKNOWLEDGE THAT:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>You have read and understood this Disclaimer in its entirety</li>
              <li>You understand that we do not provide financial advice</li>
              <li>You understand the risks of investing</li>
              <li>You will conduct your own research and due diligence</li>
              <li>You will consult with qualified professionals before making investment decisions</li>
              <li>You take full responsibility for your investment decisions and outcomes</li>
              <li>You will not hold Money365.Market liable for any investment losses</li>
              <li>You agree to indemnify us against any claims arising from your use of our Website</li>
            </ol>
          </section>

          {/* Final Warning */}
          <section className="bg-red-900/30 border-2 border-red-500 rounded-lg p-6 text-center">
            <p className="font-bold text-red-400 text-lg mb-3">
              INVESTMENT IN SECURITIES INVOLVES RISK OF LOSS. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS. YOU MAY LOSE SOME OR ALL OF YOUR INVESTED CAPITAL.
            </p>
            <p className="text-gray-300 text-sm">
              THIS DISCLAIMER SHOULD BE READ IN CONJUNCTION WITH OUR{' '}
              <Link href="/terms" className="text-soft-orange hover:underline">TERMS OF SERVICE</Link>
              {' '}AND{' '}
              <Link href="/privacy" className="text-soft-orange hover:underline">PRIVACY POLICY</Link>.
            </p>
          </section>

          {/* Version Info */}
          <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-700">
            <p>Last Reviewed: November 9, 2025</p>
            <p>Version: 1.0</p>
          </div>

        </div>
      </div>
    </div>
  )
}
