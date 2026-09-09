import {
  bindFrontendRuntime,
  configureLocaleRouting,
  configureSpa,
  currentLocale,
  parseLocalePathname,
} from "@trebired/frontend";
import "@trebired/frontend/static-icons";
import { createBrowserLog } from "@trebired/logger/browser";
import { LogErrorBoundary, LogProvider } from "@trebired/logger/browser/react";
import { LocaleProvider } from "@trebired/frontend/react";
import type { ReactElement } from "react";

import { Footer } from "#jpydwvtclrzh";
import { Header } from "#d19rad2krym3";
import { hydrateChromeRoots } from "#pgsley9n980u";
import { mountContentIsland } from "#6zkiijbcfna0";
import { LANG_ROUTING } from "./../shared/lang/policy";
import { metaFor } from "#y4hpoyu2xriv";

configureLocaleRouting(LANG_ROUTING);

const route = parseLocalePathname(window.location.pathname, LANG_ROUTING);

document.title = metaFor(route.pathname, route.locale).title;

const log = createBrowserLog({
    group: "frontend.app",
    source: "machynka-cz",
});

function observed(node: ReactElement) {
  return (
    <LogProvider log={log}>
    <LocaleProvider locale={currentLocale()}>
    <LogErrorBoundary group="frontend.chrome">{node}</LogErrorBoundary>
    </LocaleProvider>
    </LogProvider>
  );
}

configureSpa({});

void hydrateChromeRoots([
    [document.querySelector("header"), observed(<Header />)],
    [document.querySelector("footer"), observed(<Footer />)],
]).then(() => {
    bindFrontendRuntime(document, { icons: { mode: "static" } });
    mountContentIsland("live_content");
});
