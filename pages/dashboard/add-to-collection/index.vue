<template>
  <PageHeader
    title="Create New Currency Collection Record"
    subtitle="Fill in the details to add a new currency to your collection catalogue"
  />

  <div class="p-6 bg-light m-0">
    <form @submit.prevent="handleSubmit">
      <div class="row g-4">
        <fieldset
          v-for="({ title, inputs }, i) of formInputs()"
          class="col-12"
          :key="i"
        >
          <legend class="text-muted fs-6">{{ title }}</legend>

          <div class="row g-3">
            <div
              v-for="(
                {
                  label,
                  name,
                  type,
                  options,
                  allOptions,
                  required,
                  fullWidth,
                  ...rest
                },
                y
              ) of inputs"
              :key="y"
              :class="`col-md-${type == 'checklist-photo' || fullWidth ? 12 : 4}`"
            >
              <label for="continent" class="form-label"
                >{{ label
                }}<span class="text-danger">{{
                  required ? " *" : ""
                }}</span></label
              >

              <select
                v-model="formData[name]"
                v-if="type == 'select'"
                class="form-select"
                :required="required"
                v-bind="rest"
              >
                <option value="" disabled>Select {{ label }}...</option>
                <option v-for="{ label, value } of options" :value="value">
                  {{ label || value }}
                </option>
              </select>

              <div v-else-if="type == 'checklist-photo'">
                <div class="row my-3">
                  <h6
                    v-if="formData.zoneName && formData.type && formData.value"
                  >
                    Select {{ label }}...
                  </h6>

                  <div
                    v-if="formData.zoneName && formData.type && formData.value"
                    v-for="{
                      front_image,
                      back_image,
                      label,
                      value,
                      issue_start_year,
                      issue_end_year,
                    } of options"
                    :key="value"
                    class="col-12 col-sm-6 col-md-4 col-lg-2 text-center"
                  >
                    <img :src="front_image" class="mb-3" />
                    <img :src="back_image" class="mb-3" />

                    <br />

                    <h6>{{ issue_start_year }} - {{ issue_end_year }}</h6>

                    <br />

                    <div>
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        :value="value"
                        :checked="formData[name].includes(value)"
                        @change="updateSelection(value)"
                      />

                      <label class="form-check-label">
                        {{ label || value }}</label
                      >
                    </div>
                  </div>

                  <h6 v-else>
                    Select Required Fields Above For This To Show Options
                  </h6>
                </div>

                <div class="row my-3 mt-5">
                  <h6>Selected Options</h6>

                  <div
                    v-if="formData.collectedCurrencies.length > 0"
                    v-for="{
                      front_image,
                      back_image,
                      label,
                      value,
                      issue_start_year,
                      issue_end_year,
                    } of allOptions"
                    :key="value"
                    class="col-12 col-sm-6 col-md-4 col-lg-2 text-center"
                  >
                    <img :src="front_image" class="mb-3" />
                    <img :src="back_image" class="mb-3" />

                    <br />

                    <h6>{{ issue_start_year }} - {{ issue_end_year }}</h6>

                    <br />

                    <div>
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        :value="value"
                        :checked="formData[name].includes(value)"
                        @change="updateSelection(value)"
                      />

                      <label class="form-check-label">
                        {{ label || value }}</label
                      >
                    </div>
                  </div>

                  <h6 v-else>Noting Selected So Far</h6>
                </div>
              </div>

              <input
                v-model="formData[name]"
                v-else
                class="form-control"
                :type="type || 'text'"
                :required="required"
                v-bind="rest"
              />
            </div>
          </div>

          <hr class="mt-5 mb-3" />
        </fieldset>
      </div>

      <!-- Submit Buttons-->
      <div class="mt-4 btn-group float-end">
        <button
          type="button"
          @click="clearSelections"
          class="btn btn-outline-success"
        >
          Clear Selections
        </button>

        <button
          type="button"
          @click="resetForm"
          class="btn btn-outline-success"
        >
          Reset
        </button>

        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import PageHeader from "@/components/PageHeader";
import {
  addCollectedCurrencies,
  getCollectedCurrencies,
} from "~~/api/showroom";
import { currencyZones } from "~~/utils/consts";
import dbData from "../../../api/db.json";

const defaultFormValues = {
  continent: "",
  zoneName: "",
  type: "",
  value: "",
  collectedCurrencies: [],
  date: new Date().toISOString().split("T")[0],
  note: "",
};

const formData = reactive(defaultFormValues);

const clearSelections = () => {
  formData.collectedCurrencies = [];
};

