# Sprint 3 — Shared Design System And Page Furniture

## Header

- Goal: turn the homepage decisions into enforceable shared rules for width,
  spacing, typographic roles, page furniture, and shell behavior.
- Spec sections:
  - Current Technical Baseline
  - UI Architecture Contract
  - Design System Requirements
  - Accessibility Requirements
  - Page Taxonomy
  - Implementation Program: Sprint 2
- Prerequisite: `feat: implement Web Book System Sprint 2 — Homepage Entry Scenes And Footer Close`
- Expected test count: `14 existing + 2 new = 16 total`

## Available Assets

| Asset                               | Verified details                            | How this sprint uses it                                   |
| ----------------------------------- | ------------------------------------------- | --------------------------------------------------------- |
| `components/ui/section-heading.tsx` | Existing shared heading primitive           | Must become the formal section-heading role               |
| `components/ui/panel.tsx`           | Existing structural wrapper                 | Must be narrowed to intentional use cases                 |
| `components/ui/button.tsx`          | Existing shared button primitive            | Must remain consistent with reduced interaction noise     |
| `components/site/site-header.tsx`   | Current shell header                        | Must align with shared shell rules                        |
| `components/site/site-footer.tsx`   | Current shell footer                        | Must align with shared closing rules                      |
| `app/globals.css`                   | Global tokens and frame width already exist | Must hold the formalized width and typography constraints |

## Tasks

### 1. Formalize shared width, spacing, and hierarchy tokens

Capture the homepage lessons as reusable rules rather than page-local class decisions.

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Create or refine shared page furniture

Expected patterns include:

- page opener shell
- transition or ruled section block
- quiet text field
- structured documentary band wrapper

Verify:

```bash
npm run build
```

### 3. Add targeted tests for shared layout semantics or non-trivial shared primitives

Recommended targets:

- section heading semantics
- shell landmark structure

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Shared width and spacing rules are formalized
- [ ] Heading roles are explicit in code
- [ ] Shared page furniture exists for later route adoption
- [ ] Two new shared-system tests pass

## QA Deviations

None.
