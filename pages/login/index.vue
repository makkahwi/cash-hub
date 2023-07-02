<template>
  <div>
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11"
      :style="{
        backgroundImage: 'url(' + headerImg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
    </div>

    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-7 mx-auto">
          <div class="card bg-light">
            <div class="card-body text-center">
              <div class="info mb-4 mt-n6">
                <img
                  class="avatar avatar-xxl shadow-lg border border-white"
                  alt="Image placeholder"
                  src="@/assets/img/profile.jpg"
                />
              </div>

              <h4 class="mb-0 font-weight-bolder">Suhaib Ahmad</h4>

              <p class="my-3">Enter password to access your dashboard</p>

              <form role="form">
                <ArgonInput
                  id="password"
                  type="password"
                  placeholder="Password"
                  aria-label="password"
                />

                <div class="text-center">
                  <ArgonButton
                    type="button"
                    color="success"
                    variant="gradient"
                    size="lg"
                    class="mt-3 mb-0"
                  >
                    Access
                  </ArgonButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import headerImg from "@/assets/img/currencies.jpg";

definePageMeta({
  layout: "landing",
});
</script>
