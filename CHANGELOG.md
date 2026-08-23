# Changelog

All notable changes to `machynka-cz` will be documented here.

This project follows semantic versioning once published.

## 1.0.0

### Build and structure

- Migrated the site from Vite, Tailwind CSS, PostCSS, and a hand-authored `index.html` to `@trebired/bundler`, with colocated SCSS and build-time generated route shells.
- Restructured the repository to the Trebired application layout: `src/frontend`, `src/bin`, `src/types`, with package configuration under `.trebired/`.
- Added static shell generation. The build writes one HTML file per route, each carrying its own Czech or English `title` and `description` from the single route table in `src/frontend/shared/routes.ts`.
- Added `src/bin/dev.ts` and `src/bin/frontend/build.ts` as the only entrypoints, replacing `vite.config.ts` and the Vite dev server.
- Added `bun run verify`, which runs the discipline check, the typecheck, and the production build in that order.

### Trebired packages

- Adopted `@trebired/frontend` as the design system: palette, semantics, breakpoints, component tokens, theme, popover, icons, and typography all come from `.trebired/frontend/`.
- Adopted `@trebired/i18n` colocated translators. Every component that owns copy has an `i18n/cs.ts` and `i18n/en.ts` beside it, resolved statically at build time, replacing `react-i18next` and the central resource files.
- Adopted `@trebired/startup` for the dev server: port preflight, ordered bootstrap subsystems, graceful shutdown on `SIGINT`/`SIGTERM`/`SIGHUP`, and configured startup messages.
- Adopted `@trebired/utils` for product identity, port and environment reading, and value helpers, replacing hand-written equivalents.
- Adopted `@trebired/code-discipline` with the `@trebired/configs` preset, enforcing file and function sizes, comment removal, formatting, hash-alias imports, and a banned pattern for the product hostname.
- Read the product hostname from `package.json` through `readProductIdentity()`, injected as a build-time constant, so it appears in exactly one place in the repository.

### Appearance

- Moved button geometry, tones, transition, and typography into `components.surfaces.button`. The application ships no button CSS.
- Moved page title, section title, and eyebrow label typography into `components.typography.heading.variants`, including their responsive steps.
- Moved the responsive container padding ramp into `components.typography.container.px`.
- Replaced `lucide-react` with the Remix Icon set that `@trebired/frontend` ships, registered through a build-time static icon cache so the site needs no icon endpoint.
- Replaced the Google Fonts link with self-hosted Geist through the bundler font pipeline, eliminating a third-party request on every page load.
- Replaced the `flag-icons` dependency with the locale flags `@trebired/frontend` emits for the configured countries.
- Added the Bučovice map backdrop to the accommodation hero sections, shared with the home hero through one component.
- Removed `src/frontend/css/` entirely. The base reset, page paint, container, anchor offset, and screen-reader utility all come from the package.

### Removed

- Removed the shadcn button, `class-variance-authority`, `@radix-ui/react-slot`, `tailwind-merge`, `tw-animate-css`, `lucide-react`, `flag-icons`, `react-i18next`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, and `postcss`.
- Removed `index.html`, `vite.config.ts`, `postcss.config.mjs`, `components.json`, and `src/globals.css`.
- Stopped tracking `dist/` build output.

### Documentation and licensing

- Added README.md, CONTRIBUTING.md, and CHANGELOG.md following the Trebired documentation standard.
- Licensed the project under the MIT License, with the copyright holder matching `package.json#author`.

## 0.1.0

- Released the original site: Vite, React, Tailwind CSS, shadcn components, and `react-i18next`, with a hand-authored `index.html` and a single global stylesheet.
