# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: **recruiters and screeners for full-time ML/AI engineering roles**,
skimming quickly between many candidates, deciding whether to pass Satvik on.
Success for them is a fast, confident read.

Updated 2026-08-15: this was previously co-op / new-grad. Satvik graduates
August 2026 and has been an ML/AI engineer at Ampere Digital since November 2024.
All co-op language is retired.

Also visiting, and explicitly served underneath that skim:

- **Engineering hiring managers** who will open the GitHub repos and read case
  studies to judge actual technical depth.
- **Research supervisors and lab leads** evaluating the medical-imaging and
  self-supervised learning work.

Confirmed priority: recruiter-first. The fast skim must work standalone; depth is
available beneath it for whoever digs, and must not be a prerequisite for the skim
to make sense.

## Product Purpose

A personal portfolio at `satvikkaul.github.io` that converts a short visit into an
interview conversation. It exists to show two things at once: research-grade applied
ML, and the ability to ship working software. Success is an inbound conversation
about ML, software engineering, or research work.

## Positioning

**Resolved 2026-08-15: engineer and researcher, weighted equally.**

Two tracks held in parallel, both real and both currently active:

- **Production Generative AI engineer** — Ampere Digital since Nov 2024:
  intelligent document processing, RAG and agent workflows, decision-support
  classifiers, and the LLM-as-judge evaluation and monitoring around them.
- **Self-supervised learning researcher** — TMU Advanced AI Lab (AI²) since
  Sept 2025: four-class Gleason grading, conference-shortlisted with a
  manuscript in preparation.

The claim a neighboring portfolio cannot truthfully copy is the *combination*:
production GenAI shipped against real accuracy thresholds, plus peer-reviewable
research with published numbers. Neither half may be demoted to a footnote. The
earlier open question (research-vs-imaging-specialist) is closed — it was framed
before the Ampere role was known.

## Operating Context

- Visitors arrive from a resume link, LinkedIn, GitHub profile, or a recruiter's
  search. Many arrive on mobile.
- The visit is short and comparative — the page is read next to other candidates'.
- The resume PDF download and the outbound project links (live demo, API docs,
  GitHub) are the real exits that matter.

## Capabilities and Constraints

Current implementation (incumbent, static GitHub Pages):

- `index.html` — hero, quick facts, about, skills, featured projects, contact
- `pages/resume.html` — resume snapshot + PDF download
- `pages/case-study.html` — one reusable template rendered per-project from data
- `assets/js/site-data.js` — single source for all profile, project, and case-study
  content; `script.js` and `case-study.js` render from it
- `.nojekyll` — served as plain static files; no build step, no npm, no framework

**The stack is explicitly NOT a durable constraint.** The user confirmed they are
open to changing it, including a build step, a framework, or moving off GitHub
Pages, if the design calls for it. The centralized-content pattern in
`site-data.js` is a convenience worth preserving in spirit, not a hard requirement.

## Evidence on Hand

Real and usable:

- Live demo: Smart Resume Analyzer — `https://job-fit-analyzer.netlify.app/`
- Live API docs — `https://smart-resume-analyzer-2nwb.onrender.com/docs`
- Public GitHub repos for all four featured projects
- Resume PDF at `assets/documents/satvik_kaul_resume.pdf`
- Real research substance: SICAPv2 patches, Gleason grading, autoencoder SSL,
  SimCLR, MoCo v2, MAE + ViT, class-imbalance handling, QWK / Macro-F1 evaluation

Credentials, from the August 2026 resume (`pages/resume.html` is hardcoded, **not**
driven by `site-data.js`):

- **ML and AI Engineer, Ampere Digital** (Nov 2024 – present, remote)
- **Research Assistant, TMU Advanced AI Lab (AI²)** (Sept 2025 – present)
- **Teaching Assistant, TMU** (Sept 2025 – present)
- IT Analyst, Ministry of the Attorney General (Jan 2024 – Oct 2024)
- System Support Officer, Co-op, Ministry of the Attorney General (May 2021 –
  Aug 2021)
- MSc Computer Science, TMU, Sept 2025 – **August 2026**, **GPA 4.28 / 4.33**
- BSc Information Technology, Centennial College, 2019 – 2023, **GPA 3.8 / 4.0**
- Gleason SSL work is **shortlisted for a conference, manuscript in preparation**

