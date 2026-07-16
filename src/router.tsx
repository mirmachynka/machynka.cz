import { createContext, useContext, useEffect, useState } from "react"
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react"

import i18n from "@/src/i18n"
import { canonicalPath, metaFor, routeExists } from "@/src/shared/routes"

type RouterValue = {
  navigate: (to: string) => void
  path: string
}

const RouterContext = createContext<RouterValue>({
  navigate: () => {},
  path: "/",
})

function scrollToHash(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0 })
    return
  }

  const element = document.getElementById(hash.slice(1))
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

function syncDocumentTitle(path: string) {
  document.title = metaFor(path, i18n.resolvedLanguage).title
}

function readCurrentPath() {
  const canonical = canonicalPath(window.location.pathname)
  return routeExists(canonical) ? canonical : "/"
}

export function Router({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readCurrentPath)

  function navigate(to: string) {
    const url = new URL(to, window.location.origin)
    const nextPath = canonicalPath(url.pathname)
    const canonical = routeExists(nextPath) ? nextPath : "/"
    const samePath = canonical === readCurrentPath()

    history.pushState({}, "", canonical + url.search + url.hash)
    setPath(canonical)
    syncDocumentTitle(canonical)

    requestAnimationFrame(() => {
      scrollToHash(url.hash)
      if (!samePath && !url.hash) window.scrollTo({ top: 0 })
    })
  }

  useEffect(() => {
    const canonical = readCurrentPath()
    if (canonical !== window.location.pathname) {
      history.replaceState({}, "", canonical + window.location.search + window.location.hash)
      setPath(canonical)
    }
    syncDocumentTitle(canonical)
    requestAnimationFrame(() => scrollToHash(window.location.hash))

    const onPopState = () => {
      const nextPath = readCurrentPath()
      setPath(nextPath)
      syncDocumentTitle(nextPath)
      requestAnimationFrame(() => scrollToHash(window.location.hash))
    }

    const onLanguageChanged = () => syncDocumentTitle(window.location.pathname)

    window.addEventListener("popstate", onPopState)
    i18n.on("languageChanged", onLanguageChanged)
    return () => {
      window.removeEventListener("popstate", onPopState)
      i18n.off("languageChanged", onLanguageChanged)
    }
  }, [])

  return <RouterContext.Provider value={{ navigate, path }}>{children}</RouterContext.Provider>
}

export function useRouter(): RouterValue {
  return useContext(RouterContext)
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function Link({ href, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (event.defaultPrevented) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return

    const url = new URL(href, window.location.origin)
    if (url.origin !== window.location.origin) return

    event.preventDefault()
    navigate(url.pathname + url.search + url.hash)
  }

  return <a href={href} onClick={handleClick} {...rest} />
}
