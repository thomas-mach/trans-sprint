import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    // Direttiva Vue per aggiungere data-aos solo lato client
    nuxtApp.vueApp.directive("aos", (el, binding) => {
      el.setAttribute("data-aos", binding.value || "fade-up");
    });
  }
});
