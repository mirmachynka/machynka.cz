import { createLocalTranslator } from "@trebired/i18n";
import { Icon, SiteHeader } from "@trebired/frontend/react";

import { contactInfo, phoneHref } from "#aequr96wfpxz";
import { ICON_MENU, ICON_PHONE, ICON_CLOSE } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";
import { LangSwitcher } from "./lang_switcher";
import { navItems } from "./nav_items";

function HeaderPhone(props: { className: string }) {
  return (
    <a href={phoneHref(contactInfo.accommodationPhone)} className={props.className}>
    <Icon spec={ICON_PHONE} />
    {contactInfo.accommodationPhone}
    </a>
  );
}

export function Header() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <SiteHeader
    actions={(
        <>
        <HeaderPhone className="site-header-phone" />
        <LangSwitcher />
        </>
    )}
    brand={<img src="/logo.svg" alt="MACHYNKA s.r.o." />}
    closeIcon={<Icon spec={ICON_CLOSE} />}
    labels={{ closeMenu: tr("menu.close"), navigation: tr("footer.navigation"), openMenu: tr("menu.open") }}
    links={navItems(tr)}
    menuActions={(
        <>
        <HeaderPhone className="site-header-mobile-phone" />
        <LangSwitcher />
        </>
    )}
    menuIcon={<Icon spec={ICON_MENU} />}
    softRedirect
    />
  );
}
