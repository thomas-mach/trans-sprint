import { defineStore } from "pinia";
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";

export const useUIStore = defineStore("ui", () => {
  const showNav = ref(false);
  const accordionsState = ref({
    krasnystaw: false,
    lopiennik: false,
    fajslawice: false,
    piaski: false,
    lublin: false,
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

  return {
    showNav,
    toggleNav,
    accordionsState,
    toggleAccordion,
  };
});
