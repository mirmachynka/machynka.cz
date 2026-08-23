import { semantic, token } from "#i0bvtbidf4kj";

export const overlays = {
  popover: {
    item: {
      root: {
        color: semantic.textMuted,
      },
      states: {
        hover: {
          background: semantic.surface2,
          color: semantic.textColor,
        },
        selected: {
          background: semantic.surface2,
          color: semantic.textColor,
        },
      },
    },
    panel: {
      background: semantic.surface1,
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
    },
  },
};
