import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import resources
import arResources from './locales/ar';
import enResources from './locales/en';

const resources = {
  ar: {
    translation: arResources,
  },
  en: {
    translation: enResources,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('preferredLanguage') || 'ar',
  fallbackLng: 'ar',
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
