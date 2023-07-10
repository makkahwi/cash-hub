<template>
  <PageSection title="Filters" subtitle="Filter what you wanna see of the collection">
    <form @submit="onSubmit">
      <div class="row text-start">
        <div class="mx-auto col-md-3 multisteps-form__content">
          <h6 class="my-3">Per Type</h6>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="type"
              value="Banknotes"
              :checked="filters.value.type.includes('banknotes')"
              @change="e => filters.update('type', 'banknotes')"
            />

            <label class="custom-control-label"> Banknotes </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="type"
              value="Coins"
              :checked="filters.value.type.includes('coins')"
              @change="e => filters.update('type', 'coins')"
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
              :checked="filters.value.status.includes('circuable')"
              @change="e => filters.update('status', 'circuable')"
            />

            <label class="custom-control-label"> Circuable </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="status"
              value="Outdated"
              :checked="filters.value.status.includes('outdated')"
              @change="e => filters.update('status', 'outdated')"
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
              :checked="filters.value.continent.includes('africa')"
              @change="e => filters.update('continent', 'africa')"
            />

            <label class="custom-control-label"> Africa </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Americas"
              :checked="filters.value.continent.includes('americas')"
              @change="e => filters.update('continent', 'americas')"
            />

            <label class="custom-control-label"> Americas </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Asia"
              :checked="filters.value.continent.includes('asia')"
              @change="e => filters.update('continent', 'asia')"
            />

            <label class="custom-control-label"> Asia </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Europe"
              :checked="filters.value.continent.includes('europe')"
              @change="e => filters.update('continent', 'europe')"
            />

            <label class="custom-control-label"> Europe </label>
          </div>

          <div>
            <input
              class="form-check-input border"
              type="checkbox"
              name="continent"
              value="Oceania"
              :checked="filters.value.continent.includes('oceania')"
              @change="e => filters.update('continent', 'oceania')"
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
              type="number"
              min="1"
              :max="new Date().getFullYear()"
              step="1"
              name="startDate"
              :value="filters.value.startDate"
              @change="e => filters.replace({startDate: e.target.value})"
            />
          </div>

          <div>
            <label>End Year</label>
            
            <input
              class="multisteps-form__input form-control"
              type="number"
              min="1"
              :max="new Date().getFullYear()"
              step="1"
              name="endDate"
              :value="filters.value.endDate"
              @change="e => filters.replace({endDate: e.target.value})"
            />
          </div>

          <button class="btn btn-success mt-4 float-end" type="submit">Filter</button>
        </div>
      </div>
    </form>
  </PageSection>
</template>

<script setup>
  import PageSection from "@/components/PageSection";

  const props = defineProps({
    filters: {
      type: Object,
      default: {},
    },    
    onFilter: {
      type: Function,
      default: () => false,
    },    
  })

  const onSubmit = e => {
    e.preventDefault();
    props.onFilter();      
  };
</script>
