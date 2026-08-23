import type { I18nTranslator } from "@trebired/i18n";

export type NavItem = {
  href: string;
  label: string;
};

export function navItems(tr: I18nTranslator): NavItem[] {
  return [
    { href: "/#ubytovani", label: tr("nav.accommodation") },
    { href: "/#o-nas", label: tr("nav.about") },
    { href: "/#kontakt", label: tr("nav.contact") },
  ];
}
