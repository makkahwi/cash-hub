<template>
  <PageHeader title="Piece Details" />

  <PageSection>
    <div class="text-end mb-3 text-sm font-weight-normal">
      <NuxtLink
        class="btn btn-success btn-lg"
        :to="{
          path: '/showroom',
        }"
      >
        Back
      </NuxtLink>
    </div>

    <div v-if="loading" class="text-center">
      <p>Loading currency details...</p>
    </div>

    <div v-else-if="error" class="text-center text-danger">
      <p>{{ error }}</p>
    </div>

    <div v-else class="row">
      <div class="col-12 text-start">
        <h2 class="my-4 mt-lg-0">{{ piece.code }} {{ piece.value }}</h2>
      </div>

      <div class="text-center col-xl-5 col-lg-6">
        <img
          class="shadow-lg w-100 border-radius"
          :src="piece.fPhoto"
          alt="front"
        />

        <img
          class="shadow-lg w-100 border-radius mt-4"
          :src="piece.bPhoto"
          alt="back"
        />
      </div>

      <div class="mx-auto col-lg-5 text-start">
        <table class="w-100 table-responsive">
          <tbody>
            <tr>
              <td class="font-weight-bold">Continent</td>
              <td class="font-weight-bolder">{{ piece.continent || "N/A" }}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Country</td>
              <td class="font-weight-bolder">
                {{ piece.zoneName || "N/A" }}
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Country Full Name</td>
              <td class="font-weight-bolder">
                {{ piece.zoneFullName || "N/A" }}
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Currency Name</td>
              <td class="font-weight-bolder">{{ piece.name || "N/A" }}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Currency Code</td>
              <td class="font-weight-bolder">{{ piece.code || "N/A" }}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Edition No.</td>
              <td class="font-weight-bolder">{{ piece.edition || "N/A" }}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Edition Issue Year</td>
              <td class="font-weight-bolder">{{ piece.year || "N/A" }}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Circability</td>
              <td
                :class="`font-weight-bolder badge badge-${
                  piece.status === 'Circulable' ? 'success' : 'danger'
                }`"
              >
                {{ piece.status || "N/A" }}
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Type</td>
              <td class="font-weight-bolder">{{ piece.type || "N/A" }}</td>
            </tr>

            <tr v-if="piece.fractionName">
              <td class="font-weight-bold">Fraction Unit</td>
              <td class="font-weight-bolder">
                {{ piece.fractionName || "N/A" }}
              </td>
            </tr>

            <tr v-if="piece.fraction">
              <td class="font-weight-bold">Fractions Count</td>
              <td class="font-weight-bolder">{{ piece.fraction || "N/A" }}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Value</td>
              <td class="font-weight-bolder">{{ piece.value || "N/A" }}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Collection Date</td>
              <td class="font-weight-bolder">
                {{ formatDate(piece.date) || "N/A" }}
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Exchange Rates</td>
              <td class="font-weight-bolder">
                {{ "USD To Local: " + (piece.usdToLocal || "N/A") }}
                <br />
                {{ "Local To USD: " + (1 / piece.usdToLocal || "N/A") }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageSection>

  <!-- <RelatedPieces :pieceId="route.query.id" /> -->
</template>

<script setup>
import PageSection from "@/components/PageSection";
// import RelatedPieces from "./RelatedPieces";
import PageHeader from "@/components/PageHeader";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { getCurrencyById } from "@/api/showroom";
import { photoPlaceholder } from "@/utils/consts";

const route = useRoute();

definePageMeta({
  layout: "landing",
});

const piece = ref({});
const loading = ref(true);
const error = ref(null);

const formatDate = (date) => {
  if (!date) return null;

  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) return "Invalid Date";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(parsedDate);
};

const getPieceDetails = async () => {
  try {
    loading.value = true;
    const id = route.query.id;

    if (!id) {
      error.value = "Invalid currency ID.";
      return;
    }

    const response = await getCurrencyById(id);

    if (!response) {
      error.value = "Currency details not found.";
      return;
    }

    piece.value = {
      ...response,
      fPhoto: response.fPhoto || photoPlaceholder,
      bPhoto: response.bPhoto || photoPlaceholder,
    };
  } catch (err) {
    error.value = "Failed to fetch currency details.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

getPieceDetails();
</script>
