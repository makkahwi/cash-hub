<template>
  <PageSection subtitle="Related Pieces">
    <div class="table table-responsive">
      <table class="table align-items-center mb-0 text-center">
        <thead>
          <tr>
            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-start"
            >
              Type
            </th>

            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Unit
            </th>

            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Value
            </th>

            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Circability
            </th>

            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Collection Date
            </th>

            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Details
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(
              {
                id,
                name,
                code,
                mostRecentEdition,
                fractionName,
                fraction,
                edition,
                year,
                value,
                type,
                status,
                fPhoto,
                bPhoto,
                date,
                count,
                zoneName,
                fullName,
                mapCode,
                continent,
                usdToLocalNow,
                usdToLocalAtIssueTime,
                usdToLocalAtCollectionTime,
              },
              i
            ) of list.value"
            :key="i"
          >
            <td>
              <div class="d-flex py-1">
                <div>
                  <img :src="fPhoto" class="avatar avatar-md w-100" />
                </div>

                <div class="d-flex flex-column justify-content-center ms-3">
                  <h6 class="mb-0 text-sm">{{ type }}</h6>
                </div>
              </div>
            </td>

            <td>
              <p class="text-sm text-secondary mb-0">{{ name }}</p>
            </td>

            <td>{{ value }}</td>

            <td
              :class="`align-middle text-sm fw-bold text-${
                status === 'Current' ? 'success' : 'danger'
              }`"
            >
              {{ status }}
            </td>

            <td class="align-middle">
              <span class="text-secondary text-sm">{{ date }}</span>
            </td>

            <td class="align-middle text-sm">
              <NuxtLink
                class="btn btn-success btn-sm text-white"
                :to="{
                  path: '/showroom/piece-details',
                  query: { id },
                }"
                external
              >
                View
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
// import { getRelatedCurrencies } from "@/api/showroom";

const list = reactive({
  value: [
    {
      name: "Dinar",
      code: "JOD",
      mostRecentEdition: 5,
      fractionName: "Piastre",
      fraction: 100,
      edition: 5,
      year: 2022,
      value: 50,
      type: "Banknote",
      fPhoto:
        "https://static.timesofisrael.com/www/uploads/2023/01/50dinars.jpg",
      bPhoto:
        "https://upload.wikimedia.org/wikipedia/ar/7/7d/50_%D8%AF%D9%8A%D9%86%D8%A7%D8%B1_%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%8C_%D8%A7%D9%84%D9%88%D8%AC%D9%87_%D8%A7%D9%84%D8%AE%D9%84%D9%81%D9%8A%D8%8C_%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3_%282022%29.png",
      date: "Jan 2023",
      count: 1,
      zoneName: "Jordan",
      fullName: "Hashemite Kingdom of Jordan",
      mapCode: "JO",
      continent: "Asia",
      usdToLocalNow: 0.71,
      usdToLocalAtIssueTime: 0.71,
      usdToLocalAtCollectionTime: 0.71,
    },
  ],
  update(newCurrencies) {
    this.value = newCurrencies;
  },
});

const props = defineProps({
  pieceId: {
    type: Number,
    default: 0,
  },
});

// const getRelatedList = () =>
//   getRelatedCurrencies(props.pieceId).then((res) =>
//     list.update(
//       res.data._rawValue.data.map(({ attributes, id }) => ({
//         id,
//         ...attributes,
//       }))
//     )
//   );

// getRelatedList();
</script>
