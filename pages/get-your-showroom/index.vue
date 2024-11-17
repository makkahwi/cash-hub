<template>
  <div>
    <PageHeader title="Get Your Showroom" />

    <HowToDoSection />
  </div>
</template>

<script setup>
import HowToDoSection from "./HowToDo";
import PageHeader from "@/components/PageHeader";
import { productName } from "@/consts.js";

definePageMeta({
  layout: "landing",
});
</script>
