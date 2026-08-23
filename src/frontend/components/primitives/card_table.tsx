import type { Key, ReactNode } from "react";

type CardTableProps<T> = {
  breakpoint?: "md" | "sm";
  className?: string;
  columns?: 2 | 3;
  getKey: (item: T, index: number) => Key;
  itemClassName?: string;
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  tone?: "dark" | "light";
};

export function CardTable<T>({
    breakpoint = "md",
    className,
    columns = 2,
    getKey,
    itemClassName,
    items,
    renderItem,
    tone = "light",
  }: CardTableProps<T>) {
  const fillerCount = items.length === 0 ? 0 : (columns - (items.length % columns)) % columns;
  const wrapperClasses = ["card-table", `card-table-cols-${columns}`, `card-table-bp-${breakpoint}`, `card-table-${tone}`, className]
  .filter(Boolean)
  .join(" ");
  const cellClasses = ["card-table-cell", itemClassName].filter(Boolean).join(" ");

  return (
    <div className={wrapperClasses}>
    {items.map((item, index) => (
          <div key={getKey(item, index)} className={cellClasses}>
          {renderItem(item, index)}
          </div>
    ))}
    {Array.from({ length: fillerCount }, (_, fillerIndex) => (
          <div key={`filler-${items.length + fillerIndex}`} aria-hidden="true" className="card-table-filler" />
    ))}
    </div>
  );
}
