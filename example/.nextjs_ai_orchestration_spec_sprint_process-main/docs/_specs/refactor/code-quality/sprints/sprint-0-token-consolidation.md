# Sprint 0 — Token Consolidation

## Header

- **Goal:** Extract every hardcoded colour and border-radius value into CSS
  custom properties and `homeTokens` entries so that the codebase has a single
  source of truth for each visual constant.
- **Spec sections:** Design Goals 1, 4; Architecture → Token System
- **Prerequisite:** None (first sprint)
- **Expected test count:** Existing count + 0 new (pure refactor, no behaviour change)

## Available Assets

| Asset                                                               | Signature / Location                                                                                                                | How this sprint uses it                               |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `app/globals.css`                                                   | `:root { --background, --foreground, --surface, --surface-border, --accent, --accent-strong, --frame-width, --reading-width }`      | Add new CSS custom properties alongside existing ones |
| `components/content/home/home-design-system.tsx`                    | `homeTokens` object with `frame`, `stack`, `border`, `softBorder`, `warmShadow`, `compactCardGrid`, `supportCardGrid`, `promptGrid` | Extend with colour, text, and radius tokens           |
| `components/content/home/editorial-home-sections.tsx`               | 507 lines; 43 `rgba(43,31,22,…)` refs, 12 `rgba(255,252,247,…)` refs, 6 custom radius values                                        | Replace all hardcoded values with token references    |
| `components/ui/card.tsx`                                            | `rounded-[1.75rem]`, `shadow-[…]`, `text-[rgba(58,44,31,0.76)]`                                                                     | Replace values with tokens                            |
| `components/ui/dialog.tsx`                                          | `rounded-[1.75rem]`, `bg-[rgba(17,12,8,0.62)]`, `text-[rgba(58,44,31,0.78)]`                                                        | Replace values with tokens                            |
| `components/ui/accordion.tsx`                                       | `border-[rgba(68,44,26,0.12)]`, `text-[rgba(58,44,31,0.78)]`                                                                        | Replace values with tokens                            |
| `components/ui/separator.tsx`                                       | `bg-[rgba(68,44,26,0.12)]`                                                                                                          | Replace with token                                    |
| `components/ui/tooltip.tsx`                                         | `bg-[rgba(28,21,16,0.94)]`, `border-(--surface-border)`                                                                             | Replace bg value with token                           |
| `components/ui/panel.tsx`                                           | `shadow-[0_18px_52px_rgba(56,38,24,0.05)]`, `border-(--surface-border)`, `bg-[rgba(255,252,247,0.92)]`                              | Replace values with tokens                            |
| `components/site/site-header.tsx`                                   | `text-[rgba(43,31,22,0.9)]`                                                                                                         | Replace with token                                    |
| `components/site/site-footer.tsx`                                   | Uses `homeTokens.border` but also has inline `text-[rgba(43,31,22,0.84)]`, `text-[rgba(43,31,22,0.72)]`                             | Replace inline values with tokens                     |
| `components/content/home/home-design-system.tsx` → `homePillStyles` | Inline `border-[rgba(43,31,22,0.1)]`, `bg-[rgba(255,252,247,0.74)]`, `text-[rgba(43,31,22,0.72)]`                                   | Replace with token refs                               |

## Tasks

### 1. Define CSS custom properties

Add colour tokens to `:root` in `app/globals.css`, immediately below the
existing custom properties block:

```css
:root {
  /* existing properties stay unchanged */

  /* ink scale — rgba(43,31,22,α) at common opacities */
  --ink-10: rgba(43, 31, 22, 0.1);
  --ink-12: rgba(43, 31, 22, 0.12);
  --ink-18: rgba(43, 31, 22, 0.18);
  --ink-70: rgba(43, 31, 22, 0.7);
  --ink-72: rgba(43, 31, 22, 0.72);
  --ink-74: rgba(43, 31, 22, 0.74);
  --ink-84: rgba(43, 31, 22, 0.84);
  --ink-90: rgba(43, 31, 22, 0.9);

  /* muted text — rgba(58,44,31,α) */
  --muted-70: rgba(58, 44, 31, 0.7);
  --muted-76: rgba(58, 44, 31, 0.76);
  --muted-78: rgba(58, 44, 31, 0.78);

  /* surface scale */
  --surface-warm-70: rgba(255, 252, 247, 0.7);
  --surface-warm-74: rgba(255, 252, 247, 0.74);
  --surface-warm-92: rgba(255, 252, 247, 0.92);
  --surface-warm-94: rgba(255, 252, 247, 0.94);
  --surface-warm-97: rgba(255, 252, 247, 0.97);
  --surface-warm-98: rgba(255, 252, 247, 0.98);

  /* overlay / dark surfaces */
  --overlay: rgba(17, 12, 8, 0.62);
  --tooltip-bg: rgba(28, 21, 16, 0.94);
  --dark-card-from: rgba(62, 43, 30, 0.98);
  --dark-card-to: rgba(113, 74, 44, 0.94);
}
```

