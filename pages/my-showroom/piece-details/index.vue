<template>
  <PageHeader title="Piece Details" />

  <PageSection>
    <div class="row">
      <div class="text-center col-xl-5 col-lg-6">
        <img
          class="shadow-lg w-100 border-radius"
          :src="piece.value.fPhoto"
          alt="front"
        />

        <img
          class="shadow-lg w-100 border-radius mt-4"
          :src="piece.value.bPhoto"
          alt="back"
        />
      </div>

      <div class="mx-auto col-lg-5 text-start">
        <h3 class="mt-4 mt-lg-0">{{piece.value.code}} {{piece.value.value}}</h3>

        <table class="w-100 table-responsive">
          <tbody>
            <tr>
              <td class="font-weight-bold">Continent</td>
              <td class="font-weight-bolder">{{piece.value.continent}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Nation</td>
              <td class="font-weight-bolder">{{piece.value.zoneName}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Currency</td>
              <td class="font-weight-bolder">{{piece.value.code}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Edition No.</td>
              <td class="font-weight-bolder">{{piece.value.order}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Edition Issue Year</td>
              <td class="font-weight-bolder">{{piece.value.year}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Most Recent Edition</td>
              <td class="font-weight-bolder badge badge-success">
                {{piece.value.mostRecentEdition === piece.value.order ? "Yes" : "No"}}
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Circability</td>
              <td :class="`font-weight-bolder badge badge-${piece.value.mostRecentEdition === piece.value.order ? 'success' : 'danger'}`">                
                {{piece.value.mostRecentEdition === piece.value.order ? "Circuable" : "Outdated"}}
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Type</td>
              <td class="font-weight-bolder">{{piece.value.type}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Unit</td>
              <td class="font-weight-bolder">{{piece.value.name}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Fraction Unit</td>
              <td class="font-weight-bolder">{{piece.value.fractionName}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Fractions Count</td>
              <td class="font-weight-bolder">{{piece.value.fraction}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Value</td>
              <td class="font-weight-bolder">{{piece.value.value}}</td>
            </tr>

            <tr>
              <td class="font-weight-bold">
                USD to JOD Exchange Rate
              </td>
              <td class="font-weight-bolder">JOD 0.71</td>
            </tr>

            <tr>
              <td class="font-weight-bold">
                JOD to USD Exchange Rate
              </td>
              <td class="font-weight-bolder">USD 1.42</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Collection Date</td>
              <td class="font-weight-bolder">{{piece.value.date}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageSection>
  
  <RelatedPieces :pieceId="route.query.id" />
</template>

<script setup>
  import PageSection from "@/components/PageSection";
  import RelatedPieces from "./RelatedPieces";
  import PageHeader from "@/components/PageHeader";
  import { getCurrency } from '@/api/showroom'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()

  definePageMeta({
    layout: "landing",
  });

  const piece = reactive({
    value: {
    name: "Dinar",
    code: "JOD",
    mostRecentEdition: 5,
    fractionName: "Piastre",
    fraction: 100,
    order: 5,
    year: 2022,
    value: 50,
    type: "Banknote",
    fPhoto: "https://static.timesofisrael.com/www/uploads/2023/01/50dinars.jpg",
    bPhoto: "https://upload.wikimedia.org/wikipedia/ar/7/7d/50_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%AE%D9%84%D9%81%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
    date: "Jan 2023",
    count: 1,
    zoneName: "Jordan",
    fullName: "Hashemite Kingdom of Jordan",
    mapCode: "JO",
    continent: "Asia",
    valuePerUSD: 0.71
  },
    update(newCurrency) {
      this.value = newCurrency;
    }
  });

  const getPieceDetails = () => getCurrency(route.query.id).then(res => piece.update(res.data._rawValue.data.attributes));

  getPieceDetails();
</script>
