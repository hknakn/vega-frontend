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