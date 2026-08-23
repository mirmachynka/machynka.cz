import { matchSupportedLanguage as matchLang, pickSupportedLanguage as pickLang } from "@trebired/i18n";

export const SUPPORTED_LANGS = ["en", "cs"] as const;

export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export function matchSupportedLanguage(input: unknown): SupportedLang | "" {
  return matchLang(input, SUPPORTED_LANGS);
}

export function pickSupportedLanguage(inputs: Iterable<unknown>): SupportedLang | "" {
  return pickLang(inputs, SUPPORTED_LANGS);
}
