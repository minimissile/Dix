import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationZH from './locales/zh/translation.json'

const resources = {
  'en': { translation: translationEN },
  'zh-CN': { translation: translationZH },
}

const lang = localStorage.cherrySwapLanguage || 'en'

console.log('lang ???????????', lang)

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: lang,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
