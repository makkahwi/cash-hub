import service from ".";
import dbData from "./db.json";

export const getCollectedCurrencies = async () => {
  return await service.get(`collection.json`).then((res) => {
    return res
      ? Object.entries(res).map(([id, values]) => ({ id, ...values }))
      : [];
  });
};

export const addCollectedCurrencies = async ({
  collectedCurrencies,
  date,
  // price,
  note,
}) => {
  collectedCurrencies.map(async (id) => {
    const row = {
      id,
      date,
      note,
      // price,
    };

    return await service.post(`collection.json`, row);
  });
};

const jsonFilesData = () => {
  const finalData = dbData.currencies
    .filter(
      ({ issue_start_year }) => parseInt(String(issue_start_year)) >= 1800
    )
    .map(
      ({
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
      }) => {
        const country = dbData.countries.find(({ id }) => id == country_id);

        // const { id, code, flag, level, name, status, wikidata_id } = country;

        return {
          id: id,
          code: code || "JOD",
          flag: country.flag,
          continent: dbData.continents.find(
            ({ id }) => id == country?.continent_id
          )?.name,
          edition: 5,
          fractionName: "Cent",
          fractionSize: 100,
          name: name || "Dinar",
          status: "Current",
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

export const getPiecesData = async () => {
  return jsonFilesData();

  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null")
  return await service.get(`currencies/${user.localId}.json`).then((res) => {
    return res
      ? Object.entries(res).map(([id, values]) => ({ id, ...values }))
      : [];
  });
};

export const getPieceDataById = async (findId) => {
  const finalData = jsonFilesData();

  return finalData.find(({ id }) => id == findId);

  const user = { localId: "123" }; // JSON.parse(localStorage.getItem("user") || "null");
  return await service
    .get(`currencies/${user.localId}/${findId}.json`)
    .then((res) => {
      return res ? { id, ...res } : null;
    });
};
