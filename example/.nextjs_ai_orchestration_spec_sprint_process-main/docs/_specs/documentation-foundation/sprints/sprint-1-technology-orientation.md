# Sprint 1 — Technology Orientation

## Header

- Goal: add beginner-friendly but serious documentation explaining the role of
  the main technologies used in this repository.
- Spec sections:
  - Design Goals 1, 3, 7
  - Architecture: Documentation Layers, Primary Artifacts, Documentation
    Placement Rules
  - Security: Repository Accuracy, Conceptual Precision
  - Testing Strategy: Command Accuracy, Artifact Accuracy, Concept Coverage
- Prerequisite: `docs: implement Sprint 0 — README rewrite`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on the implemented README from Sprint 0. During Sprint Doc
QA, verify the exact documentation file created or updated in Sprint 0 and the
current repository technology stack before implementation.

| Asset                                                                      | Expected verified details at QA time                                                        | How this sprint uses it                                               |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `README.md`                                                                | Updated project framing exists                                                              | Links or points to deeper technology docs                             |
| `package.json`                                                             | Verifies actual runtime and dev dependencies                                                | Grounds technology explanations in the real stack                     |
| `app/`, `components/`, `lib/`, `tests/`                                    | Current repository structure exists                                                         | Provides concrete examples of where technologies show up              |
| `docs/`                                                                    | Current durable docs root exists but only contains `_specs/` today                          | Houses the new student-facing orientation material                    |
| `docs/_specs/site-foundation/spec.md`                                      | Declares Tailwind, Radix UI, and shadcn/ui as part of the intended platform direction       | Anchors planned-stack explanations to an explicit repository artifact |
| `docs/_specs/site-foundation/sprints/sprint-1-design-system-foundation.md` | Defines the planned design-system work that introduces Radix packages and shadcn/ui support | Prevents Sprint 1 docs from overstating what is already implemented   |

## Tasks

### 1. Create the technology-orientation document structure

Create a durable student-facing documentation artifact outside `docs/_specs/`.

This sprint should also establish the durable documentation location and naming
convention that later docs sprints will extend, so students can discover the
full documentation set from one clear area under `docs/`.

Required artifact path for this sprint:

- `docs/foundation/technology-orientation.md`

Required topics:

- Next.js
- React
- JSX
- Tailwind CSS
- Radix UI
- shadcn/ui

Key implementation details:

- The document must explain what each technology is and what job it performs in
  this repository.
- Avoid encyclopedia-style explanations.
- Keep the writing grounded to this project’s actual use of the stack.
- The document must clearly distinguish between technologies already installed
  in the repository and technologies that are part of the approved near-term
  design-system roadmap.

Verify:

```bash
npm run format:check
```

### 2. Explain why these technologies were chosen

For each technology, explain the selection in terms of repository goals and
student learning value.

Required outcomes:

- distinguish framework/runtime choices from UI/styling choices
- explain that Radix UI and shadcn/ui are currently part of the planned
  site-foundation design-system direction rather than already-installed core
  runtime dependencies
- avoid overstating technologies that are planned but not yet deeply used

Verify:

```bash
npm run format:check
```

### 3. Connect the orientation docs back to the README

Update the landing documentation so first-time readers can discover the deeper
technology explanation.

Required outcomes:

- README points to the orientation doc or section
- naming is clear and student-friendly
- landing-page readability remains intact
- the durable docs structure is ready for the later process and prompting-style
  documentation in Sprint 2

Recommended follow-on durable paths for later sprints:

- `docs/foundation/orchestration-method.md`
- `docs/foundation/power-words.md`
- `docs/foundation/change-note-path.md`

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] Durable technology-orientation docs exist outside `docs/_specs/`
- [ ] A clear durable docs location exists under `docs/` for later student-facing material
- [ ] `docs/foundation/technology-orientation.md` exists
- [ ] Each core technology is explained in plain language
- [ ] The explanation is grounded in this repository’s actual stack
- [ ] Planned technologies are clearly labeled as planned rather than already implemented
- [ ] The README links to or points toward the orientation material
- [ ] `npm run format:check` passes

## QA Deviations

None.
