import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Portfolio, PortfolioState } from './types';

const initialState: PortfolioState = {
  data: [],
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolios',
  initialState,
  reducers: {
    fetchPortfoliosStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPortfoliosSuccess: (state, action: PayloadAction<Portfolio[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchPortfoliosError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPortfoliosStart, fetchPortfoliosSuccess, fetchPortfoliosError } = portfolioSlice.actions;

export default portfolioSlice.reducer;
