# Sprint 4 — Quality Gates

## Header

- Goal: harden the repository for ongoing professional development with CI-ready
  validation, consistent formatting enforcement, and local pre-commit quality
  checks.
- Spec sections:
  - Design Goals 1 and 6
  - Architecture: Developer Experience Foundation
  - Testing Strategy: Verification Baseline, Mocking and Isolation
  - Security: Dependency Discipline
- Prerequisite: `feat: implement Sprint 3 — homepage shell`
- Expected test count: `8 existing + 0 new = 8 total`

## Available Assets

This sprint depends on implemented outputs from earlier sprints. During Sprint
Doc QA, verify the exact scripts, test commands, and repository layout before
implementation.

| Asset                    | Expected verified details at QA time                              | How this sprint uses it                   |
| ------------------------ | ----------------------------------------------------------------- | ----------------------------------------- |
| `package.json`           | Contains working lint, typecheck, test, build, and format scripts | Used by hooks and CI                      |
| `tests/`                 | Existing passing test suite                                       | Validated in CI and local gates           |
| application source files | Build successfully before this sprint begins                      | Protected by stricter workflow automation |

## Tasks

### 1. Add repository-local pre-commit enforcement

Configure a lightweight pre-commit workflow.

Recommended tooling:

- `husky`
- `lint-staged`

Required outcomes:

- staged source files are formatted before commit
- staged source files are linted before commit where practical
- the hook remains fast enough for regular local use

Verify:

```bash
npm run lint
npm run format:check
```

### 2. Add CI-ready validation workflow

Create a non-interactive workflow that runs the baseline quality checks for all
future changes.

Create:

- `.github/workflows/ci.yml` or equivalent repository automation

Required commands in CI:

- `npm ci`
- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`

Key implementation details:

- The workflow must not rely on external services beyond package installation.
- It must run from a clean checkout without manual steps.

Verify:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

### 3. Tighten repository scripts and developer guidance

Clean up any remaining script or configuration gaps discovered during the prior
sprints.

Possible updates:

- normalize script names and ordering in `package.json`
- ensure `format:check` and `test` are CI-safe
- add a concise project `README.md` section for local setup if the repository
  still lacks one

Key implementation details:

- Keep changes minimal and operational.
- Do not refactor application behavior in this sprint.

Verify:

```bash
npm run format:check
npm run test
```

## Completion Checklist

- [ ] Pre-commit automation exists and is lightweight
- [ ] CI workflow exists and runs the full quality baseline
- [ ] Repository scripts are consistent and CI-safe
- [ ] No application behavior was expanded outside workflow hardening scope
- [ ] `npm run typecheck`, `npm run lint`, `npm run test`, `npm run format:check`, and `npm run build` all pass

## QA Deviations

None.
