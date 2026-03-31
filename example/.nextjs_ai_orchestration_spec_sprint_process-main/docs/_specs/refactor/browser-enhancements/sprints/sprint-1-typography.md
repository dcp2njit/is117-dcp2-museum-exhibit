# Sprint 1 — Typography Refinement

## Header

- **Goal:** Enable Bodoni Moda's optical sizing axis, add hanging punctuation
  for editorial polish, refine link underline styling, and boost low-opacity
  tokens for users who request high contrast.
- **Spec sections:** Design Goals 2, 5
- **Prerequisite:** Sprint 0 committed (mobile/touch fixes)
- **Expected test count:** Existing count + 0 new (CSS-only changes)

## Available Assets

| Asset                             | Location              | Current State                                                                                                                   |
| --------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `app/globals.css`                 | `body` rule (~L96)    | `font-family: var(--font-body), sans-serif;` — no `font-optical-sizing`                                                         |
| `app/layout.tsx`                  | L11–L24               | Bodoni Moda loaded with weights 500/600/700, IBM Plex Sans with 400–700. Bodoni Moda is a variable font with optical-size axis. |
| `app/globals.css`                 | `@layer base` (~L138) | `a { color: inherit; }` + focus-visible ring. No underline styling.                                                             |
| `app/globals.css`                 | `:root` (~L14–L27)    | `--ink-70` through `--ink-90` — low-opacity variants at 0.70 used for secondary text                                            |
| `app/globals.css`                 | `:root` (~L29–L33)    | `--muted-70` through `--muted-78` — at 0.70 minimum                                                                             |
| `components/content/home/*.tsx`   | Various               | Headings use Bodoni Moda via `font-(family-name:--font-display)`                                                                |
| `components/site/site-footer.tsx` | L8, L53               | Footer links: `no-underline hover:text-(--accent-strong)` — no underline refinement on hover links sitewide                     |
| Legacy CSS                        | `globals.css` L460+   | `.content-link-card` etc have `text-decoration: underline` with no offset/thickness                                             |

## Tasks

### 1. Enable `font-optical-sizing: auto`

In `app/globals.css`, add to the existing `body` rule:

```css
body {
  font-optical-sizing: auto;
  /* existing properties ... */
}
```

**Why:** Bodoni Moda is a variable font that includes the `opsz` (optical
size) axis. With `font-optical-sizing: auto`, the browser automatically
adjusts the letterform design for the rendered size — thickening hairlines at
small sizes and refining contrast at large display sizes. This is critical for
Bodoni, where thin hairlines disappear at body-text sizes.

**Browser support:** Chrome 79+, Safari 11+, Firefox 62+. Universally
supported. Ignored if the font lacks an optical-size axis.

**Verify:** Compare Bodoni Moda at 12px and 48px — at 12px, strokes should be
slightly more uniform; at 48px, high contrast should be preserved.

### 2. Add `hanging-punctuation`

In `app/globals.css`, add a gated rule:

```css
@supports (hanging-punctuation: first) {
  h1,
  h2,
  h3,
  blockquote p {
    hanging-punctuation: first allow-end;
  }
}
```

**Why:** When a heading or pull quote starts with a quotation mark, the
character sits inside the text block, pushing the visual left edge of the
first letter inward. `hanging-punctuation: first` moves opening punctuation
into the margin so the letter edge aligns with the rest of the text.
`allow-end` lets trailing punctuation (periods, commas) hang past the right
edge for optical alignment.

**Browser support:** Safari 10+, Chrome 117+, Firefox — not yet (behind flag).
Falls back gracefully — no visual harm in Firefox, just no optical alignment.

**Verify:** Inspect any heading in the Chronology section — if the text starts
with a quote mark or em-dash, it should hang outside the text box edge.

### 3. Refine link underline styling

In `app/globals.css`, within the existing `@layer base` block, extend the
`a` rule:

```css
@layer base {
  a {
    color: inherit;
    text-underline-offset: 0.15em;
    text-decoration-thickness: 1px;
  }
  /* existing focus-visible rule ... */
}
```

Then add a global hover underline enhancement in the same layer or after it:

```css
@layer base {
  a:hover {
    text-decoration-thickness: 2px;
  }
}
```

**Why:** Browser defaults place underlines too close to the baseline and make
them too thick. `text-underline-offset` lifts the underline for breathing
room. `text-decoration-thickness` starts thin and thickens on hover for a
satisfying interactive feel.

**Note:** Many links in this project use `no-underline` (Tailwind). This rule
only affects links that actually show underlines. The offset and thickness
just improve the default when underlines are visible.

**Browser support:** `text-underline-offset` — Chrome 87+, Safari 12.1+,
Firefox 70+. `text-decoration-thickness` — Chrome 89+, Safari 12.1+,
Firefox 70+. Universal in modern browsers.

### 4. Add `prefers-contrast: more` token overrides

In `app/globals.css`, add after the `prefers-reduced-motion` media query:

```css
@media (prefers-contrast: more) {
  :root {
    --ink-70: rgba(43, 31, 22, 0.92);
    --ink-72: rgba(43, 31, 22, 0.92);
    --ink-74: rgba(43, 31, 22, 0.94);
    --muted-70: rgba(58, 44, 31, 0.92);
    --muted-72: rgba(58, 44, 31, 0.92);
    --surface-border: rgba(68, 44, 26, 0.28);
    --ink-10: rgba(43, 31, 22, 0.22);
    --ink-12: rgba(43, 31, 22, 0.26);
  }
}
```

**Why:** The design uses many low-opacity tokens (`--ink-70` at 70% opacity)
for secondary text. Users who've enabled "Increase contrast" in system
accessibility settings expect higher-contrast ratios. This media query boosts
those tokens to near-opaque and strengthens borders.

**Browser support:** Chrome 96+, Safari 14.1+, Firefox 101+. Progressive
enhancement — non-supporting browsers use default tokens.

**Verify:** In macOS System Settings → Accessibility → Display → "Increase
contrast", the secondary text on the homepage should appear noticeably
darker and borders more defined.

## Completion Checklist

- [ ] `font-optical-sizing: auto` added to `body` rule
- [ ] `@supports (hanging-punctuation: first)` block added
- [ ] `text-underline-offset` and `text-decoration-thickness` set in `@layer base`
- [ ] `@media (prefers-contrast: more)` token overrides added
- [ ] `npx tsc --noEmit` clean
- [ ] `npx vitest run tests/app/homepage.test.tsx` passes
- [ ] `npm run build` succeeds
- [ ] Visual check: Bodoni Moda hairlines at small sizes (should be more visible)
