<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="src/frontend/public/footer-logo.svg">
  <img src="src/frontend/public/logo.svg" alt="machynka.cz" width="360">
</picture>

**The public accommodation site for MACHYNKA s.r.o. in Bučovice: apartment and guesthouse listings, room and price tables, photo galleries, house rules, and direct contact, in Czech and English.**

[![License](https://img.shields.io/badge/license-MIT-black)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-Bun-black)](#install)
[![Output](https://img.shields.io/badge/output-static%20site-black)](#runtime)

</div>

---

machynka.cz is the public website of MACHYNKA s.r.o. The website owns the published pages, the route and metadata table, the Czech and English copy, and the static build output. MACHYNKA s.r.o. owns the business, the accommodation, the photography, and the contact details the website displays; the operator owns the hosting and the domain. The website does not own booking, payment, availability, guest records, or any server-side state; it is static and holds no data.

machynka.cz is a Trebired product, licensed under the MIT License. It is open source.

## Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Concepts](#concepts)
- [Configuration](#configuration)
- [Runtime](#runtime)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [What It Does Not Do](#what-it-does-not-do)

## Install

Bun 1 or later.

```sh
bun i
```

## Quick Start

```sh
bun run dev
```

The dev server builds the client bundle, generates one HTML shell per route, and serves `dist/` on port 3000. Set `PORT` to use another port.

Production build:

```sh
bun run build
```

`dist/` is a static directory. Serve it with any static host.

## Concepts

### Frontend-only application

The application has no backend. `src/bin/frontend/build.ts` produces the client bundle and the route shells; nothing runs at request time. `src/bin/dev.ts` exists for local preview and is not a production server.

### Route shells

`src/frontend/shared/routes.ts` is the single route table. It holds the canonical path for every page, the legacy path aliases, and the per-language `title` and `description`. The build reads it through `allRoutePaths()` and `metaFor()` and writes one `index.html` per route so each page ships its own metadata.

### Colocated translations

Every component that owns copy has an `i18n/cs.ts` and `i18n/en.ts` beside it. Components read them through `createLocalTranslator(import.meta.url, lang)` from `@trebired/i18n`, which `@trebired/bundler` resolves statically at build time. There is no central resource file and no runtime translation loading.

### Design tokens

Button, popover, palette, icon, and theme values come from `.trebired/frontend/config.ts` and generate `dist/css/frontend.css`. Application SCSS styles layout and product-specific elements only. Component appearance that `@trebired/frontend` owns is configured, never overridden in application CSS.

## Configuration

| File | Owns |
| --- | --- |
| `.trebired/bundler/config.ts` | Entry discovery, SCSS compilation, i18n languages, output directory |
| `.trebired/frontend/config.ts` | Palette, semantics, component tokens, systems, fonts, icon mode |
| `.trebired/startup/config.ts` | Startup messages, port requirement, shutdown timeout |
| `.trebired/code-discipline/config.ts` | Enforcement presets and banned patterns |

`PORT` selects the dev server port and defaults to `3000`.

## Runtime

Bun runs the build and the dev server. The published output is static HTML, CSS, JavaScript, and assets; the browser is the only runtime the visitor needs. Supported languages are `cs` and `en`, selected in the header and stored in the browser.

## Documentation

This README is the product documentation. Contributor commands are in [CONTRIBUTING.md](CONTRIBUTING.md). Released changes are in [CHANGELOG.md](CHANGELOG.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## What It Does Not Do

- No booking, reservation, availability, or payment handling.
- No backend, database, session, or user account.
- No content management interface. Copy changes are code changes in the colocated `i18n` folders.
- No analytics, tracking, or cookie consent layer.
- No email delivery. Contact runs through the published phone numbers and addresses.
