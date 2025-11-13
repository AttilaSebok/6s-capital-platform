// components/market-movers/MoverCard.tsx
'use client';

import React from 'react';
import { StockQuote } from '@/lib/api/marketMovers';

interface MoverCardProps {
  stock: StockQuote;
  type: 'gainers' | 'losers' | 'active';
}

export default function MoverCard({ stock, type }: MoverCardProps) {
  const isPositive = stock.changePercent > 0;
  const isNegative = stock.changePercent < 0;

  // Color classes based on type and change
  const getChangeColor = () => {
    if (type === 'active') {
      // Most active uses neutral colors
      if (isPositive) return 'text-green-600';
      if (isNegative) return 'text-red-600';
      return 'text-gray-600';
    }

    // Gainers/Losers use their respective colors
    if (type === 'gainers') return 'text-green-600';
    if (type === 'losers') return 'text-red-600';
    return 'text-gray-600';
  };

  const getBgColor = () => {
    if (type === 'active') {
      if (isPositive) return 'bg-green-50 hover:bg-green-100';
      if (isNegative) return 'bg-red-50 hover:bg-red-100';
      return 'bg-gray-50 hover:bg-gray-100';
    }

    if (type === 'gainers') return 'bg-green-50 hover:bg-green-100';
    if (type === 'losers') return 'bg-red-50 hover:bg-red-100';
    return 'bg-gray-50 hover:bg-gray-100';
  };

  return (
    <div
      className={`${getBgColor()} rounded-lg p-4 transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-300 hover:shadow-md`}
      role="button"
      tabIndex={0}
      aria-label={`${stock.symbol} ${stock.name || ''} ${stock.changePercent > 0 ? 'up' : 'down'} ${Math.abs(stock.changePercent)}%`}
    >
      <div className="flex justify-between items-start">
        {/* Left side: Symbol and Name */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-lg text-gray-900 truncate">
            {stock.symbol}
          </p>
          {stock.name && (
            <p className="text-xs text-gray-500 truncate mt-0.5">
              {stock.name}
            </p>
          )}
        </div>

        {/* Right side: Price and Change */}
        <div className="text-right ml-4">
          <p className={`text-2xl font-bold ${getChangeColor()}`}>
            {isPositive && '+'}
            {stock.changePercent.toFixed(2)}%
          </p>
          <p className="text-sm text-gray-600 mt-1">
            ${stock.price.toFixed(2)}
          </p>
          <p className={`text-xs ${getChangeColor()} mt-0.5`}>
            {isPositive && '+'}
            ${stock.change.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
