<template>
  <PageSection title="How To Do">
    <div class="row">
      <div class="col-md-12 mb-5">
        <p class="text-justify">
          There are two possible options to build your own copy of CCS at the
          time, and later on we'll offer more options. Both options are about
          acquiring free-of-charge servers to host your CCS, n then easily
          deploy the code to the servers to start inserting your own data.
        </p>
      </div>

      <div class="col-md-6">
        <Option1 />
      </div>

      <div class="col-md-6">
        <Option2 />
      </div>
    </div>
  </PageSection>
</template>


<script setup>
import PageSection from "@/components/PageSection";
import Option1 from "./Option1";
import Option2 from "./Option2";

definePageMeta({
  layout: false,
});
</script>
