<template>
  <main class="main-content position-relative max-height-vh-100 h-100">
    <NavbarTransparent />

    <div
      class="page-header position-relative"
      :style="{
        backgroundImage: 'url(' + headerImg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }"
    >
      <span class="mask bg-gradient-dark opacity-7" />

      <div class="container py-7 pt-8 postion-relative z-index-2">
        <div class="mx-auto text-center my-4">
          <h4 class="text-white my-4">My Showroom</h4>

          <p class="text-white">Here is my collecion of currencies</p>
        </div>
      </div>
    </div>

    <div class="container my-6">
      <div class="mt-8 row">
        <div class="mx-auto col-md-12 text-center">
          <h5>Filters</h5>
        </div>

        <div class="mx-auto my-3 mb-5 col-md-11 text-center">
          <p>Filter what you wanna see of the collection</p>
        </div>

        <div class="mx-auto col-md-3 multisteps-form__content">
          <h6 class="my-3">Per Type</h6>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="type"
              value="Banknotes"
            />

            <label class="custom-control-label"> Banknotes </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="type"
              value="Coins"
            />

            <label class="custom-control-label"> Coins </label>
          </div>

          <h6 class="my-3">Per Status</h6>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="status"
              value="Circuable"
            />

            <label class="custom-control-label"> Circuable </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="status"
              value="Outdated"
            />

            <label class="custom-control-label"> Outdated </label>
          </div>
        </div>

        <div class="mx-auto col-md-3 multisteps-form__content">
          <h6 class="my-3">Per Continent</h6>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Africa"
            />

            <label class="custom-control-label"> Africa </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Americas"
            />

            <label class="custom-control-label"> Americas </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Asia"
            />

            <label class="custom-control-label"> Asia </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Europe"
            />

            <label class="custom-control-label"> Europe </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Oceania"
            />

            <label class="custom-control-label"> Oceania </label>
          </div>
        </div>

        <div class="mx-auto col-md-3 multisteps-form__content">
          <h6 class="my-3">Per Issuing Date</h6>

          <div class="mb-3">
            <label>Start Date</label>
            <input
              class="multisteps-form__input form-control"
              type="date"
              name="startDate"
            />
          </div>

          <div>
            <label>End Date</label>
            <input
              class="multisteps-form__input form-control"
              type="date"
              name="endDate"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container my-6">
      <div class="mt-8 row">
        <div class="mx-auto col-md-12 text-center">
          <h5>Statistics</h5>
        </div>

        <div class="mx-auto my-3 mb-5 col-md-10 text-center">
          <p>Overview of shown data</p>
        </div>

        <div class="mx-auto my-3 mb-5 col-md-12 text-center row">
          <div
            v-for="{
              title,
              value,
              icon: { component, background, shape },
            } of statsData"
            class="col-lg-2 col-sm-6 p-2"
          >
            <DefaultCounterCard
              color="success"
              :count="value"
              :title="title"
              class="h-100"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container my-6">
      <div class="mx-auto text-center">
        <h5>List</h5>
      </div>

      <div class="mx-auto my-3 mb-5 text-center">
        <p>List of detailed currency pieces</p>
      </div>

      <div class="card p-4">
        <div class="mb-4">
          <label class="custom-control-label"> View Type </label>

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
    </div>

    <AppFooter />
  </main>
</template>

<script setup>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import headerImg from "@/assets/img/currencies.jpg";
import DefaultCounterCard from "~~/examples/cards/DefaultCounterCard.vue";
import DefaultProjectCard from "@/pagesComponents/pages/profile/DefaultProjectCard.vue";

definePageMeta({
  layout: false,
});

const statsData = [
  {
    title: "Count of Banknotes",
    value: "554",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Coins",
    value: "356",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Circuable Pieces",
    value: "455",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Outdated Pieces",
    value: "455",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of African Sets",
    value: "21",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of American Sets",
    value: "26",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Asian Sets",
    value: "99",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Europen Sets",
    value: "24",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Oceanian Sets",
    value: "7",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of African Pieces",
    value: "78",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of American Pieces",
    value: "60",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Asian Pieces",
    value: "333",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Europen Pieces",
    value: "56",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Count of Oceanian Pieces",
    value: "22",
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
];

onMounted(() => {
  setNavPills();
});
</script>
