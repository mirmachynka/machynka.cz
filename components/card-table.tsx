import type { Key, ReactNode } from "react"

import { cn } from "@/lib/utils"

type CardTableProps<T> = {
  className?: string
  columns?: 2 | 3
  getKey: (item: T, index: number) => Key
  itemClassName?: string
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
}

export function CardTable<T,>({
  className,
  columns = 2,
  getKey,
  itemClassName,
  items,
  renderItem,
}: CardTableProps<T>) {
  const fillerCount = items.length === 0 ? 0 : (columns - (items.length % columns)) % columns
  const columnsClass = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"

  function cellBorders(index: number) {
    const isFirstMobileCell = index === 0
    const isDesktopFirstRow = index < columns
    const isDesktopFirstColumn = index % columns === 0

    return cn(
      "border-neutral-200",
      !isFirstMobileCell && "border-t",
      isDesktopFirstRow ? "md:border-t-0" : "md:border-t",
      !isDesktopFirstColumn && "md:border-l",
    )
  }

  return (
    <div className={cn("grid w-full bg-white", columnsClass, className)}>
      {items.map((item, index) => (
        <div
          key={getKey(item, index)}
          className={cn("bg-white p-6", cellBorders(index), itemClassName)}
        >
          {renderItem(item, index)}
        </div>
      ))}
      {Array.from({ length: fillerCount }, (_, fillerIndex) => {
        const index = items.length + fillerIndex

        return (
          <div
            key={`filler-${index}`}
            aria-hidden="true"
            className={cn("hidden bg-white md:block", cellBorders(index))}
          />
        )
      })}
    </div>
  )
}
