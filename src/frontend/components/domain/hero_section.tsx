import { createLocalTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";
import type { CSSProperties } from "react";

import { Button } from "#cgroy6iibw7w";
import { ICON_ARROW_RIGHT } from "#gpkp4b4vfavh";
import { MapBackdrop } from "#x3jm3224vb0o";
import { useLang } from "#n99t4onl5ufo";

export function HeroSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  const titleTop = tr("hero.titleTop");
  const titleAccent = tr("hero.titleAccent");
  const titleChars = Math.max(titleTop.length, titleAccent.length);

  return (
    <section className="hero-section">
    <MapBackdrop />

    <div className="hero-section-inner">
    <div className="hero-section-content">
    <div className="hero-section-copy">
    <h1 className="hero-section-title" style={{ "--hero-title-chars": titleChars } as CSSProperties}>
    <span className="hero-section-title-top">{titleTop}</span>
    <br />
    <span className="hero-section-title-accent">{titleAccent}</span>
    </h1>

    <p className="hero-section-text">{tr("hero.text")}</p>

    <div className="hero-section-actions">
    <Button href="/#ubytovani" variant="primary">
    <span>{tr("hero.primary")}</span>
    <Icon spec={ICON_ARROW_RIGHT} />
    </Button>
    <Button href="/#kontakt" variant="outline">
    <span>{tr("hero.secondary")}</span>
    </Button>
    </div>
    </div>

    <div className="hero-section-stats">
    <div className="hero-section-stat">
    <div className="hero-section-stat-value">35</div>
    <div className="hero-section-stat-label">{tr("hero.stats.rooms")}</div>
    </div>
    <div className="hero-section-stat">
    <div className="hero-section-stat-value">2</div>
    <div className="hero-section-stat-label">{tr("hero.stats.objects")}</div>
    </div>
    <div className="hero-section-stat">
    <div className="hero-section-stat-value">24/7</div>
    <div className="hero-section-stat-label">{tr("hero.stats.support")}</div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
