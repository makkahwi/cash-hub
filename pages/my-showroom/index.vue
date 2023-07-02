<template>
  <div>
    <HeaderSection />

    <FiltersSection />

    <StatisticsSection />

    <ListSection />
  </div>
</template>

<script setup>
import HeaderSection from "./Header.vue";
import FiltersSection from "./Filters.vue";
import StatisticsSection from "./Statistics.vue";
import ListSection from "./List.vue";

definePageMeta({
  layout: "landing",
});
</script>
