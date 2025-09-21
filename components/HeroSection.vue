<template>
  <div class="wrapper">
    <div class="description-wrapper">
      <h1 class="title">
        Imbianchino professionista <br /><span>a Padova</span><span>.</span>
      </h1>

      <p class="hero-text">
        Mi chiamo Thomas. Con quasi 20 anni di esperienza, metto passione e
        impegno in ogni lavoro. Mi piace offrire imbiancature precise, pulite e
        curate nei dettagli, perché la tua casa merita sempre il meglio.
      </p>
      <a class="cta" href="tel:+393297811979"> CHIAMA ORA </a>
    </div>
    <div class="foto-wrapper">
      <div class="image-person"></div>
      <div class="dark-circle"></div>
      <div class="light-circle-big"></div>
      <div class="light-circle-small"></div>
      <div class="light-circle-extra-small"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
/* Containers */
.wrapper {
  min-height: 100%;
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.foto-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

/* Typografy */
.title {
  margin: 4rem auto 0;
  text-align: center;
  font-size: 5svh;
  line-height: 0.9;
  letter-spacing: -1px;
  font-weight: 500;
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
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: 1px;
  text-align: center;
  width: 90%;
  margin: 1.5rem auto 0;
}

/* buttons */
.cta {
  display: block;
  font-size: 2svh;
  font-weight: 800;
  letter-spacing: 2px;
  background-color: var(--clr-accent);
  width: 90%;
  margin: 2rem auto 1rem;
  padding: 1.7svh;
  text-align: center;
  border-radius: 999px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
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
