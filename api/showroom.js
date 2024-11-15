// import { refreshToken, signOut } from '../Store/authSlice';
// import store from '../Store/store';
import axios from "axios";

// Configure the base URL for Firebase
const service = axios.create({
  baseURL:
    "https://currency-showroom-default-rtdb.europe-west1.firebasedatabase.app",
  headers: {
    "Content-Type": "application/json",
  },
});

// Check if the token is expired
const isTokenExpired = (expiresAt) => Date.now() > expiresAt;

// Request interceptor for token handling
service.interceptors.request.use(
  async (config) => {
    let user = { localId: "123" }; // store.getState().auth?.user;

    if (user?.idToken) {
      // Refresh token if expired
      if (isTokenExpired(user.expiresAt)) {
        try {
          const resultAction = {}; // await store.dispatch(refreshToken(user.refreshToken));
          if (refreshToken.fulfilled.match(resultAction)) {
            user = {
              ...user,
              idToken: resultAction.payload.id_token,
              refreshToken: resultAction.payload.refresh_token,
              expiresAt: Date.now() + resultAction.payload.expires_in * 1000,
            };
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            // store.dispatch(signOut());
            throw new Error("Failed to refresh token");
          }
        } catch (error) {
          // store.dispatch(signOut());
          throw error;
        }
      }
      // Add token to request parameters
      config.params = config.params || {};
      config.params.auth = user.idToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors
service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if ([401, 403].includes(error?.response?.status)) {
      // store.dispatch(signOut());
    }
    return Promise.reject(error);
  }
);

export default service;

export const addCurrency = async (data) => {
  const user = { localId: "123" }; // store.getState().auth.user;
  return await service.post(`currencies/${user.localId}.json`, data);
};

export const getCurrencies = async (filters) => {
  const user = { localId: "123" }; // store.getState().auth.user;
  const queryString = new URLSearchParams(filters).toString();
  return await service
    .get(`currencies/${user.localId}.json?${queryString}`)
    .then((res) => {
      return res
        ? Object.entries(res).map(([id, values]) => ({ id, ...values }))
        : [];
    });
};

export const getCurrencyById = async (id) => {
  const user = { localId: "123" }; // store.getState().auth.user;
  return await service
    .get(`currencies/${user.localId}/${id}.json`)
    .then((res) => {
      return res ? { id, ...res } : null;
    });
};
