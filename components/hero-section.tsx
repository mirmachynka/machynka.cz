import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Link } from "@/src/router"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[calc(100vh-5rem)] bg-neutral-900 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/bucovice-map.svg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[55%_50%] opacity-80 md:object-[95%_50%]"
        />
        <div className="absolute inset-0 bg-neutral-900/28" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(23,23,23,0.38)_0,rgba(23,23,23,0.16)_36%,transparent_68%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full py-24 sm:py-32 lg:w-1/2">
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-wide mb-8">
              {t("hero.titleTop")}
              <br />
              <span className="text-primary">{t("hero.titleAccent")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mb-12 leading-relaxed font-medium">
              {t("hero.text")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base font-black uppercase tracking-wide bg-primary hover:bg-primary/90">
                <Link href="/#ubytovani">
                  {t("hero.primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-black uppercase tracking-wide border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent">
                <Link href="/#kontakt">{t("hero.secondary")}</Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-md">
            <div className="border-l-4 border-primary pl-4">
              <div className="text-4xl sm:text-5xl font-black text-white">35</div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mt-1">{t("hero.stats.rooms")}</div>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <div className="text-4xl sm:text-5xl font-black text-white">2</div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mt-1">{t("hero.stats.objects")}</div>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <div className="text-4xl sm:text-5xl font-black text-white">24/7</div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mt-1">{t("hero.stats.support")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
