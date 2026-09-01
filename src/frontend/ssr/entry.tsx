import { renderToString } from "react-dom/server";

import { Footer } from "#jpydwvtclrzh";
import { Header } from "#d19rad2krym3";
import { PageContent } from "#iacmuxrimql0";

export function renderRouteBody(path: string): string {
  const header = renderToString(<Header />);
  const content = renderToString(<PageContent path={path} />);
  const footer = renderToString(<Footer />);
  return `<header class="site-header">${header}</header><div id="live_content">${content}</div><footer class="site-footer">${footer}</footer>`;
}
