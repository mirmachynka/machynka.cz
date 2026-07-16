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
        <div className="relative z-10 w-full py-20 sm:py-32 lg:w-[64%] xl:w-[58%]">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mb-8 break-words text-[2.75rem] font-black leading-none tracking-normal text-white min-[380px]:text-[3.25rem] md:text-7xl md:tracking-wide lg:break-normal lg:text-8xl">
              {t("hero.titleTop")}
              <br />
              <span className="text-primary">{t("hero.titleAccent")}</span>
            </h1>

            <p className="mb-10 max-w-xl text-base font-medium leading-relaxed text-neutral-400 sm:mb-12 sm:text-xl">
              {t("hero.text")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-auto min-h-12 w-full bg-primary px-5 py-3 text-center text-base font-black uppercase leading-tight tracking-normal whitespace-normal hover:bg-primary/90 sm:min-h-14 sm:w-auto sm:px-8 sm:py-4 sm:tracking-wide">
                <Link href="/#ubytovani">
                  <span className="min-w-0">{t("hero.primary")}</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto min-h-12 w-full border-2 border-white bg-transparent px-5 py-3 text-center text-base font-black uppercase leading-tight tracking-normal text-white whitespace-normal hover:bg-white hover:text-neutral-900 sm:min-h-14 sm:w-auto sm:px-8 sm:py-4 sm:tracking-wide">
                <Link href="/#kontakt">
                  <span className="min-w-0">{t("hero.secondary")}</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid max-w-md grid-cols-3 gap-2 sm:mt-20 sm:gap-8">
            <div className="min-w-0 border-l-4 border-primary pl-3 sm:pl-4">
              <div className="text-3xl font-black leading-none text-white min-[380px]:text-4xl sm:text-5xl">35</div>
              <div className="mt-2 break-words text-[10px] font-bold uppercase leading-tight tracking-[0.06em] text-neutral-500 sm:text-xs sm:tracking-widest">{t("hero.stats.rooms")}</div>
            </div>
            <div className="min-w-0 border-l-4 border-primary pl-3 sm:pl-4">
              <div className="text-3xl font-black leading-none text-white min-[380px]:text-4xl sm:text-5xl">2</div>
              <div className="mt-2 break-words text-[10px] font-bold uppercase leading-tight tracking-[0.06em] text-neutral-500 sm:text-xs sm:tracking-widest">{t("hero.stats.objects")}</div>
            </div>
            <div className="min-w-0 border-l-4 border-primary pl-3 sm:pl-4">
              <div className="text-3xl font-black leading-none text-white min-[380px]:text-4xl sm:text-5xl">24/7</div>
              <div className="mt-2 break-words text-[10px] font-bold uppercase leading-tight tracking-[0.06em] text-neutral-500 sm:text-xs sm:tracking-widest">{t("hero.stats.support")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
