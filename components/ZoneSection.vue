<template>
  <section class="wrapper-section">
    <div class="content-wrapper">
      <p class="title">Dove opero</p>
      <div class="wrapper-image">
        <NuxtImg
          class="image"
          :src="isMobile ? imageMobile : imageDesktop"
          alt="Mappa area di operatività"
        />
        <div class="radar"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMobile = ref(true);
const imageMobile = "/images/map.webp";
const imageDesktop = "/images/map-desktop.webp";

// funzione di controllo larghezza
function checkIsMobile() {
  isMobile.value = window.innerWidth < 992; // soglia: 992px
}

onMounted(() => {
  checkIsMobile(); // controllo iniziale
  window.addEventListener("resize", checkIsMobile); // aggiorna al resize
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkIsMobile);
});
</script>

<style scoped>
.wrapper-section {
  background-color: var(--clr-secondary);
  width: 100%;
}

.title {
  width: 100%;
  padding: 2.5rem 0 2.5rem 5%;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 2px;
  font-family: "Montserrat";
  color: var(--clr-white);
  background-color: var(--clr-secondary);
}

.wrapper-image {
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
  border-radius: 24px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.radar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: rgba(123, 124, 123, 0.5);
  border: 2px solid var(--clr-secondary);
  transform: translate(-50%, -50%);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.03);
    opacity: 0.3;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
}

@media (min-width: 992px) {
  /* wrappers */

  .content-wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }

  .wrapper-section {
    padding-bottom: 5rem;
  }

  .title {
    padding: 2.5rem 0 2.5rem 0;
    font-size: 3rem;
  }

  .radar {
    width: 500px;
    height: 500px;
  }
}
</style>
