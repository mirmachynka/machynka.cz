import { defineConfig } from "@trebired/seo";
import { readProductIdentity } from "@trebired/utils";

const product = readProductIdentity({ startDir: import.meta.dir });

export default defineConfig({
    forVersion: "0.4.0",
    defaults: {
      robots: { follow: true, index: true, maxImagePreview: "large" },
      type: "website",
    },
    localeStrategy: "prefix",
    robotsTxt: { sitemap: true },
    site: {
      defaultLocale: "cs",
      locales: ["cs", "en"],
      name: product.displayName,
      url: product.website,
    },
    sitemap: { changeFrequency: "monthly", priority: 0.8 },
    twitter: { card: "summary_large_image" },
});
