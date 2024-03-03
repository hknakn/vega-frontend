import axios from 'axios';
import { AppDispatch } from '../../store/store';
import { fetchPortfolioStart, fetchPortfolioSuccess, fetchPortfolioError } from './portfoliosSlice';

const BASE_URL = 'https://your-api-base-url.com';

export const fetchPortfolio = (asOf?: string) => (dispatch: AppDispatch) => {
  dispatch(fetchPortfolioStart());

  const params = { asOf };

  axios
    .get(`${BASE_URL}/portfolios`, { params })
    .then((response) => {
      dispatch(fetchPortfolioSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchPortfolioError(error.message));
    });
};
