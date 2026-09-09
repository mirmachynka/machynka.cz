import { useLocale } from "@trebired/frontend/react";

import { DEFAULT_LANG, type Lang } from "./policy";

export function useLang(): Lang {
  return (useLocale().locale || DEFAULT_LANG) as Lang;
}
