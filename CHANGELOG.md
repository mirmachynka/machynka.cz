# Changelog

All notable changes to `machynka-cz` will be documented here.

This project follows semantic versioning once published.

## 1.2.2

- Regenerated the Code Discipline alias map for the added `.trebired/i18n/config.ts`. 1.2.1 shipped without it, so `code-discipline check` failed on a fresh clone even though the build succeeded.

## 1.2.1

- Fixed every page throwing `i18n-local-translator-unbound` on hydration. 1.2.0 moved the bundler options into `.trebired/bundler/config.ts`, which sources the supported languages from `.trebired/i18n/config.ts`, and this repo had no such file. The client build therefore ran with no languages and left every `createLocalTranslator()` call unrewritten, while the SSR build kept passing its own list, so the served HTML looked correct and only the browser failed. Added `.trebired/i18n/config.ts` and made it the single source: the SSR render now takes the languages resolved from that config instead of a second list in application code.

## 1.2.0

### Languages

- Changed language selection from a stored preference applied in the browser to locale-prefixed URLs. Czech is served at `/` and English under `/en`, each as its own prerendered document with its own `<html lang>`, title, description, canonical URL, and `hreflang` set, so both languages are separately indexable. `@trebired/frontend` owns the boot script that resolves the visitor's locale before first paint and the `LocaleProvider` that keeps the server render and hydration in agreement, so the language is no longer corrected after the page is visible.
- Removed the app-local language wrappers `shared/lang/detect.ts` and `shared/lang/store.ts`. Detection, persistence, and the active locale now come from `@trebired/frontend`; `shared/lang/policy.ts` declares only this site's locale list, labels, and flags.

### SEO

- Added `@trebired/seo` for canonical URLs, `hreflang` alternates, Open Graph and Twitter tags, JSON-LD, `robots.txt`, and `sitemap.xml`, replacing the hand-assembled head tags in the removed `src/bin/frontend/shell.ts`.

### Brand

- Moved the favicons out of `src/frontend/public` into `src/brand` as the single SVG source per colour scheme. `@trebired/frontend` rasterizes them at build time into the ICO and PNG sizes and emits the head links, so no generated icon is committed.

### Deployment

- Added `netlify.toml` declaring `bun run build` and `dist` as the publish directory, so the deploy no longer depends on build settings stored in the host's UI.

### Trebired packages

- Declared `.trebired/bundler/config.ts` through the bundler's own `defineConfig` with a `forVersion`. It was a typed options object at the package config path, so it carried no version and nothing could detect drift against the installed bundler. It now owns `build.clientOutDir` and `build.publicPath`; the application-owned defines and language list moved to `src/bin/frontend/options.ts`.
- Removed the local `withDirectoryIndexFallback` from the dev server. `@trebired/bundler` 5.12.1 resolves a directory request to its `index.html`, which is what the wrapper existed to do.
- Updated the Trebired packages to the current fleet: `bundler` 5.13.1, `frontend` 12.15.0, `seo` 0.4.0, `startup` 0.7.1, `i18n` 0.6.1, `code-discipline` 7.2.0, `configs` 0.4.0, `logger` 2.7.1, `utils` 0.9.4, and brought every `.trebired/*` `forVersion` up with them.
- Updated `@trebired/frontend` to 12.12.7 earlier in this line, fixing a broken dev server and build: the 12.12.5 payload had `dist/config/scss.js` importing `./tones.js` without shipping that file, so every build failed at discovery.

## 1.1.3

### Appearance

- Removed the "Detail" link from the accommodation cards on the home page. The card is already a link, and the arrow badge on its image carries the same affordance, so the label was redundant.
- Fixed the "CO NABÍZÍME" cards stacking one per row on phones. They now use a two-column grid there, matching the "CO JE K DISPOZICI" cards, and keep the three-column desktop layout.
- Fixed a light strip down the right edge of every page. `@trebired/frontend`'s reset sets `scrollbar-gutter: stable` on `html`, which permanently reserves scrollbar-width space that only `html`'s own background paints — so it showed through beside every full-bleed dark section. The site does not use the framework's scroll-locking modal that the reservation exists for, so it is now off, and the scrollbar itself is themed with a transparent track.
- Moved the language switcher onto the same row as the phone number in the mobile menu, aligned right, instead of below it.

### Navigation

- Fixed the hydration mismatch warnings React logged for the header and footer on every page load. `hydrateRoot()` only schedules hydration, but `bindFrontendRuntime()` ran synchronously at the end of the client entry, stamping `data-tbf-soft-redirect-bound` and `mode="static"` onto the DOM before React committed. Chrome hydration now resolves through `hydrateChromeRoots()`, and the runtime binding plus the content island mount wait for that commit.

### Trebired packages

- Updated `@trebired/frontend` to 12.12.5 and `@trebired/bundler` to 5.9.0. `@trebired/logger` stays pinned to `2.5.32`: `@trebired/bundler` and `@trebired/logger-adapter` still ship a bundled logger config targeting `2.5.26` against a `^2.5.32` range, so unpinning would resolve `2.6.2` and trip the version guard.

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
