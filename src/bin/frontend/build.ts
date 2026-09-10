#!/usr/bin/env bun

import {
  applyProjectConfigsToFrontendBundlerOptions,
  buildFrontendApp,
  buildStaticShell,
} from "@trebired/bundler/frontend-app";
import { createLocaleBootScript } from "@trebired/frontend";
import { createLog } from "@trebired/logger";

import { siteDefines } from "./options";
import { allRoutePaths } from "#y4hpoyu2xriv";
import { LANG_ROUTING } from "#zz37lbnjt359";
import { renderRouteBodies } from "./ssr";
import { siteRobotsTxt, siteShellMeta, siteSitemap, siteStructuredData } from "./seo";

const target = (process.argv[2] || "client") as "all" | "client" | "ssr";
const logger = createLog({
    console: {
      metadata: false,
      timestamp: false,
    },
    quiet: true,
    save: false,
    source: "machynka-cz",
});

const config = await applyProjectConfigsToFrontendBundlerOptions({
    define: siteDefines,
    mode: "production",
    rootDir: process.cwd(),
    ssr: false,
});
const build = await buildFrontendApp({ ...config, target });
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

await Bun.write(`${config.clientOutDir}/robots.txt`, siteRobotsTxt());
await Bun.write(`${config.clientOutDir}/sitemap.xml`, siteSitemap());

logger.success(
  "machynka.build",
  `build complete :: client_files=${build.client?.outputs.length ?? 0} route_shells=${shell.files.length}`,
);
