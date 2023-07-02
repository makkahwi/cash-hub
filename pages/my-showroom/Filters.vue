<template>
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

        <button class="btn btn-success mt-4 float-end">Filter</button>
      </div>
    </div>
  </div>
</template>
