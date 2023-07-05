<template>
  <div class="overflow-hidden">
    <nav
      class="navbar navbar-expand-lg top-0 start-3 end-3 z-index-5 position-fixed mt-4 bg-gradient-success rounded-3 shadow-none"
    >
      <div class="container">
        <NuxtLink
          class="navbar-brand font-weight-bolder text-black"
          to="/"
        >
          CCS
        </NuxtLink>

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
            <li 
              v-for="({to, title}, i) of links"
              class="mx-2 nav-item dropdown dropdown-hover"
              :key="i"
            >
              <NuxtLink
                :to="to"
                class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center text-dark"
              >
                {{title}}
              </NuxtLink>
            </li>

            <li class="mx-2 nav-item dropdown dropdown-hover">
              <NuxtLink
                to="/dashboards/default"
                class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center text-dark"
              >
                Dashboard
              </NuxtLink>
            </li>
          </ul>

          <ul class="navbar-nav d-lg-block d-none">
            <li class="nav-item">
              <NuxtLink
                to="/login"
                class="mb-0 btn btn-sm me-1 bg-white text-dark"
                onclick="smoothToPricing('pricing-soft-ui')"
              >
                Login
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import { links } from "@/consts.js"
</script>