<template>
  <thead class="bg-success text-white">
    <tr>
      <th colspan="7"><h4 class="my-2 text-white">By Continent</h4></th>
    </tr>

    <tr>
      <th class="text-white">Continent</th>
      <th class="text-white">Africa</th>
      <th class="text-white">Americas</th>
      <th class="text-white">Asia</th>
      <th class="text-white">Europe</th>
      <th class="text-white">Oceania</th>
      <th class="text-white">Total</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><strong>Total Pieces</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) => continent === "Africa"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) => continent === "Americas"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) => continent === "Asia"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) => continent === "Europe"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) => continent === "Oceania"
          ).length
        }}
      </td>
      <td>
        {{ props.currencies.length }}
      </td>
    </tr>
  </tbody>
</template>

<script setup>
const props = defineProps({
  currencies: {
    type: Array,
    default: [],
  },
});
</script>
