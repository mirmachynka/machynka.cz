import type { FrontendPaletteConfig } from "@trebired/frontend/config";

const neutral = {
  "50": "oklch(98.5% 0 0)",
  "100": "oklch(97% 0 0)",
  "200": "oklch(92.2% 0 0)",
  "300": "oklch(87% 0 0)",
  "400": "oklch(70.8% 0 0)",
  "500": "oklch(55.6% 0 0)",
  "600": "oklch(43.9% 0 0)",
  "700": "oklch(37.1% 0 0)",
  "800": "oklch(26.9% 0 0)",
  "900": "oklch(20.5% 0 0)",
  "950": "oklch(14.5% 0 0)",
};

export const palette = {
  modes: {
    light: {
      scale: {
        neutral,
        primary: { "500": "oklch(0.55 0.22 25)" },
        white: { "500": "oklch(1 0 0)" },
      },
    },
  },
  semantic: {
    accent: { family: "primary", step: "500" },
    "background-page": { family: "neutral", step: "50" },
    "border-surface-1": { family: "neutral", step: "200" },
    "border-surface-2": { family: "neutral", step: "200" },
    "focus-color": { family: "primary", step: "500" },
    highlight: { family: "primary", step: "500" },
    "surface-1": { family: "white", step: "500" },
    "surface-2": { family: "neutral", step: "100" },
    "text-color": { family: "neutral", step: "900" },
    "text-color-muted": { family: "neutral", step: "500" },
  },
} satisfies FrontendPaletteConfig;
