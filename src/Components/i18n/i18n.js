import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import mr from './mr.json';
import hi from './hi.json'; // Import Hindi translations

const resources = {
  en: {
    translation: en,
  },
  mr: {
    translation: mr,
  },
  hi: {
    translation: hi,  // Add Hindi translations
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
