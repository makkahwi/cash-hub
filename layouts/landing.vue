<template>
  <NuxtLayout name="authentication">
    <template #navbar>
      <NavbarTransparent btn-background="bg-gradient-success" />
    </template>

    <main class="main-content position-relative max-height-vh-100 h-100">
      <slot />

      <AppFooter />
    </main>
  </NuxtLayout>
</template>

<script setup>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import setNavPills from "@/assets/js/nav-pills.js";

onMounted(() => {
  setNavPills();
});
</script>
