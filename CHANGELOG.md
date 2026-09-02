# Changelog

All notable changes to `machynka-cz` will be documented here.

This project follows semantic versioning once published.

## 1.1.2

### Navigation

- Fixed `canonicalPath()` and `getAccommodationByPath()` matching paths by exact string, with no trailing-slash normalization. A cold load of an accommodation URL arriving with a trailing slash (as several static hosts produce via a redirect) silently missed the route lookup and rendered the home page instead, while the server had correctly rendered the accommodation page — a genuine content mismatch that React's hydration surfaced as a hard error and regenerated the tree client-side. `canonicalPath()` now strips a trailing slash before every lookup.

## 1.1.1

### Trebired packages

- Updated `@trebired/frontend` to 12.12.3 (from 12.11.1), across three collaborative bugfix rounds with the package maintainer: `bindPopstate()` no longer mistakes a same-page hash click for a real navigation, `rehydrate()` no longer races a still-hydrating island's soft-redirect links, `LiveIslandMount`'s `data-live-island-hydrated` guard no longer goes permanently stale when an app points its `rootId` at the SPA's own content selector, and the icon binder now respects the same unhydrated-island guard the other binders already had.

### Navigation

- Fixed the SSR entry never wiring up server-side icon rendering, which shipped every icon as an empty `<i>` element in the server-rendered HTML (invisible until diffed against the client's hydrated output). Server-rendered routes now wrap in `withIconServerRenderer()`, seeded from the same icon spec set the client build uses.
- Fixed the content island (`content_island.tsx`) reading its route from a JSON state script that only the first page load ever populated; it now reads `window.location.pathname` directly, so it can't go stale after the first soft-navigation.

## 1.1.0

### Navigation

- Migrated page navigation to `@trebired/frontend`'s SPA soft-navigation system, replacing the hand-rolled router. Page switches now fetch and swap through `configureSpa()`/`onPageChange()` instead of a client-side React router, with `Header` and `Footer` hydrated once as persistent roots across navigations.
- Added a build-time-only SSR path that renders each route to real HTML at build time (via `@trebired/bundler`'s `bundle()` with `environment: "node"`), so the SPA system has server-rendered markup to fetch and swap in, rather than an empty shell.
- Fixed same-page section links firing an unwanted network request and progress bar on click, caused by a same-document fragment click triggering a real `popstate` in Chromium; same-page hash clicks now scroll directly instead of round-tripping through a soft-redirect.
- Enabled `design.scrollBehavior: "smooth"` in `.trebired/frontend/config.ts`.

### Appearance

- Removed the eyebrow label from every section and replaced it with a proper full-width title, fixing the "why us" section (previously rendering only the eyebrow, with the title invisible due to a CSS rule ordering bug) and the "GET IN TOUCH" / accommodation titles, which were squeezed into a grid column instead of spanning full width.
- Replaced every CSS `margin` with `gap` on a flex/grid container, using `@trebired/frontend`'s `--tbf-gap-*` tokens throughout.
- Fixed the benefit cards to lay out two per row on mobile instead of one, and removed their hover state.
- Fixed the hero title overflowing its container on narrow viewports.

### Trebired packages

- Updated `@trebired/bundler`, `@trebired/frontend`, `@trebired/i18n`, and `@trebired/startup`, and declared the previously-undeclared `@trebired/utils` and `@trebired/env` dependencies explicitly.
- Updated `@trebired/code-discipline` to 7.1.3, which fixes its own logger version-guard mismatch.
- Moved `@trebired/logger` into `dependencies`, alongside `@trebired/startup` and `@trebired/env`. It keeps its exact `2.5.32` pin and matching `overrides` entry, since `@trebired/bundler` and `@trebired/logger-adapter` (pulled in by `frontend`/`startup`/`env`) still ship a bundled logger config that only tolerates `2.5.x`.

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
