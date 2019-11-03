import Vue from 'vue';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${Vue.cookie.get('token')}`;
    return config;
  },
  error => Promise.reject(error),
);

/*axiosInstance.interceptors.response.use((response) => {
  // NProgress.done();
  return response;
}); */

export default axiosInstance;
