export type Asset = {
  id: number;
  name: string;
  class: AssetClass;
}

export type AssetsState = {
  data: Asset[];
  loading: boolean;
  error: string | null;
}

export enum AssetClass {
  Currency = 'Currency',
  Cryptocurrency = 'Cryptocurrency',
  Stock = 'Stock',
  Bond = 'Bond',
  RealEstate = 'RealEstate',
  Commodity = 'Commodity',
  Other = 'Other',
}

export type Position = {
  id: number;
  asset: number;
  quantity: number;
  asOf: string;
  price: number;
}

export type Portfolio = {
  id: number;
  asOf: string;
  positions: Position[];
}

export type PortfolioState = {
  data: Portfolio[];
  loading: boolean;
  error: string | null;
}

export type Price = {
  id: number;
  asset: number;
  price: number;
  asOf: string;
}

export type PricesState = {
  data: Price[];
  loading: boolean;
  error: string | null;
}
