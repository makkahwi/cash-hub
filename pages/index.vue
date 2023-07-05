<template>
  <div>
    <HeaderSection />

    <AboutSection />

    <FutureWorkSection />

    <GetYoursSection />
  </div>
</template>

<script setup>
import HeaderSection from "./landing/Header";
import AboutSection from "./landing/About";
import FutureWorkSection from "./landing/FutureWork";
import GetYoursSection from "./landing/GetYours";

definePageMeta({
  layout: "landing",
});
</script>
