<template>
  <div v-if="isDesktop" class="overlay">
    <p>
      La versione per tablet è in fase di sviluppo. Usa mobile o desktop per
      accedere.
    </p>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isDesktop = ref(false);

const checkScreen = () => {
  isDesktop.value = window.innerWidth > 550 && window.innerWidth < 992; // imposti la soglia per "desktop"
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
  z-index: 9999;
}

p {
  font-family: "Montserrat";
  font-size: 2rem;
}
</style>
