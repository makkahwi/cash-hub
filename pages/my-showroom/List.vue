<template>
  <PageSection title="List" subtitle="List of detailed currency pieces">
    <div class="card p-4">
      <div class="mb-4 text-start">
        <label> View Type </label>

        <select
          class="form-control"
          :style="{ width: '300px' }"
          name="view-type"
        >
          <option value="table" selected>Table</option>
          <option value="list">List</option>
          <option value="grid">Grid</option>
        </select>
      </div>

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

      <div class="p-2 py-4">
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
      </div>

      <div class="p-2 py-4 row">
        <div class="col-md-3 my-3 card py-4 border border-2">
          <DefaultProjectCard
            title="Jordan Dinar"
            img="https://static.timesofisrael.com/www/uploads/2023/01/50dinars.jpg"
            label="JOD 50 Banknote"
            :action="{
              color: 'success',
              label: 'View Details',
              link: {
                path: '/my-showroom/piece-details',
                query: { id: 4 },
              },
            }"
            description="Feb 2023"
          />
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "../../components/PageSection";
import DefaultProjectCard from "@/pagesComponents/pages/profile/DefaultProjectCard";
</script>
