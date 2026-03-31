# Sprint 1 — CI/CD Pipeline & GitHub Pages Deployment

## Header

- **Goal:** Build the GitHub Actions workflow with all quality gates, integrate
  Lighthouse CI, and deploy the static site to GitHub Pages.
- **Spec sections:** Design goals 1–3, 5; Architecture (GitHub Actions,
  Lighthouse CI)
- **Prerequisite:** Sprint 0 (static export configured, foundation doc written)

## Available Assets

| Asset                  | Location                                                | Current State                                |
| ---------------------- | ------------------------------------------------------- | -------------------------------------------- |
| `next.config.ts`       | root                                                    | Static export configured (Sprint 0)          |
| `out/`                 | (build output)                                          | Produced by `npm run build`                  |
| `package.json`         | root                                                    | All quality scripts present                  |
| `playwright.config.ts` | root                                                    | CI-aware config with `process.env.CI` checks |
| `eslint.config.mjs`    | root                                                    | Flat config, core-web-vitals + TypeScript    |
| `.prettierrc`          | root                                                    | Configured                                   |
| Git remote             | `kaw393939/nextjs_ai_orchestration_spec_sprint_process` | GitHub repository                            |
| `README.md`            | root                                                    | Deployment section added in Sprint 0         |
| `agent.md`             | root                                                    | Verification rules section exists            |

## Tasks

### 1. Install Lighthouse CI

```bash
npm install --save-dev @lhci/cli
```

Add a Lighthouse script to `package.json`:

```json
"lighthouse": "lhci autorun"
```

**Verify:** `npx lhci --version` returns a version number.

### 2. Create Lighthouse configuration

Create `lighthouserc.json` at the project root:

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./out",
      "url": ["/", "/eras/precursors-to-machine-intelligence"],
      "numberOfRuns": 1
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", { "minScore": 0.8 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["warn", { "minScore": 0.9 }],
        "categories:seo": ["warn", { "minScore": 0.9 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

- Accessibility is `error` (blocks deploy)
- Performance, best practices, SEO are `warn` (visible, non-blocking)
- Tests against homepage and one era page for coverage

**Verify:**

```bash
npm run build && npx lhci autorun
```

Lighthouse runs and reports scores. Accessibility must be >= 0.9.

### 3. Create GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Build, Test & Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - name: Format check
        run: npm run format:check

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npm run typecheck

      - name: Unit tests
        run: npm run test

      - name: Build static site
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /nextjs_ai_orchestration_spec_sprint_process

      - name: Lighthouse CI
        run: npx lhci autorun

      - name: Upload build artifact
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    needs: quality
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Key design decisions:

- Quality gates run sequentially so the first failure stops the pipeline
- Build uses `NEXT_PUBLIC_BASE_PATH` for correct GitHub Pages routing
- Deployment only happens on push to `main`, not on PRs
- Concurrency prevents overlapping deployments
- Permissions are minimal (read contents, write pages)

**Verify:** Commit and push. Check the Actions tab on GitHub for a green run.

### 4. Add CI badge to README.md

Add immediately after the H1 heading in `README.md`:

```markdown
[![Build, Test & Deploy](https://github.com/kaw393939/nextjs_ai_orchestration_spec_sprint_process/actions/workflows/deploy.yml/badge.svg)](https://github.com/kaw393939/nextjs_ai_orchestration_spec_sprint_process/actions/workflows/deploy.yml)
```

**Verify:** Badge renders in GitHub (will show "no status" until first CI
run).

### 5. Update agent.md verification rules

Add the CI workflow to the verification rules section. After the existing
"Common repository verification commands" block, add:

```markdown
### CI/CD Pipeline

The GitHub Actions workflow at `.github/workflows/deploy.yml` runs these gates
automatically on every push to `main`:

1. `npm run format:check`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test`
5. `npm run build`
6. `npx lhci autorun` (Lighthouse CI)

If any gate fails, the deployment to GitHub Pages is blocked. Check the
Actions tab on GitHub for the status of each run.
```

Also add `docs/foundation/verification-and-deployment.md` to the Primary
Reference Files list.

**Verify:** `grep "deploy.yml" agent.md` returns a match.

### 6. Update the live URL in README

After the first successful deployment, confirm the live URL works:

```
https://kaw393939.github.io/nextjs_ai_orchestration_spec_sprint_process/
```

Update the README Deployment section with the confirmed URL.

**Verify:** Visit the URL in a browser. Homepage renders with all four
sections.

## Completion Checklist

- [ ] `@lhci/cli` installed, `npm run lighthouse` script added
- [ ] `lighthouserc.json` exists with accessibility error threshold
- [ ] `.github/workflows/deploy.yml` exists with all quality gates
- [ ] CI badge added to README.md
- [ ] agent.md verification rules updated with CI pipeline
- [ ] `docs/foundation/verification-and-deployment.md` in Primary Reference
      Files
- [ ] First CI run completes on GitHub Actions (all gates green)
- [ ] GitHub Pages deployment serves the live site
- [ ] Live URL confirmed working in README

## QA Deviations

1. **Lighthouse URL must match the exported route shape.** With
   `trailingSlash: true`, Next.js static export serves the era route from
   `out/eras/precursors-to-machine-intelligence/index.html` via the public URL
   `/eras/precursors-to-machine-intelligence/`. The `lighthouserc.json` URL was
   updated to the directory route to match what the local static server
   actually serves.
2. **Task 6 (live URL verification) deferred.** Confirming the live URL
   requires pushing to `main` and enabling GitHub Pages in the repository
   settings. The URL is already in README.md; verification happens on first
   real deployment.
