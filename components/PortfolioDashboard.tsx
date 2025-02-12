"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Plus, Menu } from "lucide-react"
import { type Stock, initialStocks, updateStocks } from "../utils/stockUtils"

export default function PortfolioDashboard() {
  const [stocks, setStocks] = useState<Stock[]>(initialStocks)

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) => updateStocks(prevStocks))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="h-10 w-10 bg-gray-800 rounded-full" />
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="container max-w-md mx-auto p-4 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-600" />
            <h1 className="text-2xl font-semibold">Portfolio</h1>
          </div>
          <p className="text-muted-foreground">
            Easily predict stock market trends and make smarter investment decisions with our intuitive portfolio tool.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-blue-600 text-white">
            <div className="mb-2">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">¥</div>
            </div>
            <div className="text-3xl font-bold">43%</div>
            <div className="text-sm text-white/80">Above baseline</div>
          </Card>

          <Card className="p-4 bg-blue-600 text-white">
            <div className="mb-2">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">$</div>
            </div>
            <div className="text-3xl font-bold">$13,813</div>
            <div className="text-sm text-white/80">Value gain on buy</div>
          </Card>

          <Card className="p-4 bg-blue-600 text-white">
            <div className="mb-2">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">💬</div>
            </div>
            <div className="text-3xl font-bold">+0.75</div>
            <div className="text-sm text-white/80">Sentiment Score</div>
          </Card>

          <Card className="p-4 bg-blue-600 text-white">
            <div className="mb-2">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">🎯</div>
            </div>
            <div className="text-3xl font-bold">87%</div>
            <div className="text-sm text-white/80">Prediction Accuracy</div>
          </Card>
        </div>

        <div className="space-y-4">
          <p className="font-medium">Sentiment Input:</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </div>
              <Switch />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 flex items-center justify-center font-semibold text-blue-600">G</div>
              <Switch />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
                  <path d="M7 2v20" />
                  <path d="M17 2v20" />
                  <path d="M2 12h20" />
                  <path d="M2 7h5" />
                  <path d="M2 17h5" />
                  <path d="M17 17h5" />
                  <path d="M17 7h5" />
                </svg>
              </div>
              <Switch />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Include market sentiment and see how public opinion shapes stock predictions.
          </p>
        </div>

        <div className="space-y-4">
          <Select defaultValue="2025-01-02">
            <SelectTrigger>
              <SelectValue placeholder="Select baseline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-01-02">Baseline: 2 Jan 2025</SelectItem>
            </SelectContent>
          </Select>

          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium text-muted-foreground px-4">
              <div className="w-1/3">Stock</div>
              <div className="w-1/5 text-right">Current $</div>
              <div className="w-1/5 text-right">% Chg</div>
              <div className="w-1/5 text-right">Sentiment</div>
            </div>
            {stocks.map((stock) => (
              <Card key={stock.symbol} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 w-1/3">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      {stock.symbol.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{stock.symbol}</div>
                      <div className="text-sm text-muted-foreground">{stock.name}</div>
                    </div>
                  </div>
                  <div className="w-1/5 text-right">
                    <div className={stock.price > stock.previousPrice ? "text-green-600" : "text-red-600"}>
                      ${stock.price.toFixed(2)}
                    </div>
                    <div className="text-sm">
                      <span
                        className={`px-2 py-1 rounded ${
                          stock.price > stock.previousPrice ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {stock.price > stock.previousPrice ? "Buy" : "Sell"}
                      </span>
                    </div>
                  </div>
                  <div className="w-1/5 text-right">
                    <span className={stock.percentageChange >= 0 ? "text-green-600" : "text-red-600"}>
                      {stock.percentageChange.toFixed(2)}%
                    </span>
                    <div className="text-sm text-muted-foreground">{stock.percentageChange >= 0 ? "▲" : "▼"}</div>
                  </div>
                  <div className="w-1/5 text-right">
                    <div className={`${stock.sentiment === "Positive" ? "text-green-600" : "text-red-600"}`}>
                      {stock.sentimentValue.toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">{stock.sentiment}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button className="w-full" variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add Stock
          </Button>
        </div>
      </main>
    </div>
  )
}

