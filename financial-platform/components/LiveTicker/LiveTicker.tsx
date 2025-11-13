// components/LiveTicker/LiveTicker.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import useSWR from 'swr';
import TickerItem from './TickerItem';
import { TickerResponse } from '@/types/ticker';
import './ticker.css';

const fetcher = (url: string) => fetch(url).then(res => res.json());

/**
 * Live Ticker Component
 * - Fetches market data every 60 seconds
 * - Displays scrolling ticker animation
 * - Pauses on hover
 */
export default function LiveTicker() {
  const { data, error, isLoading } = useSWR<TickerResponse>(
    '/api/ticker',
    fetcher,
    {
      refreshInterval: 60000, // Refresh every 60 seconds (optimized for API limits)
      revalidateOnFocus: false, // Don't refetch on window focus
      revalidateOnReconnect: true, // Refetch on reconnect
    }
  );

  const tickerRef = useRef<HTMLDivElement>(null);

  // Duplicate content for seamless infinite loop
  const tickerContent = data?.data || [];
  const duplicatedContent = [...tickerContent, ...tickerContent];

  // Loading state
  if (isLoading) {
    return (
      <div className="bg-slate-900 h-12 flex items-center justify-center border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-400 text-sm">Loading market data...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-slate-900 h-12 flex items-center justify-center border-b border-slate-800">
        <span className="text-red-400 text-sm">
          ⚠️ Failed to load market ticker
        </span>
      </div>
    );
  }

  // No data state
  if (!data || tickerContent.length === 0) {
    return (
      <div className="bg-slate-900 h-12 flex items-center justify-center border-b border-slate-800">
        <span className="text-gray-400 text-sm">No market data available</span>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border-b border-slate-800 overflow-hidden h-12">
      <div className="ticker-wrapper h-full flex items-center">
        <div ref={tickerRef} className="ticker-content flex">
          {duplicatedContent.map((item, index) => (
            <TickerItem
              key={`${item.symbol}-${index}`}
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
