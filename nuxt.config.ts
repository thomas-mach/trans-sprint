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
    google: {
      families: {
        Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      subsets: ["latin", "latin-ext"],
      display: "swap",
      download: true,
      inject: true,
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@pinia/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/google-fonts",
  ],
});
