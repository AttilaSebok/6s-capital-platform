// components/EarningsCalendar.tsx
'use client';

import { useState, useEffect } from 'react';
import { Search, Calendar, TrendingUp, Building2, DollarSign } from 'lucide-react';

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
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calendar className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Earnings Calendar</h1>
        </div>
        <p className="text-blue-100">
          Track upcoming earnings reports and financial results from top companies
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-600" />
          Filter Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Sector Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sector
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Symbol
            </label>
            <input
              type="text"
              placeholder="e.g., AAPL"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-gray-900">{earnings.length}</span> earnings reports
        </p>
        <button
          onClick={fetchEarnings}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Refresh Data
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* Earnings List */}
      {!loading && !error && (
        <div className="space-y-6">
          {sortedDates.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-12 text-center">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Earnings Reports Found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or date range
              </p>
            </div>
          ) : (
            sortedDates.map((date) => (
              <div key={date} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Date Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {formatDate(date)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {groupedEarnings[date].length} {groupedEarnings[date].length === 1 ? 'company' : 'companies'} reporting
                  </p>
                </div>

                {/* Earnings Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Symbol
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Company
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sector
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Market Cap
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          EPS Estimate
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {groupedEarnings[date].map((event, idx) => (
                        <tr key={`${event.symbol}-${idx}`} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-bold text-gray-900">
                                  {event.symbol}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {event.exchange || 'NASDAQ'}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">
                              {event.companyName}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                              {event.sector || 'N/A'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-900">
                              <DollarSign className="w-4 h-4 text-gray-400 mr-1" />
                              {formatMarketCap(event.marketCap)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-semibold text-gray-900">
                              {event.estimate !== null 
                                ? `$${event.estimate.toFixed(2)}`
                                : 'N/A'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded ${
                              event.hour === 'bmo' 
                                ? 'bg-yellow-100 text-yellow-800'
                                : event.hour === 'amc'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
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
              </div>
            ))
          )}
        </div>
      )}

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">
              About Earnings Calendar
            </h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              The earnings calendar shows scheduled quarterly and annual earnings releases. 
              Companies typically report before market open (BMO) or after market close (AMC). 
              EPS (Earnings Per Share) estimates are analyst consensus predictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
