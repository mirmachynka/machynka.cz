import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";
import { hydrateRoot } from "react-dom/client";

type ChromeRoot = [Element | null, ReactElement];

function AfterCommit({ children, onCommit }: { children: ReactNode; onCommit: () => void }) {
  useEffect(() => {
      onCommit();
    }, [onCommit]);

  return <>{children}</>;
}

export function hydrateChromeRoots(roots: ChromeRoot[]): Promise<void> {
  const present = roots.filter((entry): entry is [Element, ReactElement] => entry[0] !== null);

  if (present.length === 0) return Promise.resolve();

  return new Promise((resolve) => {
      let remaining = present.length;

      function onCommit() {
        remaining -= 1;
        if (remaining === 0) resolve();
      }

      for (const [element, node] of present) {
        hydrateRoot(element, <AfterCommit onCommit={onCommit}>{node}</AfterCommit>);
      }
  });
}
