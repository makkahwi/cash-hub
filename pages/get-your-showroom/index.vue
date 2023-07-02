<template>
  <div>
    <HeaderSection />

    <HowToDoSection />
  </div>
</template>

<script setup>
import HeaderSection from "./Header.vue";
import HowToDoSection from "./HowToDo";

definePageMeta({
  layout: "landing",
});
</script>
