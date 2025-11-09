'use client'

import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4">
      <div className="max-w-4xl mx-auto bg-dark-header rounded-lg shadow-2xl border border-gray-800">
        {/* Header */}
        <div className="border-b border-gray-700 p-6">
          <h1 className="text-3xl font-bold text-white font-crimson mb-2">Privacy Policy for Money365.Market</h1>
          <p className="text-gray-400 text-sm">Last Updated: November 9, 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 text-gray-300">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">1. Introduction</h2>
            <p className="mb-3">
              Welcome to Money365.Market (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the &quot;Company&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at money365.market (the &quot;Website&quot;).
            </p>
            <p className="mb-3">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Website.
            </p>
            <p>
              This Privacy Policy applies to all information collected through our Website and any related services, sales, marketing, or events (collectively, the &quot;Services&quot;).
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information You Provide to Us</h3>
            <p className="mb-3">We collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Register on the Website</li>
              <li>Subscribe to our newsletter</li>
              <li>Create a portfolio or watchlist</li>
              <li>Contact us</li>
              <li>Use interactive features of the Website</li>
            </ul>
            <p className="mb-3 font-semibold">Personal information we may collect includes:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name and contact data (first name, last name, email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (processed through secure third-party payment processors)</li>
              <li>Profile information (investment preferences, risk tolerance)</li>
              <li>Communication data (messages, feedback, survey responses)</li>
              <li>Professional information (occupation, investment experience level)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Information Automatically Collected</h3>
            <p className="mb-3">When you visit our Website, we automatically collect certain information about your device and usage patterns, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>IP address, browser type, operating system</li>
              <li>Device identifiers and screen resolution</li>
              <li>Pages visited, time spent on pages, links clicked</li>
              <li>Search queries and features used</li>
              <li>General geographic location based on IP address</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities. For detailed information about our use of cookies, please refer to our{' '}
              <Link href="/cookie-policy" className="text-soft-orange hover:text-orange-400 underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect for the following purposes:</p>

            <h3 className="text-xl font-semibold text-white mb-2">3.1 To Provide and Maintain Our Services</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Create and manage your account</li>
              <li>Process your transactions</li>
              <li>Provide personalized investment information and portfolio tracking</li>
              <li>Display real-time financial data and market information</li>
              <li>Provide customer support</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">3.2 To Improve and Develop Our Services</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Analyze usage patterns and trends</li>
              <li>Conduct research and analytics</li>
              <li>Test new features and functionality</li>
              <li>Improve user experience and Website performance</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">3.3 To Communicate With You</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Send newsletters and educational content</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send administrative information and security alerts</li>
              <li>Provide personalized investment insights</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">3.4 For Security and Legal Compliance</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Monitor and prevent fraud and abuse</li>
              <li>Enforce our Terms of Service</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and property</li>
            </ul>
          </section>

          {/* 4. Legal Basis for Processing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">4. Legal Basis for Processing (GDPR)</h2>
            <p className="mb-3">If you are located in the European Economic Area (EEA), our legal bases for processing your personal information include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consent</strong>: When you have given us explicit permission to process your information</li>
              <li><strong>Contract</strong>: When processing is necessary to fulfill our contractual obligations to you</li>
              <li><strong>Legitimate Interests</strong>: When we have a legitimate business interest that does not override your privacy rights</li>
              <li><strong>Legal Obligation</strong>: When we must process your information to comply with legal requirements</li>
            </ul>
            <p className="mt-3">You have the right to withdraw your consent at any time.</p>
          </section>

          {/* 5. How We Share Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">5. How We Share Your Information</h2>
            <p className="mb-3">We may share your information in the following circumstances:</p>

            <h3 className="text-xl font-semibold text-white mb-2">5.1 Service Providers and Business Partners</h3>
            <p className="mb-3">We share information with third-party vendors and service providers who perform services on our behalf, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Payment processors</li>
              <li>Cloud hosting providers</li>
              <li>Email service providers</li>
              <li>Analytics providers</li>
              <li>Marketing and advertising partners</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">5.2 Legal Requirements</h3>
            <p className="mb-3">We may disclose your information when required by law or when we believe disclosure is necessary to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Comply with legal obligations and government requests</li>
              <li>Enforce our Terms of Service</li>
              <li>Protect our rights, property, or safety</li>
              <li>Prevent fraud or illegal activities</li>
            </ul>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">6. Data Retention</h2>
            <p className="mb-3">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy.</p>
            <p className="mb-3">Typical retention periods:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Account information</strong>: While your account is active and up to 7 years after closure</li>
              <li><strong>Transaction data</strong>: 7 years for tax and financial reporting requirements</li>
              <li><strong>Marketing data</strong>: Until you unsubscribe or request deletion</li>
              <li><strong>Support communications</strong>: Up to 3 years</li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">7. Data Security</h2>
            <p className="mb-3">We implement appropriate technical and organizational security measures to protect your personal information:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Encryption of data in transit and at rest (SSL/TLS)</li>
              <li>Secure server infrastructure with firewalls</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-yellow-400 font-semibold">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* 8. Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">8. Your Privacy Rights</h2>

            <h3 className="text-xl font-semibold text-white mb-3">8.1 Rights Under GDPR (European Economic Area)</h3>
            <p className="mb-3">If you are in the EEA, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li><strong>Access</strong>: Request a copy of your personal information</li>
              <li><strong>Rectification</strong>: Request correction of inaccurate information</li>
              <li><strong>Erasure</strong>: Request deletion of your personal information</li>
              <li><strong>Restriction</strong>: Request limitation of processing</li>
              <li><strong>Data Portability</strong>: Receive your data in a portable format</li>
              <li><strong>Object</strong>: Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent</strong>: Withdraw consent at any time</li>
              <li><strong>Lodge a Complaint</strong>: File a complaint with your local data protection authority</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">8.2 Rights Under CCPA (California Residents)</h3>
            <p className="mb-3">If you are a California resident, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li><strong>Know</strong>: Request information about personal information we collect</li>
              <li><strong>Delete</strong>: Request deletion of your personal information</li>
              <li><strong>Opt-Out</strong>: Opt out of sale of personal information (Note: We do not sell personal information)</li>
              <li><strong>Non-Discrimination</strong>: Not be discriminated against for exercising your rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">8.3 Exercising Your Rights</h3>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:office@money365.market" className="text-soft-orange hover:text-orange-400 underline">
                office@money365.market
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          {/* 9. International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">9. International Data Transfers</h2>
            <p className="mb-3">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.
            </p>
            <p className="mb-3">When we transfer information internationally, we ensure appropriate safeguards are in place:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Ensuring third-party processors comply with GDPR requirements</li>
              <li>Implementing appropriate technical and organizational measures</li>
            </ul>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">10. Children&apos;s Privacy</h2>
            <p className="mb-3">
              Our Website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at{' '}
              <a href="mailto:office@money365.market" className="text-soft-orange hover:text-orange-400 underline">
                office@money365.market
              </a>
              . We will take steps to delete such information from our systems.
            </p>
          </section>

          {/* 11. Third-Party Websites */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">11. Third-Party Websites and Services</h2>
            <p className="mb-3">
              Our Website may contain links to third-party websites, services, and advertisements. We are not responsible for the privacy practices or content of these third parties.
            </p>
            <p>
              We encourage you to review the privacy policies of any third-party services before providing them with your information.
            </p>
          </section>

          {/* 12. Marketing Communications */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">12. Marketing Communications</h2>
            <p className="mb-3">You can opt out of marketing emails at any time by:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Clicking the &quot;unsubscribe&quot; link in any marketing email</li>
              <li>Adjusting your account settings</li>
              <li>Contacting us at office@money365.market</li>
            </ul>
            <p className="text-sm">
              Note: Even if you opt out of marketing emails, we may still send you service-related communications (account updates, security alerts, etc.).
            </p>
          </section>

          {/* 13. Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">13. Changes to This Privacy Policy</h2>
            <p className="mb-3">
              We may update this Privacy Policy from time to time to reflect changes in our practices, changes in applicable laws, new features, or user feedback.
            </p>
            <p className="mb-3">When we make material changes:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We will update the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>We will post a notice on our Website</li>
              <li>We may send you an email notification (if you have provided your email address)</li>
            </ul>
            <p className="mt-3">We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
          </section>

          {/* 14. Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">14. Contact Us</h2>
            <p className="mb-3">If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <p className="font-semibold text-white mb-1">Money365.Market</p>
              <p>Email: <a href="mailto:office@money365.market" className="text-soft-orange hover:text-orange-400 underline">office@money365.market</a></p>
              <p>Website: <a href="https://money365.market/contact" className="text-soft-orange hover:text-orange-400 underline">https://money365.market/contact</a></p>
              <p className="mt-2 text-sm">Response Time: We aim to respond to all inquiries within 48 hours.</p>
            </div>
          </section>

          {/* 15. Supervisory Authority */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">15. Supervisory Authority</h2>
            <p>
              If you are located in the EEA and believe we have not adequately addressed your privacy concerns, you have the right to lodge a complaint with your local data protection supervisory authority.
            </p>
          </section>

          {/* Consent Statement */}
          <section className="border-t border-gray-700 pt-6">
            <h2 className="text-2xl font-bold text-white mb-4 font-crimson">Consent Statement</h2>
            <p>
              By using Money365.Market, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
