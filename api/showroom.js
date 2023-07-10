const baseUrl = "http://localhost:1337/api";

export const getCurrencies = (filters) => {
  const finalFilters = [];

  const addArrays = (list,key) => list[key].forEach((value,i) => finalFilters.push(`filters[${key}][$eq][${i}]=${value}`));

  Object.keys(filters).forEach(key => 
    typeof filters[key] === "object" ? addArrays(filters, key) : finalFilters.push(`filters[${key}][${key === "startDate" ? '$gte' : "$lte"}]=${filters[key]}`)
  );

  return useFetch(`${baseUrl}/collections?${finalFilters.join("&")}`);
};

export const getCurrency = (id) => useFetch(`${baseUrl}/collections/${id}`);

export const getRelatedCurrencies = (id) => useFetch(`${baseUrl}/collections`);
