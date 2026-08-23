import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import type { Lang } from "#vfzpzm3jpkln";

export function createAccommodationTranslator(lang: Lang): I18nTranslator {
  return createLocalTranslator(import.meta.url, lang);
}
