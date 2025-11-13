// app/analysis/earnings-calendar/page.tsx

import { Metadata } from 'next';
import EarningsCalendar from '@/components/EarningsCalendar';

export const metadata: Metadata = {
  title: 'Earnings Calendar | Money365 Market Analysis',
  description: 'Track upcoming earnings reports and financial results from top companies. View earnings dates, EPS estimates, and market cap data.',
  keywords: 'earnings calendar, earnings reports, EPS estimates, quarterly earnings, annual earnings, financial results, stock earnings',
};

export default function EarningsCalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EarningsCalendar />
      </div>
    </div>
  );
}
