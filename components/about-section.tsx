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
            <h2 className="mb-8 break-words text-3xl font-black leading-none tracking-normal text-neutral-900 min-[380px]:text-4xl sm:text-5xl lg:text-7xl">
              {t("about.titleTop")}
              <br />
              {t("about.titleBottom")}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
              {t("about.text1")}
            </p>
            <p className="mb-10 text-base leading-relaxed text-neutral-600 sm:text-lg">
              {t("about.text2")}
            </p>
            
            <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:gap-4">
              <div className="bg-neutral-100 p-5 text-center sm:p-6">
                <Building2 className="h-6 w-6 mx-auto mb-3 text-neutral-900" />
                <div className="break-words text-xs font-black uppercase leading-tight tracking-normal text-neutral-900 sm:tracking-wide">{t("about.stats.objects")}</div>
              </div>
              <div className="bg-neutral-100 p-5 text-center sm:p-6">
                <Users className="h-6 w-6 mx-auto mb-3 text-neutral-900" />
                <div className="break-words text-xs font-black uppercase leading-tight tracking-normal text-neutral-900 sm:tracking-wide">{t("about.stats.rooms")}</div>
              </div>
              <div className="bg-neutral-100 p-5 text-center sm:p-6">
                <Award className="h-6 w-6 mx-auto mb-3 text-neutral-900" />
                <div className="break-words text-xs font-black uppercase leading-tight tracking-normal text-neutral-900 sm:tracking-wide">{t("about.stats.years")}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-neutral-900 p-6 sm:p-12">
              <div className="border-l-4 border-primary pl-5 sm:pl-8">
                <p className="break-words text-2xl font-black leading-tight text-white min-[380px]:text-3xl sm:text-5xl">
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
