const baseUrl = "http://localhost:1337/api";

export const getCurrencies = (filters) => useFetch(`${baseUrl}/currencies`);

export const getCurrency = (id) => useFetch(`${baseUrl}/currencies/${id}`);

export const getRelatedCurrencies = (id) => useFetch(`${baseUrl}/currencies`);
