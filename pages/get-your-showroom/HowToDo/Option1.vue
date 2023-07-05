<template>
  <div>
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
            Then you are to fork (duplicate) both of my github repositories
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
            Now your copy of code is ready to be deployed to servers. So let's
            create a free account on
            <a
              href="https://app.netlify.com/signup"
              target="_blank"
              class="text-decoration-underline"
            >
              Netlify
            </a>
            to deploy the codes (it's recommended to create Netlify account
            using github account).
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
            (currencies-showroom-server), then do deploy the other repository
            following
            <a
              href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository"
              target="_blank"
              class="text-decoration-underline"
            >
              same instructions.</a
            >
            But while deploying, add an environment variable of following values
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
            "currencies-showroom-server" and add an environment variable of
            following values
          </p>

          <p class="text-justify">"FRONTEND_URL"="your-url-here"</p>

          <p class="text-justify">N this was it. You are ready to go.</p>
        </template>
      </accordion-item>
    </div>
  </div>
</template>

<script setup>
import AccordionItem from "@/pagesComponents/pages/pricing//AccordionItem";
</script>
