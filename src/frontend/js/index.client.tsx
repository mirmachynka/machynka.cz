import { bindFrontendRuntime } from "@trebired/frontend";
import "@trebired/frontend/static-icons";
import { createRoot } from "react-dom/client";

import { App } from "#1rocd7vlhz94";

const root = document.getElementById("root");

if (!root) throw new Error("missing #root");

createRoot(root).render(<App />);

bindFrontendRuntime(document, { icons: { mode: "static" } });
