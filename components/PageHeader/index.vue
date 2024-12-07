<template>
  <div
    class="page-header position-relative"
    :style="{
      backgroundImage: 'url(' + headerImg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    }"
  >
    <span class="mask bg-gradient-dark opacity-7" />

    <div class="z-index-2 w-100">
      <PageSection
        :title="title"
        :subtitle="subtitle"
        color="white"
        :header="true"
      >
        <slot />
      </PageSection>
    </div>
  </div>
</template>

<script setup>
import headerImg from "@/assets/img/currencies.jpg";
import PageSection from "@/components/PageSection";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});
</script>
