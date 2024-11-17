<template>
  <PageSection sectionId="about" :title="`About ${productName.short}`">
    <div class="container text-center">
      <p class="lead">
        A web app for collectors to publish their collection of currencies to
        the world.
      </p>

      <p>
        Clone this app and use it to showcase your currencies so the public can
        browse your showroom anytime, anywhere.
      </p>
    </div>

    <FeaturesSection />
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import FeaturesSection from "./Features";
import { productName } from "@/consts.js";
</script>
