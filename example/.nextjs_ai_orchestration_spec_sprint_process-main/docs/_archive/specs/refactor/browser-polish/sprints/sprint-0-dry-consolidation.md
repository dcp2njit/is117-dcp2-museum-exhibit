# Sprint 0 — DRY Consolidation

## Header

- **Goal:** Eliminate inline eyebrow patterns in favour of `HomeEyebrow`,
  tokenize repeated gradients as CSS custom properties, extract the shared
  card-hover pattern into `homeTokens`, and replace raw RGBA values in the
  `.scrollbar-thin` utility with token references.
- **Spec sections:** Design Goals 1, 4; Architecture → Gradient Tokens,
  Hover Token, Eyebrow Consolidation
- **Prerequisite:** None (first sprint)
- **Expected test count:** Existing count + 0 new (pure refactor)

## Available Assets

| Asset                       | Location                                              | Current State                                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app/globals.css`           | `:root` block (L1–L47), `.scrollbar-thin` (L119–L135) | Token system already has `--ink-*`, `--muted-*`, `--surface-warm-*`; scrollbar uses raw `rgba(43,31,22,0.18)` and `rgba(43,31,22,0.2)`                                                  |
| `home-design-system.tsx`    | 182 lines                                             | Exports `homeTokens`, `HomeEyebrow`, `homeEyebrowStyles`, `homePillStyles`, `HomeInsightCard`, `HomeRouteAction`, `mosaicVariantStyles`                                                 |
| `opening-section.tsx`       | 188 lines                                             | L112: inline eyebrow `<p>` with `font-semibold uppercase tracking-[0.28em]` + `style={{ fontSize }}`. L142: inline `text-white/68` eyebrow. L148: theme pills.                          |
| `reading-model-section.tsx` | 94 lines                                              | L52: inline eyebrow `<p className="text-white/62 text-[0.72rem] font-semibold uppercase tracking-[0.28em]">`                                                                            |
| `chronology-section.tsx`    | 96 lines                                              | L42: gradient `bg-[linear-gradient(180deg,rgba(251,246,240,0.98),rgba(244,236,228,0.94))]`. L17: gradient `bg-[linear-gradient(180deg,var(--surface-warm-98),rgba(248,242,236,0.92))]`. |
| `site-footer.tsx`           | 129 lines                                             | L98: inline eyebrow `<p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--accent-strong)">`                                                                   |
| `site-header.tsx`           | 65 lines                                              | L12, L26, L44: three inline eyebrows `text-(--accent-strong) text-[0.69rem] font-semibold uppercase tracking-[0.26em]`                                                                  |
| `mosaicVariantStyles`       | `home-design-system.tsx` L139–L180                    | Feature container: `bg-[linear-gradient(180deg,var(--surface-warm-98),rgba(247,241,234,0.9))]`. Support: `bg-[linear-gradient(180deg,var(--surface-warm-92),rgba(248,243,237,0.82))]`.  |

## Tasks

### 1. Add gradient tokens to `:root`

In `app/globals.css`, add a new gradient section after the `--dark-card-*`
block and before the closing `}`:

```css
/* gradient tokens */
--gradient-warm-panel: linear-gradient(
  180deg,
  rgba(251, 246, 240, 0.98),
  rgba(244, 236, 228, 0.94)
);
--gradient-warm-card: linear-gradient(
  180deg,
  var(--surface-warm-98),
  rgba(248, 242, 236, 0.92)
);
--gradient-warm-feature: linear-gradient(
  180deg,
  var(--surface-warm-98),
  rgba(247, 241, 234, 0.9)
);
--gradient-warm-support: linear-gradient(
  180deg,
  var(--surface-warm-92),
  rgba(248, 243, 237, 0.82)
);
--gradient-dark-reading: linear-gradient(
  180deg,
  rgba(69, 31, 24, 0.99),
  rgba(28, 19, 15, 0.99)
);
--gradient-image-overlay: linear-gradient(
  180deg,
  transparent,
  rgba(17, 12, 8, 0.88)
);
```

**Verify:** `npx tsc --noEmit` passes. Page renders identically.

### 2. Replace hardcoded gradients with token references

Replace each inline gradient string with the corresponding `bg-[var(--gradient-…)]` token:

| File                        | Line              | Old gradient                                                                 | New class                            |
| --------------------------- | ----------------- | ---------------------------------------------------------------------------- | ------------------------------------ |
| `chronology-section.tsx`    | L42               | `bg-[linear-gradient(180deg,rgba(251,246,240,0.98),rgba(244,236,228,0.94))]` | `bg-[var(--gradient-warm-panel)]`    |
| `chronology-section.tsx`    | L17               | `bg-[linear-gradient(180deg,var(--surface-warm-98),rgba(248,242,236,0.92))]` | `bg-[var(--gradient-warm-card)]`     |
| `home-design-system.tsx`    | feature.container | `bg-[linear-gradient(180deg,var(--surface-warm-98),rgba(247,241,234,0.9))]`  | `bg-[var(--gradient-warm-feature)]`  |
| `home-design-system.tsx`    | support.container | `bg-[linear-gradient(180deg,var(--surface-warm-92),rgba(248,243,237,0.82))]` | `bg-[var(--gradient-warm-support)]`  |
| `reading-model-section.tsx` | L44               | `bg-[linear-gradient(180deg,rgba(69,31,24,0.99),rgba(28,19,15,0.99))]`       | `bg-[var(--gradient-dark-reading)]`  |
| `opening-section.tsx`       | L62               | `bg-[linear-gradient(180deg,transparent,rgba(17,12,8,0.88))]`                | `bg-[var(--gradient-image-overlay)]` |

