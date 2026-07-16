import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { matchSupportedLanguage, pickSupportedLanguage, SUPPORTED_LANGS, type SupportedLang } from "@/src/shared/lang"
import { site } from "@/src/i18n/resources/site"

export type Lang = SupportedLang

export const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "gb", label: "English" },
  { code: "cs", flag: "cz", label: "Čeština" },
]

export const LANGS = [...SUPPORTED_LANGS]

const STORAGE_KEY = "machynka-lang"

function initialLang(): Lang {
  if (typeof window === "undefined") return "en"
  const saved = window.localStorage.getItem(STORAGE_KEY)
  const savedLang = matchSupportedLanguage(saved)
  if (savedLang) return savedLang

  const documentLang = matchSupportedLanguage(document.documentElement.lang)
  if (documentLang) return documentLang

  const browserLang = pickSupportedLanguage(window.navigator.languages || [])
    || matchSupportedLanguage(window.navigator.language)
  return browserLang || "en"
}

const resources = {
  en: {
    translation: site.en,
  },
  cs: {
    translation: site.cs,
  },
}

const startLang = initialLang()

i18n.use(initReactI18next).init({
  resources,
  lng: startLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
})

if (typeof document !== "undefined") document.documentElement.lang = startLang

export function setLang(lang: Lang): void {
  void i18n.changeLanguage(lang)
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }
}

export default i18n
