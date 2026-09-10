import { currentRoutePath } from "@trebired/frontend";
import { LocaleProvider, mountLiveIsland } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { PageContent } from "#iacmuxrimql0";

function PageIsland() {
  return <PageContent path={currentRoutePath()} />;
}

export function mountContentIsland(elementId: string) {
  void mountLiveIsland({
      component: PageIsland,
      root: elementId,
      wrap: (node: ReactNode) => <LocaleProvider>{node}</LocaleProvider>,
  });
}
