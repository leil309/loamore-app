import axios from 'axios';
import {Platform} from 'react-native';

export const baseInstance = axios.create({
  baseURL: __DEV__
    ? Platform.OS === 'ios'
      ? 'http://localhost:4001/graphql'
      : 'http://49.173.69.230:4001/graphql'
    : 'https://loamore-api-6fmu.vercel.app/graphql',
  timeout: 5000,
});
baseInstance.interceptors.request.use(
  config => {
    config.headers = config.headers ?? {};
    return config;
  },
  error => Promise.reject(error),
);

baseInstance.interceptors.response.use(
  async res => {
    const {
      data: {errors},
    } = res;

    if (errors) {
      //business error
      throw new Error(errors[0].message);
    }
    return res;
  },
  async error => Promise.reject(error),
);
