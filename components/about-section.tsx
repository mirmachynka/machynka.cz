import { Building2, Users, Award } from "lucide-react"
import { useTranslation } from "react-i18next"

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="o-nas" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-black uppercase tracking-widest text-primary mb-6">
              {t("about.label")}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-neutral-900 leading-none tracking-tight mb-8">
              {t("about.titleTop")}
              <br />
              {t("about.titleBottom")}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              {t("about.text1")}
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              {t("about.text2")}
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-6 bg-neutral-100">
                <Building2 className="h-6 w-6 mx-auto mb-3 text-neutral-900" />
                <div className="text-xs font-black uppercase tracking-wide text-neutral-900">{t("about.stats.objects")}</div>
              </div>
              <div className="text-center p-6 bg-neutral-100">
                <Users className="h-6 w-6 mx-auto mb-3 text-neutral-900" />
                <div className="text-xs font-black uppercase tracking-wide text-neutral-900">{t("about.stats.rooms")}</div>
              </div>
              <div className="text-center p-6 bg-neutral-100">
                <Award className="h-6 w-6 mx-auto mb-3 text-neutral-900" />
                <div className="text-xs font-black uppercase tracking-wide text-neutral-900">{t("about.stats.years")}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-neutral-900 p-8 sm:p-12">
              <div className="border-l-4 border-primary pl-8">
                <p className="text-3xl font-black leading-tight text-white sm:text-5xl">
                  "{t("about.quote")}"
                </p>
                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-white/70">
                  {t("about.quoteSource")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
