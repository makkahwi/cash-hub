<template>
  <PageSection bg="light" p="5 px-8" m="0 mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <NuxtLink
          v-for="({to, title}, i) of links"
          :to="to"
          class="text-secondary mx-2"
          :key="i"
        >
          {{title}}
        </NuxtLink>
      </div>

      <div class="col-lg-8 my-5 text-center">
        <a
          v-for="({link, icon}, i) of socialMediaLinks"
          :href="link"
          target="_blank"
          class="text-secondary me-4"
          :key="i"
        >
          <span :class="`text-lg ${icon}`"></span>
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
  import { links, socialMediaLinks } from "@/consts.js"
</script>