**Verify:**

```bash
npx tsc --noEmit
npm run build
```

### 2. Extend `homeTokens` with colour and radius tokens

In `components/content/home/home-design-system.tsx`, extend the `homeTokens`
object:

```ts
export const homeTokens = {
  // existing entries unchanged
  frame: "mx-auto w-full max-w-(--frame-width)",
  stack: "flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-14",
  border: "border-(--ink-12)", // was border-[rgba(43,31,22,0.12)]
  softBorder: "border-(--ink-10)", // was border-[rgba(43,31,22,0.1)]
  warmShadow: "shadow-[0_18px_52px_rgba(56,38,24,0.05)]",
  compactCardGrid: "…",
  supportCardGrid: "…",
  promptGrid: "…",

  // new colour tokens
  ink: {
    border: "border-(--ink-12)",
    softBorder: "border-(--ink-10)",
    hoverBorder: "hover:border-(--ink-18)",
    text72: "text-(--ink-72)",
    text74: "text-(--ink-74)",
    text84: "text-(--ink-84)",
    text90: "text-(--ink-90)",
  },
  muted: {
    text70: "text-(--muted-70)",
    text76: "text-(--muted-76)",
    text78: "text-(--muted-78)",
  },
  surface: {
    warm92: "bg-(--surface-warm-92)",
    warm94: "bg-(--surface-warm-94)",
    warm97: "bg-(--surface-warm-97)",
    warm98: "bg-(--surface-warm-98)",
    warm70: "bg-(--surface-warm-70)",
    warm74: "bg-(--surface-warm-74)",
  },

  // radius scale
  radius: {
    sm: "rounded-[1.2rem]",
    md: "rounded-[1.45rem]",
    lg: "rounded-2xl",
    xl: "rounded-[1.75rem]",
  },
} as const;
```

Update existing `homeTokens.border` and `homeTokens.softBorder` to use the
CSS variable forms. This is a backwards-compatible change since all consumers
reference the token entry, not the raw value.

Also update `homePillStyles` in the same file to reference the new tokens
instead of inline RGBA values.

**Verify:**

```bash
npx tsc --noEmit
```

### 3. Replace hardcoded colours in `editorial-home-sections.tsx`

Work through the file and replace every inline `rgba(43,31,22,…)`,
`rgba(255,252,247,…)`, and `rgba(58,44,31,…)` with the corresponding CSS
variable or `homeTokens` entry.

Key substitutions:

| Old value                            | New value                 |
| ------------------------------------ | ------------------------- |
| `border-[rgba(43,31,22,0.12)]`       | `border-(--ink-12)`       |
| `border-[rgba(43,31,22,0.1)]`        | `border-(--ink-10)`       |
| `hover:border-[rgba(43,31,22,0.18)]` | `hover:border-(--ink-18)` |
| `text-[rgba(43,31,22,0.74)]`         | `text-(--ink-74)`         |
| `text-[rgba(43,31,22,0.72)]`         | `text-(--ink-72)`         |
| `text-[rgba(43,31,22,0.7)]`          | `text-(--ink-70)`         |
| `bg-[rgba(255,252,247,0.92)]`        | `bg-(--surface-warm-92)`  |
| `bg-[rgba(255,252,247,0.7)]`         | `bg-(--surface-warm-70)`  |
| `bg-[rgba(255,252,247,0.98)]`        | `bg-(--surface-warm-98)`  |
| `bg-[rgba(255,252,247,0.94)]`        | `bg-(--surface-warm-94)`  |
| `bg-[rgba(255,252,247,0.97)]`        | `bg-(--surface-warm-97)`  |

Also replace ad-hoc border-radius values with `homeTokens.radius.*` entries:

| Old value           | New token              |
| ------------------- | ---------------------- |
| `rounded-[1.25rem]` | `homeTokens.radius.sm` |
| `rounded-[1.2rem]`  | `homeTokens.radius.sm` |
| `rounded-[1.45rem]` | `homeTokens.radius.md` |
| `rounded-2xl`       | `homeTokens.radius.lg` |
| `rounded-[1.6rem]`  | `homeTokens.radius.md` |
| `rounded-[1.85rem]` | `homeTokens.radius.lg` |

**The `mosaicVariantStyles` object** should reference tokens instead of inline
RGBA. Extract the shared base into a variable:

