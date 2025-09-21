import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// ייבוא התרגומים
import translationEN from "./locales/en/translation.json";
import translationHE from "./locales/he/translation.json";
import translationES from "./locales/es/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      he: { translation: translationHE },
      es: { translation: translationES },
    },
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie"],
      lookupCookie: "preferred-language", // זה השם של הקוקי שלנו
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;