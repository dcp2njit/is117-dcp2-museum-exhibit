# Agent Guide

This file is the single entry document for any LLM, agent, or automation
system working in this repository.

It defines the operating rules, repository structure, process expectations, and
verification standards that must be followed here.

## Purpose Of This Repository

This repository is a working Next.js application about the history of
artificial intelligence and a teaching system for spec-driven AI-assisted
software delivery. The process and documentation system are part of the
product, not just the application code.

## Read Order For Any New Agent

Before doing meaningful work, read these in order:

1. `agent.md`
2. `docs/foundation/student-reading-guide.md`
3. `README.md`
4. `docs/_specs/README.md` — workstream status index
5. the relevant feature spec under `docs/_specs/{feature}/spec.md`
6. the relevant sprint doc under `docs/_specs/{feature}/sprints/`
7. any existing implemented artifact the sprint depends on

If the work touches the documentation system, also read the durable docs under
`docs/foundation/` that correspond to the topic.

If the work touches site content, research workflow, source capture, or media
planning, also read the durable research artifacts under `docs/_research/`
before making new content decisions.

## Current Repository State

The repository currently includes:

- a Next.js 16 App Router application with strict TypeScript, Tailwind CSS v4,
  Vitest, Testing Library, and Playwright
- seven era chapter routes under `app/eras/`
- a four-section homepage (Opening, Chronology, Scenes, Reading Model)
- reading maps, people-and-institutions, and guides pages
- 9 active workstreams under `docs/_specs/` and 4 archived under
  `docs/_archive/specs/` — see `docs/_specs/README.md` for the full index
- five student-facing foundation docs under `docs/foundation/`
- five research memos and source templates under `docs/_research/`
- content architecture under `docs/content/` (7 era packages, 25 concepts,
  21 people, 9 institutions)

Student-facing foundation docs:

- `docs/foundation/student-reading-guide.md`
- `docs/foundation/orchestration-method.md`
- `docs/foundation/technology-orientation.md`
- `docs/foundation/power-words.md`
- `docs/foundation/lightweight-change-path.md`

## Non-Negotiable Process Rules

### 1. Use The Spec Lifecycle For Foundational Work

For foundational, ambiguous, high-impact, or multi-session work, the workflow
is mandatory:

1. write the spec
2. QA the spec
3. write the sprint doc
4. QA the sprint doc
5. implement the sprint
6. QA the implementation

Do not skip phases. Do not merge phases. Do not improvise around the process.

### 2. Use The Lightweight Path Only For Narrow Changes

For narrow, low-risk, low-ambiguity work, use the lightweight process defined
in `docs/foundation/lightweight-change-path.md`.

The lightweight artifact is a `Change Note`.

If the work changes architecture, method, documentation-layer structure, or any
durable teaching model, do not use the lightweight path. Use the full workflow.

When in doubt, choose the heavier path.

### 3. Specs Define What And Why

Feature specs live at:

- `docs/_specs/{feature}/spec.md`

Specs define:

- problem statement
- design goals
- architecture
- security requirements
- testing strategy
- sprint plan
- future considerations

Specs are contracts. They do not contain loose guesses about implementation.

### 4. Sprint Docs Define Exact Execution

Sprint docs live at:

- `docs/_specs/{feature}/sprints/sprint-N-*.md`

Sprint docs must include:

- a clear goal
- referenced spec sections
- verified available assets
- exact artifact targets
- task-by-task execution guidance
- verify steps for each task
- a completion checklist
- a QA deviations section

If a sprint doc is vague, fix the sprint doc before implementing.

### 5. QA Is A Separate Real Pass

QA is not a rubber stamp.

QA must:

- read the governing spec
- read the sprint doc
- read every changed file
- audit against actual requirements
- identify real inconsistencies if they exist
- fix them if Sprint QA requires fixes
- rerun verification after any fix

If no issues remain, the result is `PASS (0 issues)` or a pass report with the
actual resolved issues recorded.

