import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import *  as en from './locales/en/translation.json';
import *  as ar from './locales/ar/translation.json';
import *  as krd from './locales/krd/translation.json';


i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: en
    },
    ar: {
      translations: ar
    },
    krd: {
        translations: krd
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'er', 'krd'];

export default i18n;