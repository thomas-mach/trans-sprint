<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <section>
    <div class="content-wrapper">
      <div class="section-wrapper">
        <div class="footer-info">
          <p class="info">
            <span class="info-span">Revio</span>
          </p>
          <p class="info">Via Tre Garofani 36A, 35124 Padova (PD)</p>
          <p class="info">P. IVA: 05723240288</p>
          <p class="info">
            Iscritta al Registro delle Imprese di Padova – C.C.I.A.A. di Padova
            – REA: PD-487908
          </p>
          <p p class="info">
            Numero di iscrizione all’Albo delle Imprese Artigiane di Padova:
            142303
          </p>

          <p class="contact-wrapper">
            <a href="tel:+393297811979">
              <FontAwesomeIcon :icon="['fas', 'phone']" class="icon" />
              +39 329 781 19 79</a
            >
            <a href="mailto:info@reviopadova.it">
              <FontAwesomeIcon :icon="['fas', 'envelope']" />
              info@reviopadova.it
            </a>
          </p>
        </div>
      </div>

      <div class="skyline-img-wrapper">
        <img
          class="skyline-img"
          src="/images/skyline.webp"
          alt="Skyline di Padova stilizzato"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--clr-black);
}

.section-wrapper {
  background-color: var(--clr-black);
  color: var(--clr-white);
  width: 100%;
  padding: 2.5rem 5%;
  font-family: "Montserrat";
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 1px;
}

.contact-wrapper {
  display: flex;
  flex-direction: column;
}

.info {
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.info span {
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 1.25rem;
}

.skyline-img {
  width: 100%;
  display: block;
}

@media (min-width: 992px) {
  /* wrappers */

  .content-wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section-wrapper {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  .section-wrapper {
    font-size: 1.25rem;
  }

  .skyline-img {
    width: 75%;
    margin: 0 auto;
  }
}
</style>
