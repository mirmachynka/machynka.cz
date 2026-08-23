import type { I18nTranslator } from "@trebired/i18n";

import { CardTable } from "#gqbmqapv1gar";
import { numbers } from "#m7bw89v4qsjy";

type RoomsProps = {
  baseKey: string;
  roomCount: number;
  tr: I18nTranslator;
};

export function AccommodationRooms({ baseKey, roomCount, tr }: RoomsProps) {
  return (
    <section className="accommodation-rooms">
    <div className="accommodation-rooms-inner">
    <div className="accommodation-rooms-head">
    <span className="section-label">{tr("accommodationPage.roomsLabel")}</span>
    <h2 className="section-title">
    {tr("accommodationPage.roomsTitleTop")}
    <br />
    {tr("accommodationPage.roomsTitleBottom")}
    </h2>
    </div>

    <CardTable
    items={numbers(roomCount)}
    getKey={(roomNumber) => roomNumber}
    itemClassName="accommodation-room-cell"
    renderItem={(roomNumber) => (
        <>
        <div className="accommodation-room-tags">
        <span className="accommodation-room-tag accommodation-room-tag-dark">
        {tr(`${baseKey}.rooms.room${roomNumber}.capacity`)}
        </span>
        <span className="accommodation-room-tag accommodation-room-tag-light">{tr(`${baseKey}.rooms.room${roomNumber}.size`)}</span>
        </div>
        <h3 className="accommodation-room-title">{tr(`${baseKey}.rooms.room${roomNumber}.name`)}</h3>
        <p className="accommodation-room-description">{tr(`${baseKey}.rooms.room${roomNumber}.description`)}</p>
        </>
    )}
    />
    </div>
    </section>
  );
}
