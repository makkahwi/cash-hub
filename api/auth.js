import service from ".";

export const login = async ({ password }) => {
  const response = await service.post(`/accounts:signInWithPassword`, {
    email: "makkahwi@live.com",
    password,
  });
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem("user");
  return { success: true };
};
