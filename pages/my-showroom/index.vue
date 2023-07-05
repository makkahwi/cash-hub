<template>
  <div>
    <HeaderSection />

    <FiltersSection />

    <StatisticsSection />

    <ListSection />
  </div>
</template>

<script setup>
import HeaderSection from "./Header";
import FiltersSection from "./Filters";
import StatisticsSection from "./Statistics";
import ListSection from "./List";

definePageMeta({
  layout: "landing",
});
</script>
