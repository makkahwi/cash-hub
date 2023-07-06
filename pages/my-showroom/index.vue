<template>
  <div>
    <PageHeader title="My Showroom" subtitle="Here is my collecion of currencies" />

    <FiltersSection :filters="filters" :onFilter="filterData" />

    <StatisticsSection :currencies="currencies.value" />

    <ListSection :currencies="currencies.value" />
  </div>
</template>

<script setup>
  import PageHeader from "@/components/PageHeader";
  import FiltersSection from "./Filters";
  import StatisticsSection from "./Statistics";
  import ListSection from "./List";
  import { reactive } from 'vue'
  import { getCurrencies } from '@/api/showroom'

  definePageMeta({
    layout: "landing",
  });

  const filters = reactive({
    value: {
      startDate: new Date().getFullYear(),
      endDate: new Date().getFullYear()
    },
    update(newFilter) {
      this.value = {...this.value , ...newFilter};
    }
  })

  const currencies = reactive({
    value: [
      {
        id: 1,
        name: "Dinar",
        code: "JOD",
        mostRecentEdition: 5,
        fractionName: "Piastre",
        fraction: 100,
        order: 5,
        year: 2022,
        value: 50,
        type: "Banknote",
        fPhoto: "https://static.timesofisrael.com/www/uploads/2023/01/50dinars.jpg",
        bPhoto: "https://upload.wikimedia.org/wikipedia/ar/7/7d/50_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%AE%D9%84%D9%81%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        date: "Jan 2023",
        count: 1,
        zoneName: "Jordan",
        fullName: "Hashemite Kingdom of Jordan",
        mapCode: "JO",
        continent: "Asia",
        valuePerUSD: 0.71
      },
      {
        id: 2,
        name: "Dinar",
        code: "JOD",
        mostRecentEdition: 5,
        fractionName: "Piastre",
        fraction: 100,
        order: 5,
        year: 2022,
        value: 20,
        type: "Banknote",
        fPhoto: "https://upload.wikimedia.org/wikipedia/ar/d/d3/20_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        bPhoto: "https://upload.wikimedia.org/wikipedia/ar/d/d3/20_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        date: "Jan 2023",
        count: 1,
        zoneName: "Jordan",
        fullName: "Hashemite Kingdom of Jordan",
        mapCode: "JO",
        continent: "Asia",
        valuePerUSD: 0.71
      },
      {
        id: 3,
        name: "Dinar",
        code: "JOD",
        mostRecentEdition: 5,
        fractionName: "Piastre",
        fraction: 100,
        order: 5,
        year: 2022,
        value: 10,
        type: "Banknote",
        fPhoto: "https://upload.wikimedia.org/wikipedia/ar/4/43/10_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        bPhoto: "https://upload.wikimedia.org/wikipedia/ar/4/43/10_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        date: "Jan 2023",
        count: 1,
        zoneName: "Jordan",
        fullName: "Hashemite Kingdom of Jordan",
        mapCode: "JO",
        continent: "Asia",
        valuePerUSD: 0.71
      },
      {
        id: 4,
        name: "Dinar",
        code: "JOD",
        mostRecentEdition: 5,
        fractionName: "Piastre",
        fraction: 100,
        order: 5,
        year: 2022,
        value: 5,
        type: "Banknote",
        fPhoto: "https://upload.wikimedia.org/wikipedia/ar/6/6b/5_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        bPhoto: "https://upload.wikimedia.org/wikipedia/ar/6/6b/5_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        date: "Jan 2023",
        count: 1,
        zoneName: "Jordan",
        fullName: "Hashemite Kingdom of Jordan",
        mapCode: "JO",
        continent: "Asia",
        valuePerUSD: 0.71
      },
      {
        id: 5,
        name: "Dinar",
        code: "JOD",
        mostRecentEdition: 5,
        fractionName: "Piastre",
        fraction: 100,
        order: 5,
        year: 2022,
        value: 1,
        type: "Banknote",
        fPhoto: "https://upload.wikimedia.org/wikipedia/ar/0/0f/1_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        bPhoto: "https://upload.wikimedia.org/wikipedia/ar/0/0f/1_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
        date: "Jan 2023",
        count: 1,
        zoneName: "Jordan",
        fullName: "Hashemite Kingdom of Jordan",
        mapCode: "JO",
        continent: "Asia",
        valuePerUSD: 0.71
      },
    ],
    update(newCurrencies) {
      this.value = newCurrencies;
    }
  })

  const filterData = () => getCurrencies(filters.value).then(res => currencies.update(res.data._rawValue.data.map(({attributes, id}) => ({id, ...attributes}))));

  filterData();
</script>