**Verify:** `npx tsc --noEmit` passes. `npx vitest run tests/app/homepage.test.tsx` passes.

### 3. Add hover-lift token to `homeTokens`

In `home-design-system.tsx`, add to the `homeTokens` object:

```ts
hoverLift: "transition hover:-translate-y-0.5 hover:border-(--ink-18)",
```

Then use it in `mosaicVariantStyles` where feature, support, and strip
containers include the pattern. Also use it in `ChronologyCard` in
`chronology-section.tsx`.

**Note:** Some cards add `hover:bg-white` in addition — that stays inline
since it's card-specific.

**Verify:** Grep for `hover:-translate-y-0.5` — should only appear in
`homeTokens.hoverLift` definition, not in component files.

### 4. Replace inline eyebrows with `HomeEyebrow`

#### 4a. `reading-model-section.tsx` L52

**Old:**

```tsx
<p className="text-white/62 text-[0.72rem] font-semibold uppercase tracking-[0.28em]">
  {heading.eyebrow}
</p>
```

**New:**

```tsx
<HomeEyebrow tone="inverse" scale="section">
  {heading.eyebrow}
</HomeEyebrow>
```

The `text-white/62` tone is close to the `inverse` variant's `text-white/62`.
Check `homeEyebrowStyles` inverse variant — it uses `text-white/62` and
section scale uses `text-[0.72rem] tracking-[0.28em]`, so this is an exact
match.

#### 4b. `opening-section.tsx` L112

**Old:**

```tsx
<p className="text-(--accent-strong) font-semibold uppercase tracking-[0.28em]" style={{ fontSize: "var(--opening-step-negative-1)" }}>
```

**New:**

```tsx
<HomeEyebrow
  scale="section"
  style={{ fontSize: "var(--opening-step-negative-1)" }}
>
  {eyebrow}
</HomeEyebrow>
```

**Prerequisite:** Add optional `style` prop to `HomeEyebrow` component:

```tsx
export function HomeEyebrow({
  children,
  className,
  tone,
  scale,
  style,
}: {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "inverse";
  scale?: "compact" | "default" | "section";
  style?: React.CSSProperties;
}) {
  return (
    <p
      className={cn(homeEyebrowStyles({ tone, scale }), className)}
      style={style}
    >
      {children}
    </p>
  );
}
```

#### 4c. `opening-section.tsx` L142

**Old:**

```tsx
<p className="text-[0.69rem] font-semibold uppercase tracking-[0.24em] text-white/68">
  {publicAiCard.eyebrow}
</p>
```

**New:**

```tsx
<HomeEyebrow tone="inverse" className="text-white/68">
  {publicAiCard.eyebrow}
</HomeEyebrow>
```

The default scale uses `text-[0.69rem] tracking-[0.24em]` which matches.
The `text-white/68` override is slightly different from the inverse default
`text-white/62`, so it goes in `className`.

#### 4d. `site-footer.tsx` L98

**Old:**

```tsx
<p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--accent-strong)">
  {item.eyebrow}
</p>
```

**New:**

The tracking `[0.22em]` doesn't match any existing scale exactly (section is
`[0.28em]`, default is `[0.24em]`, compact is `[0.2em]`). Rather than adding
a new scale variant for one site, keep this inline OR use the closest match
(compact at `0.2em`) with a size override. **Decision: leave as-is** — this
is in the footer, not a homepage component, and the tracking difference is
intentional for the smaller footer density. Document as a QA deviation.

#### 4e. `site-header.tsx` L12, L26, L44

Three identical patterns: `text-(--accent-strong) text-[0.69rem] font-semibold uppercase tracking-[0.26em]`

The tracking `[0.26em]` doesn't match any scale exactly. Header eyebrows use
a slightly different tracking than home eyebrows by design. **Decision:
leave as-is.** Header typography is intentionally distinct from home section
typography. Document as a QA deviation.

### 5. Replace raw RGBA in `.scrollbar-thin`

In `app/globals.css`, replace:

```css
scrollbar-color: rgba(43, 31, 22, 0.18) transparent;
```

with:

```css
scrollbar-color: var(--ink-18) transparent;
```

And replace the `-webkit-scrollbar-thumb` background:

```css
background: rgba(43, 31, 22, 0.2);
```

with (add `--ink-20` if needed, or use `--ink-18` since 0.18 ≈ 0.2):

```css
background: var(--ink-18);
```

**Verify:** Carousel scrollbar still visible on mobile.

## Completion Checklist

- [ ] Gradient tokens added to `:root` (6 new custom properties)
- [ ] All 6 hardcoded gradient strings replaced with `var(--gradient-…)` tokens
- [ ] `homeTokens.hoverLift` created and used in mosaic + chronology cards
- [ ] `HomeEyebrow` supports optional `style` prop
- [ ] `reading-model-section.tsx` L52 uses `HomeEyebrow`
- [ ] `opening-section.tsx` L112 uses `HomeEyebrow`
- [ ] `opening-section.tsx` L142 uses `HomeEyebrow`
- [ ] `.scrollbar-thin` uses token refs instead of raw RGBA
- [ ] `npx tsc --noEmit` clean
- [ ] `npx vitest run tests/app/homepage.test.tsx` passes
- [ ] `npm run build` — 16 pages
- [ ] No visual regression (spot-check in browser)

## QA Deviations

_(Populated during implementation)_
