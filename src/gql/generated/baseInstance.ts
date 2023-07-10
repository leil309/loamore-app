import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: 'https://loamore-api-6fmu.vercel.app/graphql', //Config.API_URL,
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
