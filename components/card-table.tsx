import type { Key, ReactNode } from "react"

import { cn } from "@/lib/utils"

type CardTableProps<T> = {
  borderClassName?: string
  breakpoint?: "sm" | "md" | "lg"
  className?: string
  columns?: 2 | 3
  fillerClassName?: string
  getKey: (item: T, index: number) => Key
  itemClassName?: string
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
}

const columnClasses = {
  "2-lg": "lg:grid-cols-2",
  "2-md": "md:grid-cols-2",
  "2-sm": "sm:grid-cols-2",
  "3-lg": "lg:grid-cols-3",
  "3-md": "md:grid-cols-3",
  "3-sm": "sm:grid-cols-3",
} as const

const borderClasses = {
  lg: {
    left: "lg:border-l",
    top: "lg:border-t",
    topNone: "lg:border-t-0",
  },
  md: {
    left: "md:border-l",
    top: "md:border-t",
    topNone: "md:border-t-0",
  },
  sm: {
    left: "sm:border-l",
    top: "sm:border-t",
    topNone: "sm:border-t-0",
  },
} as const

const blockClasses = {
  lg: "lg:block",
  md: "md:block",
  sm: "sm:block",
} as const

export function CardTable<T,>({
  borderClassName = "border-neutral-200",
  breakpoint = "md",
  className,
  columns = 2,
  fillerClassName,
  getKey,
  itemClassName,
  items,
  renderItem,
}: CardTableProps<T>) {
  const fillerCount = items.length === 0 ? 0 : (columns - (items.length % columns)) % columns
  const columnsClass = columnClasses[`${columns}-${breakpoint}` as keyof typeof columnClasses]
  const responsiveBorder = borderClasses[breakpoint]
  const responsiveBlock = blockClasses[breakpoint]

  function cellBorders(index: number) {
    const isFirstMobileCell = index === 0
    const isDesktopFirstRow = index < columns
    const isDesktopFirstColumn = index % columns === 0

    return cn(
      borderClassName,
      !isFirstMobileCell && "border-t",
      isDesktopFirstRow ? responsiveBorder.topNone : responsiveBorder.top,
      !isDesktopFirstColumn && responsiveBorder.left,
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
            className={cn("hidden bg-white", responsiveBlock, cellBorders(index), fillerClassName)}
          />
        )
      })}
    </div>
  )
}
