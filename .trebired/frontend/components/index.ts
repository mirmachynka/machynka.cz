import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { button } from "./button";
import { overlays } from "./overlays";

export const components = {
  overlays,
  surfaces: {
    button,
  },
} satisfies FrontendComponentsConfig;
