<template>
  <div class="accordion">
    <button
      ref="btnRef"
      @click="toggle"
      :class="['btn', { 'btn-open': isOpen }]"
    >
      <div class="title">
        <slot name="title" />
      </div>
      <FontAwesomeIcon
        :class="isOpen ? 'icon icon-rotate' : 'icon'"
        :icon="['fas', 'plus']"
      />
    </button>

    <div ref="outerRef" class="accordion-outer" :class="{ open: isOpen }">
      <div class="accordion-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

const isOpen = ref(false);
const btnRef = ref<HTMLElement | null>(null);
const outerRef = ref<HTMLElement | null>(null);

function toggle() {
  isOpen.value = !isOpen.value;

  // Forza il reflow per l'animazione fluida
  nextTick(() => {
    const outer = outerRef.value;
    if (!outer) return;

    if (isOpen.value) {
      outer.style.maxHeight = outer.scrollHeight + "px";
    } else {
      outer.style.maxHeight = "0";
    }
  });
}
</script>

<style scoped>
.title {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: var(--color-black);
  text-align: left;
  text-transform: uppercase;
}

.icon {
  font-weight: 600;
  font-size: 1.125rem;
  transition: transform 0.3s ease;
  display: inline-block;
}

.icon-rotate {
  transform: rotate(45deg);
}

.btn {
  background-color: var(--clr-white);
  width: 100%;
  border-radius: 12px;
  padding: 0.75rem;
  border: none;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition:
    background-color 0.3s ease,
    border-radius 0.3s ease;
  cursor: pointer;
}

.btn-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: var(--clr-accent);
}

.accordion-outer {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: var(--clr-white);
}

.accordion-outer.open {
  max-height: 1000px; /* abbastanza grande per contenuto */
}

.accordion-content {
  font-family: "Montserrat";
  font-size: 0.85rem;
  letter-spacing: 1px;
  padding: 0.75rem;
  line-height: 1.4;
}

@media (min-width: 992px) {
  .title {
    font-size: 1.25rem;
  }

  .accordion-content {
    font-size: 1.125rem;
    padding: 2rem;
  }

  .btn {
    padding: 1.25rem;
  }

  .icon {
    font-weight: 800;
    font-size: 1.25rem;
  }

  .btn:hover {
    background-color: var(--clr-accent-dark);
  }
}
</style>
