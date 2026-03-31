# Sprint 1 — Design System Foundation

## Header

- Goal: establish the first reusable design system layer with project-wide
  tokens, typography direction, shared utilities, and a small set of accessible
  UI primitives.
- Spec sections:
  - Design Goals 1, 3, 5, 6
  - Architecture: Application Platform, Design System Foundation, Rendering
    Model
  - Security: Accessible Public UI
  - Testing Strategy: Accessibility-Oriented Component Confidence
- Prerequisite: `feat: implement Sprint 0 — Next.js scaffold`
- Expected test count: `1 existing + 2 new = 3 total`

## Available Assets

This sprint is authored before Sprint 0 is implemented. During Sprint Doc QA,
replace any placeholder file assumptions below with the exact file names and
signatures produced by the Sprint 0 commit.

| Asset             | Expected verified details at QA time   | How this sprint uses it                             |
| ----------------- | -------------------------------------- | --------------------------------------------------- |
| `app/layout.tsx`  | Root layout created in Sprint 0        | Adds typography and shared shell wiring             |
| `app/page.tsx`    | Project-specific homepage shell exists | Adopts shared components                            |
| `app/globals.css` | Global Tailwind styles exist           | Defines tokens and baseline typography styles       |
| `package.json`    | Contains Sprint 0 scripts              | Adds UI dependencies and preserves quality commands |
| `tests/`          | Contains homepage smoke test           | Extends test coverage for shared UI primitives      |

## Tasks

### 1. Install and configure the UI foundation dependencies

Add the minimum shared UI dependencies required for a scalable component layer.

Expected additions:

- shadcn/ui initialization support
- Radix UI packages only for primitives actually used in this sprint
- utility helpers for class composition, such as `clsx`, `tailwind-merge`, and
  `class-variance-authority`

Key implementation details:

- Do not add a broad component inventory.
- Only install Radix packages needed by the initial shared primitives.
- Keep ownership of generated components in the repository.

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Establish global design tokens and typography baseline

Update the global styling layer so future pages share consistent visual rules.

Create or update:

- `app/globals.css`
- any font-loading logic in `app/layout.tsx`

Required outcomes:

- named color, spacing, radius, and surface tokens exist
- typography is tuned for a reading-heavy editorial site
- the theme is intentional and not default starter styling
- global focus states and selection styling are coherent

Verify:

```bash
npm run build
```

### 3. Add shared layout and utility primitives

Create a small reusable base layer.

Create:

- `lib/utils.ts` with the canonical class-name merge helper
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/layout/site-header.tsx`
- `components/layout/site-footer.tsx`

Key implementation details:

- Use accessible semantics.
- Keep component APIs small and conventional.
- Ensure the shared components support the editorial direction of the site.

Verify:

```bash
npm run lint
npm run typecheck
```

### 4. Apply the shared components to the existing app shell

Refactor the homepage and root shell to use the new shared primitives.

Update:

- `app/layout.tsx`
- `app/page.tsx`

Required outcomes:

- the root app shell uses shared header and footer components
- the homepage uses the shared button and card patterns where appropriate
- the visual result is more intentional without overbuilding the full site

Verify:

```bash
npm run build
```

### 5. Add targeted UI tests

Create two focused tests:

- one validating a shared UI primitive renders correctly
- one validating an accessibility-relevant shared layout element, such as the
  header navigation landmark

Recommended locations:

- `tests/components/button.test.tsx`
- `tests/layout/site-header.test.tsx`

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Shared UI dependencies are installed and minimal
- [ ] Global tokens and typography baseline exist
- [ ] `lib/utils.ts` provides shared class merging
- [ ] Shared button, card, header, and footer components exist
- [ ] The app shell uses the shared components
- [ ] Two new UI-focused tests pass
- [ ] `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` all pass

## QA Deviations

None.
