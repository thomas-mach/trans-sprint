// plugins/fontawesome.ts

// 1. Importa tutto PRIMA di usare
import { library, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faPhone,
  faEnvelope,
  faHouse,
  faShield,
  faSpa,
  faLeaf,
  faHandshake,
  faPlus,
  faMinus,
  faSackDollar,
  faStar,
  faGem,
  faClock,
  faSprayCanSparkles,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
// import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// 2. Configura solo dopo tutti gli import
config.autoAddCss = false;

library.add(
  faPhone,
  faEnvelope,
  faWhatsapp,
  faGem,
  faHouse,
  faShield,
  faSpa,
  faLeaf,
  faHandshake,
  faPlus,
  faMinus,
  faSackDollar,
  faStar,
  faGem,
  faClock,
  faSprayCanSparkles,
  faArrowRightLong
);

// 3. Esporta il plugin
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
