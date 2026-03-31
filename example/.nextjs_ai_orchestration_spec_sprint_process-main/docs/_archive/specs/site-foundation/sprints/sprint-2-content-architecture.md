# Sprint 2 — Content Architecture

## Header

- Goal: establish repository-managed content structure, schema validation, and
  loader utilities for future editorial collections.
- Spec sections:
  - Design Goals 2, 4, 6
  - Architecture: Content Model Foundation, Rendering Model, Initial Directory
    Conventions, Application Platform
  - Security: Content Validation, Safe Asset and File Handling
  - Testing Strategy: Schema and Utility Tests, Mocking and Isolation
- Prerequisite: `feat: implement Sprint 1 — design system foundation`
- Expected test count: `3 existing + 3 new = 6 total`

## Available Assets

This sprint is authored before Sprints 0 and 1 are implemented. During Sprint
Doc QA, replace placeholder file assumptions with the exact outputs from the
prerequisite sprint commit.

| Asset          | Expected verified details at QA time     | How this sprint uses it                   |
| -------------- | ---------------------------------------- | ----------------------------------------- |
| `package.json` | Existing app scripts and UI dependencies | Adds content-processing dependencies      |
| `app/`         | Existing root app shell                  | Prepares for future content-driven routes |
| `lib/`         | Shared utilities exist from Sprint 1     | Adds content schemas and loader helpers   |
| `tests/`       | Existing smoke and UI tests              | Adds schema and loader coverage           |

## Tasks

### 1. Add content-processing dependencies and directory structure

Introduce the minimum dependencies and directories needed for repository-managed
content.

Create directories:

- `content/articles/`
- `content/timeline/`
- `content/people/`

Recommended dependencies:

- `zod`
- `gray-matter`

Key implementation details:

- Keep content repository-managed.
- Do not introduce a CMS or database.
- Do not add MDX rendering yet unless it is required by the chosen loader
  implementation.

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Define content schemas and collection types

Create the shared validation layer for core collection metadata.

Create:

- `lib/content/schemas.ts`

Required schema coverage:

- article metadata
- timeline milestone metadata
- person or organization profile metadata

Each schema should validate fields relevant to a history site, such as:

- slug
- title
- summary
- date or era labels where applicable
- tags or topics where applicable
- published status or ordering metadata where applicable

Verify:

```bash
npm run typecheck
```

### 3. Add example content entries

Create small but realistic seed files for each collection.

Create at least one example file in each collection directory with valid,
project-appropriate frontmatter and placeholder body content.

Key implementation details:

- Content should be specific to the AI history subject area.
- The examples should be stable enough for homepage previews in Sprint 3.
- Keep examples lightweight and editorially credible.

Verify:

```bash
npm run build
```

### 4. Implement content loaders and collection helpers

Create shared utilities that can safely read collection files, parse metadata,
validate frontmatter, and return sorted summaries.

Create:

- `lib/content/loaders.ts`

Required outcomes:

- loaders only read from repository-controlled content directories
- invalid frontmatter throws actionable errors
- collection summaries are sortable for future route and homepage use

Keep the API small. A good baseline is one loader per collection plus one or
more shared helper functions for filesystem parsing and sorting.

Verify:

```bash
npm run typecheck
npm run build
```

### 5. Add schema and loader tests

Create targeted tests for validation and collection behavior.

Recommended coverage:

- valid frontmatter parses successfully
- invalid frontmatter fails with a clear error
- collection summaries are returned in the intended order

Recommended locations:

- `tests/content/schemas.test.ts`
- `tests/content/loaders.test.ts`
- one additional focused test if needed for sorting or path safety

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Content collection directories exist
- [ ] Zod-based content schemas exist
- [ ] Example AI history content entries exist for each collection
- [ ] Shared content loaders read only repository-managed directories
- [ ] Invalid content fails clearly during validation
- [ ] Three new content-focused tests pass
- [ ] `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` all pass

## QA Deviations

None.
