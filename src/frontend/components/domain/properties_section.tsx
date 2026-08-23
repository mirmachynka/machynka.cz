import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";

import { createAccommodationTranslator } from "./accommodation/translator";
import { ICON_ARROW_UP_RIGHT } from "#gpkp4b4vfavh";
import { accommodations, type Accommodation } from "#2ajuusged5jk";
import { useLang } from "#n99t4onl5ufo";
import { Link } from "#eww9luqvc386";

function PropertyCard({ property, ta, tr }: { property: Accommodation; ta: I18nTranslator; tr: I18nTranslator }) {
  const name = ta(`accommodations.${property.id}.name`);
  const description = ta(`accommodations.${property.id}.description`);

  return (
    <Link href={property.path} className="property-card">
    <div className="property-card-media">
    <img src={property.exteriorImage} alt={name} loading="lazy" className="property-card-image" />
    <div className="property-card-scrim" />
    <div className="property-card-badge">{tr("properties.roomsCount", { count: property.rooms })}</div>
    <div className="property-card-arrow">
    <Icon spec={ICON_ARROW_UP_RIGHT} />
    </div>
    </div>

    <div className="property-card-body">
    <h3 className="property-card-title">{name}</h3>
    <p className="property-card-description">{description}</p>

    <div className="property-card-features">
    {property.features.map((feature, featureIndex) => (
          <div key={feature.label} className="property-card-feature">
          <div className="property-card-feature-icon">
          <Icon spec={feature.icon} />
          </div>
          <span>{ta(`accommodations.${property.id}.features.feature${featureIndex + 1}`)}</span>
          </div>
    ))}
    </div>

    <div className="property-card-footer">
    <span className="property-card-address">{property.address}</span>
    <span className="property-card-detail">{tr("properties.detail")}</span>
    </div>
    </div>
    </Link>
  );
}

export function PropertiesSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);
  const ta = createAccommodationTranslator(lang);

  return (
    <section id="ubytovani" className="properties-section">
    <div className="properties-section-inner">
    <div className="properties-section-head">
    <span className="section-label">{tr("properties.label")}</span>
    <h2 className="section-title">{tr("properties.title")}</h2>
    </div>

    <div className="properties-section-grid">
    {accommodations.map((property) => (
          <PropertyCard key={property.path} property={property} ta={ta} tr={tr} />
    ))}
    </div>
    </div>
    </section>
  );
}
