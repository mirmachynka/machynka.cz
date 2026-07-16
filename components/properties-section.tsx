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
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-neutral-900 leading-none tracking-tight">
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
                  <span className="inline-block px-4 py-2 bg-primary text-white text-xs font-black uppercase tracking-wide">
                    {t("common.rooms", { count: property.rooms })}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-14 h-14 bg-white flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="h-6 w-6 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tight mb-4">
                  {name}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {description}
                </p>
                
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {property.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-center">
                      <div className="w-12 h-12 mx-auto bg-neutral-100 flex items-center justify-center mb-2">
                        <feature.icon className="h-5 w-5 text-neutral-700" />
                      </div>
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">
                        {featureLabels[featureIndex]}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-sm text-neutral-500 font-medium">{property.address}</span>
                  <span
                    className="text-sm font-black text-primary uppercase tracking-wide hover:underline"
                  >
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
