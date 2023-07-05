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
import HeaderSection from "./landing/Header";
import AboutSection from "./landing/About";
import FeaturesSection from "./landing/Features";
import FutureWorkSection from "./landing/FutureWork";
import GetYoursSection from "./landing/GetYours";

definePageMeta({
  layout: "landing",
});
</script>
