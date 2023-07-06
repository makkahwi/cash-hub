export const getCurrencies = (filters) => useFetch("https://fakestoreapi.com/products");

export const getCurrency = (id) => useFetch(`https://fakestoreapi.com/products/${id}`);