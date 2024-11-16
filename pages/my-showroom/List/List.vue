<template>
  <table class="table table-flush">
    <tbody>
      <tr
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
            status,
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
        <td class="row">
          <div class="col-md-2">
            <img :src="fPhoto" class="w-100" :style="{ maxWidth: '200px' }" />
          </div>

          <div class="col-md-8 row text-start">
            <div class="col-md-2">Continent</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">{{ continent }}</span>
            </div>

            <div class="col-md-2">Nation</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">{{ zoneName }}</span>
            </div>

            <div class="col-md-2">Currency</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">{{ code }}</span>
            </div>

            <div class="col-md-2">Type</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">{{ type }}</span>
            </div>

            <div class="col-md-2">Unit</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">{{ name }}</span>
            </div>

            <div class="col-md-2">Value</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">{{ value }}</span>
            </div>

            <div class="col-md-2">Circability</div>
            <div class="col-md-2">
              <span
                :class="`font-weight-bolder fw-bold text-${
                  status === 'Circulable' ? 'success' : 'danger'
                }`"
                >{{ status }}</span
              >
            </div>

            <div class="col-md-2">Collected @</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">{{ date }}</span>
            </div>
          </div>

          <div class="col-md-2 align-middle text-center py-5">
            <NuxtLink
              class="btn btn-success d-flex justify-content-center align-items-center"
              :to="{
                path: '/my-showroom/piece-details',
                query: { id },
              }"
            >
              View Details
            </NuxtLink>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  currencies: {
    type: Array,
    default: [],
  },
});
</script>
