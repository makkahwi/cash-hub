<template>
  <thead class="bg-success text-white">
    <tr>
      <th colspan="7"><h4 class="my-2 text-white">By Status</h4></th>
    </tr>

    <tr>
      <th class="text-white">Status</th>
      <th v-for="continent in continents" class="text-white">
        {{ continent }}
      </th>
      <th class="text-white">Total</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><strong>Current Pieces</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Africa" && current
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Americas" && current
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Asia" && current
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Europe" && current
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Oceania" && current
          ).length
        }}
      </td>
      <td>
        {{ props.currencies.filter(({ current }) => current).length }}
      </td>
    </tr>

    <tr>
      <td><strong>Discontinued Pieces</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Africa" && !current
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Americas" && !current
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Asia" && !current
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Europe" && !current
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, current }) => continent === "Oceania" && !current
          ).length
        }}
      </td>
      <td>
        {{ props.currencies.filter(({ current }) => !current).length }}
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { continents } from "@/utils/consts";

const props = defineProps({
  currencies: {
    type: Array,
    default: [],
  },
});
</script>
