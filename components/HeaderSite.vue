<template>
  <div class="wrapper">
    <div class="nav-logo-wrapper">
      <div class="logo">
        <NuxtImg src="/images/logo.svg" alt="Logo" />
      </div>

      <button
        class="btn nav-toggle"
        :class="{ 'nav-open': ui.showNav }"
        @click="ui.toggleNav"
      >
        <span class="hamburger"></span>
      </button>
    </div>
  </div>

  <!-- Menu fuori dal wrapper -->
  <transition name="slide-down">
    <div v-if="ui.showNav" class="menu">
      <Nav />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useUIStore } from "../stores/ui";
const ui = useUIStore();
</script>

<style scoped>
/* Containers */

.wrapper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--clr-black);
  background-color: white;
  z-index: 99999;
  position: relative;
}

.nav-logo-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.wrapper-contacts {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Typografy */

.logo-title {
  font-family: "Montserrat";
  font-weight: 700;
  font-style: normal;
  font-size: 1.125rem;
  letter-spacing: 0.25rem;
}

.logo-subtitle {
  font-family: "inter";
  font-weight: 400;
  font-style: normal;
  font-size: 0.75rem;
  letter-spacing: 0.25rem;
}

.icon {
  font-size: 1.5rem;
}

.logo {
  width: 200px;
}

/* .header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
} */

.btn {
  /* padding: 0.5em; */
  background: transparent;
  border: 0;
  padding: 0;
}

/* HAMBURGER */
.hamburger {
  background: black;
  width: 2em;
  height: 3px;
  border-radius: 1em;
  display: block;
  position: relative;
  /* z-index: 1000; */
}

.hamburger,
.hamburger::before,
.hamburger::after {
  background: black;
  width: 2em;
  height: 3px;
  border-radius: 1em;
  transition: transform 250ms ease-in-out;
}

.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
}

.hamburger::before {
  top: 6px;
}

.hamburger::after {
  bottom: 6px;
}

.hamburger {
  background: black;
  width: 2em;
  height: 3px;
  border-radius: 1em;
  display: block;
  position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  background: black;
  width: 2em;
  height: 3px;
  border-radius: 1em;
  transition: transform 250ms ease-in-out;
}
.nav-open .hamburger {
  transform: rotate(0.625turn);
}
.nav-open .hamburger::before {
  transform: rotate(90deg) translateX(-6px);
}

.nav-open .hamburger::after {
  opacity: 0;
}

/* Menu */
.menu {
  position: absolute; /* necessario per z-index e movimento */
  top: 100%; /* subito sotto il wrapper/logo */
  left: 0;
  width: 100%;
  background-color: white; /* tutto il menu ha lo stesso sfondo */
  overflow: hidden;
  z-index: 9;
}

/* Transizione slide-down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0%);
  opacity: 1;
}

.slide-down-leave-from {
  transform: translateY(0%);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
