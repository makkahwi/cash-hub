<template>
  <thead class="bg-success text-white">
    <tr>
      <th colspan="7"><h4 class="my-2 text-white">By Continent</h4></th>
    </tr>

    <tr>
      <th class="text-white">Continent</th>
      <th v-for="continent in continents" class="text-white">
        {{ continent }}
      </th>
      <th class="text-white">Total</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><strong>Total Pieces</strong></td>
      <td>
        {{
          props.currencies.filter(({ continent }) => continent === "Africa")
            .length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(({ continent }) => continent === "Americas")
            .length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(({ continent }) => continent === "Asia")
            .length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(({ continent }) => continent === "Europe")
            .length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(({ continent }) => continent === "Oceania")
            .length
        }}
      </td>
      <td>
        {{ props.currencies.length }}
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
