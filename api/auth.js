import axios from "axios";

const config = useRuntimeConfig().public;

const service = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1`,
  params: {
    key: config.firebaseApiKey,
  },
});

export const login = async (email, password) => {
  const response = await service.post(`/accounts:signInWithPassword`, {
    email,
    password,
    returnSecureToken: true,
  });
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem("user");
  window.location.reload();
  return { success: true };
};
