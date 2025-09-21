<template>
  <div class="wrapper">
    <div class="logo">
      <p class="logo-title">REVIO</p>
      <p class="logo-subtitle">PITTURE</p>
    </div>
    <div class="wrapper-contacts">
      <a href="tel:+393297811979">
        <FontAwesomeIcon :icon="['fas', 'phone']" class="icon" />
      </a>
      <a href="https://wa.me/3297811979" target="_blank" rel="noopener">
        <FontAwesomeIcon :icon="['fab', 'whatsapp']" class="icon" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Containers */

.wrapper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: space-between;
  color: var(--clr-black);
  z-index: 9999;
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

/* .header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
} */
</style>
