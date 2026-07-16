import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { LANGUAGES, setLang, type Lang } from "@/src/i18n"

function useDismiss(active: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return

    const onDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) onClose()
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [active, onClose])

  return ref
}

export function LangSwitcher() {
  const { i18n, t } = useTranslation()
  const current = (i18n.resolvedLanguage as Lang) ?? "en"
  const [open, setOpen] = useState(false)
  const [menuAlign, setMenuAlign] = useState<"left" | "right">("right")
  const ref = useDismiss(open, () => setOpen(false))
  const menuRef = useRef<HTMLUListElement>(null)
  const active = LANGUAGES.find((lang) => lang.code === current) ?? LANGUAGES[0]

  useLayoutEffect(() => {
    if (!open) return

    function updateAlignment() {
      const switchEl = ref.current
      const menuEl = menuRef.current
      if (!switchEl || !menuEl) return

      const boundaryEl = switchEl.closest<HTMLElement>("[data-dropdown-boundary]")
      const boundaryRect = boundaryEl?.getBoundingClientRect()
      const leftBoundary = (boundaryRect?.left ?? 0) + 8
      const rightBoundary = (boundaryRect?.right ?? window.innerWidth) - 8
      const triggerRect = switchEl.getBoundingClientRect()
      const menuWidth = menuEl.offsetWidth
      const rightAlignedLeft = triggerRect.right - menuWidth
      const leftAlignedRight = triggerRect.left + menuWidth

      setMenuAlign(rightAlignedLeft < leftBoundary && leftAlignedRight <= rightBoundary ? "left" : "right")
    }

    updateAlignment()
    window.addEventListener("resize", updateAlignment)
    return () => window.removeEventListener("resize", updateAlignment)
  }, [open, ref])

  return (
    <div className="lang-switch" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("lang.label")}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`fi fi-${active.flag}`} aria-hidden="true" />
        <span className="lang-code">{active.code.toUpperCase()}</span>
        <span className="lang-caret" aria-hidden="true" />
      </button>
      {open ? (
        <ul className="lang-menu" data-align={menuAlign} ref={menuRef} role="listbox">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === current}
                className={lang.code === current ? "active" : undefined}
                onClick={() => {
                  setLang(lang.code)
                  setOpen(false)
                }}
              >
                <span className={`fi fi-${lang.flag}`} aria-hidden="true" />
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
