<template>
  <div v-if="show" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <p><span>V</span> - kurs przyspieszony</p>
      <div class="divider"></div>
      <p><span>D</span> - kursuje od poniedziałku do piątku</p>
      <div class="divider"></div>
      <p><span>6</span> - kursuje w sobotę</p>
      <div class="divider"></div>
      <p><span>7</span> - kursuje w niedzielę</p>
      <div class="divider"></div>
      <p>
        <span>d</span> - nie kursuje 01/01, w pierwszy i drugi dzień Świąt
        Wielkanocnych oraz 25/12 i 26/12
      </p>
      <div class="divider"></div>
      <p><span>n</span> - nie kursuje w Wielką Sobotę oraz 24/12 i 31/12</p>
      <div class="divider"></div>
      <p>
        <span>u</span> - nie kursuje 06/01, 01/05, 03/05, Zielone Świątki,
        15/08, 01/11, 11/11
      </p>

      <button class="btn-close" @click="close">
        <FontAwesomeIcon class="icon" :icon="['fas', 'plus']" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{ show: boolean }>();
const emit = defineEmits(["update:show"]);

function close() {
  emit("update:show", false);
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  position: relative;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
}

span {
  font-weight: 700;
}

p {
  font-size: 1rem;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--clr-black);
  margin: 0.5rem 0 0.5rem;
}

.icon {
  transform: rotate(45deg);
  font-size: 1.5rem;
  padding: 0.25rem;
}

button {
  background-color: transparent;
  border: none;
}
</style>
