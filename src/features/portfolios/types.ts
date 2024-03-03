export type Position = {
  id: number;
  asset: string;
  quantity: number;
  asOf: string;
  price: number;
}

export type Portfolio = {
  id: string;
  asOf: string;
  positions: Position[];
}

export type PortfolioState = {
  data: Portfolio[];
  loading: boolean;
  error: string | null;
}