import service from ".";
import dbData from "./db.json";

export const getCollectedCurrencies = async () => {
  return await service.get(`collection.json`).then((res) => {
    return res
      ? Object.entries(res).map(([id, values]) => ({ dbId: id, ...values }))
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

export const updateCollectedCurrency = async (id, data) => {
  return await service.patch(`collection/${id}.json`, data);
};

export const deleteCollectedCurrency = async (id) => {
  return await service.delete(`collection/${id}.json`);
};

const jsonFilesData = () => {
  const finalData = dbData.currencyPieces
    .filter(
      ({ issue_start_year }) => parseInt(String(issue_start_year)) >= 1900
    )
    .map(
      ({
        id,
        currency_id,
        value,
        type,
        issue_start_year,
        issue_end_year,
        front_image,
        back_image,
        originalText,
      }) => {
        const currency = dbData.currencies.find(({ id }) => id == currency_id);
        const country = dbData.countries.find(
          ({ id }) => id == currency?.country_id
        );
        const continent = dbData.continents.find(
          ({ id }) => id == country?.continent_id
        );

        const final = {
          id,
          code: currency?.code,
          flag: country?.flag,
          continent: continent?.name,
          edition: 5,
          fractionName: currency?.fractionName,
          fractionSize: currency?.fractionSize,
          name: currency?.name,
          status: "Current",
          type,
          usdToLocalNow: 1,
          usdToLocalAtIssueTime: 1,
          usdToLocalAtCollectionTime: 1,
          value,
          firstYear: parseInt(String(issue_start_year)),
          lastYear: parseInt(String(issue_end_year)),
          zoneFullName: country?.name,
          zoneName: country?.name,
          fPhoto: front_image || back_image,
          bPhoto: back_image || front_image,
        };

        return final;
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
