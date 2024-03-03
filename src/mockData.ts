import { Asset, AssetClass } from "./features/assets/types";
import { Portfolio } from "./features/portfolios/types";
import { Price } from "./features/prices/types";

// Mock data for assets
export const mockAssets: Asset[] = [
  { id: 1, name: 'USD', class: AssetClass.Currency },
  { id: 2, name: 'BTC', class: AssetClass.Cryptocurrency },
  { id: 3, name: 'APPL', class: AssetClass.Stock },
  { id: 4, name: 'GOOGL', class: AssetClass.Stock },
  { id: 5, name: 'Gold', class: AssetClass.Commodity },
  { id: 5, name: 'AMZN', class: AssetClass.Stock },
  { id: 6, name: 'NFLX', class: AssetClass.Stock },
  { id: 7, name: 'TSLA', class: AssetClass.Stock },
  { id: 8, name: 'MSFT', class: AssetClass.Stock },
  { id: 9, name: 'GOOG', class: AssetClass.Stock },
];

// Mock data for prices
export const mockPrices: Price[] = [
  { id: 1, asset: 1, price: 1, asOf: '2023-01-01T00:00:00Z' },
  { id: 2, asset: 2, price: 50000, asOf: '2023-01-01T00:00:00Z' },
  { id: 3, asset: 3, price: 150, asOf: '2023-01-01T00:00:00Z' },
  { id: 4, asset: 4, price: 2500, asOf: '2023-01-01T00:00:00Z' },
  { id: 5, asset: 5, price: 3500, asOf: '2023-01-01T00:00:00Z' },
  { id: 6, asset: 6, price: 600, asOf: '2023-01-01T00:00:00Z' },
  { id: 7, asset: 7, price: 800, asOf: '2023-01-01T00:00:00Z' },
  { id: 8, asset: 8, price: 300, asOf: '2023-01-01T00:00:00Z' },
  { id: 9, asset: 9, price: 2000, asOf: '2023-01-01T00:00:00Z' },
];

// Mock data for portfolios
export const mockPortfolios: Portfolio[] = [
  {
    id: 1,
    asOf: '2023-01-01T00:00:00Z',
    positions: [
      { id: 1, asset: 1, quantity: 1000, asOf: '2023-01-01T00:00:00Z', price: 1 },
      { id: 2, asset: 2, quantity: 5, asOf: '2023-01-01T00:00:00Z', price: 50000 },
      { id: 3, asset: 3, quantity: 10, asOf: '2023-01-01T00:00:00Z', price: 150 },
      { id: 4, asset: 4, quantity: 8, asOf: '2023-01-01T00:00:00Z', price: 2500 },
      { id: 5, asset: 5, quantity: 5, asOf: '2023-01-01T00:00:00Z', price: 3500 },
      { id: 6, asset: 6, quantity: 12, asOf: '2023-01-01T00:00:00Z', price: 600 },
      { id: 7, asset: 7, quantity: 15, asOf: '2023-01-01T00:00:00Z', price: 800 },
      { id: 8, asset: 8, quantity: 20, asOf: '2023-01-01T00:00:00Z', price: 300 },
      { id: 9, asset: 9, quantity: 7, asOf: '2023-01-01T00:00:00Z', price: 2000 },
      // Add more positions as needed
    ],
  },
  {
    id: 2,
    asOf: '2023-01-01T00:00:00Z',
    positions: [
      { id: 1, asset: 1, quantity: 1000, asOf: '2023-01-01T00:00:00Z', price: 1 },
      { id: 2, asset: 2, quantity: 5, asOf: '2023-01-01T00:00:00Z', price: 50000 },
      { id: 3, asset: 3, quantity: 10, asOf: '2023-01-01T00:00:00Z', price: 150 },
      { id: 4, asset: 4, quantity: 8, asOf: '2023-01-01T00:00:00Z', price: 2500 },
      { id: 5, asset: 5, quantity: 5, asOf: '2023-01-01T00:00:00Z', price: 3500 },
      { id: 6, asset: 6, quantity: 12, asOf: '2023-01-01T00:00:00Z', price: 600 },
      { id: 7, asset: 7, quantity: 15, asOf: '2023-01-01T00:00:00Z', price: 800 },
      { id: 8, asset: 8, quantity: 20, asOf: '2023-01-01T00:00:00Z', price: 300 },
      { id: 9, asset: 9, quantity: 7, asOf: '2023-01-01T00:00:00Z', price: 2000 },
      // Add more positions as needed
    ],
  }
  // Add more portfolios as needed
];