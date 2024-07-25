import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationsEn from './languages/en-US.json'
import translationsEs from './languages/es-ES.json'

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
        es: { translation: translationsEs },
        en: { translation: translationsEn },
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
