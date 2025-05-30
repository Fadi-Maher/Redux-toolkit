import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./translation/enTranslation.json";
import arTranslation from "./translation/arTranslation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation,},
    ar: { translation: arTranslation,},
         },

         
  lng: "en",
  fallbackLng: "ar",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
