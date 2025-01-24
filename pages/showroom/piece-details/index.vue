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
                <i
                  :class="`fas fa-globe-${generateContinentIcon(piece.continent)}`"
                />
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
                  piece.status === 'Current' ? 'success' : 'danger'
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
            </tr>

            <tr>
              <td colspan="4"><hr /></td>
            </tr>

            <tr>
              <td class="font-weight-bold">Exchange Rates</td>
              <td class="font-weight-bolder" colspan="3">
                <table
                  class="table-bordered w-100 table-responsive align-middle text-center"
                >
                  <tr>
                    <td></td>
                    <td>Now</td>
                    <td>At Collection Time</td>
                    <td>At Issue Time</td>
                  </tr>

                  <tr>
                    <td class="text-start">USD To Local</td>
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
                    <td class="text-start">Local To USD</td>
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

            <tr>
              <td colspan="4"><hr /></td>
            </tr>

            <tr v-if="loggedIn">
              <td class="font-weight-bold"><h5>Private Section</h5></td>
            </tr>

            <tr v-if="loggedIn">
              <td class="font-weight-bold py-4" colspan="1">Private Notes</td>

              <td class="font-weight-bolder py-4">
                {{ piece.note || "N/A" }}
              </td>

              <td class="font-weight-bold py-4" colspan="1">Purchase Price</td>

              <td class="font-weight-bolder py-4">
                {{ piece.price || "N/A" }}
              </td>
            </tr>

            <tr v-if="loggedIn">
              <td class="font-weight-bold">Actions</td>
              <td class="font-weight-bolder" colspan="3">
                <table
                  class="table-borderless w-100 table-responsive align-middle"
                >
                  <tbody>
                    <tr>
                      <td colspan="2" class="py-3">
                        <label>Note (Not Shared Publicly)</label>
                        <input class="form-control" v-model="formData.note" />
                      </td>
                    </tr>

                    <tr>
                      <td class="py-3">
                        <label>Purchase Price (Not Shared Publicly)</label>
                        <input
                          class="form-control"
                          type="number"
                          step="0.01"
                          v-model="formData.price"
                        />
                      </td>

                      <td class="py-3">
                        <label>Collection Date</label>
                        <input
                          class="form-control"
                          type="date"
                          v-model="formData.date"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="py-3">
                        <button
                          class="btn btn-danger"
                          @click="deleteRecord(piece.dbId)"
                        >
                          <i class="fa fa-trash"></i> Delete Collection Record
                        </button>
                      </td>

                      <td class="py-3 text-end">
                        <button
                          class="btn btn-warning"
                          @click="updateRecord(piece.dbId)"
                        >
                          <i class="fa fa-edit"></i> Update Collection Record
                        </button>
                      </td>
                    </tr>
                  </tbody>
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
import { useRoute, useRouter } from "vue-router";
import { reactive, watch, ref } from "vue";
import {
  getPieceDataById,
  getCollectedCurrencies,
  updateCollectedCurrency,
  deleteCollectedCurrency,
} from "@/api/showroom";
import { photoPlaceholder } from "@/utils/consts";

const loggedIn =
  process.client && JSON.parse(localStorage.getItem("user"))?.idToken;

const route = useRoute();
const router = useRouter();

const piece = ref({});
const loading = ref(true);
const error = ref(null);

const generateContinentIcon = (continent) => {
  switch (continent) {
    case "Oceania":
      return "asia";
    default:
      return continent.toLowerCase();
  }
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

await getPieceDetails();

const defaultFormValues = {
  price: piece.value.price || "",
  date: piece.value.date || "",
  note: piece.value.note || "",
};

const formData = reactive(defaultFormValues);

const updateRecord = (id) => {
  updateCollectedCurrency(id, {
    id: piece.value.id,
    price: formData.price,
    date: formData.date,
    note: formData.note,
  }).then(() => {
    router.push("/showroom");
  });
};

const deleteRecord = (id) => {
  deleteCollectedCurrency(id).then(() => {
    router.push("/showroom");
  });
};

const formatDate = (date) => {
  if (!date) return null;

  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) return "Invalid Date";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(parsedDate);
};

definePageMeta({
  layout: "landing",
});
</script>
