import { Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { Button } from "#cgroy6iibw7w";
import { CardTable } from "#gqbmqapv1gar";
import type { Accommodation } from "#2ajuusged5jk";
import { ICON_ARROW_RIGHT, ICON_PHONE, ICON_RECEIPT } from "#gpkp4b4vfavh";
import { phoneHref } from "#aequr96wfpxz";
import { numbers } from "#m7bw89v4qsjy";

const PRICE_NOTES_COUNT = 2;

type PricePanelProps = {
  accommodation: Accommodation;
  baseKey: string;
  priceGroupItemCounts: number[];
  reservationPhone: string;
  tr: I18nTranslator;
};

export function AccommodationPricePanel({ accommodation, baseKey, priceGroupItemCounts, reservationPhone, tr }: PricePanelProps) {
  const groups = priceGroupItemCounts.map((itemCount, index) => ({ groupNumber: index + 1, itemCount }));

  return (
    <div className="accommodation-panel">
    <Icon spec={ICON_RECEIPT} className="accommodation-panel-icon" />
    <h2 className="accommodation-panel-title">{tr("accommodationPage.priceTitle")}</h2>
    <div className="accommodation-panel-block">
    {numbers(PRICE_NOTES_COUNT).map((itemNumber) => (
          <p key={itemNumber} className="accommodation-panel-text">
          {tr(`${baseKey}.priceNotes.item${itemNumber}`)}
          </p>
    ))}
    </div>
    <CardTable
    items={groups}
    columns={3}
    itemClassName="accommodation-price-cell"
    getKey={(group) => group.groupNumber}
    renderItem={(group) => (
        <>
        <h3 className="accommodation-price-group-title">{tr(`${baseKey}.priceGroups.group${group.groupNumber}.name`)}</h3>
        <div className="accommodation-panel-block">
        {numbers(group.itemCount).map((itemNumber) => (
              <p key={itemNumber} className="accommodation-price-item">
              {tr(`${baseKey}.priceGroups.group${group.groupNumber}.items.item${itemNumber}`)}
              </p>
        ))}
        </div>
        </>
    )}
    />
    <div className="accommodation-price-actions">
    <Button href={phoneHref(reservationPhone)} variant="primary">
    <span>{tr("common.callForPrice")}</span>
    <Icon spec={ICON_PHONE} />
    </Button>
    {accommodation.bookingUrl && (
        <Button href={accommodation.bookingUrl} target="_blank" rel="noreferrer" variant="dark">
        <span>{tr("common.bookOnBooking")}</span>
        <Icon spec={ICON_ARROW_RIGHT} />
        </Button>
    )}
    </div>
    </div>
  );
}
