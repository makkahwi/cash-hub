<template>
  <PageSection title="How To Do">
    <div class="row">
      <div class="col-md-12 mb-5">
        <h5 class="text-justify">
          If you are not a web developer (coder / programmer), we are still working to provide you with an easy approach to build your own showroom.
          If you are a developer, you may visit the <a href="https://github.com/makkahwi/currencies-showroom" target="_blank" class="text-decoration-underline">Github repo</a> and follow instructions there.
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
  import {productName} from "@/consts.js"


  definePageMeta({
    layout: false,
  });
</script>
