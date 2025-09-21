<!-- <script setup>
import { ref, onMounted } from "vue";

const accounts = ref([]);
const locations = ref([]);
const selectedAccount = ref(null);

onMounted(async () => {
  // Carico gli account una sola volta al caricamento pagina
  accounts.value = await $fetch("/api/google-accounts");

  if (accounts.value.length > 0) {
    // Se vuoi, prendi automaticamente la prima location dell’account
    selectedAccount.value = accounts.value[0].name;
    locations.value = await $fetch(
      `/api/google-locations?accountId=${encodeURIComponent(
        selectedAccount.value
      )}`
    );
  }
});
</script>

<template>
  <div>
    <h1>Location</h1>
  </div>
</template> -->
