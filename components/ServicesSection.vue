<template>
  <section class="wrapper-section">
    <div class="content-wrapper">
      <p class="title">Servizi</p>

      <ClientOnly>
        <!-- MOBILE: Swiper -->
        <Swiper
          v-if="isMobile"
          ref="swiperRef"
          class="cards-wrapper"
          :slides-per-view="'auto'"
          :space-between="16"
          :pagination="{ clickable: true }"
          :modules="[Pagination]"
        >
          <SwiperSlide v-for="card in cards" :key="card.id" class="card-slide">
            <ServiceCard>
              <template #image>
                <NuxtImg class="image" :src="card.image" :alt="card.alt" />
              </template>
              <template #title
                ><h2>{{ card.title }}</h2></template
              >
              <template #text
                ><p class="card-text">{{ card.text }}</p></template
              >
              <template #cta>
                <a @click="scrollToContact()" class="cta-text"
                  >RICHIEDI UN PREVENTIVO</a
                >
              </template>
            </ServiceCard>
          </SwiperSlide>
        </Swiper>

        <!-- DESKTOP: griglia/flex statica -->
        <div v-else class="cards-wrapper desktop">
          <div v-for="card in cards" :key="card.id" class="card-slide">
            <ServiceCard>
              <template #image>
                <NuxtImg class="image" :src="card.image" :alt="card.alt" />
              </template>
              <template #title
                ><h2>{{ card.title }}</h2></template
              >
              <template #text
                ><p class="card-text">{{ card.text }}</p></template
              >
              <template #cta>
                <a @click="scrollToContact()" class="cta-text"
                  >RICHIEDI UN PREVENTIVO</a
                >
              </template>
            </ServiceCard>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    id: 1,
    image: "/images/brush.webp",
    alt: "Imbianchature professionali",
    title: "Imbianchiture",
    text: "Imbiancatura precisa e veloce per case, uffici e locali. Usiamo pitture di qualità, resistenti e lavabili, garantendo ambienti freschi, puliti e un risultato professionale che valorizza ogni spazio.",
  },
  {
    id: 2,
    image: "/images/verniciature.webp",
    alt: "Verniciature professionali",
    title: "Verniciature",
    text: " Offriamo verniciature professionali per travi in legno, termosifoni, inferriate e cancelli. Utilizziamo prodotti resistenti e di qualità per proteggere le superfici e valorizzarne estetica e durata nel tempo.",
  },
  {
    id: 3,
    image: "/images/decor.webp",
    alt: "Decorazioni murali di qualità",
    title: "Decorazioni",
    text: " Decorazioni murali di qualità con materiali selezionati: velature, spatolati, stucchi e finiture materiche. Lavorazioni artigianali che impreziosiscono pareti e soffitti, creando atmosfere uniche e dal design raffinato.",
  },
  {
    id: 4,
    image: "/images/muffa.webp",
    alt: "Trattamenti antimuffa professionali",
    title: "Antimuffa",
    text: " Soluzioni efficaci per eliminare muffa da pareti e soffitti. Trattamenti professionali e prodotti specifici garantiscono ambienti più salubri, prevenendo il ritorno della muffa e proteggendo a lungo la tua casa.",
  },
];

const isMobile = ref(true);
let mq: MediaQueryList;
let onChange: () => void;

onMounted(() => {
  mq = window.matchMedia("(max-width: 991px)"); // mobile < 992px
  onChange = () => (isMobile.value = mq.matches);
  onChange();
  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else mq.addListener(onChange);
});

onBeforeUnmount(() => {
  if (!mq) return;
  if (mq.removeEventListener) mq.removeEventListener("change", onChange);
  else mq.removeListener(onChange);
});

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
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
