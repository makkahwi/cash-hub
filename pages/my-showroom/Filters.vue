<template>
  <PageSection title="Filters" subtitle="Filter what you wanna see of the collection">
    <div class="row text-start">
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
        <h6 class="my-3">Per Issuing Year</h6>

        <div class="mb-3">
          <label>Start Year</label>
          <input
            class="multisteps-form__input form-control"
            type="number" min="1800" :max="new Date().getFullYear()" step="1" :value="new Date().getFullYear()" 
            name="startDate"
          />
        </div>

        <div>
          <label>End Year</label>
          <input
            class="multisteps-form__input form-control"
            type="number" min="1800" :max="new Date().getFullYear()" step="1" :value="new Date().getFullYear()"
            name="endDate"
          />
        </div>

        <button class="btn btn-success mt-4 float-end">Filter</button>
      </div>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "../../components/PageSection";
</script>
