# Sprint 0 — Homepage And Navigation Chapter

## Header

- Goal: turn the homepage into a true opening chapter and align the site's top
  navigation language with that stronger story model.
- Spec sections:
  - Problem Statement 1, 4, 5
  - Design Goals 1, 3, 4, 5
  - Architecture: Target Routes, Homepage Model
  - Testing Strategy: Required Test Categories, Baseline
- Prerequisite: `feat: implement Reading System Sprint 0 — shared chapter patterns`
- Expected test count: `13 existing + 1 new = 14 total`

## Available Assets

| Asset                         | Verified details                                                                                                                     | How this sprint uses it                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `app/page.tsx`                | Currently renders hero actions plus sections for Primary Paths, Chronology, Narrative Threads, Learning Bridges, and Grounding Layer | Becomes the opening-chapter surface                                |
| `lib/site.ts`                 | Exports `siteConfig` with site name, title, and story-led description                                                                | Supplies the homepage thesis and metadata language                 |
| `lib/site-navigation.ts`      | Exports `primaryNavigation`, `secondaryNavigation`, and `footerNavigation`                                                           | Allows navigation labels to align with the updated reading journey |
| `tests/app/homepage.test.tsx` | Verifies the current homepage headings and key route links                                                                           | Must be updated to the new opening-chapter structure               |

## Tasks

### 1. Refactor the homepage hero into a narrative opener

Replace the current overview-first top section with a chapter-style opener that
states:

- why AI history matters now
- what kind of story the user is entering
- where the strongest first reading paths begin

Key implementation details:

- Use the shared chapter system rather than inventing a page-local pattern.
- Preserve the current three-path entry logic, but subordinate it to a clear
  opening thesis.

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Add a visual or systems-style orientation block to the homepage

Create one memorable orientation block that helps readers understand how eras,
people, institutions, and concept bridges fit together.

This may be:

- a static diagram
- a structured comparison grid
- a chapter map built from existing content types

Verify:

```bash
npm run lint
npm run build
```

### 3. Align header and footer language with the new opening-chapter model

Update `lib/site-navigation.ts` and, if needed, the header/footer copy so the
site shell reinforces the same narrative framing as the new homepage.

Verify:

```bash
npm run lint
```

### 4. Update homepage test coverage

Revise `tests/app/homepage.test.tsx` so it asserts on the new opening chapter,
orientation block, and preserved major pathways.

Verify:

```bash
npm run test
npm run build
```

## Completion Checklist

- [ ] Homepage opens with a stronger narrative thesis
- [ ] The homepage includes a memorable orientation block
- [ ] Header/footer language aligns with the updated story model
- [ ] Homepage smoke coverage reflects the new structure
- [ ] Full verification passes

## QA Deviations

None.
