import axios from "axios";

const API_KEY = "AIzaSyDvdG-jswhypm7x6rSY7Yp8yrbgS36yQ8c";

const service = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1`,
  params: {
    key: API_KEY,
  },
});

export const login = async (password) => {
  const response = await service.post(`/accounts:signInWithPassword`, {
    email: "makkahwi@live.com",
    password,
    returnSecureToken: true,
  });
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem("user");
  return { success: true };
};
