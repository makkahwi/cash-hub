<template>
  <table class="table table-flush">
    <tbody>
      <tr>
        <td class="row">
          <div class="col-md-2">
            <img
              src="https://static.timesofisrael.com/www/uploads/2023/01/50dinars.jpg"
              class="w-100"
              :style="{ maxWidth: '200px' }"
            />
          </div>

          <div class="col-md-8 row">
            <div class="col-md-2">Continent</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">Asia</span>
            </div>

            <div class="col-md-2">Nation</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">Jordan</span>
            </div>

            <div class="col-md-2">Currency</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">JOD</span>
            </div>

            <div class="col-md-2">Type</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">Banknote</span>
            </div>

            <div class="col-md-2">Unit</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">Dinar</span>
            </div>

            <div class="col-md-2">Value</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">50</span>
            </div>

            <div class="col-md-2">Circability</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">Circuable</span>
            </div>

            <div class="col-md-2">Collection Date</div>
            <div class="col-md-2">
              <span class="font-weight-bolder">Feb 2023</span>
            </div>
          </div>

          <div class="col-md-2 align-middle text-center py-5">
            <NuxtLink
              class="btn btn-success d-flex justify-content-center align-items-center"
              :to="{
                path: '/my-showroom/piece-details',
                query: { id: 4 },
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
import PageSection from "@/components/PageSection";
</script>
