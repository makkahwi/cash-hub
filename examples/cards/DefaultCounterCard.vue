<template>
  <div class="card">
    <div class="text-center card-body">
      <h5 class="text-gradient font-weight-bolder" :class="`text-${color}`">
        <CountTo :start-val="0" :end-val="count" :duration="duration" />
      </h5>

      <p class="mb-0 font-weight-bolder">{{ title }}</p>
    </div>
  </div>
</template>

<script setup>
import CountTo from "vue-count-to/src";

defineProps({
  count: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 4000,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    required: true,
    validator(value) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
      ].includes(value);
    },
  },
});
</script>
