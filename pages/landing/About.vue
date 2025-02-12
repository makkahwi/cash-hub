<template>
  <PageSection sectionId="about" :title="`About ${productName.short}`">
    <div class="container text-center">
      <p class="lead">
        A web app open-source project designed for currency collectors to build
        and showcase their collections online.
      </p>

      <p>
        Are you a currency collector looking to create an online catalog for
        your collection? This app is the perfect solution!
      </p>

      <p>
        This web app enables collectors to publish their collections of
        currencies from around the world. Collectors can clone, customize, and
        deploy their own versions of the app, while the public can browse their
        showrooms anywhere and anytime.
      </p>
    </div>

    <FeaturesSection />
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import FeaturesSection from "./Features";
import { productName } from "@/utils/consts";
</script>
