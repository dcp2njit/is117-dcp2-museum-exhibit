# Verification & Deployment

## Why This Matters

When AI generates your code, your job changes. You are no longer primarily a
writer of code. You are primarily a verifier of code. The AI can produce
plausible-looking implementations faster than you can read them. Without
systematic verification, your team ships on confidence rather than evidence.

This repository uses a two-layer quality system:

1. **Process artifacts** (specs, sprints, QA passes) control _what_ gets built
   and _why_.
2. **Deterministic tools** (linters, type checkers, test runners, format
   checkers, accessibility auditors) control _whether it actually works_.

Both layers are required. Process without verification produces plans that feel
complete but contain undetected errors. Verification without process runs tools
against code that may have drifted far from the original intent. The two layers
reinforce each other.

This document explains the full verification stack, from local tools to CI/CD
to deployment, and why each layer exists.

---

## The Verification Stack

### Layer 1: Process Artifacts (Specs, Sprints, QA)

Before any code is written, a specification defines the problem, the design
goals, the architectural approach, and the sprint plan. Sprint documents break
the work into bounded tasks with explicit verify steps. QA passes check the
implementation against the sprint contract.

This is the human judgment layer. No tool can replace it. It controls:

- **Scope**: what gets built, and equally important, what does not
- **Intent**: why a particular approach was chosen
- **Sequencing**: what order tasks are implemented in
- **Auditability**: every decision is recorded in a durable artifact

When you work with an AI assistant, these artifacts serve as the shared memory
between sessions. Without them, each session starts from scratch and the AI
must reconstruct context from code alone — a process that invites drift and
inconsistency.

The full explanation of this process is in
[Orchestration Method](orchestration-method.md).

### Layer 2: Deterministic Tools (Local)

These tools run on your machine and give objective pass/fail answers. They
replace "it looks right" with "it passes."

| Tool       | Command                         | What It Catches                                                        |
| ---------- | ------------------------------- | ---------------------------------------------------------------------- |
| TypeScript | `npm run typecheck`             | Type errors, missing properties, wrong argument types                  |
| ESLint     | `npm run lint`                  | Code pattern violations, unused variables, accessibility issues in JSX |
| Prettier   | `npm run format:check`          | Inconsistent formatting (tabs, spacing, line length)                   |
| Vitest     | `npm run test`                  | Component behavior regressions, broken rendering, wrong content        |
| Playwright | `npm run test:browser:homepage` | Real browser rendering failures at every breakpoint (390px–1728px)     |

Each tool tests a different dimension of correctness. Type errors and lint
violations catch structural problems. Format checking prevents style arguments.
Unit tests verify behavior. Browser tests verify visual rendering.

No single tool is sufficient. An implementation can pass type checking while
rendering the wrong content. It can pass unit tests while being unreadable. It
can look perfect in a desktop browser while collapsing on mobile. The tools
work as a collective.

### Layer 2b: Pre-Commit Hooks (Automatic Local Enforcement)

Knowing the tools exist is not enough. Developers forget to run them.
Especially late in the day, or after a small "obvious" change, the temptation
is to skip `format:check` or `lint` and push directly. The feedback loop then
becomes: push, wait for CI, watch it fail, fix, push again. That cycle wastes
minutes on every commit and breaks your concentration.

Pre-commit hooks solve this by running checks automatically before every
commit. If the checks fail, the commit is rejected — you never push broken
code in the first place.

This repository uses two tools for this:

- **Husky** manages Git hooks. When you run `npm install`, the `prepare`
  script installs a pre-commit hook into `.husky/pre-commit`. You do not need
  to configure anything manually.
- **lint-staged** runs linters only on the files you are committing, not the
  entire codebase. This keeps the hook fast — typically under five seconds.

The current pre-commit hook runs:

| File type                            | Tools             |
| ------------------------------------ | ----------------- |
| `.js`, `.jsx`, `.ts`, `.tsx`, `.mjs` | Prettier + ESLint |
| `.json`, `.md`, `.css`, `.yml`       | Prettier          |

This means every committed file is automatically formatted and lint-checked.
You will never push a formatting violation or a lint error to CI again.

#### What happens when a hook blocks your commit

If the hook rejects your commit, the terminal output tells you exactly what
failed. The most common scenarios:

1. **Prettier reformats a file.** The hook writes the corrected formatting
   and stages the fix. Re-run `git commit` and it passes. No manual work
   required.
2. **ESLint finds an error.** The terminal shows the file, line, and rule.
   Fix the error, `git add` the file, and commit again.

If you genuinely need to bypass the hook (rare — typically only during a
rebase or merge conflict cleanup), you can use `git commit --no-verify`. But
CI will still catch any issues, so bypassing locally only delays the failure.

#### Why this matters for AI-assisted work

AI-generated code frequently has minor formatting drift — slightly different
indentation, trailing commas where Prettier removes them, or import ordering
that ESLint flags. Without hooks, you accumulate these differences silently
until CI rejects a commit with dozens of formatting violations. Hooks catch
each violation at the moment it is created, keeping the codebase clean
continuously.

### Layer 3: Continuous Integration (CI/CD)

Running tools locally depends on discipline. Pre-commit hooks enforce checks
on committed files, but they do not run the full test suite or build the
entire project. Continuous integration closes that gap.

The GitHub Actions workflow at `.github/workflows/deploy.yml` runs every tool
automatically on every push to `main`:

1. `npm run format:check` — consistent formatting
2. `npm run lint` — code pattern compliance
3. `npm run typecheck` — type safety
4. `npm run test` — unit test suite
5. `npm run build` — static export produces valid HTML
6. `npx lhci autorun` — Lighthouse audit (performance, accessibility, SEO)

