import axios from 'axios';
import { AppDispatch } from '../store/store';
import {
  fetchAssetsSuccess,
  fetchAssetsError,
  fetchPricesSuccess,
  fetchPricesError,
  fetchPortfoliosSuccess,
  fetchPortfoliosError,
} from '../features';

const BASE_URL = 'https://your-api-base-url.com';

export const getAssets = (dispatch: AppDispatch) => {
  axios
    .get(`${BASE_URL}/assets`)
    .then((response) => {
      dispatch(fetchAssetsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAssetsError(error.message));
    });
};

export const getPrices = (assets: string[], asOf?: string, from?: string, to?: string) => (
  dispatch: AppDispatch
) => {
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

export const getPortfolios = (asOf?: string) => (dispatch: AppDispatch) => {
  const params = { asOf };

  axios
    .get(`${BASE_URL}/portfolios`, { params })
    .then((response) => {
      dispatch(fetchPortfoliosSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchPortfoliosError(error.message));
    });
};
