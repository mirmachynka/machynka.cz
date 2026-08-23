import type { I18nTranslator } from "@trebired/i18n";

import { ExpandableImage } from "#oq3el5biuo0q";

type GalleryProps = {
  images: string[];
  name: string;
  tr: I18nTranslator;
};

export function AccommodationGallery({ images, name, tr }: GalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="accommodation-gallery">
    <div className="accommodation-gallery-inner">
    <div className="accommodation-gallery-head">
    <span className="section-label">{tr("accommodationPage.galleryLabel")}</span>
    <h2 className="section-title">{tr("accommodationPage.galleryTitle")}</h2>
    </div>

    <div className="accommodation-gallery-grid">
    {images.map((image, index) => (
          <ExpandableImage key={image} src={image} alt={name} images={images} index={index} className="accommodation-gallery-item" />
    ))}
    </div>
    </div>
    </section>
  );
}
