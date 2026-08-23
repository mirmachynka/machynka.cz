import { defineConfig } from "@trebired/code-discipline";

export default defineConfig({
  presets: {
    use: ["@trebired/configs"],
  },
  rules: {
    bannedPatterns: {
      patterns: [
        { value: "machynka.cz", allowedFiles: ["package.json"] },
      ],
    },
  },
});
