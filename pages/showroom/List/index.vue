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
        v-if="type.value == 'table'"
        :currencies="currencies"
        :notShowroom="notShowroom"
      />

      <ListView
        v-if="type.value == 'list'"
        :currencies="currencies"
        :notShowroom="notShowroom"
      />

      <GridView
        v-if="type.value == 'grid'"
        :currencies="currencies"
        :notShowroom="notShowroom"
      />
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import GridView from "./Grid";
import ListView from "./List";
import TableView from "./Table";
import { reactive } from "vue";

const type = reactive({
  value: "table",
  update(newView) {
    this.value = newView;
  },
});

defineProps({
  currencies: {
    type: Array,
    default: [],
  },
  notShowroom: {
    type: Boolean,
    required: false,
  },
});
</script>
