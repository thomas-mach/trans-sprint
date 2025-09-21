<template>
  <ScreenLock>
    <div id="layout-wrapper">
      <header
        id="header"
        :class="[
          'header',
          { 'header-shadow': hasScrolled, 'header-hidden': !isVisible },
        ]"
      >
        <HeaderSite />
      </header>

      <section id="hero">
        <HeroSection />
      </section>
    </div>

    <main class="main">
      <slot />
    </main>
  </ScreenLock>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useUIStore } from "../stores/ui";

const ui = useUIStore();
const hasScrolled = ref(false);
const isVisible = ref(true);
let lastScroll = ref(0);

const handleScroll = () => {
  const current = window.scrollY;
  hasScrolled.value = window.scrollY > 10;

  if (current < 200) {
    isVisible.value = true;
  } else if (current > lastScroll) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }

  lastScroll = current;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

onMounted(() => {
  watch(
    () => ui.showNav,
    (newVal) => {
      if (process.client) {
        // <-- controlla che siamo sul client
        if (newVal) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }
    },
    { immediate: true }
  );
});
</script>

<style scoped>
/* --- Layout wrapper --- */
#layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100svh;
  width: 100vw;
  overflow-x: hidden;
}

/* --- Header --- */
#header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--clr-white);
  transition:
    box-shadow 0.3s ease,
    transform 0.5s ease;
}

.header-shadow {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.header-hidden {
  transform: translateY(-100%);
}

/* --- Hero section --- */
#hero {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(
    to bottom,
    var(--clr-white) 20%,
    var(--clr-primary)
  );
  font-family: "Montserrat";
  color: var(--clr-black);
  overflow-x: hidden;
}

/* >>>>>>>>> MEDIA <<<<<<<<< */

/* Desktop */
@media (min-width: 992px) {
  #layout-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    /* overflow-x: hidden; */
    height: auto;
    width: auto;
    /* border: 1px solid red; */
    background: linear-gradient(
      to bottom,
      var(--clr-white) 20%,
      var(--clr-primary)
    );
  }

  #hero {
    flex-grow: 0;
    max-width: 1280px;
    margin: 0 auto;
    background: transparent;
    /* border: 1px solid yellow; */
  }

  #header {
    width: 1280px;
    left: 50%; /* posizione iniziale al 50% della finestra */
    transform: translateX(-50%);
    position: relative;
  }

  .header-shadow {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }

  .main {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
