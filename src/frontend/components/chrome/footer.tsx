import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";

import { contactInfo, phoneHref } from "#aequr96wfpxz";
import { ICON_MAIL, ICON_MAP_PIN, ICON_PHONE } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";
import { navItems } from "./nav_items";

function FooterBrandColumn({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="site-footer-brand-col">
    <div className="site-footer-brand-group">
    <a href="/" className="site-footer-brand" data-tbf-soft-redirect="">
    <img src="/footer-logo.svg" alt="MACHYNKA s.r.o." className="site-footer-logo" />
    </a>
    <p className="site-footer-text">{tr("footer.text")}</p>
    </div>
    <a href={phoneHref(contactInfo.accommodationPhone)} className="site-footer-phone">
    <Icon spec={ICON_PHONE} />
    {contactInfo.accommodationPhone}
    </a>
    </div>
  );
}

function FooterNavColumn({ links, tr }: { links: ReturnType<typeof navItems>; tr: I18nTranslator }) {
  return (
    <div className="site-footer-column">
    <h4 className="site-footer-heading">{tr("footer.navigation")}</h4>
    <nav className="site-footer-nav">
    {links.map((link) => (
          <a key={link.href} href={link.href} className="site-footer-nav-link" data-tbf-soft-redirect="">
          {link.label}
          </a>
    ))}
    </nav>
    </div>
  );
}

function FooterContactColumn({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="site-footer-column">
    <h4 className="site-footer-heading">{tr("footer.contactLabel")}</h4>
    <div className="site-footer-contact">
    <div className="site-footer-contact-row">
    <Icon spec={ICON_MAP_PIN} />
    <span>
    {contactInfo.contactAddress.street}, {contactInfo.contactAddress.postalCode} {contactInfo.contactAddress.city}
    </span>
    </div>
    <a href={`mailto:${contactInfo.email}`} className="site-footer-contact-row site-footer-email">
    <Icon spec={ICON_MAIL} />
    {contactInfo.email}
    </a>
    </div>
    </div>
  );
}

export function Footer() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);
  const links = navItems(tr);

  return (
    <div className="site-footer-inner">
    <div className="site-footer-grid">
    <FooterBrandColumn tr={tr} />
    <FooterNavColumn links={links} tr={tr} />
    <FooterContactColumn tr={tr} />
    </div>

    <div className="site-footer-bottom">
    <p className="site-footer-copy">© 2026 MACHYNKA s.r.o. {tr("footer.rights")}</p>
    </div>
    </div>
  );
}
