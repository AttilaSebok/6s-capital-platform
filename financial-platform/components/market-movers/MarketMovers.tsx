// components/market-movers/MarketMovers.tsx
'use client';

import React from 'react';
import useSWR from 'swr';
import MoverColumn from './MoverColumn';
import { MarketMoversData, getCompanyName } from '@/lib/api/marketMovers';

const fetcher = (url: string) => fetch(url).then(res => res.json());

/**
 * Market Movers Widget
 * - Displays Top Gainers, Top Losers, and Most Active stocks
 * - Auto-refreshes every 60 seconds
 * - Responsive grid layout
 */
export default function MarketMovers() {
  const { data, error, isLoading } = useSWR<MarketMoversData>(
    '/api/market-movers',
    fetcher,
    {
      refreshInterval: 60000, // Refresh every 60 seconds
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );

  // Add company names to stocks
  const enrichStocks = (stocks: any[]) => {
    return stocks.map(stock => ({
      ...stock,
      name: getCompanyName(stock.symbol)
    }));
  };

  const gainers = data?.gainers ? enrichStocks(data.gainers) : [];
  const losers = data?.losers ? enrichStocks(data.losers) : [];
  const mostActive = data?.mostActive ? enrichStocks(data.mostActive) : [];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Today's Market Movers
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Real-time tracking of top performing stocks, biggest losers, and most actively traded securities
          </p>
        </div>

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-600 font-medium">Unable to load market data</p>
            <p className="text-red-500 text-sm mt-2">Please try again later</p>
          </div>
        )}

        {/* Grid Layout - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top Gainers Column */}
          <MoverColumn
            title="Top Gainers"
            icon="🚀"
            stocks={gainers}
            type="gainers"
            loading={isLoading}
          />

          {/* Top Losers Column */}
          <MoverColumn
            title="Top Losers"
            icon="📉"
            stocks={losers}
            type="losers"
            loading={isLoading}
          />

          {/* Most Active Column */}
          <MoverColumn
            title="Most Active"
            icon="📊"
            stocks={mostActive}
            type="active"
            loading={isLoading}
          />
        </div>

        {/* Last Updated */}
        {data?.timestamp && !isLoading && (
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              Last updated: {new Date(data.timestamp).toLocaleTimeString()}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
