<template>
  <div class="container my-6">
    <div class="mt-8 row">
      <div class="mx-auto col-md-12 text-center">
        <h5>Statistics</h5>
      </div>

      <div class="mx-auto my-3 mb-5 col-md-10 text-center">
        <p>Overview of shown data</p>
      </div>

      <div class="mx-auto my-3 mb-5 col-md-12 text-center row">
        <div
          v-for="{
            title,
            value,
            icon: { component, background, shape },
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
    </div>
  </div>
</template>

<script setup>
import DefaultCounterCard from "~~/examples/cards/DefaultCounterCard";

definePageMeta({
  layout: false,
});

const statsData = [
  {
    title: "Count of Banknotes",
    value: "554",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Coins",
    value: "356",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Circuable Pieces",
    value: "455",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Outdated Pieces",
    value: "455",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of African Sets",
    value: "21",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of American Sets",
    value: "26",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Asian Sets",
    value: "99",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Europen Sets",
    value: "24",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Oceanian Sets",
    value: "7",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of African Pieces",
    value: "78",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of American Pieces",
    value: "60",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Asian Pieces",
    value: "333",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Europen Pieces",
    value: "56",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Oceanian Pieces",
    value: "22",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
];
</script>
