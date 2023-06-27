<template>
  <nav
    class="navbar navbar-expand-lg top-0 z-index-3 position-absolute mt-4"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
  >
    <div class="container ps-2 pe-0">
      <NuxtLink
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        :class="darkMode ? 'text-black' : 'text-white'"
        to="/"
        >Currencies Collection Showroom</NuxtLink
      >
      <button
        class="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mt-2 navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        id="navigation"
        class="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0"
      >
        <ul class="mx-auto navbar-nav navbar-nav-hover">
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <NuxtLink
              to="/landing"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
            >
              Home
            </NuxtLink>
          </li>

          <li class="mx-2 nav-item dropdown dropdown-hover">
            <NuxtLink
              to="/my-showroom"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
            >
              My Showroom
            </NuxtLink>
          </li>

          <li class="mx-2 nav-item dropdown dropdown-hover">
            <NuxtLink
              to="/get-your-showroom"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
            >
              Get Your Showroom
            </NuxtLink>
          </li>

          <li class="mx-2 nav-item dropdown dropdown-hover">
            <NuxtLink
              to="/dashboards/default"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
            >
              Dashboard
            </NuxtLink>
          </li>
        </ul>

        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <NuxtLink
              to="/login"
              class="mb-0 btn btn-sm me-1"
              :class="btnBackground ? btnBackground : 'bg-white text-dark'"
              onclick="smoothToPricing('pricing-soft-ui')"
            >
              Login
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";
import bg from "@/assets/img/curved-images/curved8.jpg";
export default {
  name: "Navbar",
  props: {
    btnBackground: {
      type: String,
      default: "",
    },
    isBlur: {
      type: String,
      default: "",
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      downArrWhite,
      downArrBlack,
      bg,
    };
  },
  computed: {
    darkModes() {
      return {
        "text-dark": this.darkMode,
      };
    },
  },
};
</script>
