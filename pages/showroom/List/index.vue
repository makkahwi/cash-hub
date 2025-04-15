<template>
  <PageSection title="List" subtitle="List of detailed currency pieces">
    <div class="card p-4">
      <div class="mb-4 text-start">
        <label> View Type </label>

        <select
          class="form-control"
          :style="{ width: '300px' }"
          name="view-type"
          :value="type.value"
          @change="(e) => type.update(e.target.value)"
        >
          <option value="table" selected>Table</option>
          <option value="list">List</option>
          <option value="grid">Grid</option>
        </select>
      </div>

      <TableView
        v-if="type.value === 'table'"
        :currencies="visibleCurrencies"
        :notShowroom="notShowroom"
      />

      <ListView
        v-if="type.value === 'list'"
        :currencies="visibleCurrencies"
        :notShowroom="notShowroom"
      />

      <GridView
        v-if="type.value === 'grid'"
        :currencies="visibleCurrencies"
        :notShowroom="notShowroom"
      />

      <div class="text-center mt-4" v-if="currencies.length > visibleCurrencies.length">
        <button class="btn btn-outline-primary" @click="showMore">
          Show More
        </button>
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import GridView from "./Grid";
import ListView from "./List";
import TableView from "./Table";
import { reactive, ref, computed } from "vue";

// View Type Handling
const type = reactive({
  value: "table",
  update(newView) {
    this.value = newView;
  },
});

// Props
const props = defineProps({
  currencies: {
    type: Array,
    default: () => [],
  },
  notShowroom: {
    type: Boolean,
    required: false,
  },
});

// Show Count Logic
const showCount = ref(20); // start with 20

const visibleCurrencies = computed(() => {
  return props.currencies.slice(0, showCount.value);
});

const showMore = () => {
  showCount.value += 20;
};
</script>
