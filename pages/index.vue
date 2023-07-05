<template>
  <div>
    <HeaderSection />

    <AboutSection />

    <FeaturesSection />

    <FutureWorkSection />

    <GetYoursSection />
  </div>
</template>

<script setup>
import HeaderSection from "./landing/Header.vue";
import AboutSection from "./landing/About.vue";
import FeaturesSection from "./landing/Features.vue";
import FutureWorkSection from "./landing/FutureWork.vue";
import GetYoursSection from "./landing/GetYours.vue";

definePageMeta({
  layout: "landing",
});
</script>
