export const SUPPORTED_LANGS = ["en", "cs"] as const

export type SupportedLang = typeof SUPPORTED_LANGS[number]

const supportedLangSet = new Set<string>(SUPPORTED_LANGS)

function normalizeLangTag(input: unknown): string {
  return String(input == null ? "" : input)
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
}

function parseWeight(entry: string): number {
  const match = /;\s*q=([0-9.]+)/i.exec(entry)
  const value = match ? Number(match[1]) : 1
  return Number.isFinite(value) ? value : 0
}

export function matchSupportedLanguage(input: unknown): SupportedLang | "" {
  const normalized = normalizeLangTag(input).split(";")[0].trim()
  if (!normalized) return ""
  if (supportedLangSet.has(normalized)) return normalized as SupportedLang

  const [base] = normalized.split("-")
  return supportedLangSet.has(base) ? base as SupportedLang : ""
}

export function pickSupportedLanguage(inputs: Iterable<unknown>): SupportedLang | "" {
  for (const input of inputs) {
    const matched = matchSupportedLanguage(input)
    if (matched) return matched
  }
  return ""
}

export function readPreferredLanguageHeader(input: unknown): SupportedLang | "" {
  const entries = String(input == null ? "" : input)
    .split(",")
    .map((entry, index) => ({ entry: entry.trim(), index, weight: parseWeight(entry) }))
    .filter((item) => item.entry)
    .sort((left, right) => right.weight - left.weight || left.index - right.index)

  for (const item of entries) {
    const matched = matchSupportedLanguage(item.entry)
    if (matched) return matched
  }
  return ""
}
