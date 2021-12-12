import axios from 'axios';

const $axios = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

export default () => {
  $axios.interceptors.response.use(
    (response) => response,
    (error) => error,
  );
};

export { $axios };
