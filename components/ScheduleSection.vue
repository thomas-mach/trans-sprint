<template>
  <section class="wrapper-section">
    <p class="section-title">ROZKŁADY JAZDY</p>
    <div class="divider"></div>
    <AcordionLeg :closeFn="ui.closeKraAccordions" class="accordion">
      <template #title>
        <div class="linea" @click="">
          <span>Krasnystaw</span>
          <div class="arrow-wrapper">
            <p class="time">1:03'</p>
            <img class="arrow" src="/images/arrow.png" alt="" />
          </div>
          <span>Lublin</span>
        </div>
      </template>
      <template #content>
        <div class="component">
          <ScheduleKraLub />
        </div>
      </template>
    </AcordionLeg>
    <AcordionLeg :closeFn="ui.closeLubAccordions">
      <template #title>
        <div class="linea" @click="">
          <span>Lublin</span>
          <div class="arrow-wrapper">
            <p class="time">1:06'</p>
            <img class="arrow" src="/images/arrow.png" alt="" />
          </div>
          <span>Krasnystaw</span>
        </div>
      </template>
      <template #content>
        <div class="component">
          <ScheduleLubKra />
        </div>
      </template>
    </AcordionLeg>
    <div class="divider"></div>
  </section>
</template>

<script setup lang="ts">
import { useUIStore } from "../stores/ui";
const ui = useUIStore();
</script>

<style scoped>
.wrapper-section {
  background-color: var(--clr-primary);
  display: flex;
  flex-direction: column;
  padding: 3rem 0% 3rem;
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

.arrow-wrapper {
  position: relative;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--clr-white);
}

.section-title {
  font-weight: 600;
  color: var(--clr-white);
  background-color: var(--clr-accent);
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 0;
  font-style: italic;
  letter-spacing: 1px;
}
</style>
