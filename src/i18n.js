import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    // resources: {
    //   en: {
    //     translation: {
    //       greeting: "Hello, Welcome!",
    //       description: {
    //         line1:
    //           "Hey guys, I'm working as a professional <1>{{designation}}</1>.",
    //       },
    //     },
    //   },
    // },
  });
