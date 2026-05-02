# AI Agent Instructions for math-for-kids

## Project overview
- `math-for-kids` is a small browser-based learning app for elementary arithmetic.
- It is implemented in TypeScript with a Webpack build and basic DOM-based frontend logic.
- Localization is generated at build time for Bulgarian (`bg`) and English (`en`) pages.

## Key commands
- `pnpm dev` — start the development server.
- `pnpm build` — build production assets into `dist`.
- `pnpm test` — run Jest tests.
- `pnpm lint` — run ESLint over `src/scripts/`.
- `pnpm all` — lint, test with coverage, and build.

## Important files and directories
- `src/scripts/` — application entry, app logic, helper functions, and unit tests.
- `src/scripts/__tests__/` and `src/scripts/helpers/__tests__/` — Jest tests for app behavior and helpers.
- `src/models/` — shared TypeScript models such as `Exercise`.
- `src/index.hbs` — Handlebars page template.
- `src/languages/` — localization data for generated pages.
- `src/public/` — static assets copied to the output directory.
- `src/styles/` — SCSS stylesheets.
- `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js` — build configuration.
- `tsconfig.json` — TypeScript configuration with path aliases:
  - `@scripts/*` → `src/scripts/*`
  - `@styles/*` → `src/styles/*`
  - `@images/*` → `src/images/*`
- `jest.config.mjs` — Jest setup with `ts-jest`, `jsdom`, and path alias mapping.

## Style and conventions
- ESLint is configured for browser globals, 4-space indentation, double quotes, and semicolons.
- Use strict TypeScript types and guard DOM nodes before calling DOM-specific APIs.
- Keep changes small and test-focused; existing helper functions are heavily covered by tests.

## What the agent should focus on
- Fixing or extending arithmetic exercise generation and verification logic.
- Adding or updating localized content pages and language files.
- Ensuring TypeScript and Jest configurations remain aligned with path aliases.
- Updating the Webpack build only when necessary for asset handling or page generation.

## What to avoid
- Do not rewrite or duplicate the repository README.
- Avoid changing the package manager or engine requirements unless there is a clear compatibility issue.
- Do not modify unrelated directories outside `src/`, `webpack.*`, or config files unless required for the requested task.
