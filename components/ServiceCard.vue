<template>
  <div class="wrapper-card">
    <div class="wrapper-image">
      <slot name="image" />
    </div>
    <!-- <div class="divider"></div> -->
    <div class="wrapper-title">
      <slot name="title" />
    </div>
    <div class="wrapper-text">
      <slot name="text" />
    </div>
    <!-- <div class="divider"></div> -->
    <div class="wrapper-cta">
      <slot name="cta" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper-card {
  min-width: 100%;
  max-width: 100%;
  height: 570px;
  background-color: var(--clr-primary);
  color: var(--clr-white);
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
  border-radius: 24px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
}

.wrapper-image {
  width: 100%;
  height: 33%;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  overflow-x: hidden;
  /* margin-bottom: 1rem; */
}

.wrapper-title {
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: -1px;
  font-style: italic;
  padding-left: 0.75rem;
  margin-bottom: 0.75rem;
  margin-top: 1rem;
}

.wrapper-text {
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 0 0.75rem 1rem;
  line-height: 1.4;
}

.wrapper-cta {
  margin-top: auto;
  padding: 0 1rem;
  background-color: var(--clr-accent);
  width: 100%;
  height: 83px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 2px;
  color: var(--clr-black);
}

.divider {
  width: 100%;
  height: 2px;
  background-color: var(--clr-secondary);
}

/* >>>>>>>>>>>> MEDIA <<<<<<<<<<<< */

@media (min-width: 992px) {
  .wrapper-card {
    background-color: var(--clr-secondary);
    min-width: 100%;
    max-width: 100%;
    height: 630px;
  }

  .wrapper-cta:hover {
    background-color: var(--clr-accent-dark);
    cursor: pointer;
  }

  .wrapper-cta {
    transition: background-color 0.3s ease;
  }

  /* typografy */

  .wrapper-text {
    font-size: 1.125rem;
    letter-spacing: 1px;
    padding: 0 0.75rem 1rem;
    line-height: 1.4;
  }
}
</style>
