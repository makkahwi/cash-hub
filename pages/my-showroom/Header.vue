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

    <div class="container py-7 pt-8 postion-relative z-index-2">
      <div class="mx-auto text-center my-4">
        <h4 class="text-white my-4">My Showroom</h4>

        <p class="text-white">Here is my collecion of currencies</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import headerImg from "@/assets/img/currencies.jpg";

definePageMeta({
  layout: false,
});
</script>
