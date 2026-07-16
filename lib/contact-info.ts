export const contactInfo = {
  accommodationPhone: "702 099 227",
  operatorPhone: "602 739 317",
  email: "miroslav@machynka.cz",
  contactAddress: {
    street: "Sokolovská 793",
    city: "Bučovice",
    postalCode: "685 01",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606!2d16.9949931!3d49.1497094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSokolovsk%C3%A1%20793%2C%20685%2001%20Bu%C4%8Dovice!5e0!3m2!1scs!2scz!4v1234567890",
  },
  branchAddresses: [
    {
      name: "Penzion Machynka",
      street: "Nová 590",
      city: "Bučovice",
      postalCode: "685 01",
    },
    {
      name: "Apartmány Libuše",
      street: "Nová 590",
      city: "Bučovice",
      postalCode: "685 01",
    },
  ],
  operator: {
    name: "MACHYNKA s.r.o.",
    representedBy: "Miroslavem Machynkou",
    street: "Sokolovská 793",
    city: "Bučovice",
    postalCode: "685 01",
    companyId: "269 45 452",
    taxId: "CZ26945452",
  },
} as const

export function phoneHref(phone: string) {
  return `tel:+420${phone.replace(/\s/g, "")}`
}
