export interface MetricCard {
  icon: string
  value: string
  label: string
}

export interface StockData {
  symbol: string
  name: string
  logo: string
  chart: string
  action: "Buy" | "Sell"
  price: number
  change: number
  sentiment: {
    value: number
    label: "Positive" | "Negative"
  }
}

