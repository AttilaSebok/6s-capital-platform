// components/EarningsCalendarAdvanced.tsx
// Advanced features: Export to CSV/Excel and Settings Panel

'use client';

import { Download, Settings, Mail, Bell } from 'lucide-react';
import { useState } from 'react';

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
}

interface ExportButtonProps {
  earnings: EarningsEvent[];
}

export function ExportButton({ earnings }: ExportButtonProps) {
  const exportToCSV = () => {
    const headers = ['Symbol', 'Company', 'Report Date', 'Sector', 'Market Cap', 'EPS Estimate', 'Exchange'];
    const csvData = earnings.map(e => [
      e.symbol,
      e.companyName,
      e.reportDate,
      e.sector || 'N/A',
      e.marketCap?.toString() || 'N/A',
      e.estimate?.toString() || 'N/A',
      e.exchange || 'N/A'
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `earnings-calendar-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = () => {
    const jsonContent = JSON.stringify(earnings, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `earnings-calendar-${new Date().toISOString().split('T')[0]}.json`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
        <Download className="w-4 h-4" />
        Export Data
      </button>
      
      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
        <div className="py-2">
          <button
            onClick={exportToCSV}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export as CSV
          </button>
          <button
            onClick={exportToJSON}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export as JSON
          </button>
        </div>
      </div>
    </div>
  );
}

interface SettingsPanelProps {
  onSettingsChange: (settings: CalendarSettings) => void;
}

export interface CalendarSettings {
  showMarketCap: boolean;
  showSector: boolean;
  showEstimate: boolean;
  showExchange: boolean;
  defaultDaysAhead: number;
  emailNotifications: boolean;
  favoriteSymbols: string[];
}

export function SettingsPanel({ onSettingsChange }: SettingsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<CalendarSettings>({
    showMarketCap: true,
    showSector: true,
    showEstimate: true,
    showExchange: true,
    defaultDaysAhead: 30,
    emailNotifications: false,
    favoriteSymbols: []
  });

  const handleChange = (key: keyof CalendarSettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        <Settings className="w-4 h-4" />
        Settings
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Calendar Settings
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Display Options */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Display Options</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <span className="text-gray-700">Show Market Cap</span>
                <input
                  type="checkbox"
                  checked={settings.showMarketCap}
                  onChange={(e) => handleChange('showMarketCap', e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <span className="text-gray-700">Show Sector</span>
                <input
                  type="checkbox"
                  checked={settings.showSector}
                  onChange={(e) => handleChange('showSector', e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <span className="text-gray-700">Show EPS Estimate</span>
                <input
                  type="checkbox"
                  checked={settings.showEstimate}
                  onChange={(e) => handleChange('showEstimate', e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
              </label>
              
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <span className="text-gray-700">Show Exchange</span>
                <input
                  type="checkbox"
                  checked={settings.showExchange}
                  onChange={(e) => handleChange('showExchange', e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          {/* Default Date Range */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Default Settings</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <label className="block text-gray-700 mb-2">
                  Default Days Ahead: <span className="font-semibold">{settings.defaultDaysAhead}</span>
                </label>
                <input
                  type="range"
                  min="7"
                  max="90"
                  value={settings.defaultDaysAhead}
                  onChange={(e) => handleChange('defaultDaysAhead', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>7 days</span>
                  <span>90 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                <div>
                  <span className="text-gray-700 font-medium">Email Notifications</span>
                  <p className="text-sm text-gray-500">Get notified about upcoming earnings</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          {/* Favorite Symbols */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Favorite Symbols
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 mb-2">
                Add your favorite stock symbols to track their earnings releases
              </p>
              <input
                type="text"
                placeholder="e.g., AAPL, MSFT, GOOGL (comma separated)"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                defaultValue={settings.favoriteSymbols.join(', ')}
                onBlur={(e) => {
                  const symbols = e.target.value
                    .split(',')
                    .map(s => s.trim().toUpperCase())
                    .filter(s => s.length > 0);
                  handleChange('favoriteSymbols', symbols);
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              // Save to localStorage
              localStorage.setItem('earningsCalendarSettings', JSON.stringify(settings));
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

// Hook to load settings from localStorage
export function useCalendarSettings(): [CalendarSettings, (settings: CalendarSettings) => void] {
  const [settings, setSettings] = useState<CalendarSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('earningsCalendarSettings');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return {
      showMarketCap: true,
      showSector: true,
      showEstimate: true,
      showExchange: true,
      defaultDaysAhead: 30,
      emailNotifications: false,
      favoriteSymbols: []
    };
  });

  const updateSettings = (newSettings: CalendarSettings) => {
    setSettings(newSettings);
    if (typeof window !== 'undefined') {
      localStorage.setItem('earningsCalendarSettings', JSON.stringify(newSettings));
    }
  };

  return [settings, updateSettings];
}
