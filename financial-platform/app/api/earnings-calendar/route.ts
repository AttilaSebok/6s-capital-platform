// app/api/earnings-calendar/route.ts

import { NextRequest, NextResponse } from 'next/server';

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY || 'demo';
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

interface FinnhubEarning {
  date: string;
  epsActual: number | null;
  epsEstimate: number | null;
  hour: string;
  quarter: number;
  revenueActual: number | null;
  revenueEstimate: number | null;
  symbol: string;
  year: number;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const from = searchParams.get('from') || getDefaultStartDate();
  const to = searchParams.get('to') || getDefaultEndDate();
  const sector = searchParams.get('sector');
  const search = searchParams.get('search');

  try {
    // Using Finnhub for earnings calendar (better data quality)
    if (FINNHUB_API_KEY) {
      const earnings = await fetchFinnhubEarnings(from, to);
      
      let filtered = earnings;
      
      // Apply search filter
      if (search) {
        filtered = filtered.filter((e: any) =>
          e.symbol.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Note: Sector filtering would require additional API calls to get company details
      
      return NextResponse.json({
        earnings: filtered,
        total: filtered.length,
        page: 1,
        pageSize: filtered.length
      });
    } else {
      // Fallback to mock data if no API key
      const mockData = generateMockEarnings(from, to);
      
      let filtered = mockData;

      if (search) {
        filtered = filtered.filter((e: any) =>
          e.symbol.toLowerCase().includes(search.toLowerCase()) ||
          e.companyName.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (sector && sector !== 'all') {
        filtered = filtered.filter((e: any) => e.sector === sector);
      }

      return NextResponse.json({
        earnings: filtered,
        total: filtered.length,
        page: 1,
        pageSize: filtered.length
      });
    }
  } catch (error) {
    console.error('Error fetching earnings calendar:', error);
    return NextResponse.json(
      { error: 'Failed to fetch earnings calendar' },
      { status: 500 }
    );
  }
}

async function fetchFinnhubEarnings(from: string, to: string) {
  const url = `https://finnhub.io/api/v1/calendar/earnings?from=${from}&to=${to}&token=${FINNHUB_API_KEY}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch from Finnhub');
  }
  
  const data = await response.json();
  
  return (data.earningsCalendar || []).map((item: FinnhubEarning) => ({
    symbol: item.symbol,
    companyName: item.symbol, // Would need additional call for company name
    reportDate: item.date,
    fiscalDateEnding: item.date,
    estimate: item.epsEstimate,
    currency: 'USD',
    hour: item.hour
  }));
}

function generateMockEarnings(from: string, to: string) {
  const companies = [
    { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', marketCap: 2800000000000 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology', marketCap: 2500000000000 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', marketCap: 1700000000000 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer Cyclical', marketCap: 1600000000000 },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', marketCap: 1200000000000 },
    { symbol: 'META', name: 'Meta Platforms Inc.', sector: 'Technology', marketCap: 900000000000 },
    { symbol: 'TSLA', name: 'Tesla Inc.', sector: 'Consumer Cyclical', marketCap: 800000000000 },
    { symbol: 'BRK.B', name: 'Berkshire Hathaway', sector: 'Financial Services', marketCap: 750000000000 },
    { symbol: 'V', name: 'Visa Inc.', sector: 'Financial Services', marketCap: 500000000000 },
    { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Financial Services', marketCap: 480000000000 },
    { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Consumer Defensive', marketCap: 450000000000 },
    { symbol: 'MA', name: 'Mastercard Inc.', sector: 'Financial Services', marketCap: 400000000000 },
    { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', marketCap: 380000000000 },
    { symbol: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare', marketCap: 480000000000 },
    { symbol: 'XOM', name: 'Exxon Mobil Corporation', sector: 'Energy', marketCap: 420000000000 },
    { symbol: 'PG', name: 'Procter & Gamble', sector: 'Consumer Defensive', marketCap: 360000000000 },
    { symbol: 'HD', name: 'The Home Depot', sector: 'Consumer Cyclical', marketCap: 340000000000 },
    { symbol: 'CVX', name: 'Chevron Corporation', sector: 'Energy', marketCap: 280000000000 },
    { symbol: 'MRK', name: 'Merck & Co. Inc.', sector: 'Healthcare', marketCap: 260000000000 },
    { symbol: 'ABBV', name: 'AbbVie Inc.', sector: 'Healthcare', marketCap: 290000000000 },
  ];

  const startDate = new Date(from);
  const endDate = new Date(to);
  const earnings = [];

  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    const randomDays = Math.floor(Math.random() * 
      ((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
    const reportDate = new Date(startDate.getTime() + randomDays * 24 * 60 * 60 * 1000);
    
    earnings.push({
      symbol: company.symbol,
      companyName: company.name,
      reportDate: reportDate.toISOString().split('T')[0],
      fiscalDateEnding: reportDate.toISOString().split('T')[0],
      estimate: Math.random() * 10,
      currency: 'USD',
      marketCap: company.marketCap,
      sector: company.sector,
      exchange: 'NASDAQ'
    });
  }

  return earnings.sort((a, b) => 
    new Date(a.reportDate).getTime() - new Date(b.reportDate).getTime()
  );
}

function getDefaultStartDate(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function getDefaultEndDate(): string {
  const today = new Date();
  const endDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days ahead
  return endDate.toISOString().split('T')[0];
}
