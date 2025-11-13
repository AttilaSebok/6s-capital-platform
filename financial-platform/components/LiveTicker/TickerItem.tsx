// components/LiveTicker/TickerItem.tsx

import React from 'react';
import { TickerData } from '@/types/ticker';

interface TickerItemProps {
  data: TickerData;
}

/**
 * Single ticker item component
 * Displays: SYMBOL $PRICE ±CHANGE%
 */
export default function TickerItem({ data }: TickerItemProps) {
  const isPositive = data.changePercent >= 0;
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';
  const arrow = isPositive ? '▲' : '▼';

  /**
   * Format price for display
   * - Values >= 1000: Display as $1.2K
   * - Values < 1000: Display as $123.45
   */
  const formatPrice = (price: number): string => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="inline-flex items-center gap-2 px-4 whitespace-nowrap">
      {/* Symbol */}
      <span className="font-semibold text-white text-sm">
        {data.symbol}
      </span>

      {/* Current Price */}
      <span className="text-gray-300 text-sm">
        {formatPrice(data.price)}
      </span>

      {/* Change Percent with arrow */}
      <span className={`flex items-center gap-1 font-medium text-sm ${changeColor}`}>
        <span className="text-xs">{arrow}</span>
        {Math.abs(data.changePercent).toFixed(2)}%
      </span>

      {/* Separator */}
      <span className="text-gray-600">|</span>
    </div>
  );
}
