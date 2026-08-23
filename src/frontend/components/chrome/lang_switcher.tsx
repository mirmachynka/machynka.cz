import { createLocalTranslator } from "@trebired/i18n";
import { frontendDataAttr, frontendModifierClass } from "@trebired/frontend";
import { PopoverOpenButton, PopoverPanel } from "@trebired/frontend/react";
import { useId } from "react";

import { LANGUAGES, setLang } from "#vfzpzm3jpkln";
import { useLang } from "#n99t4onl5ufo";

const TRIGGER_CLASS = `lang-trigger ${frontendModifierClass("button", "chip")}`;

export function LangSwitcher() {
  const current = useLang();
  const tr = createLocalTranslator(import.meta.url, current);
  const menuId = useId();
  const active = LANGUAGES.find((lang) => lang.code === current) ?? LANGUAGES[0];

  return (
    <div className="lang-switch">
    <PopoverOpenButton controls={menuId} className={TRIGGER_CLASS} aria-label={tr("lang.label")}>
    <span className={`lang-flag flag:${active.flag}`} aria-hidden="true" />
    <span className="lang-code">{active.code.toUpperCase()}</span>
    <span className="lang-caret" aria-hidden="true" />
    </PopoverOpenButton>
    <PopoverPanel id={menuId} className="lang-menu" role="listbox">
    {LANGUAGES.map((lang) => (
          <button
          key={lang.code}
          type="button"
          role="option"
          aria-selected={lang.code === current}
          className={lang.code === current ? "active" : undefined}
          {...{ [frontendDataAttr("popover-close")]: "" }}
          onClick={() => setLang(lang.code)}
          >
          <span className={`lang-flag flag:${lang.flag}`} aria-hidden="true" />
          <span>{lang.label}</span>
          </button>
    ))}
    </PopoverPanel>
    </div>
  );
}
