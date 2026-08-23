#!/usr/bin/env bun

import path from "node:path";

import { buildFrontendApp, buildStaticShell, createBunStaticAssetHandler, defineConfig } from "@trebired/bundler/frontend-app";
import { createLog } from "@trebired/logger";
import { runStartup } from "@trebired/startup";
import { readProcessEnvValue, readProductIdentity, toPortNumber } from "@trebired/utils";

import bundlerOptions from "#10mmcc87u9zo";
import { allRoutePaths, metaFor } from "#y4hpoyu2xriv";
import { withExtraHeadTags } from "./frontend/shell";

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

  const config = defineConfig({ ...bundlerOptions, mode: "development" });
  const build = await buildFrontendApp({ ...config, target: "client" });
  const routes = allRoutePaths().map((route) => {
      const meta = metaFor(route, "cs");
      return { path: route, meta: { description: meta.description, title: meta.title } };
  });
  const shell = await buildStaticShell({ build, config, meta: { lang: "cs" }, routes });

  for (const file of shell.files) {
    await Bun.write(file.outFile, withExtraHeadTags(file.html));
  }

  return config;
}

function withDirectoryIndexFallback(outDirAbs: string, handler: (request: Request) => Promise<Response>) {
  return async(request: Request): Promise<Response> => {
    const url = new URL(request.url);
    if (!path.extname(url.pathname)) {
      const indexAbs = path.join(outDirAbs, url.pathname, "index.html");
      if (await Bun.file(indexAbs).exists()) {
        const rewritten = new URL(url);
        rewritten.pathname = path.posix.join(url.pathname, "index.html");
        return handler(new Request(rewritten, request));
      }
    }
    return handler(request);
  };
}

function serve(config: ServedConfig) {
  const outDirAbs = path.resolve(config.rootDir, config.clientOutDir);
  return Bun.serve({
      port,
      fetch: withDirectoryIndexFallback(
        outDirAbs,
        createBunStaticAssetHandler({
            clientOutDir: config.clientOutDir,
            mode: "development",
            publicDir: config.publicDir,
            rootDir: config.rootDir,
            spaFallback: "index.html",
        }),
      ),
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
