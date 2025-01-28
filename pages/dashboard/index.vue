<template>
  <PageHeader title="Dashboard" />

  <div class="p-6 bg-white m-0">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <h4 class="text-center text-success my-4 mb-5">
            Coming Soon Summary Content
          </h4>
        </div>

        <div class="col-md-12">
          <h5 class="text-center my-4">Choose Your Action</h5>
        </div>

        <div v-for="{ path, name } in routes" :key="path" class="col-md-6">
          <NuxtLink :to="'/dashboard' + path" class="btn btn-success w-100">
            {{ name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "@/components/PageHeader";

const routes = [
  { name: "Add To Your Collection", path: "/add-to-collection" },
  { name: "Check Your Targeting List", path: "/targeting" },
];

definePageMeta({
  layout: "landing",
  middleware: "auth",
});
</script>

<style>
.container {
  max-width: 600px;
}
</style>
