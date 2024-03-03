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
