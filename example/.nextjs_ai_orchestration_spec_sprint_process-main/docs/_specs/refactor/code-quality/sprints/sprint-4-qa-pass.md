# Sprint 4 — QA Pass

## Header

- **Goal:** Perform the formal QA audit across Sprints 0–3, verify every
  checklist item, resolve any remaining inconsistencies, and confirm the
  codebase matches the spec contract.
- **Spec sections:** All sections of `docs/_specs/refactor/code-quality/spec.md`
- **Prerequisite:** Sprint 3 committed (Next.js patterns)
- **Expected test count:** Final implemented total + 0 new (unless QA fixes
  require targeted additional coverage)

## Available Assets

This sprint is a QA sprint. At QA time the reviewer must read:

| Asset                                                              | Purpose                                            |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| `docs/_specs/refactor/code-quality/spec.md`                        | Primary audit source — the contract                |
| Sprint 0–3 docs under `docs/_specs/refactor/code-quality/sprints/` | Planned intent and acceptance targets              |
| `app/globals.css` `:root` block                                    | Verify all colour tokens are defined               |
| `components/content/home/home-design-system.tsx`                   | Verify `homeTokens` extensions                     |
| All files in `components/content/home/`                            | Verify file split, token usage, `cn()` consistency |
| `components/ui/*.tsx`                                              | Verify token adoption in primitives                |
| `components/site/site-header.tsx`, `site-footer.tsx`               | Verify token adoption                              |
| `components/content/narrative-card.tsx`                            | Verify `cn()` conversion                           |
| `components/content/chapter/*.tsx`                                 | Verify `cn()` conversion                           |
| `app/eras/layout.tsx`                                              | Verify shared layout exists                        |
| `app/eras/*/page.tsx` (7 files)                                    | Verify `<main>` wrapper removed                    |
| `app/error.tsx`, `app/eras/error.tsx`                              | Verify error boundaries exist                      |
| `app/sitemap.ts`, `app/robots.ts`                                  | Verify SEO files exist                             |
| `tests/app/sitemap.test.ts`                                        | Verify new test passes                             |

## Tasks

### 1. Audit Design Goal 1 — Single source for every colour

Run the zero-remaining-hardcoded-RGBA sweep:

```bash
grep -rn 'rgba(43,31,22\|rgba(58,44,31\|rgba(255,252,247' \
  --include='*.tsx' --include='*.ts' \
  | grep -v 'globals.css' \
  | grep -v 'image-focus-map.ts'
```

**Pass criteria:** Zero lines, or only values that are documented one-offs
with an inline comment explaining why.

Also verify:

- `:root` in `globals.css` contains all `--ink-*`, `--muted-*`,
  `--surface-warm-*`, `--overlay`, `--tooltip-bg` tokens
- `homeTokens` has `ink`, `muted`, `surface`, and `radius` sub-objects
- `homePillStyles` references CSS variables, not raw RGBA

### 2. Audit Design Goal 2 — One component per file

Verify the file split:

```bash
ls components/content/home/
```

**Expected files:**

- `editorial-home.tsx`
- `home-design-system.tsx`
- `home-shared.tsx`
- `opening-section.tsx`
- `chronology-section.tsx`
- `reading-model-section.tsx`
- `scenes-section.tsx`

**Must NOT exist:** `editorial-home-sections.tsx`

```bash
grep -rn 'editorial-home-sections' --include='*.tsx' --include='*.ts'
```

Expected: zero results.

### 3. Audit Design Goal 3 — Consistent className composition

```bash
grep -rn 'className={`' --include='*.tsx' components/ app/
```

**Pass criteria:** Zero lines.

Spot-check that `cn()` is imported and used in:

- `narrative-card.tsx`
- `chapter-section.tsx`
- `editorial-aside.tsx`
- `site-footer.tsx`
- All four section files

### 4. Audit Design Goal 4 — Standardised radius scale

```bash
grep -rn 'rounded-\[' --include='*.tsx' components/
```

Every occurrence should use one of the four scale values:

- `rounded-[1.2rem]` (sm)
- `rounded-[1.45rem]` (md)
- `rounded-2xl` (lg — no bracket needed)
- `rounded-[1.75rem]` (xl)

Any value outside this set is a QA failure unless documented.

### 5. Audit Design Goal 5 — Next.js App Router completeness

Verify existence and correctness of:

```bash
test -f app/eras/layout.tsx && echo "✓ era layout" || echo "✗ MISSING"
test -f app/error.tsx && echo "✓ root error" || echo "✗ MISSING"
test -f app/eras/error.tsx && echo "✓ era error" || echo "✗ MISSING"
test -f app/sitemap.ts && echo "✓ sitemap" || echo "✗ MISSING"
test -f app/robots.ts && echo "✓ robots" || echo "✗ MISSING"
```

Verify:

- Era layout wraps children in `<main className="page-shell exemplar-shell">`
- No era page still has its own `<main>` wrapper
- Error boundaries are `"use client"` components
- Sitemap lists at least 11 routes
- Robots allows `/` and disallows `/api/`

### 6. Audit Design Goal 6 — Zero visual regression

Run the full test suite:

```bash
npx vitest run tests/app/homepage.test.tsx
npm run test:browser:homepage
npx vitest run tests/app/sitemap.test.ts
```

All tests must pass without modification (except the new sitemap test).

### 7. Audit `OpeningSection` prop simplification

Read `opening-section.tsx` and confirm:

- Props are derived from `HomePageContent["opening"]` type
- No more than 2 top-level prop fields (the spread opening fields + `openingTypeScale`)
- `editorial-home.tsx` uses `{...homepage.opening}` spread

### 8. Full build verification

```bash
npx tsc --noEmit
npm run build
```

Both must succeed cleanly.

### 9. Fix inconsistencies

Apply minimal fixes for any failures found in Tasks 1–8. Each fix must:

- Reference the specific Design Goal or checklist item it addresses
- Be the smallest possible change
- Not introduce new features or refactors

After fixes, re-run relevant verification steps.

### 10. Populate QA Deviations in Sprint 0–3 docs

For each sprint doc, if the implementation deviated from the plan (alternate
approach, skipped sub-task, extra work needed), record it in that sprint's
**QA Deviations** section with:

- What the plan said
- What actually happened
- Why the deviation was acceptable

## Completion Checklist

- [ ] Design Goal 1 audit passed — zero hardcoded RGBA outside `globals.css`
- [ ] Design Goal 2 audit passed — monolith deleted, 6 files in `home/`
- [ ] Design Goal 3 audit passed — zero template-literal classNames
- [ ] Design Goal 4 audit passed — all radii use the 4-value scale
- [ ] Design Goal 5 audit passed — all 5 Next.js files exist and are correct
- [ ] Design Goal 6 audit passed — all tests green, build succeeds
- [ ] `OpeningSection` prop simplification verified
- [ ] QA Deviations populated in Sprint 0–3 docs
- [ ] Final `npx tsc --noEmit` clean
- [ ] Final `npm run build` clean

## QA Deviations

- **DG1 one-offs** — 3 hardcoded RGBA values remain as documented one-offs (1 in button.tsx, 2 in chronology-section.tsx). All are at opacities outside the token scale (0.08, 0.16) and serve unique structural purposes. Documented in Sprint 0 QA Deviations.
- **All other DG audits** — Passed with zero issues.
