<template>
  <PageHeader
    title="Create New Currency Record"
    subtitle="Fill in the details to add a new currency"
  />

  <div class="p-6 bg-light m-0">
    <form @submit.prevent="handleSubmit">
      <div class="row g-4">
        <!-- Zone Information -->
        <fieldset class="col-12">
          <legend class="text-muted fs-6">Zone Information</legend>
          <div class="row g-3">
            <div class="col-md-4">
              <label for="continent" class="form-label">Continent</label>
              <select
                v-model="formData.continent"
                class="form-select"
                id="continent"
                required
              >
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
            <div class="col-md-4">
              <label for="zoneName" class="form-label">Zone Name</label>
              <select
                v-model="formData.zoneName"
                class="form-select"
                id="zoneName"
                required
              >
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
            <div class="col-md-4">
              <label for="zoneFullName" class="form-label"
                >Zone Full Name</label
              >
              <input
                v-model="formData.zoneFullName"
                class="form-control"
                id="zoneFullName"
                type="text"
                placeholder="e.g., The Hashemite Kingdom of Jordan"
                required
              />
            </div>
          </div>
        </fieldset>

        <!-- Currency Details -->
        <fieldset class="col-12">
          <legend class="text-muted fs-6">Currency Details</legend>
          <div class="row g-3">
            <div class="col-md-4">
              <label for="currencyName" class="form-label">Currency Name</label>
              <input
                v-model="formData.name"
                class="form-control"
                id="currencyName"
                type="text"
                placeholder="e.g., Dinar"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="currencyCode" class="form-label">Currency Code</label>
              <input
                v-model="formData.code"
                class="form-control"
                id="currencyCode"
                type="text"
                placeholder="e.g., JOD"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fractionName" class="form-label">Fraction Name</label>
              <input
                v-model="formData.fractionName"
                class="form-control"
                id="fractionName"
                type="text"
                placeholder="e.g., Piastre"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fractionSize" class="form-label">Fraction Size</label>
              <input
                v-model="formData.fractionSize"
                class="form-control"
                id="fractionSize"
                type="number"
                placeholder="e.g., 100"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="edition" class="form-label">Edition No.</label>
              <input
                v-model="formData.edition"
                class="form-control"
                id="edition"
                type="number"
                placeholder="e.g., 5"
              />
            </div>
            <div class="col-md-4">
              <label for="year" class="form-label">Edition Year</label>
              <input
                v-model="formData.year"
                class="form-control"
                id="year"
                type="number"
                placeholder="e.g., 2022"
              />
            </div>
          </div>
        </fieldset>

        <!-- Additional Details -->
        <fieldset class="col-12">
          <legend class="text-muted fs-6">Additional Details</legend>
          <div class="row g-3">
            <div class="col-md-4">
              <label for="circability" class="form-label">Circability</label>
              <select
                v-model="formData.status"
                class="form-select"
                id="circability"
                required
              >
                <option value="" disabled>Select Status</option>
                <option value="Circulable">Circulable</option>
                <option value="Outdated">Outdated</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="type" class="form-label">Type</label>
              <select
                v-model="formData.type"
                class="form-select"
                id="type"
                required
              >
                <option value="" disabled>Select Type</option>
                <option value="Banknote">Banknote</option>
                <option value="Coin">Coin</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="value" class="form-label">Value</label>
              <input
                v-model="formData.value"
                class="form-control"
                id="value"
                type="number"
                placeholder="e.g., 20"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="date" class="form-label">Collection Date</label>
              <input
                v-model="formData.date"
                class="form-control"
                id="date"
                type="date"
              />
            </div>
            <div class="col-md-4">
              <label for="usdToLocal" class="form-label">Value Per USD</label>
              <input
                v-model="formData.usdToLocal"
                class="form-control"
                id="usdToLocal"
                type="number"
                step="0.01"
                placeholder="e.g., 0.71"
                required
              />
            </div>
          </div>
        </fieldset>

        <!-- Photos -->
        <fieldset class="col-12">
          <legend class="text-muted fs-6">Photos</legend>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="fPhoto" class="form-label">Front Photo URL</label>
              <input
                v-model="formData.fPhoto"
                class="form-control"
                id="fPhoto"
                type="url"
                placeholder="Front photo URL"
              />
            </div>
            <div class="col-md-6">
              <label for="bPhoto" class="form-label">Back Photo URL</label>
              <input
                v-model="formData.bPhoto"
                class="form-control"
                id="bPhoto"
                type="url"
                placeholder="Back photo URL"
              />
            </div>
          </div>
        </fieldset>
      </div>

      <!-- Submit Button -->
      <div class="mt-4 text-end">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </form>
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
  continent: "",
  zoneName: "",
  zoneFullName: "",
  name: "",
  code: "",
  fractionName: "",
  fractionSize: null,
  edition: null,
  year: null,
  status: "",
  type: "",
  value: null,
  date: defaultDate,
  usdToLocal: null,
  fPhoto: "",
  bPhoto: "",
};

const formData = reactive(defaultFormValues);

const handleSubmit = () => {
  addCurrency(formData);
};

definePageMeta({
  layout: "landing",
  middleware: "auth",
});
</script>
