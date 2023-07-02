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
        <h4 class="text-white my-4">Get Your Showroom</h4>

        <p class="text-white">
          If you are interested to have your own CCS, follow the steps below to
          get it. Don't worry, even if you are not a developer, you could still
          build your own copy.
        </p>
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
