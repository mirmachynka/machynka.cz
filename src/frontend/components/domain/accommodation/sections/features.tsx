import type { I18nTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";

import { CardTable } from "#gqbmqapv1gar";
import type { Accommodation } from "#2ajuusged5jk";

type FeaturesProps = {
  accommodation: Accommodation;
  baseKey: string;
  tr: I18nTranslator;
};

export function AccommodationFeatures({ accommodation, baseKey, tr }: FeaturesProps) {
  return (
    <section className="accommodation-features">
    <div className="accommodation-features-inner">
    <h2 className="section-title">{tr("accommodationPage.featuresTitle")}</h2>

    <CardTable
    items={accommodation.features}
    columns={2}
    breakpoint="sm"
    getKey={(feature) => feature.label}
    itemClassName="accommodation-feature-cell"
    renderItem={(feature, index) => (
        <>
        <div className="accommodation-feature-icon">
        <Icon spec={feature.icon} />
        </div>
        <h3 className="accommodation-feature-title">{tr(`${baseKey}.features.feature${index + 1}`)}</h3>
        </>
    )}
    />
    </div>
    </section>
  );
}
