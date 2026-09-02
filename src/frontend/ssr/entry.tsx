import { LiveIslandMount } from "@trebired/frontend/react";
import { buildStaticIconCache, createServerIconRenderer, withIconServerRenderer } from "@trebired/frontend/server";
import { renderToString } from "react-dom/server";

import { ALL_ICON_SPECS } from "#gpkp4b4vfavh";
import { Footer } from "#jpydwvtclrzh";
import { Header } from "#d19rad2krym3";
import { PageContent } from "#iacmuxrimql0";

const iconRenderer = createServerIconRenderer(buildStaticIconCache(ALL_ICON_SPECS));

export function renderRouteBody(path: string): string {
  return withIconServerRenderer(iconRenderer, () => {
      const header = renderToString(<Header />);
      const content = renderToString(
        <LiveIslandMount rootId="live_content" stateId="live_content_state">
        <PageContent path={path} />
        </LiveIslandMount>,
      );
      const footer = renderToString(<Footer />);
      return `<header class="site-header">${header}</header>${content}<footer class="site-footer">${footer}</footer>`;
  });
}
