import { ClipboardList } from "lucide-react"

import { CardTable } from "@/components/card-table"

export type AccommodationRule = {
  items: string[]
  title: string
}

type AccommodationRulesSectionProps = {
  intro: string
  rules: AccommodationRule[]
  title: string
}

export function AccommodationRulesSection({ intro, rules, title }: AccommodationRulesSectionProps) {
  if (rules.length === 0) return null

  return (
    <div className="mt-6 bg-white p-6 sm:p-10">
      <ClipboardList className="mb-8 h-10 w-10 text-primary" />
      <h2 className="mb-4 break-words text-xl font-black uppercase tracking-normal text-neutral-900 sm:text-2xl">
        {title}
      </h2>
      <p className="max-w-3xl leading-relaxed text-neutral-600">{intro}</p>
      <CardTable
        items={rules}
        className="mt-8"
        getKey={(rule) => rule.title}
        renderItem={(rule) => (
          <>
            <h3 className="mb-4 break-words text-base font-black uppercase tracking-normal text-neutral-900">
              {rule.title}
            </h3>
            <ul className="space-y-3">
              {rule.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-neutral-600">
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      />
    </div>
  )
}
