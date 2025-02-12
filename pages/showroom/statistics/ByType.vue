<template>
  <thead class="bg-success text-white">
    <tr>
      <th colspan="7"><h4 class="my-2 text-white">By Type</h4></th>
    </tr>

    <tr>
      <th class="text-white">Type</th>
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
      <td><strong>Banknotes</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) =>
              continent === "Africa" && type === "Banknote"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) =>
              continent === "Americas" && type === "Banknote"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) => continent === "Asia" && type === "Banknote"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) =>
              continent === "Europe" && type === "Banknote"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) =>
              continent === "Oceania" && type === "Banknote"
          ).length
        }}
      </td>
      <td>
        {{ props.currencies.filter(({ type }) => type === "Banknote").length }}
      </td>
    </tr>

    <tr>
      <td><strong>Coins</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) => continent === "Africa" && type === "Coin"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) => continent === "Americas" && type === "Coin"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) => continent === "Asia" && type === "Coin"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) => continent === "Europe" && type === "Coin"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, type }) => continent === "Oceania" && type === "Coin"
          ).length
        }}
      </td>
      <td>
        {{ props.currencies.filter(({ type }) => type === "Coin").length }}
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
