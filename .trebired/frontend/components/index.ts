import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { button } from "./button";
import { overlays } from "./overlays";
import { shell } from "./shell";

export const components = {
  overlays,
  shell,
  surfaces: {
    button,
  },
} satisfies FrontendComponentsConfig;