## Scope Discipline Rules

- Do not add unrelated features.
- Do not refactor adjacent systems without explicit authorization in the sprint
  doc or request.
- Do not add dependencies unless the sprint or task explicitly requires them.
- Do not rewrite broad sections when a local fix will solve the problem.
- Do not treat “helpful expansion” as harmless. In this repository, that is
  drift.

## Repository Documentation Rules

Documentation roles are intentionally separated.

- `README.md` is the landing document.
- `docs/foundation/` contains durable student-facing reference docs.
- `docs/_research/` contains durable research and source-capture artifacts.
- `docs/_specs/` contains planning and process artifacts.

Do not collapse these layers into one another.

Examples:

- do not turn a sprint doc into the primary teaching surface
- do not move durable conceptual docs back into `docs/_specs/`
- do not overload `README.md` with full-manual content that belongs in
  `docs/foundation/`

## Verification Rules

Documentation changes must usually verify with:

```bash
npm run format:check
```

If a sprint requires additional repository-level verification, run it exactly
as specified.

Common repository verification commands:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run format:check
```

Do not claim success without the required verification evidence.

### CI/CD Pipeline

The GitHub Actions workflow at `.github/workflows/deploy.yml` runs these gates
automatically on every push to `main`:

1. `npm run format:check`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test`
5. `npm run build`
6. `npx lhci autorun` (Lighthouse CI)

If any gate fails, the deployment to GitHub Pages is blocked. Check the
Actions tab on GitHub for the status of each run.

## Accuracy Rules

- Verify commands against `package.json`.
- Verify file paths against the live repository.
- Verify current implementation state before writing docs about it.
- Do not describe planned technologies as already implemented.
- Do not leave future-state wording in docs after the future work is completed.

## No False Authority

This repository explicitly rejects confident but unverified authority.

- Do not imply AI output is correct because it sounds polished.
- Do not use named frameworks or famous practitioners as status markers.
- If a name is used, tie it to a concrete repository lesson, constraint, or
  quality standard.

## Secrets And Sensitive Files

- Do not expose secrets from `.env.local` or any environment file.
- Do not print private values into logs, docs, commits, or chat output.
- Do not change `.env.local` unless the user explicitly asks for that exact
  change.

## Commit Conventions

Use these commit types:

- `feat: implement Sprint N — {summary}` for sprint implementation
- `fix: Sprint N QA — {summary}` for QA fixes after implementation
- `docs: Sprint N doc QA — {summary}` for sprint-doc QA fixes
- `chore: {summary}` for cleanup or non-functional maintenance

Commit only the files relevant to the current sprint or request.

## Expected Agent Behavior

Any LLM working here should:

- read before writing
- verify before claiming completion
- preserve durable artifacts
- keep scope tight
- prefer explicit evidence over confidence
- treat the repo’s teaching method as part of the system, not as extra prose

## Practical Execution Checklist

Before implementation:

1. identify whether the work uses the full workflow or the lightweight path
2. read the governing artifact(s)
3. verify available assets against the live repo
4. confirm the exact files allowed to change

During implementation:

1. follow tasks in order
2. keep changes bounded
3. run task-level verification where required

After implementation:

1. run the required repo-level verification
2. perform or prepare the QA pass
3. record any real deviations explicitly
4. commit and push only when the requested state is complete

## Primary Reference Files

- `README.md`
- `docs/foundation/student-reading-guide.md`
- `docs/_specs/README.md`
- `docs/_specs/documentation-foundation/spec.md`
- `docs/foundation/orchestration-method.md`
- `docs/foundation/technology-orientation.md`
- `docs/foundation/power-words.md`
- `docs/foundation/lightweight-change-path.md`
- `docs/foundation/verification-and-deployment.md`
- `docs/_research/README.md`

If there is a conflict between a loose assumption and one of the above files,
the verified repository artifact wins.
