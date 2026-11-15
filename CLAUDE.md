# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (`angular.json` sets `cli.packageManager: pnpm`).

```bash
pnpm start                     # Dev server at http://localhost:4200 (development config)
pnpm build                     # Production build (default configuration) -> dist/my-portfolio
pnpm run build:gh-page         # Production build with --base-href /portfolio/ (GitHub Pages)
pnpm watch                     # Dev build in watch mode
pnpm lint                      # ng lint (ESLint over src/**/*.ts and src/**/*.html)

pnpm exec ng test --watch=false                                        # All tests (Vitest via @angular/build:unit-test)
pnpm exec ng test --watch=false --include src/app/feature/home/home.spec.ts  # Single spec
```

Use `ng test`, not `pnpm test`: the `test` script calls `vitest` directly, but the repo has no `vitest.config`, so the Angular compiler plugin never loads and every spec fails. Vitest globals (`describe`, `it`, `vi`) come from `tsconfig.spec.json` (`types: ["vitest/globals"]`).

## Architecture

This is an Angular 22 standalone-component app with no NgModules. The root component is `App` in `src/app/app.ts`. Files use the new suffix-less naming (`home.ts`, `theme.ts`), and classes have no `Component`/`Service` suffix (`Home`, `Theme`, `MainLayout`).

**Bootstrap**: `src/main.ts` boots `App` with `appConfig` from `src/app/app-config.ts`. `appConfig` provides the global error listeners and the router (scroll restored to the top on navigation). The app is zoneless (Angular's default since v21); `zone.js` is kept only as a devDependency because `ng test` resolves it. Components rely on `OnPush` (the default since v22, so no `changeDetection` line) and state lives in signals.

**Routing** (`src/app/app-routes.ts`): one parent route renders `MainLayout`, and each page under `feature/` is a lazy `loadComponent` child of it. Unknown paths redirect to `''`.

**Layering** (`src/app/`), with a path alias for each layer (see `tsconfig.json`):
- `core/` (`@core/*`): app-wide singletons. These are the `Theme` service and constants, each exported through an `index.ts` barrel. Import from the barrel, e.g. `@core/services`.
- `ui/` (`@ui/*`): presentational components (`project` card, `ticker`).
- `pattern/` (`@pattern/*`): composed widgets such as `darkmode-button`.
- `layout/` (`@layout/*`): `MainLayout` plus header and footer (the footer holds the ticker).
- `feature/` (`@feature/*`): one routed page per folder (home, about, skills, resume, projects, contact).

**Global UI state**:
- `Theme` reads the `localStorage` theme key: dark, light, or system. It toggles the `dark` class on `<html>` and exposes `currentTheme` as a signal. `App.ngOnInit` calls `updateTheme()`. If nothing is stored, it defaults to dark.
- `Theme.toggle()` flips light/dark and stores the choice; `DarkmodeButton` (the paper chip in the header) calls it.
- Responsive behaviour is pure CSS (Tailwind `max-[640px]:` and `max-[359px]:` variants); there is no JS breakpoint service.

## Styling

The look is a "paper collage": scraps of paper, tape, stamps and a scrolling ticker, in a light and a dark variant.

- Tailwind CSS 4 runs via `@tailwindcss/postcss`. Design tokens live in `src/styles.css`: CSS variables on `:root` (light) and `:root.dark` (dark), mapped to utilities in `@theme` (`bg-page`, `bg-paper`, `bg-note`, `bg-tag`, `bg-brick`, `bg-sun`, `bg-cobalt`, `bg-pine`, `text-ink`, …) and fonts `font-display` (Abril Fatface), `font-type` (Special Elite), `font-hand` (Caveat), `font-sans` (Inter). The fonts load from Google Fonts in `index.html`.
- `styles.css` also defines custom utilities: animations (`drop`, `slidein`, `stamp-in`, `sway`, `pop`, `write`, `highlight`, `float`, `grow`, …), `scrap` (hover lift), `shade`/`shade-sm`/`shade-md`/`shade-lg` (paper shadows), `tilt-[<angle>]` (rotates with `transform` so it composes with the animations), and `.tags` (children pop in one after another). All motion switches off under `prefers-reduced-motion`.
- `tailwind.config.js` only keeps `darkMode: 'class'`, the content globs and the `sm`/`md`/`lg`/`xl` breakpoints. Do not add object-valued screens: Tailwind then drops the `min-*`/`max-*` variants the layout relies on.
- Pages and components use Tailwind classes; class lists are kept in the order `prettier-plugin-tailwindcss` produces (`pnpm lint --fix`). Component CSS budget is 2kb warning / 4kb error (production build).
- There is no component library: PrimeNG, `angular-svg-icon` and OverlayScrollbars were removed with the redesign. Icons are inline SVG.

## Lint conventions (eslint.config.mjs)

- Selectors need the `app` prefix: element selectors in kebab-case, attribute selectors in camelCase.
- `@typescript-eslint/explicit-function-return-type` is set to **error**, so every function and method needs a return type.
- Prettier runs as an ESLint rule (`prettier/prettier: error`). Templates also get the angular-eslint accessibility rules.

## Deployment

`.github/workflows/jekyll-gh-pages.yml` runs on every push to `main`. It runs `pnpm run build:gh-page` and copies `dist/myPortfolio/browser/index.html` to `404.html` (Node 24, pnpm from `packageManager`) so SPA deep links work. It then deploys to GitHub Pages at `https://minhtuan92.github.io/portfolio/`.
