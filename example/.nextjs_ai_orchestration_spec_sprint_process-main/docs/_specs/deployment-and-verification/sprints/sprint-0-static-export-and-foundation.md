# Sprint 0 — Static Export & Verification Foundation

## Header

- **Goal:** Configure the application for static export to GitHub Pages and
  write the student-facing document explaining why deterministic verification
  matters for AI-assisted work.
- **Spec sections:** Design goals 1, 4, 5; Architecture (static export,
  foundation document, documentation updates)
- **Prerequisite:** None

## Available Assets

| Asset                                       | Location               | Current State                                                                                   |
| ------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------- |
| `next.config.ts`                            | root                   | Server-rendered output, 5 remote image patterns, no `output`/`basePath`/`unoptimized`           |
| `package.json`                              | root                   | All quality scripts present; `start` uses `next start` (server mode)                            |
| `components/media/focal-image.tsx`          | components/            | Only file using `next/image`; uses `ImageProps` from Next.js                                    |
| `docs/foundation/student-reading-guide.md`  | docs/foundation/       | 114 lines, 6-step reading path, no mention of CI/CD or verification tools                       |
| `docs/foundation/technology-orientation.md` | docs/foundation/       | 254 lines, covers Vitest/Testing Library but not Playwright, Lighthouse, CI/CD, or GitHub Pages |
| `README.md`                                 | root                   | 186 lines, Quality Commands section exists, no Deployment section                               |
| `app/page.tsx`                              | app/                   | Homepage entry point                                                                            |
| `out/`                                      | (not yet generated)    | ESLint ignores `out/`; `.gitignore` should also ignore it                                       |
| Playwright config                           | `playwright.config.ts` | Already has `process.env.CI` checks and `baseURL` env var support                               |

## Tasks

### 1. Configure static export in next.config.ts

Add `output: "export"`, environment-driven `basePath`, and
`images: { unoptimized: true }`.

**Changes to `next.config.ts`:**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
    remotePatterns: [
      /* keep all 5 existing patterns unchanged */
    ],
  },
};

export default nextConfig;
```

**Verify:**

```bash
npm run build
ls out/index.html
ls out/eras/precursors-to-machine-intelligence/index.html
```

Build must succeed and produce `out/` with HTML files for every route.

### 2. Update .gitignore for out/ directory

Add `out/` to `.gitignore` if not already present. The static export output
should not be committed.

**Verify:**

```bash
grep "out/" .gitignore
```

### 3. Verify existing tests still pass

Run the full local test suite to confirm the static export config does not
break anything.

**Verify:**

```bash
npm run typecheck
npm run lint
npm run test
npm run format:check
```

All must pass. Note: Playwright browser tests (`npm run test:browser:homepage`)
require a running dev server, not static export, so they are expected to work
unchanged via `npm run dev`.

### 4. Write verification-and-deployment.md

Create `docs/foundation/verification-and-deployment.md`.

This is the big-picture pedagogical document explaining why deterministic
verification matters for AI-assisted work. Structure:

```markdown
# Verification & Deployment

## Why This Matters

(The fundamental argument: when AI generates your code, your job shifts from
writing to verifying. Specs control what gets built. Deterministic tools
control whether it actually works. Both layers are required.)

## The Verification Stack

### Layer 1: Process Artifacts (Specs, Sprints, QA)

- Control scope, intent, sequencing
- Prevent drift, preserve context, make decisions auditable
- The human judgment layer — no tool can replace this

### Layer 2: Deterministic Tools (Local)

- TypeScript (`npm run typecheck`) — catches type errors at compile time
- ESLint (`npm run lint`) — enforces code patterns and catches common bugs
- Prettier (`npm run format:check`) — enforces consistent formatting
- Vitest (`npm run test`) — verifies component behavior with unit tests
- Playwright (`npm run test:browser:homepage`) — verifies real browser
  rendering at every breakpoint

### Layer 3: Continuous Integration (CI/CD)

- GitHub Actions runs every tool above on every push
- A push that fails any gate does not deploy
- Makes quality visible: green check = all gates passed
- Prevents regression: you cannot accidentally ship broken code

### Layer 4: Performance & Accessibility (Lighthouse)

- Measures performance, accessibility, best practices, SEO
- Catches problems humans miss: missing alt text, slow loads, contrast issues
- Scores are recorded per-run so regressions are visible over time

