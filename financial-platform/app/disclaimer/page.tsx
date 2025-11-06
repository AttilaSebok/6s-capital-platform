import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer & Legal | money365.market',
  description: 'Important legal disclaimers, affiliate disclosure, and terms of use for money365.market professional investment platform.',
}

export default function DisclaimerPage() {
  return (
    <div className="bg-stone-50">
      {/* Hero Section - Sharp & Wise */}
      <section className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-crimson text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Disclaimer & Legal
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 leading-relaxed max-w-3xl mx-auto mb-4">
              Important information about using money365.market
            </p>
            <p className="text-sm text-stone-400">
              Last Updated: November 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Investment Disclaimer */}
            <div className="bg-white border-2 border-soft-orange rounded-none shadow-xl p-8 lg:p-10">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-red-600 border-2 border-red-700 rounded-none flex items-center justify-center mr-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-2">
                    Investment & Financial Advice Disclaimer
                  </h2>
                  <p className="text-red-600 font-bold text-sm uppercase tracking-wider">
                    NOT FINANCIAL ADVICE
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-stone-700">
                <p className="text-lg leading-relaxed">
                  The information provided on <span className="font-semibold text-bronze-600">money365.market</span> is for <strong>educational and informational purposes only</strong>.
                  Nothing on this website should be construed as financial, investment, tax, or legal advice.
                </p>

                <p className="leading-relaxed">
                  We are <strong>not licensed financial advisors, brokers, or investment professionals</strong>. All content,
                  including articles, analysis, opinions, and recommendations, represents our personal views and research,
                  which may be incomplete or incorrect.
                </p>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  Your Responsibility
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Do Your Own Research (DYOR)</strong>: Never make investment decisions based solely on information found on this site.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Consult Professionals</strong>: Always seek advice from qualified financial advisors who understand your personal situation.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Understand Risks</strong>: All investments carry risk, including the potential loss of your entire investment.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Past Performance</strong>: Historical returns do not guarantee future results.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Personal Circumstances</strong>: What works for one investor may not be suitable for you.
                    </div>
                  </li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-none p-6 mt-6">
                  <p className="font-semibold text-red-800 leading-relaxed">
                    ⚠️ <span className="uppercase tracking-wider">Important:</span> You are solely responsible for your investment decisions and their outcomes.
                    money365.market accepts no liability for any losses or damages resulting from the use of information on this website.
                  </p>
                </div>
              </div>
            </div>

            {/* Affiliate Disclosure */}
            <div className="bg-white border-2 border-soft-orange rounded-none shadow-xl p-8 lg:p-10">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-soft-orange border-2 border-soft-orange-dark rounded-none flex items-center justify-center mr-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-2">
                    Affiliate Disclosure
                  </h2>
                  <p className="text-bronze-600 font-bold text-sm uppercase tracking-wider">
                    TRANSPARENCY IN PARTNERSHIPS
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-stone-700">
                <p className="text-lg leading-relaxed">
                  money365.market participates in affiliate marketing programs. This means we may receive a commission
                  when you sign up for services or make purchases through links on our website.
                </p>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  How Affiliate Relationships Work
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">No Extra Cost to You</strong>: Affiliate commissions do not increase the price you pay.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Editorial Independence</strong>: We only recommend products and services we genuinely believe provide value.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Honest Reviews</strong>: Our opinions remain objective, regardless of affiliate relationships.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Clear Labeling</strong>: Affiliate links are clearly marked when present in content.
                    </div>
                  </li>
                </ul>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  Current Affiliate Partners
                </h3>

                <p className="leading-relaxed">
                  We may have affiliate relationships with:
                </p>

                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Online brokers (Interactive Brokers, eToro, Trading212, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Financial data providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Investment tools and platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Educational resources and courses</span>
                  </li>
                </ul>

                <div className="bg-orange-50 border-l-4 border-bronze-600 rounded-none p-6 mt-6">
                  <p className="font-semibold text-bronze-700 leading-relaxed">
                    💡 <span className="uppercase tracking-wider">Our Commitment:</span> We prioritize your best interests over affiliate commissions.
                    If a product or service doesn't meet our quality standards, we won't recommend it—regardless of commission potential.
                  </p>
                </div>
              </div>
            </div>

            {/* No Guarantees */}
            <div className="bg-white border-2 border-stone-300 rounded-none shadow-xl p-8 lg:p-10">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
                No Guarantees or Warranties
              </h2>

              <div className="space-y-4 text-stone-700">
                <p className="text-lg leading-relaxed">
                  money365.market makes no representations or warranties about the accuracy, completeness, or reliability
                  of information provided on this website.
                </p>

                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Information Currency</strong>: Market data and information may be outdated or inaccurate.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Technical Issues</strong>: We do not guarantee uninterrupted or error-free access to our website.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Third-Party Content</strong>: We are not responsible for content or accuracy of external links.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Results Disclaimer</strong>: We make no guarantees about investment outcomes or profits.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="bg-white border-2 border-red-600 rounded-none shadow-xl p-8 lg:p-10">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-red-600 inline-block">
                Investment Risk Warning
              </h2>

              <div className="space-y-4 text-stone-700">
                <div className="bg-red-50 border-l-4 border-red-600 rounded-none p-6 mb-6">
                  <p className="font-bold text-red-800 mb-3 text-lg">
                    ⚠️ INVESTING INVOLVES SUBSTANTIAL RISK
                  </p>
                  <p className="text-red-700 leading-relaxed">
                    You can lose some or all of your invested capital. Only invest money you can afford to lose.
                  </p>
                </div>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  Common Investment Risks
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Market Risk</strong>: Stock prices can decline due to market conditions
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Volatility Risk</strong>: Prices can fluctuate significantly in short periods
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Liquidity Risk</strong>: You may not be able to sell investments when desired
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Company-Specific Risk</strong>: Individual companies can fail or underperform
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Currency Risk</strong>: Exchange rate fluctuations can affect international investments
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Leverage Risk</strong>: Borrowed money amplifies both gains and losses
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Privacy & Data */}
            <div className="bg-white border-2 border-stone-300 rounded-none shadow-xl p-8 lg:p-10">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
                Privacy & Data Protection
              </h2>

              <div className="space-y-4 text-stone-700">
                <p className="text-lg leading-relaxed">
                  We respect your privacy and are committed to protecting your personal data in accordance with
                  applicable data protection laws, including GDPR (General Data Protection Regulation).
                </p>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  Information We Collect
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Contact Information</strong>: Name, email address (when you subscribe or contact us)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Usage Data</strong>: Pages visited, time spent, browser information (via analytics)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-3 text-xl">•</span>
                    <div>
                      <strong className="text-deep-brown">Cookies</strong>: We use cookies to improve user experience and analyze traffic
                    </div>
                  </li>
                </ul>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  How We Use Your Data
                </h3>

                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>To send newsletters and updates (with your consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>To improve website functionality and content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>To respond to your inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>To comply with legal obligations</span>
                  </li>
                </ul>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  Your Rights
                </h3>

                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Right to access your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Right to correct inaccurate data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Right to delete your data (right to be forgotten)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Right to unsubscribe from communications at any time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Right to withdraw consent</span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed">
                  For privacy concerns, contact us at:{' '}
                  <a href="mailto:office@money365.market" className="text-bronze-600 hover:text-bronze-700 font-semibold hover:underline">
                    office@money365.market
                  </a>
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white border-2 border-stone-300 rounded-none shadow-xl p-8 lg:p-10">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
                Intellectual Property & Copyright
              </h2>

              <div className="space-y-4 text-stone-700">
                <p className="text-lg leading-relaxed">
                  All content on money365.market, including text, graphics, logos, and images, is the property of
                  money365.market or its content suppliers and is protected by copyright laws.
                </p>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  Permitted Use
                </h3>

                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>You may view and print pages for personal, non-commercial use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>You may share links to our content on social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Brief excerpts may be quoted with proper attribution</span>
                  </li>
                </ul>

                <h3 className="font-crimson text-xl font-bold text-deep-brown mt-8 mb-4 pb-2 border-b-2 border-bronze-600">
                  Prohibited Use
                </h3>

                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Reproducing, distributing, or republishing content without permission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Using content for commercial purposes without a license</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Modifying or removing copyright notices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Scraping or automated data collection</span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed">
                  For licensing inquiries, contact:{' '}
                  <a href="mailto:office@money365.market" className="text-bronze-600 hover:text-bronze-700 font-semibold hover:underline">
                    office@money365.market
                  </a>
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white border-2 border-stone-300 rounded-none shadow-xl p-8 lg:p-10">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
                Limitation of Liability
              </h2>

              <div className="space-y-4 text-stone-700">
                <p className="text-lg leading-relaxed">
                  To the fullest extent permitted by law, money365.market and its owners, employees, and affiliates
                  shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
                  arising from:
                </p>

                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Your use of this website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Errors, omissions, or inaccuracies in content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Investment decisions made based on information provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Technical issues, downtime, or data loss</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Third-party websites or services we link to</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bronze-600 mr-2">→</span>
                    <span>Unauthorized access to your data</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Changes to Disclaimer */}
            <div className="bg-white border-2 border-stone-300 rounded-none shadow-xl p-8 lg:p-10">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold text-deep-brown mb-6 pb-3 border-b-4 border-bronze-600 inline-block">
                Changes to This Disclaimer
              </h2>

              <div className="space-y-4 text-stone-700">
                <p className="text-lg leading-relaxed">
                  We reserve the right to update this disclaimer at any time. Changes will be posted on this page
                  with an updated "Last Updated" date.
                </p>

                <p className="leading-relaxed">
                  Your continued use of money365.market after changes are posted constitutes your acceptance of the updated terms.
                </p>
              </div>
            </div>

            {/* Contact for Legal */}
            <div className="bg-gradient-to-br from-deep-brown to-rich-brown border-2 border-bronze-600 rounded-none shadow-xl p-8 lg:p-10">
              <h2 className="font-crimson text-2xl md:text-3xl font-bold text-white mb-4">
                Questions About This Disclaimer?
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                If you have any questions or concerns about our disclaimer, terms of use, or privacy practices,
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-bronze-600 border-2 border-bronze-700 text-deep-brown font-bold text-sm uppercase tracking-wide rounded-none shadow-xl hover:bg-bronze-700 hover:text-white transition-all duration-200 text-center"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:office@money365.market"
                  className="px-8 py-3 bg-transparent border-2 border-bronze-600 text-bronze-600 font-bold text-sm uppercase tracking-wide rounded-none shadow-xl hover:bg-bronze-600 hover:text-deep-brown transition-all duration-200 text-center"
                >
                  Email Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
