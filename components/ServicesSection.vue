<template>
  <section class="wrapper-section">
    <div class="content-wrapper">
      <p class="title">Nasze linie...</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper-section {
  background-color: var(--clr-primary);
  width: 100%;
  height: 1000px;
  padding-left: 5%;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  position: relative;
}

.cards-wrapper {
  display: flex;
  padding-right: 5%;
  padding-bottom: 3rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.title {
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  font-family: "Montserrat";
  color: var(--clr-white);
}

.card-slide {
  width: 85%;
}

/* navigation bulets */
:deep(.swiper-pagination) {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 8px;
}

:deep(.swiper-pagination-bullet) {
  width: 1rem;
  height: 1rem;
  background-color: var(--clr-white);
  opacity: 0.5;
  border-radius: 50%;
  transition: all 0.3s;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  transform: scale(1.2);
}

.wrapper-cta {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-text {
  display: block;
  margin: 0 auto;
  text-align: center; /* ora funziona perché l’a diventa block */
  width: fit-content; /* opzionale per adattarsi al contenuto */
}

/* >>>>>>>>>>>> MEDIA <<<<<<<<<<<< */

@media (min-width: 992px) {
  /* wrappers */

  .wrapper-section {
    background-color: var(--clr-primary);
    width: 100%;
    padding-left: 0;
    padding-top: 2.5rem;
    padding-bottom: 4.5rem;
    position: relative;
  }

  .content-wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }

  .cards-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    justify-content: space-between;
    padding-right: 0;
    padding-bottom: 3rem;
    overflow-x: auto;
  }

  /* card */

  .card-slide {
    max-width: 300px; /* più contenuta su desktop */
    min-width: 300px;
  }

  /* typografy */

  .title {
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    font-family: "Montserrat";
    color: var(--clr-white);
  }
}
</style>
