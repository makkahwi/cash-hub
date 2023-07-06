const baseUrl = "https://fakestoreapi.com";

export const getCurrencies = (filters) => useFetch(`${baseUrl}/products`);

export const getCurrency = (id) => useFetch(`${baseUrl}/products/${id}`);

export const getRelatedCurrencies = (id) => useFetch(`${baseUrl}/products`);
