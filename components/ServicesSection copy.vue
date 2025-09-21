<template>
  <section class="wrapper-section">
    <div class="content-wrapper">
      <p class="title">Servizi</p>
      <ClientOnly>
        <Swiper
          class="cards-wrapper"
          :slides-per-view="'auto'"
          :space-between="16"
          :pagination="{ clickable: true }"
          v-bind="{ modules: [Pagination] }"
          :breakpoints="{
            992: {
              enabled: false, // 👈 così diventa un normale <div>
            },
          }"
        >
          <SwiperSlide class="card-slide">
            <ServiceCard>
              <template #image>
                <NuxtImg
                  class="image"
                  src="/images/brush.webp"
                  alt="Imbianchature professionali"
                />
              </template>
              <template #title>
                <h2>Imbianchature</h2>
              </template>
              <template #text>
                <p class="card-text">
                  Imbiancatura precisa e veloce per case, uffici e locali.
                  Usiamo pitture di qualità, resistenti e lavabili, garantendo
                  ambienti freschi, puliti e un risultato professionale che
                  valorizza ogni spazio.
                </p>
              </template>
              <template #cta>
                <a @click="scrollToContact()" class="cta-text"
                  >RICHIEDI UN PREVENTIVO</a
                >
              </template>
            </ServiceCard>
          </SwiperSlide>

          <SwiperSlide class="card-slide">
            <ServiceCard>
              <template #image>
                <NuxtImg
                  class="image"
                  src="/images/verniciature.webp"
                  alt="Verniciature professionali"
                />
              </template>
              <template #title>
                <h2>Verniciature</h2>
              </template>
              <template #text>
                <p class="card-text">
                  Offriamo verniciature professionali per travi in legno,
                  termosifoni, inferriate e cancelli. Utilizziamo prodotti
                  resistenti e di qualità per proteggere le superfici e
                  valorizzarne estetica e durata nel tempo.
                </p>
              </template>
              <template #cta>
                <a @click="scrollToContact()" class="cta-text"
                  >RICHIEDI UN PREVENTIVO</a
                >
              </template>
            </ServiceCard>
          </SwiperSlide>

          <SwiperSlide class="card-slide">
            <ServiceCard>
              <template #image>
                <NuxtImg
                  class="image"
                  src="/images/decor.webp"
                  alt="Decorazioni murali di qualità"
                />
              </template>
              <template #title>
                <h2>Decorazioni</h2>
              </template>
              <template #text>
                <p class="card-text">
                  Decorazioni murali di qualità con materiali selezionati:
                  velature, spatolati, stucchi e finiture materiche. Lavorazioni
                  artigianali che impreziosiscono pareti e soffitti, creando
                  atmosfere uniche e dal design raffinato.
                </p>
              </template>
              <template #cta>
                <a @click="scrollToContact()" class="cta-text"
                  >RICHIEDI UN PREVENTIVO</a
                >
              </template>
            </ServiceCard>
          </SwiperSlide>

          <SwiperSlide class="card-slide">
            <ServiceCard>
              <template #image>
                <NuxtImg
                  class="image"
                  src="/images/muffa.webp"
                  alt="Trattamenti antimuffa professionali"
                />
              </template>
              <template #title>
                <h2>Antimuffa</h2>
              </template>
              <template #text>
                <p class="card-text">
                  Soluzioni efficaci per eliminare muffa da pareti e soffitti.
                  Trattamenti professionali e prodotti specifici garantiscono
                  ambienti più salubri, prevenendo il ritorno della muffa e
                  proteggendo a lungo la tua casa.
                </p>
              </template>
              <template #cta>
                <a @click="scrollToContact()" class="cta-text"
                  >RICHIEDI UN PREVENTIVO</a
                >
              </template>
            </ServiceCard>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
// import { onMounted } from "vue";

import "swiper/css";
import "swiper/css/pagination";

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// onMounted(() => {
//   window.scrollTo(0, 0);
// });
</script>

<style scoped>
.wrapper-section {
  background-color: var(--clr-secondary);
  width: 100%;
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
    display: flex;
    justify-content: space-between;
    padding-right: 0;
    padding-bottom: 3rem;
    border: 1px solid red;
    /* gap: 5px; */
  }

  /* card */

  .card-slide {
    width: 300px; /* più contenuta su desktop */
  }
}
</style>
