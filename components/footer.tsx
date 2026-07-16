import { Phone, Mail, MapPin } from "lucide-react"
import { useTranslation } from "react-i18next"

import { contactInfo, phoneHref } from "@/lib/contact-info"
import { Link } from "@/src/router"

export function Footer() {
  const { t } = useTranslation()
  const navLinks = t("nav.items", { returnObjects: true }) as Array<{ href: string; label: string }>

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6">
              <img
                src="/footer-logo.svg"
                alt="MACHYNKA s.r.o."
                className="h-20 w-auto max-w-[320px] object-contain"
              />
            </Link>
            <p className="text-neutral-400 leading-relaxed max-w-sm mb-8">
              {t("footer.text")}
            </p>
            <a 
              href={phoneHref(contactInfo.accommodationPhone)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white text-sm font-bold hover:bg-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {contactInfo.accommodationPhone}
            </a>
          </div>
          
          <div>
            <h4 className="font-black text-white uppercase tracking-wide mb-6 text-sm">
              {t("footer.navigation")}
            </h4>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-neutral-400 hover:text-primary transition-colors font-medium">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="font-black text-white uppercase tracking-wide mb-6 text-sm">
              {t("common.contact")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  {contactInfo.contactAddress.street}, {contactInfo.contactAddress.postalCode}{" "}
                  {contactInfo.contactAddress.city}
                </span>
              </div>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-neutral-400 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
        
        <div className="py-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © 2026 MACHYNKA s.r.o. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
