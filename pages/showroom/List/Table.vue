<template>
  <div class="table-responsive">
    <table class="table table-flush">
      <thead class="thead-light">
        <tr>
          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Photo
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Type
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Continent
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Nation / Area
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Value
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Currency Name
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Circability
          </th>

          <th
            v-if="!notShowroom"
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Collected @
          </th>

          <th
            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
          >
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="align-middle"
          v-for="(
            {
              id,
              dbId,
              name,
              flag,
              code,
              mostRecentEdition,
              fractionName,
              fraction,
              edition,
              year,
              value,
              type,
              fPhoto,
              current,
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
          ) of currencies"
          :key="i"
        >
          <td class="text-sm font-weight-normal">
            <img
              :src="fPhoto || bPhoto"
              class="w-100"
              :style="{ maxWidth: '150px' }"
            />
          </td>
          <td class="text-sm font-weight-normal">{{ type }}</td>
          <td class="text-sm font-weight-normal">{{ continent }}</td>
          <td class="text-sm font-weight-normal">
            <img :src="flag" height="15px" /> {{ zoneName }}
          </td>
          <td class="text-sm font-weight-normal">
            {{ value.toLocaleString() }}
          </td>
          <td class="text-sm font-weight-normal">{{ name }}</td>
          <td :class="`text-sm fw-bold text-${current ? 'success' : 'danger'}`">
            {{ renderStatusLabel(current) }}
          </td>
          <td class="text-sm font-weight-normal" v-if="!notShowroom">
            {{ date }}
          </td>
          <td class="text-sm font-weight-normal">
            <div v-if="loggedIn && !notShowroom" class="btn-group">
              <NuxtLink
                class="btn btn-success btn-sm px-2"
                :to="{
                  path: '/piece-details',
                  query: { id, notShowroom },
                }"
              >
                <i class="fas fa-eye" />{{ " | " }}
                <i class="fas fa-edit" />
              </NuxtLink>

              <button
                class="btn btn-danger btn-sm px-2"
                @click="deleteRecord(dbId)"
              >
                <i class="fas fa-trash" />
              </button>
            </div>

            <div v-else class="btn-group">
              <NuxtLink
                class="btn btn-primary btn-sm"
                :to="{
                  path: '/piece-details',
                  query: { id, notShowroom },
                }"
              >
                View
              </NuxtLink>

              <button
                class="btn btn-success btn-sm px-2"
                @click="setWishList(id)"
                v-if="notShowroom"
              >
                {{ inWishList(id) ? "WishList Remove" : "WishList Add" }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { deleteCollectedCurrency } from "@/api/showroom";
import { useWishlist } from "@/composables/useWishlist";
import { renderStatusLabel } from "@/utils/functions";

const { inWishList, setWishList } = useWishlist();

const deleteRecord = (id) => {
  deleteCollectedCurrency(id).then(() => {
    window.location.reload();
  });
};

const loggedIn =
  process.client && JSON.parse(localStorage.getItem("user"))?.idToken;

defineProps({
  currencies: {
    type: Array,
    default: [],
  },
  notShowroom: {
    type: Boolean,
    required: false,
  },
});
</script>
