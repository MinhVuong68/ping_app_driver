import axios from 'axios';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.API_URL,
  timeout: apiConfig.API_TIMEOUT_MS,
  headers: apiConfig.HEADERS
  //paramsSerializer: params => queryString.stringify({ ...params }),
});

axiosClient.interceptors.request.use(async config => config);

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  },
);

export default axiosClient;
