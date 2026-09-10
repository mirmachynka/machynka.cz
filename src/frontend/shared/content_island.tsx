import { LocaleProvider, mountLiveIsland } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { PageContent } from "#iacmuxrimql0";

function PageIsland() {
  const pathname = window.location.pathname.replace(/\/+$/u, "") || "/";
  return <PageContent path={pathname} />;
}

export function mountContentIsland(elementId: string) {
  void mountLiveIsland({
      component: PageIsland,
      root: elementId,
      wrap: (node: ReactNode) => <LocaleProvider>{node}</LocaleProvider>,
  });
}
