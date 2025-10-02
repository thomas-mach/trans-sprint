import { defineStore } from "pinia";
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";

export const useUIStore = defineStore("ui", () => {
  const showNav = ref(false);
  const accordionsState = ref({
    krasnystawLub: false,
    lopiennikLub: false,
    fajslawiceLub: false,
    piaskiLub: false,
    lublinLub: false,
    krasnystawKra: false,
    lopiennikKra: false,
    fajslawiceKra: false,
    piaskiKra: false,
    lublinKra: false,
  });

  const toggleNav = () => {
    showNav.value = !showNav.value;
    if (showNav.value) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  function toggleAccordion(name: keyof typeof accordionsState.value) {
    // Inverte lo stato dell'accordion selezionato
    accordionsState.value[name] = !accordionsState.value[name];
  }

  function closeKraAccordions() {
    accordionsState.value.krasnystawLub = false;
    accordionsState.value.lopiennikLub = false;
    accordionsState.value.fajslawiceLub = false;
    accordionsState.value.piaskiLub = false;
    accordionsState.value.lublinLub = false;
  }

  function closeLubAccordions() {
    accordionsState.value.krasnystawKra = false;
    accordionsState.value.lopiennikKra = false;
    accordionsState.value.fajslawiceKra = false;
    accordionsState.value.piaskiKra = false;
    accordionsState.value.lublinKra = false;
  }

  return {
    showNav,
    toggleNav,
    accordionsState,
    toggleAccordion,
    closeKraAccordions,
    closeLubAccordions,
  };
});
