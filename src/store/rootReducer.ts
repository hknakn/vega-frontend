import { combineReducers } from '@reduxjs/toolkit';
import assetsReducer from '../features/assets/assetsSlice';
import pricesReducer from '../features/prices/pricesSlice';
import portfoliosReducer from '../features/portfolios/portfoliosSlice';

const rootReducer = combineReducers({
  assets: assetsReducer,
  prices: pricesReducer,
  portfolios: portfoliosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
