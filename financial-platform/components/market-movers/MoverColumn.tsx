// components/market-movers/MoverColumn.tsx
'use client';

import React from 'react';
import MoverCard from './MoverCard';
import { StockQuote } from '@/lib/api/marketMovers';

interface MoverColumnProps {
  title: string;
  icon: string;
  stocks: StockQuote[];
  type: 'gainers' | 'losers' | 'active';
  loading?: boolean;
}

export default function MoverColumn({ title, icon, stocks, type, loading = false }: MoverColumnProps) {
  // Color theme based on type
  const getHeaderColor = () => {
    if (type === 'gainers') return 'text-green-600 border-green-600';
    if (type === 'losers') return 'text-red-600 border-red-600';
    return 'text-blue-600 border-blue-600';
  };

  const getIconBg = () => {
    if (type === 'gainers') return 'bg-green-100';
    if (type === 'losers') return 'bg-red-100';
    return 'bg-blue-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      {/* Column Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
        <div className={`${getIconBg()} p-2 rounded-lg`}>
          <span className="text-2xl" role="img" aria-label={title}>
            {icon}
          </span>
        </div>
        <h3 className={`text-xl font-bold ${getHeaderColor()}`}>
          {title}
        </h3>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-4 animate-pulse">
              <div className="flex justify-between">
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-gray-300 rounded w-20"></div>
                  <div className="h-3 bg-gray-200 rounded w-32"></div>
                </div>
                <div className="space-y-2 text-right">
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                  <div className="h-3 bg-gray-200 rounded w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stock Cards */}
      {!loading && stocks.length > 0 && (
        <div className="space-y-3">
          {stocks.map((stock, index) => (
            <MoverCard
              key={`${stock.symbol}-${index}`}
              stock={stock}
              type={type}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && stocks.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No data available</p>
        </div>
      )}
    </div>
  );
}
