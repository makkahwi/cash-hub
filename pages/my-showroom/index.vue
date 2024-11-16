<template>
  <div>
    <PageHeader
      title="My Showroom"
      subtitle="Here is my collection of currencies"
    />

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
import { getCurrencies } from "@/api/showroom";
import { photoPlaceholder } from "@/utils/consts";

definePageMeta({
  layout: "landing",
});

const formatDate = (date) => date.toISOString().split("T")[0];

const filters = reactive({
  value: {
    type: ["Banknote", "Coin"],
    status: ["Circulable", "Outdated"],
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
  getCurrencies(filters.value).then((res) => {
    currencies.update(
      res.map(({ fPhoto, bPhoto, ...rest }) => ({
        ...rest,
        fPhoto: fPhoto || photoPlaceholder,
        bPhoto: bPhoto || photoPlaceholder,
      }))
    );
  });
};

filterData();
</script>
