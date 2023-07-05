<template>
  <div>
    <PageHeader title="My Showroom" subtitle="Here is my collecion of currencies" />

    <FiltersSection />

    <StatisticsSection />

    <ListSection />
  </div>
</template>

<script setup>
import PageHeader from "@/components/PageHeader";
import FiltersSection from "./Filters";
import StatisticsSection from "./Statistics";
import ListSection from "./List";

definePageMeta({
  layout: "landing",
});
</script>
