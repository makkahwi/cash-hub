<template>
  <footer class="py-5 footer">
    <div class="container">
      <div class="row">
        <div class="mx-auto mb-4 text-center col-lg-8">
          <NuxtLink
            to="/dashboards/default"
            class="mb-2 text-secondary me-xl-5 mx-2 mb-sm-0"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/dashboards/default"
            class="mb-2 text-secondary me-xl-5 mx-2 mb-sm-0"
          >
            Showroom
          </NuxtLink>

          <NuxtLink
            to="/dashboards/default"
            class="mb-2 text-secondary me-xl-5 mx-2 mb-sm-0"
          >
            Get Yours
          </NuxtLink>
        </div>

        <div class="mx-auto my-4 text-center col-lg-8">
          <a
            href="https://github.com/makkahwi"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-github"></span>
          </a>

          <a
            href="https://linkedin.com/in/makkahwi/"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-linkedin"></span>
          </a>

          <a
            href="https://facebook.com/makkahwi"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-facebook"></span>
          </a>

          <a
            href="https://instagram.com/makkahwi"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-instagram"></span>
          </a>

          <a
            href="https://wasap.my/962788424973"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-whatsapp"></span>
          </a>

          <a
            href="https://t.me/makkahwi"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-telegram"></span>
          </a>

          <a
            href="mailto:SuhaibAhmadAi@hotmail.com"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fa fa-envelope"></span>
          </a>
        </div>
      </div>

      <div class="row">
        <div class="mx-auto mt-4 text-center col-lg-8">
          <p class="mb-0 text-secondary">
            Crafted with Care by
            <a href="https://suhaib.dev/" target="_blank" class="text-secondary"
              >Suhaib Ahmad</a
            >
            ©
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: "AppFooter" };
</script>
