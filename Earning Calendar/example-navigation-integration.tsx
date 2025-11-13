// Example: How to add Earnings Calendar to your navigation menu

// components/Navigation.tsx or components/Header.tsx

import Link from 'next/link';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar,
  Search,
  PieChart,
  LineChart
} from 'lucide-react';

export default function AnalysisMenu() {
  const analysisMenuItems = [
    {
      title: 'Stock Screener',
      href: '/analysis/stock-screener',
      icon: Search,
      description: 'Filter and find stocks based on your criteria'
    },
    {
      title: 'Market Overview',
      href: '/analysis/market-overview',
      icon: TrendingUp,
      description: 'Real-time market data and indices'
    },
    {
      title: 'Earnings Calendar',
      href: '/analysis/earnings-calendar',
      icon: Calendar,
      description: 'Track upcoming earnings reports'
    },
    {
      title: 'Sector Analysis',
      href: '/analysis/sectors',
      icon: PieChart,
      description: 'Compare performance across sectors'
    },
    {
      title: 'Technical Charts',
      href: '/analysis/charts',
      icon: LineChart,
      description: 'Advanced charting tools'
    },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">
                Money365.Market
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link 
                  href="/" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  Home
                </Link>
                
                {/* Analysis Dropdown */}
                <div className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center">
                    Analysis
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-80 rounded-lg shadow-xl bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {analysisMenuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-blue-600" />
                                </div>
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-semibold text-gray-900">
                                  {item.title}
                                </p>
                                <p className="text-xs text-gray-600 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/portfolio" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  Portfolio
                </Link>
                
                <Link 
                  href="/news" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ============================================
// Alternative: Simple Sidebar Navigation
// ============================================

export function SidebarNavigation() {
  return (
    <aside className="w-64 bg-white h-screen shadow-lg">
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Analysis Tools</h2>
        
        <nav className="space-y-2">
          <Link 
            href="/analysis/stock-screener"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <Search className="w-5 h-5" />
            <span className="font-medium">Stock Screener</span>
          </Link>
          
          <Link 
            href="/analysis/earnings-calendar"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Earnings Calendar</span>
          </Link>
          
          <Link 
            href="/analysis/market-overview"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Market Overview</span>
          </Link>
          
          <Link 
            href="/analysis/sectors"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <PieChart className="w-5 h-5" />
            <span className="font-medium">Sector Analysis</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}

// ============================================
// Alternative: Mobile-Friendly Bottom Navigation
// ============================================

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="grid grid-cols-4 gap-1 p-2">
        <Link 
          href="/"
          className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-600"
        >
          <BarChart3 className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          href="/analysis/earnings-calendar"
          className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-600"
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs mt-1">Earnings</span>
        </Link>
        
        <Link 
          href="/analysis/stock-screener"
          className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-600"
        >
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">Screener</span>
        </Link>
        
        <Link 
          href="/portfolio"
          className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-600"
        >
          <TrendingUp className="w-6 h-6" />
          <span className="text-xs mt-1">Portfolio</span>
        </Link>
      </div>
    </nav>
  );
}
