<template>
  <div :class="`w-100 m-${m} p-${p} text-center bg-${color} overflow-hidden`" :id="sectionId">
    <h3 class="mb-6">{{title}}</h3>
    
    <h6 class="opacity-5">{{subtitle}}</h6>

    <slot />
  </div>
</template>

<script>
export default {
  name: "PageSection",
  props: {
    sectionId: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "transparent",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    m: {
      type: String,
      default: "0",
    },
    p: {
      type: String,
      default: "7",
    },
  },
};
</script>
