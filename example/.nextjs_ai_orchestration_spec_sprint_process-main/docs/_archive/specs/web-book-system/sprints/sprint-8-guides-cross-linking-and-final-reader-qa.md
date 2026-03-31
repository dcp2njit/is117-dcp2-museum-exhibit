# Sprint 8 — Guides, Cross-Linking, And Final Reader QA

## Header

- Goal: finalize the guide page role, strengthen cross-linking across the site,
  and complete the final reader-centered QA pass.
- Spec sections:
  - Accessibility Requirements
  - Responsive Composition Requirements
  - Content Specification
  - Narrative Site Map Matrix
  - Testing And Quality Gates
  - Success Criteria
- Prerequisite: `feat: implement Web Book System Sprint 7 — People, Institutions, And Cast Logic`
- Expected test count: `16 existing + targeted updates = 16+ total`

## Available Assets

| Asset                                                      | Verified details                    | How this sprint uses it                         |
| ---------------------------------------------------------- | ----------------------------------- | ----------------------------------------------- |
| `app/guides/embeddings-latent-space-and-llm-math/page.tsx` | Existing guide route                | Finalize concept-bridge role                    |
| `lib/site-navigation.ts`                                   | Global route labels and shell paths | Must remain aligned with the final reader model |
| homepage, era pages, reading map, people route             | Implemented in earlier sprints      | Final cross-linking and QA targets              |
| `tests/`                                                   | Existing suite                      | Update targeted tests and run full verification |

## Tasks

### 1. Finalize the guide page as a concept bridge

Required outcomes:

- guide explains technical concepts without behaving like a detached mini-site
- page hands readers back to the relevant modern eras

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Audit and tighten cross-linking across page roles

Required outcomes:

- homepage to era to evidence to guide path is clear
- evidence and cast pages always provide a route back to chronology
- shell labels match page-language expectations

Verify:

```bash
npm run build
```

### 3. Run final reader QA

Required review passes:

- accessibility
- responsive review at `390px`, `768px`, `1024px`, `1280px`, `1440px`, `1728px`
- Brockmann, Tschichold, Warde, and Vignelli lens audit

Verify:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

## Completion Checklist

- [ ] Guide route is clearly subordinate to the main narrative spine
- [ ] Cross-linking between page roles is coherent and low-friction
- [ ] Full responsive and accessibility review completed
- [ ] Final suite verification passes
- [ ] Site meets success criteria from the master spec

## QA Deviations

None.
