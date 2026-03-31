# Next.js AI Orchestration Spec Sprint Process

[![Build, Test & Deploy](https://github.com/kaw393939/nextjs_ai_orchestration_spec_sprint_process/actions/workflows/deploy.yml/badge.svg)](https://github.com/kaw393939/nextjs_ai_orchestration_spec_sprint_process/actions/workflows/deploy.yml)

**Live site:** <https://kaw393939.github.io/nextjs_ai_orchestration_spec_sprint_process/>

This repository is a teaching example for serious AI-assisted software
delivery. It is built as a working Next.js application, but its deeper purpose
is to show students and practitioners how to turn vague intent into bounded,
verifiable execution through specifications, sprint documents, implementation
passes, and QA passes.

The example product is a museum-style site about the history of artificial
intelligence. That product matters, but it is not the main lesson. The main
lesson is the method: how to use AI as a high-leverage engineering instrument
without surrendering judgment, architecture, verification, or product quality.

## For Students: Start Here

If you are a student building your own museum site, start with the
**[Student Reading Guide](docs/foundation/student-reading-guide.md)**. It
gives you a curated reading path through the repository and tells you what to
study, in what order, and why.

The full index of all workstreams with their completion status is at
**[docs/\_specs/README.md](docs/_specs/README.md)**.

## Thesis

Natural language is now part of the implementation surface of software, but
language only becomes useful when it is constrained. This repository teaches a
model of work where humans focus on strategy, scope, architecture, taste,
communication, and verification, while AI is directed through explicit
artifacts and objective quality gates.

This is not a claim that code no longer matters. It is a claim that
undifferentiated code generation is becoming cheaper, while judgment over code
is becoming more valuable.

## Who This Is For

- Students learning serious AI-assisted product development
- Engineers who want a more disciplined orchestration workflow
- Educators who need a concrete example of spec-driven AI delivery
- Practitioners who want to understand how process reduces drift and improves
  verification

## What The Project Is

At the repository level, this project is a working Next.js 16 application with
strict TypeScript, Tailwind CSS v4, and automated verification through Vitest
and Playwright.

At the teaching level, it is an example of agentic orchestration:

- turning product ideas into feature specs
- turning specs into bounded sprint contracts
- implementing one sprint at a time
- verifying each sprint with explicit quality gates
- preserving intent through durable artifacts instead of relying on chat memory

The AI history site gives the repository a real product to build. It provides a
concrete surface for design, content, architecture, testing, and QA. The method
is the primary subject. The repository exists because a real process is easier
to teach than a theory.

## Current State

The application includes:

- a Next.js 16 App Router application with strict TypeScript and Tailwind CSS v4
- a four-section homepage (opening, chronology, scenes, reading model)
- seven era routes covering the full arc of AI history
- reading maps, people/institutions, and guide pages
- Vitest unit tests and Playwright browser tests
- progressive CSS enhancements gated behind `@supports` and media queries

The documentation system includes:

- 9 active workstreams in [docs/\_specs/](docs/_specs/README.md) and 4
  archived in [docs/\_archive/](docs/_archive/README.md)
- 6 student-facing reference docs in [docs/foundation/](docs/foundation/)
- content architecture with 7 era packages, 25 concepts, 21 people,
  9 institutions in [docs/content/](docs/content/)
- 5 research memos in [docs/\_research/topics/](docs/_research/topics/)

## Workflow

The process is intentionally strict for foundational work:

1. Write a feature spec
2. QA the spec
3. Write a sprint doc
4. QA the sprint doc
5. Implement the sprint
6. QA the implementation

For narrow, low-risk changes, a lighter
[Change Note](docs/foundation/lightweight-change-path.md) process is used
instead. The full explanation of the orchestration method is in
[docs/foundation/orchestration-method.md](docs/foundation/orchestration-method.md).

## Why The Process Exists

The process controls four recurring problems in AI-assisted work:

1. **Drift:** the assistant changes adjacent concerns that were never requested
2. **Context loss:** session history is not durable enough to serve as memory
3. **Ambiguous completion:** work feels done before it is actually verified
4. **Weak accountability:** without artifacts and checks, decisions are not
   auditable

Specs, sprint docs, QA passes, and verification commands are the repository's
answer to those problems.

## Documentation

Student-facing reference material lives in `docs/foundation/`:

- [Student Reading Guide](docs/foundation/student-reading-guide.md) — where to start
- [Orchestration Method](docs/foundation/orchestration-method.md) — how the workflow works
- [Technology Orientation](docs/foundation/technology-orientation.md) — what each tech is and why
- [Verification & Deployment](docs/foundation/verification-and-deployment.md) — the quality stack
- [Power Words](docs/foundation/power-words.md) — how named frameworks are used here
- [Lightweight Change Path](docs/foundation/lightweight-change-path.md) — the lighter process

Process artifacts live in `docs/_specs/`. Research materials live in
`docs/_research/`. Content architecture lives in `docs/content/`.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in the browser.

## Quality Commands

The project is set up for non-interactive verification:

```bash
npm run typecheck
npm run lint
npm run test
npm run test:browser:homepage
npm run build
npm run format:check
```

For local formatting and watch-mode testing:

```bash
npm run format
npm run test:watch
npm run test:browser:headed
```

For browser-based breakpoint QA on a fresh machine, install the bundled
Chromium binary once:

```bash
npm run test:browser:install
```

## Pre-Commit Hooks

The repository uses [Husky](https://typicode.github.io/husky/) and
[lint-staged](https://github.com/lint-staged/lint-staged) to run formatting
and lint checks automatically before every commit. After `npm install`, the
hooks are active — no extra setup required.

If a commit is rejected, fix the reported issue, `git add`, and commit again.
See [Verification & Deployment](docs/foundation/verification-and-deployment.md)
for a full explanation of why hooks exist and how to work with them.

## Deployment

The site deploys to GitHub Pages on every push to `main`. The CI pipeline
runs all quality gates before deployment:

1. Format check (`prettier --check`)
2. Lint (`eslint`)
3. Type check (`tsc --noEmit`)
4. Unit tests (`vitest`)
5. Build (`next build` with static export)
6. Lighthouse audit (performance, accessibility, best practices, SEO)

If any gate fails, the deployment is blocked.

Live site: <https://kaw393939.github.io/nextjs_ai_orchestration_spec_sprint_process/>

## Repository Structure

```text
.
├── app/                    # Next.js App Router entry points and global styles
├── components/             # Shared UI and layout components
├── docs/
│   ├── foundation/         # Student-facing reference docs
│   └── _specs/             # Process artifacts
├── lib/                    # Shared site config and future helpers
├── tests/                  # Automated tests
```

## Remote

The local repository is configured with this GitHub remote:

`git@github.com:kaw393939/nextjs_ai_orchestration_spec_sprint_process.git`
