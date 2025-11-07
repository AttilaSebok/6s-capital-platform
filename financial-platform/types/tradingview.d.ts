// TradingView Widget Type Definitions

declare global {
  interface Window {
    TradingView?: {
      widget: (config: any) => void
    }
  }
}

export {}
