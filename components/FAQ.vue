<template>
  <section class="wrapper-section">
    <div class="content-wrapper">
      <p class="title">FAQ</p>
      <div class="acordions-wrapper">
        <AcordionItem>
          <template #title>
            <p>Quanto costa tinteggiare un appartamento?</p>
          </template>
          <template #content>
            <div class="content-wrapper">
              <p>Il costo può variare in base a diversi fattori, come:</p>
              <ul>
                <li>la superficie da tinteggiare</li>
                <li>la presenza di mobili da spostare</li>
                <li>
                  le condizioni attuali delle pareti (presenza di crepe, vecchie
                  pitture, intonaci danneggiati)
                </li>
                <li>il tipo di finitura o vernice richiesta</li>
              </ul>
              <p>
                Ti consigliamo di richiedere un preventivo gratuito, così
                possiamo valutare il lavoro in base alle tue esigenze
                specifiche.
              </p>
            </div>
          </template>
        </AcordionItem>
        <AcordionItem>
          <template #title>
            <p>Quanto tempo richiede il lavoro?</p>
          </template>
          <template #content>
            <div class="content-wrapper">
              <p>
                La durata del lavoro dipende principalmente dalla dimensione
                dell'appartamento, dal numero di stanze da tinteggiare e dalle
                condizioni delle pareti.
              </p>

              <p>
                In media, per un appartamento di circa 80–100 m², il lavoro può
                richiedere da 3 a 5 giorni lavorativi. Se sono necessari
                interventi aggiuntivi (come rasature, stuccature o spostamento
                di molti mobili), i tempi possono allungarsi leggermente.
              </p>

              <p>
                Contattaci per un sopralluogo gratuito e ti forniremo una stima
                precisa dei tempi.
              </p>
            </div>
          </template>
        </AcordionItem>
        <AcordionItem>
          <template #title>
            <p>Quali tipi di vernice usate?</p>
          </template>
          <template #content>
            <div class="content-wrapper">
              <p>
                Utilizziamo vernici professionali, selezionate in base
                all’ambiente da tinteggiare e alle esigenze del cliente.
              </p>

              <ul>
                <li>
                  Vernici traspiranti: adatte per ambienti umidi come bagni e
                  cucine, permettono alla parete di "respirare" e aiutano a
                  prevenire la formazione di muffa.
                </li>
                <li>
                  Vernici “lavabili”: attenzione, il termine può trarre in
                  inganno. Queste vernici sono più resistenti rispetto alle
                  pitture comuni, ma non sono completamente lavabili come una
                  superficie in ceramica. Si possono pulire delicatamente, ma
                  non sopportano sfregamenti intensi o detergenti aggressivi.
                </li>
                <li>
                  Smalti murali o vernici altamente lavabili: se hai bisogno di
                  una parete davvero resistente e facile da pulire (ad esempio
                  in ambienti pubblici o con bambini), usiamo prodotti più
                  tecnici, pensati per una pulizia frequente.
                </li>
              </ul>
            </div>
          </template>
        </AcordionItem>
        <AcordionItem>
          <template #title>
            <p>Devo lasciare l'appartamento durante i lavori?</p>
          </template>
          <template #content>
            <div class="content-wrapper">
              <p>
                Nella maggior parte dei casi, non è necessario lasciare
                l'appartamento durante i lavori.
              </p>

              <p>Tuttavia, è importante considerare alcuni aspetti pratici:</p>

              <ul>
                <li>
                  Odori: anche se usiamo vernici a bassa emissione, potrebbero
                  esserci odori temporanei durante e subito dopo l'applicazione.
                </li>
                <li>
                  Accessibilità: alcune stanze potrebbero essere inaccessibili
                  per qualche ora o giorno, a seconda dell'organizzazione dei
                  lavori.
                </li>
                <li>
                  Polvere e spostamento mobili: in fase di preparazione
                  potrebbero esserci piccoli disagi (copertura arredi,
                  protezione pavimenti, ecc.).
                </li>
              </ul>

              <p>
                Se preferisci non essere presente o vuoi ridurre al minimo il
                disagio, possiamo pianificare i lavori in più fasi o in tua
                assenza, sempre con la massima attenzione e sicurezza.
              </p>

              <p>
                Siamo disponibili a concordare insieme la soluzione più comoda
                per te.
              </p>
            </div>
          </template>
        </AcordionItem>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper-section {
  background-color: var(--clr-primary);
  width: 100%;
  padding: 2.5rem 5%;
}

.acordions-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  font-family: "Montserrat";
  color: var(--clr-white);
}

.content {
  font-family: "Montserrat";
  font-size: 1rem;
  letter-spacing: 1px;
  /* padding: 0 0.75rem 1rem; */
  line-height: 1.4;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  /* margin: 1rem 0; */
}

li {
  margin-bottom: 0.75rem;
}

@media (min-width: 992px) {
  /* wrappers */
  .wrapper-section {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  .acordions-wrapper {
    gap: 2rem;
  }

  .content-wrapper {
    max-width: 1280px;
    margin: 0 auto;
  }

  .title {
    font-size: 3rem;
  }
}
</style>
