import service from ".";

export const addCurrency = async (data) => {
  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null");
  return await service.post(`currencies/${user.localId}.json`, data);
};

export const getCurrencies = async (filters) => {
  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null");
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
  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null");
  return await service
    .get(`currencies/${user.localId}/${id}.json`)
    .then((res) => {
      return res ? { id, ...res } : null;
    });
};
