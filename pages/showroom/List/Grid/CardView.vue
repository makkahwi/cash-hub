<template>
  <div class="card card-blog card-plain">
    <div class="card-header p-1">
      <img :src="img" alt="img-blur-shadow" class="shadow-lg img-fluid" />
    </div>

    <div class="px-1 pb-0 card-body">
      <p class="mb-2 text-sm text-success text-success">{{ label }}</p>

      <h5 class="mb-4">{{ title }}</h5>

      <div class="d-flex align-items-center justify-content-center">
        <NuxtLink
          type="button"
          class="mb-0 btn btn-sm"
          :to="action.link"
          :class="`btn-${action.color}`"
        >
          {{ action.label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Default Project Card",
  },
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => {},
  },
  authors: {
    type: Array,
    image: String,
    name: String,
    default: () => [],
  },
});
</script>
