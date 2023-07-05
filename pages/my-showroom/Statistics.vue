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

  const props = defineProps({
    currencies: {
      type: Array,
      default: [],
    },
  });

  const statsData = [
    {
      title: "Count of Banknotes",
      value: "554",
      value: props.currencies.filter(({type}) => type == "Banknote")?.length,
    },
    {
      title: "Count of Coins",
      value: "356",
      value: props.currencies.filter(({type}) => type == "Coin")?.length,
    },
    {
      title: "Count of Circuable Pieces",
      value: "455",
      value: props.currencies.filter(({mostRecentEdition, order}) => mostRecentEdition == order)?.length,
    },
    {
      title: "Count of Outdated Pieces",
      value: "455",
      value: props.currencies.filter(({mostRecentEdition, order}) => mostRecentEdition != order)?.length,
    },
    {
      title: "Count of African Pieces",
      value: "78", 
      value: props.currencies.filter(({continent}) => continent == "Africa")?.length,
    },
    {
      title: "Count of American Pieces",
      value: "60", 
      value: props.currencies.filter(({continent}) => continent == "America")?.length,
    },
    {
      title: "Count of Asian Pieces",
      value: "333", 
      value: props.currencies.filter(({continent}) => continent == "Asia")?.length,
    },
    {
      title: "Count of Europen Pieces",
      value: "56", 
      value: props.currencies.filter(({continent}) => continent == "Europe")?.length,
    },
    {
      title: "Count of Oceanian Pieces",
      value: "22", 
      value: props.currencies.filter(({continent}) => continent == "Oceania")?.length,
    },
  ];
</script>
