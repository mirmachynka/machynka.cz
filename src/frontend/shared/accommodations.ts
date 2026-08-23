import { ICON_ACCESSIBILITY, ICON_BATH, ICON_COFFEE, ICON_MAP_PIN, ICON_TV, ICON_WIFI } from "#gpkp4b4vfavh";
import { contactInfo } from "./contact_info";

export type Accommodation = {
  address: string;
  contact?: {
    address: string;
    operatorPhone?: string;
    phone: string;
  };
  bookingUrl?: string;
  exteriorImage: string;
  features: Array<{
    icon: string;
    label: string;
  }>;
  galleryImages: string[];
  id: "libuse" | "penzion";
  mapEmbedUrl: string;
  path: string;
  rooms: number;
};

export const accommodations: Accommodation[] = [
  {
    id: "libuse",
    path: "/ubytovani/apartmany-libuse",
    rooms: 17,
    features: [
      { icon: ICON_WIFI, label: "wifi" },
      { icon: ICON_TV, label: "tv" },
      { icon: ICON_COFFEE, label: "kitchen" },
      { icon: ICON_BATH, label: "bathroom" },
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
    mapEmbedUrl: "https://www.google.com/maps?q=Sokolovsk%C3%A1%20330%2C%20685%2001%20Bu%C4%8Dovice&output=embed",
    contact: {
      address: "Sokolovská 330, Bučovice 685 01",
      phone: contactInfo.accommodationPhone,
      operatorPhone: contactInfo.operatorPhone,
    },
  },
  {
    id: "penzion",
    path: "/ubytovani/penzion-machynka",
    rooms: 18,
    features: [
      { icon: ICON_MAP_PIN, label: "location" },
      { icon: ICON_WIFI, label: "wifi" },
      { icon: ICON_ACCESSIBILITY, label: "accessibility" },
      { icon: ICON_COFFEE, label: "kitchens" },
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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606!2d16.9943929!3d49.151513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x" +
      "0!2sNov%C3%A1%20590%2C%20685%2001%20Bu%C4%8Dovice!5e0!3m2!1scs!2scz!4v1234567890",
    contact: {
      address: "Nová 590, Bučovice 685 01",
      phone: contactInfo.accommodationPhone,
      operatorPhone: contactInfo.operatorPhone,
    },
  },
];

export function getAccommodationByPath(pathname: string) {
  return accommodations.find((accommodation) => accommodation.path === pathname);
}
