import axios from 'axios';
import { AppDispatch } from '../../store/store';
import { fetchAssetsStart, fetchAssetsSuccess, fetchAssetsError } from './assetsSlice';

const BASE_URL = 'https://your-api-base-url.com';

export const fetchAssets = () => (dispatch: AppDispatch) => {
  dispatch(fetchAssetsStart());

  axios
    .get(`${BASE_URL}/assets`)
    .then((response) => {
      dispatch(fetchAssetsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAssetsError(error.message));
    });
};
