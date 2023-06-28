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

      <div class="container py-7 pt-8 postion-relative z-index-2">
        <div class="mx-auto text-center my-4">
          <h4 class="text-white my-4">Get Your Showroom</h4>

          <p class="text-white">
            If you are interested to have your own CCS, follow the steps below
            to get it. Don't worry, even if you are not a developer, you could
            still build your own copy.
          </p>
        </div>
      </div>
    </div>

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
          <h4 class="my-4">Option 1</h4>

          <div id="accordionOne" class="accordion">
            <accordion-item accordion-id="headingA" collapse-id="collapseA">
              <template #question>Step 1</template>

              <template #answer>
                <p class="text-justify">
                  If you don't have a github account, create one from
                  <a
                    href="https://github.com/signup"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    here.
                  </a>
                </p>
              </template>
            </accordion-item>

            <accordion-item accordion-id="headingB" collapse-id="collapseB">
              <template #question>Step 2</template>

              <template #answer>
                <p class="text-justify">
                  Then you are to fork (duplicate) both of my github
                  repositories
                  <a
                    href="https://github.com/makkahwi/currencies-showroom-client/"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    one </a
                  >&<a
                    href="https://github.com/makkahwi/currencies-showroom-server"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    two
                  </a>
                  into your account. You can fork a repository following
                  <a
                    href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    these instructions.</a
                  >
                </p>
              </template>
            </accordion-item>

            <accordion-item accordion-id="headingC" collapse-id="collapseC">
              <template #question>Step 3</template>

              <template #answer>
                <p class="text-justify">
                  Now your copy of code is ready to be deployed to servers. So
                  let's create a free account on
                  <a
                    href="https://app.netlify.com/signup"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    Netlify
                  </a>
                  to deploy the codes (it's recommended to create Netlify
                  account using github account).
                </p>
              </template>
            </accordion-item>

            <accordion-item accordion-id="headingD" collapse-id="collapseD">
              <template #question>Step 4</template>

              <template #answer>
                <p class="text-justify">
                  It is time to deploy the second repository (the one called
                  "currencies-showroom-server") on Netlify following
                  <a
                    href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    these instructions.</a
                  >
                </p>
              </template>
            </accordion-item>

            <accordion-item accordion-id="headingE" collapse-id="collapseE">
              <template #question>Step 5</template>

              <template #answer>
                <p class="text-justify">
                  Get the URL of the just deployed repository
                  (currencies-showroom-server), then do deploy the other
                  repository following
                  <a
                    href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    same instructions.</a
                  >
                  But while deploying, add an environment variable of following
                  values
                </p>

                <p class="text-justify">"BACKEND_URL"="your-url-here"</p>
              </template>
            </accordion-item>

            <accordion-item accordion-id="headingF" collapse-id="collapseF">
              <template #question>Step 6</template>

              <template #answer>
                <p class="text-justify">
                  Get the URL of the just deployed repository
                  (currencies-showroom-client), then get back to the settings of
                  "currencies-showroom-server" and add an environment variable
                  of following values
                </p>

                <p class="text-justify">"FRONTEND_URL"="your-url-here"</p>

                <p class="text-justify">N this was it. You are ready to go.</p>
              </template>
            </accordion-item>
          </div>
        </div>

        <div class="mx-auto col-md-5">
          <h4 class="my-4">Option 2</h4>

          <div id="accordionTwo" class="accordion">
            <accordion-item accordion-id="headingOne" collapse-id="collapseOne">
              <template #question>Step 1</template>

              <template #answer>
                <p class="text-justify">
                  Create a free account on
                  <a
                    href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    this first service.
                  </a>
                </p>
              </template>
            </accordion-item>

            <accordion-item accordion-id="headingTwo" collapse-id="collapseTwo">
              <template #question>Step 2</template>

              <template #answer>
                <p class="text-justify">
                  Download
                  <a
                    href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    this file
                  </a>
                  and upload it to an account of the created first service.
                </p>
              </template>
            </accordion-item>

            <accordion-item
              accordion-id="headingThree"
              collapse-id="collapseThree"
            >
              <template #question>Step 3</template>

              <template #answer>
                <p class="text-justify">
                  Create a free account on
                  <a
                    href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    this second service.
                  </a>
                </p>
              </template>
            </accordion-item>

            <accordion-item
              accordion-id="headingFour"
              collapse-id="collapseFour"
            >
              <template #question>Step 4</template>

              <template #answer>
                <p class="text-justify">
                  Download
                  <a
                    href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository"
                    target="_blank"
                    class="text-decoration-underline"
                  >
                    this file
                  </a>
                  and upload it to an account of the created second service.
                </p>
              </template>
            </accordion-item>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </main>
</template>

<script setup>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
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
