export const jsonDataProcess = (all) =>
  all.sort((a, b) => {
    // Sort by type: Banknote first, then Coin
    const typeOrder = ["Banknote", "Coin"];
    const typeComparison =
      typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
    if (typeComparison !== 0) return typeComparison;

    // Sort by status: Current first, then Discontinued
    const statusOrder = ["Current", "Discontinued"];
    const statusComparison =
      statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    if (statusComparison !== 0) return statusComparison;

    // Sort by continent: Alphabetically
    const continentComparison = a.continent.localeCompare(b.continent);
    if (continentComparison !== 0) return continentComparison;

    // Sort by zoneName: Alphabetically
    const zoneNameComparison = a.zoneName.localeCompare(b.zoneName);
    if (zoneNameComparison !== 0) return zoneNameComparison;

    // Sort by edition: Descending (highest to lowest)
    const editionComparison = b.edition - a.edition;
    if (editionComparison !== 0) return editionComparison;

    // Sort by value: Ascending (smallest to largest)
    return a.value - b.value;
  });

export const dataFilter = (data, filters) =>
  data.filter((currency) => {
    let result = true;

    const filterByValueProps = ["type", "status", "continent"];
    const filterByRangeProps = ["date", "year"];

    filterByValueProps.forEach((prop) => {
      if (!filters.value[prop].includes(currency[prop])) {
        result = false;
      }
    });

    filterByRangeProps.forEach((prop) => {
      const capitalizedStr = prop.charAt(0).toUpperCase() + prop.slice(1);

      const startQuery = `start${capitalizedStr}`;
      const endQuery = `end${capitalizedStr}`;

      if (currency[prop]) {
        if (
          formatDate(new Date(filters.value[startQuery])) >
          formatDate(new Date(currency[prop]))
        ) {
          result = false;
        }

        if (
          formatDate(new Date(filters.value[endQuery])) <
          formatDate(new Date(currency[prop]))
        ) {
          result = false;
        }
      }
    });

    return result;
  });
