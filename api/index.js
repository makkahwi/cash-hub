import axios from "axios";
import { logout } from "./auth";

const config = useRuntimeConfig().public;

const service = axios.create({
  baseURL: config.firebaseDbUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.request.use(
  async (config) => {
    let user = JSON.parse(localStorage.getItem("user") || "null");

    if (user?.idToken) {
      config.params = config.params || {};
      config.params.auth = user.idToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if ([401, 403].includes(error?.response?.status)) {
      logout();
    }
    return Promise.reject(error);
  }
);

export default service;
