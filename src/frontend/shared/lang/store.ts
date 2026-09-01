import { matchSupportedLanguage, pickSupportedLanguage, SUPPORTED_LANGS, type SupportedLang } from "./detect";

export type Lang = SupportedLang;

export const LANGS = [...SUPPORTED_LANGS];

export const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "GB", label: "English" },
  { code: "cs", flag: "CZ", label: "Čeština" },
];

const STORAGE_KEY = "machynka-lang";

type Listener = (lang: Lang) => void;

const listeners = new Set<Listener>();

function storedLang(): SupportedLang | "" {
  try {
    return matchSupportedLanguage(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return "";
  }
}

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "cs";

  const stored = storedLang();
  if (stored) return stored;

  const documentLang = matchSupportedLanguage(document.documentElement.lang);
  if (documentLang) return documentLang;

  const browserLang =
  pickSupportedLanguage(window.navigator.languages || []) || matchSupportedLanguage(window.navigator.language);
  return browserLang || "en";
}

let currentLang: Lang = detectInitialLang();

if (typeof document !== "undefined") document.documentElement.lang = currentLang;

export function getLang(): Lang {
  return currentLang;
}

export function setLang(lang: Lang): void {
  currentLang = lang;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }
  for (const listener of listeners) listener(lang);
}

export function onLangChanged(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
