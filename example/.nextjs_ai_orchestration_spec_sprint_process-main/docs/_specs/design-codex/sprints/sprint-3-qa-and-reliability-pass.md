# Sprint 3 — QA And Reliability Pass

## Header

- Goal: review the full design-codex package for repository accuracy,
  conceptual consistency, and usefulness to both students and coding agents.
- Spec sections:
  - Problem Statement
  - Design Goals 1, 2, 3, 4, 5, 6, 7
  - Security: all items
  - Testing Strategy: all categories
- Prerequisite: Sprints 0, 1, and 2 complete
- Expected test count: `0 existing + 0 new = 0 total`

## Available Assets

| Asset                                             | Verified details                                                                                                                     | How this sprint uses it                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `docs/foundation/site-design-philosophy.md`       | Student-facing explanation of museum/editorial metaphor, chronology logic, evidence surfaces, and anti-copying guidance              | Reviewed for clarity, accuracy, and curatorial consistency                        |
| `docs/foundation/site-implementation-codex.md`    | Agent-facing architecture reference with component catalog, retrieval appendix, route-level page patterns, and inspection order      | Reviewed against real files and current repository structure                      |
| `docs/foundation/site-spec-patterns.md`           | Bridge document now includes extraction rules, spec/sprint structure, scope-boundary guidance, drafting sequence, and study examples | Reviewed for actionable guidance and template alignment                           |
| `docs/foundation/student-reading-guide.md`        | Links all three design-codex documents into the student reading path                                                                 | Used to verify the package is integrated into the repository’s learning flow      |
| current repository state                          | Components, routes, CSS, data, scripts, tests, and spec workstreams                                                                  | Used as the source of truth for all accuracy checks                               |
| existing workstream conventions in `docs/_specs/` | Existing specs and sprints define house style for planning artifacts                                                                 | Used to verify the new package fits the repository’s established process language |

## Cross-Sprint Context

- Sprint 0 produced the student-facing philosophy document that explains why
  the site feels like a curated exhibition rather than a generic web app.
- Sprint 1 produced the implementation codex and was later strengthened with a
  compact retrieval appendix, helper catalog, route-level page patterns, and
  a fast inspection order for coding agents.
- Sprint 2 produced the spec-patterns bridge document and was later expanded
  with explicit guidance on spec structure, sprint structure, scope
  boundaries, project-thesis selection, and drafting order.
- The student reading guide now points learners to all three durable documents,
  so Sprint 3 must review not only document accuracy but also package
  integration.

## Tasks

### 1. Perform repository-accuracy review

Read the completed documents and verify every concrete claim against the code.

Required checks:

- referenced files exist
- component names and roles are correct
- scripts and commands are accurate
- CSS tokens, theme names, and layout classes are named correctly
- data-model explanations match the real exports in `lib/`

Verify:

```bash
npm run format:check
```

### 2. Perform conceptual consistency review

Check that the three documents reinforce the same model.

Required checks:

- philosophy doc and implementation codex do not contradict each other
- spec-patterns doc uses the same interpretation of the site as the first two
  docs
- anti-copying guidance is clear across the full package
- the documents explain both design quality and process discipline as linked
  systems

Verify:

```bash
npm run format:check
```

### 3. Perform reliability review for agent use

Review the codex from the perspective of an LLM asked to learn from this site.

Required outcomes:

- file references are specific enough for agentic retrieval
- adaptation guidance is concrete enough to reduce hallucination
- the documents tell an agent what to inspect before proposing new work
- the package supports reliable spec-and-sprint generation for new ideas

Verify:

```bash
npm run format:check
npm run lint
```

## Completion Checklist

- [x] all three durable docs have been reviewed against the repository
- [x] concrete claims have been verified for accuracy
- [x] the package is conceptually consistent
- [x] the package is useful for both students and coding agents
- [x] `npm run format:check` passes
- [x] `npm run lint` passes

## QA Summary

- Repository-accuracy review: confirmed referenced files exist, documented
  component exports match the codebase, chapter-theme classes and navigation /
  narrative-data exports are named correctly, and package scripts match the
  verification commands cited in the codex.
- Conceptual consistency review: confirmed the philosophy, implementation
  codex, and spec-patterns documents all describe the site as a curated,
  chapter-driven teaching system and reinforce the same anti-copying and
  process-discipline model.
- Reliability review for agent use: confirmed the codex provides file-grounded
  retrieval targets, route-level inspection order, adaptation guidance, and a
  spec/sprint derivation path suitable for agent-assisted reuse.
- Integration review: confirmed `docs/foundation/student-reading-guide.md`
  links all three durable design-codex documents into the student study path.
- Verification results:
  - `npm run format:check` passed
  - `npm run lint` passed after removing two unused imports surfaced during QA
    in `app/eras/foundation-models-and-generative-ai/page.tsx` and
    `components/content/home/home-design-system.tsx`
- Findings: none after fixes

## QA Deviations

None.
