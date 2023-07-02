<template>
  <main class="main-content position-relative max-height-vh-100 h-100">
    <NavbarTransparent />

    <HeaderSection />

    <AboutSection />

    <FeaturesSection />

    <FutureWorkSection />

    <GetYoursSection />

    <AppFooter />
  </main>
</template>

<script setup>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import HeaderSection from "./Header.vue";
import AboutSection from "./About.vue";
import FeaturesSection from "./Features.vue";
import FutureWorkSection from "./FutureWork.vue";
import GetYoursSection from "./GetYours.vue";

definePageMeta({
  layout: false,
});
onMounted(() => {
  setNavPills();
});
</script>
