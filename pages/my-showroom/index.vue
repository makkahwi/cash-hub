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

const filters = reactive({
  value: {
    type: ["Banknote", "Coin"],
    status: ["Circulable", "Outdated"],
    continent: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    startYear: 1800,
    endYear: new Date().getFullYear(),
    startDate: new Date(),
    endDate: new Date(),
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
  value: [
    {
      zoneName: "Jordan",
      zoneFullName: "The Hashemite Kingdom Of Jordan",
      name: "Jordanian Dinar",
      code: "JOD",
      edition: 5,
      year: 2023,
      usdToLocal: 0.71,
      date: "2023-01-01",
      value: 50,
      continent: "Asia",
      type: "Banknote",
      status: "Circulable",
    },
  ],
  update(newCurrencies) {
    this.value = newCurrencies;
  },
});

const filterData = () => {
  getCurrencies(filters.value).then((res) => {
    // const filteredData = res.filter((currency) => {
    //   console.log("Checking currency:", currency);

    //   return (
    //     (!filters.value.type.length ||
    //       filters.value.type.includes(currency.type)) &&
    //     (!filters.value.status.length ||
    //       filters.value.status.includes(currency.status)) &&
    //     (!filters.value.continent.length ||
    //       filters.value.continent.includes(currency.continent)) &&
    //     (currency.year || 0) >= filters.value.startYear &&
    //     (currency.year || 0) <= filters.value.endYear &&
    //     (!filters.value.startDate ||
    //       (currency.date &&
    //         new Date(currency.date) >= new Date(filters.value.startDate))) &&
    //     (!filters.value.endDate ||
    //       (currency.date &&
    //         new Date(currency.date) <= new Date(filters.value.endDate)))
    //   );
    // });

    // console.log({ filteredData, res });

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