### Layer 5: Deployment (GitHub Pages)

- Static export produces HTML/CSS/JS with no server
- GitHub Pages hosts it for free on every push to main
- Live URL makes the product real: anyone can visit, test, and critique

## How To Read CI Output

(Explain: green checks, red X marks, expanding failed steps, reading lint
errors, reading test failures, reading Lighthouse scores)

## How To Read A Lighthouse Report

(Explain: the four scores, what each category measures, how to fix common
issues, why accessibility is non-negotiable)

## The Complete Cycle

spec → sprint → implement → local verify → push → CI gates → Lighthouse →
deploy → live URL

Every stage catches different kinds of problems. No single stage is
sufficient. The system works because each layer reinforces the others.

## Why AI Makes This More Important, Not Less

(The verification tax argument: AI can generate plausible code faster than
humans can review it. Without deterministic gates, the team ships on vibes.
The tools are the immune system. The specs are the architecture. Together they
ensure the AI's output meets the project's actual standards.)
```

Adapt to match the repository's prose tone: direct, serious, non-marketing,
historically grounded. Target 150–200 lines.

**Verify:** File exists. All tool command references match `package.json`.

### 5. Update student reading guide

Add the new document to the reading path. Insert as a new step between the
current Step 3 (vocabulary) and Step 4 (study a completed workstream):

**New Step 4: Understand verification and deployment**

```markdown
### Step 4: Understand verification and deployment

This document explains why deterministic verification tools are the essential
complement to the spec/sprint/QA process — and why they matter more, not less,
when AI generates the code.

- [Verification & Deployment](verification-and-deployment.md) — the full
  quality stack from local tools to CI/CD to Lighthouse to GitHub Pages
```

Renumber existing Steps 4–6 to Steps 5–7.

**Verify:** `cat docs/foundation/student-reading-guide.md | grep "Step"`
shows Steps 1 through 7.

### 6. Update technology-orientation.md

Add entries for tools not currently covered:

- **Playwright** — browser test runner, breakpoint auditing, headless
  Chromium
- **GitHub Actions** — CI/CD platform, runs quality gates on every push
- **GitHub Pages** — static site hosting, deploys from `out/` directory
- **Lighthouse** — performance, accessibility, best practices, SEO auditing

Add these in the appropriate section of the existing document. Do not rewrite
existing content.

**Verify:** `grep -c "Playwright\|GitHub Actions\|GitHub Pages\|Lighthouse" docs/foundation/technology-orientation.md`
returns at least 4 matches.

### 7. Update README.md

Add a "Deployment" section after the existing "Quality Commands" section:

```markdown
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

Live site: `https://kaw393939.github.io/nextjs_ai_orchestration_spec_sprint_process/`
```

The CI badge and live URL will be added in Sprint 1 after the workflow
exists.

**Verify:** `grep "Deployment" README.md` returns a match.

## Completion Checklist

- [ ] `next.config.ts` has `output: "export"`, `basePath`, `images.unoptimized`
- [ ] `npm run build` produces `out/` with HTML for all routes
- [ ] `out/` is in `.gitignore`
- [ ] Existing tests pass: typecheck, lint, test, format:check
- [ ] `docs/foundation/verification-and-deployment.md` exists (150–200 lines)
- [ ] Student reading guide updated with new Step 4, steps renumbered 1–7
- [ ] Technology orientation updated with Playwright, GitHub Actions, GitHub
      Pages, Lighthouse
- [ ] README.md has Deployment section (CI badge added in Sprint 1)
- [ ] All linked file paths resolve to real files

## QA Deviations

1. **`app/robots.ts` and `app/sitemap.ts` needed `export const dynamic = "force-static"`.**
   Next.js metadata routes require this export when `output: "export"` is set.
   Both files used build-time environment variables only, so `force-static` is
   correct. Not anticipated in the sprint doc.
2. **`out/` was already in `.gitignore`.** Task 2 was a no-op. The existing
   `.gitignore` already had `/out/` under the `# next.js` section.
3. **Pre-existing `format:check` failures.** Many files across the repo have
   formatting drift. This is a pre-existing condition, not caused by Sprint 0
   changes. The three files modified in this sprint were formatted correctly.
