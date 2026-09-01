import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";

import { Button } from "#cgroy6iibw7w";
import { GoogleMapEmbed } from "#47jjzns0wjli";
import { contactInfo, phoneHref } from "#aequr96wfpxz";
import { ICON_ARROW_RIGHT, ICON_BUILDING, ICON_MAIL, ICON_MAP_PIN, ICON_PHONE } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";

function ContactLinks({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="contact-section-links">
    <a href={phoneHref(contactInfo.accommodationPhone)} className="contact-link">
    <div className="contact-link-icon">
    <Icon spec={ICON_PHONE} />
    </div>
    <div className="contact-link-body">
    <div className="contact-link-label">{tr("contactSection.accommodationPhone")}</div>
    <div className="contact-link-value">{contactInfo.accommodationPhone}</div>
    </div>
    <Icon spec={ICON_ARROW_RIGHT} className="contact-link-arrow" />
    </a>

    <a href={`mailto:${contactInfo.email}`} className="contact-link">
    <div className="contact-link-icon">
    <Icon spec={ICON_MAIL} />
    </div>
    <div className="contact-link-body">
    <div className="contact-link-label">{tr("contactSection.emailLabel")}</div>
    <div className="contact-link-value contact-link-value-email">{contactInfo.email}</div>
    </div>
    <Icon spec={ICON_ARROW_RIGHT} className="contact-link-arrow" />
    </a>
    </div>
  );
}

function ContactAddressPanel({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="contact-panel">
    <h3 className="contact-panel-title">{tr("contactSection.contactAddress")}</h3>
    <div className="contact-panel-body">
    <div className="contact-panel-row">
    <div className="contact-panel-icon">
    <Icon spec={ICON_MAP_PIN} />
    </div>
    <div className="contact-panel-column">
    <div className="contact-panel-address-lines">
    <div className="contact-panel-name">{tr("contactSection.label")}</div>
    <div className="contact-panel-detail">{contactInfo.contactAddress.street}</div>
    <div className="contact-panel-detail">
    {contactInfo.contactAddress.postalCode} {contactInfo.contactAddress.city}
    </div>
    </div>
    <p className="contact-panel-note">{tr("contactSection.receptionNote")}</p>
    </div>
    </div>
    <div className="contact-panel-divider">
    <div className="contact-panel-label">{tr("contactSection.accommodationAddresses")}</div>
    </div>
    {contactInfo.branchAddresses.map((address) => (
          <div key={address.name} className="contact-panel-row">
          <div className="contact-panel-icon">
          <Icon spec={ICON_MAP_PIN} />
          </div>
          <div>
          <div className="contact-panel-name">{address.name}</div>
          <div className="contact-panel-detail">{address.street}</div>
          <div className="contact-panel-detail">
          {address.city} {address.postalCode}
          </div>
          </div>
          </div>
    ))}
    </div>
    </div>
  );
}

function ContactOperatorPanel({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="contact-panel">
    <h3 className="contact-panel-title">{tr("contactSection.operator")}</h3>
    <div className="contact-panel-row">
    <div className="contact-panel-icon">
    <Icon spec={ICON_BUILDING} />
    </div>
    <div className="contact-panel-operator">
    <div className="contact-panel-operator-lines">
    <div className="contact-panel-name">{contactInfo.operator.name}</div>
    <div>{tr("contactSection.representedBy", { name: contactInfo.operator.representedBy })}</div>
    <div>{contactInfo.operator.street}</div>
    <div>
    {contactInfo.operator.city} {contactInfo.operator.postalCode}
    </div>
    </div>
    <div className="contact-panel-operator-lines">
    <div>
    {tr("contactSection.companyId")}: {contactInfo.operator.companyId}
    </div>
    <div>
    {tr("contactSection.taxId")}: {contactInfo.operator.taxId}
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export function ContactSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <section id="kontakt" className="contact-section">
    <div className="contact-section-inner">
    <h2 className="section-title contact-section-title">{tr("contactSection.title")}</h2>

    <div className="contact-section-grid">
    <div className="contact-section-column">
    <p className="contact-section-text">{tr("contactSection.text")}</p>

    <ContactLinks tr={tr} />

    <div className="contact-section-map">
    <GoogleMapEmbed
    src={contactInfo.contactAddress.mapEmbedUrl}
    className="contact-section-map-frame"
    title={`${tr("contactSection.contactAddress")}: ${contactInfo.contactAddress.street}`}
    />
    </div>
    </div>

    <div className="contact-section-panels">
    <ContactAddressPanel tr={tr} />
    <ContactOperatorPanel tr={tr} />

    <Button href={phoneHref(contactInfo.accommodationPhone)} variant="primary">
    <span>{tr("contactSection.callNow")}</span>
    <Icon spec={ICON_PHONE} />
    </Button>
    </div>
    </div>
    </div>
    </section>
  );
}
