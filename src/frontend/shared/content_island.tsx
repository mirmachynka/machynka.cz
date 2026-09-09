import { currentLocale, parseLocalePathname } from "@trebired/frontend";
import { LocaleProvider, mountLiveIsland } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { PageContent } from "#iacmuxrimql0";
import { LANG_ROUTING } from "./lang/policy";

function PageIsland() {
  const { pathname } = parseLocalePathname(window.location.pathname, LANG_ROUTING);
  return <PageContent path={pathname} />;
}

export function mountContentIsland(elementId: string) {
  void mountLiveIsland({
      component: PageIsland,
      root: elementId,
      wrap: (node: ReactNode) => <LocaleProvider locale={currentLocale()}>{node}</LocaleProvider>,
  });
}
