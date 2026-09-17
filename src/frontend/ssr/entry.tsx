import { LiveIslandMount, LocaleProvider } from "@trebired/frontend/react";
import { siteHeaderRootHtml } from "@trebired/frontend";
import { buildStaticIconCache, createServerIconRenderer, withIconServerRenderer } from "@trebired/frontend/server";
import { renderToString } from "react-dom/server";
import type { ReactElement } from "react";

import { ALL_ICON_SPECS } from "#gpkp4b4vfavh";
import { Footer } from "#jpydwvtclrzh";
import { Header } from "#d19rad2krym3";
import { PageContent } from "#iacmuxrimql0";

const iconRenderer = createServerIconRenderer(buildStaticIconCache(ALL_ICON_SPECS));

export function renderRouteBody(path: string, locale: string): string {
  const localized = (node: ReactElement) => renderToString(
    <LocaleProvider locale={locale}>{node}</LocaleProvider>,
  );
  return withIconServerRenderer(iconRenderer, () => {
      const header = localized(<Header />);
      const content = localized(
        <LiveIslandMount rootId="live_content" stateId="live_content_state">
        <PageContent path={path} />
        </LiveIslandMount>,
      );
      const footer = localized(<Footer />);
      return `${siteHeaderRootHtml(header)}${content}<footer class="site-footer">${footer}</footer>`;
  });
}
