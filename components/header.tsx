import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"

import { LangSwitcher } from "@/components/lang-switcher"
import { contactInfo, phoneHref } from "@/lib/contact-info"
import { cn } from "@/lib/utils"
import { Link } from "@/src/router"

export function Header() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLinks = t("nav.items", { returnObjects: true }) as Array<{ href: string; label: string }>

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white overflow-visible relative">
      <div className="relative z-10 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="MACHYNKA s.r.o."
              className="h-14 w-auto max-w-[220px] object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a 
              href={phoneHref(contactInfo.accommodationPhone)}
              className="flex items-center gap-2 text-sm font-bold text-neutral-900"
            >
              <Phone className="h-4 w-4" />
              {contactInfo.accommodationPhone}
            </a>
            <LangSwitcher />
          </div>

          <button
            className="flex h-12 w-12 items-center justify-center md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "absolute left-0 right-0 top-full bg-white shadow-[0_18px_35px_rgb(0_0_0_/0.08)] transition-[max-height,opacity,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          mobileMenuOpen
            ? "max-h-[30rem] border-t border-neutral-200 opacity-100"
            : "pointer-events-none max-h-0 border-t border-transparent opacity-0",
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={cn(mobileMenuOpen ? "overflow-visible" : "overflow-hidden")}>
          <div
            className={cn(
              "px-4 py-6 space-y-4 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
            )}
            data-dropdown-boundary
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-bold text-neutral-900 uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200">
              <a 
                href={phoneHref(contactInfo.accommodationPhone)}
                className="flex items-center gap-2 text-base font-bold text-neutral-900 mb-4"
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                <Phone className="h-5 w-5" />
                {contactInfo.accommodationPhone}
              </a>
              <div className="mt-3">
                <LangSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
