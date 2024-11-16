<template>
  <div class="container">
    <h2 class="text-center my-4">Restructured Data Viewer</h2>
    <button class="btn btn-primary mb-4" @click="fetchAndProcessData">
      Fetch and Process Data
    </button>

    <pre class="bg-light p-3 rounded">
      {{ JSON.stringify(processedData, null, 2) }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      processedData: {},
    };
  },
  methods: {
    async fetchAndProcessData() {
      try {
        // Fetch the data
        const response = await fetch("/data.json");
        const rawData = await response.json();

        // Process the data
        const continents = {
          Af: "Africa",
          Am: "Americas",
          As: "Asia",
          Eu: "Europe",
          Oc: "Oceania",
        };

        this.processedData = Object.entries(rawData)
          .flatMap(([key, data]) => {
            const continentCode = key.split(" ")[1];
            const type =
              parseInt(key.split(" ")[0], 10) <= 2 ? "Banknote" : "Coin";
            const status =
              parseInt(key.split(" ")[0], 10) % 2 !== 0
                ? "Circulable"
                : "Outdated";

            const final = data
              .filter((item) =>
                Object.keys(item).some((key) => key.startsWith("collected"))
              )
              .reduce((acc, item) => {
                // Extract "collected x" keys
                const collectedKeys = Object.keys(item).filter((key) =>
                  key.startsWith("collected")
                );

                // Create new objects for each "collected x"
                const collectedObjects = collectedKeys.map((key) => ({
                  ...item,
                  value: item[key], // Add "value" property
                }));

                // Remove "collected x" keys and return new array of objects
                collectedObjects.forEach((obj) => {
                  collectedKeys.forEach((colKey) => delete obj[colKey]);
                });

                return acc.concat(collectedObjects);
              }, [])
              .map((item) => ({
                ...item,
                continent: continents[continentCode],
                type,
                countryFullName: item.countryFullName || item.countryName,
                status,
              }));

            return final;
          })
          .reduce(
            (final, element, i) => ({ ...final, ["id" + (i + 1)]: element }),
            {}
          );
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
}
button {
  display: block;
  margin: auto;
}
</style>
