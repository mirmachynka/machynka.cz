import { BedDouble, CookingPot, MapPin, ShieldCheck, Sparkles, Wifi } from "lucide-react"
import { useTranslation } from "react-i18next"

import { CardTable } from "@/components/card-table"

const benefitIcons = [BedDouble, MapPin, Wifi, CookingPot, ShieldCheck, Sparkles]

export function BenefitsSection() {
  const { t } = useTranslation()
  const benefits = t("benefits.items", { returnObjects: true }) as Array<[string, string]>

  return (
    <section className="py-24 sm:py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-primary mb-6">
            {t("benefits.label")}
          </span>
          <h2 className="break-words text-3xl font-black leading-none tracking-normal text-white min-[380px]:text-4xl sm:text-5xl lg:text-7xl">
            {t("benefits.title")}
          </h2>
        </div>
        
        <CardTable
          items={benefits}
          columns={3}
          borderClassName="border-neutral-800"
          className="bg-neutral-900"
          itemClassName="group bg-neutral-900 p-6 transition-colors duration-300 hover:bg-primary sm:p-10"
          getKey={([title]) => title}
          renderItem={([title, description], index) => {
            const Icon = benefitIcons[index] ?? BedDouble

            return (
              <>
                <div className="w-14 h-14 bg-neutral-800 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 break-words text-lg font-black uppercase tracking-normal text-white sm:text-xl">
                  {title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {description}
                </p>
              </>
            )
          }}
        />
      </div>
    </section>
  )
}
