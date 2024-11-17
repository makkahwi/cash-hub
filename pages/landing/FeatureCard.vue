<template>
  <div class="card">
    <div class="p-3 card-body">
      <div class="d-flex">
        <div
          v-if="icon"
          class="p-2 avatar avatar-xl bg-success border-radius-md me-3"
        >
          <i :class="icon" />
        </div>

        <div class="my-auto text-start">
          <h6>{{ title }}</h6>
        </div>
      </div>

      <p class="mt-3 text-sm text-justify">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

const showMenu = ref(false);
</script>
