# Sprint 1 — Editorial Reading Rhythm

## Header

- Goal: complete the shared reading-system layer by formalizing recurring
  editorial rhythm patterns and documenting how later route refactors should
  use them.
- Spec sections:
  - Problem Statement 2, 3, 4
  - Design Goals 1, 2, 4, 6
  - Architecture: Styling Layer, Composition Rules, Accessibility And Semantics
  - Testing Strategy: Required Test Categories, Baseline
- Prerequisite: `feat: implement Reading System Sprint 0 — shared chapter patterns`
- Expected test count: `15 existing + 1 new = 16 total`

## Available Assets

| Asset                                         | Verified details                                         | How this sprint uses it                                              |
| --------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------- |
| `components/content/chapter/`                 | Introduced in Sprint 0                                   | Receives the second pass of rhythm and composition support           |
| `app/globals.css`                             | Already carries site-wide chapter styling after Sprint 0 | Gains finishing patterns for quotes, transitions, and section pacing |
| `docs/_specs/refactor/reading-system/spec.md` | Governing contract for the shared reading system         | Ensures the system is documented before broad route rollout          |

## Tasks

### 1. Add recurring rhythm helpers for long routes

Extend the chapter system so later page work has a standard way to show:

- opening scene or thesis
- contrast blocks such as promise versus limit
- source quotes or short primary-source excerpts
- forward-link transitions into the next era or guide

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Write an implementation note for route authorship conventions

Create a durable note under `docs/content/architecture/` or a nearby planning
path that explains how to assemble a page using the new chapter system.

The note should define:

- recommended chapter order
- when to use `GuideCallout` versus a lighter editorial aside
- when to use `NarrativeCard` versus a quote or artifact shelf
- how to keep prose and support material visually distinct

Verify:

```bash
npm run format:check
npm run lint
```

### 3. Add one more route-level adoption or test fixture

Use either a second live route or a dedicated fixture-style test page to make
sure the system is not tuned to only one chapter.

Verify:

```bash
npm run test
npm run build
```

## Completion Checklist

- [ ] Recurring rhythm helpers exist for contrast, quote, and transition moments
- [ ] A durable implementation note explains how to use the chapter system
- [ ] The chapter system is validated on more than one surface
- [ ] One additional automated test covers the broadened reading system
- [ ] Full verification passes

## QA Deviations

None.
