# CLAUDE.md — satvikkaul.github.io

Personal portfolio, plain static site on GitHub Pages (no build step, no npm).
Audience: recruiters skimming fast. Goal: convert a visit into an interview.

## Hard rules

- NEVER fabricate metrics, testimonials, employers, or benchmarks. Real metrics
  DO exist — they're listed in `PRODUCT.md` under Evidence on Hand, sourced from
  `assets/documents/satvik_kaul_resume.pdf`. Quote those; invent nothing beyond
  them. The PDF is currently the most complete record and the site understates it.
- Homepage and case-study content lives in `assets/js/site-data.js` — edit it
  there, never in HTML. **Exception:** `pages/resume.html` is hardcoded and is the
  only source for education, GPA, and employment history. The README's "all
  content is centralized" claim does not hold for it.
- No build step, no package.json. Static-until-decided; a stack change gets an
  entry in `docs/DECISIONS.md` first.
- A project's `name` must exactly match a real GitHub repo — `script.js` looks it
  up case-sensitively against the live API and fails silently if it doesn't.
  Verify against `api.github.com/users/satvikkaul/repos` before shipping one.
- `visualType: "mock-ui"` renders hardcoded Smart Resume Analyzer content
  (`case-study.js:40`). Only that project may use it; everything else uses
  `"flow"` with `visualSteps`.
- This repo is PUBLIC and Pages serves committed files as-is, dot-prefixed or
  not. `.gitignore` is the only privacy boundary. Never commit anything you
  wouldn't show a recruiter.

## Where things live (don't duplicate these)

- `README.md` — how the site is built and structured
- `PRODUCT.md` — product truth; own schema, owned by the impeccable skill, don't
  restructure it
- `DESIGN.md` — the visual system: tokens in frontmatter (normative), prose for
  how to apply them. Derived from `styles.css`; a visual change updates both.
- `.impeccable/design.json` — sidecar for what the DESIGN.md schema can't hold:
  shadows, motion, breakpoints, tonal ramps, component snippets. Regenerate with
  `DESIGN.md`, never independently.
- `docs/DECISIONS.md` — why choices were made; append-only, newest first
- `assets/js/site-data.js` — the only content source
- Persistent memory (private, local, auto-loaded, outside this repo):
  `~/.claude/projects/-Users-satvikkaul-Developer-Github-Portfolio/memory/`

## Working notes

Anything durable and public-safe goes in its home file at the moment it's
decided, not at session end. Anything private or candid goes to the memory dir
above. There is deliberately no scratchpad file to drain.
