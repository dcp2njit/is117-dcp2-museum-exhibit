# Research Workspace

This directory is the durable research layer for the AI history content
platform.

It exists so research decisions, source capture, and media-planning work survive
across chat resets and later implementation sprints.

## Structure

- `operations/`
  Verified workflow notes for tools used in this repository, including `eai`.
- `templates/`
  Durable patterns for repeatable research artifacts.
- `topics/`
  Topic-level research memos and raw supporting outputs.

## Working Rules

- Keep raw tool outputs and distilled memo artifacts together, but not mixed.
- Every topic memo should name its question, scope, sources, open questions, and
  next-use path.
- Source capture should be explicit even when a tool returns a good synthesis.
- Media ideas belong in topic memos early so later sprints can connect research
  to diagrams, images, and audio without redoing discovery.
- Do not store secrets, tokens, or copied `.env.local` values in this directory.

## Seed Artifacts

Sprint 0 establishes these initial artifacts:

- `operations/eai-workflow.md`
- `templates/research-memo-template.md`
- `topics/pre-shannon-to-dartmouth.md`
- `topics/pre-shannon-to-dartmouth-search.md`
- `topics/pre-shannon-to-dartmouth-search.json`