const resetForm = () => {
  clearSelections();
  formData.continent = "";
  formData.zoneName = "";
  formData.type = "";
  formData.value = "";
  formData.date = new Date().toISOString().split("T")[0];
  formData.note = "";
};

const updateSelection = (value) => {
  const selectedArray = formData.collectedCurrencies;

  if (selectedArray.includes(value)) {
    // Remove the value if it's already selected
    formData.collectedCurrencies = selectedArray.filter(
      (item) => item !== value
    );
  } else {
    // Add the value if it's not already selected
    formData.collectedCurrencies.push(value);
  }
};

watch(
  () => formData.continent,
  (newContinent) => {
    formData.zoneName = "";
    formData.value = "";
  }
);

watch(
  () => formData.zoneName,
  (newZoneName) => {
    formData.value = "";
  }
);

watch(
  () => formData.type,
  (newType) => {
    formData.value = "";
  }
);

const formInputs = () => [
  {
    title: "Zone Information",
    inputs: [
      {
        name: "continent",
        label: "Continent",
        required: true,
        type: "select",
        options: dbData.continents
          .map(({ name, id }) => ({ value: id, label: name }))
          .sort((a, b) => (a.name < b.name ? -1 : 1)),
      },
      {
        name: "zoneName",
        label: "Zone Name",
        required: true,
        type: "select",
        options: formData.continent
          ? dbData.countries
              .reduce(
                (final, { id, name, continent_id }) =>
                  final.find((already) => already.value == name)
                    ? final
                    : [
                        ...final,
                        { value: id, label: name, continent: continent_id },
                      ],
                []
              )
              .filter(({ continent }) => continent == formData.continent)
              .sort((a, b) => (a.label < b.label ? -1 : 1))
          : [],
      },
    ],
  },
  {
    title: "Currency Details",
    inputs: [
      {
        name: "type",
        label: "Currency Type",
        required: true,
        type: "select",
        options: [{ value: "Banknote" }, { value: "Coin" }],
      },
      {
        name: "value",
        label: "Currency Value",
        required: true,
        type: "select",
        options:
          formData.type && formData.zoneName
            ? dbData.currencies
                .filter(
                  ({ country_id, type }) =>
                    country_id == formData.zoneName && type == formData.type
                )
                .sort((a, b) => (a.value < b.value ? -1 : 1))
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .reduce(
                  (final, { name, value }) =>
                    final.find((already) => already.value == value + " " + name)
                      ? final
                      : [
                          ...final,
                          {
                            value: value + " " + name,
                            label: value.toLocaleString() + " " + name,
                          },
                        ],
                  []
                )
            : [],
      },
    ],
  },
  {
    title: "Select The Currency",
    inputs: [
      {
        name: "collectedCurrencies",
        label: "Currencies To Add",
        required: true,
        type: "checklist-photo",
        allOptions: dbData.currencies
          .filter(({ id }) => formData.collectedCurrencies.includes(id))
          .map(
            ({
              id,
              name,
              value,
              front_image,
              back_image,
              issue_start_year,
              issue_end_year,
            }) => ({
              front_image: front_image || back_image,
              back_image: back_image || front_image,
              issue_start_year,
              issue_end_year,
              value: id,
              label: value.toLocaleString() + " " + name,
            })
          ),
        options: formData.value
          ? dbData.currencies
              .filter(
                ({ type, value, id, country_id, name }) =>
                  type == formData.type &&
                  formData.value == value + " " + name &&
                  country_id == formData.zoneName &&
                  type == formData.type
              )
              .sort((a, b) =>
                a.issue_start_year < b.issue_start_year ? -1 : 1
              )
              .map(
                ({
                  id,
                  name,
                  value,
                  front_image,
                  back_image,
                  issue_start_year,
                  issue_end_year,
                }) => ({
                  front_image: front_image || back_image,
                  back_image: back_image || front_image,
                  issue_start_year,
                  issue_end_year,
                  value: id,
                  label: value.toLocaleString() + " " + name,
                })
              )
          : [],
      },
    ],
  },
  {
    title: "Additional Details",
    inputs: [
      {
        name: "date",
        label: "Purchase Date",
        type: "date",
      },
      // {
      //   name: "price",
      //   label: "Purchase Price",
      //   type: "number",
      //   step: 0.01,
      // },
      {
        name: "note",
        label: "Private Note (Not Shared Publicly)",
        type: "text",
      },
    ],
  },
];

const handleSubmit = () => {
  addCollectedCurrencies(formData).then(() => {
    clearSelections();
  });
};

definePageMeta({
  layout: "landing",
  middleware: "auth",
});
</script>
