<template>
  <div>
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

      <accordion-item accordion-id="headingThree" collapse-id="collapseThree">
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

      <accordion-item accordion-id="headingFour" collapse-id="collapseFour">
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
</template>

<script setup>
import AccordionItem from "@/pagesComponents/pages/pricing//AccordionItem.vue";

definePageMeta({
  layout: false,
});
</script>
