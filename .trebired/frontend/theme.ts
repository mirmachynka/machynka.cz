import type { FrontendDesignConfig, FrontendDesignInteractionsConfig, FrontendRuntimeConfig, FrontendThemeConfig } from "@trebired/frontend/config";

import { semantic } from "./tokens";

export const theme = {
  dark: "light",
  defaultMode: "light",
  light: "light",
  modes: {
    light: { scheme: "light" },
  },
} satisfies FrontendThemeConfig;

export const interactions = {
  activePress: {
    enabled: true,
  },
} satisfies FrontendDesignInteractionsConfig;

export const semantics = {
  anchorOffset: "5rem",
  heading: {
    fontWeight: "900",
  },
  selection: {
    bg: semantic.highlight,
    text: semantic.surface1,
  },
  transitionFast: "120ms",
} satisfies NonNullable<FrontendDesignConfig["semantics"]>;

export const runtime = {
  theme,
} satisfies FrontendRuntimeConfig;
