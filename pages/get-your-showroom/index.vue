<template>
  <main class="main-content position-relative max-height-vh-100 h-100">
    <NavbarTransparent />

    <HeaderSection />

    <HowToDoSection />

    <AppFooter />
  </main>
</template>

<script setup>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import HeaderSection from "./Header.vue";
import HowToDoSection from "./HowToDo";

definePageMeta({
  layout: false,
});
onMounted(() => {
  setNavPills();
});
</script>
