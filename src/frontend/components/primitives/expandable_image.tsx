import { Icon } from "@trebired/frontend/react";
import { useEffect, useId, useState } from "react";

import { ICON_CHEVRON_LEFT, ICON_CHEVRON_RIGHT, ICON_MAXIMIZE, ICON_CLOSE } from "#gpkp4b4vfavh";

const closeAnimationMs = 320;

type ExpandableImageProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  images?: string[];
  index?: number;
  src: string;
};

function useGalleryState(gallery: string[], index: number) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(index);
  const currentIndex = Math.min(Math.max(activeIndex, 0), gallery.length - 1);

  function close() {
    setVisible(false);
    window.setTimeout(() => setOpen(false), closeAnimationMs);
  }

  function expand(safeIndex: number) {
    setActiveIndex(safeIndex);
    setOpen(true);
    window.requestAnimationFrame(() => setVisible(true));
  }

  function showPrevious() {
    setActiveIndex((current) => Math.max(current - 1, 0));
  }

  function showNext() {
    setActiveIndex((current) => Math.min(current + 1, gallery.length - 1));
  }

  useEffect(() => {
      if (!open) return;

      function onKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") close();
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }

      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    }, [open, gallery.length]);

  return { close, currentIndex, expand, open, showNext, showPrevious, visible };
}

function LightboxNav({ hasNext, hasPrevious, showNext, showPrevious }: {
    hasNext: boolean;
    hasPrevious: boolean;
    showNext: () => void;
    showPrevious: () => void;
}) {
  return (
    <>
    {hasPrevious && (
        <button
        type="button"
        onClick={(event) => {
            event.stopPropagation();
            showPrevious();
        }}
        className="expandable-image-nav expandable-image-nav-prev"
        aria-label="Předchozí fotografie"
        >
        <Icon spec={ICON_CHEVRON_LEFT} />
        </button>
    )}

    {hasNext && (
        <button
        type="button"
        onClick={(event) => {
            event.stopPropagation();
            showNext();
        }}
        className="expandable-image-nav expandable-image-nav-next"
        aria-label="Další fotografie"
        >
        <Icon spec={ICON_CHEVRON_RIGHT} />
        </button>
    )}
    </>
  );
}

function LightboxClose({ close }: { close: () => void }) {
  return (
    <button
    type="button"
    onClick={(event) => {
        event.stopPropagation();
        close();
    }}
    className="expandable-image-close"
    aria-label="Zavřít fotografii"
    >
    <Icon spec={ICON_CLOSE} />
    </button>
  );
}

function LightboxViewer({ alt, currentSrc, titleId, visible }: { alt: string; currentSrc: string; titleId: string; visible: boolean }) {
  return (
    <div className={`expandable-image-viewer ${visible ? "expandable-image-viewer-visible" : ""}`} onClick={(event) => event.stopPropagation()}>
    <h2 id={titleId} className="sr-only">
    {alt}
    </h2>
    <img src={currentSrc} alt={alt} className="expandable-image-viewer-img" />
    <p className="expandable-image-caption">{alt}</p>
    </div>
  );
}

function Lightbox({
    alt,
    close,
    currentSrc,
    hasNext,
    hasPrevious,
    showNext,
    showPrevious,
    titleId,
    visible,
  }: {
    alt: string;
    close: () => void;
    currentSrc: string;
    hasNext: boolean;
    hasPrevious: boolean;
    showNext: () => void;
    showPrevious: () => void;
    titleId: string;
    visible: boolean;
}) {
  return (
    <div
    role="dialog"
    aria-modal="true"
    aria-labelledby={titleId}
    className={`expandable-image-lightbox ${visible ? "expandable-image-lightbox-visible" : ""}`}
    onClick={close}
    >
    <LightboxClose close={close} />
    <LightboxNav hasNext={hasNext} hasPrevious={hasPrevious} showNext={showNext} showPrevious={showPrevious} />
    <LightboxViewer alt={alt} currentSrc={currentSrc} titleId={titleId} visible={visible} />
    </div>
  );
}

export function ExpandableImage({ alt, className, imageClassName, images, index = 0, src }: ExpandableImageProps) {
  const gallery = images?.length ? images : [src];
  const safeIndex = Math.min(Math.max(index, 0), gallery.length - 1);
  const titleId = useId();
  const { close, currentIndex, expand, open, showNext, showPrevious, visible } = useGalleryState(gallery, index);
  const currentSrc = gallery[currentIndex] ?? src;
  const currentAlt = gallery.length > 1 ? `${alt} ${currentIndex + 1}` : alt;
  const thumbnailAlt = gallery.length > 1 ? `${alt} ${safeIndex + 1}` : alt;
  const thumbnailClasses = ["expandable-image", className].filter(Boolean).join(" ");
  const thumbnailImageClasses = ["expandable-image-img", imageClassName].filter(Boolean).join(" ");

  return (
    <>
    <button type="button" onClick={() => expand(safeIndex)} className={thumbnailClasses} aria-label={`Zvětšit fotografii: ${thumbnailAlt}`}>
    <img src={src} alt={thumbnailAlt} loading="lazy" className={thumbnailImageClasses} />
    <span className="expandable-image-expand-icon">
    <Icon spec={ICON_MAXIMIZE} />
    </span>
    </button>

    {open && (
        <Lightbox
        alt={currentAlt}
        close={close}
        currentSrc={currentSrc}
        hasNext={currentIndex < gallery.length - 1}
        hasPrevious={currentIndex > 0}
        showNext={showNext}
        showPrevious={showPrevious}
        titleId={titleId}
        visible={visible}
        />
    )}
    </>
  );
}
