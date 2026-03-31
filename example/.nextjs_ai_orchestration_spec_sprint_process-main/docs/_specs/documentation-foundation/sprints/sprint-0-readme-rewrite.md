# Sprint 0 — README Rewrite

## Header

- Goal: rewrite the repository README so it clearly explains what the project
  is, why it exists, who it is for, and how the repository’s AI orchestration
  process works at a high level.
- Spec sections:
  - Problem Statement
  - Design Goals 1, 2, 3, 4, 7
  - Architecture: Documentation Layers, Primary Artifacts, Documentation
    Placement Rules, Concept Model
  - Security: Repository Accuracy, No False Authority
  - Testing Strategy: Command Accuracy, Artifact Accuracy, Consistency Review
- Prerequisite: none
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

| Asset                                          | Verified details                                                                                                                                                 | How this sprint uses it                           |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `README.md`                                    | Existing project README explains the repo at a high level but does not yet fully teach the educational thesis, technology orientation, or orchestration concepts | Rewritten as the primary landing artifact         |
| `docs/_specs/documentation-foundation/spec.md` | Source-of-truth contract for the documentation system                                                                                                            | Defines the README’s purpose and boundaries       |
| `docs/_specs/example_spec.md`                  | Process guide defining the spec -> sprint -> implementation -> QA lifecycle                                                                                      | Supports the workflow explanation section         |
| repository root structure                      | Includes `app/`, `components/`, `lib/`, `tests/`, and `docs/_specs/`                                                                                             | Provides concrete, repository-grounded references |

## Tasks

### 1. Redefine the README information architecture

Rewrite the README so the section order teaches the repository intentionally.

Required sections:

- project thesis or purpose
- what this repository is and why it exists
- who the repository is for
- what the example product is versus what the deeper method is
- high-level workflow summary
- development and quality commands
- repository structure

Key implementation details:

- The README must read like a serious engineering and teaching artifact.
- Avoid hype language and avoid implying that code quality no longer matters.
- Keep the README accessible to first-time readers without flattening the
  project’s seriousness.
- Preserve any currently accurate setup, quality-command, and repository
  structure details unless a verified correction is required.

Verify:

```bash
npm run format:check
```

### 2. Clarify the project thesis and audience

Update the README so it explicitly frames the repository as a teaching example
for AI orchestration and spec-driven delivery.

Required outcomes:

- distinguish the AI history site from the broader educational purpose
- identify students and serious learners as the primary audience
- explain that the repository teaches bounded, verifiable AI-assisted work

Verify:

```bash
npm run format:check
```

### 3. Add a concise workflow explanation

Document the repository’s lifecycle clearly enough that a newcomer understands
the sequence without reading every planning file first.

Required outcomes:

- explain spec -> sprint -> implementation -> QA
- tie the workflow to repository artifacts under `docs/_specs/`
- keep the explanation high-level; detailed teaching docs belong in later
  sprints
- prepare the README structure so later durable docs can be linked cleanly
  without another full landing-page rewrite

Verify:

```bash
npm run format:check
```

### 4. Align setup and verification commands with reality

Ensure every command in the README matches the current repository scripts and
execution model.

Required commands to verify against the repo:

- `npm install`
- `npm run dev`
- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`
- `npm run format:check`

Verify:

```bash
npm run format:check
npm run lint
```

## Completion Checklist

- [ ] README has a clear, intentional information architecture
- [ ] README explains what the project is and why it exists
- [ ] README distinguishes the example product from the orchestration method
- [ ] README identifies the intended audience
- [ ] README explains the high-level process accurately
- [ ] README commands and repository references are correct
- [ ] `npm run format:check` and `npm run lint` pass

## QA Deviations

None.
