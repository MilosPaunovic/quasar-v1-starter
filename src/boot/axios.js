import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

export default () => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => error,
  );
};

export { axiosInstance };
