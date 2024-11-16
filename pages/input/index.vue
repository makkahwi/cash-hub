<template>
  <div>
    <PageHeader
      title="Create New Currency Record"
      subtitle="Fulfill inputs below please"
    />

    <div class="p-6 bg-white card border-radius-xl">
      <h5 class="font-weight-bolder">New Currency Information</h5>

      <form @submit.prevent="handleSubmit">
        <div class="mt-3 row">
          <div class="col-12 col-sm-6 col-md-3">
            <label>Name</label>
            <input
              v-model="formData.name"
              class="form-control"
              type="text"
              placeholder="eg. Dinar"
              required
            />
          </div>

          <div class="mt-3 col-12 col-sm-6 col-md-3 mt-sm-0">
            <label>Code</label>
            <input
              v-model="formData.code"
              class="form-control"
              type="text"
              placeholder="eg. JOD"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Most Recent Edition</label>
            <input
              v-model="formData.mostRecentEdition"
              class="form-control"
              type="number"
              placeholder="eg. 5"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Fraction Name</label>
            <input
              v-model="formData.fractionName"
              class="form-control"
              type="text"
              placeholder="eg. Piastre"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Fraction Size</label>
            <input
              v-model="formData.fraction"
              class="form-control"
              type="number"
              placeholder="eg. 100"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Edition Number</label>
            <input
              v-model="formData.edition"
              class="form-control"
              type="number"
              placeholder="eg. 5"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Year</label>
            <input
              v-model="formData.year"
              class="form-control"
              type="number"
              placeholder="eg. 2022"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Value</label>
            <input
              v-model="formData.value"
              class="form-control"
              type="number"
              placeholder="eg. 20"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Type</label>
            <select v-model="formData.type" class="form-control" required>
              <option value="" disabled>Select Type</option>
              <option value="Banknote">Banknote</option>
              <option value="Coin">Coin</option>
            </select>
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Zone Name</label>
            <select v-model="formData.zoneName" class="form-control" required>
              <option value="" disabled>Select Zone</option>
              <option
                v-for="zone in currencyZones"
                :key="zone.mapCode"
                :value="zone.name"
              >
                {{ zone.name }}
              </option>
            </select>
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Map Code</label>
            <input
              v-model="formData.mapCode"
              class="form-control"
              type="text"
              placeholder="eg. JO"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Continent</label>
            <select v-model="formData.continent" class="form-control" required>
              <option value="" disabled>Select Continent</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Australia">Australia</option>
              <option value="Antarctica">Antarctica</option>
            </select>
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Value Per USD</label>
            <input
              v-model="formData.valuePerUSD"
              class="form-control"
              type="number"
              step="0.01"
              placeholder="eg. 0.71"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Acquire Date</label>
            <input
              v-model="formData.date"
              class="form-control"
              type="date"
              placeholder="eg. Jan 2023"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Front Photo URL</label>
            <input
              v-model="formData.fPhoto"
              class="form-control"
              type="url"
              placeholder="Front photo URL"
              required
            />
          </div>

          <div class="col-sm-6 col-md-3">
            <label>Back Photo URL</label>
            <input
              v-model="formData.bPhoto"
              class="form-control"
              type="url"
              placeholder="Back photo URL"
              required
            />
          </div>
        </div>

        <div class="mt-4 button-row d-flex col-12">
          <ArgonButton
            type="submit"
            color="dark"
            variant="gradient"
            class="mb-0 ms-auto"
          >
            Submit
          </ArgonButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import PageHeader from "@/components/PageHeader";
import { addCurrency } from "~~/api/showroom";
import { currencyZones } from "~~/utils/consts";

const today = new Date();
const defaultDate = ref(today.toISOString().split("T")[0]);

const defaultFormValues = {
  name: "",
  code: "",
  mostRecentEdition: null,
  fractionName: "",
  fraction: null,
  edition: null,
  year: null,
  value: null,
  type: "",
  fPhoto: "",
  bPhoto: "",
  date: defaultDate,
  zoneName: "",
  mapCode: "",
  continent: "",
  valuePerUSD: null,
};

const formData = reactive(defaultFormValues);

const handleSubmit = () => {
  addCurrency(formData);
};

definePageMeta({
  layout: "landing",
});
</script>
