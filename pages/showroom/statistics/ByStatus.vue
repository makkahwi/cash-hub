<template>
  <thead class="table-success text-center">
    <tr>
      <th colspan="7"><h4 class="my-3 text-white">By Status</h4></th>
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
      <td><strong>Circulable Pieces</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Africa" && status === "Circulable"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Americas" && status === "Circulable"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Asia" && status === "Circulable"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Europe" && status === "Circulable"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Oceania" && status === "Circulable"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(({ status }) => status === "Circulable")
            .length
        }}
      </td>
    </tr>

    <tr>
      <td><strong>Outdated Pieces</strong></td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Africa" && status === "Outdated"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Americas" && status === "Outdated"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Asia" && status === "Outdated"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Europe" && status === "Outdated"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(
            ({ continent, status }) =>
              continent === "Oceania" && status === "Outdated"
          ).length
        }}
      </td>
      <td>
        {{
          props.currencies.filter(({ status }) => status === "Outdated").length
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
