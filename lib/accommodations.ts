import {
  Accessibility,
  Bath,
  Coffee,
  MapPin,
  Tv,
  Wifi,
  type LucideIcon,
} from "lucide-react"

import { contactInfo } from "@/lib/contact-info"

export type Accommodation = {
  address: string
  contact?: {
    address: string
    operatorPhone?: string
    phone: string
  }
  description: string
  detail: string
  features: Array<{
    icon: LucideIcon
    label: string
  }>
  bookingUrl?: string
  exteriorImage: string
  galleryImages: string[]
  heroBadge?: string
  id: "libuse" | "penzion"
  mapEmbedUrl: string
  name: string
  path: string
  priceGroups?: Array<{
    items: string[]
    name: string
  }>
  priceNotes?: string[]
  rooms: number
  roomTypes?: Array<{
    capacity: string
    description: string
    name: string
    size: string
  }>
  shortName: string
  stayInfo?: string[]
}

export const accommodations: Accommodation[] = [
  {
    id: "libuse",
    name: "Apartmány Libuše",
    shortName: "Libuše",
    path: "/ubytovani/apartmany-libuse",
    rooms: 17,
    description: "Moderní apartmány s plně vybavenou kuchyní. Dobrá volba pro delší pobyty i rodiny s dětmi.",
    detail:
      "V Apartmánech Libuše nabízíme 17 pokojů v Bučovicích s praktickým vybavením pro hosty, kteří chtějí více soukromí a pohodlí při delším pobytu.",
    features: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Tv, label: "TV" },
      { icon: Coffee, label: "Kuchyň" },
      { icon: Bath, label: "Koupelna" },
    ],
    bookingUrl: "https://www.booking.com/hotel/cz/penzion-machynka.html",
    exteriorImage: "/ubytovani/libuse/exterior.jpg",
    galleryImages: [
      "/ubytovani/libuse/1000018756-1-1024x768.jpg",
      "/ubytovani/libuse/1000018763-1-2-1024x768.jpg",
      "/ubytovani/libuse/apartman_s10_01-768x576.jpg",
      "/ubytovani/libuse/apartman_s10_03-768x576.jpg",
      "/ubytovani/libuse/apartman_s9_03-768x1024.jpg",
      "/ubytovani/libuse/apartman_c11_03-768x1024.jpg",
    ],
    address: "Sokolovská 330, Bučovice",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Sokolovsk%C3%A1%20330%2C%20685%2001%20Bu%C4%8Dovice&output=embed",
    contact: {
      address: "Sokolovská 330, Bučovice 685 01",
      phone: contactInfo.accommodationPhone,
      operatorPhone: contactInfo.operatorPhone,
    },
    stayInfo: ["Check-in od 14:00", "Check-out do 10:00", "Recepce a osobní rezervace: Sokolovská 793, 685 01 Bučovice"],
    priceNotes: [
      "Výše ceny se odvíjí od zvoleného apartmánu či studia, počtu osob a termínu ubytování.",
      "Pro přesnou cenu a dostupnost nás kontaktujte telefonicky.",
    ],
    priceGroups: [
      {
        name: "Studio",
        items: ["1 osoba / noc: 700 Kč", "2 osoby / noc: 500 Kč / osoba"],
      },
      {
        name: "Apartmán",
        items: ["3-5 osob / noc: 450-550 Kč / osoba"],
      },
      {
        name: "Velkometrážní apartmán",
        items: [
          "1 osoba / noc: 1 500 Kč",
          "2 osoby / noc: 850 Kč / osoba",
          "3-4 osoby / noc: 700 Kč / osoba",
        ],
      },
    ],
  },
  {
    id: "penzion",
    name: "Penzion Machynka",
    shortName: "Machynka",
    path: "/ubytovani/penzion-machynka",
    rooms: 18,
    heroBadge: "Studia a apartmány",
    description:
      "Moderní penzion na okraji Bučovic s praktickým zázemím a klidným dvorem.",
    detail:
      "V klidné části Bučovic poskytujeme moderní penzion pro krátké i delší pobyty s praktickým vybavením a dobrým zázemím.",
    features: [
      { icon: MapPin, label: "Klidná část Bučovic" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Accessibility, label: "Bezbariérový přístup" },
      { icon: Coffee, label: "Vybavené kuchyně" },
    ],
    bookingUrl: "https://www.booking.com/hotel/cz/penzion-machynka.html",
    exteriorImage: "/ubytovani/penzion/exterior.png",
    galleryImages: [
      "/ubytovani/penzion/apartman_a4_02-768x1024.jpg",
      "/ubytovani/penzion/apartman_a4_04-768x817.jpg",
      "/ubytovani/penzion/apartman_a6_02-768x1024.jpg",
      "/ubytovani/penzion/apartman_a6_04-768x1024.jpg",
      "/ubytovani/penzion/apartman_a7_01-768x1024.jpg",
      "/ubytovani/penzion/apartman_a7_02-768x1024.jpg",
      "/ubytovani/penzion/apartman_a7_03-768x1024.jpg",
      "/ubytovani/penzion/apartman_a7_05-768x1024.jpg",
      "/ubytovani/penzion/apartman_a7_05-768x1024sas.jpg",
    ],
    address: "Nová 590, Bučovice",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606!2d16.9943929!3d49.151513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNov%C3%A1%20590%2C%20685%2001%20Bu%C4%8Dovice!5e0!3m2!1scs!2scz!4v1234567890",
    contact: {
      address: "Nová 590, Bučovice 685 01",
      phone: contactInfo.accommodationPhone,
      operatorPhone: contactInfo.operatorPhone,
    },
    stayInfo: ["Check-in od 14:00", "Check-out do 10:00", "Recepce a osobní rezervace: Sokolovská 793, 685 01 Bučovice"],
    priceNotes: [
      "Výše ceny se odvíjí od zvoleného apartmánu či studia, počtu osob a termínu ubytování.",
      "Pro přesnou cenu a dostupnost nás kontaktujte telefonicky.",
    ],
    priceGroups: [
      {
        name: "Studio",
        items: ["1 osoba / noc: 700 Kč", "2 osoby / noc: 500 Kč / osoba"],
      },
      {
        name: "Apartmán",
        items: ["3-5 osob / noc: 450-550 Kč / osoba"],
      },
    ],
    roomTypes: [
      {
        name: "Studio 1",
        capacity: "4+0 osob",
        size: "34 m²",
        description:
          "Rodinný pokoj pro 4 osoby s plně vybavenou kuchyní, koupelnou, vlastní lodžií a možností posezení na venkovní terase ve vnitřním traktu penzionu.",
      },
      {
        name: "Studio 2",
        capacity: "2+0 osob",
        size: "28 m²",
        description:
          "Pokoj pro 2 osoby s plně vybavenou kuchyní, koupelnou se sprchovým koutem, dvěma samostatnými lůžky, stolkem se židlemi a vlastní lodžií.",
      },
      {
        name: "Studio 3",
        capacity: "2+0 osob",
        size: "30 m²",
        description: "Pokoj pro 2 osoby se dvěma samostatnými lůžky, koupelnou se sprchovým koutem a bezbariérovým přístupem na terasu.",
      },
      {
        name: "Apartmán 4",
        capacity: "2+3 osob",
        size: "48 m²",
        description:
          "Dvoupokojový apartmán pro 5 osob s plně vybavenou kuchyní, jídelní sestavou, koupelnou, pracovním zázemím a vlastní lodžií.",
      },
      {
        name: "Apartmán 5",
        capacity: "2+3 osob",
        size: "37 m²",
        description: "Dvoupokojový apartmán pro 5 osob s vybaveným kuchyňským koutem, koupelnou, pracovním zázemím a vlastní lodžií.",
      },
      {
        name: "Apartmán 6",
        capacity: "2+3 osob",
        size: "40 m²",
        description: "Apartmán se dvěma pokoji s oddělenými lůžky pro 5 osob, plně vybavenou kuchyní, koupelnou, pracovním zázemím a dostatkem úložného prostoru.",
      },
      {
        name: "Apartmán 7",
        capacity: "2+2 osob",
        size: "46 m²",
        description:
          "Apartmán ve druhém nadzemním podlaží pro 4 osoby s prostornou plně vybavenou kuchyní s výhledem do nádvoří, koupelnou, lodžií a vlastní terasou.",
      },
    ],
  },
]

export function getAccommodationByPath(pathname: string) {
  return accommodations.find((accommodation) => accommodation.path === pathname)
}
