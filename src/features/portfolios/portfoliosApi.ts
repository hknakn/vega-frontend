import axios from 'axios';
import { AppDispatch } from '../../store/store';
import { fetchPortfoliosStart, fetchPortfoliosSuccess, fetchPortfoliosError } from './portfoliosSlice';

const BASE_URL = 'https://your-api-base-url.com';

export const fetchPortfolio = (asOf?: string) => (dispatch: AppDispatch) => {
  dispatch(fetchPortfoliosStart());

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
