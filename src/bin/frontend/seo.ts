import { createSeoBuilder, organizationSchema } from "@trebired/seo";
import { readProductIdentity } from "@trebired/utils";

import seoConfig from "#52dy5geo53fr";
import { allRoutePaths, metaFor } from "#y4hpoyu2xriv";

const THEME_COLOR = "#0f0f0f";

const seo = createSeoBuilder(seoConfig, {
    chrome: {
      metas: [{ content: THEME_COLOR, name: "theme-color" }],
    },
    configPath: ".trebired/seo/config.ts",
});

function siteShellMeta(path: string, language: string) {
  const copy = metaFor(path, language);
  return seo.shellMeta({
      description: copy.description,
      locale: language,
      path,
      title: copy.title,
  });
}

function siteStructuredData(path: string, rootDir: string): string {
  if (path !== "/") return "";
  const product = readProductIdentity({ startDir: rootDir });
  return seo.structuredData([
      organizationSchema({ name: product.displayName, url: product.website }),
  ]);
}

function siteRobotsTxt(): string {
  return seo.robotsTxt();
}

function siteSitemap(): string {
  return seo.sitemap(allRoutePaths().map((path) => ({ path })));
}

export { siteRobotsTxt, siteShellMeta, siteSitemap, siteStructuredData };
