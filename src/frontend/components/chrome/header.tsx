import { createLocalTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";
import { useState } from "react";

import { contactInfo, phoneHref } from "#aequr96wfpxz";
import { ICON_MENU, ICON_PHONE, ICON_CLOSE } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";
import { LangSwitcher } from "./lang_switcher";
import { navItems, type NavItem } from "./nav_items";

type HeaderNavProps = {
  links: NavItem[];
};

function HeaderDesktopRow({ links, open, onToggle }: HeaderNavProps & { onToggle: () => void; open: boolean }) {
  return (
    <div className="site-header-row">
    <a href="/" className="site-header-brand" data-tbf-soft-redirect="">
    <img src="/logo.svg" alt="MACHYNKA s.r.o." className="site-header-logo" />
    </a>

    <nav className="site-header-nav">
    {links.map((link) => (
          <a key={link.href} href={link.href} className="site-header-link" data-tbf-soft-redirect="">
          {link.label}
          </a>
    ))}
    </nav>

    <div className="site-header-actions">
    <a href={phoneHref(contactInfo.accommodationPhone)} className="site-header-phone">
    <Icon spec={ICON_PHONE} />
    {contactInfo.accommodationPhone}
    </a>
    <LangSwitcher />
    </div>

    <button className="site-header-toggle" onClick={onToggle} aria-expanded={open} aria-label="Toggle menu">
    {open ? <Icon spec={ICON_CLOSE} /> : <Icon spec={ICON_MENU} />}
    </button>
    </div>
  );
}

function HeaderMobileMenu({ links, open, onNavigate }: HeaderNavProps & { onNavigate: () => void; open: boolean }) {
  return (
    <div className={`site-header-mobile ${open ? "site-header-mobile-open" : ""}`} aria-hidden={!open}>
    <div className="site-header-mobile-inner" data-dropdown-boundary>
    {links.map((link) => (
          <a
          key={link.href}
          href={link.href}
          className="site-header-mobile-link"
          onClickCapture={onNavigate}
          tabIndex={open ? 0 : -1}
          data-tbf-soft-redirect=""
          >
          {link.label}
          </a>
    ))}
    <div className="site-header-mobile-footer">
    <a href={phoneHref(contactInfo.accommodationPhone)} className="site-header-mobile-phone" tabIndex={open ? 0 : -1}>
    <Icon spec={ICON_PHONE} />
    {contactInfo.accommodationPhone}
    </a>
    <LangSwitcher />
    </div>
    </div>
    </div>
  );
}

export function Header() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = navItems(tr);

  return (
    <>
    <div className="site-header-bar">
    <HeaderDesktopRow links={links} open={mobileMenuOpen} onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
    </div>
    <HeaderMobileMenu links={links} open={mobileMenuOpen} onNavigate={() => setMobileMenuOpen(false)} />
    </>
  );
}
