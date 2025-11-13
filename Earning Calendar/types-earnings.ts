// types/earnings.ts

export interface EarningsEvent {
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

export interface EarningsCalendarFilters {
  startDate: string;
  endDate: string;
  sector?: string;
  marketCapMin?: number;
  marketCapMax?: number;
  search?: string;
}

export interface EarningsResponse {
  earnings: EarningsEvent[];
  total: number;
  page: number;
  pageSize: number;
}
