import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset, AssetsState } from './types';

const initialState: AssetsState = {
  data: [],
  loading: false,
  error: null,
};

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    fetchAssetsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAssetsSuccess: (state, action: PayloadAction<Asset[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchAssetsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchAssetsStart, fetchAssetsSuccess, fetchAssetsError } = assetsSlice.actions;

export default assetsSlice.reducer;
