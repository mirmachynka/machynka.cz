import { defineConfig } from "@trebired/i18n/config";

export default defineConfig({
    forVersion: "0.6.1",
    defaultLanguage: "cs",
    fallbackLanguage: "cs",
    supportedLanguages: ["cs", "en"],
    check: {
      rootDir: "src/frontend",
      strict: true,
    },
});
