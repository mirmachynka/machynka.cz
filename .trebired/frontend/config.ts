import { defineConfig } from "@trebired/frontend/config";

import { ALL_ICON_SPECS } from "#gpkp4b4vfavh";

import { components } from "./components";
import { palette } from "./palette";
import { systems } from "./systems";
import { interactions, runtime, semantics } from "./theme";
import { breakpoints, typography } from "./typography";

export default defineConfig({
    forVersion: "11.6.2",
    assets: {
      fonts: {
        families: {
          sans: {
            package: "geist",
            family: "Geist",
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 600, 700, 800, 900],
          },
        },
        sans: '"Geist", sans-serif',
      },
      icons: {
        endpoint: false,
        mode: "static",
        packs: ["remixicon"],
        specs: ALL_ICON_SPECS,
      },
    },
    components: { ...components, typography },
    design: {
      breakpoints,
      interactions,
      palette,
      semantics,
    },
    runtime,
    systems,
});
