import axios from 'axios';
import { config } from '../config/index';

const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 30000,
});

instance.interceptors.request.use(
  reqConfig => {
    const token = localStorage.getItem('token');
    if (token) {
      reqConfig.headers.Authorization = token;
    }
    return reqConfig;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 403) {
      localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default instance;
