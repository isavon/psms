import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.status === 401) {
    localStorage.removeItem("AUTH_TOKEN");
  }
  return Promise.reject(error);
});

export default axiosClient;