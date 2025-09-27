<template>
  <div class="wrapper-card">
    <div class="wrapper-image">
      <slot name="image" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper-card {
  height: 100%;
  width: 100%;
  /* background-color: var(--clr-primary); */
  border-radius: 24px;
  /* box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3); */
  /* border: 2px solid green; */
}

.wrapper-image {
  overflow: hidden;
  width: 100%;
  height: 100%;
  /* display: flex;
justify-content: center;
  align-items: center; */
}

/* Stile per l'immagine dentro lo slot */
.wrapper-image ::v-deep(img),
.wrapper-image ::v-deep(nuxt-img) {
  /* width: 100%; */
  /* height: 100%; */
  /* object-fit: scale-down;

  object-position: bottom; */
}
/* cover, contain, fill, scale-down */
/* top, bottom, left, right, X% Y% */

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
