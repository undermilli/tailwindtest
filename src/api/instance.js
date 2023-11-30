import axios from 'axios';

const BASE_URL = 'http://test.ekkozulu.com:8090/';

export const loginApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

loginApi.interceptors.request.use(
  (config) => {


    return config
  }, (error) => {
    return Promise.reject(error);
  });

loginApi.interceptors.response.use(
  (res) => {

    return res;
  }, (error) => {
    return Promise.reject(error);
  });