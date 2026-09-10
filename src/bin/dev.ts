#!/usr/bin/env bun

import path from "node:path";

import {
  applyProjectConfigsToFrontendBundlerOptions,
  buildFrontendApp,
  buildStaticShell,
  createBunStaticAssetHandler,
} from "@trebired/bundler/frontend-app";
import { createLocaleBootScript } from "@trebired/frontend";
import { readProcessEnvValue } from "@trebired/env";
import { createLog } from "@trebired/logger";
import { runStartup } from "@trebired/startup";
import { readProductIdentity, toPortNumber } from "@trebired/utils";

import { LANG_ROUTING } from "#zz37lbnjt359";
import { siteDefines } from "./frontend/options";
import { allRoutePaths } from "#y4hpoyu2xriv";
import { renderRouteBodies } from "./frontend/ssr";
import { siteShellMeta, siteStructuredData } from "./frontend/seo";

type ServedConfig = Awaited<ReturnType<typeof rebuild>>;

const port = toPortNumber(readProcessEnvValue("PORT")) ?? 3000;
const origin = `http://localhost:${port}`;
const logger = createLog({
    console: {
      metadata: true,
      timestamp: false,
    },
    quiet: false,
    save: false,
    source: "machynka-cz",
});

async function rebuild() {

  const config = await applyProjectConfigsToFrontendBundlerOptions({
      define: siteDefines,
      mode: "development",
      rootDir: process.cwd(),
      ssr: false,
  });
  const build = await buildFrontendApp({ ...config, target: "client" });
  const routeBodies = await renderRouteBodies(config.supportedI18nLanguages || []);
  const routes = allRoutePaths().map((routePath) => ({
        body: `${routeBodies[routePath] || ""}${siteStructuredData(routePath, process.cwd())}`,
        meta: { ...siteShellMeta(routePath, LANG_ROUTING.defaultLocale), lang: LANG_ROUTING.defaultLocale },
        path: routePath,
  }));
  const shell = await buildStaticShell({
      build,
      config,
      meta: { bootScripts: [createLocaleBootScript(LANG_ROUTING)], lang: "cs" },
      routes,
  });

  for (const file of shell.files) {
    await Bun.write(file.outFile, file.html);
  }

  return config;
}

function serve(config: ServedConfig) {
  return Bun.serve({
      port,
      fetch: createBunStaticAssetHandler({
          clientOutDir: String(config.clientOutDir || "dist"),
          mode: "development",
          publicDir: typeof config.publicDir === "string" ? config.publicDir : undefined,
          rootDir: String(config.rootDir || process.cwd()),
          spaFallback: "index.html",
      }),
  });
}

const identity = readProductIdentity();
const product = { name: identity.displayName, version: identity.version };

let built: ServedConfig | null = null;
let server: ReturnType<typeof serve>|null = null;

await runStartup({
    bootstrap: {
      subsystems: [
        {
          id: "frontend-build",
          async bootstrap() {
            built = await rebuild();
          },
        },
        {
          dependsOn: ["frontend-build"],
          id: "http-server",
          bootstrap() {
            if (!built) throw new Error("frontend build unavailable");
            server = serve(built);
          },
          async shutdown() {
            await server?.stop(true);
            server = null;
          },
        },
      ],
    },
    logger,
    messageData: { origin, port, product },
    terminate: (exitCode: number) => process.exit(exitCode),
});
