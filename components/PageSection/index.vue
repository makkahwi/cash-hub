<template>
  <div
    :class="`w-100 m-${m} ${header ? `p-${p} pt-9` : `p-4 p-md-${p}`} text-center bg-${bg} overflow-hidden`"
    :id="sectionId"
  >
    <div class="mb-6" v-if="title || subtitle">
      <h3 :class="`text-${color} mb-4`">{{ title }}</h3>

      <h5 :class="`text-${color} opacity-8`">{{ subtitle }}</h5>
    </div>

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
      default: "dark",
    },
    bg: {
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
    header: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
