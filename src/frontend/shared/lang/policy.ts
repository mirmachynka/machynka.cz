import { languageName, normalizeLocaleRouting } from "@trebired/frontend";

export const SUPPORTED_LANGS = ["cs", "en"] as const;

export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export type Lang = SupportedLang;

export const DEFAULT_LANG: SupportedLang = "cs";

export const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: "cs", flag: "CZ", label: languageName("cs") },
  { code: "en", flag: "GB", label: languageName("en") },
];

export const LANG_ROUTING = normalizeLocaleRouting({
    defaultLocale: DEFAULT_LANG,
    locales: [...SUPPORTED_LANGS],
    storageKey: "machynka-lang",
});
