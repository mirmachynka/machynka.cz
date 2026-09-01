import { createLocalTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";

import { ICON_AWARD, ICON_BUILDING, ICON_USERS } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";

export function AboutSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <section id="o-nas" className="about-section">
    <div className="about-section-inner">
    <h2 className="section-title about-section-title">{tr("about.title")}</h2>

    <div className="about-section-grid">
    <div className="about-section-copy">
    <div className="about-section-text-group">
    <p className="about-section-text">{tr("about.text1")}</p>
    <p className="about-section-text">{tr("about.text2")}</p>
    </div>

    <div className="about-section-stats">
    <div className="about-section-stat">
    <Icon spec={ICON_BUILDING} />
    <div className="about-section-stat-label">{tr("about.stats.objects")}</div>
    </div>
    <div className="about-section-stat">
    <Icon spec={ICON_USERS} />
    <div className="about-section-stat-label">{tr("about.stats.rooms")}</div>
    </div>
    <div className="about-section-stat">
    <Icon spec={ICON_AWARD} />
    <div className="about-section-stat-label">{tr("about.stats.years")}</div>
    </div>
    </div>
    </div>

    <div className="about-section-quote-wrap">
    <div className="about-section-quote-card">
    <div className="about-section-quote-border">
    <p className="about-section-quote">"{tr("about.quote")}"</p>
    <p className="about-section-quote-source">{tr("about.quoteSource")}</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
