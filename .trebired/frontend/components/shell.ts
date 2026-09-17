import { token } from "#i0bvtbidf4kj";

const border = token.border(token.color("neutral", "200"));

export const shell = {
  header: {
    actionsGap: "1.5rem",
    brand: { logoHeight: "3.5rem" },
    height: "5rem",
    link: {
      color: token.color("neutral", "500"),
      fontWeight: "700",
      hoverColor: token.color("neutral", "900"),
      letterSpacing: "0.02em",
      padding: "0.5rem 1rem",
      radius: "0",
      textTransform: "uppercase",
    },
    maxWidth: "80rem",
    menu: {
      background: token.color("white", "500"),
      border,
      footer: { border },
      link: { color: token.color("neutral", "900"), fontWeight: "700", padding: "0.25rem 0" },
      linksGap: "0.5rem",
    },
    paddingInline: "var(--tbf-container-px)",
    root: {
      background: token.color("white", "500"),
      border,
      zIndex: "50",
    },
    toggle: { iconSize: "2rem", size: "3rem" },
  },
};
