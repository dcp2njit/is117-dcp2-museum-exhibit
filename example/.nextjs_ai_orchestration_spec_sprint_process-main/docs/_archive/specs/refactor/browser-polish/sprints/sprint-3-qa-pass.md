# Sprint 3 — QA Pass

## Header

- **Goal:** Verify all 4 design goals from the spec against the implemented
  codebase. Confirm zero visual regression, audit browser feature adoption,
  and document any deviations from the spec.
- **Spec sections:** All design goals (1–4)
- **Prerequisite:** Sprint 2 committed (accessibility + focus states)
- **Expected test count:** All existing tests pass; no new tests

## Tasks

### 1. Design Goal 1 — Single source for every repeating pattern

Audit every file in scope for remaining DRY violations:

```bash
# Inline eyebrow patterns that bypass HomeEyebrow
grep -rn 'font-semibold uppercase tracking' components/content/home/*.tsx \
  components/site/*.tsx | grep -v 'HomeEyebrow\|homeEyebrowStyles\|homePillStyles'

# Hardcoded gradients that bypass tokens
grep -rn 'linear-gradient' components/content/home/*.tsx components/site/*.tsx \
  | grep -v 'var(--gradient'

# Raw RGBA in scrollbar utility
grep -n 'rgba' app/globals.css | grep -i 'scrollbar'

# hover:-translate-y-0.5 outside homeTokens.hoverLift
grep -rn 'hover:-translate-y-0.5' components/ | grep -v 'homeTokens\|home-design-system'
```

**Pass criteria:** No unexpected hits. Known acceptable exceptions:

- `homePillStyles` uses its own `tracking-[0.18em]` (it's a pill, not an eyebrow)
- `site-header.tsx` eyebrows kept inline (tracking `0.26em` is header-specific)
- `site-footer.tsx` L98 eyebrow kept inline (tracking `0.22em` footer-specific)
- One-off gradients for `html` / `body` background in globals.css (decorative, not
  component-level tokens)

### 2. Design Goal 2 — Progressive enhancement browser features

Verify each feature is present:

```bash
# text-wrap: balance on headings
grep -n 'text-wrap: balance' app/globals.css

# prefers-reduced-motion
grep -n 'prefers-reduced-motion' app/globals.css

# scrollbar-gutter
grep -n 'scrollbar-gutter' app/globals.css

# content-visibility
grep -n 'content-visibility\|content-auto' app/globals.css
grep -rn 'content-auto' components/content/home/editorial-home.tsx
```

**Pass criteria:** All four features present. No leftover per-element
`text-balance` on `<h1>`–`<h4>` tags (moved to global CSS rule).

Verify removed `text-balance`:

```bash
grep -rn 'text-balance' components/ --include='*.tsx'
```

Should return zero results for heading elements. May still appear on
non-heading elements (like `<p>` or `<span>` used as visual headings) — those
are acceptable.

### 3. Design Goal 3 — Keyboard navigation parity

Manual keyboard test:

1. Open the homepage in a browser
2. Press Tab repeatedly from top to bottom
3. Verify:
   - [ ] Every link and button shows a visible focus ring
   - [ ] Ring uses accent colour (`#a2472b` or `var(--accent)`)
   - [ ] Ring has a visible gap (offset) from the element
   - [ ] Ring is visible on both light and dark backgrounds
   - [ ] No double-ring on `Button asChild` + `Link` combos
   - [ ] Ring follows card shape reasonably (doesn't clip or look broken)

### 4. Design Goal 4 — Zero visual regression

Compare current render to pre-sprint-0 state:

1. Run `npm run build` — expect 16 pages, 0 errors
2. Run `npx vitest run tests/app/homepage.test.tsx` — expect 1 pass
3. Run `npm run test:browser:homepage` — expect all Playwright tests pass
4. Visual spot-check at 390px, 768px, 1024px, 1440px:
   - [ ] Gradients render identically (token swap is transparent)
   - [ ] Headings wrap identically (global `text-wrap: balance` matches
         per-element `text-balance`)
   - [ ] Scrollbar still appears on mobile carousel
   - [ ] No layout shift from `scrollbar-gutter: stable`
   - [ ] Below-fold sections render when scrolled into view
         (`content-visibility: auto` doesn't cause flash or blank space)

### 5. Update previous sprint QA Deviation sections

Go back to each sprint doc and populate the "QA Deviations" section with any
deviations discovered during this pass:

- Sprint 0: eyebrows kept inline in header/footer (tracking differences)
- Sprint 1: any `text-balance` that couldn't be removed
- Sprint 2: any focus ring visual issues

### 6. Run full verification suite

```bash
npx tsc --noEmit
npx vitest run tests/app/homepage.test.tsx
npm run test:browser:homepage
npm run build
```

All must pass.

## Completion Checklist

- [ ] Design Goal 1 audit complete — DRY violations resolved or documented
- [ ] Design Goal 2 audit complete — all 4 browser features present
- [ ] Design Goal 3 audit complete — keyboard navigation tested
- [ ] Design Goal 4 audit complete — zero visual regression confirmed
- [ ] All sprint doc QA Deviation sections populated
- [ ] `npx tsc --noEmit` clean
- [ ] `npx vitest run tests/app/homepage.test.tsx` passes
- [ ] `npm run test:browser:homepage` passes
- [ ] `npm run build` — 16 pages

## QA Deviations

_(Populated during this sprint's execution)_
