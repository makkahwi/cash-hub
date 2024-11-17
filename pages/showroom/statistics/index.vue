<template>
  <PageSection title="Statistics" subtitle="Overview of Shown Data" bg="light">
    <div class="d-flex justify-content-center mb-3">
      <button
        class="btn mx-2"
        :class="showByType ? 'btn-success' : 'btn-outline-success'"
        @click="toggleStatistics('showByType')"
      >
        By Type
      </button>
      <button
        class="btn mx-2"
        :class="showByStatus ? 'btn-success' : 'btn-outline-success'"
        @click="toggleStatistics('showByStatus')"
      >
        By Status
      </button>
    </div>

    <table class="table w-100 table-bordered border-success">
      <ByType v-if="showByType" :currencies="props.currencies" />

      <tbody v-if="showByType">
        <tr>
          <td colspan="7"></td>
        </tr>
      </tbody>

      <ByStatus v-if="showByStatus" :currencies="props.currencies" />

      <tbody v-if="showByStatus">
        <tr>
          <td colspan="7"></td>
        </tr>
      </tbody>

      <ByContinent :currencies="props.currencies" />
    </table>
  </PageSection>
</template>

<script setup>
import { ref } from "vue";
import PageSection from "@/components/PageSection";
import ByType from "./ByType";
import ByStatus from "./ByStatus";
import ByContinent from "./ByContinent";

const props = defineProps({
  currencies: {
    type: Array,
    default: [],
  },
});

const showByType = ref(false);
const showByStatus = ref(false);

const toggleStatistics = (section) => {
  if (section === "showByType") showByType.value = !showByType.value;
  if (section === "showByStatus") showByStatus.value = !showByStatus.value;
};
</script>
