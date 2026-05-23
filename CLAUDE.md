# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm start           # Dev server at http://localhost:4200
ng watch            # Watch mode build

# Build
ng build                                                        # Standard build
pnpm run build:gh-page  # GitHub Pages build (sets base-href /portfolio/)

# Testing
ng test             # Run all Jest tests
ng test --testPathPattern=<path>  # Run a single test file

# Code quality
ng lint             # ESLint
```

## Architecture

Angular 18 standalone-components portfolio app. No NgModules — every component uses `standalone: true`.

**Layer structure** (`src/app/`):
- `core/` — Singleton services (ThemeService, LayoutService, ToastService), guards, interceptors, HTTP logic, and test mocks. Injected app-wide.
- `shared/` — Reusable UI components, layout shell (header/sidebar/footer), models (`ProjectItem`, `TechCardItem`), constants, directives, pipes, and utilities. Shared services here are facades over core.
- `features/` — Six page-level feature areas (`home`, `about`, `skills`, `resume`, `projects`, `contact`), each lazy-loaded via the router.

**Routing** ([app.routes.ts](src/app/app.routes.ts)): All feature routes use `loadComponent` / `loadChildren` for lazy loading.

**App bootstrap** ([app.config.ts](src/app/app.config.ts)): Providers are configured here (router, animations, PrimeNG theme, etc.) rather than in a root module.

## Key Technologies

- **UI**: PrimeNG 17, Angular CDK, angular-svg-icon, overlayscrollbars
- **Styling**: Tailwind CSS 3 with `tailwindcss/nesting` via PostCSS; dark mode via `ThemeService`; custom VT323 monospace font in `assets/fonts/`
- **State**: Service-based only (no Redux/NgRx). `ThemeService` and `LayoutService` handle global UI state via RxJS signals/subjects.
- **Testing**: Jest 29 + jsdom; global mocks in `src/app/core/mocks/global.mock.ts`; HTML report output to `./test/test-report.html`

## TypeScript Path Aliases

Defined in [tsconfig.json](tsconfig.json):
- `@core/*` → `src/app/core/*`
- `@shared/*` → `src/app/shared/*`
- `@env/*` → `src/environments/*`

## Deployment

GitHub Actions ([.github/workflows/jekyll-gh-pages.yml](.github/workflows/jekyll-gh-pages.yml)) triggers on push to `main`, runs `pnpm run build:gh-page`, and deploys to GitHub Pages. A `404.html` copy is created post-build to support SPA client-side routing.
