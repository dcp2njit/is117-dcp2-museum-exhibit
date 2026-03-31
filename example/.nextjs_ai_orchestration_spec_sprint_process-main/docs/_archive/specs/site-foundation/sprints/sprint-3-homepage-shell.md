# Sprint 3 — Homepage Shell

## Header

- Goal: build the first credible public homepage using the shared design system
  and repository-managed content previews.
- Spec sections:
  - Design Goals 2, 3, 4, 5
  - Architecture: Rendering Model, Content Model Foundation, Design System
    Foundation
  - Testing Strategy: Page-Level Smoke Coverage
- Prerequisite: `feat: implement Sprint 2 — content architecture`
- Expected test count: `6 existing + 2 new = 8 total`

## Available Assets

This sprint depends on implemented outputs from Sprints 0 through 2. During
Sprint Doc QA, replace placeholder file assumptions with exact verified assets.

| Asset                    | Expected verified details at QA time                   | How this sprint uses it               |
| ------------------------ | ------------------------------------------------------ | ------------------------------------- |
| `app/layout.tsx`         | Shared shell and metadata baseline exist               | Extends the public site framing       |
| `app/page.tsx`           | Existing placeholder homepage shell exists             | Replaced with the first real homepage |
| `components/`            | Shared layout and UI primitives exist                  | Composes homepage sections            |
| `lib/content/loaders.ts` | Collection loaders return validated summaries          | Powers homepage previews              |
| `content/`               | Example article, milestone, and profile content exists | Supplies first visible site content   |

## Tasks

### 1. Design the homepage information architecture

Define the homepage sections before implementation. The page should introduce
the site and preview the kinds of content readers will explore.

Required sections:

- hero or mission statement
- timeline or milestone preview
- featured people or institutions preview
- topic or reading-path preview
- closing call-to-explore or editorial purpose section

Verify:

```bash
npm run typecheck
```

### 2. Create reusable homepage section components

Create the composed sections needed by the homepage.

Recommended files:

- `components/home/hero-section.tsx`
- `components/home/timeline-preview.tsx`
- `components/home/featured-people.tsx`
- `components/home/topic-grid.tsx`

Key implementation details:

- Reuse the shared design system from Sprint 1.
- Keep the composition clean and editorial, not app-dashboard oriented.
- Prefer server-compatible patterns where content is static and local.

Verify:

```bash
npm run lint
npm run typecheck
```

### 3. Connect homepage sections to content loaders

Update the homepage route so previews come from validated content rather than
hardcoded placeholder arrays.

Update:

- `app/page.tsx`

Required outcomes:

- the homepage loads preview data from repository-managed content
- missing or invalid data paths fail loudly in development
- the page remains build-safe for static generation

Verify:

```bash
npm run build
```

### 4. Improve metadata and semantic structure

Ensure the public homepage is semantically and structurally ready for search and
sharing.

Update:

- `app/page.tsx` or route-level metadata exports as appropriate

Required outcomes:

- page title and description are specific and not generic starter content
- landmarks and heading structure are coherent
- section labeling supports screen reader and SEO comprehension

Verify:

```bash
npm run lint
npm run build
```

### 5. Add focused homepage tests

Create two additional homepage-focused tests.

Recommended coverage:

- the homepage renders one or more content-driven preview sections
- the page includes a stable landmark or heading structure expected by the
  public shell

Recommended location:

- `tests/app/homepage-sections.test.tsx`
- `tests/app/homepage-metadata-or-structure.test.tsx`

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] The homepage has a defined editorial information architecture
- [ ] Reusable homepage section components exist
- [ ] The homepage reads preview data from validated content loaders
- [ ] Route metadata is project-specific and search-friendly
- [ ] Two new homepage-focused tests pass
- [ ] `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` all pass

## QA Deviations

None.
