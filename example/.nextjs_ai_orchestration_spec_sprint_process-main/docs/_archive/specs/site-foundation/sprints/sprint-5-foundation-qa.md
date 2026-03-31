# Sprint 5 — Foundation QA

## Header

- Goal: perform the formal foundation QA pass, resolve any defects against the
  spec and sprint commitments, and leave the feature ready for expansion.
- Spec sections:
  - All sections of `docs/_specs/site-foundation/spec.md`
- Prerequisite: `feat: implement Sprint 4 — quality gates`
- Expected test count: `8 existing + 0 new = 8 total` unless QA fixes require
  additional regression coverage

## Available Assets

This sprint is intentionally a QA sprint. At QA time, the reviewer must read
all sprint docs and all files created or modified in Sprints 0 through 4.

| Asset                                  | Verified details required at QA time | How this sprint uses it                   |
| -------------------------------------- | ------------------------------------ | ----------------------------------------- |
| `docs/_specs/site-foundation/spec.md`  | Final approved foundation contract   | Audit source of truth                     |
| `docs/_specs/site-foundation/sprints/` | Sprint 0 through Sprint 4 docs       | Audit implementation against planned work |
| All files modified in Sprints 0–4      | Exact implementation outputs         | Full QA review and defect fixing          |

## Tasks

### 1. Audit the implementation against the spec

Read the full foundation implementation and evaluate whether each spec section
has been satisfied.

Required checks:

- professional development baseline exists
- content-first architecture is reflected in structure and code
- accessibility-sensitive UI uses appropriate primitives
- metadata and semantic structure support discoverability
- security expectations around validation and repository-only content access are
  met

Verify:

```bash
npm run typecheck
```

### 2. Audit the implementation against each sprint doc

For Sprints 0 through 4, verify completion checklists, test counts, and any QA
deviations.

Required outcomes:

- every planned deliverable exists or has a documented deviation
- test count deltas are accurate
- no hidden scope creep was introduced without documentation

Verify:

```bash
npm run test
```

### 3. Fix any defects found during QA

If the audit finds mismatches, missing validation, weak test coverage, or build
issues, apply the smallest changes necessary to bring the implementation back
into alignment.

Required outcomes:

- fixes remain within the foundation feature scope
- any missing regression coverage is added when a defect warrants it
- the relevant sprint doc `QA Deviations` section is updated if behavior differs
  from the original blueprint

Verify:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

### 4. Produce the QA report and close out the feature

Document the final QA result.

Required outcomes:

- verdict is either `PASS (0 issues)` or a concise list of resolved issues
- verification results are recorded
- any spec or sprint deviations are explicit

Recommended artifact:

- append the QA report to this sprint doc or create a clearly named companion
  QA report in the same feature folder

Verify:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Completion Checklist

- [ ] The implementation has been audited against the spec
- [ ] The implementation has been audited against Sprint 0 through Sprint 4
- [ ] Any defects found during QA have been fixed
- [ ] Test counts and deviations are documented accurately
- [ ] Final verification commands pass
- [ ] A QA report exists with a clear verdict

## QA Deviations

None.
