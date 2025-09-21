<template>
  <div class="benefit-wrapper">
    <div class="text">
      <slot name="benefit-text" />
    </div>
    <div class="icon">
      <slot name="icon" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.benefit-wrapper {
  background-color: var(--clr-primary);
  color: var(--clr-white);
  width: 90%;
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.3rem 1rem 1rem;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
}

.text {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 1px;
}

.icon {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
