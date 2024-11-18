<template>
  <PageSection bg="light" color="success" title="Coming Soon Features">
    <div class="row justify-content-center">
      <div
        v-for="({ title, desc }, i) of features"
        :key="i"
        class="col-lg-4 mb-4"
      >
        <FeatureCard
          class="h-100"
          icon="ni ni-bulb-61"
          :title="title"
          :description="desc"
        />
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Enhanced Admin Dashboard",
    desc: "A feature-rich panel for currency management, detailed reports, and advanced data analysis.",
  },
  {
    title: "Advanced Statistics",
    desc: "A dedicated dashboard showcasing charts, maps, and key statistics like total counts, collection value, and rare pieces.",
  },
  {
    title: "Market Insights",
    desc: "Automated total value estimation for your collection based on circulable values.",
  },
  {
    title: "Social Media Integration",
    desc: "Share your showroom or latest additions on popular platforms.",
  },
  {
    title: "Centralized Currencies Database",
    desc: "A database for you to identify which currencies are out there to collect. With community-contributed updates.",
  },
  {
    title: "Automatic Photo Integration",
    desc: "Automatically find and attach appropriate images for each currency piece.",
  },
  {
    title: "Expansion to Other Collections",
    desc: "Extend the app to support other types of collections, such as stamps or photos.",
  },
  {
    title: "Advanced Features",
    desc: "Like Generating a PDF catalog of your collection. Collection progress tracking with timelines. Localization for administrators and browsers.",
  },
  {
    title: "Centralized Services",
    desc: "Instead of deploying your own app, We are to support for user registrations and subscriptions, personalize showroom URLs and SaaS platform for collectors with community-driven updates and premium features.",
  },
];
</script>
