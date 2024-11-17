<template>
  <NuxtLayout name="authentication">
    <template #navbar>
      <Navbar btn-background="bg-success" />
    </template>

    <main class="main-content position-relative max-height-vh-100 h-100 w-100">
      <slot />

      <Footer />
    </main>
  </NuxtLayout>
</template>

<script setup>
import Navbar from "./Navbar";
import Footer from "./Footer";
import setNavPills from "@/assets/js/nav-pills.js";

onMounted(() => {
  setNavPills();
});
</script>
