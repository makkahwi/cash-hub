<template>
  <thead class="table-dark text-center">
    <tr>
      <th colspan="7"><h4 class="my-3 text-white">By Continent</h4></th>
    </tr>

    <tr>
      <th>Continent</th>
      <th>Africa</th>
      <th>Americas</th>
      <th>Asia</th>
      <th>Europe</th>
      <th>Oceania</th>
      <th>Total</th>
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
