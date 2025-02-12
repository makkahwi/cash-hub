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
import { photoPlaceholder, continents, statuses } from "@/utils/consts";
import { jsonDataProcess, dataFilter } from "@/utils/functions";

definePageMeta({
  layout: "landing",
});

const formatDate = (date) => date.toISOString().split("T")[0];

const filters = reactive({
  value: {
    type: ["Banknote", "Coin"],
    current: statuses.map(({ value }) => value),
    continent: continents,
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
      const processedData = jsonDataProcess(
        all.filter(
          ({ id }) => collection.find((collected) => collected.id == id)?.id
        )
      );
      const filteredData = dataFilter(processedData, filters);

      const finalData = filteredData.map(({ fPhoto, bPhoto, id, ...rest }) => ({
        ...rest,
        ...collection.find((collected) => collected.id == id),
        fPhoto: fPhoto || photoPlaceholder,
        bPhoto: bPhoto || photoPlaceholder,
      }));

      currencies.update(finalData);
    });
  });
};

filterData();
</script>
