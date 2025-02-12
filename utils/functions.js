import { statuses } from "@/utils/consts";

export const jsonDataProcess = (all) =>
  all.sort((a, b) => {
    // Sort by type: Banknote first, then Coin
    const typeOrder = ["Banknote", "Coin"];
    const typeComparison =
      typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
    if (typeComparison !== 0) return typeComparison;

    // ✅ Sort by current status: true first, then false
    if (a.current !== b.current) return b.current - a.current;

    // Sort by continent: Alphabetically
    const continentComparison = a.continent?.localeCompare(b.continent);
    if (continentComparison !== 0) return continentComparison;

    // Sort by zoneName: Alphabetically
    const zoneNameComparison = a.zoneName?.localeCompare(b.zoneName);
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

    const filterByValueProps = ["type", "continent"];
    const filterByRangeProps = ["date", "year"];

    // ✅ Handle `current` (boolean) separately
    if (
      "current" in filters.value &&
      filters.value.current.length > 0 &&
      !filters.value.current.includes(currency.current)
    ) {
      result = false;
    }

    // ✅ Apply filters for type & continent
    filterByValueProps.forEach((prop) => {
      if (!filters.value[prop].includes(currency[prop])) {
        result = false;
      }
    });

    // ✅ Apply filters for date & year ranges
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

export const getOriginalPhoto = (url) => {
  const currentSubString = "-180.jpg";
  const newSubString = "-original.jpg";

  if (url?.endsWith(currentSubString)) {
    return url.slice(0, -currentSubString.length) + newSubString;
  }

  return url;
};

export const renderStatusValue = (label) =>
  statuses.find((status) => status.label == label)?.value;

export const renderStatusLabel = (value) =>
  statuses.find((status) => status.value == value)?.label;
