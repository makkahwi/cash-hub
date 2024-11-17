<template>
  <PageHeader class="text-white py-5">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-md-12 mb-4 d-flex justify-content-center align-items-end"
        >
          <img src="@/assets/img/brand/logo-white.png" width="120vw" />

          <h1 class="display-5 text-white fw-bold">
            {{ productName.full }}
          </h1>
        </div>

        <div class="col-md-6 mb-4">
          <p class="lead mb-4">
            Are you a currency collector and want to build an online catalog for
            your collections? This is the perfect solution!
          </p>

          <div>
            <NuxtLink
              v-for="({ to, title }, i) of buttons"
              :to="to"
              :key="i"
              class="btn btn-light btn-lg me-2 my-1"
              ><span class="text-dark"> {{ title }}</span>
            </NuxtLink>
          </div>
        </div>

        <div class="col-md-6 text-center">
          <img
            src="@/assets/img/header.png"
            class="img-fluid"
            alt="Currencies Showroom"
          />
        </div>
      </div>
    </div>
  </PageHeader>
</template>

<script setup>
import PageHeader from "@/components/PageHeader";
import { productName } from "@/consts.js";
import { links } from "@/consts.js";

const buttons = [{ to: "#about", title: "Find Out More" }];

links
  .filter(({ to }) => to !== "/" && to !== "")
  .forEach((element) => {
    buttons.push(element);
  });
</script>
