<template>
  <div>
    <PageHeader title="Showroom" />

    <FiltersSection :filters="filters" :onFilter="filterData" />

    <StatisticsSection :currencies="currencies.value" />

    <ListSection :currencies="currencies.value" />
  </div>
</template>

<script setup>
import PageHeader from "@/components/PageHeader";
import FiltersSection from "./Filters";
import StatisticsSection from "./statistics";
import ListSection from "./List";
import { reactive } from "vue";
import { getPiecesData, getCollectedCurrencies } from "@/api/showroom";
import { photoPlaceholder } from "@/utils/consts";

definePageMeta({
  layout: "landing",
});

const formatDate = (date) => date.toISOString().split("T")[0];

const filters = reactive({
  value: {
    type: ["Banknote", "Coin"],
    status: ["Current", "Discontinued"],
    continent: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    startYear: 1800,
    endYear: new Date().getFullYear(),
    startDate: formatDate(new Date("2000-01-01")),
    endDate: formatDate(new Date()),
  },
  update(key, newFilter) {
    this.value = {
      ...this.value,
      [key]: this.value[key].includes(newFilter)
        ? [...this.value[key].filter((value) => value !== newFilter)]
        : [...this.value[key], newFilter],
    };
  },
  replace(newFilter) {
    this.value = { ...this.value, ...newFilter };
  },
});

const currencies = reactive({
  value: [],
  update(newCurrencies) {
    this.value = newCurrencies;
  },
});

const filterData = () => {
  getCollectedCurrencies().then((collection) => {
    getPiecesData().then((all) => {
      currencies.update(
        all
          .filter(
            ({ id }) => collection.find((collected) => collected.id == id)?.id
          )
          .sort((a, b) => {
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
          })
          .filter((currency) => {
            let result = true;

            const filterByValueProps = ["type", "status", "continent"];
            const filterByRangeProps = ["date", "year"];

            filterByValueProps.forEach((prop) => {
              if (!filters.value[prop].includes(currency[prop])) {
                result = false;
              }
            });

            filterByRangeProps.forEach((prop) => {
              const capitalizedStr =
                prop.charAt(0).toUpperCase() + prop.slice(1);

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
          })
          .map(({ fPhoto, bPhoto, id, ...rest }) => ({
            ...rest,
            ...collection.find((collected) => collected.id == id),
            fPhoto: fPhoto || photoPlaceholder,
            bPhoto: bPhoto || photoPlaceholder,
          }))
      );
    });
  });
};

filterData();
</script>
