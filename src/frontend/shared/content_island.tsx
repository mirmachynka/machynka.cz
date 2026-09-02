import { mountLiveIsland } from "@trebired/frontend/react";

import { PageContent } from "#iacmuxrimql0";

function PageIsland() {
  return <PageContent path={window.location.pathname} />;
}

export function mountContentIsland(elementId: string) {
  void mountLiveIsland({ root: elementId, component: PageIsland });
}
