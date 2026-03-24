# Ecommerce Site

Quick start, developer DX, and TDD guidance for this Next.js + TypeScript project.

**Quick Setup**

- Install dependencies: `npm ci`
- Start dev server: `npm run dev`
- Build: `npm run build` and `npm start`

**Testing (TDD)**

- Run tests once: `npm test`
- Watch mode for TDD: `npm run test:watch`
- Coverage: `npm run test:coverage`

Notes:
- Tests use Jest + `@testing-library/react` and `ts-jest`.
- Config is in `jest.config.ts` and `jest.setup.ts`.
- For tests that depend on `process.env` values, set/restore env and use `jest.resetModules()` before `await import()` so modules pick up new values.

Example TDD loop:

1. Write a failing test in `__tests__`.
2. Implement the smallest change to pass the test.
3. Refactor and run tests again.

**Linting & Formatting**

- Lint: `npm run lint`
- Prettier is used for formatting; you can add `npm run format` if desired.

**Commit hygiene (recommended)**

- Husky + lint-staged to run linters/formatters before commit (not scaffolded by default here). Recommended commands to add locally:

```bash
npm install -D husky lint-staged prettier
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

**CI**

- A GitHub Actions workflow is included at [.github/workflows/ci.yml](.github/workflows/ci.yml) to run tests on push and PRs.
- Consider adding caching and coverage upload if you want faster builds and coverage tracking.

**Env & Runtime**

- Copy `.env.example` (create if missing) to `.env.local` for local secrets.
- Node version: pin via `.nvmrc` or `engines` in `package.json` (recommended Node 20+).

**Where to start writing tests now**

- `lib/utils.ts` — pure helper tests (already present).
- `lib/constants/index.ts` — test env fallbacks (use `jest.resetModules()` + `await import()` pattern).
- `components/footer.tsx` — render and assert year + app name.
- `components/ui/button.tsx` — assert `data-slot`, `data-variant`, `data-size`, and `asChild` behavior.
- `components/shared/header/mode-toggle.tsx` — mock `next-themes` and assert icon + `setTheme` calls.

If you want, I can scaffold any of the above test skeletons, add Husky + lint-staged, or convert the Jest config to a JS file to avoid `ts-node`. Tell me which item to do next.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
