import { useEffect, useState } from "react";
import { getLang, onLangChanged, type Lang } from "./store";

export function useLang(): Lang {
  const [lang, setLangState] = useState<Lang>(getLang());
  useEffect(() => onLangChanged(setLangState), []);
  return lang;
}
