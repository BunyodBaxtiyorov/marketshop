// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part3: "Blog",
            vse: "Barcha Bo'limlar",
            Kirish: "Kirish",
            like: "Sevimlilar",
            elon: "Elon berish",
          },
        },
      },

      ru: {
        translation: {
          description: {
            part3: "Блог",
            vse: "Все отделы",
            Kirish: "Выход",
            like: "Избранное",
            elon: "Дарить Илону",
          },
        },
      },
    },
  });

export default i18n;
