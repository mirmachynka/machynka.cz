import { onPageChange, registerPageCleanup } from "@trebired/frontend";
import type { ReactElement } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

function mount(elementId: string, render: (path: string) => ReactElement) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const node = render(window.location.pathname);
  const hasServerContent = el.childNodes.length > 0;
  const root = hasServerContent ? hydrateRoot(el, node) : createRoot(el);
  if (!hasServerContent) root.render(node);

  registerPageCleanup(el, () => root.unmount());
}

export function mountContentIsland(elementId: string, render: (path: string) => ReactElement) {
  mount(elementId, render);
  onPageChange(() => mount(elementId, render));
}
