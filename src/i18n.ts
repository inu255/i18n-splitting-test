import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import firstRu from './components/FirstComponent/ru.json'
import firstEn from './components/FirstComponent/en.json'

import secondRu from './components/SecondComponent/ru.json'
import secondEn from './components/SecondComponent/en.json'

const resources = {
  en: {
    first: firstEn,
    second: secondEn
  }
    
  ,
  ru: {
    first: firstRu,
    second: secondRu
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",
    ns: ['first', 'second'],
    defaultNS: 'first',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
  