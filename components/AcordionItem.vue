<template>
  <div class="accordion">
    <button @click="handleClick" :class="['btn', { 'btn-open': isOpen }]">
      <div class="title"><slot name="title" /></div>
      <FontAwesomeIcon
        :class="isOpen ? 'icon icon-rotate' : 'icon'"
        :icon="['fas', 'chevron-right']"
      />
    </button>

    <div ref="outerRef" class="accordion-outer">
      <div class="accordion-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch, onMounted } from "vue";
import { useUIStore } from "../stores/ui";

interface Props {
  keyName: keyof ReturnType<typeof useUIStore>["accordionsState"];
  parentKey?: keyof ReturnType<typeof useUIStore>["accordionsState"]; // opzionale: stato genitore
  parentRef?: HTMLElement | null; // ref del genitore
}

const props = defineProps<Props>();
const ui = useUIStore();

const outerRef = ref<HTMLElement | null>(null);

// stato locale per animazione (max-height)
const isOpen = ref(ui.accordionsState[props.keyName]);

// click toggle
function handleClick() {
  ui.accordionsState[props.keyName] = !ui.accordionsState[props.keyName];
}

// osserva lo store per animare apertura/chiusura
watch(
  () => ui.accordionsState[props.keyName],
  (newVal) => {
    isOpen.value = newVal;
    const outer = outerRef.value;
    if (!outer) return;

    if (newVal) {
      // apertura
      outer.style.maxHeight = outer.scrollHeight + "px";

      // nextTick(() => {
      //   const scrollTarget = props.parentRef || outer;
      //   const yOffset = -100;
      //   const y =
      //     scrollTarget.getBoundingClientRect().top + window.scrollY + yOffset;
      //   window.scrollTo({ top: y, behavior: "smooth" });
      // });
    } else {
      // chiusura fluida
      outer.style.maxHeight = outer.scrollHeight + "px"; // forza reflow
      outer.offsetHeight;
      outer.style.maxHeight = "0";
    }
  }
);

// opzionale: chiudi automaticamente se genitore chiuso
if (props.parentKey) {
  watch(
    () => ui.accordionsState[props.parentKey!],
    (parentVal) => {
      if (!parentVal) {
        ui.accordionsState[props.keyName] = false; // chiude figlio
      }
    }
  );
}

onMounted(() => {
  const outer = outerRef.value;
  if (!outer) return;

  outer.addEventListener("transitionend", (e) => {
    // assicuriamoci che sia la proprietà max-height e l’apertura
    if (e.propertyName === "max-height" && ui.accordionsState[props.keyName]) {
      outer.style.maxHeight = "none"; // auto
      // scrolla solo quando l’outer del figlio è completamente aperto
      outer.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});
</script>

<style scoped>
.accordion-outer {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}
</style>

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
  transform: rotate(90deg);
}

.accordion {
  width: 100%;
  margin-bottom: 1rem;
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
  color: var(--clr-white);
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
  max-height: 1200px; /* abbastanza grande per contenuto */
  margin-bottom: 1rem;
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
