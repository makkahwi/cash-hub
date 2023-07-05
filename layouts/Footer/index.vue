<template>
  <PageSection bg="light" p="5 px-8" m="0 mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <NuxtLink
          to="/"
          class="text-secondary mx-2"
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/my-showroom"
          class="text-secondary mx-2"
        >
          My Showroom
        </NuxtLink>

        <NuxtLink
          to="/get-your-showroom"
          class="text-secondary mx-2"
        >
          Get Your Showroom
        </NuxtLink>
      </div>

      <div class="col-lg-8 my-5 text-center">
        <a
          href="https://www.github.com/arromi.creatives"
          target="_blank"
          class="text-secondary me-4"
        >
          <span class="text-lg fab fa-github"></span>
        </a>

        <a
          href="https://www.linkedin.com/arromi.creatives"
          target="_blank"
          class="text-secondary me-4"
        >
          <span class="text-lg fab fa-linkedin"></span>
        </a>

        <a
          href="https://www.facebook.com/arromi.creatives"
          target="_blank"
          class="text-secondary me-4"
        >
          <span class="text-lg fab fa-facebook"></span>
        </a>

        <a
          href="https://www.instagram.com/arromi.creatives"
          target="_blank"
          class="text-secondary me-4"
        >
          <span class="text-lg fab fa-instagram"></span>
        </a>

        <a
          href="https://wasap.my/962788424973"
          target="_blank"
          class="text-secondary me-4"
        >
          <span class="text-lg fab fa-whatsapp"></span>
        </a>

        <a
          href="https://t.me/makkahwi"
          target="_blank"
          class="text-secondary me-4"
        >
          <span class="text-lg fab fa-telegram"></span>
        </a>

        <a
          href="mailto:arromi.creatives@gmail.com"
          target="_blank"
          class="text-secondary me-4"
        >
          <span class="text-lg fa fa-envelope"></span>
        </a>
      </div>
      
      <div class="col-lg-8">
        <p class="text-secondary my-0">
          Crafted with Care by
          <a href="https://arromi.net/" target="_blank" class="text-secondary"
            >Arromi Creatives</a
          >
          ©
          {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </PageSection>
</template>

<script setup>
  import PageSection from "@/components/PageSection"
</script>
