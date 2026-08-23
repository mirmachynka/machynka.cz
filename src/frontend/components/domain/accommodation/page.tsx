import { AccommodationRulesSection } from "./rules_section";
import { AccommodationAboutPanel } from "./sections/about_panel";
import { AccommodationFeatures } from "./sections/features";
import { AccommodationGallery } from "./sections/gallery";
import { AccommodationHero } from "./sections/hero";
import { AccommodationLocationPanel } from "./sections/location_panel";
import { AccommodationOtherPanel } from "./sections/other_panel";
import { AccommodationPricePanel } from "./sections/price_panel";
import { AccommodationRooms } from "./sections/rooms";
import { createAccommodationTranslator } from "./translator";
import { accommodations, type Accommodation } from "#2ajuusged5jk";
import { contactInfo } from "#aequr96wfpxz";
import { useLang } from "#n99t4onl5ufo";

const ACCOMMODATION_META: Record<Accommodation["id"], { priceGroupItemCounts: number[]; roomCount: number }> = {
  libuse: { roomCount: 5, priceGroupItemCounts: [2, 1, 3] },
  penzion: { roomCount: 7, priceGroupItemCounts: [2, 1] },
};

type AccommodationPageProps = {
  accommodation: Accommodation;
};

export function AccommodationPage({ accommodation }: AccommodationPageProps) {
  const lang = useLang();
  const tr = createAccommodationTranslator(lang);
  const baseKey = `accommodations.${accommodation.id}`;
  const meta = ACCOMMODATION_META[accommodation.id];
  const related = accommodations.filter((item) => item.path !== accommodation.path);
  const reservationPhone = accommodation.contact?.phone ?? contactInfo.accommodationPhone;
  const mapAddress = accommodation.contact?.address ?? accommodation.address;
  const name = tr(`${baseKey}.name`);
  const description = tr(`${baseKey}.description`);
  const detail = tr(`${baseKey}.detail`);

  return (
    <main>
    <AccommodationHero accommodation={accommodation} detail={detail} mapAddress={mapAddress} name={name} tr={tr} />
    <AccommodationFeatures accommodation={accommodation} baseKey={baseKey} tr={tr} />
    <AccommodationRooms baseKey={baseKey} roomCount={meta.roomCount} tr={tr} />
    <AccommodationGallery images={accommodation.galleryImages} name={name} tr={tr} />

    <section className="accommodation-info">
    <div className="accommodation-info-inner">
    <div className="accommodation-info-grid">
    <AccommodationAboutPanel accommodation={accommodation} baseKey={baseKey} description={description} name={name} tr={tr} />
    <AccommodationLocationPanel mapAddress={mapAddress} mapEmbedUrl={accommodation.mapEmbedUrl} name={name} tr={tr} />
    </div>

    <AccommodationPricePanel
    accommodation={accommodation}
    baseKey={baseKey}
    priceGroupItemCounts={meta.priceGroupItemCounts}
    reservationPhone={reservationPhone}
    tr={tr}
    />

    <AccommodationRulesSection intro={tr("accommodationRules.intro")} tr={tr} title={tr("accommodationPage.rulesTitle")} />

    <AccommodationOtherPanel related={related} tr={tr} />
    </div>
    </section>
    </main>
  );
}
