export const getCurrencies = (filters) => useFetch("https://fakestoreapi.com/products");

export const getCurrency = (id) => useFetch(`https://fakestoreapi.com/products/${id}`);

export const getRelatedCurrencies = (id) => useFetch("https://fakestoreapi.com/products");
