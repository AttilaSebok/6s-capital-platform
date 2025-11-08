import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Mail, ArrowRight, BookOpen, BarChart3, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You for Subscribing | money365.market',
  description: 'Welcome to money365.market! Check your email to confirm your subscription and start receiving market insights.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-green-100 p-6">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Welcome to money365.market!
          </h1>
          <p className="text-xl text-stone-600">
            Your subscription is now confirmed. Get ready to receive market insights that matter.
          </p>
        </div>

        {/* Success Card */}
        <div className="mb-12 rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm">
          <div className="mb-6 text-center">
            <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-stone-900">
              You're All Set!
            </h2>
            <p className="text-lg text-stone-600">
              Your welcome email is on its way to your inbox. You'll start receiving our weekly market insights, investment strategies, and exclusive content.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="mb-4 text-center text-sm font-medium text-stone-900">
              What happens next:
            </p>
            <ol className="space-y-3 text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-600">1</span>
                <span>Check your inbox for our welcome email with exclusive resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-600">2</span>
                <span>Receive weekly newsletters with market analysis and investment insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-600">3</span>
                <span>Get access to our stock screener tools and expert strategies</span>
              </li>
            </ol>
          </div>
        </div>

        {/* What You'll Get Section */}
        <div className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-stone-900">
            What You'll Receive
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Benefit 1 */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold text-stone-900">
                Weekly Market Analysis
              </h3>
              <p className="text-sm text-stone-600">
                In-depth analysis of market trends, opportunities, and risks delivered straight to your inbox.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold text-stone-900">
                Stock Screening Tools
              </h3>
              <p className="text-sm text-stone-600">
                Access to our powerful stock screener and exclusive investment tips from experts.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold text-stone-900">
                Investment Strategies
              </h3>
              <p className="text-sm text-stone-600">
                Proven strategies and actionable insights to help you make informed investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-center shadow-lg sm:p-12">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Start Exploring Now
          </h2>
          <p className="mb-8 text-lg text-stone-300">
            Don't wait for the newsletter - dive into our resources and tools right away
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/articles"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl"
            >
              Read Latest Articles
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/screener"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Use Stock Screener
              <BarChart3 className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="/"
              className="text-sm text-stone-400 hover:text-white"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="mb-2 text-sm text-stone-600">
            Have questions or need help?
          </p>
          <p className="text-sm text-stone-500">
            <Link
              href="/contact"
              className="font-medium text-orange-600 hover:text-orange-700"
            >
              Contact our team
            </Link>
            {' '}- we're here to help
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-stone-500 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} money365.market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
