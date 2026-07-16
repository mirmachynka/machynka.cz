import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { useEffect, useId, useState } from "react"

import { cn } from "@/lib/utils"

const closeAnimationMs = 320

type ExpandableImageProps = {
  alt: string
  className?: string
  imageClassName?: string
  images?: string[]
  index?: number
  src: string
}

export function ExpandableImage({ alt, className, imageClassName, images, index = 0, src }: ExpandableImageProps) {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(index)
  const titleId = useId()
  const gallery = images?.length ? images : [src]
  const safeIndex = Math.min(Math.max(index, 0), gallery.length - 1)
  const currentIndex = Math.min(Math.max(activeIndex, 0), gallery.length - 1)
  const currentSrc = gallery[currentIndex] ?? src
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < gallery.length - 1
  const currentAlt = gallery.length > 1 ? `${alt} ${currentIndex + 1}` : alt
  const thumbnailAlt = gallery.length > 1 ? `${alt} ${safeIndex + 1}` : alt

  function close() {
    setVisible(false)
    window.setTimeout(() => setOpen(false), closeAnimationMs)
  }

  function expand() {
    setActiveIndex(safeIndex)
    setOpen(true)
    window.requestAnimationFrame(() => setVisible(true))
  }

  function showPrevious() {
    setActiveIndex((current) => Math.max(current - 1, 0))
  }

  function showNext() {
    setActiveIndex((current) => Math.min(current + 1, gallery.length - 1))
  }

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, gallery.length])

  return (
    <>
      <button
        type="button"
        onClick={expand}
        className={cn(
          "group relative block cursor-pointer overflow-hidden bg-neutral-100 text-left outline-none focus-visible:ring-[3px] focus-visible:ring-primary/45",
          className,
        )}
        aria-label={`Zvětšit fotografii: ${thumbnailAlt}`}
      >
        <img
          src={src}
          alt={thumbnailAlt}
          loading="lazy"
          className={cn("h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", imageClassName)}
        />
        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-neutral-950/70 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={`fixed inset-0 z-[120] flex items-center justify-center bg-neutral-950/88 p-4 transition-opacity duration-300 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              close()
            }}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 cursor-pointer items-center justify-center bg-neutral-950/35 text-white backdrop-blur transition-colors hover:bg-primary/70 sm:right-6 sm:top-6"
            aria-label="Zavřít fotografii"
          >
            <X className="h-5 w-5" />
          </button>

          {hasPrevious && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showPrevious()
              }}
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-neutral-950/35 text-white shadow-2xl backdrop-blur transition-colors hover:bg-primary/70 sm:left-6 sm:h-14 sm:w-14"
              aria-label="Předchozí fotografie"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-neutral-950/35 text-white shadow-2xl backdrop-blur transition-colors hover:bg-primary/70 sm:right-6 sm:h-14 sm:w-14"
              aria-label="Další fotografie"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div
            className={`relative flex max-w-[min(94vw,76rem)] flex-col items-center transition-[opacity,transform] duration-300 ease-out ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id={titleId} className="sr-only">
              {currentAlt}
            </h2>
            <img
              src={currentSrc}
              alt={currentAlt}
              className="h-auto max-h-[86vh] w-auto max-w-full object-contain shadow-2xl"
            />
            <p className="mt-4 text-center text-sm font-bold text-white/70">{currentAlt}</p>
          </div>
        </div>
      )}
    </>
  )
}
