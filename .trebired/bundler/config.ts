import type { BundlerFrontendAppBundlerConfigOptions } from "@trebired/bundler";
import { readProductIdentity } from "@trebired/utils";

const product = readProductIdentity();

const bundlerOptions: Omit<BundlerFrontendAppBundlerConfigOptions, "mode"> = {
  clientOutDir: "dist",
  define: {
    PRODUCT_DISPLAY_NAME: JSON.stringify(product.displayName),
    PRODUCT_DOMAIN: JSON.stringify(product.domain),
    PRODUCT_WEBSITE: JSON.stringify(product.website),
  },
  publicPath: "/",
  rootDir: process.cwd(),
  ssr: false,
  supportedI18nLanguages: ["cs", "en"],
};

export default bundlerOptions;
