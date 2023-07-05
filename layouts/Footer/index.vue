<template>
  <footer class="py-5 footer">
    <div class="container">
      <div class="row">
        <div class="mx-auto mb-4 text-center col-lg-8">
          <NuxtLink
            to="/"
            class="mb-2 text-secondary me-xl-5 mx-2 mb-sm-0"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/my-showroom"
            class="mb-2 text-secondary me-xl-5 mx-2 mb-sm-0"
          >
            My Showroom
          </NuxtLink>

          <NuxtLink
            to="/get-your-showroom"
            class="mb-2 text-secondary me-xl-5 mx-2 mb-sm-0"
          >
            Get Your Showroom
          </NuxtLink>
        </div>

        <div class="mx-auto my-4 text-center col-lg-8">
          <a
            href="https://www.github.com/arromi.creatives"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-github"></span>
          </a>

          <a
            href="https://www.linkedin.com/arromi.creatives"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-linkedin"></span>
          </a>

          <a
            href="https://www.facebook.com/arromi.creatives"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-facebook"></span>
          </a>

          <a
            href="https://www.instagram.com/arromi.creatives"
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
            href="mailto:arromi.creatives@gmail.com"
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
            <a href="https://arromi.net/" target="_blank" class="text-secondary"
              >Arromi Creatives</a
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
