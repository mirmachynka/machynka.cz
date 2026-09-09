import { bundle } from "@trebired/bundler";
import { localeShellRoutes } from "@trebired/frontend";
import path from "node:path";

import { SUPPORTED_I18N_LANGUAGES, siteDefines } from "./options";
import { allRoutePaths } from "#y4hpoyu2xriv";
import { LANG_ROUTING } from "#zz37lbnjt359";

const SSR_OUT_DIR = ".ssr";
const SSR_ENTRY_OUTPUT = `${SSR_OUT_DIR}/src/frontend/ssr/entry.js`;

async function buildSsrBundle() {
  await bundle({
      define: siteDefines,
      discover: {
        dir: "./src/frontend",
        rules: [
          { key: "ssr-entry", include: ["ssr/entry.tsx"], strategy: "entry" },
          { key: "ignore-client", include: ["**/*.client.ts", "**/*.client.tsx", "js/**"], strategy: "ignore" },
          { key: "ignore-styles", include: ["**/*.scss", "**/*.css", "**/styles/**"], strategy: "ignore" },
          { key: "ignore-public", include: ["public/**"], strategy: "ignore" },
          { key: "shared", include: ["**/*.ts", "**/*.tsx"], exclude: ["ssr/entry.tsx"], strategy: "bundle" },
        ],
      },
      environment: "node",
      external: ["react", "react-dom", "react-dom/server"],
      format: "esm",
      i18n: { supportedLanguages: [...SUPPORTED_I18N_LANGUAGES] },
      outDir: `./${SSR_OUT_DIR}`,
      rootDir: process.cwd(),
  });
}

export async function renderRouteBodies(): Promise<Record<string, string>> {
  await buildSsrBundle();

  const entryPath = path.resolve(process.cwd(), SSR_ENTRY_OUTPUT);
  const mod = (await import(`${entryPath}?t=${Date.now()}`)) as { renderRouteBody: (routePath: string, locale: string) => string };

  const bodies: Record<string, string> = {};
  for (const route of localeShellRoutes(allRoutePaths(), LANG_ROUTING)) {
    bodies[route.path] = mod.renderRouteBody(route.sourcePath, route.locale);
  }
  return bodies;
}
