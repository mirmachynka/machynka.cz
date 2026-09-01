import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    common: {
      backToAccommodation: "Back to accommodation",
      reserveRoom: "Book by phone/e-mail",
      bookOnBooking: "Book on Booking.com",
      callForPrice: "Call for price",
      accommodationInBucovice: "Accommodation in Bučovice",
      receptionNote:
      "In-person reservations, check-in and reception matters are handled at Sokolovská 793, 685 01 Bučovice. The accommodation branches do not " +
        "have their own reception.",
    },
    accommodationPage: {
      featuresTitle: "WHAT IS AVAILABLE",
      galleryTitle: "PHOTOS OF THE PROPERTY",
      roomsTitle: "STUDIOS AND APARTMENTS",
      locationTitle: "Where to find us",
      priceTitle: "Price and reservation",
      rulesTitle: "House rules",
      otherOption: "Other option",
      operator: "Operator",
      mapTitle: "Map: {{name}}",
    },
    accommodationRules: {
      intro: "Accommodation terms for Penzion Machynka and Apartmány Libuše.",
      items: {
        contract: {
          title: "Accommodation contract",
          items: {
            item1: "Accommodation is provided by MACHYNKA s.r.o. under an accommodation contract according to Section 2326 and following " +
              "provisions of the Civil Code.",
            item2: "The guest pays for accommodation and related services within the agreed deadline.",
            item3: "The contract is always concluded in writing; written, e-mail or phone confirmation of the order or reservation is sufficient.",
            item4: "Rights and obligations not covered by the contract are governed by these house rules and the accommodation price list. If the " +
              "contract differs from these rules or the price list, the contract takes precedence.",
            item5: "If the guest breaches the contract, house rules, price list or good manners in the accommodation, the provider may terminate " +
              "the contract early, including without notice after prior warning.",
          },
        },
        reservation: {
          title: "Reservation",
          items: {
            item1: "The guest orders accommodation in writing by e-mail or makes a reservation by phone.",
            item2: "The reservation fee is paid in the full amount of the accommodation price.",
          },
        },
        cancellation: {
          title: "Cancellation and no-show",
          items: {
            item1: "If the deposit is not paid properly and on time, the reservation is cancelled after the payment deadline expires.",
            item2: "The guest may cancel before arrival without giving a reason. Cancellation fee: 15 or more days before arrival 0%, 14-4 days " +
              "before arrival 50%, 3-0 days before arrival 100% of the accommodation price.",
            item3: "If the guest does not arrive within 24 hours after the agreed arrival time, the provider may withdraw from the contract and " +
              "charge 100% of the ordered accommodation price. This does not apply if the guest announces later arrival by phone or in writing at " +
              "least one day before arrival.",
          },
        },
        arrival: {
          title: "Arrival",
          items: {
            item1: "Check-in is from 14:00 and check-out is by 10:00.",
            item2: "Arrival is reported at the main reception at Sokolovská 793, 685 01 Bučovice.",
            item3: "At reception, the guest presents an ID card, passport or other identity document. The guest confirms personal details and " +
              "length of stay by signing the accommodation book.",
            item4: "Unless agreed otherwise, arriving guests are accommodated from 14:00 to 19:00. Later arrival is possible only by prior phone " +
              "arrangement.",
            item5: "Reception staff acquaint the guest with the house rules no later than on the arrival day.",
            item6: "The number of people in the room must match the number of registered guests. The guest must report the exact number during " +
              "check-in.",
            item7: "The guest consents to processing and storing personal data for accommodation and guest-record purposes according to applicable " +
              "local-fee and foreigner-residence laws.",
          },
        },
        general: {
          title: "General rules",
          items: {
            item1: "The guest may use the assigned accommodation space and shared accommodation areas.",
            item2: "On arrival, the guest receives keys to the room and entrance and must prevent their loss, damage or access by unauthorized " +
              "people.",
            item3: "The guest must follow the house rules, pay the accommodation price, use the accommodation properly, keep order and " +
              "cleanliness, protect equipment from damage and report any damage caused.",
            item4: "Quiet hours are from 22:00 to 07:00. During this time guests must not disturb other guests or the surroundings with excessive " +
              "noise.",
            item5: "When leaving the room, the guest closes water taps and windows, turns off lights and electrical appliances not used during " +
              "absence, and returns the key according to agreement.",
            item6: "Without the provider's consent, the guest may not move furniture, remove equipment, use own appliances except small personal, " +
              "hygiene, communication or office devices, let another person use the accommodation, receive visits outside the rules, use the " +
              "address for business, or keep animals.",
            item7: "Visits are possible only with the provider's consent, from 15:00 to 20:00, and only in shared areas.",
            item8: "The guest may not keep weapons, ammunition, explosives, narcotic or psychotropic substances or poisons, except prescribed " +
              "medicine.",
            item9: "Smoking is prohibited except in clearly marked smoking areas. Open fire is prohibited.",
            item10: "Internet access may not be used to share, download or distribute harmful content, software or data that could disrupt the " +
              "network or its performance.",
          },
        },
        departure: {
          title: "Departure",
          items: {
            item1: "The guest must leave and hand over the room by 10:00 on the day the accommodation ends.",
            item2: "The guest locks the room and leaves or returns the keys at reception, unless agreed otherwise or stated otherwise by these " +
              "rules.",
          },
        },
      },
    },
    accommodations: {
      libuse: {
        name: "Apartmány Libuše",
        shortName: "Libuše",
        description: "Modern apartments with a fully equipped kitchen. Ideal for longer stays and families with children.",
        detail:
        "At Apartmány Libuše, we offer 17 rooms in Bučovice with practical equipment for guests who want more privacy and comfort during a longer " +
          "stay.",
        features: {
          feature1: "Wi-Fi",
          feature2: "TV",
          feature3: "Kitchen",
          feature4: "Bathroom",
        },
        stayInfo: {
          item1: "Check-in from 14:00",
          item2: "Check-out by 10:00",
          item3: "Reception and in-person reservations: Sokolovská 793, 685 01 Bučovice",
        },
        priceNotes: {
          item1: "The price depends on the selected apartment or studio, number of guests and date of stay.",
          item2: "For an exact price and availability, please contact us by phone.",
        },
        priceGroups: {
          group1: { name: "Studio", items: { item1: "1 person / night: CZK 700", item2: "2 people / night: CZK 500 / person" } },
          group2: { name: "Apartment", items: { item1: "3-5 people / night: CZK 450-550 / person" } },
          group3: {
            name: "Large apartment",
            items: {
              item1: "1 person / night: CZK 1,500",
              item2: "2 people / night: CZK 850 / person",
              item3: "3-4 people / night: CZK 700 / person",
            },
          },
        },
        rooms: {
          room1: {
            name: "Studio No. 9 Libuše",
            capacity: "3+0 people",
            size: "34 m²",
            description:
            "Studio for 3 people with separate beds, an equipped kitchenette and dining area, bathroom with shower and practical hallway storage. " +
              "Outdoor terrace seating is available.",
          },
          room2: {
            name: "Studio No. 10 Libuše",
            capacity: "4+0 people",
            size: "39 m²",
            description:
            "Family studio for 4 people with a double bed, two separate beds, equipped kitchenette, dining area, bathroom with shower and spacious " +
              "hallway storage.",
          },
          room3: {
            name: "Apartment No. 11 Libuše",
            capacity: "3+2 people",
            size: "66 m²",
            description:
            "Apartment for 5 people with three separate beds in one room, two separate beds in the central room, an equipped kitchenette, sofa " +
              "area and outdoor terrace seating.",
          },
          room4: {
            name: "Studio No. 12 Libuše",
            capacity: "4+0 people",
            size: "47 m²",
            description:
            "Family studio for 4 people with a double bed, two separate beds, equipped kitchenette with dining area, bathroom with shower and " +
              "generous storage in the hallway.",
          },
          room5: {
            name: "Comfort large apartment",
            capacity: "2+2 people",
            size: "100 m²",
            description:
            "Premium barrier-free apartment with bedroom, living room with fully equipped kitchen, bathroom with shower and bathtub, another room " +
              "and private terrace seating.",
          },
        },
      },
      penzion: {
        name: "Penzion Machynka",
        shortName: "Machynka",
        description: "Modern guesthouse accommodation on the edge of Bučovice, with practical facilities and a quiet courtyard.",
        detail:
        "In a quiet part of Bučovice, we provide modern guesthouse accommodation for short and longer stays with practical equipment and good " +
          "facilities.",
        features: {
          feature1: "Quiet part of Bučovice",
          feature2: "Wi-Fi",
          feature3: "Barrier-free access",
          feature4: "Equipped kitchens",
        },
        stayInfo: {
          item1: "Check-in from 14:00",
          item2: "Check-out by 10:00",
          item3: "Reception and in-person reservations: Sokolovská 793, 685 01 Bučovice",
        },
        priceNotes: {
          item1: "The price depends on the selected apartment or studio, number of guests and date of stay.",
          item2: "For an exact price and availability, please contact us by phone.",
        },
        priceGroups: {
          group1: { name: "Studio", items: { item1: "1 person / night: CZK 700", item2: "2 people / night: CZK 500 / person" } },
          group2: { name: "Apartment", items: { item1: "3-5 people / night: CZK 450-550 / person" } },
        },
        rooms: {
          room1: {
            name: "Studio 1",
            capacity: "4+0 people",
            size: "34 m²",
            description: "Family room for 4 people with a fully equipped kitchen, bathroom, private balcony and seating on the outdoor courtyard " +
              "terrace.",
          },
          room2: {
            name: "Studio 2",
            capacity: "2+0 people",
            size: "28 m²",
            description: "Room for 2 people with a fully equipped kitchen, bathroom with shower, two separate beds, table with chairs and a " +
              "private balcony.",
          },
          room3: {
            name: "Studio 3",
            capacity: "2+0 people",
            size: "30 m²",
            description: "Room for 2 people with two separate beds, bathroom with shower and barrier-free access to the terrace.",
          },
          room4: {
            name: "Apartment 4",
            capacity: "2+3 people",
            size: "48 m²",
            description: "Two-room apartment for 5 people with a fully equipped kitchen, dining set, bathroom, work area and private balcony.",
          },
          room5: {
            name: "Apartment 5",
            capacity: "2+3 people",
            size: "37 m²",
            description: "Two-room apartment for 5 people with an equipped kitchenette, bathroom, work area and private balcony.",
          },
          room6: {
            name: "Apartment 6",
            capacity: "2+3 people",
            size: "40 m²",
            description: "Apartment with two rooms and separate beds for 5 people, fully equipped kitchen, bathroom, work area and plenty of " +
              "storage.",
          },
          room7: {
            name: "Apartment 7",
            capacity: "2+2 people",
            size: "46 m²",
            description: "Second-floor apartment for 4 people with a spacious fully equipped kitchen overlooking the courtyard, bathroom, balcony " +
              "and private terrace.",
          },
        },
      },
    },
});
