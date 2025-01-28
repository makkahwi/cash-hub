<template>
  <PageSection
    title="Wish List"
    subtitle="List The Currencies You Wanna Collect Next / Soon"
  >
    <div v-if="currencies.length" class="row justify-content-center g-5">
      <div
        v-for="{
          id,
          fPhoto,
          bPhoto,
          value,
          name,
          zoneName,
        } in currencies.filter(({ id }) => inWishList(id))"
        class="col-md-2"
      >
        <div class="card card-blog card-plain border border-2 p-2 w-100 h-100">
          <div
            class="card-header p-1"
            :style="{
              minHeight: '135px',
            }"
          >
            <img
              :src="fPhoto || bPhoto"
              alt="img-blur-shadow"
              class="shadow-lg img-fluid"
            />
          </div>

          <div class="px-1 pb-0 card-body">
            <p class="mb-2 text-sm text-success text-success">{{ zoneName }}</p>

            <h5 class="mb-4">
              {{ value.toLocaleString() + " " + name }}
            </h5>

            <div class="align-items-center justify-content-center btn-group">
              <NuxtLink
                class="btn btn-xs btn-success"
                :to="{
                  path: '/piece-details',
                  query: { id, noCollection: true },
                }"
              >
                <i class="fas fa-eye" />
              </NuxtLink>

              <button class="btn btn-danger btn-xs" @click="setWishList(id)">
                <i class="fas fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h5 v-else>Nothing Selected yet</h5>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import GridView from "@/pages/showroom/List/Grid";
import { useWishlist } from "@/composables/useWishlist";

const { inWishList, setWishList } = useWishlist();

defineProps({
  currencies: {
    type: Array,
    default: [],
  },
});

definePageMeta({
  layout: "landing",
  middleware: "auth",
});
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
}
</style>
