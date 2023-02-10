# math-for-kids

A web page where kids can practice Math - addition, subtraction, multiplication and division.

[![Node.js CI](https://github.com/ltodorov/math-for-kids/actions/workflows/node.js.yml/badge.svg)](https://github.com/ltodorov/math-for-kids/actions/workflows/node.js.yml)

## Scripts

- `pnpm dev` - Runs a bundler in development mode. Starts a dev server.
    - `pnpm dev -- --env locale=en` - Runs in a different language.
- `pnpm build` - Runs a bundler in production mode.
- `pnpm test` - Executes tests.
    - `pnpm test -- --coverage` - Generates code coverage.
- `pnpm lint` - Analyzes the TypeScript code to quickly find problems.
    - `pnpm lint -- --fix` - Fixes the found problems automatically.
- `pnpm all` - Runs lint, test and build.

## Demo

### English
https://ltodorov.eu/math/en/

### Bulgarian
https://ltodorov.eu/math/bg/

## Mods

You can use a URL query string to control the expression.

https://ltodorov.eu/math/en/?term=1&max=5<br>
https://ltodorov.eu/math/en/?term=2<br>
https://ltodorov.eu/math/en/?max=20

- `term` assigns a constant value to the second term.
- `max` changes the maximum value of the terms. Default value is 9.

*NOTE: Please stick to 2-3 digits for terms and results!*
