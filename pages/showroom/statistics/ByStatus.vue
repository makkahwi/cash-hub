<template>
  <thead class="bg-success text-white">
    <tr>
      <th colspan="7"><h4 class="my-2 text-white">By Status</h4></th>
    </tr>

    <tr>
      <th>Status</th>
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
      <td><strong>Current Pieces</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Africa" && status === "Current"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Americas" && status === "Current"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Asia" && status === "Current"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Europe" && status === "Current"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Oceania" && status === "Current"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(({ status }) => status === "Current").length
        }}
      </td>
    </tr>

    <tr>
      <td><strong>Discontinued Pieces</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Africa" && status === "Discontinued"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Americas" && status === "Discontinued"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Asia" && status === "Discontinued"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Europe" && status === "Discontinued"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Oceania" && status === "Discontinued"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(({ status }) => status === "Discontinued")
            .length
        }}
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
