export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    preset: "static",
    compressPublicAssets: true,
  },
  css: ["~/assets/main.css"],

  fonts: {
    defaults: {
      weights: [100, 200, 400, 600],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
    },
    families: [{ name: "Montserrat", provider: "google" }],
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@pinia/nuxt",
    "@nuxt/fonts",
  ],
});
