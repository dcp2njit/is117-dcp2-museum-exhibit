# Sprint 0 — Next.js Scaffold

## Header

- Goal: scaffold the repository into a professional Next.js application with
  App Router, TypeScript, Tailwind CSS, baseline scripts, formatting, and
  executable test capability.
- Spec sections:
  - Problem Statement
  - Design Goals 1, 3, 4, 6
  - Architecture: Overview, Application Platform, Initial Directory
    Conventions, Rendering Model, Developer Experience Foundation
  - Testing Strategy: Required Test Categories, Baseline Counts and Test Shape,
    Verification Baseline
- Prerequisite: none
- Expected test count: `0 existing + 1 new = 1 total`

## Available Assets

| Asset                                 | Verified details                                         | How this sprint uses it                                         |
| ------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| `docs/_specs/site-foundation/spec.md` | Source-of-truth feature contract                         | Defines the scaffold scope and baseline quality requirements    |
| Repository root                       | Currently contains `docs/` only and no application files | Confirms this sprint must create the first application scaffold |

## Tasks

### 1. Scaffold the Next.js application in the repository root

Create the application in the existing repository root using a non-interactive
Next.js scaffold command pinned to the latest stable Next.js release available
at implementation time. The scaffold step must run in-place and preserve the
existing `docs/` directory.

The scaffold command must produce these requirements:

- App Router enabled
- TypeScript enabled
- ESLint enabled
- Tailwind CSS enabled
- `@/*` import alias enabled
- npm used as the package manager
- no `src/` directory, so the root-level `app/`, `components/`, `lib/`, and
  `tests/` structure stays aligned with the spec

Files expected after this task include, at minimum:

- `package.json`
- `tsconfig.json`
- `next.config.*`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/`
- `lib/`
- `tests/`
- `public/`

Key implementation details:

- Keep the generated application intentionally minimal.
- Do not introduce CMS, database, auth, analytics, or search dependencies.
- Preserve the `docs/` directory and existing planning artifacts.
- If the generator does not create `components/`, `lib/`, or `tests/`, create
  them explicitly before moving to later tasks.

Verify:

```bash
npm install
npm run lint
npm run build
```

### 2. Establish baseline repository scripts and formatting

Modify the generated scaffold so the repository has explicit, non-interactive
quality commands.

Create or update:

- `package.json` scripts
- `.prettierrc` or equivalent Prettier config
- `.prettierignore`

Required scripts after this task:

- `dev`
- `build`
- `start`
- `lint`
- `typecheck`
- `test`
- `format`
- `format:check`

Key implementation details:

- `typecheck` must run `tsc --noEmit`.
- `format` and `format:check` must use Prettier.
- Do not add pre-commit hooks yet; those belong in Sprint 4.

Verify:

```bash
npm run typecheck
npm run format:check
```

### 3. Add baseline Vitest and Testing Library support

Install and configure the minimum test stack required to execute component or
page-level smoke tests locally and in CI.

Create or update:

- `vitest.config.*`
- `tests/setup.*`
- any TypeScript or package script wiring required for Vitest

Recommended dependencies for this sprint:

- `vitest`
- `jsdom`
- `@testing-library/react`
- `@testing-library/jest-dom`

Key implementation details:

- Keep the configuration lightweight and local.
- The test environment must not require a browser automation runtime.
- Configure `test` to run non-interactively in CI, for example via
  `vitest run`.
- If a watch-mode developer script is desired, expose it separately as
  `test:watch` rather than making `test` interactive.

Verify:

```bash
npm run test
```

### 4. Replace placeholder app content with an AI history site foundation shell

Update the generated homepage and root layout so the application clearly
represents the project rather than a default starter.

Create or update:

- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`

Required outcomes:

- root metadata includes a site title and description aligned to the AI history
  site purpose
- homepage content is minimal but project-specific
- global styles remain clean and readable rather than starter boilerplate

This sprint is not responsible for full visual design or reusable components.
It only needs a credible foundation shell.

Verify:

```bash
npm run lint
npm run typecheck
npm run build
```

### 5. Add the first automated smoke test

Create a test that verifies the homepage shell renders expected project text.

Create:

- `tests/app/homepage.test.tsx` or equivalent

Key implementation details:

- Assert on text that is stable and project-specific.
- Keep the test focused on smoke coverage rather than implementation details.

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Next.js App Router scaffold exists at the repository root
- [ ] Tailwind CSS is configured and working
- [ ] The application uses TypeScript and ESLint
- [ ] `package.json` includes `typecheck`, `test`, `format`, and `format:check`
- [ ] Prettier configuration exists
- [ ] Vitest and Testing Library execute successfully
- [ ] The homepage and root metadata are project-specific
- [ ] One homepage smoke test passes
- [ ] `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` all pass

## QA Deviations

None.
