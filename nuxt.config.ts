// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "CASH | Currencies Archiving & Sharing Hub",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Currencies Archiving & Sharing Hub by Suhaib Ahmad",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
        },
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://kit.fontawesome.com/42d5adcbca.js",
          async: true,
        },
        {
          type: "text/javascript",
          src: "https://buttons.github.io/buttons.js",
          async: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
          defer: true,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.VUE_APP_FIREBASE_API_KEY || "",
      firebaseDbUrl: process.env.VUE_APP_FIREBASE_DB_URL || "",
    },
  },
  components: {
    global: true,
    dirs: ["~/components/Icons", "~/components"],
  },
  imports: {
    autoImport: true,
  },
  css: [
    "@/assets/css/nucleo-svg.css",
    "@/assets/css/nucleo-icons.css",
    "@/assets/scss/argon-dashboard.scss",
  ],
  modules: ["@pinia/nuxt"],
});
