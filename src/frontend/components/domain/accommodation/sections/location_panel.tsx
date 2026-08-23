import { Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { GoogleMapEmbed } from "#47jjzns0wjli";
import { ICON_MAP_PIN } from "#gpkp4b4vfavh";

type LocationPanelProps = {
  mapAddress: string;
  mapEmbedUrl: string;
  name: string;
  tr: I18nTranslator;
};

export function AccommodationLocationPanel({ mapAddress, mapEmbedUrl, name, tr }: LocationPanelProps) {
  return (
    <div className="accommodation-panel">
    <Icon spec={ICON_MAP_PIN} className="accommodation-panel-icon" />
    <h2 className="accommodation-panel-title">{tr("accommodationPage.locationTitle")}</h2>
    <p className="accommodation-panel-text">{mapAddress}</p>
    <div className="accommodation-map">
    <GoogleMapEmbed src={mapEmbedUrl} className="accommodation-map-frame" title={tr("accommodationPage.mapTitle", { name })} />
    </div>
    </div>
  );
}
