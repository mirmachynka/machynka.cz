import { createFrontendTokenHelpers } from "@trebired/frontend/config";

import { palette } from "./palette";

const token = createFrontendTokenHelpers(palette);

const semantic = {
  accent: token.semantic("accent"),
  backgroundPage: token.semantic("background-page"),
  borderSurface1: token.semantic("border-surface-1"),
  borderSurface2: token.semantic("border-surface-2"),
  focusColor: token.semantic("focus-color"),
  highlight: token.semantic("highlight"),
  surface1: token.semantic("surface-1"),
  surface2: token.semantic("surface-2"),
  textColor: token.semantic("text-color"),
  textMuted: token.semantic("text-color-muted"),
};

const ui = {
  fontSans: token.variable("tbf-font-sans", "Geist, sans-serif"),
  radiusMd: token.variable("radius-md", token.variable("tbf-radius", "0")),
};

export { semantic, token, ui };
