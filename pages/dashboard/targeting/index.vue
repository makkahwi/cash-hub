<template>
  <div>
    <PageHeader title="Targeting List" />

    <FiltersSection
      :filters="filters"
      :onFilter="filterData"
      :noCollection="true"
    />

    <StatisticsSection :currencies="currencies.value" />

    <WishList :currencies="currencies.value" />

    <ListSection :currencies="currencies.value" :noCollection="true" />
  </div>
</template>

<script setup>
import PageHeader from "@/components/PageHeader";
import FiltersSection from "@/pages/showroom/Filters";
import StatisticsSection from "@/pages/showroom/statistics";
import ListSection from "@/pages/showroom/List";
import { reactive } from "vue";
import { getPiecesData, getCollectedCurrencies } from "@/api/showroom";
import { photoPlaceholder, continents } from "@/utils/consts";
import { jsonDataProcess } from "@/utils/functions";
import WishList from "./WishList";

const formatDate = (date) => date.toISOString().split("T")[0];

const filters = reactive({
  value: {
    type: ["Banknote", "Coin"],
    status: ["Current", "Discontinued"],
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
          ({ id }) => !collection.find((collected) => collected.id == id)?.id
        )
      );

      const filteredData = processedData.filter((_, i) => i < 1000);

      const finalData = filteredData.map(({ fPhoto, bPhoto, ...rest }) => ({
        ...rest,
        fPhoto: fPhoto || bPhoto || photoPlaceholder,
        bPhoto: bPhoto || fPhoto || photoPlaceholder,
      }));

      currencies.update(finalData);
    });
  });
};

filterData();

definePageMeta({
  layout: "landing",
});
</script>
