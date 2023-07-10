<template>
  <PageSection sectionId="about" :title="`About ${productName.short}`">
    <h4 class="text-dark">
      A web app for collectors to publish their collection of currencies to
      all the world
    </h4>

    <p class="text-dark mb-7">
      Collectors could clone this project & use it to enlist their currencies
      so the public could browse their showrooms right away.
    </p>

    <FeaturesSection/>
  </PageSection>
</template>

<script setup>
  import PageSection from "@/components/PageSection";
  import FeaturesSection from "./Features";
  import {productName} from "@/consts.js"
</script>