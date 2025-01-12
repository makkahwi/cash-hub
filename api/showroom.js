import service from ".";
import countriesData from "./countries.json";
import currenciesData from "./currencies.json";
import countriesWithContinents from "./countriesWithContinents.json";

export const addCurrency = async (data) => {
  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null");
  return await service.post(`currencies/${user.localId}.json`, data);
};

const jsonFilesData = () => {
  const countries = countriesData;
  const currencies = currenciesData;

  const finalData = currencies
    // .filter(({ type }) => type != "banknote")
    .map(
      (
        {
          back_image,
          code,
          country_id,
          db_id,
          front_image,
          id,
          issue_end_year,
          issue_start_year,
          name,
          type,
          value,
        },
        i
      ) => {
        const country = countries.find(({ id }) => id == country_id);

        // const { id, code, flag, level, name, status, wikidata_id } = country;

        return {
          id: i,
          code: code || "JOD",
          flag: country.flag,
          continent: countriesWithContinents.find(
            ({ name }) => name == country.name
          )?.continent,
          edition: 5,
          fractionName: "Cent",
          fractionSize: 100,
          name: name || "Dinar",
          status: "Circulable",
          type: type == "banknote" ? "Banknote" : "Coin",
          usdToLocal: 1,
          value: value || 3,
          year: issue_start_year || 2025,
          zoneFullName: country.name || "The Hashemite Kingdom Of Jordan",
          zoneName: country.name || "Jordan",
          fPhoto: front_image,
          bPhoto: back_image,
        };
      }
    );

  return finalData;
};

export const getCurrencies = async () => {
  return jsonFilesData();

  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null")
  return await service.get(`currencies/${user.localId}.json`).then((res) => {
    return res
      ? Object.entries(res).map(([id, values]) => ({ id, ...values }))
      : [];
  });
};

export const getCurrencyById = async (findId) => {
  const finalData = jsonFilesData();

  return finalData.find(({ id }) => id == findId);

  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null");
  return await service
    .get(`currencies/${user.localId}/${findId}.json`)
    .then((res) => {
      return res ? { id, ...res } : null;
    });
};
