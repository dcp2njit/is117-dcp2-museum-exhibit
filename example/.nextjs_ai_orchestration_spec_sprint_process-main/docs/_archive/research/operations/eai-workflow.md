# EAI Workflow

## Purpose

This document records how `eai` is actually used in this repository.

It is not a generic product manual. It is the repository-specific operating
guide verified during Sprint 0 of the history-content-platform feature.

## Verified On

- Date: 2026-03-12
- Local CLI path: `/Users/kwilliams/.local/bin/eai`
- Installed entrypoint imports: `ei_cli.cli.app`

## Verified Environment Mapping

The installed `eai` package expects the OpenAI key in:

```text
API__OPENAI_API_KEY
```

The repository currently stores the OpenAI key in:

```text
OPENAI_API_KEY
```

inside `.env.local`.

For this repository, the verified shell preparation pattern is:

```bash
set -a
source .env.local
set +a
export API__OPENAI_API_KEY="$OPENAI_API_KEY"
```

Do not copy the key value into docs, commits, or chat output.

## Verified Commands

These commands were verified during Sprint 0:

```bash
eai --help
eai search --help
eai image --help
eai speak --help
```

The relevant observed command surface was:

- `eai search QUERY`
  Supports `--output`, `--json`, and `--show-sources`.
- `eai image [PROMPT]`
  Supports generated-image exploration and file output.
- `eai speak [TEXT]`
  Supports text-to-speech output to a specified audio file.

## Repository Use During Sprint 0

The first verified research commands used in this repository were:

```bash
eai search "history of artificial intelligence pre-Shannon McCulloch Pitts 1943 Dartmouth conference Claude Shannon" --show-sources -o docs/_research/topics/pre-shannon-to-dartmouth-search.md
eai search "history of artificial intelligence pre-Shannon McCulloch Pitts 1943 Dartmouth conference Claude Shannon" --show-sources --json > docs/_research/topics/pre-shannon-to-dartmouth-search.json
```

These commands produced durable raw artifacts under `docs/_research/topics/`.

## What EAI Is For In This Repository

At this stage, `eai` is used for:

- web research to generate a first-pass synthesis
- durable capture of raw search output
- planning for future image and audio workflows

It is not yet used in this repository for:

- finalized image generation artifacts
- finalized audio production artifacts
- automated provenance capture by itself

Those later uses must be documented only when they are actually implemented.

## Observed Limitations

The Sprint 0 search run produced a useful synthesis, but the saved Markdown and
JSON artifacts did not preserve source citations on this query even when
`--show-sources` was used.

That means the durable workflow for now is:

1. use `eai search` to generate the first-pass synthesis and save the raw output
2. inspect the saved result
3. manually capture reviewed source URLs in the durable topic memo
4. record any gap between tool output and source traceability explicitly

Do not pretend that a citation-free synthesis already satisfies source capture.

## Artifact Rules

- Save raw `eai` outputs near the topic memo they support.
- Keep topic memos readable without needing the terminal transcript.
- Record the exact query text when it materially affects the research result.
- Distinguish clearly between verified tool behavior and future possibilities.
- If a command fails because the environment is not prepared, record the fix in
  this file once verified.

## Next Planned Uses

- domain-constrained searches for primary or institutionally credible sources
- image-planning support via `eai image --help`-verified workflow
- audio-segment planning using `eai speak`

These are planned directions, not implemented media outputs.
