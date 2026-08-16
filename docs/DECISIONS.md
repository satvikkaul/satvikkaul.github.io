# Decisions

Append-only. Newest first. One `##` heading per decision so it stays greppable.

`PRODUCT.md` records what is currently true. This file records why.

## 2026-08-15 — Visual world replaced: "The VU-Meter Bridge"

- Context: requested redesign. Ran the impeccable direction workshop (seed key
  `33213d0a`, Persuade mode) — seven grounded candidates derived from ML practice,
  weighed against six catalog challengers
- Decision: the VU-meter bridge, a *competitive challenger* that beat the assigned
  direction. Identical instruments in a row; the row is the comparison. Metrics
  become channels; only a result with a published baseline leans past zero into red
- Rejected: the assigned roll (OpenTelemetry trace waterfall), Impeccable's pick
  (the ablation table, honest risk: where most research portfolios land), the
  fluorescent duotone spread, and four declined challengers
- **Supersedes "The Herbarium Press" entirely.** That world was the category's
  predictable opposite — this category ships either near-black-with-neon or
  warm-cream-with-serif, and the old site was the second. Both were excluded from
  the candidate list
- Type moved to Anton + Archivo. The previous DM Serif Display / Space Grotesk
  pairing was flagged as over-used and is gone
- Build was code-led: no image generation available in this environment, so the
  ambition lives in the direction contract in `index.html` rather than in a comp

## 2026-08-15 — Repositioned from student to engineer-and-researcher

- Context: an updated resume revealed an ML/AI Engineer role at Ampere Digital
  (Nov 2024 – present) that the site never mentioned, plus an August 2026
  graduation, GPA 4.28, and a conference shortlist
- Decision: hero now reads "Machine Learning & AI Engineer" with production
  GenAI and SSL research weighted equally. This **closes** the positioning
  question left open earlier the same day
- Rejected: "production ML/AI engineer" alone (buries conference-shortlisted
  research), "keep it student-first" (understates current work)
- Also: audience retargeted from co-op/new-grad to full-time ML/AI engineering;
  contact email moved to satvikkaul123@gmail.com because the torontomu.ca
  address expires with the degree; phone deliberately kept off the site
- Content: Recipe Recommender System replaces the stale "NutriSnap prototype"
  card with its real metrics; Java URL Shortener and Secure Pathology Dashboard
  added; Pizza Nova deliberately excluded

## 2026-08-15 — Fixed silent GitHub API lookup failures

- Context: `script.js` matches `project.name` against live GitHub API repo names
  via a case-sensitive Map
- Decision: corrected `Masked_auto_encoder` → `Masked_Auto_Encoder` and
  `Smart-Resume-Analyzer` → `smart-resume-analyzer` to match the real repos
- Why it mattered: the lookup failed silently, so those two cards were quietly
  missing their live repo data with no error anywhere
- Guard: any new entry's `name` must be verified against
  `api.github.com/users/satvikkaul/repos` before it ships

## 2026-08-15 — Visual North Star: "The Herbarium Press"

- Context: `/impeccable document` extracted the tokens from `styles.css` but
  needed a metaphor to organize them
- Decision: "The Herbarium Press" — specimens mounted and labelled on pressed
  paper, calm at rest, tactile on contact
- Rejected: "The Field Notebook" (leans on work-in-progress honesty), "The Quiet
  Laboratory" (leans on the medical-imaging work)
- Also chosen: Deep Botanical Green / Pressed Terracotta as accent names;
  component feel is "tactile and responsive"
- Note: this documents the incumbent CSS, it does not change it. `DESIGN.md` is
  intent, `styles.css` is implementation — a visual change updates both

## 2026-08-15 — Positioning left deliberately undecided

- Context: `/impeccable init` asked what a visitor should remember that a
  neighboring CS-student portfolio couldn't truthfully claim
- Decision: record both candidate claims, commit to neither
- Rejected: picking "research-grade ML that also ships" or "medical imaging
  specialist" as a single headline — the owner's position is that it depends on
  who is visiting, and both are truthfully supported by the work
- Revisit when: a redesign needs a hero headline, or the audience narrows

## 2026-08-15 — Stack is not a durable constraint

- Context: init asked whether the vanilla-static setup must be preserved
- Decision: treat plain HTML/CSS/JS on GitHub Pages as convenience, not
  commitment; a framework, build step, or different host is on the table if a
  redesign earns it
- Kept in spirit: centralized content in `site-data.js`, whatever the stack
- Revisit when: a design direction actually requires tooling

## 2026-08-15 — `.claude/` gitignored, memory dir is the private slot

- Context: agent tooling (impeccable skill, hooks, local settings) landed in
  `.claude/`
- Decision: ignore `.claude/` wholesale; private/candid notes go to the
  Claude Code memory dir outside the repo, which is auto-loaded per session
- Rejected: a committed `.claude/notes.md` scratchpad — duplicates the memory
  dir, and nothing loads it automatically
- Note: this repo is public, and `.nojekyll` means dot-directories are served
  too. Committed = public. `.gitignore` is the only boundary.
