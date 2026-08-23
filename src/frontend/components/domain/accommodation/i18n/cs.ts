import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    common: {
      backToAccommodation: "Zpět na ubytování",
      reserveRoom: "Rezervovat telefonicky/e-mailem",
      bookOnBooking: "Rezervovat na Booking.com",
      callForPrice: "Zavolat kvůli ceně",
      accommodationInBucovice: "Ubytování v Bučovicích",
      receptionNote:
      "Osobní rezervace, check-in a věci kolem recepce řešíme na adrese Sokolovská 793, 685 01 Bučovice. Ubytovací objekty vlastní recepci nemají.",
    },
    accommodationPage: {
      featuresLabel: "Vybavení",
      featuresTitleTop: "CO JE",
      featuresTitleBottom: "K DISPOZICI",
      galleryLabel: "Fotografie",
      galleryTitle: "FOTOGRAFIE OBJEKTU",
      roomsLabel: "Pokoje",
      roomsTitleTop: "STUDIA",
      roomsTitleBottom: "A APARTMÁNY",
      locationTitle: "Kde nás najdete",
      priceTitle: "Cena a rezervace",
      rulesTitle: "Ubytovací řád",
      otherOption: "Další možnost",
      operator: "Provozovatel",
      mapTitle: "Mapa: {{name}}",
    },
    accommodationRules: {
      intro: "Obchodní podmínky ubytování pro Penzion Machynka a Apartmány Libuše.",
      items: {
        contract: {
          title: "Podmínky uzavření smlouvy o ubytování",
          items: {
            item1: "Ubytování poskytuje MACHYNKA s.r.o. na základě smlouvy o ubytování podle § 2326 a následujících ustanovení občanského zákoníku.",
            item2: "Host se zavazuje zaplatit za ubytování a související služby ve stanovené lhůtě.",
            item3: "Smlouva o ubytování se uzavírá písemně. Stačí písemné, e-mailové nebo telefonické potvrzení objednávky či rezervace.",
            item4: "Práva a povinnosti neupravené smlouvou se řídí tímto ubytovacím řádem a ceníkem služeb. Pokud smlouva stanoví něco jiného, má " +
              "přednost smlouva.",
            item5: "Při porušení smlouvy, ubytovacího řádu, ceníku nebo dobrých mravů může ubytovatel smlouvu ukončit před sjednanou dobou, i bez " +
              "výpovědní doby po předchozím upozornění.",
          },
        },
        reservation: {
          title: "Uzavření smlouvy a rezervace",
          items: {
            item1: "Objednávka ubytování se provádí písemně e-mailem, případně telefonickou rezervací.",
            item2: "Host je povinen uhradit rezervační poplatek v plné výši částky za ubytování.",
          },
        },
        cancellation: {
          title: "Zrušení rezervace a nedostavení se",
          items: {
            item1: "Pokud záloha není uhrazena řádně nebo včas, rezervace se po uplynutí lhůty splatnosti ruší.",
            item2: "Host může před nástupem od smlouvy odstoupit bez udání důvodu. Storno poplatek: 15 a více dní před nástupem 0 %, 14-4 dny před " +
              "nástupem 50 %, 3-0 dní před nástupem 100 % ceny ubytování.",
            item3: "Pokud host nenastoupí do 24 hodin po sjednaném nástupu, může ubytovatel od smlouvy odstoupit a účtovat 100 % ceny objednaného " +
              "ubytování. To neplatí, pokud host nejpozději jeden den před nástupem telefonicky nebo písemně oznámí pozdější příjezd.",
          },
        },
        arrival: {
          title: "Příjezd",
          items: {
            item1: "Check-in je od 14:00 a check-out do 10:00.",
            item2: "Příjezd se hlásí na hlavní recepci na adrese Sokolovská 793, 685 01 Bučovice.",
            item3: "Na recepci host předloží občanský průkaz, cestovní pas nebo jiný doklad totožnosti. Správnost údajů a dobu pobytu potvrdí " +
              "podpisem v ubytovací knize.",
            item4: "Pokud není domluveno jinak, ubytování přijíždějících hostů probíhá od 14:00 do 19:00. Pozdější příjezd je možný po předchozí " +
              "telefonické domluvě.",
            item5: "Pověřený pracovník seznámí hosta s ubytovacím řádem nejpozději při nástupu k ubytování.",
            item6: "Počet osob na pokoji odpovídá počtu osob přihlášených k ubytování. Host je povinen oznámit přesný počet osob při přihlášení.",
            item7: "Host souhlasí se zpracováním a uchováním osobních údajů za účelem poskytnutí ubytování a evidence hostů podle platných " +
              "právních předpisů.",
          },
        },
        general: {
          title: "Obecná pravidla ubytování",
          items: {
            item1: "Host má právo užívat prostor vyhrazený k ubytování a společné prostory ubytování.",
            item2: "Při nástupu host obdrží klíče od pokoje a vstupu. Je povinen zabránit jejich ztrátě, poškození nebo zpřístupnění neoprávněným " +
              "osobám.",
            item3: "Host je povinen seznámit se s ubytovacím řádem, uhradit cenu ubytování, řádně užívat prostory, udržovat pořádek a čistotu, " +
              "chránit vybavení a bezodkladně oznámit způsobenou škodu.",
            item4: "Noční klid platí od 22:00 do 07:00. V této době host nesmí rušit ostatní hosty ani okolí nadměrným hlukem.",
            item5: "Při odchodu z pokoje host zavře vodovodní uzávěry a okna, zhasne světla, vypne elektrické spotřebiče nepoužívané v době " +
              "nepřítomnosti a podle domluvy odevzdá klíč.",
            item6: "Bez souhlasu ubytovatele host nesmí stěhovat nábytek nebo vybavení, odnášet vybavení, používat vlastní spotřebiče kromě malých " +
              "osobních, hygienických, komunikačních nebo kancelářských zařízení, přenechat ubytování jiné osobě, přijímat návštěvy mimo pravidla, " +
              "uvádět adresu jako místo podnikání ani umístit zvíře.",
            item7: "Návštěvy jsou možné pouze se souhlasem ubytovatele, v čase 15:00-20:00 a ve společných prostorách.",
            item8: "Host nesmí přechovávat zbraně, střelivo, výbušniny, omamné nebo psychotropní látky ani jedy, pokud nejde o předepsané léky.",
            item9: "Kouření je zakázáno mimo vyhrazené a označené prostory. Používání otevřeného ohně je zakázáno.",
            item10: "Internetové připojení nesmí být používáno ke sdílení, stahování nebo distribuci závadného obsahu, softwaru nebo dat, které by " +
              "mohly narušit síť nebo její výkon.",
          },
        },
        departure: {
          title: "Odjezd",
          items: {
            item1: "Host je povinen opustit a odevzdat pokoj do 10:00 v den ukončení ubytování.",
            item2: "Host uzamkne pokoj a zanechá nebo odevzdá klíče na recepci, pokud není domluveno jinak nebo pokud tento řád nestanoví jiný " +
              "postup.",
          },
        },
      },
    },
    accommodations: {
      libuse: {
        name: "Apartmány Libuše",
        shortName: "Libuše",
        description: "Moderní apartmány s plně vybavenou kuchyní. Ideální pro delší pobyty a rodiny s dětmi.",
        detail:
        "V Apartmánech Libuše nabízíme 17 pokojů v Bučovicích s praktickým vybavením pro hosty, kteří chtějí více soukromí a pohodlí při delším " +
          "pobytu.",
        features: {
          feature1: "Wi-Fi",
          feature2: "TV",
          feature3: "Kuchyň",
          feature4: "Koupelna",
        },
        stayInfo: {
          item1: "Check-in od 14:00",
          item2: "Check-out do 10:00",
          item3: "Recepce a osobní rezervace: Sokolovská 793, 685 01 Bučovice",
        },
        priceNotes: {
          item1: "Výše ceny se odvíjí od zvoleného apartmánu či studia, počtu osob a termínu ubytování.",
          item2: "Pro přesnou cenu a dostupnost nás kontaktujte telefonicky.",
        },
        priceGroups: {
          group1: { name: "Studio", items: { item1: "1 osoba / noc: 700 Kč", item2: "2 osoby / noc: 500 Kč / osoba" } },
          group2: { name: "Apartmán", items: { item1: "3-5 osob / noc: 450-550 Kč / osoba" } },
          group3: {
            name: "Velkometrážní apartmán",
            items: {
              item1: "1 osoba / noc: 1 500 Kč",
              item2: "2 osoby / noc: 850 Kč / osoba",
              item3: "3-4 osoby / noc: 700 Kč / osoba",
            },
          },
        },
        rooms: {
          room1: {
            name: "Studio č. 9 Libuše",
            capacity: "3+0 osob",
            size: "34 m²",
            description:
            "Studio pro 3 osoby s oddělenými lůžky, vybaveným kuchyňským a jídelním koutem, koupelnou se sprchou a praktickým úložným prostorem v " +
              "chodbě. K dispozici je venkovní terasa.",
          },
          room2: {
            name: "Studio č. 10 Libuše",
            capacity: "4+0 osob",
            size: "39 m²",
            description:
            "Rodinné studio pro 4 osoby s manželskou postelí, dvěma samostatnými lůžky, vybaveným kuchyňským koutem, jídelní sestavou, koupelnou " +
              "se sprchou a prostornou skříní v chodbě.",
          },
          room3: {
            name: "Apartmán č. 11 Libuše",
            capacity: "3+2 osob",
            size: "66 m²",
            description:
            "Apartmán pro 5 osob se třemi samostatnými lůžky v pokoji, dvěma samostatnými lůžky v centrální místnosti, vybaveným kuchyňským " +
              "koutem, sedací soupravou a venkovním posezením.",
          },
          room4: {
            name: "Studio č. 12 Libuše",
            capacity: "4+0 osob",
            size: "47 m²",
            description:
            "Rodinné studio pro 4 osoby s manželskou postelí, dvěma samostatnými lůžky, vybaveným kuchyňským koutem s jídelní sestavou, koupelnou " +
              "se sprchou a dostatkem úložného prostoru.",
          },
          room5: {
            name: "Komfortní velkometrážní apartmán",
            capacity: "2+2 osob",
            size: "100 m²",
            description:
            "Nadstandardně zařízený bezbariérový apartmán s ložnicí, obývacím pokojem s plně vybavenou kuchyní, koupelnou se sprchou a vanou, " +
              "dalším pokojem a soukromým posezením na terase.",
          },
        },
      },
      penzion: {
        name: "Penzion Machynka",
        shortName: "Machynka",
        description: "Moderní penzion na okraji Bučovic s praktickým zázemím a klidným dvorem.",
        detail: "V klidné části Bučovic poskytujeme moderní penzion pro krátké i delší pobyty s praktickým vybavením a dobrým zázemím.",
        features: {
          feature1: "Klidná část Bučovic",
          feature2: "Wi-Fi",
          feature3: "Bezbariérový přístup",
          feature4: "Vybavené kuchyně",
        },
        stayInfo: {
          item1: "Check-in od 14:00",
          item2: "Check-out do 10:00",
          item3: "Recepce a osobní rezervace: Sokolovská 793, 685 01 Bučovice",
        },
        priceNotes: {
          item1: "Výše ceny se odvíjí od zvoleného apartmánu či studia, počtu osob a termínu ubytování.",
          item2: "Pro přesnou cenu a dostupnost nás kontaktujte telefonicky.",
        },
        priceGroups: {
          group1: { name: "Studio", items: { item1: "1 osoba / noc: 700 Kč", item2: "2 osoby / noc: 500 Kč / osoba" } },
          group2: { name: "Apartmán", items: { item1: "3-5 osob / noc: 450-550 Kč / osoba" } },
        },
        rooms: {
          room1: {
            name: "Studio 1",
            capacity: "4+0 osob",
            size: "34 m²",
            description: "Rodinný pokoj pro 4 osoby s plně vybavenou kuchyní, koupelnou, vlastní lodžií a možností posezení na venkovní terase ve " +
              "vnitřním traktu penzionu.",
          },
          room2: {
            name: "Studio 2",
            capacity: "2+0 osob",
            size: "28 m²",
            description: "Pokoj pro 2 osoby s plně vybavenou kuchyní, koupelnou se sprchovým koutem, dvěma samostatnými lůžky, stolkem se židlemi " +
              "a vlastní lodžií.",
          },
          room3: {
            name: "Studio 3",
            capacity: "2+0 osob",
            size: "30 m²",
            description: "Pokoj pro 2 osoby se dvěma samostatnými lůžky, koupelnou se sprchovým koutem a bezbariérovým přístupem na terasu.",
          },
          room4: {
            name: "Apartmán 4",
            capacity: "2+3 osob",
            size: "48 m²",
            description: "Dvoupokojový apartmán pro 5 osob s plně vybavenou kuchyní, jídelní sestavou, koupelnou, pracovním zázemím a vlastní " +
              "lodžií.",
          },
          room5: {
            name: "Apartmán 5",
            capacity: "2+3 osob",
            size: "37 m²",
            description: "Dvoupokojový apartmán pro 5 osob s vybaveným kuchyňským koutem, koupelnou, pracovním zázemím a vlastní lodžií.",
          },
          room6: {
            name: "Apartmán 6",
            capacity: "2+3 osob",
            size: "40 m²",
            description: "Apartmán se dvěma pokoji s oddělenými lůžky pro 5 osob, plně vybavenou kuchyní, koupelnou, pracovním zázemím a dostatkem " +
              "úložného prostoru.",
          },
          room7: {
            name: "Apartmán 7",
            capacity: "2+2 osob",
            size: "46 m²",
            description: "Apartmán ve druhém nadzemním podlaží pro 4 osoby s prostornou plně vybavenou kuchyní s výhledem do nádvoří, koupelnou, " +
              "lodžií a vlastní terasou.",
          },
        },
      },
    },
});
