<template>
  <div class="p-2 py-4 row">
    <div
      v-for="(
        {
          id,
          name,
          code,
          mostRecentEdition,
          fractionName,
          fraction,
          edition,
          year,
          value,
          type,
          fPhoto,
          bPhoto,
          date,
          count,
          zoneName,
          fullName,
          mapCode,
          continent,
          current,
          usdToLocalNow,
          usdToLocalAtIssueTime,
          usdToLocalAtCollectionTime,
        },
        i
      ) of currencies"
      :key="i"
      class="col-md-3"
    >
      <div class="card border px-2 py-4 border-2 mx-1 my-2">
        <CardView
          :title="renderStatusLabel(current) + ' ' + name"
          :img="fPhoto"
          :label="code + ' ' + value + ' ' + type"
          :action="{
            color: current ? 'success' : 'danger',
            label: loggedIn && !notShowroom ? 'View & Edit' : 'View Details',
            link: {
              path: '/piece-details',
              query: { id, notShowroom },
            },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardView from "./CardView";
import { renderStatusLabel } from "@/utils/functions";

const loggedIn =
  process.client && JSON.parse(localStorage.getItem("user"))?.idToken;

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
