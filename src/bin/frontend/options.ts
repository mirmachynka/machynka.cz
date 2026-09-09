import { readProductIdentity } from "@trebired/utils";

const product = readProductIdentity();

const SUPPORTED_I18N_LANGUAGES = ["cs", "en"] as const;

const siteDefines: Record<string, string> = {
  PRODUCT_DISPLAY_NAME: JSON.stringify(product.displayName),
  PRODUCT_DOMAIN: JSON.stringify(product.domain),
  PRODUCT_WEBSITE: JSON.stringify(product.website),
};

export { SUPPORTED_I18N_LANGUAGES, siteDefines };
