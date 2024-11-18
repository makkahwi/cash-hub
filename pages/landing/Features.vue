<template>
  <div class="row justify-content-center">
    <div
      v-for="({ icon, title, desc }, index) of features"
      :key="index"
      class="col-lg-4 mb-4"
    >
      <FeatureCard
        class="h-100"
        :icon="icon"
        :title="title"
        :description="desc"
      />
    </div>
  </div>
</template>

<script setup>
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "ni ni-bullet-list-67",
    title: "Comprehensive Listings",
    desc: "Enlist detailed information about your currencies, including type, value, continent, zone, and more.",
  },
  {
    icon: "ni ni-glasses-2",
    title: "Interactive Showroom",
    desc: "Public visitors can browse your collection using advanced filtering options.",
  },
  {
    icon: "ni ni-support-16",
    title: "Secured Access",
    desc: "Admin-only access for data manipulation with Firebase authentication.",
  },
  {
    icon: "ni ni-bulb-61",
    title: "Open-Source",
    desc: "Totally transparency and ability for any web developer to contribute and enhance.",
  },
  {
    icon: "ni ni-settings",
    title: "Modern Tech Stack",
    desc: "Built with Vue.js 3 and Firebase for an optimized, scalable, and responsive web experience.",
  },
];
</script>
