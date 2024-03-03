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