```ts
const mosaicBase = `${homeTokens.radius.lg} border ${homeTokens.softBorder} hover:-translate-y-0.5 ${homeTokens.ink.hoverBorder}`;
```

**Verify:**

```bash
npx tsc --noEmit
npx vitest run tests/app/homepage.test.tsx
npm run test:browser:homepage
```

### 4. Replace hardcoded colours in UI primitives

Apply the same substitutions in:

- `components/ui/card.tsx` — replace `rounded-[1.75rem]` with
  `homeTokens.radius.xl` (imported), replace `text-[rgba(58,44,31,0.76)]`
  with `text-(--muted-76)`, replace shadow hex values.
- `components/ui/dialog.tsx` — replace `rounded-[1.75rem]`, replace
  `bg-[rgba(17,12,8,0.62)]` with `bg-(--overlay)`, replace
  `text-[rgba(58,44,31,0.78)]` with `text-(--muted-78)`.
- `components/ui/accordion.tsx` — replace `border-[rgba(68,44,26,0.12)]`
  with `border-(--surface-border)`, replace `text-[rgba(58,44,31,0.78)]`
  with `text-(--muted-78)`.
- `components/ui/separator.tsx` — replace `bg-[rgba(68,44,26,0.12)]` with
  `bg-(--surface-border)`.
- `components/ui/tooltip.tsx` — replace `bg-[rgba(28,21,16,0.94)]` with
  `bg-(--tooltip-bg)`.
- `components/ui/panel.tsx` — replace shadow and surface values with tokens.

Note: UI primitives should import `homeTokens` only for the radius scale.
Colour substitutions use CSS variable syntax directly (`border-(--ink-12)`)
so these components do not need to import `homeTokens` for colours.

**Verify:**

```bash
npx tsc --noEmit
npm run build
```

### 5. Replace hardcoded colours in site-header and site-footer

- `components/site/site-header.tsx` — replace `text-[rgba(43,31,22,0.9)]`
  with `text-(--ink-90)`.
- `components/site/site-footer.tsx` — replace inline
  `text-[rgba(43,31,22,0.84)]` with `text-(--ink-84)`, replace
  `text-[rgba(43,31,22,0.72)]` with `text-(--ink-72)`.

**Verify:**

```bash
npx tsc --noEmit
npx vitest run tests/app/homepage.test.tsx
npm run test:browser:homepage
```

### 6. Final sweep — zero remaining hardcoded RGBA

Run a grep to confirm no `rgba(43,31,22` or `rgba(58,44,31` or
`rgba(255,252,247` remain outside of `globals.css` (where the tokens are
defined) and the generated `image-focus-map.ts` (which is script-managed).

```bash
grep -rn 'rgba(43,31,22\|rgba(58,44,31\|rgba(255,252,247' \
  --include='*.tsx' --include='*.ts' \
  | grep -v 'globals.css' \
  | grep -v 'image-focus-map.ts'
```

Expected output: zero lines (or only values that are genuinely one-off and
documented).

**Verify:**

```bash
npx vitest run tests/app/homepage.test.tsx
npm run test:browser:homepage
npm run build
```

## Completion Checklist

- [ ] CSS custom properties added to `:root` in `globals.css`
- [ ] `homeTokens` extended with `ink`, `muted`, `surface`, and `radius` sub-objects
- [ ] `homePillStyles` updated to use token variables
- [ ] All 43+ `rgba(43,31,22,…)` occurrences replaced outside `globals.css`
- [ ] All 12 `rgba(255,252,247,…)` occurrences replaced outside `globals.css`
- [ ] All 6 `rgba(58,44,31,…)` occurrences replaced outside `globals.css`
- [ ] All ad-hoc `rounded-[…]` values mapped to `homeTokens.radius.*`
- [ ] `mosaicVariantStyles` uses shared base string with tokens
- [ ] UI primitives (`card`, `dialog`, `accordion`, `separator`, `tooltip`, `panel`) use tokens
- [ ] Site header and footer use tokens
- [ ] Grep sweep confirms zero remaining hardcoded RGBA in components
- [ ] All existing tests pass without modification
- [ ] Production build succeeds

## QA Deviations

- **`button.tsx` border** — Plan called for zero remaining hardcoded RGBA. `border-[rgba(43,31,22,0.16)]` was left as a documented one-off because 0.16 opacity has no matching token in the ink scale. Acceptable: unique button border colour.
- **`chronology-section.tsx` gap backgrounds** — Two `bg-[rgba(43,31,22,0.08)]` values were left as documented one-offs. These are structural gap colours for the `gap-px` pattern at 0.08 opacity, outside the token scale. Acceptable: visual trick, not a semantic colour.
