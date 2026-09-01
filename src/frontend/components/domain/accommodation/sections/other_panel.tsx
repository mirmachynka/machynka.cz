import { Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import type { Accommodation } from "#2ajuusged5jk";
import { ICON_ARROW_RIGHT } from "#gpkp4b4vfavh";

type OtherPanelProps = {
  related: Accommodation[];
  tr: I18nTranslator;
};

export function AccommodationOtherPanel({ related, tr }: OtherPanelProps) {
  return (
    <div className="accommodation-panel">
    <h2 className="accommodation-panel-title">{tr("accommodationPage.otherOption")}</h2>
    <div className="accommodation-other-links">
    {related.map((item) => (
          <a key={item.path} href={item.path} className="accommodation-other-link" data-tbf-soft-redirect="">
          <span>{tr(`accommodations.${item.id}.name`)}</span>
          <Icon spec={ICON_ARROW_RIGHT} />
          </a>
    ))}
    </div>
    </div>
  );
}
