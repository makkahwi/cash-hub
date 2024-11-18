<template>
  <thead class="bg-success text-white">
    <tr>
      <th colspan="7"><h4 class="my-2 text-white">By Type</h4></th>
    </tr>

    <tr>
      <th>Type</th>
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
