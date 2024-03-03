export type Asset = {
  id: string;
  name: string;
}

export type AssetsState = {
  data: Asset[];
  loading: boolean;
  error: string | null;
}
