import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation files
import en from './locales/en.json'
import sw from './locales/sw.json'
import fr from './locales/fr.json'
import rw from './locales/rw.json'
import am from './locales/am.json'
import zu from './locales/zu.json'

const resources = {
  en: { translation: en },
  sw: { translation: sw }, // Kiswahili
  fr: { translation: fr }, // French
  rw: { translation: rw }, // Kinyarwanda
  am: { translation: am }, // Amharic
  zu: { translation: zu }, // isiZulu
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n