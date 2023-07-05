<template>
  <PageHeader>
    <div class="row text-start">
      <div class="mx-auto text-left col-md-6 my-4">
        <h2 class="text-white my-4">Currencies Collection Showroom (CCS)</h2>

        <h4 class="text-white my-4 mb-5">
          Are you a currency collector n wanna build an online catalog for
          your collections? This is it
        </h4>

        <NuxtLink v-for="({to, title }, i) of buttons" :to="to" :key="i" class="btn btn-success btn-xs mb-0 mx-1 p-3">
          {{title}}
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
  </PageHeader>
</template>

<script setup>
import PageHeader from "@/components/PageHeader";

const buttons = [
  {to: "#about", title: "Find Out More"},
  {to: "/my-showroom", title: "Browse My Showroom"},
  {to: "/get-your-showroom", title: "Build Your Showroom"},
]
</script>
