# Sprint 4 — QA Pass

## Header

- **Goal:** Verify all browser-enhancement features from Sprints 0–3 through
  automated grep audits, build checks, cross-browser manual testing, and a
  reduced-motion accessibility review.
- **Spec sections:** Design Goals 5
- **Prerequisite:** Sprint 3 committed (layout & color)
- **Expected test count:** No new unit tests — this sprint is audit-only

## Tasks

### 1. Grep audit: all `@supports` gates present

Run grep to verify every progressive enhancement is gated:

```bash
grep -n "@supports" app/globals.css
```

**Expected matches (minimum):**

| Feature                           | `@supports` condition                              |
| --------------------------------- | -------------------------------------------------- |
| `:has()` card spotlight           | `selector(:has(*))`                                |
| Scroll-driven entrance animations | `animation-timeline: view()`                       |
| Scroll-driven carousel progress   | `animation-timeline: scroll()`                     |
| Subgrid footer                    | `grid-template-rows: subgrid`                      |
| oklch gradients                   | `background: linear-gradient(in oklch, red, blue)` |
| Backdrop-filter fallback          | `not (backdrop-filter: blur(4px))`                 |
| Safe-area insets                  | `padding: env(safe-area-inset-left)`               |
| Hanging punctuation               | `hanging-punctuation: first`                       |

> **Note:** `@starting-style` is no longer `@supports`-gated — it's an
> at-rule that cannot be tested with `@supports`. Non-supporting browsers
> simply ignore it.

### 2. Grep audit: hover patterns behind media query

```bash
grep -rn "hover:" components/ app/
```

Verify that all `hover:` utilities either:

- Live inside the `.hover-lift` CSS class (which is gated by `@media (hover: hover)`)
- Are intentional always-on hovers (document any exceptions)

### 3. Grep audit: touch/overscroll/safe-area utilities

```bash
grep -rn "touch-action\|overscroll-behavior\|safe-area" app/globals.css components/
```

**Expected matches:**

- `touch-action: pan-x` on carousel scroller
- `overscroll-behavior-x: contain` on carousel scroller
- `overscroll-behavior: contain` on dialog content
- `padding-bottom: env(safe-area-inset-bottom)` on footer
- `padding-left/right: env(safe-area-inset-left/right)` on main

### 4. Grep audit: font and typography features

```bash
grep -n "font-optical-sizing\|hanging-punctuation\|text-underline-offset\|text-decoration-thickness\|prefers-contrast" app/globals.css
```

**Expected matches:**

- `font-optical-sizing: auto` on Bodoni headings
- `hanging-punctuation: first` on `<p>` or appropriate selector
- `text-underline-offset` and `text-decoration-thickness` on link hover
- `prefers-contrast: more` media query with boosted tokens

### 5. Build & type verification

```bash
npx tsc --noEmit && npm run build
```

Both must pass cleanly. No TypeScript errors, no build warnings related to
the new features.

### 6. Unit test pass

```bash
npx vitest run tests/app/homepage.test.tsx
```

All existing tests must continue to pass.

### 7. Cross-browser manual testing checklist

Test on real devices or emulators. Check each feature in the following
matrix:

| Feature                        | Chrome 120+             | Safari 18+              | Firefox 124+            | Mobile Safari         | Chrome Android        |
| ------------------------------ | ----------------------- | ----------------------- | ----------------------- | --------------------- | --------------------- |
| Hover-lift (hover: hover gate) | —                       | —                       | —                       | Must NOT lift on tap  | Must NOT lift on tap  |
| Touch-action carousel          | —                       | —                       | —                       | Smooth horizontal pan | Smooth horizontal pan |
| Safe-area insets               | —                       | —                       | —                       | Check notch padding   | —                     |
| Font optical sizing            | Check glyph quality     | Check glyph quality     | —                       | —                     | —                     |
| Hanging punctuation            | —                       | Check (Safari leads)    | —                       | —                     | —                     |
| `:has()` card spotlight        | Hover → siblings dim    | Hover → siblings dim    | Hover → siblings dim    | —                     | —                     |
| Scroll-driven entrance         | Sections fade in        | Sections fade in        | Fallback (instant)      | Sections fade in      | Sections fade in      |
| `@starting-style` dialog       | Fade + scale entrance   | Fade + scale entrance   | Fallback (instant)      | —                     | —                     |
| `@starting-style` tooltip      | Fade + slide entrance   | Fade + slide entrance   | Fallback (instant)      | —                     | —                     |
| Container queries              | Card layout adapts      | Card layout adapts      | Card layout adapts      | —                     | —                     |
| Subgrid footer                 | Rows align across cols  | Rows align across cols  | Rows align across cols  | —                     | —                     |
| oklch gradients                | Smoother transitions    | Smoother transitions    | Smoother transitions    | —                     | —                     |
| prefers-contrast: more         | Boosted tokens apply    | Boosted tokens apply    | Boosted tokens apply    | —                     | —                     |
| Reduced motion                 | All animations disabled | All animations disabled | All animations disabled | —                     | —                     |

### 8. Reduced-motion accessibility review

1. Enable reduced motion in system preferences
2. Load the homepage
3. Verify:
   - No scroll-driven animations occur
   - Dialog opens instantly (no scale transition)
   - Tooltip appears instantly (no slide)
   - `:has()` spotlight still works (opacity is not animation)
   - Hover-lift still shows border change but NOT translate

### 9. Playwright regression

```bash
npm run test:browser:homepage
```

All existing browser tests must pass. Screenshot comparisons may need
baseline updates if visual changes are significant.

## Completion Checklist

- [ ] All 8 `@supports` gates confirmed via grep
- [ ] All hover patterns verified as gated or documented as exceptions
- [ ] Touch/overscroll/safe-area utilities confirmed present
- [ ] Typography features confirmed present
- [ ] `npx tsc --noEmit` clean
- [ ] `npm run build` succeeds
- [ ] `npx vitest run` passes
- [ ] Cross-browser testing completed (at least Chrome + Safari)
- [ ] Reduced-motion review passed
- [ ] Playwright regression passed
