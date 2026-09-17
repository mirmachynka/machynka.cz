import {
  bindFrontendRuntime,
  configureLocaleRouting,
  configureSpa,
  SITE_HEADER_ROOT_SELECTOR,
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

configureLocaleRouting(LANG_ROUTING);

const log = createBrowserLog({
    group: "frontend.app",
    source: "machynka-cz",
});

function observed(node: ReactElement) {
  return (
    <LogProvider log={log}>
    <LocaleProvider>
    <LogErrorBoundary group="frontend.chrome">{node}</LogErrorBoundary>
    </LocaleProvider>
    </LogProvider>
  );
}

configureSpa({});

void hydrateChromeRoots([
    [document.querySelector(SITE_HEADER_ROOT_SELECTOR), observed(<Header />)],
    [document.querySelector("footer"), observed(<Footer />)],
]).then(() => {
    bindFrontendRuntime(document, { icons: { mode: "static" } });
    mountContentIsland("live_content");
});
