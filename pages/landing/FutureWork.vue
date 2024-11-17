<template>
  <PageSection bg="light" color="success" title="Coming Soon Features">
    <div class="container">
      <div class="row">
        <div
          v-for="({ title, desc }, i) of features"
          :key="i"
          class="mb-4 col-lg-4 mb-lg-0"
        >
          <FeatureCard class="h-100" :title="title" :description="desc" />
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Automation",
    desc: "Automate image attachment for your currencies using AI",
  },
  {
    title: "Expansion",
    desc: "Expand to other types of collections like stamps, antiques, and galleries",
  },
  {
    title: "Profitability",
    desc: "Make it a SaaS product for collectors to use worldwide",
  },
];
</script>
