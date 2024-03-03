export type Price = {
  id: string;
  asset: string;
  price: number;
}

export type PricesState = {
  data: Price[];
  loading: boolean;
  error: string | null;
}
