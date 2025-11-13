// components/LiveTicker/MarketStatusBar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { getMarketStatus, type MarketStatusInfo } from '@/lib/marketHours';

/**
 * Market Status Bar Component
 * - Shows current US market status (Open/Pre-market/After-hours/Closed)
 * - Real-time countdown to next market event
 * - Updates every second for accurate countdown
 * - Color-coded status indicators
 */
export default function MarketStatusBar() {
  const [marketStatus, setMarketStatus] = useState<MarketStatusInfo | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize on mount (avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
    setMarketStatus(getMarketStatus());
  }, []);

  // Update every second for real-time countdown
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setMarketStatus(getMarketStatus());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [mounted]);

  // Don't render on server or before mount
  if (!mounted || !marketStatus) {
    return (
      <div className="bg-slate-800/50 border-b border-slate-700/50 h-8">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // Get status indicator color
  const getStatusColor = () => {
    switch (marketStatus.status) {
      case 'open':
        return 'bg-green-500';
      case 'pre-market':
        return 'bg-yellow-500';
      case 'after-hours':
        return 'bg-orange-500';
      default:
        return 'bg-red-500';
    }
  };

  // Get animation class for open status
  const getAnimationClass = () => {
    return marketStatus.status === 'open' ? 'animate-pulse' : '';
  };

  return (
    <div className="flex items-center justify-center gap-3 px-4 py-2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700">
      {/* Market Label - Flag with text */}
      <div className="flex items-center gap-2 text-sm text-slate-400 border-r border-slate-700 pr-3">
        <span className="text-lg" role="img" aria-label="US Markets">🇺🇸</span>
        <span className="font-medium">US Markets</span>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor()} ${getAnimationClass()}`} />
        <span className="text-white font-semibold text-sm">
          {marketStatus.label}
        </span>
      </div>

      {/* Time Info - Countdown */}
      {marketStatus.timeUntilNext && marketStatus.nextEventLabel && (
        <span className="text-slate-400 text-sm">
          {marketStatus.timeUntilNext} until {marketStatus.nextEventLabel.toLowerCase()}
        </span>
      )}
    </div>
  );
}
