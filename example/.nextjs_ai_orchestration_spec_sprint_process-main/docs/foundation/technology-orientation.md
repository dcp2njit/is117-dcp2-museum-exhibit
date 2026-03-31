# Technology Orientation

## Why This Document Exists

This repository is meant to teach serious AI-assisted product development. That
means students need more than a list of tools. They need to know what each
technology is, what role it plays in the system, and whether it is already part
of the implemented stack or part of the near-term design-system roadmap.

This document explains the main technologies used in this repository and the
ones that are intentionally planned next.

## The Current Stack Versus The Planned Stack

There are two categories of technologies in this project.

### Installed and Active Now

- Next.js 16
- React 19
- JSX through React and TypeScript
- TypeScript
- Tailwind CSS v4
- Vitest
- Testing Library

These are already installed, configured, and part of the working application.

### Planned in the Near-Term Design-System Roadmap

- Radix UI
- shadcn/ui

These are not yet part of the current installed runtime or dependency set. They
are part of the approved direction in the site-foundation specification and the
planned design-system sprint. They appear in the teaching materials now because
students should understand why they are being introduced, not because they are
already deeply implemented.

## Next.js

Next.js is the application framework for this project.

In practical terms, it gives the repository:

- file-based routing through the App Router
- layouts and page structure
- production build tooling
- server and client rendering patterns
- metadata support for search and sharing

In this repository, Next.js is the outer application shell. It is what makes
the project a real web application rather than just a collection of notes and
planning documents.

Why it was chosen here:

- it gives a professional production baseline quickly
- it is widely used enough to matter for students
- it supports both application structure and content publishing well
- it keeps the example grounded in a real modern web stack

Where students can see it in this repo:

- `app/` for routes, layout, and page structure
- `next.config.ts` for framework configuration
- `package.json` for framework scripts such as `dev` and `build`

## React

React is the UI component model used by Next.js in this repository.

React lets the project describe interfaces as composable pieces instead of as
large monolithic pages. Even in this early state, the app is already using the
React model through `app/layout.tsx` and `app/page.tsx`.

Why it was chosen here:

- it is the dominant component model in the current web ecosystem
- it teaches students how interfaces are decomposed into reusable parts
- it fits the eventual design-system direction of the project

Where students can see it in this repo:

- `app/layout.tsx`
- `app/page.tsx`
- future work in `components/`

## JSX

JSX is the syntax used to write UI structure inside JavaScript or TypeScript
files.

It looks similar to HTML, but it is not plain HTML. It is a programming syntax
for describing interface trees in React.

This repository uses JSX because the React and Next.js ecosystem is built around
it. It keeps component structure, rendering logic, and interface composition in
the same place, which makes the application easier to follow in a
component-based system.

Why it matters for students:

- it is one of the main ways modern web interfaces are expressed
- it shows how code and UI structure are combined in component-based systems
- it makes the connection between rendering logic and interface structure more
  visible

Where students can see it in this repo:

- `app/layout.tsx`
- `app/page.tsx`
- any future shared UI components under `components/`

## TypeScript

TypeScript is JavaScript with a type system.

In this repository, TypeScript is part of the quality discipline. It makes the
code more explicit and gives the project a machine-checkable layer for catching
mistakes before runtime.

Why it was chosen here:

- it supports serious engineering work better than untyped JavaScript alone
- it works well with verification-oriented workflows
- it helps students see that AI output still has to survive type checks and not
  just look plausible

Where students can see it in this repo:

- `.tsx` files in `app/`
- `tsconfig.json`
- the `npm run typecheck` quality gate

## Tailwind CSS

Tailwind CSS is the styling system currently used in the repository.

It provides utility classes and theme capabilities that make it easier to build
consistent interfaces without writing large amounts of custom CSS from scratch.

In this project, Tailwind is already active and part of the implemented stack.
It works alongside the custom styles in `app/globals.css`.

Why it was chosen here:

- it speeds up UI construction without requiring a heavy component framework
- it supports design-token thinking and later systematization
- it pairs well with the planned design-system approach

Where students can see it in this repo:

- `app/globals.css`
- class usage in `app/page.tsx`
- Tailwind-related packages in `package.json`

## Radix UI

Radix UI is a library of accessible, behavior-focused UI primitives.

Radix is not primarily about appearance. It is about interaction correctness:
keyboard behavior, focus management, layering, accessibility-sensitive widgets,
and hard interaction problems that teams often implement poorly when building
from scratch.

Status in this repository:

- planned
- not yet installed as part of the current implementation baseline
- approved in the site-foundation spec and Sprint 1 design-system plan

