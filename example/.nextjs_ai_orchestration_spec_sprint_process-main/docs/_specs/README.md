# Specifications Index

This directory contains the feature specifications and sprint documents that
govern all work in this repository. Every feature flows through the same
lifecycle: spec → sprint doc → implementation → QA. The full explanation of
this process is in
[docs/foundation/orchestration-method.md](../foundation/orchestration-method.md).

## Workstreams

| Workstream                                                                | Status       | Sprints | What It Produced                                                                                  |
| ------------------------------------------------------------------------- | ------------ | ------- | ------------------------------------------------------------------------------------------------- |
| [documentation-foundation](documentation-foundation/)                     | **Complete** | 6       | README, technology orientation, orchestration method, power words, lightweight change path        |
| [design-codex](design-codex/)                                             | **Complete** | 4       | Student-facing design philosophy, agent-facing site codex, and spec/sprint extraction guidance    |
| [setup](setup/)                                                           | Reference    | 0       | Architectural rules for UI framework; implemented as part of site-foundation                      |
| [refactor/code-quality](refactor/code-quality/)                           | **Complete** | 5       | Token consolidation, section file split, classname consistency, Next.js patterns                  |
| [refactor/browser-enhancements](refactor/browser-enhancements/)           | **Complete** | 5       | Mobile touch, typography, visual effects, layout/color, QA pass                                   |
| [refactor/reading-system](refactor/reading-system/)                       | In Progress  | 2       | Shared chapter patterns (chapter-hero, chapter-section, editorial-aside, pull-quote)              |
| [refactor/narrative-surfaces](refactor/narrative-surfaces/)               | Planned      | 2       | Homepage and reading-map chapter refactor                                                         |
| [refactor/chapter-exhibition-parity](refactor/chapter-exhibition-parity/) | Planned      | 9       | Homepage-parity visual audit and redesign of non-home chapter surfaces                            |
| [refactor/era-chapters](refactor/era-chapters/)                           | Planned      | 4       | Era 1–7 chapter-style rollout                                                                     |
| [documentation-cleanup](documentation-cleanup/)                           | In Progress  | 1       | Student orientation, workstream index, status markers                                             |
| [deployment-and-verification](deployment-and-verification/)               | In Progress  | 2       | Static export, CI/CD pipeline, Lighthouse, GitHub Pages, verification pedagogy                    |
| [homepage-exhibition](homepage-exhibition/)                               | Planned      | 3       | Era images via AI generation, visual breathing room, navigation simplification, heading reduction |

### Archived Workstreams

Four completed workstreams have been moved to
[docs/\_archive/](../_archive/README.md) to reduce student-facing clutter.
They are still in the repository and demonstrate the same workflow:

| Workstream                                                              | Sprints | What It Built                                                                               |
| ----------------------------------------------------------------------- | ------: | ------------------------------------------------------------------------------------------- |
| [site-foundation](../_archive/specs/site-foundation/)                   |       6 | Next.js scaffold, design system, content architecture, homepage shell, quality gates        |
| [history-content-platform](../_archive/specs/history-content-platform/) |      10 | Research workflow, content model, era map, 7 era packages, media pipeline, exemplar content |
| [web-book-system](../_archive/specs/web-book-system/)                   |       9 | Homepage grid, chronology section, reading model, scenes, footer, shared design system      |
| [browser-polish](../_archive/specs/refactor/browser-polish/)            |       4 | DRY consolidation, browser CSS features, accessibility focus                                |

## Recommended Study Order

For students learning the agentic orchestration method, study these completed
workstreams in this order:

1. **[browser-enhancements](refactor/browser-enhancements/)** — cleanest
   example of the full cycle. Five focused sprints, CSS-only scope, clear
   traceability from the spec's evidence table to `@supports` gates in code.
   Start with `spec.md`, then read sprints 0 through 4.

2. **[code-quality](refactor/code-quality/)** — shows how to audit existing
   code, identify concrete problems (43 hardcoded color values, monolithic
   components, DRY violations), and plan targeted refactors across 5 sprints.

3. **[documentation-foundation](documentation-foundation/)** — shows how
   documentation itself can be specified and staged. The spec defines the
   problem (no onboarding, no tech orientation, no process docs), and the
   sprints deliver the four foundation documents now in `docs/foundation/`.

## How To Read A Workstream

For any workstream you want to study:

1. Read `spec.md` first — it defines the problem, design goals, and sprint
   plan
2. Read the sprint docs in order (`sprint-0-*.md` through the final sprint)
3. Look at the code the sprints produced — the sprint doc tells you which
   files were created or modified
4. Note the QA pass sprint (usually the last one) — it shows how verification
   works as a separate disciplined pass
