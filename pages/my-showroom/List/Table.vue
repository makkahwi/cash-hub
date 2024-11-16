<template>
  <div class="table-responsive">
    <table class="table table-flush">
      <thead class="thead-light">
        <tr>
          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Photo
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Type
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Continent
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Nation / Area
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Value
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Currency Name
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Circability
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Collected @
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Details
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="align-middle"
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
              status,
              bPhoto,
              date,
              count,
              zoneName,
              fullName,
              mapCode,
              continent,
              usdToLocal,
            },
            i
          ) of currencies"
          :key="i"
        >
          <td class="text-sm font-weight-normal">
            <img
              :src="fPhoto || bPhoto"
              class="w-100"
              :style="{ maxWidth: '150px' }"
            />
          </td>
          <td class="text-sm font-weight-normal">{{ type }}</td>
          <td class="text-sm font-weight-normal">{{ continent }}</td>
          <td class="text-sm font-weight-normal">{{ zoneName }}</td>
          <td class="text-sm font-weight-normal">{{ value }}</td>
          <td class="text-sm font-weight-normal">{{ name }}</td>
          <td
            :class="`text-sm fw-bold text-${
              status === 'Circulable' ? 'success' : 'danger'
            }`"
          >
            {{ status }}
          </td>
          <td class="text-sm font-weight-normal">{{ date }}</td>
          <td class="text-sm font-weight-normal">
            <NuxtLink
              class="btn btn-success btn-sm"
              :to="{
                path: '/my-showroom/piece-details',
                query: { id },
              }"
            >
              View
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  currencies: {
    type: Array,
    default: [],
  },
});
</script>
