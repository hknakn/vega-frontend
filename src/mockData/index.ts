import { Asset, AssetClass, Portfolio, Price } from "./types";

// Mock data for assets
export const mockAssets: Asset[] = [
  { id: 1, name: 'USD', class: AssetClass.Currency },
  { id: 2, name: 'BTC', class: AssetClass.Cryptocurrency },
  { id: 3, name: 'APPL', class: AssetClass.Stock },
  { id: 4, name: 'GOOGL', class: AssetClass.Stock },
  { id: 5, name: 'GOLD', class: AssetClass.Commodity },
  { id: 6, name: 'AMZN', class: AssetClass.Stock },
  { id: 7, name: 'NFLX', class: AssetClass.Stock },
  { id: 8, name: 'TSLA', class: AssetClass.Stock },
  { id: 9, name: 'MSFT', class: AssetClass.Stock },
  { id: 10, name: 'GOOG', class: AssetClass.Stock },
];

// Mock data for prices
export const mockPrices: Price[] = [
  // Current prices
  { id: 1, asset: 1, price: 5, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 2, asset: 2, price: 50000, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 3, asset: 3, price: 150, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 4, asset: 4, price: 2500, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 5, asset: 5, price: 3500, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 6, asset: 6, price: 600, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 7, asset: 7, price: 800, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 8, asset: 8, price: 300, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 9, asset: 9, price: 2000, asOf: "2024-03-05T00:00:00.000Z" },
  { id: 10, asset: 10, price: 5, asOf: "2024-03-05T00:00:00.000Z" },
  // 1 month ago
  { id: 11, asset: 1, price: 2, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 12, asset: 2, price: 40000, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 13, asset: 3, price: 160, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 14, asset: 4, price: 2600, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 15, asset: 5, price: 3600, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 16, asset: 6, price: 550, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 17, asset: 7, price: 750, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 18, asset: 8, price: 350, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 19, asset: 9, price: 2200, asOf: "2024-02-05T00:00:00.000Z" },
  { id: 20, asset: 10, price: 5, asOf: "2024-02-05T00:00:00.000Z" },
  // 3 months ago
  { id: 21, asset: 1, price: 2, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 22, asset: 2, price: 30000, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 23, asset: 3, price: 170, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 24, asset: 4, price: 2700, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 25, asset: 5, price: 3800, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 26, asset: 6, price: 500, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 27, asset: 7, price: 700, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 28, asset: 8, price: 400, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 29, asset: 9, price: 2500, asOf: "2023-12-05T00:00:00.000Z" },
  { id: 30, asset: 10, price: 5, asOf: "2023-12-05T00:00:00.000Z" },
  // 6 months ago
  { id: 31, asset: 1, price: 3, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 32, asset: 2, price: 30000, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 33, asset: 3, price: 180, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 34, asset: 4, price: 2800, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 35, asset: 5, price: 3900, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 36, asset: 6, price: 450, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 37, asset: 7, price: 650, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 38, asset: 8, price: 500, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 39, asset: 9, price: 2800, asOf: "2023-09-05T00:00:00.000Z" },
  { id: 40, asset: 10, price: 5, asOf: "2023-09-05T00:00:00.000Z" },
  // 1 year ago
  { id: 41, asset: 1, price: 4, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 42, asset: 2, price: 60000, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 43, asset: 3, price: 200, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 44, asset: 4, price: 3000, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 45, asset: 5, price: 2000, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 46, asset: 6, price: 300, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 47, asset: 7, price: 500, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 48, asset: 8, price: 600, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 49, asset: 9, price: 3500, asOf: "2023-03-05T00:00:00.000Z" },
  { id: 50, asset: 10, price: 5, asOf: "2023-03-05T00:00:00.000Z" },
  // 3 years ago
  { id: 51, asset: 1, price: 4, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 52, asset: 2, price: 5000, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 53, asset: 3, price: 250, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 54, asset: 4, price: 3500, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 55, asset: 5, price: 2500, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 56, asset: 6, price: 200, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 57, asset: 7, price: 400, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 58, asset: 8, price: 700, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 59, asset: 9, price: 4000, asOf: "2021-03-05T00:00:00.000Z" },
  { id: 60, asset: 10, price: 5, asOf: "2021-03-05T00:00:00.000Z" },
  // 5 years ago
  { id: 61, asset: 1, price: 3, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 62, asset: 2, price: 1000, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 63, asset: 3, price: 300, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 64, asset: 4, price: 4000, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 65, asset: 5, price: 2000, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 66, asset: 6, price: 100, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 67, asset: 7, price: 300, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 68, asset: 8, price: 800, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 69, asset: 9, price: 5000, asOf: "2019-03-05T00:00:00.000Z" },
  { id: 70, asset: 10, price: 5, asOf: "2019-03-05T00:00:00.000Z" },
];

// Mock data for portfolios
export const mockPortfolio = (asOf?: string): Portfolio => {
  const asOfDate = asOf || "2024-03-05T00:00:00.000Z";

  return {
    id: 1,
    asOf: asOfDate,
    positions: [
      { id: 1, asset: 1, quantity: 1000, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 1)?.price || 0, asOf: asOfDate },
      { id: 2, asset: 2, quantity: 2, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 2)?.price || 0, asOf: asOfDate },
      { id: 3, asset: 3, quantity: 400, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 3)?.price || 0, asOf: asOfDate },
      { id: 4, asset: 4, quantity: 12, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 4)?.price || 0, asOf: asOfDate },
      { id: 5, asset: 5, quantity: 58, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 5)?.price || 0, asOf: asOfDate },
      { id: 6, asset: 6, quantity: 10, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 6)?.price || 0, asOf: asOfDate },
      { id: 7, asset: 7, quantity: 20, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 7)?.price || 0, asOf: asOfDate },
      { id: 8, asset: 8, quantity: 10, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 8)?.price || 0, asOf: asOfDate },
      { id: 9, asset: 9, quantity: 5, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 9)?.price || 0, asOf: asOfDate },
      { id: 10, asset: 10, quantity: 1000, price: mockPrices.find((price) => price.asOf === asOfDate && price.asset === 10)?.price || 0, asOf: asOfDate }
    ],
  };
}