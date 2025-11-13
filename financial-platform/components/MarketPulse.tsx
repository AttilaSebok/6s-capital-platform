// components/MarketPulse.tsx
'use client';

import { useEffect, useState } from 'react';

interface Stock {
  symbol: string;
  change: number;
  changePercent: number;
  price: number;
}

export function MarketPulseCompact() {
  const [topMovers, setTopMovers] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopMovers() {
      try {
        const response = await fetch('/api/market-movers');
        const data = await response.json();

        // Combine gainers and losers, sort by absolute change percentage
        const allMovers = [...(data.gainers || []), ...(data.losers || [])];

        // Get top 4 movers by absolute change
        const top4 = allMovers
          .sort((a, b) => Math.abs(b.changePercent) - Math.abs(a.changePercent))
          .slice(0, 4)
          .map(stock => ({
            symbol: stock.symbol,
            change: stock.changePercent,
            changePercent: stock.changePercent,
            price: stock.price
          }));

        setTopMovers(top4);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching market pulse:', error);
        setLoading(false);
      }
    }

    fetchTopMovers();

    // Refresh every 60 seconds
    const interval = setInterval(fetchTopMovers, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-300">Market Pulse</h3>
        <span className="text-xs text-slate-500">Live</span>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between px-2 py-1.5">
              <div className="h-4 w-12 bg-slate-700 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-slate-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {topMovers.map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center justify-between hover:bg-slate-700/30 rounded px-2 py-1.5 transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium text-white">{stock.symbol}</span>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${
                  stock.change > 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                </span>
                <span className="text-xs text-slate-400">${stock.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
