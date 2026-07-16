import { Home, MapPin, Heart, Clock, Shield, Sparkles } from "lucide-react"
import { useTranslation } from "react-i18next"

const benefitIcons = [Home, MapPin, Heart, Clock, Shield, Sparkles]

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
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none tracking-tight">
            {t("benefits.title")}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-700">
          {benefits.map(([title, description], index) => {
            const Icon = benefitIcons[index] ?? Home
            return (
            <div
              key={title}
              className="bg-neutral-900 p-10 group hover:bg-primary transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-neutral-800 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                {title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {description}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
