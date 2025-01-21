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

      <div class="text-center col-lg-6">
        <img
          class="shadow-lg border-radius"
          height="200"
          :src="piece.fPhoto"
          alt="front"
        />
      </div>

      <div class="text-center col-lg-6">
        <img
          class="shadow-lg border-radius"
          height="200"
          :src="piece.bPhoto"
          alt="back"
        />
      </div>

      <div class="mx-auto col-lg-12 text-start mt-6">
        <table class="w-100 table-responsive">
          <tbody>
            <tr>
              <td class="font-weight-bold">Continent</td>
              <td class="font-weight-bolder">
                <i :class="`fas fa-globe-${piece.continent.toLowerCase()}`" />
                {{ piece.continent || "N/A" }}
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Country</td>
              <td class="font-weight-bolder">
                {{ piece.zoneName || "N/A" }}
              </td>

              <td class="font-weight-bold">Country Full Name</td>
              <td class="font-weight-bolder">
                <img :src="piece.flag" height="15px" />{{ " " }}
                {{ piece.zoneFullName || "N/A" }}
              </td>
            </tr>

            <tr>
              <td colspan="4"><hr /></td>
            </tr>

            <tr>
              <td class="font-weight-bold">Currency Code</td>
              <td class="font-weight-bolder">{{ piece.code || "N/A" }}</td>

              <td class="font-weight-bold">Fraction Size</td>
              <td class="font-weight-bolder">
                {{ piece.fractionSize || "N/A" }}
              </td>
            </tr>

            <tr v-if="piece.fractionName || piece.fractionSize">
              <td class="font-weight-bold">Currency Name</td>
              <td class="font-weight-bolder">{{ piece.name || "N/A" }}</td>

              <td class="font-weight-bold">Fraction Name</td>
              <td class="font-weight-bolder">
                {{ piece.fractionName || "N/A" }}
              </td>
            </tr>

            <tr>
              <td colspan="4"><hr /></td>
            </tr>

            <tr>
              <td class="font-weight-bold">Edition No.</td>
              <td class="font-weight-bolder">{{ piece.edition || "N/A" }}</td>

              <td class="font-weight-bold">Edition Issue Years</td>
              <td class="font-weight-bolder">
                {{ piece.firstYear || "N/A" }} - {{ piece.lastYear || "N/A" }}
              </td>
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
              <td colspan="4"><hr /></td>
            </tr>

            <tr>
              <td class="font-weight-bold">Type</td>
              <td class="font-weight-bolder">{{ piece.type || "N/A" }}</td>

              <td class="font-weight-bold">Value</td>
              <td class="font-weight-bolder">{{ piece.value || "N/A" }}</td>
            </tr>

            <tr>
              <td colspan="4"><hr /></td>
            </tr>

            <tr>
              <td class="font-weight-bold">Collection Date</td>
              <td class="font-weight-bolder">
                {{ formatDate(piece.date) || "N/A" }}
              </td>

              <td class="font-weight-bold">Exchange Rates</td>
              <td class="font-weight-bolder">
                <table class="table w-100 table-responsive">
                  <tr>
                    <td></td>
                    <td>Now</td>
                    <td>At Collection Time</td>
                    <td>At Issue Time</td>
                  </tr>

                  <tr>
                    <td>USD To Local</td>
                    <td>
                      {{ piece.usdToLocalNow || "N/A" }}
                    </td>
                    <td>
                      {{ piece.usdToLocalAtCollectionTime || "N/A" }}
                    </td>
                    <td>
                      {{ piece.usdToLocalAtIssueTime || "N/A" }}
                    </td>
                  </tr>

                  <tr>
                    <td>Local To USD</td>
                    <td>
                      {{ 1 / piece.usdToLocalNow || "N/A" }}
                    </td>
                    <td>
                      {{ 1 / piece.usdToLocalAtCollectionTime || "N/A" }}
                    </td>
                    <td>
                      {{ 1 / piece.usdToLocalAtIssueTime || "N/A" }}
                    </td>
                  </tr>
                </table>
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
import { getPieceDataById, getCollectedCurrencies } from "@/api/showroom";
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

    const pieceData = await getPieceDataById(id);
    const collectionData = await getCollectedCurrencies();
    const collectedPieceData = collectionData.find(
      (collected) => collected.id == id
    );

    if (!pieceData) {
      error.value = "Currency details not found.";
      return;
    }

    piece.value = {
      ...pieceData,
      ...collectedPieceData,
      fPhoto: pieceData.fPhoto || photoPlaceholder,
      bPhoto: pieceData.bPhoto || photoPlaceholder,
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
