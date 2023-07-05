<template>
  <PageSection title="Statistics" subtitle="Overview of shown data" bg="light">
    <div class="row g-0 text-center">
      <div
        v-for="{
          title,
          value,
        } of statsData"
        class="col-lg-2 col-sm-6 p-2"
      >
        <DefaultCounterCard
          color="success"
          :count="value"
          :title="title"
          class="h-100"
        />
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import DefaultCounterCard from "~~/examples/cards/DefaultCounterCard";

const statsData = [
  {
    title: "Count of Banknotes",
    value: "554",
  },
  {
    title: "Count of Coins",
    value: "356",
  },
  {
    title: "Count of Circuable Pieces",
    value: "455",
  },
  {
    title: "Count of Outdated Pieces",
    value: "455",
  },
  {
    title: "Count of African Sets",
    value: "21",
  },
  {
    title: "Count of American Sets",
    value: "26",
  },
  {
    title: "Count of Asian Sets",
    value: "99", 
  },
  {
    title: "Count of Europen Sets",
    value: "24", 
  },
  {
    title: "Count of Oceanian Sets",
    value: "7", 
  },
  {
    title: "Count of African Pieces",
    value: "78", 
  },
  {
    title: "Count of American Pieces",
    value: "60", 
  },
  {
    title: "Count of Asian Pieces",
    value: "333", 
  },
  {
    title: "Count of Europen Pieces",
    value: "56", 
  },
  {
    title: "Count of Oceanian Pieces",
    value: "22", 
  },
];
</script>
