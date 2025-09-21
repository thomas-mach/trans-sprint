<template>
  <transition name="slide-up">
    <div v-if="showBanner" class="cookie-banner" @click.stop>
      <div class="content">
        <img class="cookie-img" src="/images/cookie.webp" alt="cookie" />
        <span
          >Utilizziamo i cookie per migliorare la tua esperienza di navigazione
          e per scopi di marketing.</span
        >
      </div>
      <div class="buttons">
        <button class="reject" @click="reject">Rifiuta</button>
        <button class="accept" @click="accept">Accetta</button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useConsentCookie } from "~/composables/useCookies";

const { consent, setConsent } = useConsentCookie();
const showBanner = ref(false);
let stop = watch(consent, (newVal) => {
  console.log("valore aggiornato", newVal);
});

onMounted(() => {
  if (!consent.value) {
    setTimeout(() => {
      showBanner.value = true;
    }, 1000);
  }
});

onUnmounted(() => stop());

watch(consent, (newVal) => {
  if (newVal === "accepted") {
    // Inserisci GTM dinamicamente
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P53RHPBQ');`;
    document.head.appendChild(script);
  }
});

function accept() {
  setConsent("accepted");
  showBanner.value = false;
}

function reject() {
  setConsent("rejected");
  showBanner.value = false;
}
</script>

<style scoped>
span {
  font-family: "Poppins";
  font-size: 1rem;
  text-align: left;
  font-weight: 300;
}

.cookie-img {
  width: 50px;
}

.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-grow: 1;
}

.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  color: black;
  font-size: 1rem;
  padding: 1em;
  z-index: 9999;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  gap: 2em;
  justify-content: center;
  margin-top: 1em;
  flex-shrink: 1;
}

.buttons button {
  padding: 0.5rem 1rem;
  border: 2px solid rgb(0, 110, 255);
  border-radius: 2px;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 1rem;
  letter-spacing: 1.7px;
}

.accept {
  background-color: rgb(0, 110, 255);
  color: white;
}

.reject {
  background-color: white;
  color: rgb(0, 110, 255);
}

/* Transition */
.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave-active {
  transition: all 0.3s ease-in;
}
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media ((min-width: 768px) and (max-width:1024px)) {
  span {
    font-size: 1.125rem;
    text-align: left;
    font-weight: 300;
  }

  .buttons button {
    font-size: 1.125rem;
  }
}

@media (min-width: 1025px) {
  span {
    font-size: 1.2rem;
    text-align: left;
    font-weight: 300;
  }

  .buttons button {
    font-size: 1.2rem;
  }

  .accept:hover {
    background-color: white;
    color: rgb(0, 110, 255);
  }

  .reject:hover {
    background-color: rgb(0, 136, 255);
    color: white;
  }

  .cookie-banner {
    flex-direction: row;
  }

  .content {
    flex-grow: 999;
  }

  .buttons {
    justify-content: flex-end;
    margin-top: 0;
  }
}
</style>