Deliberately excluded: Pizza Nova team lead (Aug 2019 – Dec 2023). Real, but the
newer technical experience is stronger evidence; revisit only if a leadership
section is ever added.

Quantified results — all real, all sourced from the resume PDF, and **none of them
currently appear anywhere on the site**:

- Ampere Digital: **88% first-pass structured-field accuracy** across 250+ aviation
  documents, review time cut from ~7 minutes to **under 60 seconds**; agent-turn
  latency down **~40%** across **1,200+ guided interactions/month**; a classifier
  on ~3,000 labeled decisions at a **0.97-precision threshold** automating **~60%**
  of extracted-field decisions.
- Gleason SSL: CAE reaches **62.8% downstream accuracy, Cohen's κ = 0.500**,
  against a supervised baseline of **47.6%, κ = 0.341**. SimCLR baseline is
  **37.6%, κ = 0.067**. Tracked under cross-fold validation.
- AI² pathology app: cloud evaluation across **15 infrastructure configurations**
  on AWS/Azure/GCP for a HIPAA/PHIPA-aligned deployment.
- Recipe Recommender: **NDCG@10 = 0.035** (3.6× popularity, +23.7% vs. matrix
  factorization), **HR@10 = 0.267, MRR = 0.108, coverage 34.2%**; image classifier
  Top-1 50–65%, Top-5 85–90%; EfficientNet-B2 + two-tower GRU over 1.1M Food.com
  interactions; end-to-end latency **<300ms**.
- Ministry of the Attorney General: workflows streamlined 25%, input errors down
  15%, response time improved 20%, helpdesk escalations down ~30%, 10+ hearing
  rooms, 10+ training guides, 5,000+ monthly users on the Ontario Land Tribunals
  site, database of all 444 Ontario municipalities.
- Pizza Nova: 20+ member team, 18% productivity gain, 30% reduction in task
  completion delays.

Also in the PDF but missing from the site: **Teaching Assistant, TMU (Sept 2025 –
present)**; **Pizza Nova team leader (Aug 2019 – Dec 2023)**; **BSc Information
Technology, Centennial College, GPA 3.8 (2019–2023)**; and a **Java URL Shortener**
project.

**Absences future work must not fabricate:**

- No testimonials, no press, no awards, no named clients beyond the employers above.
- No demo link for the Gleason projects, the pathology dashboard, or the URL shortener.
- The conference is **shortlisted, not accepted**, and the manuscript is **in
  preparation, not published**. Never upgrade either.
- `assets/documents/satvik_kaul_resume.pdf` is current as of 2026-08-15 and is a
  **targeted one-pager**: Ampere Digital, the AI² research role, and the Ministry
  IT Analyst role only. `pages/resume.html` is deliberately a superset — it also
  carries the Teaching Assistant and System Support Officer roles, the research
  entries, and selected projects. Keep the page fuller than the PDF; do not prune
  it to match.
- `Nutri-Snap` is a separate real repo (TensorFlow Food-101, ~85% accuracy,
  FastAPI + PostgreSQL, 500+ uploads, React/Vite, <2s classification) that is
  deliberately not featured. Do not merge it into the Recipe Recommender card —
  conflating the two is what produced the stale description in the first place.

Design must make an honest in-progress project look intentional rather than
manufacture proof for it — but note that the real proof here is stronger than the
site currently claims, so the failure mode to watch is *understating*, not
inflating.

## Product Principles

1. **The 30-second skim is the product.** A recruiter who reads nothing but the
   first viewport should still leave with an accurate impression.
2. **Depth is layered, never required.** Case studies and repos reward the reader
   who digs; the top-level read never depends on them.
3. **Honest status over manufactured completeness.** Research-in-progress and
   prototype are stated plainly; unfinished work is framed, not inflated.
4. **Two audiences, one page.** Nothing that helps the recruiter may obscure the
   technical depth a hiring manager or supervisor came for.
5. **Content stays centralized.** Copy and project data live in one editable place,
   not scattered through markup.

## Accessibility & Inclusion

No product-specific standard has been established. Baseline accessibility applies:
the site must work on mobile, be keyboard-navigable, and meet contrast minimums —
a recruiter skimming on a phone is the primary described visit.
