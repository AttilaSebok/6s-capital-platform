'use client'

import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4">
      <div className="max-w-4xl mx-auto bg-dark-header rounded-lg shadow-2xl border border-gray-800">
        {/* Header */}
        <div className="border-b border-gray-700 p-6">
          <h1 className="text-3xl font-bold text-white font-crimson mb-2">Terms of Service for Money365.Market</h1>
          <p className="text-gray-400 text-sm">Last Updated: November 9, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 text-gray-300">
          {/* 1. Agreement to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">1. Agreement to Terms</h2>
            <p className="mb-3">
              Welcome to Money365.Market (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website located at money365.market (the &quot;Website&quot;) and all associated services, features, content, and applications (collectively, the &quot;Services&quot;).
            </p>
            <p className="mb-3 font-semibold text-yellow-400">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
            </p>
            <p className="mb-3">
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting. Your continued use of the Services after changes are posted constitutes your acceptance of the modified Terms.
            </p>
            <p className="text-sm bg-yellow-900/30 border-l-4 border-yellow-500 p-4">
              <strong>Important Notice:</strong> Our Services provide financial information and educational content but do not constitute financial advice. Please read Section 4 (Financial Disclaimer) carefully.
            </p>
          </section>

          {/* 2. Eligibility and Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">2. Eligibility and Account Registration</h2>

            <h3 className="text-xl font-semibold text-white mb-3">2.1 Age Requirement</h3>
            <p className="mb-4">
              You must be at least 18 years old (or the age of majority in your jurisdiction) to use our Services. By using our Services, you represent and warrant that you meet this age requirement.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Account Creation</h3>
            <p className="mb-3">To access certain features of our Services, you may need to create an account. When creating an account, you agree to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.3 Account Termination</h3>
            <p className="mb-3">We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Prolonged inactivity</li>
              <li>At your request</li>
            </ul>
          </section>

          {/* 3. Description of Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">3. Description of Services</h2>
            <p className="mb-3">Money365.Market provides:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li><strong>Financial Information:</strong> Real-time and delayed stock quotes, market data, and financial news</li>
              <li><strong>Educational Content:</strong> Articles, guides, tutorials, and resources about investing and personal finance</li>
              <li><strong>Portfolio Tracking:</strong> Tools to monitor and analyze your investment portfolio (data provided by you)</li>
              <li><strong>Market Analysis:</strong> Charts, technical indicators, and market insights</li>
              <li><strong>Newsletter:</strong> Regular updates on market trends and investment opportunities</li>
              <li><strong>Community Features:</strong> Comments, forums, and user discussions (if available)</li>
            </ul>
            <p className="text-sm bg-gray-800/50 border-l-4 border-soft-orange p-4">
              Our Services are provided &quot;as is&quot; and we may modify, suspend, or discontinue any aspect of our Services at any time without notice.
            </p>
          </section>

          {/* 4. Financial Disclaimer */}
          <section className="bg-red-900/20 border-2 border-red-500/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">4. Financial Disclaimer</h2>

            <h3 className="text-xl font-semibold text-white mb-3">4.1 Not Financial Advice</h3>
            <p className="mb-3 font-semibold text-yellow-400">
              IMPORTANT: The information provided on Money365.Market is for informational and educational purposes only. It does not constitute:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Financial advice</li>
              <li>Investment recommendations</li>
              <li>Offers to buy or sell securities</li>
              <li>Tax, legal, or accounting advice</li>
              <li>Personalized investment strategies</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">4.2 No Professional Relationship</h3>
            <p className="mb-4">
              Nothing on our Website creates a fiduciary, advisory, or professional relationship between you and Money365.Market. We are not registered investment advisors, brokers, or financial planners.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.3 Investment Risks</h3>
            <p className="mb-3 font-semibold text-red-400">
              ALL INVESTMENTS INVOLVE RISK, including the potential loss of principal. Past performance does not guarantee future results. You should:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Conduct your own research and due diligence</li>
              <li>Consult with qualified financial, tax, and legal professionals</li>
              <li>Understand the risks before making any investment decisions</li>
              <li>Only invest money you can afford to lose</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">4.4 No Guarantees</h3>
            <p className="mb-3">We make no guarantees, representations, or warranties about:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The accuracy, completeness, or timeliness of information</li>
              <li>Investment outcomes or returns</li>
              <li>The suitability of any investment strategy</li>
              <li>Market performance or predictions</li>
            </ul>
          </section>

          {/* 5. User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">5. User Responsibilities and Conduct</h2>

            <h3 className="text-xl font-semibold text-white mb-3">5.1 Acceptable Use</h3>
            <p className="mb-3">You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code (viruses, malware, etc.)</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape, data mine, or use automated tools without permission</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Post false, misleading, or fraudulent content</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">5.2 User-Generated Content</h3>
            <p className="mb-3">If you post content on our Website, you:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Retain ownership of your content</li>
              <li>Grant us a license to use, reproduce, modify, and display your content</li>
              <li>Represent that you have the right to post the content</li>
              <li>Acknowledge that we may remove or modify your content at any time</li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">6. Intellectual Property Rights</h2>
            <p className="mb-3">
              All content on Money365.Market, including text, graphics, logos, images, software, and design, is owned by or licensed to Money365.Market and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-3">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for personal, non-commercial purposes, subject to these Terms.
            </p>
            <p>You may not copy, reproduce, distribute, modify, or reverse engineer our content without permission.</p>
          </section>

          {/* 7. Affiliate Marketing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">7. Affiliate Marketing and Advertising</h2>
            <p className="mb-3">
              Money365.Market participates in affiliate marketing programs. We may earn commissions when you click on affiliate links or make purchases through our referral links.
            </p>
            <p className="mb-3">
              Our affiliate relationships do not influence our editorial content or opinions. We maintain editorial independence and only recommend products or services we believe provide value.
            </p>
            <p className="text-sm">
              Purchases made through affiliate links are transactions between you and the third-party merchant. We are not responsible for the quality of products, merchant policies, or customer service.
            </p>
          </section>

          {/* 8. Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">8. Privacy and Data Protection</h2>
            <p className="mb-3">
              Your use of our Services is also governed by our{' '}
              <Link href="/privacy" className="text-soft-orange hover:text-orange-400 underline">
                Privacy Policy
              </Link>, which is incorporated into these Terms by reference.
            </p>
            <p>
              For information about cookies, please see our{' '}
              <Link href="/cookie-policy" className="text-soft-orange hover:text-orange-400 underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* 9. Disclaimers */}
          <section className="bg-gray-800/50 border-2 border-gray-600 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">9. Disclaimers and Limitations of Liability</h2>

            <h3 className="text-xl font-semibold text-white mb-3">9.1 No Warranties</h3>
            <p className="mb-4 uppercase text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">9.2 Limitation of Liability</h3>
            <p className="mb-3 uppercase text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MONEY365.MARKET SHALL NOT BE LIABLE FOR ANY:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Investment losses or financial damages</li>
              <li>Damages arising from use or inability to use the Services</li>
            </ul>
          </section>

          {/* 10. Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">10. Indemnification</h2>
            <p className="mb-3">
              You agree to indemnify, defend, and hold harmless Money365.Market from any claims, liabilities, damages, losses, costs, or expenses arising from:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or regulations</li>
              <li>Content you submit or transmit</li>
              <li>Your investment decisions or financial losses</li>
            </ul>
          </section>

          {/* 11. Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">11. Dispute Resolution and Governing Law</h2>

            <h3 className="text-xl font-semibold text-white mb-3">11.1 Governing Law</h3>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">11.2 Arbitration Agreement</h3>
            <p className="mb-3 font-semibold text-yellow-400">
              PLEASE READ THIS SECTION CAREFULLY - IT AFFECTS YOUR LEGAL RIGHTS
            </p>
            <p className="mb-3">
              Any dispute, claim, or controversy arising out of or relating to these Terms shall be resolved through binding arbitration, except for intellectual property disputes which may be brought in court.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">11.3 Class Action Waiver</h3>
            <p className="uppercase text-sm">
              YOU AGREE THAT ANY ARBITRATION SHALL BE CONDUCTED ON AN INDIVIDUAL BASIS ONLY AND NOT AS A CLASS ACTION. YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT.
            </p>
          </section>

          {/* 12. Regulatory Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">12. Regulatory and Compliance Information</h2>

            <h3 className="text-xl font-semibold text-white mb-3">12.1 Not a Registered Investment Advisor</h3>
            <p className="mb-4">
              Money365.Market is not a registered investment advisor with the SEC or any other regulatory authority. We do not provide personalized investment advice or manage client assets.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">12.2 Educational Purpose</h3>
            <p className="mb-4">
              Our content is intended for educational and informational purposes only. It should not replace professional financial advice.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">12.3 Risk Disclosure</h3>
            <p className="text-red-400 font-semibold">
              INVESTING IN SECURITIES INVOLVES RISK OF LOSS. Past performance is not indicative of future results. You may lose some or all of your invested capital.
            </p>
          </section>

          {/* 13. Miscellaneous */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">13. Miscellaneous Provisions</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Money365.Market</li>
              <li><strong>Severability:</strong> If any provision is invalid, the remaining provisions remain in effect</li>
              <li><strong>Waiver:</strong> Our failure to enforce any right does not constitute a waiver</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our consent</li>
              <li><strong>Survival:</strong> Provisions that should survive termination shall survive</li>
            </ul>
          </section>

          {/* 14. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">14. Contact Information</h2>
            <p className="mb-3">If you have questions about these Terms, please contact us:</p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <p className="font-semibold text-white mb-1">Money365.Market</p>
              <p>Email: <a href="mailto:office@money365.market" className="text-soft-orange hover:text-orange-400 underline">office@money365.market</a></p>
              <p>Website: <a href="https://money365.market/contact" className="text-soft-orange hover:text-orange-400 underline">https://money365.market/contact</a></p>
              <p className="mt-2 text-sm">Response Time: We aim to respond within 48 hours (business days).</p>
            </div>
          </section>

          {/* Acceptance Statement */}
          <section className="border-t border-gray-700 pt-6">
            <p className="text-center text-lg font-semibold">
              By using Money365.Market, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <p className="text-center text-sm text-gray-400 mt-2">
              Effective Date: November 9, 2025 • Version 1.0
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
