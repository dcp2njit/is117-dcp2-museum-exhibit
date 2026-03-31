# Documentation Cleanup & Student Orientation — Spec

> **Status:** In Progress

## Problem Statement

The repository contains strong documentation across three layers: process
artifacts (`docs/_specs/`), student-facing foundations (`docs/foundation/`),
and content architecture (`docs/content/`). The orchestration workflow is
genuinely well-executed, and the foundation docs teach the method clearly.

The problem is that **no clear reading path exists for a student who just
cloned this repo.** A new reader encounters:

- ~50 spec/sprint files across 11 workstreams with no status map
- No indication of which workstreams are complete, in-progress, or planned
- No curated "study these examples" guide pointing to the strongest specs
- `README.md` and `agent.md` that overlap in purpose without clear audience
  separation
- Completed refactor packages (code-quality, browser-polish,
  browser-enhancements) mixed with draft/planned packages (reading-system,
  narrative-surfaces, era-chapters) with no distinction
- A `setup/` spec with no sprints and no explanation of whether it was done
  differently
- Research topics that are all substantive (100–326 lines each) but have no
  status markers

### What Is Not Broken

- The four foundation docs (`technology-orientation.md`,
  `orchestration-method.md`, `power-words.md`, `lightweight-change-path.md`)
  are high-quality and student-ready
- `agent.md` is authoritative as an LLM control document
- `README.md` has the right thesis and tone
- Content architecture docs are clear and well-structured
- Research memos are substantive — not stubs
- The spec/sprint/QA workflow is well-demonstrated across completed packages

### Context

Students will be given this repository as a reference for building their own
museum site on a topic of their choice. Their LLM will read the docs to learn
the agentic orchestration pattern and help them replicate it. The repo must
function as both a working example and a teachable system.

---

## Design Goals

1. **Create a clear student reading path.** A new reader must be able to open
   one document and know exactly what to read, in what order, and why.

2. **Show completion status at a glance.** Every workstream must be marked as
   complete, in-progress, or planned so students know which ones to study as
   finished examples vs. which are still evolving.

3. **Sharpen audience separation.** `README.md` is the student welcome mat.
   `agent.md` is the LLM control document. They should not duplicate each
   other's content.

4. **Preserve everything of value.** This is cleanup, not deletion. No specs,
   sprints, research memos, or foundation docs are removed. The work is
   adding orientation and status markers, not cutting content.

5. **Make the process itself visible as curriculum.** Students should be able
   to study completed spec → sprint → implementation chains as examples of
   the orchestration method they are learning.

---

## Architecture

### Changes By Layer

**Root documents:**

- `README.md` — rewrite to focus on student orientation: what this repo is,
  what students should do with it, and where to start. Remove operational
  detail that belongs in `agent.md`.
- `agent.md` — tighten to pure LLM control. Add updated repository state
  reflecting completed workstreams. Remove teaching prose that belongs in
  `README.md` or `docs/foundation/`.

**New student-facing document:**

- `docs/foundation/student-reading-guide.md` — curated reading path with
  explanations of what each document teaches and suggested study order.

**New workstream status map:**

- `docs/_specs/README.md` — rewrite with a status table covering all 11
  workstreams, their completion state, sprint counts, and what each produced.
  Currently this file is a process guide template copied from another project;
  it should become the actual index for this project's specs.

**Spec-level markers:**

- Add a `Status:` line to the top of each `spec.md` file (Complete /
  In-Progress / Planned / Draft) so agents and students can see workstream
  state without reading the full spec.

### What Does Not Change

- No spec or sprint doc content is modified beyond adding status markers
- No foundation docs are rewritten (they are already student-ready)
- No research memos are modified
- No content architecture docs are modified
- No application code changes
- No test changes

---

## Testing Strategy

This is a documentation-only change. Verification is:

1. `npm run build` — must still succeed (markdown in docs/ is scanned by
   Tailwind; badly formatted files can break builds)
2. `npx vitest run` — existing tests must still pass
3. Manual review: every file linked in the reading guide must exist
4. Manual review: every workstream status in the README table must be accurate

---

## Sprint Plan

| Sprint | Goal                                                                                                                                                 |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0      | Student orientation: rewrite README, tighten agent.md, create student reading guide, create workstream status index, add status markers to all specs |

This is a single-sprint package. The scope is bounded and the
changes are all documentation edits.

---

## Future Considerations

- **Homepage exhibition review.** After this cleanup, a separate assessment of
  the homepage content and code as a museum exhibition template for students.
  That work should be its own spec.
- **Completed spec annotations.** Once students are using the repo, consider
  adding "lessons learned" annotations to completed sprint docs showing what
  went well and what required QA fixes.
