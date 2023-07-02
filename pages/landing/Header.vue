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

    <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
      <div class="row">
        <div class="mx-auto text-left col-md-6 my-4">
          <h2 class="text-white my-4">Currencies Collection Showroom (CCS)</h2>

          <h4 class="text-white my-4 mb-5">
            Are you a currency collector n wanna build an online catalog for
            your collections? This is it
          </h4>

          <NuxtLink to="#about" class="btn btn-success btn-xs mb-0 p-3">
            Find Out More
          </NuxtLink>

          <NuxtLink
            to="/my-showroom"
            class="btn btn-success btn-xs mb-0 mx-3 p-3"
          >
            Browse My Showroom
          </NuxtLink>

          <NuxtLink
            to="/get-your-showroom"
            class="btn btn-white btn-xs mb-0 p-3"
          >
            Build Your Showroom
          </NuxtLink>
        </div>

        <div class="mx-auto text-center col-md-6 my-4">
          <img
            src="@/assets/img/header.png"
            class="navbar-brand-img mb-2 w-100"
            alt="main_logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import headerImg from "@/assets/img/currencies.jpg";
</script>
