# Contributing

## Runtime

Bun 1 or later. Bun only, never Node.js and never npm.

## Install

```sh
bun i
```

## Commands

```sh
bun run discipline:check
bun run typecheck
bun run build
bun run verify
```

`bun run verify` runs the discipline check, the typecheck, and the build in that order. Run it before every commit.

```sh
bun run discipline:fix
```

`discipline:fix` rewrites formatting, removes comments, and regenerates the hash alias map in `tsconfig.json` and `.trebired/code-discipline/imports/`. Never hand-edit either.

```sh
bun run dev
```

Local preview on port 3000. Set `PORT` to change it. The dev server is tooling, not a production server.

## Rules

- `@trebired/code-discipline` owns file sizes, function sizes, comment removal, formatting, alias imports, and banned patterns. Development runs behind its gate.
- Component appearance that `@trebired/frontend` owns is configured in `.trebired/frontend/`, never overridden in application SCSS. If a value is not reachable from the config, report it as a package gap instead of working around it.
- Copy lives in the colocated `i18n/cs.ts` and `i18n/en.ts` beside the component that uses it. Message values are strings or nested objects; arrays are rejected.
- Every route in `src/frontend/shared/routes.ts` carries a `title` and `description` for both languages.
- `dist/`, `node_modules/`, and generated folders stay out of Git.
