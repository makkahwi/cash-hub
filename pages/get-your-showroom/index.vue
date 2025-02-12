<template>
  <div>
    <PageHeader title="Get Your Showroom" />

    <HowToDoSection />
  </div>
</template>

<script setup>
import HowToDoSection from "./HowToDo";
import PageHeader from "@/components/PageHeader";
import { productName } from "@/utils/consts";

definePageMeta({
  layout: "landing",
});
</script>
