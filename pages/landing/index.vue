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
import HeaderSection from "./Header.vue";
import AboutSection from "./About.vue";
import FeaturesSection from "./Features.vue";
import FutureWorkSection from "./FutureWork.vue";
import GetYoursSection from "./GetYours.vue";

definePageMeta({
  layout: "landing",
});
</script>
