<template>
  <main class="main-content position-relative max-height-vh-100 h-100">
    <NavbarTransparent />

    <HeaderSection />

    <FiltersSection />

    <StatisticsSection />

    <ListSection />

    <AppFooter />
  </main>
</template>

<script setup>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import HeaderSection from "./Header.vue";
import FiltersSection from "./Filters.vue";
import StatisticsSection from "./Statistics.vue";
import ListSection from "./List.vue";
import setNavPills from "@/assets/js/nav-pills.js";

definePageMeta({
  layout: false,
});

onMounted(() => {
  setNavPills();
});
</script>
