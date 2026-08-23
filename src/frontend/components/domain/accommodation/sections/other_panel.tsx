import { Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import type { Accommodation } from "#2ajuusged5jk";
import { ICON_ARROW_RIGHT } from "#gpkp4b4vfavh";
import { Link } from "#eww9luqvc386";

type OtherPanelProps = {
  related: Accommodation[];
  tr: I18nTranslator;
};

export function AccommodationOtherPanel({ related, tr }: OtherPanelProps) {
  return (
    <div className="accommodation-panel accommodation-other-panel">
    <h2 className="accommodation-panel-title">{tr("accommodationPage.otherOption")}</h2>
    {related.map((item) => (
          <Link key={item.path} href={item.path} className="accommodation-other-link">
          <span>{tr(`accommodations.${item.id}.name`)}</span>
          <Icon spec={ICON_ARROW_RIGHT} />
          </Link>
    ))}
    </div>
  );
}
