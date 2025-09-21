<template>
  <ClientOnly>
    <section class="wrapper-section">
      <div class="content-wrapper">
        <p class="title">I vantaggi per te</p>
        <div class="benefits-wrapper">
          <Benefit
            v-aos="'fade-right'"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-anchor-placement="bottom"
          >
            <template #benefit-text>
              <h3>PREZZO COMPETITIVO</h3>
            </template>
            <template #icon>
              <FontAwesomeIcon :icon="['fas', 'sack-dollar']" class="icon" />
            </template>
          </Benefit>

          <Benefit
            v-aos="'fade-right'"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-anchor-placement="bottom"
          >
            <template #benefit-text>
              <h3>LAVORO DI QUALITÀ</h3>
            </template>
            <template #icon>
              <FontAwesomeIcon :icon="['fas', 'star']" class="icon" />
            </template>
          </Benefit>

          <Benefit
            v-aos="'fade-right'"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-anchor-placement="bottom"
          >
            <template #benefit-text>
              <h3>Materiali di prima scelta</h3>
            </template>
            <template #icon>
              <FontAwesomeIcon :icon="['fas', 'gem']" class="icon" />
            </template>
          </Benefit>

          <Benefit
            v-aos="'fade-right'"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-anchor-placement="bottom"
          >
            <template #benefit-text>
              <h3>SEMPRE PUNTUALE</h3>
            </template>
            <template #icon>
              <FontAwesomeIcon :icon="['fas', 'clock']" class="icon" />
            </template>
          </Benefit>

          <Benefit
            v-aos="'fade-right'"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-anchor-placement="bottom"
          >
            <template #benefit-text>
              <h3>Lavoro consegnato pulito e ordinato</h3>
            </template>
            <template #icon>
              <FontAwesomeIcon
                :icon="['fas', 'spray-can-sparkles']"
                class="icon"
              />
            </template>
          </Benefit>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts"></script>

<style scoped>
h3 {
  text-transform: uppercase;
}

.wrapper-section {
  background-color: var(--clr-white);
  width: 100%;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.benefits-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.title {
  width: 100%;
  padding-left: 5%;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  font-family: "Montserrat";
  color: var(--clr-black);
}

.icon {
  color: var(--clr-accent);
}

@media (min-width: 992px) {
  /* wrappers */
  .content-wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }

  .title {
    padding-left: 0;
    font-size: 3rem;
  }

  .wrapper-section {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }

  .benefits-wrapper {
    gap: 2rem;
  }
}
</style>
