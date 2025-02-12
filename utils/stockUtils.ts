export interface Stock {
  symbol: string
  name: string
  price: number
  previousPrice: number
  percentageChange: number
  sentiment: "Positive" | "Negative"
  sentimentValue: number
}

export const initialStocks: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple",
    price: 175.43,
    previousPrice: 174.5,
    percentageChange: 0.53,
    sentiment: "Positive",
    sentimentValue: 0.75,
  },
  {
    symbol: "AMZN",
    name: "Amazon",
    price: 127.74,
    previousPrice: 128.5,
    percentageChange: -0.59,
    sentiment: "Positive",
    sentimentValue: 0.67,
  },
  {
    symbol: "GOOG",
    name: "Alphabet",
    price: 125.3,
    previousPrice: 124.8,
    percentageChange: 0.4,
    sentiment: "Negative",
    sentimentValue: -0.25,
  },
  {
    symbol: "MA",
    name: "Mastercard",
    price: 401.43,
    previousPrice: 400.2,
    percentageChange: 0.31,
    sentiment: "Negative",
    sentimentValue: -0.65,
  },
  {
    symbol: "QQQQ",
    name: "Nasdaq ETF",
    price: 367.93,
    previousPrice: 366.5,
    percentageChange: 0.39,
    sentiment: "Positive",
    sentimentValue: 0.45,
  },
  {
    symbol: "WMT",
    name: "Walmart",
    price: 154.37,
    previousPrice: 155.0,
    percentageChange: -0.41,
    sentiment: "Positive",
    sentimentValue: 0.35,
  },
]

export function getRandomPrice(min: number, max: number): number {
  return Number((Math.random() * (max - min) + min).toFixed(2))
}

export function getRandomPercentage(): number {
  return Number((Math.random() * 10 - 5).toFixed(2))
}

export function getRandomSentiment(): number {
  return Number((Math.random() * 2 - 1).toFixed(2))
}

export function updateStocks(stocks: Stock[]): Stock[] {
  return stocks.map((stock) => {
    const newPrice = getRandomPrice(stock.price * 0.95, stock.price * 1.05)
    const percentageChange = ((newPrice - stock.price) / stock.price) * 100
    const sentimentValue = getRandomSentiment()
    return {
      ...stock,
      previousPrice: stock.price,
      price: newPrice,
      percentageChange: Number(percentageChange.toFixed(2)),
      sentimentValue: sentimentValue,
      sentiment: sentimentValue >= 0 ? "Positive" : "Negative",
    }
  })
}

