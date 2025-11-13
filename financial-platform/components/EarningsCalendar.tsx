// components/EarningsCalendar.tsx
'use client';

import { useState, useEffect } from 'react';
import { Search, Calendar, TrendingUp, Building2, DollarSign, Filter, RefreshCw } from 'lucide-react';

interface EarningsEvent {
  symbol: string;
  companyName: string;
  reportDate: string;
  fiscalDateEnding: string;
  estimate: number | null;
  currency: string;
  marketCap?: number;
  sector?: string;
  exchange?: string;
  hour?: string;
}

interface EarningsResponse {
  earnings: EarningsEvent[];
  total: number;
  page: number;
  pageSize: number;
}

export default function EarningsCalendar() {
  const [earnings, setEarnings] = useState<EarningsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    const end = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    return end.toISOString().split('T')[0];
  });
  const [sector, setSector] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const sectors = [
    'All Sectors',
    'Technology',
    'Financial Services',
    'Healthcare',
    'Consumer Cyclical',
    'Consumer Defensive',
    'Energy',
    'Industrials',
    'Communication Services',
    'Real Estate',
    'Utilities',
    'Basic Materials'
  ];

  useEffect(() => {
    fetchEarnings();
  }, [startDate, endDate, sector, searchTerm]);

  const fetchEarnings = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        from: startDate,
        to: endDate,
      });

      if (sector !== 'all') {
        params.append('sector', sector);
      }

      if (searchTerm) {
        params.append('search', searchTerm);
      }

      const response = await fetch(`/api/earnings-calendar?${params}`);

      if (!response.ok) {
        throw new Error('Failed to fetch earnings data');
      }

      const data: EarningsResponse = await response.json();
      setEarnings(data.earnings);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const formatMarketCap = (marketCap?: number) => {
    if (!marketCap) return 'N/A';

    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`;
    }
    return `$${marketCap.toFixed(2)}`;
  };

  const groupByDate = (events: EarningsEvent[]) => {
    const grouped: { [key: string]: EarningsEvent[] } = {};

    events.forEach(event => {
      if (!grouped[event.reportDate]) {
        grouped[event.reportDate] = [];
      }
      grouped[event.reportDate].push(event);
    });

    return grouped;
  };

  const groupedEarnings = groupByDate(earnings);
  const sortedDates = Object.keys(groupedEarnings).sort();

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Header - Dark Gradient (matching homepage) */}
      <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-crimson leading-tight tracking-tight">
                Earnings Calendar
              </h1>
            </div>
            <p className="text-base md:text-xl text-stone-300 leading-relaxed">
              Track upcoming earnings reports and EPS estimates from top companies
            </p>

            {/* Stats Bar */}
            <div className="mt-6 pt-6 border-t-2 border-stone-700 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <div className="font-crimson text-2xl md:text-3xl font-bold text-bronze-600 mb-1">{earnings.length}</div>
                <div className="text-xs md:text-sm text-stone-400 uppercase tracking-wider">Reports Scheduled</div>
              </div>
              <div>
                <div className="font-crimson text-2xl md:text-3xl font-bold text-bronze-600 mb-1">{sortedDates.length}</div>
                <div className="text-xs md:text-sm text-stone-400 uppercase tracking-wider">Trading Days</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="font-crimson text-2xl md:text-3xl font-bold text-bronze-600 mb-1">Live</div>
                <div className="text-xs md:text-sm text-stone-400 uppercase tracking-wider">Real-Time Data</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Filters Panel - Light Card with Bronze Border */}
          <div className="bg-soft-olive border-2 border-bronze-600 rounded-none shadow-xl p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-bronze-600">
              <Filter className="w-6 h-6 text-bronze-600" />
              <h2 className="text-xl md:text-2xl font-bold text-deep-brown font-crimson">
                Filter Results
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Start Date */}
              <div>
                <label className="block text-sm font-bold text-deep-brown mb-2 uppercase tracking-wide">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border-2 border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600 text-deep-brown"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-bold text-deep-brown mb-2 uppercase tracking-wide">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border-2 border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600 text-deep-brown"
                />
              </div>

              {/* Sector Filter */}
              <div>
                <label className="block text-sm font-bold text-deep-brown mb-2 uppercase tracking-wide">
                  Sector
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border-2 border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600 text-deep-brown"
                >
                  {sectors.map((s) => (
                    <option key={s} value={s === 'All Sectors' ? 'all' : s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-bold text-deep-brown mb-2 uppercase tracking-wide">
                  Search Symbol
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="text"
                    placeholder="e.g., AAPL"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 bg-white border-2 border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-bronze-600 focus:border-bronze-600 text-deep-brown placeholder-stone-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary & Refresh Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="bg-olive-100 border-2 border-olive-300 rounded-none px-4 py-3">
              <p className="text-sm md:text-base text-olive-800 font-semibold">
                Showing <span className="text-deep-brown font-bold">{earnings.length}</span> earnings reports
              </p>
            </div>
            <button
              onClick={fetchEarnings}
              disabled={loading}
              className="px-6 py-2.5 bg-bronze-600 border-2 border-bronze-700 text-white font-bold text-sm uppercase tracking-wide rounded-none hover:bg-bronze-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bronze-600 disabled:opacity-50 flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-bronze-600 mx-auto mb-4"></div>
                <p className="text-deep-brown font-semibold">Loading earnings data...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-100 border-2 border-red-400 rounded-none p-6">
              <p className="text-red-800 font-semibold">{error}</p>
            </div>
          )}

          {/* Earnings List */}
          {!loading && !error && (
            <div className="space-y-8">
              {sortedDates.length === 0 ? (
                <div className="bg-soft-olive border-2 border-bronze-600 rounded-none p-12 text-center">
                  <Calendar className="w-20 h-20 text-stone-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-deep-brown mb-3 font-crimson">
                    No Earnings Reports Found
                  </h3>
                  <p className="text-stone-600 text-lg">
                    Try adjusting your filters or date range
                  </p>
                </div>
              ) : (
                sortedDates.map((date) => (
                  <div key={date} className="bg-white border-2 border-bronze-600 rounded-none shadow-xl overflow-hidden">
                    {/* Date Header - Bronze Accent */}
                    <div className="bg-gradient-to-br from-slate-900 to-stone-900 border-b-2 border-bronze-600 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white font-crimson">
                            {formatDate(date)}
                          </h3>
                          <p className="text-sm text-stone-300 mt-1">
                            {groupedEarnings[date].length} {groupedEarnings[date].length === 1 ? 'company' : 'companies'} reporting
                          </p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center">
                          <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-slate-900 border-b-2 border-bronze-600">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-bronze-600 uppercase tracking-wider">
                              Symbol
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-bronze-600 uppercase tracking-wider">
                              Company
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-bronze-600 uppercase tracking-wider">
                              Sector
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-bronze-600 uppercase tracking-wider">
                              Market Cap
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-bronze-600 uppercase tracking-wider">
                              EPS Estimate
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-bronze-600 uppercase tracking-wider">
                              Time
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-stone-200">
                          {groupedEarnings[date].map((event, idx) => (
                            <tr key={`${event.symbol}-${idx}`} className="hover:bg-soft-olive transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="ml-3">
                                    <div className="text-sm font-bold text-deep-brown">
                                      {event.symbol}
                                    </div>
                                    <div className="text-xs text-stone-600">
                                      {event.exchange || 'NASDAQ'}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm font-semibold text-deep-brown">
                                  {event.companyName}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-3 py-1.5 inline-flex text-xs font-bold uppercase tracking-wider rounded-none bg-olive-100 text-olive-800 border border-olive-300">
                                  {event.sector || 'N/A'}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center text-sm font-semibold text-deep-brown">
                                  <DollarSign className="w-4 h-4 text-bronze-600 mr-1" />
                                  {formatMarketCap(event.marketCap)}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-deep-brown">
                                  {event.estimate !== null
                                    ? `$${event.estimate.toFixed(2)}`
                                    : 'N/A'}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-none border-2 ${
                                  event.hour === 'bmo'
                                    ? 'bg-soft-orange border-soft-orange-dark text-deep-brown'
                                    : event.hour === 'amc'
                                    ? 'bg-olive-100 border-olive-300 text-olive-800'
                                    : 'bg-stone-100 border-stone-300 text-stone-700'
                                }`}>
                                  {event.hour === 'bmo' ? 'Before Open' :
                                   event.hour === 'amc' ? 'After Close' :
                                   'TBA'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden divide-y divide-stone-200">
                      {groupedEarnings[date].map((event, idx) => (
                        <div key={`${event.symbol}-${idx}`} className="p-4 hover:bg-soft-olive transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 h-12 w-12 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="text-base font-bold text-deep-brown">
                                  {event.symbol}
                                </div>
                                <div className="text-xs text-stone-600">
                                  {event.exchange || 'NASDAQ'}
                                </div>
                              </div>
                            </div>
                            <span className={`px-2 py-1 text-xs font-bold uppercase rounded-none border ${
                              event.hour === 'bmo'
                                ? 'bg-soft-orange border-soft-orange-dark text-deep-brown'
                                : event.hour === 'amc'
                                ? 'bg-olive-100 border-olive-300 text-olive-800'
                                : 'bg-stone-100 border-stone-300 text-stone-700'
                            }`}>
                              {event.hour === 'bmo' ? 'BMO' : event.hour === 'amc' ? 'AMC' : 'TBA'}
                            </span>
                          </div>

                          <div className="text-sm font-semibold text-deep-brown mb-2">
                            {event.companyName}
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-stone-600">Sector:</span>
                              <div className="font-semibold text-deep-brown mt-1">
                                {event.sector || 'N/A'}
                              </div>
                            </div>
                            <div>
                              <span className="text-stone-600">Market Cap:</span>
                              <div className="font-semibold text-deep-brown mt-1">
                                {formatMarketCap(event.marketCap)}
                              </div>
                            </div>
                            <div className="col-span-2">
                              <span className="text-stone-600">EPS Estimate:</span>
                              <div className="font-bold text-deep-brown mt-1">
                                {event.estimate !== null ? `$${event.estimate.toFixed(2)}` : 'N/A'}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Info Box - Bronze Accent */}
          <div className="bg-olive-100 border-2 border-olive-300 rounded-none p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-bronze-600 border-2 border-bronze-700 rounded-none flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-deep-brown mb-2 text-lg font-crimson">
                  About Earnings Calendar
                </h4>
                <p className="text-sm text-olive-800 leading-relaxed">
                  The earnings calendar shows scheduled quarterly and annual earnings releases.
                  Companies typically report before market open (BMO) or after market close (AMC).
                  EPS (Earnings Per Share) estimates are analyst consensus predictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
