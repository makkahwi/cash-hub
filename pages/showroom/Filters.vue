<template>
  <PageSection
    title="Filters"
    subtitle="Filter the currencies you want to view"
  >
    <form @submit.prevent="onSubmit">
      <div class="row g-4">
        <div class="col-md-3">
          <h6 class="text-start my-4">By Type</h6>
          <div
            class="form-check"
            v-for="type in ['Banknote', 'Coin']"
            :key="type"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="type"
              :checked="filters.value.type.includes(type)"
              @change="(e) => toggleFilter('type', type, e)"
              id="type-{{ type }}"
            />
            <label :for="'type-' + type">{{ type }}</label>
          </div>

          <h6 class="text-start my-4">By Status</h6>
          <div
            class="form-check"
            v-for="status in ['Current', 'Discontinued']"
            :key="status"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="status"
              :checked="filters.value.status.includes(status)"
              @change="(e) => toggleFilter('status', status, e)"
              id="status-{{ status }}"
            />
            <label :for="'status-' + status">{{ status }}</label>
          </div>
        </div>

        <div class="col-md-3">
          <h6 class="text-start my-4">By Continent</h6>
          <div
            class="form-check"
            v-for="continent in [
              'Africa',
              'Americas',
              'Asia',
              'Europe',
              'Oceania',
            ]"
            :key="continent"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="continent"
              :checked="filters.value.continent.includes(continent)"
              @change="(e) => toggleFilter('continent', continent, e)"
              id="continent-{{ continent }}"
            />
            <label :for="'continent-' + continent">
              {{ continent }}
            </label>
          </div>
        </div>

        <div class="col-md-3">
          <h6 class="text-start my-4">By Issuing Year</h6>
          <div class="mb-3">
            <label class="form-label">Start Year</label>
            <input
              class="form-control"
              type="number"
              min="1800"
              required
              :max="new Date().getFullYear()"
              :value="filters.value.startYear"
              @input="updateFilter('startYear', $event.target.value)"
            />
          </div>
          <div>
            <label class="form-label">End Year</label>
            <input
              class="form-control"
              type="number"
              min="1800"
              required
              :max="new Date().getFullYear()"
              :value="filters.value.endYear"
              @input="updateFilter('endYear', $event.target.value)"
            />
          </div>
        </div>

        <div class="col-md-3">
          <h6 class="text-start my-4">By Collection Date</h6>
          <div class="mb-3">
            <label class="form-label">Start Date</label>
            <input
              class="form-control"
              type="date"
              required
              :value="filters.value.startDate"
              @input="updateFilter('startDate', $event.target.value)"
            />
          </div>
          <div>
            <label class="form-label">End Date</label>
            <input
              class="form-control"
              type="date"
              required
              :value="filters.value.endDate"
              @input="updateFilter('endDate', $event.target.value)"
            />
          </div>
        </div>
      </div>

      <div class="mt-4 text-end">
        <button type="submit" class="btn btn-success">Apply Filters</button>
        <button
          type="button"
          class="btn btn-secondary ms-2"
          @click="resetFilters"
        >
          Reset
        </button>
      </div>
    </form>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";

const props = defineProps({
  filters: {
    type: Object,
    required: true,
  },
  onFilter: {
    type: Function,
    required: true,
  },
});

const toggleFilter = (key, value, event) => {
  const currentValues = [...props.filters.value[key]];

  if (currentValues.includes(value)) {
    if (currentValues.length === 1) {
      event.target.checked = true;
      return;
    }
    const updatedValues = currentValues.filter((item) => item !== value);
    props.filters.replace({ [key]: updatedValues });
  } else {
    props.filters.replace({ [key]: [...currentValues, value] });
  }
};

const updateFilter = (key, value) => {
  props.filters.replace({ [key]: value });
};

const formatDate = (date) => date.toISOString().split("T")[0];

const resetFilters = () => {
  props.filters.replace({
    type: ["Banknote", "Coin"],
    status: ["Current", "Discontinued"],
    continent: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    startYear: 1800,
    endYear: new Date().getFullYear(),
    startDate: formatDate(new Date("2000-01-01")),
    endDate: formatDate(new Date()),
  });
};

const onSubmit = (e) => {
  e.preventDefault();

  props.onFilter();
};
</script>
