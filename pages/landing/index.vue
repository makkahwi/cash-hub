<template>
  <main class="main-content position-relative max-height-vh-100 h-100">
    <NavbarTransparent />

    <div
      class="page-header position-relative"
      :style="{
        backgroundImage: 'url(' + headerImg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }"
    >
      <span class="mask bg-gradient-dark opacity-7" />

      <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
        <div class="row">
          <div class="mx-auto text-left col-md-6 my-4">
            <h2 class="text-white my-4">
              Currencies Collection Showroom (CCS)
            </h2>

            <h4 class="text-white my-4 mb-5">
              Are you a currency collector n wanna build an online catalog for
              your collections? This is it
            </h4>

            <NuxtLink to="#about" class="btn btn-success btn-xs mb-0 p-3">
              Find Out More
            </NuxtLink>

            <NuxtLink
              to="/my-showroom"
              class="btn btn-success btn-xs mb-0 mx-3 p-3"
            >
              Browse My Showroom
            </NuxtLink>

            <NuxtLink
              to="/get-your-showroom"
              class="btn btn-white btn-xs mb-0 p-3"
            >
              Build Your Showroom
            </NuxtLink>
          </div>

          <div class="mx-auto text-center col-md-6 my-4">
            <img
              src="@/assets/img/header.png"
              class="navbar-brand-img mb-2 w-100"
              alt="main_logo"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container my-6 text-center" id="about">
      <div class="row">
        <div class="mx-auto col-8">
          <h6 class="opacity-5">About CCS</h6>
        </div>
      </div>

      <div class="mt-4 row">
        <h4 class="text-dark my-4">
          A web app to publish collection of currencies of a collector to all
          over the world
        </h4>

        <p class="text-dark">
          Collectors could clone this project & use it to enlist their
          currencies so the public could browse their showrooms right away.
        </p>
      </div>

      <div class="mt-8">
        <div class="container">
          <div class="tab-content tab-space">
            <div id="monthly" class="tab-pane active">
              <div class="row">
                <div class="mb-4 col-lg-4 mb-lg-0">
                  <ComplexProjectCard
                    icon="ni ni-box-2"
                    title="Full-Detail Listing"
                    description="You may enlist all the details you could imagine about your collections."
                  />
                </div>

                <div class="mb-4 col-lg-4 mb-lg-0">
                  <ComplexProjectCard
                    icon="ni ni-box-2"
                    title="Automated Market Evaluation"
                    description="Once you enlist a currency, the system added up its circular value to total value estimation."
                  />
                </div>

                <div class="mb-4 col-lg-4 mb-lg-0">
                  <ComplexProjectCard
                    icon="ni ni-box-2"
                    title="Best Techs Envolved"
                    description="This has been built with Vue.Js 3 for frontend & Django of Python for backend, which were the best techs to serve the project and its purposes."
                  />
                </div>
              </div>
            </div>

            <div id="annual" class="tab-pane">
              <div class="row">
                <div class="mb-4 col-lg-4 mb-lg-0">
                  <PricingCard
                    badge="Starter"
                    :price="{ currency: '$', value: '119' }"
                    :specifications="[
                      { label: '2 team members', includes: true },
                      { label: '20GB Cloud storage', includes: true },
                      { label: 'Integration help', includes: false },
                      { label: 'Sketch Files', includes: false },
                      { label: 'API Access', includes: false },
                      { label: 'Complete documentation', includes: false },
                    ]"
                    :action="{
                      color: 'dark',
                      route: 'javascript:;',
                      label: 'Join',
                    }"
                  />
                </div>

                <div class="mb-4 col-lg-4 mb-lg-0">
                  <PricingCard
                    badge="premium"
                    :price="{ currency: '$', value: '159' }"
                    :specifications="[
                      { label: '10 team members', includes: true },
                      { label: '40GB Cloud storage', includes: true },
                      { label: 'Integration help', includes: true },
                      { label: 'Sketch Files', includes: true },
                      { label: 'API Access', includes: false },
                      { label: 'Complete documentation', includes: false },
                    ]"
                    :action="{
                      color: 'success',
                      route: 'javascript:;',
                      label: 'Try Premium',
                    }"
                  />
                </div>

                <div class="mb-4 col-lg-4 mb-lg-0">
                  <PricingCard
                    badge="Enterprise"
                    :price="{ currency: '$', value: '399' }"
                    :specifications="[
                      { label: 'Unlimited team members', includes: true },
                      { label: '100GB Cloud storage', includes: true },
                      { label: 'Integration help', includes: true },
                      { label: 'Sketch Files', includes: true },
                      { label: 'API Access', includes: true },
                      { label: 'Complete documentation', includes: true },
                    ]"
                    :action="{
                      color: 'dark',
                      route: 'javascript:;',
                      label: 'Join',
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-8 row">
        <div class="mx-auto text-center col-md-6">
          <h2>Future Works</h2>

          <p>
            This is an open-source project with potential to expand its uses
            (like any other sort of collection showrooming or even other uses
            like photos gallery) and get fund to turn it into a profitable
            project like turning it into a SaaS product.
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto text-center col-md-6 my-4">
      <h4 class="text-dark my-4">You would like to have your own</h4>

      <h2 class="text-success my-4">Currencies Showroom?</h2>

      <p class="text-dark">
        You may visit this link & follow the instructions to build your own
      </p>

      <p class="text-dark">(You don't need to be a coder to do it)</p>

      <NuxtLink
        to="/get-your-showroom"
        class="btn btn-success btn-xs mt-3 mx-3 p-3 px-5"
      >
        Have It Now
      </NuxtLink>
    </div>

    <AppFooter />
  </main>
</template>

<script setup>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import ComplexProjectCard from "~~/pagesComponents/pages/profile/ComplexProjectCard.vue";
import PricingCard from "@/pagesComponents/pages/pricing/PricingCard.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import AccordionItem from "@/pagesComponents/pages/pricing//AccordionItem.vue";
import setNavPills from "@/assets/js/nav-pills.js";

import headerImg from "@/assets/img/currencies.jpg";

definePageMeta({
  layout: false,
});
onMounted(() => {
  setNavPills();
});
</script>
