<template>
  <div class="accordion">
    <button @click="toggleLocal" :class="['btn', { 'btn-open': isOpen }]">
      <div class="title">
        <slot name="title" />
      </div>
      <FontAwesomeIcon
        :class="isOpen ? 'icon icon-rotate' : 'icon'"
        :icon="['fas', 'chevron-right']"
      />
    </button>

    <div ref="outerRef" class="accordion-outer">
      <div ref="contentRef" class="accordion-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from "vue";
import { useUIStore } from "../stores/ui";

interface Props {
  closeFn?: () => void;
  parentRef?: HTMLElement | null;
}

const props = defineProps<Props>();
const ui = useUIStore();
const isOpen = ref(false);
const outerRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);

function toggleLocal() {
  if (props.closeFn) {
    props.closeFn();
  }
  isOpen.value = !isOpen.value;
  const outer = outerRef.value;
  const content = contentRef.value;
  if (!outer || !content) return;

  if (isOpen.value) {
    // parte da 0 e passa a scrollHeight
    outer.style.height = "0px";
    nextTick(() => {
      const h = content.scrollHeight;
      outer.style.transition = "height 0.3s ease";
      outer.style.height = h + "px";
    });
  } else {
    const h = content.scrollHeight;
    outer.style.height = h + "px";
    nextTick(() => {
      outer.style.transition = "height 0.3s ease";
      outer.offsetHeight;
      outer.style.height = "0px";
    });
  }
}

function onTransitionEnd(e: TransitionEvent) {
  if (e.propertyName !== "height") return;
  const outer = outerRef.value;
  if (!outer) return;

  if (isOpen.value) {
    outer.style.height = "auto"; // permetti contenuto dinamico
    // scroll solo dopo che l'accordion ha finito di crescere
    outer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

onMounted(() => {
  const outer = outerRef.value;
  if (!outer) return;
  outer.addEventListener("transitionend", onTransitionEnd);
});
</script>

<style scoped>
.title {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-align: left;
}

.icon {
  font-weight: 600;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  display: inline-block;
  color: var(--clr-white);
}

.icon-rotate {
  transform: rotate(90deg);
}

.accordion {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  width: 100%;
}

.btn {
  background-color: inherit;
  width: 100%;
  padding: 0.75rem;
  border: none;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.btn-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: var(--clr-secondary);
  color: var(--clr-white);
}

.accordion-outer {
  overflow: hidden;
  height: 0;
}

.accordion-content {
  font-family: "Montserrat";
  font-size: 0.85rem;
  letter-spacing: 1px;
  padding: 0.75rem;
  line-height: 1.4;
}
</style>
