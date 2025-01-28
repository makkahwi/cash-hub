<template>
  <PageSection
    title="Wish List"
    subtitle="Check The Currencies You Wanna Collect"
  >
    <GridView
      v-if="currencies.length"
      :currencies="currencies"
      :noCollection="true"
    />

    <h5 v-else>Nothing Selected yet</h5>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import GridView from "@/pages/showroom/List/Grid";

defineProps({
  currencies: {
    type: Array,
    default: [],
  },
});

definePageMeta({
  layout: "landing",
  middleware: "auth",
});
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
}
</style>
