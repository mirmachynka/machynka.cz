import { ArrowUpRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import { accommodations } from "@/lib/accommodations"
import { Link } from "@/src/router"

export function PropertiesSection() {
  const { t } = useTranslation()

  return (
    <section id="ubytovani" className="py-24 sm:py-32 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-primary mb-6">
            {t("properties.label")}
          </span>
          <h2 className="break-words text-3xl font-black leading-none tracking-normal text-neutral-900 min-[380px]:text-4xl sm:text-5xl lg:text-7xl">
            {t("properties.title")}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {accommodations.map((property) => {
            const name = t(`accommodations.${property.id}.name`)
            const description = t(`accommodations.${property.id}.description`)
            const featureLabels = t(`accommodations.${property.id}.features`, { returnObjects: true }) as string[]

            return (
            <Link
              key={property.path}
              href={property.path}
              className="group bg-white border border-neutral-200 hover:border-neutral-900 transition-colors"
            >
              <div className="aspect-[16/10] bg-neutral-900 relative overflow-hidden">
                <img
                  src={property.exteriorImage}
                  alt={name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/45 via-neutral-950/5 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="inline-block bg-primary px-3 py-2 text-xs font-black uppercase tracking-normal text-white sm:px-4 sm:tracking-wide">
                    {t("common.rooms", { count: property.rooms })}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-14 h-14 bg-white flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="h-6 w-6 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="mb-4 break-words text-xl font-black uppercase tracking-normal text-neutral-900 sm:text-2xl">
                  {name}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {description}
                </p>
                
                <div className="mb-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
                  {property.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="min-w-0 text-center">
                      <div className="w-12 h-12 mx-auto bg-neutral-100 flex items-center justify-center mb-2">
                        <feature.icon className="h-5 w-5 text-neutral-700" />
                      </div>
                      <span className="block text-[10px] font-bold leading-relaxed text-neutral-500 uppercase tracking-[0.02em] break-words">
                        {featureLabels[featureIndex]}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col gap-3 border-t border-neutral-200 pt-6 min-[360px]:flex-row min-[360px]:items-center min-[360px]:justify-between">
                  <span className="text-sm text-neutral-500 font-medium">{property.address}</span>
                  <span className="text-sm font-black uppercase tracking-normal text-primary hover:underline sm:tracking-wide">
                    {t("common.detail")}
                  </span>
                </div>
              </div>
            </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
