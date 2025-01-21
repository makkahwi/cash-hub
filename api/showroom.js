import service from ".";
import dbData from "./db.json";

export const addCurrency = async (data) => {
  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null");
  return await service.post(`currencies/${user.localId}.json`, data);
};

const jsonFilesData = () => {
  const finalData = dbData.currencies
    .filter(
      ({ issue_start_year }) => parseInt(String(issue_start_year)) >= 1800
    )
    .map(
      (
        {
          back_image,
          code,
          country_id,
          front_image,
          id,
          issue_end_year,
          issue_start_year,
          name,
          type,
          value,
          originalText,
        },
        i
      ) => {
        const country = dbData.countries.find(({ id }) => id == country_id);

        // const { id, code, flag, level, name, status, wikidata_id } = country;

        return {
          id: i,
          code: code || "JOD",
          flag: country.flag,
          continent: dbData.continents.find(
            ({ id }) => id == country?.continent_id
          )?.name,
          edition: 5,
          fractionName: "Cent",
          fractionSize: 100,
          name: name || "Dinar",
          status: "Circulable",
          type,
          usdToLocalNow: 1,
          usdToLocalAtIssueTime: 1,
          usdToLocalAtCollectionTime: 1,
          value: value || 3,
          firstYear:
            parseInt(String(issue_start_year)) || new Date().getFullYear(),
          lastYear:
            parseInt(String(issue_end_year)) || new Date().getFullYear(),
          zoneFullName: country.name || "The Hashemite Kingdom Of Jordan",
          zoneName: country.name || "Jordan",
          fPhoto: front_image || back_image,
          bPhoto: back_image || front_image,
          date: "2024-12-12",
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
