<template>
  <Modal v-model:show="showModal"></Modal>
  <div class="acordions-wrapper">
    <!-- KRASNYSTAW -->
    <div class="acordion-wrapper">
      <div class="dot-line-wrapper">
        <div class="dot-point"></div>
        <div class="line-point">
          <p
            class="time-leg"
            :class="{ 'display-none': !ui.accordionsState.krasnystawLub }"
          >
            14 minut
          </p>
        </div>
      </div>

      <AcordionItem key-name="krasnystawLub" :parentRef="outerRef">
        <template #title>
          <p>Odjazdy Krasnystaw</p>
        </template>
        <template #content>
          <div class="departure-wrapper">
            <div
              class="departure"
              v-for="(el, index) in departure.krasnystaw"
              :key="index"
            >
              <p class="hour">{{ el.hour }}</p>
              <p class="trip">kurs {{ index + 1 }}</p>
              <button class="legend" @click="openModal()">
                {{ el.legend }}
              </button>
            </div>
          </div>
        </template>
      </AcordionItem>
    </div>

    <!-- LOPIENNIK -->
    <div class="acordion-wrapper">
      <div class="dot-line-wrapper">
        <div class="dot-point"></div>
        <div class="line-point">
          <p
            class="time-leg"
            :class="{ 'display-none': !ui.accordionsState.lopiennikLub }"
          >
            8 minut
          </p>
        </div>
      </div>

      <AcordionItem key-name="lopiennikLub" :parentRef="outerRef">
        <template #title>
          <p>Odjazdy Łopiennik-Nad.</p>
        </template>
        <template #content>
          <div class="departure-wrapper">
            <div
              class="departure"
              v-for="(el, index) in departure.lopiennik"
              :key="index"
            >
              <p class="hour">{{ el.hour }}</p>
              <p class="trip">kurs {{ index + 1 }}</p>
              <button class="legend" @click="openModal()">
                {{ el.legend }}
              </button>
            </div>
          </div>
        </template>
      </AcordionItem>
    </div>

    <!-- FAJSLAWICE -->
    <div class="acordion-wrapper">
      <div class="dot-line-wrapper">
        <div class="dot-point"></div>
        <div class="line-point">
          <p
            class="time-leg"
            :class="{ 'display-none': !ui.accordionsState.fajslawiceLub }"
          >
            11 minut
          </p>
        </div>
      </div>

      <AcordionItem key-name="fajslawiceLub" :parentRef="outerRef">
        <template #title>
          <p>Odjazdy fajslawice</p>
        </template>
        <template #content>
          <div class="departure-wrapper">
            <div
              class="departure"
              v-for="(el, index) in departure.fajslawice"
              :key="index"
            >
              <p class="hour">{{ el.hour }}</p>
              <p class="trip">kurs {{ index + 1 }}</p>
              <button class="legend" @click="openModal()">
                {{ el.legend }}
              </button>
            </div>
          </div>
        </template>
      </AcordionItem>
    </div>

    <!-- PIASKI -->
    <div class="acordion-wrapper">
      <div class="dot-line-wrapper">
        <div class="dot-point"></div>
        <div class="line-point">
          <p
            class="time-leg"
            :class="{ 'display-none': !ui.accordionsState.piaskiLub }"
          >
            30 minut
          </p>
        </div>
      </div>

      <AcordionItem key-name="piaskiLub" :parentRef="outerRef">
        <template #title>
          <p>Odjazdy piaski</p>
        </template>
        <template #content>
          <div class="departure-wrapper">
            <div
              class="departure"
              v-for="(el, index) in departure.piaski"
              :key="index"
            >
              <p class="hour">{{ el.hour }}</p>
              <p class="trip">kurs {{ index + 1 }}</p>
              <button class="legend" @click="openModal()">
                {{ el.legend }}
              </button>
            </div>
          </div>
        </template>
      </AcordionItem>
    </div>

    <!-- LUBLIN -->
    <div class="acordion-wrapper">
      <div class="dot-line-wrapper">
        <div class="dot-point"></div>
        <div class="line-point display-none"></div>
      </div>

      <AcordionItem key-name="lublinLub" :parentRef="outerRef">
        <template #title>
          <p>Przyjazdy Lublin</p>
        </template>
        <template #content>
          <div class="departure-wrapper">
            <div
              class="departure"
              v-for="(el, index) in departure.lublin"
              :key="index"
            >
              <p class="hour">{{ el.hour }}</p>
              <p class="trip">kurs {{ index + 1 }}</p>
              <button class="legend" @click="openModal()">
                {{ el.legend }}
              </button>
            </div>
          </div>
        </template>
      </AcordionItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import departure from "../public/data/departure-kra-lub.json";
import { useUIStore } from "../stores/ui";

const ui = useUIStore();
const showModal = ref(false);
const outerRef = ref();

function openModal() {
  showModal.value = true;
}
</script>

<style scoped>
.acordions-wrapper {
  display: flex;
  flex-direction: column;
}

.acordion-wrapper {
  display: flex;
  gap: 1rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

.departure-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
}

.dot-line-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.75rem;
  gap: 0.75rem;
}

.arrow-wrapper {
  position: relative;
}

.departure {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  border: 1px solid var(--clr-black);
  border-radius: 5px;
  padding: 0.3rem;
}

.title {
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 0px;
  font-family: "Montserrat";
  color: var(--clr-white);
}

.legend {
  background-color: transparent;
  border: none;
  border-radius: 3px;
  color: var(--clr-black);
  font-size: 1rem;
  margin-left: auto;
  letter-spacing: 1px;
  text-decoration: underline;
  color: blue;
}

.hour {
  font-size: 1rem;
  font-weight: 600;
  margin-right: 2rem;
}

.trip {
  font-size: 0.85rem;
  font-style: italic;
}

.linea {
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-style: italic;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  color: var(--clr-white);
}

.arrow {
  width: 50px;
  height: 20px;
}

.time {
  font-size: 10px;
  font-style: italic;
  position: absolute;
  top: -3px;
  left: 6px;
  /* padding: 0 2px; */
  /* background-color: var(--clr-primary); */
}

.dot-point {
  width: 20px;
  aspect-ratio: 1;
  background-color: var(--clr-white);
  border-radius: 50%;
  align-self: flex-start;
}

.line-point {
  position: relative;
  width: 2px;
  min-height: 25px;
  flex-grow: 1;
  background-color: var(--clr-white);
}

.time-leg {
  /* color: var(--clr-white); */
  color: var(--clr-white);

  font-weight: 600;
  padding: 5px 5px;
  background-color: var(--clr-primary);
  font-size: 0.85rem;
  position: absolute;
  transform: rotate(-90deg);
  display: inline-block;
  min-width: max-content;
  white-space: nowrap;
  left: -36px;
  top: 180px;
}

.divider {
  width: 100%;
  height: 2px;
  margin-bottom: 2rem;
  background-color: var(--clr-white);
}

.divider-top {
  width: 100%;
  height: 2px;
  background-color: var(--clr-white);
}

.display-none {
  display: none;
}
</style>