If any gate fails, the deployment is blocked. The failure is visible in the
GitHub Actions tab as a red X next to the commit. Expanding the failed step
shows the exact error.

This matters because it prevents regression. Every push must pass every gate.
A change that fixes one problem but breaks another cannot deploy. Quality is
enforced by the system, not by individual discipline alone.

### Layer 4: Performance & Accessibility (Lighthouse)

Lighthouse is a tool that audits web pages for performance, accessibility,
best practices, and SEO. It catches problems that humans routinely miss:

- **Performance**: slow-loading images, render-blocking resources, excessive
  JavaScript
- **Accessibility**: missing alt text, insufficient color contrast, missing
  form labels, broken keyboard navigation
- **Best practices**: insecure resources, deprecated APIs, console errors
- **SEO**: missing meta descriptions, non-crawlable links, missing structured
  data

Each category receives a score from 0 to 100. In this repository:

- **Accessibility** is set to `error` at ≥90 — it blocks deployment if the
  score drops below 90. Accessibility is non-negotiable.
- **Performance**, **best practices**, and **SEO** are set to `warn` at their
  respective thresholds — they produce visible warnings but do not block
  deployment during initial rollout. These thresholds are tightened over time
  as baselines stabilize.

The Lighthouse configuration lives in `lighthouserc.json` at the project root.
It tests the homepage and at least one era page to ensure coverage across
different page types.

### Layer 5: Deployment (GitHub Pages)

Deployment makes the product real. A live URL that anyone can visit, test, and
critique is fundamentally different from code that only runs on a developer's
machine.

This repository uses GitHub Pages for deployment:

- `npm run build` produces static HTML/CSS/JS in the `out/` directory
- The CI workflow uploads `out/` as a GitHub Pages artifact
- GitHub Pages serves the site at the repository's public URL
- Deployment only happens on push to `main`, after all quality gates pass

Static export means no server. The site is pure HTML, CSS, and JavaScript
files. There is no server-side attack surface, no database, no runtime
dependencies. What you build is exactly what gets served.

---

## How To Read CI Output

When you push to `main` or open a pull request, the GitHub Actions tab shows
the workflow status:

- **Green check** (✓): all gates passed, deployment succeeded
- **Red X** (✗): at least one gate failed, deployment blocked
- **Yellow dot** (●): workflow is still running

To diagnose a failure:

1. Click the failed workflow run
2. Click the failed job (usually "quality")
3. Expand the failed step to see the error output
4. The error message tells you exactly what went wrong:
   - Lint error: which file and line violates which rule
   - Type error: which type is wrong and what was expected
   - Test failure: which assertion failed with expected vs. received values
   - Format error: which files need reformatting
   - Lighthouse: which score fell below the threshold

Fix the issue locally, verify with the relevant command, then push again.

---

## How To Read A Lighthouse Report

Each Lighthouse run produces a report with four scores:

- **Performance** (0–100): how fast the page loads and becomes interactive
- **Accessibility** (0–100): how usable the page is for people with
  disabilities, screen readers, and keyboard-only navigation
- **Best Practices** (0–100): whether the page follows web platform standards
- **SEO** (0–100): how discoverable the page is to search engines

Scores above 90 are generally considered good. Scores below 50 indicate
serious problems.

Each score expands into specific audits. A red audit is a failure. An orange
audit is a warning. Each audit includes a description of the problem and
usually a link to documentation explaining how to fix it.

Common issues and fixes:

| Issue                      | Category       | Fix                                                 |
| -------------------------- | -------------- | --------------------------------------------------- |
| Missing alt text on images | Accessibility  | Add `alt` attribute to every `<img>` element        |
| Low color contrast         | Accessibility  | Increase contrast ratio between text and background |
| Large images               | Performance    | Compress images or use appropriate dimensions       |
| Missing meta description   | SEO            | Add `description` to the page's metadata            |
| Console errors             | Best Practices | Fix the JavaScript error shown in the console       |

---

## The Complete Cycle

The full system works as a single connected cycle:

```
spec → sprint → implement → local verify → push → CI gates → Lighthouse → deploy → live URL
```

Every stage catches different kinds of problems:

- **Spec**: wrong scope, missing requirements, unclear intent
- **Sprint**: tasks too large, missing verify steps, wrong sequencing
- **Implementation**: logic errors, missing features, wrong patterns
- **Local verify**: type errors, lint violations, test failures, format issues
- **CI gates**: regressions, environment-specific failures, forgotten checks
- **Lighthouse**: accessibility gaps, performance problems, SEO issues
- **Deployment**: routing errors, missing assets, broken paths

No single stage is sufficient. The system works because each layer catches
what the others miss.

---

## Why AI Makes This More Important, Not Less

AI assistants can generate code faster than humans can review it. A single
prompt can produce hundreds of lines of plausible-looking implementation. This
speed is valuable, but it creates a verification burden.

The risk is not that the AI generates bad code. The risk is that it generates
_confidently wrong_ code — implementations that look correct, pass a quick
visual check, and contain subtle errors that only surface under testing,
accessibility audits, or real-world use.

Without deterministic verification:

- Type errors hide behind AI-generated code that "looks right"
- Accessibility regressions slip in because the AI does not test with a screen
  reader
- Performance degrades as the AI adds dependencies without measuring impact
- Formatting drifts because each generation follows slightly different
  conventions
- Tests that passed last week break silently after a refactor

The verification tools are the immune system. They do not care whether code
was written by a human or generated by an AI. They apply the same objective
checks to every line. The specs and sprints are the architecture. They ensure
the AI's output addresses the actual problem instead of the problem it
inferred.

Together, process artifacts and deterministic tools form a complete quality
system. The human provides judgment. The tools provide evidence. The CI
pipeline enforces both on every push. The result is software that meets its
stated requirements — regardless of who or what wrote it.
