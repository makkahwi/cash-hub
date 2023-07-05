<template>
  <div>
    <HeaderSection />

    <HowToDoSection />
  </div>
</template>

<script setup>
import HeaderSection from "./Header";
import HowToDoSection from "./HowToDo";

definePageMeta({
  layout: "landing",
});
</script>
