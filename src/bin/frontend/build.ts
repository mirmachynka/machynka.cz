#!/usr/bin/env bun

import { buildFrontendApp, buildStaticShell, defineConfig } from "@trebired/bundler/frontend-app";
import { createLog } from "@trebired/logger";

import bundlerOptions from "#10mmcc87u9zo";
import { allRoutePaths, metaFor } from "#y4hpoyu2xriv";
import { renderRouteBodies } from "./ssr";
import { withExtraHeadTags } from "./shell";

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

const config = defineConfig({ ...bundlerOptions, mode: "production" });
const build = await buildFrontendApp({ ...config, target });
const routeBodies = await renderRouteBodies();

const routes = allRoutePaths().map((path) => {
    const meta = metaFor(path, "cs");
    return { path, body: routeBodies[path], meta: { description: meta.description, title: meta.title } };
});

const shell = await buildStaticShell({
    build,
    config,
    meta: { lang: "cs" },
    routes,
});

for (const file of shell.files) {
  await Bun.write(file.outFile, withExtraHeadTags(file.html));
}

logger.success(
  "machynka.build",
  `build complete :: client_files=${build.client?.outputs.length ?? 0} route_shells=${shell.files.length}`,
);
