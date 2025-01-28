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
          status,
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
          :title="status + ' ' + name"
          :img="fPhoto"
          :label="code + ' ' + value + ' ' + type"
          :action="{
            color: status === 'Current' ? 'success' : 'danger',
            label: loggedIn && !noCollection ? 'View & Edit' : 'View Details',
            link: {
              path: '/piece-details',
              query: { id, noCollection },
            },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import CardView from "./CardView";

const loggedIn =
  process.client && JSON.parse(localStorage.getItem("user"))?.idToken;

defineProps({
  currencies: {
    type: Array,
    default: [],
  },
  noCollection: {
    type: Boolean,
    required: false,
  },
});
</script>
