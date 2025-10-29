import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer & Legal | 6s Capital',
  description: 'Important legal disclaimers, affiliate disclosure, and terms of use for 6s Capital financial platform.',
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Disclaimer & Legal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Important information about using 6s Capital
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last Updated: October 29, 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Investment Disclaimer */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Investment & Financial Advice Disclaimer
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">
                  NOT FINANCIAL ADVICE
                </p>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                The information provided on 6s Capital is for <strong>educational and informational purposes only</strong>.
                Nothing on this website should be construed as financial, investment, tax, or legal advice.
              </p>

              <p className="mb-4">
                We are <strong>not licensed financial advisors, brokers, or investment professionals</strong>. All content,
                including articles, analysis, opinions, and recommendations, represents our personal views and research,
                which may be incomplete or incorrect.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Your Responsibility
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Do Your Own Research (DYOR)</strong>: Never make investment decisions based solely on information found on this site.
                </li>
                <li>
                  <strong>Consult Professionals</strong>: Always seek advice from qualified financial advisors who understand your personal situation.
                </li>
                <li>
                  <strong>Understand Risks</strong>: All investments carry risk, including the potential loss of your entire investment.
                </li>
                <li>
                  <strong>Past Performance</strong>: Historical returns do not guarantee future results.
                </li>
                <li>
                  <strong>Personal Circumstances</strong>: What works for one investor may not be suitable for you.
                </li>
              </ul>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
                <p className="font-semibold text-yellow-800 dark:text-yellow-300">
                  ⚠️ Important: You are solely responsible for your investment decisions and their outcomes.
                  6s Capital accepts no liability for any losses or damages resulting from the use of information on this website.
                </p>
              </div>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Affiliate Disclosure
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">
                  TRANSPARENCY IN PARTNERSHIPS
                </p>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                6s Capital participates in affiliate marketing programs. This means we may receive a commission
                when you sign up for services or make purchases through links on our website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                How Affiliate Relationships Work
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>No Extra Cost to You</strong>: Affiliate commissions do not increase the price you pay.
                </li>
                <li>
                  <strong>Editorial Independence</strong>: We only recommend products and services we genuinely believe provide value.
                </li>
                <li>
                  <strong>Honest Reviews</strong>: Our opinions remain objective, regardless of affiliate relationships.
                </li>
                <li>
                  <strong>Clear Labeling</strong>: Affiliate links are clearly marked when present in content.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Current Affiliate Partners
              </h3>

              <p className="mb-2">
                We may have affiliate relationships with:
              </p>

              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Online brokers (Interactive Brokers, eToro, Trading212, etc.)</li>
                <li>Financial data providers</li>
                <li>Investment tools and platforms</li>
                <li>Educational resources and courses</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                <p className="font-semibold text-blue-800 dark:text-blue-300">
                  💡 Our Commitment: We prioritize your best interests over affiliate commissions.
                  If a product or service doesn't meet our quality standards, we won't recommend it—regardless of commission potential.
                </p>
              </div>
            </div>
          </div>

          {/* No Guarantees */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No Guarantees or Warranties
            </h2>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                6s Capital makes no representations or warranties about the accuracy, completeness, or reliability
                of information provided on this website.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Information Currency</strong>: Market data and information may be outdated or inaccurate.
                </li>
                <li>
                  <strong>Technical Issues</strong>: We do not guarantee uninterrupted or error-free access to our website.
                </li>
                <li>
                  <strong>Third-Party Content</strong>: We are not responsible for content or accuracy of external links.
                </li>
                <li>
                  <strong>Results Disclaimer</strong>: We make no guarantees about investment outcomes or profits.
                </li>
              </ul>
            </div>
          </div>

          {/* Risk Warning */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Investment Risk Warning
            </h2>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 mb-4">
                <p className="font-bold text-red-800 dark:text-red-300 mb-2">
                  ⚠️ INVESTING INVOLVES SUBSTANTIAL RISK
                </p>
                <p className="text-red-700 dark:text-red-300">
                  You can lose some or all of your invested capital. Only invest money you can afford to lose.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Common Investment Risks
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Market Risk</strong>: Stock prices can decline due to market conditions
                </li>
                <li>
                  <strong>Volatility Risk</strong>: Prices can fluctuate significantly in short periods
                </li>
                <li>
                  <strong>Liquidity Risk</strong>: You may not be able to sell investments when desired
                </li>
                <li>
                  <strong>Company-Specific Risk</strong>: Individual companies can fail or underperform
                </li>
                <li>
                  <strong>Currency Risk</strong>: Exchange rate fluctuations can affect international investments
                </li>
                <li>
                  <strong>Leverage Risk</strong>: Borrowed money amplifies both gains and losses
                </li>
              </ul>
            </div>
          </div>

          {/* Privacy & Data */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy & Data Protection
            </h2>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                We respect your privacy and are committed to protecting your personal data in accordance with
                applicable data protection laws, including GDPR (General Data Protection Regulation).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Information We Collect
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Contact Information</strong>: Name, email address (when you subscribe or contact us)
                </li>
                <li>
                  <strong>Usage Data</strong>: Pages visited, time spent, browser information (via analytics)
                </li>
                <li>
                  <strong>Cookies</strong>: We use cookies to improve user experience and analyze traffic
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                How We Use Your Data
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>To send newsletters and updates (with your consent)</li>
                <li>To improve website functionality and content</li>
                <li>To respond to your inquiries</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Your Rights
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your data (right to be forgotten)</li>
                <li>Right to unsubscribe from communications at any time</li>
                <li>Right to withdraw consent</li>
              </ul>

              <p className="mt-4">
                For privacy concerns, contact us at:{' '}
                <a href="mailto:privacy@6scapital.com" className="text-primary-600 hover:underline">
                  privacy@6scapital.com
                </a>
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Intellectual Property & Copyright
            </h2>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                All content on 6s Capital, including text, graphics, logos, and images, is the property of
                6s Capital or its content suppliers and is protected by copyright laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Permitted Use
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>You may view and print pages for personal, non-commercial use</li>
                <li>You may share links to our content on social media</li>
                <li>Brief excerpts may be quoted with proper attribution</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                Prohibited Use
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>Reproducing, distributing, or republishing content without permission</li>
                <li>Using content for commercial purposes without a license</li>
                <li>Modifying or removing copyright notices</li>
                <li>Scraping or automated data collection</li>
              </ul>

              <p className="mt-4">
                For licensing inquiries, contact:{' '}
                <a href="mailto:legal@6scapital.com" className="text-primary-600 hover:underline">
                  legal@6scapital.com
                </a>
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Limitation of Liability
            </h2>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                To the fullest extent permitted by law, 6s Capital and its owners, employees, and affiliates
                shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
                arising from:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Your use of this website</li>
                <li>Errors, omissions, or inaccuracies in content</li>
                <li>Investment decisions made based on information provided</li>
                <li>Technical issues, downtime, or data loss</li>
                <li>Third-party websites or services we link to</li>
                <li>Unauthorized access to your data</li>
              </ul>
            </div>
          </div>

          {/* Changes to Disclaimer */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Changes to This Disclaimer
            </h2>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                We reserve the right to update this disclaimer at any time. Changes will be posted on this page
                with an updated "Last Updated" date.
              </p>

              <p>
                Your continued use of 6s Capital after changes are posted constitutes your acceptance of the updated terms.
              </p>
            </div>
          </div>

          {/* Contact for Legal */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Questions About This Disclaimer?
            </h2>
            <p className="mb-4 text-primary-100">
              If you have any questions or concerns about our disclaimer, terms of use, or privacy practices,
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Contact Us
              </a>
              <a
                href="mailto:legal@6scapital.com"
                className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors text-center"
              >
                Email Legal Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
