<template>
  <div class="wrapper">
    <ClientOnly>
      <Swiper
        class="cards-wrapper"
        :slides-per-view="1.4"
        :space-between="15"
        :centered-slides="true"
        :initial-slide="1"
        :loop="true"
        :autoplay="{ delay: 1800, disableOnInteraction: false }"
        :modules="[Autoplay, EffectCoverflow]"
        :effect="'coverflow'"
        :coverflow-effect="{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :breakpoints="{
          992: {
            enabled: false, // 👈 così diventa un normale <div>
          },
        }"
      >
        <SwiperSlide class="card-slide">
          <ServiceCard>
            <template #image>
              <NuxtImg class="image" src="/images/bus1.jpeg" alt="" />
            </template>
          </ServiceCard>
        </SwiperSlide>

        <SwiperSlide class="card-slide">
          <ServiceCard>
            <template #image>
              <NuxtImg class="image" src="/images/bus2.jpeg" alt="" />
            </template>
          </ServiceCard>
        </SwiperSlide>

        <SwiperSlide class="card-slide">
          <ServiceCard>
            <template #image>
              <NuxtImg class="image" src="/images/bus3.jpeg" alt="" />
            </template>
          </ServiceCard>
        </SwiperSlide>

        <SwiperSlide class="card-slide">
          <ServiceCard>
            <template #image>
              <NuxtImg class="image" src="/images/bus4.jpeg" alt="" />
            </template>
          </ServiceCard>
        </SwiperSlide>
        <!-- <SwiperSlide class="card-slide">
          <ServiceCard>
            <template #image>
              <NuxtImg class="image" src="/images/bus5.jpeg" alt="" />
            </template>
          </ServiceCard>
        </SwiperSlide> -->
      </Swiper>
    </ClientOnly>

    <div class="description-wrapper">
      <h1 class="title">Z nami jedziesz bezpiecznie.</h1>

      <p class="hero-text">
        Od ponad 20 lat świadczymy profesjonalne usługi przewozu osób, łącząc
        tradycję, nowoczesność i troskę o pasażera.
      </p>

      <div class="cta-wrapper">
        <a class="cta" href="tel:+393297811979"> SPRAWDZ NASZA OFERTE </a>
        <a class="cta cta-background" href="tel:+393297811979">
          SPRAWDZ NASZE LINIE
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
</script>

<style scoped>
/* Containers */
.wrapper {
  /* min-height: 100%; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-top: 4rem;
  /* border: 2px solid green; */
  flex-grow: 10;
}

.description-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.foto-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cards-wrapper {
  width: 100%;
  height: 300px;
  /* border: 3px solid blue; */
  margin: 0;
  padding: 0;
}

.cta-wrapper {
  margin-top: auto;
  /* border: 1px solid red; */
}

.card-slide {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  /* border: 1px solid red; */
}

.image-person {
  flex-grow: 1;
  margin-top: auto;
  background-image: url("/images/flotabg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: 999;
  /* transform: translate(20%, -10%); */
}

/* Typografy */
.title {
  margin: 2rem auto 0;
  text-align: center;
  font-size: 5svh;
  line-height: 1;
  letter-spacing: -1px;
  font-weight: 600;
  font-style: italic;
}

.hero-text {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.4;
  letter-spacing: 1px;
  text-align: center;
  width: 90%;
  margin: 1.5rem auto 0;
}

.image {
  border-radius: 24px;
  width: 100%;
  display: block;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

/* buttons */
.cta {
  display: block;
  font-size: 2svh;
  font-weight: 800;
  letter-spacing: 2px;
  background-color: var(--clr-secondary);
  color: white;
  width: 90%;
  margin: 1rem auto 1rem;
  padding: 1.7svh;
  text-align: center;
  border-radius: 999px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
}

.cta-background {
  background-color: var(--clr-accent);
}

/* circles */
.dark-circle {
  position: absolute;
  bottom: 0;
  left: 50%;
  background-color: var(--clr-secondary);
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  width: 120%;
  aspect-ratio: 2 / 1;
  transform: translate(-50%, 30%);
  z-index: 888;
}

.light-circle-big {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--clr-white);
  border-radius: 999px;
  width: 60%;
  aspect-ratio: 1;
  transform: translate(-40%, 20%);
}

.light-circle-small {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--clr-white);
  border-radius: 999px;
  width: 40%;
  aspect-ratio: 1;
  transform: translate(30%, 10%);
}

/* >>>>>>>>>>>> MEDIA <<<<<<<<<<<< */

@media (min-width: 992px) {
  /* Typografy */
  .title {
    margin: 4rem 0 0 0;
    text-align: left;
    white-space: nowrap;
    overflow: visible;
    text-align: center;
    line-height: 1.2;
    font-size: 3.5rem;
  }

  .title span:first-of-type {
    font-style: italic;
    font-weight: 700;
  }

  .title span:last-child {
    color: var(--clr-accent);
  }

  .hero-text {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.4;
    letter-spacing: 1px;
    text-align: center;
    width: 90%;
    margin: 1.5rem auto 0;
  }

  /* wrappers */

  .wrapper {
    flex-direction: row;
    min-height: 0%;
    /* border: 2px solid yellowgreen; */
    margin: 8rem 2rem 14rem;
    overflow: visible;
  }

  .foto-wrapper {
    height: 500px;
    min-width: 400px;
    position: relative;
    overflow: visible;
    /* border: 1px solid pink; */
  }

  .description-wrapper {
    width: 65%;
    display: flex;
    flex-direction: column;
    /* border: 1px solid pink; */
  }

  /* buttons */
  .cta {
    margin: auto auto 1.7rem;
    font-size: 1.25rem;
    width: auto;
    padding: 1rem 4rem;
    transition:
      background-color 0.3s ease,
      scale 0.3s ease;
  }

  .cta:hover {
    background-color: var(--clr-accent-dark);
    scale: 1.02;
  }

  /* circles */
  .dark-circle {
    position: absolute;
    bottom: -10%;
    left: 0%;
    background-color: var(--clr-white);
    /* border-top-left-radius: 999px;
    border-top-right-radius: 999px; */
    border-radius: 50%;
    width: 100%;
    aspect-ratio: 1;
    transform: translate(0%, 0%);
    z-index: 888;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  }

  .light-circle-big {
    position: absolute;
    bottom: -40%;
    left: -47%;
    background-color: var(--clr-secondary);
    border-radius: 999px;
    width: 60%;
    aspect-ratio: 1;
    transform: translate(0%, 0%);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 99999;
  }

  .light-circle-small {
    position: absolute;
    bottom: 70%;
    right: 0%;
    background-color: var(--clr-secondary);
    border-radius: 50%;
    width: 30%;
    aspect-ratio: 1;
    transform: translate(0%, 0%);
    z-index: 0;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  }

  .light-circle-extra-small {
    position: absolute;
    bottom: 100%;
    right: 90%;
    background-color: var(--clr-secondary);
    border-radius: 50%;
    width: 15%;
    aspect-ratio: 1;
    transform: translate(0%, 0%);
    z-index: 0;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  }

  .image-person {
    flex-grow: 1;
    margin-top: auto;
    background-image: url("/images/foto-me.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    position: relative;
    z-index: 999;
  }
}

@media (max-width: 1205px) {
  /* Typografy */
  .title {
    white-space: wrap;
  }
}
</style>
