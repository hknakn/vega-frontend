import axios from 'axios';
import { AppDispatch } from '../../store/store';
import { fetchPricesStart, fetchPricesSuccess, fetchPricesError } from './pricesSlice';

const BASE_URL = 'https://your-api-base-url.com';

export const fetchPrices = (assets: string[], asOf?: string, from?: string, to?: string) => (
  dispatch: AppDispatch
) => {
  dispatch(fetchPricesStart());

  const params = { assets, asOf, from, to };

  axios
    .get(`${BASE_URL}/prices`, { params })
    .then((response) => {
      dispatch(fetchPricesSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchPricesError(error.message));
    });
};
