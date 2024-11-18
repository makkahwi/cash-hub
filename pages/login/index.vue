<template>
  <div class="mb-6">
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11"
      :style="{
        backgroundImage: 'url(' + headerImg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }"
    ></div>

    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-5 col-lg-6 col-md-7 mx-auto">
          <div class="card bg-light">
            <div class="card-body text-center">
              <div class="info mb-4 mt-n6">
                <img
                  class="avatar avatar-xxl shadow-lg border border-white"
                  alt="Image placeholder"
                  src="@/assets/img/brand/logo.jpg"
                />
              </div>

              <p class="my-3">
                Enter email & password to access your dashboard
              </p>

              <form @submit.prevent="handleLogin">
                <ArgonInput
                  type="email"
                  v-model="email"
                  placeholder="Enter your email"
                  required
                />

                <ArgonInput
                  type="password"
                  v-model="password"
                  placeholder="Enter your password"
                  required
                />

                <div class="text-center">
                  <ArgonButton
                    type="submit"
                    color="success"
                    size="lg"
                    class="mt-3 mb-0"
                  >
                    Access
                  </ArgonButton>
                </div>
              </form>

              <!-- <NuxtLink to="/login">
                <p class="mt-4 text-muted text-sm">
                  Get Password Reset Link @ Your Email
                </p>
              </NuxtLink> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import headerImg from "@/assets/img/currencies.jpg";
import { ref } from "vue";
import { login } from "~~/api/auth";

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response = await login(email.value, password.value);
    window.location.reload();
    window.location.href = "/dashboard";

    console.log("Login successful:", response);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};

definePageMeta({
  layout: "landing",
  middleware: "public",
});
</script>
