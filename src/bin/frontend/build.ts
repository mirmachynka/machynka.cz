#!/usr/bin/env bun

import {
  applyProjectConfigsToFrontendBundlerOptions,
  buildFrontendApp,
  buildStaticShell,
} from "@trebired/bundler/frontend-app";
import { createLocaleBootScript, createLocaleShellRoutes } from "@trebired/frontend";
import { createLog } from "@trebired/logger";

import seoConfig from "#52dy5geo53fr";
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

const strategy = seoConfig.localeStrategy;
const routes = createLocaleShellRoutes({
    meta: siteShellMeta,
    paths: allRoutePaths(),
    render: (routePath, locale) => routeBodies[routePath]?.[locale] || "",
    routing: LANG_ROUTING,
    strategy,
}).map((route) => ({ ...route, body: `${route.body}${siteStructuredData(route.sourcePath, process.cwd())}` }));

const shell = await buildStaticShell({
    build,
    config,
    meta: { bootScripts: [createLocaleBootScript(LANG_ROUTING, { strategy })], lang: "cs" },
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
