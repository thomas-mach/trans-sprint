<template>
  <section id="contact" class="wrapper-section">
    <div class="content-wrapper">
      <p class="title">Contattami</p>
      <p class="subtitle">Chiedi un preventivo o fai una domanda.</p>
      <div class="wrapper-contacts">
        <a href="tel:+393297811979" class="btn-secondary">
          <FontAwesomeIcon :icon="['fas', 'phone']" class="icon" />
          Chiamami
        </a>
        <a
          href="https://wa.me/3297811979"
          class="btn-secondary"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon :icon="['fab', 'whatsapp']" />
          WhatsApp
        </a>
      </div>
      <div class="form-wrapper">
        <p class="form-title">Invia un'email</p>
        <form novalidate @submit.prevent="submitForm">
          <!-- Nome -->
          <div class="input-wrapper">
            <label for="name">Nome</label>
            <input type="text" id="name" v-model="form.name" />
          </div>
          <p class="error">{{ errors.name }}</p>

          <!-- Email -->
          <div class="input-wrapper">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="form.email" />
          </div>
          <p class="error">{{ errors.email }}</p>

          <!-- Messaggio -->
          <div class="input-wrapper">
            <label for="message">Messaggio</label>
            <textarea id="message" v-model="form.message"></textarea>
          </div>
          <p class="error">{{ errors.message }}</p>

          <button class="btn" type="submit">INVIA</button>

          <!-- Feedback -->
          <div class="message-placeholder">
            <transition name="fade">
              <div class="message-success" v-if="backendStatus">
                {{ backendStatus }}
              </div>
            </transition>
            <transition name="fade">
              <div class="message-error" v-if="backendError">
                {{ backendError }}
              </div>
            </transition>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  name: "",
  email: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  message: "",
});

const backendStatus = ref("");
const backendError = ref("");

// ✅ Validazioni
function validateForm() {
  let valid = true;

  // Nome
  const nameRegex = /^[a-zA-Zà-žÀ-Ž\s'-]+$/;
  if (!form.name) {
    errors.name = "Campo obbligatorio!";
    valid = false;
  } else if (form.name.trim().length < 2 || form.name.trim().length > 50) {
    errors.name = "Il nome deve avere da 2 a 50 caratteri";
    valid = false;
  } else if (!nameRegex.test(form.name)) {
    errors.name = "Il nome contiene caratteri non validi!";
    valid = false;
  } else {
    errors.name = "";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    errors.email = "Email non valida!";
    valid = false;
  } else {
    errors.email = "";
  }

  // Messaggio
  if (!form.message) {
    errors.message = "Campo obbligatorio!";
    valid = false;
  } else if (
    form.message.trim().length < 10 ||
    form.message.trim().length > 1000
  ) {
    errors.message = "Il messaggio deve avere da 10 a 1000 caratteri!";
    valid = false;
  } else {
    errors.message = "";
  }

  return valid;
}

// ✅ Submit
async function submitForm() {
  if (!validateForm()) return;

  try {
    const res = await $fetch("/api/contact", {
      method: "POST",
      body: { ...form },
    });

    backendStatus.value = res?.message || "Messaggio inviato con successo!";
    backendError.value = "";
    form.name = "";
    form.email = "";
    form.message = "";
  } catch (err: any) {
    console.error("Errore di backend:", err);
    backendError.value =
      err?.data?.error || "C'è stato un errore nell'invio dell'email!";
    backendStatus.value = "";
  } finally {
    setTimeout(() => {
      backendStatus.value = "";
      backendError.value = "";
    }, 7000);
  }
}
</script>

<style scoped>
.wrapper-section {
  background-color: var(--clr-white);
  width: 100%;
  padding: 2.5rem 5%;
}

.wrapper-contacts {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2.5rem 0;
}

.title {
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  font-family: "Montserrat";
  color: var(--clr-black);
}

.subtitle,
.form-title {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  font-family: "Montserrat";
}

/* FORM */

textarea {
  resize: none;
  width: 100%;
  height: 200px;
}

.error {
  font-family: "Montserrat";
  color: red;
  font-size: 0.75rem;
  height: 1rem;
  text-align: right;
}

input,
textarea {
  padding: 1rem;
  border: 1px solid var(--clr-primary);
  border-radius: 12px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1rem;
}

label {
  color: var(--clr-black);
  padding-left: 0.5rem;
  font-family: "Montserrat";
  font-size: 0.85rem;
  font-weight: 500;
}

input:focus,
textarea:focus {
  border-bottom: 1px solid var(--clr-accent);
}

.btn {
  display: block;
  font-size: 1.125rem;
  font-weight: 800;
  letter-spacing: 2px;
  background-color: var(--clr-accent);
  width: 90%;
  margin: 2rem auto 0;
  padding: 1.7dvh;
  text-align: center;
  border-radius: 999px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  border: none;
}

.btn-secondary {
  font-family: "Montserrat";
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  background-color: var(--clr-primary);
  color: var(--clr-white);
  padding: 0.75rem 1rem;
  text-align: center;
  border-radius: 999px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  border: none;
  margin-top: 0.5rem;
}

.message-placeholder {
  font-family: "Montserrat";
  margin-top: 1.2rem;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
}

.message-success {
  color: green;
}

.message-error {
  color: red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.icon {
  font-size: 1rem;
}

.icon-whatsapp {
  font-size: 1rem;
}

.form-title {
  font-weight: 600;
}

/* >>>>>>>>>>>> MEDIA <<<<<<<<<<<< */

@media (min-width: 992px) {
  /* wrappers */

  .content-wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }

  .form-wrapper,
  .wrapper-contacts {
    width: 50%;
    margin: 0 auto;
  }

  .wrapper-contacts {
    margin-bottom: 3rem;
    justify-content: flex-end;
    gap: 1rem;
  }

  .title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 4rem;
  }

  .form-title {
    font-size: 1.25rem;
  }

  label {
    font-size: 1rem;
  }

  .btn {
    transition:
      scale 0.3s ease,
      background-color 0.3s ease;
  }

  .btn-secondary {
    font-size: 1rem;
    transition:
      scale 0.3s ease,
      background-color 0.3s ease;
  }

  .btn-secondary:hover {
    background-color: var(--clr-secondary);
    scale: 1.02;
    cursor: pointer;
  }

  .btn:hover {
    background-color: var(--clr-accent-dark);
    scale: 1.01;
    cursor: pointer;
  }

  .icon {
    font-size: 1rem;
  }

  .error {
    font-size: 1rem;
    height: 1rem;
    text-align: right;
  }

  input,
  textarea {
    padding: 1rem;
    border: 1px solid var(--clr-primary);
    border-radius: 12px;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1.25rem;
  }

  .message-success,
  .message-error {
    font-size: 1.25rem;
  }
}
</style>
