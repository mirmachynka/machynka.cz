import { Phone, Mail, MapPin, Building2, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import { GoogleMapEmbed } from "@/components/google-map-embed"
import { Button } from "@/components/ui/button"
import { contactInfo, phoneHref } from "@/lib/contact-info"

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block text-xs font-black uppercase tracking-widest text-primary mb-6">
              {t("common.contact")}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-neutral-900 leading-none tracking-tight mb-8">
              {t("contactSection.titleTop")}
              <br />
              {t("contactSection.titleBottom")}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-12 max-w-md">
              {t("contactSection.text")}
            </p>
            
            <div className="space-y-4">
              <a 
                href={phoneHref(contactInfo.accommodationPhone)}
                className="flex items-center gap-6 p-6 bg-neutral-100 hover:bg-primary group transition-colors"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center">
                  <Phone className="h-6 w-6 text-neutral-900" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-black uppercase tracking-widest text-neutral-500 group-hover:text-white/70 transition-colors mb-1">
                    {t("contactSection.accommodationPhone")}
                  </div>
                  <div className="text-2xl font-black text-neutral-900 group-hover:text-white transition-colors">
                    {contactInfo.accommodationPhone}
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-neutral-400 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="mailto:miroslav@machynka.cz" 
                className="flex items-center gap-6 p-6 bg-neutral-100 hover:bg-primary group transition-colors"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center">
                  <Mail className="h-6 w-6 text-neutral-900" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-black uppercase tracking-widest text-neutral-500 group-hover:text-white/70 transition-colors mb-1">
                    {t("common.email")}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-neutral-900 group-hover:text-white transition-colors break-all">
                    miroslav@machynka.cz
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-neutral-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="relative mt-8 min-h-[360px] overflow-hidden bg-neutral-100">
              <GoogleMapEmbed
                src={contactInfo.contactAddress.mapEmbedUrl}
                className="absolute inset-0"
                title={`${t("contactSection.contactAddress")}: ${contactInfo.contactAddress.street}`}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-900 p-8 sm:p-10">
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6">
                {t("contactSection.contactAddress")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t("common.contact")}</div>
                    <div className="text-neutral-400 text-sm">{contactInfo.contactAddress.street}</div>
                    <div className="text-neutral-400 text-sm">
                      {contactInfo.contactAddress.postalCode} {contactInfo.contactAddress.city}
                    </div>
                    <p className="mt-5 max-w-md bg-primary p-4 text-sm font-bold leading-relaxed text-white">
                      {t("contactSection.receptionNote")}
                    </p>
                  </div>
                </div>
                <div className="border-t border-neutral-800 pt-4">
                  <div className="mb-3 text-xs font-black uppercase tracking-widest text-neutral-500">
                    {t("contactSection.accommodationAddresses")}
                  </div>
                </div>
                {contactInfo.branchAddresses.map((address) => (
                  <div key={address.name} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{address.name}</div>
                      <div className="text-neutral-400 text-sm">{address.street}</div>
                      <div className="text-neutral-400 text-sm">
                        {address.city} {address.postalCode}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 p-8 sm:p-10">
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6">
                {t("contactSection.operator")}
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-4 w-4 text-primary" />
                </div>
                <div className="text-sm text-neutral-400">
                  <div className="font-bold text-white">{contactInfo.operator.name}</div>
                  <div>{t("contactSection.representedBy", { name: contactInfo.operator.representedBy })}</div>
                  <div>{contactInfo.operator.street}</div>
                  <div>
                    {contactInfo.operator.city} {contactInfo.operator.postalCode}
                  </div>
                  <div className="mt-3">{t("contactSection.companyId")}: {contactInfo.operator.companyId}</div>
                  <div>{t("contactSection.taxId")}: {contactInfo.operator.taxId}</div>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="w-full h-16 text-base font-black uppercase tracking-wide bg-primary hover:bg-primary/90">
              <a href={phoneHref(contactInfo.accommodationPhone)}>
                {t("common.callNow")}
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
