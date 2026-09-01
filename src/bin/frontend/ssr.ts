import { bundle } from "@trebired/bundler";
import path from "node:path";

import bundlerOptions from "#10mmcc87u9zo";
import { allRoutePaths } from "#y4hpoyu2xriv";

const SSR_OUT_DIR = ".ssr";
const SSR_ENTRY_OUTPUT = `${SSR_OUT_DIR}/src/frontend/ssr/entry.js`;

async function buildSsrBundle() {
  await bundle({
      define: bundlerOptions.define,
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
      i18n: { supportedLanguages: bundlerOptions.supportedI18nLanguages },
      outDir: `./${SSR_OUT_DIR}`,
      rootDir: process.cwd(),
  });
}

export async function renderRouteBodies(): Promise<Record<string, string>> {
  await buildSsrBundle();

  const entryPath = path.resolve(process.cwd(), SSR_ENTRY_OUTPUT);
  const mod = (await import(`${entryPath}?t=${Date.now()}`)) as { renderRouteBody: (routePath: string) => string };

  const bodies: Record<string, string> = {};
  for (const route of allRoutePaths()) bodies[route] = mod.renderRouteBody(route);
  return bodies;
}
