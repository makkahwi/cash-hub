<template>
  <div>
    <PageHeader
      title="Get Your Showroom"
      :subtitle="`If you are interested to have your own ${productName.short}, follow the steps below to get it. Don't worry, even if you are not a developer, you could still build your own copy.`"
    />

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
