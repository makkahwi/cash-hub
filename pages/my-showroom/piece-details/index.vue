<template>
  <HeaderSection />

  <PageSection title="Piece Details">
    <div class="row">
      <div class="text-center col-xl-5 col-lg-6">
        <img
          class="shadow-lg w-100 border-radius"
          src="https://static.timesofisrael.com/www/uploads/2023/01/50dinars.jpg"
          alt="front"
        />

        <img
          class="shadow-lg w-100 border-radius mt-4"
          src="https://upload.wikimedia.org/wikipedia/ar/7/7d/50_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%AE%D9%84%D9%81%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png"
          alt="back"
        />
      </div>

      <div class="mx-auto col-lg-5 text-start">
        id {{ this.$route.query.id }}

        <h3 class="mt-4 mt-lg-0">JOD 50</h3>

        <table class="w-100 table-responsive">
          <tbody>
            <tr>
              <td class="font-weight-bold">Continent</td>
              <td class="font-weight-bolder">Asia</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Nation</td>
              <td class="font-weight-bolder">Jordan</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Currency</td>
              <td class="font-weight-bolder">JOD</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Edition No.</td>
              <td class="font-weight-bolder">4th</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Edition Issue Year</td>
              <td class="font-weight-bolder">2022</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Most Recent Edition</td>
              <td class="font-weight-bolder badge badge-success">
                Yes
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Circability</td>
              <td class="font-weight-bolder badge badge-success">
                Circuable
              </td>
            </tr>

            <tr>
              <td class="font-weight-bold">Type</td>
              <td class="font-weight-bolder">Banknote</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Unit</td>
              <td class="font-weight-bolder">Dinar</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Fraction Unit</td>
              <td class="font-weight-bolder">Piastre</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Fractions Count</td>
              <td class="font-weight-bolder">100</td>
            </tr>

            <tr>
              <td class="font-weight-bold">Value</td>
              <td class="font-weight-bolder">50</td>
            </tr>

            <tr>
              <td class="font-weight-bold">
                USD Exchange Rate Status
              </td>
              <td class="font-weight-bolder">Flexible</td>
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
              <td class="font-weight-bolder">Feb 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageSection>
  
  <related-pieces />
</template>

<script setup>
import PageSection from "../../../components/PageSection";
import RelatedPieces from "./RelatedPieces";
import HeaderSection from "../Header";

definePageMeta({
  layout: "landing",
});
</script>
