<template>
  <PageSection title="How To Do">
    <div class="row">
      <div class="col-md-12 mb-5">
        <h5 class="text-justify">
          We are still working to provide an easy approach to build your own
          showroom. Yet in the timebeing, you could engage our dear helper of
          <a
            href="https://chat.openai.com/"
            target="_blank"
            class="text-decoration-underline"
            >Chat GPT</a
          >
          to help you do it. Just hand GPT the instructions @
          <a
            href="https://github.com/makkahwi/currencies-collection-showroom/blob/main/README.md"
            target="_blank"
            class="text-decoration-underline"
            >Github repo</a
          >
          and it will help u to do it.
        </h5>

        <!-- <h5 class="text-justify">
          There are two possible options to build your own copy of {{productName.short}} at the
          time, and later on we'll offer more options. Both options are about
          acquiring free-of-charge servers to host your {{productName.short}}, n then easily
          deploy the code to the servers to start inserting your own data.
        </h5> -->
      </div>

      <!-- <div class="col-md-6">
        <Option1 />
      </div>

      <div class="col-md-6">
        <Option2 />
      </div> -->
    </div>
  </PageSection>
</template>

<script setup>
import PageSection from "@/components/PageSection";
import Option1 from "./Option1";
import Option2 from "./Option2";
import { productName } from "@/consts.js";

definePageMeta({
  layout: false,
});
</script>
