// components/MarketPulse.tsx
'use client';

import { useEffect, useState } from 'react';

interface Stock {
  symbol: string;
  change: number;
  changePercent: number;
  price: number;
}

interface MarketData {
  gainers: Stock[];
  losers: Stock[];
  mostActive: Stock[];
}

export function MarketPulseCompact() {
  const [marketData, setMarketData] = useState<MarketData>({
    gainers: [],
    losers: [],
    mostActive: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const response = await fetch('/api/market-movers');
        const data = await response.json();

        setMarketData({
          gainers: (data.gainers || []).slice(0, 5),
          losers: (data.losers || []).slice(0, 5),
          mostActive: (data.mostActive || []).slice(0, 5)
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching market pulse:', error);
        setLoading(false);
      }
    }

    fetchMarketData();

    // Refresh every 60 seconds
    const interval = setInterval(fetchMarketData, 60000);
    return () => clearInterval(interval);
  }, []);

  const StockRow = ({ stock, type }: { stock: Stock; type: 'gainers' | 'losers' | 'active' }) => {
    const changeColor = type === 'gainers'
      ? 'text-green-400'
      : type === 'losers'
      ? 'text-red-400'
      : stock.changePercent > 0 ? 'text-green-400' : 'text-red-400';

    return (
      <div className="flex items-center justify-between hover:bg-slate-700/30 rounded px-2 py-1.5 transition-colors cursor-pointer">
        <span className="text-sm font-medium text-white">{stock.symbol}</span>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${changeColor}`}>
            {stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
          </span>
          <span className="text-xs text-slate-400">${stock.price.toFixed(2)}</span>
        </div>
      </div>
    );
  };

  const LoadingSkeleton = () => (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center justify-between px-2 py-1.5">
          <div className="h-4 w-12 bg-slate-700 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-slate-700 rounded animate-pulse"></div>
        </div>
      ))}
    </>
  );

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-300">Market Pulse</h3>
        <span className="text-xs text-slate-500">Live</span>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Top Gainers */}
        <div>
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700">
            <span className="text-lg">🚀</span>
            <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider">Top Gainers</h4>
          </div>
          {loading ? <LoadingSkeleton /> : marketData.gainers.map((stock) => (
            <StockRow key={stock.symbol} stock={stock} type="gainers" />
          ))}
        </div>

        {/* Top Losers */}
        <div>
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700">
            <span className="text-lg">📉</span>
            <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider">Top Losers</h4>
          </div>
          {loading ? <LoadingSkeleton /> : marketData.losers.map((stock) => (
            <StockRow key={stock.symbol} stock={stock} type="losers" />
          ))}
        </div>

        {/* Most Active */}
        <div>
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700">
            <span className="text-lg">📊</span>
            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Most Active</h4>
          </div>
          {loading ? <LoadingSkeleton /> : marketData.mostActive.map((stock) => (
            <StockRow key={stock.symbol} stock={stock} type="active" />
          ))}
        </div>
      </div>
    </div>
  );
}
