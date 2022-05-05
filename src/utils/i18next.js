import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const backend = new Backend({
	loadPath: '/locales/{{lng}}/{{ns}}.json',
})

i18n
	.use(backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ua',
		whitelist: ['en', 'ua'],
		debug: false,
		detection: { order: ['cookie', 'localStorage'], caches: ['cookie', 'localStorage'] },
		interpolation: { escapeValue: false },
	})

export default i18n
