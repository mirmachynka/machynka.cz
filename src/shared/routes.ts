import { matchSupportedLanguage, type SupportedLang } from "@/src/shared/lang"

type RouteMeta = {
  description: string
  title: string
}

const PRODUCT = "MACHYNKA s.r.o."
const TITLE_SEPARATOR = " | "

function pageTitle(page: string): string {
  return [page, PRODUCT].join(TITLE_SEPARATOR)
}

export const REDIRECTS: Record<string, string> = {
  "/apartmany-libuse": "/ubytovani/apartmany-libuse",
  "/penzion-machynka": "/ubytovani/penzion-machynka",
}

const ROUTES: Record<string, Record<SupportedLang, RouteMeta>> = {
  "/": {
    en: {
      title: pageTitle("Accommodation in Bučovice"),
      description: "MACHYNKA s.r.o. provides accommodation in Bučovice at Apartmány Libuše and Penzion Machynka.",
    },
    cs: {
      title: pageTitle("Ubytování v Bučovicích"),
      description: "MACHYNKA s.r.o. poskytuje ubytování v Bučovicích v Apartmánech Libuše a Penzionu Machynka.",
    },
  },
  "/ubytovani/apartmany-libuse": {
    en: {
      title: pageTitle("Apartmány Libuše"),
      description: "Apartmány Libuše offers practical accommodation in Bučovice with equipped kitchens.",
    },
    cs: {
      title: pageTitle("Apartmány Libuše"),
      description: "Apartmány Libuše nabízí praktické ubytování v Bučovicích s vybavenou kuchyní.",
    },
  },
  "/ubytovani/penzion-machynka": {
    en: {
      title: pageTitle("Penzion Machynka"),
      description: "Penzion Machynka offers studios and apartments in a quieter part of Bučovice.",
    },
    cs: {
      title: pageTitle("Penzion Machynka"),
      description: "Penzion Machynka nabízí studia a apartmány v klidnější části Bučovic.",
    },
  },
}

const NOT_FOUND_META: Record<SupportedLang, RouteMeta> = {
  en: {
    title: pageTitle("Page not found"),
    description: "This page does not exist.",
  },
  cs: {
    title: pageTitle("Stránka nenalezena"),
    description: "Tato stránka neexistuje.",
  },
}

export function canonicalPath(path: string): string {
  return REDIRECTS[path] ?? path
}

export function routeExists(path: string): boolean {
  return Object.hasOwn(ROUTES, path)
}

export function metaFor(path: string, langInput: unknown = "cs"): RouteMeta {
  const lang = matchSupportedLanguage(langInput) || "cs"
  return ROUTES[canonicalPath(path)]?.[lang] ?? NOT_FOUND_META[lang]
}
