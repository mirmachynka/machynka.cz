import { normalizeLocaleRouting } from "@trebired/frontend";

export const SUPPORTED_LANGS = ["cs", "en"] as const;

export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export type Lang = SupportedLang;

export const DEFAULT_LANG: SupportedLang = "cs";

export const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: "cs", flag: "CZ", label: "Čeština" },
  { code: "en", flag: "GB", label: "English" },
];

export const LANG_ROUTING = normalizeLocaleRouting({
    defaultLocale: DEFAULT_LANG,
    locales: [...SUPPORTED_LANGS],
    storageKey: "machynka-lang",
});
