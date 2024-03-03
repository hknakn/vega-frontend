import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Price, PricesState } from './types';

const initialState: PricesState = {
  data: [],
  loading: false,
  error: null,
};

const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    fetchPricesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPricesSuccess: (state, action: PayloadAction<Price[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchPricesError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPricesStart, fetchPricesSuccess, fetchPricesError } = pricesSlice.actions;

export default pricesSlice.reducer;