Why it is part of the roadmap:

- it provides a strong accessibility foundation for interactive components
- it supports serious UI engineering better than ad hoc widget behavior
- it teaches students that interface behavior and visual styling are not the
  same thing

Repository references for this planned direction:

- `docs/_specs/site-foundation/spec.md`
- `docs/_specs/site-foundation/sprints/sprint-1-design-system-foundation.md`

## shadcn/ui

shadcn/ui is a repository-owned component approach built on top of tools like
Radix UI and Tailwind CSS.

Its value is not that it is a magic component library. Its value is that the
components live in your codebase, which means your team owns them and can adapt
them to the product instead of being trapped inside a black-box dependency API.

Status in this repository:

- planned
- not yet installed or generated into the current component layer
- part of the approved design-system direction for the next site-foundation
  phase

Why it is part of the roadmap:

- it supports reusable UI while preserving project ownership
- it fits the repository’s teaching goal of understanding systems rather than
  just consuming libraries
- it pairs naturally with Tailwind CSS and Radix UI in a modern design-system
  workflow

Repository references for this planned direction:

- `docs/_specs/site-foundation/spec.md`
- `docs/_specs/site-foundation/sprints/sprint-1-design-system-foundation.md`

## Testing Tools

This repository uses a testing stack with two layers:

- Vitest for running automated unit tests
- Testing Library for rendering and checking UI behavior in unit tests
- Playwright for running automated browser tests against real Chromium

Vitest and Testing Library verify component behavior in a simulated DOM. They
run fast and catch rendering regressions, missing content, and broken logic.

Playwright verifies that pages render correctly in a real browser at every
target breakpoint (390px through 1728px). It catches layout breakage, overflow
issues, and responsive design failures that unit tests cannot detect.

Where students can see this in the repo:

- `tests/app/homepage.test.tsx` — Vitest unit test for the homepage
- `tests/browser/homepage-breakpoints.spec.ts` — Playwright browser test
- `vitest.config.ts` — Vitest configuration
- `playwright.config.ts` — Playwright configuration
- `npm run test` — runs Vitest
- `npm run test:browser:homepage` — runs Playwright against the homepage

## CI/CD and Deployment Tools

The repository uses three additional technologies for continuous integration
and deployment:

### GitHub Actions

GitHub Actions is the CI/CD platform that runs quality gates automatically on
every push to `main`. The workflow is defined in
`.github/workflows/deploy.yml`.

It runs format checking, linting, type checking, unit tests, the production
build, and Lighthouse auditing in sequence. If any gate fails, deployment is
blocked. This prevents regression and makes quality visible to the entire team.

Where students can see this in the repo:

- `.github/workflows/deploy.yml` — the workflow definition
- The Actions tab on the GitHub repository page — run history and status

### GitHub Pages

GitHub Pages is the static hosting platform that serves the built site. The
`npm run build` command produces static HTML/CSS/JS in the `out/` directory.
The CI workflow uploads this directory and GitHub Pages serves it at the
repository's public URL.

Static hosting means no server runtime. What you build is exactly what users
see.

### Lighthouse

Lighthouse is a web auditing tool that measures performance, accessibility,
best practices, and SEO. It runs as part of the CI pipeline through the
`@lhci/cli` package.

Lighthouse catches problems that linters and test runners miss: slow page
loads, missing alt text, insufficient color contrast, broken keyboard
navigation, and SEO gaps.

The configuration lives in `lighthouserc.json` at the project root. It tests
against the static build output in `out/`.

Where students can see this in the repo:

- `lighthouserc.json` — Lighthouse CI configuration
- `npm run lighthouse` — runs Lighthouse locally

## How To Read The Stack Correctly

Students should read this stack in layers:

1. Next.js is the application framework.
2. React is the component model.
3. JSX is the syntax used to express component structure.
4. TypeScript is the type and verification layer for the code.
5. Tailwind CSS is the current styling system.
6. Radix UI and shadcn/ui are the planned design-system direction for
   accessible, reusable UI.
7. Vitest, Testing Library, and Playwright are the testing layer.
8. GitHub Actions, Lighthouse, and GitHub Pages are the CI/CD and deployment
   layer.

That layered view matters because it prevents students from seeing the stack as
just a random list of libraries.

## Related Artifacts

- `README.md` for the project thesis and landing-page orientation
- `docs/_specs/site-foundation/spec.md` for the application foundation contract
- `docs/_specs/site-foundation/sprints/sprint-1-design-system-foundation.md`
  for the planned UI-system work
- `package.json` for the currently installed dependencies and scripts
