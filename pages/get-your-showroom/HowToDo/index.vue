<template>
  <div class="container my-6">
    <div class="mt-8 row">
      <div class="mx-auto text-center col-md-6">
        <h3>How To Do</h3>
      </div>
    </div>

    <div class="row">
      <div class="mx-auto my-3 mb-5 col-md-11 text-justify">
        <p>
          There are two possible options to build your own copy of CCS at the
          time, and later on we'll offer more options. Both options are about
          acquiring free-of-charge servers to host your CCS, n then easily
          deploy the code to the servers to start inserting your own data.
        </p>
      </div>

      <div class="mx-auto col-md-5">
        <Option1 />
      </div>

      <div class="mx-auto col-md-5">
        <Option2 />
      </div>
    </div>
  </div>
</template>

<script setup>
import Option1 from "./Option1";
import Option2 from "./Option2";

definePageMeta({
  layout: false,
});
</script>
