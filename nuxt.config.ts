export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false }, // Disabilita devtools in produzione

  // ✅ Static Site Generation
  ssr: true, // IMPORTANTE: anche per SSG deve restare true!
  nitro: {
    preset: "netlify", // Abilita build completamente statica
    compressPublicAssets: true, // gzip per performance
  },

  // ✅ Assets CSS
  css: ["~/assets/main.css"],

  // ✅ SEO miglioramenti automatici
  app: {
    head: {
      htmlAttrs: { lang: "it" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          charset: "utf-8",
        },
        {
          name: "description",
          content:
            "Specializzati in verniciature, tinteggiature e finiture di pregio a Padova. Affidati a Revio per lavori di qualità.",
        },
        { name: "robots", content: "index, follow" },
      ],
    },
  },

  // ✅ Moduli
  modules: [
    "@nuxt/eslint",
    // "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    // "@nuxtjs/robots",
    // "@nuxtjs/sitemap",
    "@pinia/nuxt",
  ],
});
