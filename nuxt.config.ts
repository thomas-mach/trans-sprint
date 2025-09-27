export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false }, // Disabilita devtools in produzione

  // ✅ Static Site Generation
  ssr: true, // IMPORTANTE: anche per SSG deve restare true!
  nitro: {
    preset: undefined, // usa il default, output in /.output
    compressPublicAssets: true,
  },

  // ✅ Assets CSS
  css: ["~/assets/main.css"],

  // ✅ SEO miglioramenti automatici
  app: {
    baseURL: "/trans-sprint/", // 👈 deve essere il nome della repo
  },

  // ✅ Moduli
  modules: [
    "@nuxt/eslint",
    // "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    // "@nuxt/test-utils",
    // "@nuxtjs/robots",
    // "@nuxtjs/sitemap",
    "@pinia/nuxt",
  ],
});
