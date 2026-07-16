import { ArrowLeft, ArrowRight, Building2, Clock, MapPin, Phone, ReceiptText } from "lucide-react"
import { useTranslation } from "react-i18next"

import { AccommodationRulesSection, type AccommodationRule } from "@/components/accommodation/rules-section"
import { CardTable } from "@/components/card-table"
import { ExpandableImage } from "@/components/expandable-image"
import { GoogleMapEmbed } from "@/components/google-map-embed"
import { Button } from "@/components/ui/button"
import { accommodations, type Accommodation } from "@/lib/accommodations"
import { contactInfo, phoneHref } from "@/lib/contact-info"
import { Link } from "@/src/router"

type AccommodationPageProps = {
  accommodation: Accommodation
}

type PriceGroup = {
  items: string[]
  name: string
}

type Room = [string, string, string, string]

export function AccommodationPage({ accommodation }: AccommodationPageProps) {
  const { t } = useTranslation()
  const baseKey = `accommodations.${accommodation.id}`
  const related = accommodations.filter((item) => item.path !== accommodation.path)
  const reservationPhone = accommodation.contact?.phone ?? contactInfo.accommodationPhone
  const mapAddress = accommodation.contact?.address ?? accommodation.address
  const name = t(`${baseKey}.name`)
  const description = t(`${baseKey}.description`)
  const detail = t(`${baseKey}.detail`)
  const featureLabels = t(`${baseKey}.features`, { returnObjects: true }) as string[]
  const stayInfo = t(`${baseKey}.stayInfo`, { returnObjects: true }) as string[]
  const priceNotes = t(`${baseKey}.priceNotes`, { returnObjects: true }) as string[]
  const priceGroups = t(`${baseKey}.priceGroups`, { returnObjects: true }) as PriceGroup[]
  const houseRules = t("accommodationRules.items", { returnObjects: true }) as AccommodationRule[]
  const rooms = t(`${baseKey}.rooms`, { returnObjects: true }) as Room[]

  return (
    <main>
      <section className="relative min-h-[70vh] bg-neutral-900 px-4 pt-12 pb-16 sm:px-12 sm:pt-16 sm:pb-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.55fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div>
            <Link
              href="/#ubytovani"
              className="mb-8 flex w-fit items-center gap-2 text-sm font-black uppercase tracking-normal text-neutral-400 transition-colors hover:text-white sm:mb-10 sm:tracking-wide"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("common.backToAccommodation")}
            </Link>
            <h1 className="break-words text-[2.75rem] font-black leading-none tracking-normal text-white min-[380px]:text-[3.25rem] sm:text-7xl sm:tracking-wide lg:text-8xl">
              {name}
            </h1>
            <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-neutral-400 sm:text-xl">
              {detail}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-auto min-h-12 w-full bg-primary px-5 py-3 text-center text-base font-black uppercase leading-tight tracking-normal whitespace-normal hover:bg-primary/90 sm:min-h-14 sm:w-auto sm:px-8 sm:py-4 sm:tracking-wide"
              >
                <Link href="/#kontakt">
                  <span className="min-w-0">{t("common.reserveRoom")}</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {accommodation.bookingUrl && (
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-12 w-full bg-white px-5 py-3 text-center text-base font-black uppercase leading-tight tracking-normal text-neutral-900 whitespace-normal hover:bg-neutral-200 sm:min-h-14 sm:w-auto sm:px-8 sm:py-4 sm:tracking-wide"
                >
                  <a href={accommodation.bookingUrl} target="_blank" rel="noreferrer">
                    <span className="min-w-0">{t("common.bookOnBooking")}</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="relative lg:ml-auto lg:w-full lg:max-w-[520px] xl:max-w-[560px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-800">
              <img
                src={accommodation.exteriorImage}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-primary p-5 sm:p-8">
                <p className="break-words text-lg font-black leading-tight text-white sm:text-xl">
                  {mapAddress}
                </p>
                <p className="mt-2 break-words text-xs font-bold uppercase leading-tight tracking-[0.06em] text-white/70 sm:text-sm sm:tracking-widest">
                  {t("common.accommodationInBucovice")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div>
            <span className="mb-6 inline-block text-xs font-black uppercase tracking-widest text-primary">
              {t("accommodationPage.featuresLabel")}
            </span>
            <h2 className="break-words text-3xl font-black leading-none tracking-normal text-neutral-900 min-[380px]:text-4xl sm:text-5xl lg:text-7xl">
              {t("accommodationPage.featuresTitleTop")}
              <br />
              {t("accommodationPage.featuresTitleBottom")}
            </h2>
          </div>

          <CardTable
            items={accommodation.features}
            columns={2}
            breakpoint="sm"
            getKey={(feature, index) => featureLabels[index] ?? feature.label}
            itemClassName="p-6 sm:p-8"
            renderItem={(feature, index) => (
              <>
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-neutral-100">
                  <feature.icon className="h-6 w-6 text-neutral-900" />
                </div>
                <h3 className="break-words text-base font-black uppercase tracking-normal text-neutral-900 sm:text-lg">
                  {featureLabels[index]}
                </h3>
              </>
            )}
          />
        </div>
      </section>

      {rooms.length > 0 && (
        <section className="bg-neutral-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="mb-6 inline-block text-xs font-black uppercase tracking-widest text-primary">
                {t("accommodationPage.roomsLabel")}
              </span>
              <h2 className="break-words text-3xl font-black leading-none tracking-normal text-neutral-900 min-[380px]:text-4xl sm:text-5xl lg:text-7xl">
                {t("accommodationPage.roomsTitleTop")}
                <br />
                {t("accommodationPage.roomsTitleBottom")}
              </h2>
            </div>

            <CardTable
              items={rooms}
              getKey={([roomName]) => roomName}
              itemClassName="p-6 sm:p-10"
              renderItem={([roomName, capacity, size, roomDescription]) => (
                <>
                  <div className="mb-8 flex flex-wrap gap-3">
                    <span className="bg-neutral-900 px-3 py-2 text-xs font-black uppercase tracking-normal text-white sm:tracking-wide">
                      {capacity}
                    </span>
                    <span className="bg-neutral-100 px-3 py-2 text-xs font-black uppercase tracking-normal text-neutral-900 sm:tracking-wide">
                      {size}
                    </span>
                  </div>
                  <h3 className="mb-4 break-words text-xl font-black uppercase tracking-normal text-neutral-900 sm:text-2xl">
                    {roomName}
                  </h3>
                  <p className="leading-relaxed text-neutral-600">{roomDescription}</p>
                </>
              )}
            />
          </div>
        </section>
      )}

      {accommodation.galleryImages.length > 0 && (
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="mb-6 inline-block text-xs font-black uppercase tracking-widest text-primary">
                {t("accommodationPage.galleryLabel")}
              </span>
              <h2 className="break-words text-3xl font-black leading-none tracking-normal text-neutral-900 min-[380px]:text-4xl sm:text-5xl lg:text-7xl">
                {t("accommodationPage.galleryTitle")}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {accommodation.galleryImages.map((image, index) => (
                <ExpandableImage
                  key={image}
                  src={image}
                  alt={name}
                  images={accommodation.galleryImages}
                  index={index}
                  className="aspect-[4/3] w-full"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-neutral-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-neutral-900 p-6 sm:p-10">
              <Building2 className="mb-8 h-10 w-10 text-primary" />
              <h2 className="mb-4 break-words text-xl font-black uppercase tracking-normal text-white sm:text-2xl">
                {name}
              </h2>
              <p className="leading-relaxed text-neutral-400">{description}</p>
              {stayInfo.length > 0 && (
                <div className="mt-8 space-y-3 border-t border-neutral-800 pt-6">
                  {stayInfo.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-neutral-300">
                      <Clock className="h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ))}
                  <p className="bg-primary p-4 text-sm font-bold leading-relaxed text-white">
                    {t("contactSection.receptionNote")}
                  </p>
                </div>
              )}
              {accommodation.contact && (
                <div className="mt-8 space-y-3 border-t border-neutral-800 pt-6">
                  <a
                    href={phoneHref(accommodation.contact.phone)}
                    className="flex items-center gap-3 text-sm font-bold text-neutral-300 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {accommodation.contact.phone}
                  </a>
                  {accommodation.contact.operatorPhone && (
                    <a
                      href={phoneHref(accommodation.contact.operatorPhone)}
                      className="flex items-center gap-3 text-sm font-bold text-neutral-300 transition-colors hover:text-white"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      {t("accommodationPage.operator")}: {accommodation.contact.operatorPhone}
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="bg-white p-6 sm:p-10">
              <MapPin className="mb-8 h-10 w-10 text-primary" />
              <h2 className="mb-4 break-words text-xl font-black uppercase tracking-normal text-neutral-900 sm:text-2xl">
                {t("accommodationPage.locationTitle")}
              </h2>
              <p className="mb-6 leading-relaxed text-neutral-600">{mapAddress}</p>
              <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-muted">
                <GoogleMapEmbed
                  src={accommodation.mapEmbedUrl}
                  className="absolute inset-0"
                  title={t("accommodationPage.mapTitle", { name })}
                />
              </div>
            </div>
          </div>

          {priceNotes.length > 0 && (
            <div className="mt-6 bg-white p-6 sm:p-10">
              <ReceiptText className="mb-8 h-10 w-10 text-primary" />
              <h2 className="mb-4 break-words text-xl font-black uppercase tracking-normal text-neutral-900 sm:text-2xl">
                {t("accommodationPage.priceTitle")}
              </h2>
              <div className="space-y-4">
                {priceNotes.map((note) => (
                  <p key={note} className="leading-relaxed text-neutral-600">
                    {note}
                  </p>
                ))}
              </div>
              {priceGroups.length > 0 && (
                <CardTable
                  items={priceGroups}
                  columns={3}
                  className="mt-8"
                  getKey={(group) => group.name}
                  renderItem={(group) => (
                    <>
                      <h3 className="mb-4 break-words text-base font-black uppercase tracking-normal text-neutral-900 sm:text-lg">
                        {group.name}
                      </h3>
                      <div className="space-y-3">
                        {group.items.map((item) => (
                          <p key={item} className="text-sm font-bold text-neutral-600">
                            {item}
                          </p>
                        ))}
                      </div>
                    </>
                  )}
                />
              )}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-12 w-full bg-primary px-5 py-3 text-center text-base font-black uppercase leading-tight tracking-normal whitespace-normal hover:bg-primary/90 sm:min-h-14 sm:w-auto sm:px-8 sm:py-4 sm:tracking-wide"
                >
                  <a href={phoneHref(reservationPhone)}>
                    <span className="min-w-0">{t("common.callForPrice")}</span>
                    <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                {accommodation.bookingUrl && (
                  <Button
                    asChild
                    size="lg"
                    className="h-auto min-h-12 w-full bg-neutral-900 px-5 py-3 text-center text-base font-black uppercase leading-tight tracking-normal whitespace-normal hover:bg-neutral-800 sm:min-h-14 sm:w-auto sm:px-8 sm:py-4 sm:tracking-wide"
                  >
                    <a href={accommodation.bookingUrl} target="_blank" rel="noreferrer">
                      <span className="min-w-0">{t("common.bookOnBooking")}</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}

          <AccommodationRulesSection
            intro={t("accommodationRules.intro")}
            rules={houseRules}
            title={t("accommodationPage.rulesTitle")}
          />

          <div className="mt-6 bg-white p-6 sm:p-10">
            <h2 className="mb-4 break-words text-xl font-black uppercase tracking-normal text-neutral-900 sm:text-2xl">
              {t("accommodationPage.otherOption")}
            </h2>
            {related.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="group flex items-center justify-between border-t border-neutral-200 py-5 text-neutral-900"
              >
                <span className="min-w-0 break-words font-black uppercase tracking-normal">{t(`accommodations.${item.id}.name`)}</span>
                <ArrowRight className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
