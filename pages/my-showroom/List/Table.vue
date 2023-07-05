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
            Continent
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Nation
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Currency
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Type
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Unit
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Value
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Circability
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Collection Date
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Details
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="align-middle">
          <td class="text-sm font-weight-normal">
            <img
              src="https://static.timesofisrael.com/www/uploads/2023/01/50dinars.jpg"
              class="w-100"
              :style="{ maxWidth: '150px' }"
            />
          </td>
          <td class="text-sm font-weight-normal">Asia</td>
          <td class="text-sm font-weight-normal">Jordan</td>
          <td class="text-sm font-weight-normal">JOD</td>
          <td class="text-sm font-weight-normal">Banknote</td>
          <td class="text-sm font-weight-normal">Dinar</td>
          <td class="text-sm font-weight-normal">50</td>
          <td class="text-sm font-weight-normal">Circuable</td>
          <td class="text-sm font-weight-normal">Feb 2023</td>
          <td class="text-sm font-weight-normal">
            <NuxtLink
              class="text-decoration-underline"
              :to="{
                path: '/my-showroom/piece-details',
                query: { id: 4 },
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
</script>
