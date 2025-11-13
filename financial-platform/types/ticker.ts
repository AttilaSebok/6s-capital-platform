// types/ticker.ts

export interface TickerData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: number;
}

export interface TickerResponse {
  data: TickerData[];
  timestamp: number;
}
